const {Builder, By, Key, until} = require('selenium-webdriver');


(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost/litecart/admin/login.php');
        await driver.findElement(By.name('username')).sendKeys('admin',);
        await driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN);
        await driver.wait(until.titleIs('My Store'), 1000);
        await driver.findElement(By.css('li#app-:nth-of-type(2)')).click();
        await driver.findElement(By.css('.button:nth-child(2)')).click();
        await driver.findElement(By.css('label:nth-child(3)')).click();
        await driver.findElement(By.name('name[en]')).sendKeys('Item', );
        await driver.findElement(By.name('code')).sendKeys('123', );
        await driver.findElement(By.css("[data-name='Rubber Ducks']")).click();
        await driver.findElement(By.css('[value="1-2"]')).click();
        await driver.findElement(By.name('quantity')).sendKeys('55', );
        await driver.findElement(By.name('new_images[]')).sendKeys(__dirname + '/example.jpg', );
        await driver.findElement(By.name('date_valid_from')).sendKeys('552019', );
        await driver.findElement(By.name('date_valid_to')).sendKeys('772019', );

        await driver.findElement(By.css('[href="#tab-information"]')).click();
        await driver.findElement(By.name('manufacturer_id')).sendKeys('A', );
        await driver.findElement(By.name('keywords')).sendKeys('sale', );
        await driver.findElement(By.name('short_description[en]')).sendKeys('good items', );
        await driver.findElement(By.className('trumbowyg-editor')).sendKeys('very good items', );
        await driver.findElement(By.name('head_title[en]')).sendKeys('good', );
        await driver.findElement(By.name('meta_description[en]')).sendKeys('good_item', );

        await driver.findElement(By.css('[href="#tab-prices"]')).click();
        await driver.findElement(By.name('purchase_price')).sendKeys('44', );
        await driver.findElement(By.name('purchase_price_currency_code')).sendKeys('U',);
        await driver.findElement(By.name('gross_prices[USD]')).sendKeys('5', );
        await driver.findElement(By.name('gross_prices[EUR]')).sendKeys('6', );
        await driver.findElement(By.name('save')).click();
        await driver.findElement(By.css('tr:nth-child(4) > td:nth-child(3)> a')).click();

    }
    finally {
      await driver.quit();
    }
})();



