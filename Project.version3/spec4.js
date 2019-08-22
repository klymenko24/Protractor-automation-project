const NewLoginPage = require('./Page/NewLoginPage');
const CustomersInfoPage = require('./Page/CustomersInfoPage');

browser.ignoreSynchronization = true; // or false

describe('XYZ Bank', function () {

    const newLoginPage = new NewLoginPage();
    const customersInfoPage = new CustomersInfoPage();
    // const transactionPage = new TransactionPage();

    it('test', async function () {
        await newLoginPage.open();
    })

    it('Locators', async function () {
        await newLoginPage.login('manager')
        await browser.sleep(1000);
    });

    it('Choose Add Customer', async function () {
        await customersInfoPage.clickAddCustomerMain()
    })

    it('Add First Name', async function () {
        await customersInfoPage.addFirstName('Harry')
        await browser.sleep(1000);
    });

    it('Add Last Name', async function () {
        await customersInfoPage.addLastName('Potter')

    });

    it('Add Post Code', async function () {
        await customersInfoPage.addPostCode('31071980')

    });

    it('click add customer btn', async function () {
        await customersInfoPage.clickAddCustomer()

    });

    it('Close Alert Window', async function () {
        await customersInfoPage.closeAlertMessage();
        await browser.sleep(2000)
    })

    it('Click customer button', async function () {
        await customersInfoPage.clickCustomers()
        await browser.sleep(2000)
    })

    it('', async function () {
        await expect($('tr:nth-child(6)').isPresent()).toBe(true)
    })

    it('Click delete customer', async function () {
        await customersInfoPage.clickDeleteCustomer()
        await browser.sleep(5000)
    })

    it('', async function () {
        await expect($('tr:nth-child(6)').isPresent()).toBe(false)
    })


})
