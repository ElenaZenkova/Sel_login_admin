var driver = require('selenium-webdriver');

var By = driver.By,
    until = driver.until;


class CartDeletePage {

    constructor(driver) {
        this.driver = driver;
    }

    open() {


        this.driver.findElement(By.css('[id="cart"]>[class="link"]')).click();

        return this;
    }

    deleteItems() {


        let duck =  this.driver.findElements(By.css('#order_confirmation-wrapper > table > tbody > tr > td.item'));

        for (let j = 0; j < duck.length; j++) {
            let item =  this.driver.findElements(By.name('remove_cart_item'));

            this.driver.navigate().refresh().then( function () {
                 driver.wait(until.stalenessOf(item),);
            })
        }


return this;

    }
}

exports.CartDeletePage = CartDeletePage;