const {Builder, By, Key, until} = require('selenium-webdriver');


(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost/litecart/admin/login.php');
        await driver.findElement(By.name('username')).sendKeys('admin',);
        await driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN);
        await driver.wait(until.titleIs('My Store'), 1000);

        let items = await driver.findElements(By.css("li#app-"))
        console.log("Всего пунктов меню: " + items.length)

        console.log("----")

        for (var i = 1; i < items.length + 1; i++) {
            await driver.findElement(By.css("li#app-:nth-of-type(" + [i] + ")")).click();

            let items2 = await driver.findElements(By.css("li#app-.selected > .docs > li"))
            console.log("Вложенные пункты: " + items2.length)

if (items2.length > 0) {
            for (var j = 1; j < items2.length +1; j++) {

                await driver.findElement(By.css("li#app-.selected > .docs > li:nth-child("+j+")")).click();

                let head = await driver.findElement(By.css("h1")).getText();
                console.log("Заголовок: " + head.valueOf())
            }
            }

            console.log("----")

        }
    }
    finally {
        await driver.quit();
    }
})();



