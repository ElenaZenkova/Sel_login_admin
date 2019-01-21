
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://localhost/litecart/en/');

        await driver.findElement(By.css("#box-account-login > div > form > table > tbody > tr:nth-child(5) > td > a")).click()
        await driver.wait(until.titleIs('Create Account | My Store'), 1000);

        await driver.findElement(By.name('firstname')).sendKeys('Name',);
        await driver.findElement(By.name('lastname')).sendKeys('Lname',);
        await driver.findElement(By.name('address1')).sendKeys('Street',);
        await driver.findElement(By.name('postcode')).sendKeys('12345',);
        await driver.findElement(By.name('city')).sendKeys('Town',);
        await driver.findElement(By.className('select2-selection__rendered')).click();
        await driver.findElement(By.css('body > span > span > span.select2-search.select2-search--dropdown > input')).sendKeys('United States', Key.RETURN);

        await driver.wait(until.elementIsEnabled(await driver.findElement(By.name('zone_code'))), 50000);
        await driver.findElement(By.css('#create-account > div > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > select > option:nth-child(21)')).click();
        await driver.findElement(By.name('email')).sendKeys('example3@b.ru', );
        await driver.findElement(By.name('phone')).sendKeys('+123456789101', );
        await driver.findElement(By.name('password')).sendKeys('pass123', );
        await driver.findElement(By.name('confirmed_password')).sendKeys('pass123', );
        await driver.findElement(By.name('create_account')).click();

        await driver.wait(until.titleIs('Online Store | My Store'), 1000);
        await driver.findElement(By.css('#box-account > div > ul > li:nth-child(4) > a')).click();

        await driver.wait(until.titleIs('Online Store | My Store'), 1000);
        await driver.findElement(By.name('email')).sendKeys('example3@b.ru', );
        await driver.findElement(By.name('password')).sendKeys('pass123', );
        await driver.findElement(By.name('login')).click();

        await driver.wait(until.titleIs('Online Store | My Store'), 1000);
        await driver.findElement(By.css('#box-account > div > ul > li:nth-child(4) > a')).click();

    }
    finally {
       await driver.quit();
    }
})();

