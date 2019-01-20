const {Builder, By, Key, until} = require('selenium-webdriver');


(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://localhost/litecart/admin/login.php');
        await driver.findElement(By.name('username')).sendKeys('admin',);
        await driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN);
        await driver.wait(until.titleIs('My Store'), 1000);

        for (var i = 1; i < 18; i++) {
            await driver.findElement(By.css("li#app-:nth-of-type(" + [i] + ")")).click();


                                        }

    }
    finally {
        await driver.quit();
    }
})();



