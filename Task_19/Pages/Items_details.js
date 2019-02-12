var driver = require('selenium-webdriver');

var By = driver.By,
    until = driver.until;


class ItemsDetailsPage {

    constructor(driver) {
        this.driver = driver;
    }

    addItems() {


        try {
            this.driver.findElement(By.css('select')).isEnabled();
            this.driver.findElement(By.css('[value="Small"]')).click();
            this.driver.findElement(By.name('add_cart_product')).click();
        } catch (e) {
            this.driver.findElement(By.name('add_cart_product')).click();
        }
     //    let element = this.driver.findElement(By.css('span.quantity'));
     // this.driver.wait(until.elementTextIs(element, i.toString(4)));
        this.driver.findElement(By.css('#logotype-wrapper > a > img')).click();


    return this;
}
}

exports.ItemsDetailsPage = ItemsDetailsPage;