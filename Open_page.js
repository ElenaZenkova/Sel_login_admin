const {Builder, By,  until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost/litecart/en/');
        await driver.wait(until.titleIs('Online Store | My Store', ));

        // а) на главной странице и на странице товара совпадает текст названия товара
        // б) на главной странице и на странице товара совпадают цены (обычная и акционная)
        // в) обычная цена зачёркнутая и серая (можно считать, что "серый" цвет это такой, у которого в RGBa представлении одинаковые значения для каналов R, G и B)
        // г) акционная жирная и красная (можно считать, что "красный" цвет это такой, у которого в RGBa представлении каналы G и B имеют нулевые значения)
        // (цвета надо проверить на каждой странице независимо, при этом цвета на разных страницах могут не совпадать)
        // д) акционная цена крупнее, чем обычная (это тоже надо проверить на каждой странице независимо)


// part 1

        let name1 = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.name')).getAttribute('textContent');
        let price_reg1 = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s')).getAttribute('textContent');
        let price_reg1_line = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s')).getCssValue('text-decoration-line');
        let price_reg1_color = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s')).getCssValue('color');
        let price_reg1_size = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > s')).getCssValue('font-size');

        let price_akc1 = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong')).getAttribute('textContent');
        let price_akc1_fat = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong')).getCssValue('font-weight');
        let price_akc1_color = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong')).getCssValue('color');
        let price_akc1_size = await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.price-wrapper > strong')).getCssValue('font-size');



        await driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.image-wrapper > img')).click();
        await driver.wait(until.titleIs('Yellow Duck | Subcategory | Rubber Ducks | My Store'));

// part 2

        let name2 = await driver.findElement(By.css('#box-product > div:nth-child(1) > h1')).getAttribute('textContent');
        let price_reg2 = await driver.findElement(By.css('#box-product > div.content > div.information > div.price-wrapper > s')).getAttribute('textContent');
        let price_reg2_line = await driver.findElement(By.css('#box-product > div.content > div.information > div.price-wrapper > s')).getCssValue('text-decoration-line');
        let price_reg2_color = await driver.findElement(By.css('#box-product > div.content > div.information > div.price-wrapper > s')).getCssValue('color');
        let price_reg2_size = await driver.findElement(By.css('#box-product > div.content > div.information > div.price-wrapper > s')).getCssValue('font-size');


        let price_akc2 = await driver.findElement(By.css('#box-product > div.content > div.information > div.price-wrapper > strong')).getAttribute('textContent');
        let price_akc2_fat = await driver.findElement(By.css('#box-product > div.content > div.information > div.price-wrapper > strong')).getCssValue('font-weight');
        let price_akc2_color = await driver.findElement(By.css('#box-product > div.content > div.information > div.price-wrapper > strong')).getCssValue('color');
        let price_akc2_size = await driver.findElement(By.css('#box-product > div.content > div.information > div.price-wrapper > strong')).getCssValue('font-size');

        // сравнение

        if (name1 == name2)
        {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Текст названия товара одинаковый: ' + name1.valueOf() + '; ' + name2.valueOf());
        }
        else {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Текст названия товара разный: ' + name1.valueOf() + '; ' + name2.valueOf());
        }

        if (price_reg1 == price_reg2)
        {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Цена обычная товара одинаковая: ' + price_reg1.valueOf() + '; ' + price_reg2.valueOf());
        }
        else {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Цена обычная товара разная: ' + price_reg1.valueOf() + '; ' + price_reg2.valueOf());
        }

        if (price_akc1 == price_akc2)
        {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Цена акционная товара одинаковая: ' + price_akc1.valueOf() + '; ' + price_akc2.valueOf());
        }
        else {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Цена акционная товара разная: ' + price_akc1.valueOf() + '; ' + price_akc2.valueOf());
        }
        //
        console.log('----------------------------------------------------------------------------------------------------------');
        console.log('Обычная цена-1 зачёркнутая и серая: ' + price_reg1_line.valueOf() + '; ' + price_reg1_color.valueOf());

        console.log('----------------------------------------------------------------------------------------------------------');
        console.log('Обычная цена-2 зачёркнутая и серая: ' + price_reg2_line.valueOf() + '; ' + price_reg2_color.valueOf());

        console.log('----------------------------------------------------------------------------------------------------------');
        console.log('Акционная цена-1 жирная и красная: ' + price_akc1_fat.valueOf() + '; ' + price_akc1_color.valueOf());

        console.log('----------------------------------------------------------------------------------------------------------');
        console.log('Акционная цена-2 жирная и красная: '  + price_akc2_fat.valueOf() + '; ' + price_akc2_color.valueOf());

        if (price_akc1_size > price_reg1_size)
        {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Акционная цена-1 крупнее, чем обычная: ' + price_akc1_size.valueOf() + ' > ' + price_reg1_size.valueOf());
        }
        else {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Акционная цена-1 меньше, чем обычная: ' + price_akc1_size.valueOf() + ' < ' + price_reg1_size.valueOf());
        }

        if (price_akc2_size > price_reg2_size)
        {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Акционная цена-2 крупнее, чем обычная: ' + price_akc2_size.valueOf() + ' > ' + price_reg2_size.valueOf());
        }
        else {
            console.log('----------------------------------------------------------------------------------------------------------');
            console.log('Акционная цена-2 меньше, чем обычная: ' + price_akc2_size.valueOf() + ' < ' + price_reg2_size.valueOf());
        }



    }
    finally {
        await driver.quit();
    }
})();
