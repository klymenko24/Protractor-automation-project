const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor() {
        super();
        this.loginManagerBtn = $('button[ng-click="manager()"]');
        this.loginCustomerBtn = $('button[ng-click="customer()"]');
        this.userSelect = $('[name="userSelect"]');
        this.checkUserName = $('.borderM span.fontBig');
        this.loginBtn = '.btn';
        this.AccountNumber = $('#accountSelect > option:nth-child(2)');
        this.DisplayAccountNumber = $('#accountSelect > option:nth-child(2)');
    }

    async login(role) {
        await this.waitForElement(this.loginCustomerBtn)
        if (role === 'customer') {
            await this.loginCustomerBtn.click()
        } else {
            await this.loginManagerBtn.click()
        }


    }


    async selectUser(user) {
        await this.userSelect.sendKeys(user)
        element(by.cssContainingText(this.loginBtn, 'Login')).click()
    }


    async checkName() {
        await this.waitForElement(this.checkUserName)
        return this.checkUserName.getText()
    }


    async checkAccountNumber(number) {
        await this.AccountNumber.sendKeys(number)
    }


    async getAccountNumber() {
        return this.DisplayAccountNumber.getText()
    }


}


module.exports = LoginPage;
