const parser = require("node-html-parser");
const fetch = require("node-fetch");
const utils = require("./utils");

const SITES_TO_CHECK = [
  {
    url:
      "https://www.nedgame.nl/playstation-5/playstation-5--levering-begin-2021-/6036644854/",
    buttonSelector: ".koopbutton",
  },
  {
    url:
      "https://www.bol.com/nl/p/sony-playstation-5-console/9300000004162282/",
    buttonSelector: ".js_btn_buy",
  },
  {
    url:
      "https://www.amazon.nl/Sony-PlayStation-PlayStation%C2%AE5-Console/dp/B08H93ZRK9",
    buttonSelector: "#buybox-see-all-buying-choices",
  },
  {
    url:
      "https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H95Y452/",
    buttonSelector: "#buybox-see-all-buying-choices",
  },
  {
    url: "https://www.coolblue.nl/product/865866/playstation-5.html",
    buttonSelector: ".js-add-to-cart-button",
  },
  {
    url:
      "https://www.amazon.fr/PlayStation-%C3%89dition-Standard-DualSense-Couleur/dp/B08H93ZRK9",
    buttonSelector: "#buybox-see-all-buying-choices",
  },
  {
    url:
      "https://www.amazon.es/Playstation-Consola-PlayStation-5-Digital/dp/B08KKJ37F7",
    buttonSelector: "#buybox-see-all-buying-choices",
  },
  {
    url:
      "https://www.gamemania.nl/Consoles/playstation-5/144093_playstation-5-disc-edition#",
    buttonSelector: ".js-addToCart",
  },
];

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

  // check mediamarkt
  fetch("https://www.mediamarktlabs.nl/api/realtime/?product=1664768")
    .then((resp) => resp.json())
    .then((json) => {
      Object.keys(json).forEach((respkey) => {
        var hasStock = Object.keys(json[respkey]).some(
          (stockKey) => json[respkey][stockKey].hasStock
        );
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
