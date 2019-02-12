
var driver = require('selenium-webdriver');
//let driver =  Builder().forBrowser('chrome').build();
let By = driver.By,
    until = driver.until;


    class MainChoosePage {

        constructor(driver) {
            this.driver = driver;
        }


        open() {
                 this.driver.get("http://localhost/litecart/en/");
            return this;
        }

        selectItems() {

            for (let i = 1; i < 4; i++) {
                 this.driver.findElements(By.className('product'));
                 this.driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(1) > a.link')).click();
            }

            return this;
        }

        resultText (){

            let result =  this.driver.findElement(By.css('#checkout-cart-wrapper > p:nth-child(1) > em')).getText();
            console.log(result.valueOf());

return this;

            }
}

    exports.MainChoosePage = MainChoosePage;