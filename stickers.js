
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost/litecart/en/');

        console.log("--------------------------")
        let items = await driver.findElements(By.className('image-wrapper'))
        console.log("Товаров всего: " + items.length)
        console.log("--------------------------")

        let sticks = await driver.findElements(By.className('sticker'))
        console.log("Всего стикеров: " + sticks.length)
        console.log("--------------------------")

        for (var i = 0; i < sticks.length + 1; i++) {

        let sticker = await driver.findElements(By.className('(sticker)[' + i + ']'))

        if (sticker = 1) {
            console.log("Стикер у товара: " + sticker.valueOf());
        }
        else if (sticker > 1)
            console.log("Стикеров у товара: " + sticker.valueOf());
        else
            console.log("Стикеров нет у товара: " + sticker.valueOf());
            }
    }
    finally {
        await driver.quit();
    }
})();

