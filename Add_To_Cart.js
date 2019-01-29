const {Builder, By,  until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost/litecart/en/');
        await driver.wait(until.titleIs('Online Store | My Store', ));

       for (let i = 1; i < 4; i++) {

           await driver.findElements(By.className('product'));
           await driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(1) > a.link')).click();

           try
           {
               await driver.findElement(By.css('select')).isEnabled();
               await driver.findElement(By.css('[value="Small"]')).click();
               await driver.findElement(By.name('add_cart_product')).click();
           }

           catch (e) {
               await driver.findElement(By.name('add_cart_product')).click();
           }

              let element = await driver.findElement(By.css('span.quantity'));
              await driver.wait(until.elementTextIs(element, i.toString(4)));
              await driver.findElement(By.css('#logotype-wrapper > a > img')).click();
        }

        await driver.findElement(By.css('[id="cart"]>[class="link"]')).click();

        let duck = await driver.findElements(By.css('#order_confirmation-wrapper > table > tbody > tr > td.item'));

        for (let j = 0; j < duck.length ; j++)
        {
            let item = await driver.findElements(By.name('remove_cart_item'));

            driver.navigate().refresh().then( function () {
                driver.wait(until.stalenessOf(item),);
            });

            await driver.findElement(By.name('remove_cart_item')).click();

            driver.navigate().refresh().then( function () {
                driver.wait(until.stalenessOf(duck), );
            });
        }

        let result = await driver.findElement(By.css('#checkout-cart-wrapper > p:nth-child(1) > em')).getText();
        console.log('=======================================');
        console.log(result.valueOf());
    }
    finally {
        await driver.quit();
    }
})();
