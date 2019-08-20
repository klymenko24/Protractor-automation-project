const BasePage = require('./BasePage');

class TransactionPage extends BasePage {
    constructor() {
        super();
        this.transactionPage = $('button[ng-click="transactions()"]');

    }

    async enterTranPage() {
        await this.transactionPage.click()
    }

    async checkNumber() {
        await element(by.cssContainingText('.ng-binding', '12')).isPresent()
        await element(by.cssContainingText('.ng-binding', '13')).isPresent()
        await element(by.cssContainingText('.ng-binding', '100')).isPresent()
        return element(by.cssContainingText('.ng-binding', '50')).isPresent()
    }

    async transactionList() {

        const items = await $$('tbody tr').map(item => {
            return {amount: item.$('td:nth-of-type(2)').getText(), transactionType: item.$('td:nth-of-type(3)').getText()}
        });
        return items

    };


}


module.exports = TransactionPage;
