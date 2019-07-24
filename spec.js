describe('XYZ Bank', function(){
browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login')

it ('Locators', function(){

  element(by.css(`button[ng-click="customer()"]`)).click()
  element(by.css('#userSelect')).click()
  element(by.css('option.ng-binding:nth-child(3)')).click()
  element(by.css('body > div.ng-scope > div > div.ng-scope > div > form > button')).click()
  element(by.css('#accountSelect')).click()
  element(by.css('#accountSelect > option:nth-child(3)')).click().then(function(){
    
    browser.sleep(3000);
    
  });
  
    expect(element(by.css('div.center:nth-child(3)')).getText()).toBe('Account Number : 1006 , Balance : 0 , Currency : Rupee');

});


});