# TODO
- read npm all about
- `nvm use 12.7` to switch version of node `nvm ls` - list of node for using
- npm selenium-standalone `selenium-standalone start`
- css locators

- select Account Number : 1005
- check account number is 1005
- click deposit
- enter 12 
- check success deposit
- transactions 
-check transaction 12 amount
- check not shows any transactions with amount 13 expect($(....).isPresent()).toBe(false)

  
  
  element(by.cssContainingText(this.succsessfulNotification, 'Deposit Successful')).isPresent() //true
 //expect(element(by.cssContainingText('.ng-binding','13')).isPresent()).toBe(false)

 body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > table > tbody > tr:nth-child(6) > td:nth-child(1)


 async customerList() {

        const items = await $$('tbody tr').map(item => {
            return {
            firstName: item.$('td:nth-of-type(1)').getText(), 
            lastName: item.$('td:nth-of-type(2)').getText(), 
            postCode: item.$('td:nth-of-type(3)').getText()
            }
        });
        return items

    };


    it('Customer Table', async function () {
        const data = [{
                firstName: 'Harry',
                lastName: 'Potter',
                postCode: '31071980'
            }];
        expect(customersInfoPage.customerList()).toEqual(data)