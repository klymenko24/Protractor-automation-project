const BasePage = require('./BasePage');

class CustomerPage extends BasePage {
    constructor() {
        super();
        this.depositBtn = '.btn';
        this.depositAmount = $('.form-control');
        this.clickButtonDeposit = $('button[type="submit"]');
        this.succsessfulNotification = '.ng-binding';
    }


    async depositClick() {
        return element(by.cssContainingText(this.depositBtn, 'Deposit')).click()
    }


    async enterAmount(number) {
        await this.waitForElement(this.depositAmount)
        await this.depositAmount.sendKeys(number)
        await this.clickButtonDeposit.click()
    }

}

module.exports = CustomerPage;
