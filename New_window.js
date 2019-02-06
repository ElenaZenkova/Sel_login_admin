const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://localhost/litecart/admin/login.php');
        await driver.findElement(By.name('username')).sendKeys('admin',);
        await driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN);
        await driver.wait(until.titleIs('My Store'), 1000);

        await driver.findElement(By.css("li#app-:nth-of-type(3)")).click(); //countries

        await driver.findElement(By.css('#content > div > a')).click(); //add new country
        let links = await driver.findElements(By.css('[class ="fa fa-external-link"]'));

        let mainWindow = await driver.getWindowHandle();

        for (let i = 0; i < links.length; i++) {

            links[i].click();
        }

        let allWindows = await driver.getAllWindowHandles();

        for (let k = 0; k< links.length; k++) {
            let allWindows = await driver.getAllWindowHandles();

            await driver.switchTo().window(allWindows[1]);

            await driver.close();
            await driver.switchTo().window(mainWindow);
        }

    }
    finally {
        await driver.quit();
    }
})();
