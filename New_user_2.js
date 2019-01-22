const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://localhost/litecart/en/');

        await driver.findElement(By.css("#box-account-login > div > form > table > tbody > tr:nth-child(5) > td > a")).click();
        await driver.wait(until.titleIs('Create Account | My Store'), 1000);

        await driver.findElement(By.name('firstname')).sendKeys('Name',);
        await driver.findElement(By.name('lastname')).sendKeys('Lname',);
        await driver.findElement(By.name('address1')).sendKeys('Street',);
        await driver.findElement(By.name('postcode')).sendKeys('12345',);
        await driver.findElement(By.name('city')).sendKeys('Town',);
        await driver.findElement(By.className('select2-selection__rendered')).click();
        await driver.findElement(By.className('select2-search__field')).sendKeys('United States', Key.RETURN);
        await driver.wait(until.elementLocated(By.css('#create-account > div > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > select')), 70000);
        await driver.findElement(By.css('#create-account > div > form > table > tbody > tr:nth-child(5) > td:nth-child(2) > select > option:nth-child(4)')).click();

        {
            function randomString(len, charSet) {
                charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var randomString = '';
                for (var i = 0; i < len; i++) {
                    var randomPoz = Math.floor(Math.random() * charSet.length);
                    randomString += charSet.substring(randomPoz, randomPoz + 1);
                }
                return randomString;
            }

        }

        let email = randomString(4);
        await driver.findElement(By.name('email')).sendKeys(email+'@b.ru', );
        await driver.findElement(By.name('phone')).sendKeys('+123456789101', );
        await driver.findElement(By.name('password')).sendKeys('pass123', );
        await driver.findElement(By.name('confirmed_password')).sendKeys('pass123', );
        await driver.findElement(By.name('create_account')).click();

        await driver.wait(until.titleIs('Online Store | My Store'), 1000);
        await driver.findElement(By.css('#box-account > div > ul > li:nth-child(4) > a')).click();

        await driver.wait(until.titleIs('Online Store | My Store'), 1000);
        await driver.findElement(By.name('email')).sendKeys(email+'@b.ru', );
        await driver.findElement(By.name('password')).sendKeys('pass123', );
        await driver.findElement(By.name('login')).click();

        await driver.wait(until.titleIs('Online Store | My Store'), 1000);
        await driver.findElement(By.css('#box-account > div > ul > li:nth-child(4) > a')).click();

    }
    finally {
        await driver.quit();
    }
})();