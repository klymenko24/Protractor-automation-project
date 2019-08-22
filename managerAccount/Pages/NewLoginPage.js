const NewBasePage = require('./NewBasePage');

class NewLoginPage extends NewBasePage {
    constructor() {
        super();
        this.loginManagerBtn = $('button[ng-click="manager()"]');
        this.loginCustomerBtn = $('button[ng-click="customer()"]');
        // this.userSelect = $('[name="userSelect"]');
        // this.checkUserName = $('.borderM span.fontBig');
        // this.loginBtn = '.btn';
        // this.AccountNumber = $('#accountSelect > option:nth-child(2)');
        // this.DisplayAccountNumber = $('#accountSelect > option:nth-child(2)');
    }

    async login(role) {
        await this.waitForElement(this.loginManagerBtn)
        if (role === 'manager') {
            await this.loginManagerBtn.click()
        } else {
            await this.loginCustomerBtn.click()
        }
    }

}

module.exports = NewLoginPage;
