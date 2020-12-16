const parser = require("node-html-parser");
const fetch = require("node-fetch");
const utils = require("./utils");

const generateSitesData = () => {
  let totalSites = 1;
  const result = [];
  while (process.env["SITE_" + totalSites]) {
    let currentLine = process.env["SITE_" + totalSites];
    let fields = currentLine.split(";");
    result.push({ url: fields[fields.length - 2], buttonSelector: fields[fields.length - 1] });
    totalSites++;
  }
  return result;
};

const SITES_TO_CHECK = generateSitesData();
console.log("SITES_TO_CHECK :", SITES_TO_CHECK);

const runAvailabilityCheck = () => {
  SITES_TO_CHECK.forEach((site) => {
    fetch(site.url)
      .then((resp) => {
        if (!resp.ok) {
          console.error(resp.statusText + " Error while fetching " + site.url);
        }
        return resp.text();
      })
      .then((html) => {
        const doc = parser.parse(html);
        const buyButton = doc.querySelector(site.buttonSelector);
        if (buyButton) {
          utils.sendUpdate({
            text: "Stock is available here " + site.url,
          });
        }
      });
  });

  // check mediamarkt separately because it's special
  fetch("https://www.mediamarktlabs.nl/api/realtime/?product=1664768")
    .then((resp) => resp.json())
    .then((json) => {
      Object.keys(json).forEach((respkey) => {
        var hasStock = Object.keys(json[respkey]).some((stockKey) => json[respkey][stockKey].hasStock);
        if (hasStock) {
          utils.sendUpdate({
            text:
              "Stock is available here " +
              "https://www.mediamarkt.nl/nl/product/_sony-playstation-5-disk-edition-1664768.html",
          });
        }
      });
    });
};

module.exports = { runAvailabilityCheck: runAvailabilityCheck };
