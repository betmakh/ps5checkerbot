
describe('Check my PS5', ()=> {
    const utils  = require('../../utils');

    it('Checks nedgame.nl', () => {
        const url = 'https://www.nedgame.nl/playstation-5/playstation-5--levering-begin-2021-/6036644854/'

        cy.visit(url)
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('.koopbutton')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                console.log('PS 5 IS not available: ' + url)
            }
        })
    })

    it('Checks Bol.com', () => {
        const url = 'https://www.bol.com/nl/p/sony-playstation-5-console/9300000004162282/'
        cy.visit(url)

        cy.get('.js-confirm-button').click();
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('.js_btn_buy')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                utils.sendUpdate({text : ('PS 5 is NOT available: ' + url)})
            }
        })
    })

    it('Checks Amazon.nl', () => {
        const url = 'https://www.amazon.nl/Sony-PlayStation-PlayStation%C2%AE5-Console/dp/B08H93ZRK9'

        cy.visit(url)
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('#buybox-see-all-buying-choices')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                console.log('PS 5 IS not available: ' + url)
            }
        })
    })

    it('Checks Amazon.co.uk', () => {
        const url = 'https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H95Y452/'

        cy.visit(url)
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('#buybox-see-all-buying-choices')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                console.log('PS 5 IS not available: ' + url)
            }
        })
    })

    it('Checks coolblue.nl', () => {
        const url = 'https://www.coolblue.nl/product/865866/playstation-5.html'

        cy.visit(url)
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('.js-add-to-cart-button')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                console.log('PS 5 IS not available: ' + url)
            }
        })
    })

    it('Checks mediamarkt.nl', () => {
        const url = 'https://www.mediamarkt.nl/nl/product/_sony-playstation-5-disk-edition-1664768.html'

        cy.visit(url)
        cy.get('.gdpr-cookie-layer__btn--submit--all').click();
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('#pdp-add-to-cart')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                console.log('PS 5 IS not available: ' + url)
            }
        })
    })

    it('Checks Amazon.fr', () => {
        const url = 'https://www.amazon.fr/PlayStation-%C3%89dition-Standard-DualSense-Couleur/dp/B08H93ZRK9'

        cy.visit(url)
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('#buybox-see-all-buying-choices')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                console.log('PS 5 IS not available: ' + url)
            }
        })
    })

    it('Checks Amazon.es', () => {
        const url = 'https://www.amazon.es/Playstation-Consola-PlayStation-5-Digital/dp/B08KKJ37F7'

        cy.visit(url)
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('#buybox-see-all-buying-choices')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                console.log('PS 5 IS not available: ' + url)
            }
        })
    })

    it('Checks gamemania.nl', () => {
        const url = 'https://www.gamemania.nl/Consoles/playstation-5/144093_playstation-5-disc-edition#'

        cy.visit(url)
        cy.get('body').should(($body)=> {
            var AddToBasketButton = $body.find('.js-addToCart')
            if (AddToBasketButton && AddToBasketButton.length) {
                utils.sendUpdate({text : ('PS 5 available: ' + url)})
            } else {
                console.log('PS 5 IS not available: ' + url)
            }
        })
    })
    
})