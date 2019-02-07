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
        let allOriginalWindows = await driver.getAllWindowHandles();

        for (let i = 0; i < links.length; i++) {
            links[i].click();
            await driver.wait(async () => {
                let newWindows = await driver.getAllWindowHandles();
                return newWindows.length !== allOriginalWindows.length;
            });

            let allNewWindows = await driver.getAllWindowHandles();
            let newWindow = allNewWindows.find(n=> !allOriginalWindows.some(o=> o===n))
            if(!newWindow){
                return;
            }

            await driver.switchTo().window(newWindow);
            await driver.close();
            await driver.switchTo().window(mainWindow);
        }

    }
    finally {
       await driver.quit();
    }
})();
