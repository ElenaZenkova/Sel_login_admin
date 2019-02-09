const {Builder, By, Key, until} = require('selenium-webdriver');


(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost/litecart/admin/login.php');
        await driver.findElement(By.name('username')).sendKeys('admin',);
        await driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN);
        await driver.wait(until.titleIs('My Store'), 1000);


        await driver.get('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1');


        let ducks = await driver.findElements(By.css('tr > td:nth-child(3) > a'));

        for (let i = 5; i < ducks.length+4; i++) {
            await driver.findElement(By.css("tr:nth-child(" + [i] + ") > td:nth-child(3) > a")).click();
            await driver.get('http://localhost/litecart/admin/?app=catalog&doc=catalog&category_id=1');
            }

        await driver.manage().logs().get('browser');

        (function(logsEntries) {
            logsEntries.forEach(function(l) {
                console.log(l)
            });
        });


    }
    finally {
        await driver.quit();
    }
})();



