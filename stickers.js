
const {Builder, By, Key, until} = require('selenium-webdriver');


(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://localhost/litecart/en/');

// 1 block
            let bmp = await driver.findElements(By.xpath('//*[@id="box-most-popular"]/div/ul/li[contains(@class, "hover")]'))
            console.log("Товаров box-most-popular: " + bmp.length)
            console.log("-----------")


            for (var i = 1; i < bmp.length + 1; i++) {
                let item1 = await driver.findElement(By.xpath('//*[@id="box-most-popular"]/div/ul/li[contains(@class, "hover")][' + i + ']')).getText()
                console.log(i + ": " + item1.valueOf())


                let stick1 = await driver.findElements(By.xpath('//*[@id="box-most-popular"]/div/ul/li['+i+']/a[1]/div[1]/div'))
                console.log("количество стиков: " + stick1.length)
                console.log("-------------")
            }


// 2 block
            let bc = await driver.findElements(By.xpath('//*[@id="box-campaigns"]/div/ul/li[contains(@class, "hover")]'))
            console.log("Товаров box-campaigns: " + bc.length)
            console.log("-----------")


            for (var j = 1; j < bc.length + 1; j++) {
                let item2 = await driver.findElement(By.xpath('//*[@id="box-campaigns"]/div/ul/li[contains(@class, "hover")][' + j + ']')).getText()
                console.log(j + ": " + item2.valueOf())


                let stick2 = await driver.findElements(By.xpath('//*[@id="box-campaigns"]/div/ul/li['+j+']/a[1]/div[1]/div'))
                console.log("количество стиков: " + stick2.length)
                console.log("-------------")
            }


// 3 block0
            let blp = await driver.findElements(By.xpath('//*[@id="box-latest-products"]/div/ul/li[contains(@class, "hover")]'))
            console.log("Товаров box-latest-products: " + blp.length)
            console.log("-----------")


            for (var k = 1; k < blp.length + 1; k++) {
                let item3 = await driver.findElement(By.xpath('//*[@id="box-latest-products"]/div/ul/li[contains(@class, "hover")][' + k + ']')).getText()
                console.log(k + ": " + item3.valueOf())

                let stick3 = await driver.findElements(By.xpath('//*[@id="box-latest-products"]/div/ul/li['+k+']/a[1]/div[1]/div'))
                console.log("количество стиков: " + stick3.length)
                console.log("-------------")

            }


    }
    finally {
        await driver.quit();
    }
})();

