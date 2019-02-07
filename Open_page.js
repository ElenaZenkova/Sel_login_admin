const {Builder, By,  until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost/litecart/en/');
        await driver.wait(until.titleIs('Online Store | My Store', ));


// part 1

        let name1 = await driver.findElement(By.css('#box-campaigns div.name')).getAttribute('textContent');
        let price_reg1 = await driver.findElement(By.css('#box-campaigns s')).getAttribute('textContent');
        let price_reg1_line = await driver.findElement(By.css('#box-campaigns s')).getCssValue('text-decoration-line');
        let price_reg1_color = await driver.findElement(By.css('#box-campaigns s')).getCssValue('color');
        let price_reg1_size = await driver.findElement(By.css('#box-campaigns s')).getCssValue('font-size');

        let price_akc1 = await driver.findElement(By.css('#box-campaigns strong')).getAttribute('textContent');
        let price_akc1_fat = await driver.findElement(By.css('#box-campaigns strong')).getCssValue('font-weight');
        let price_akc1_color = await driver.findElement(By.css('#box-campaigns strong')).getCssValue('color');
        let price_akc1_size = await driver.findElement(By.css('#box-campaigns strong')).getCssValue('font-size');


        await driver.findElement(By.css('#box-campaigns .link')).click();
        await driver.wait(until.titleIs('Yellow Duck | Subcategory | Rubber Ducks | My Store'));

// part 2

        let name2 = await driver.findElement(By.css('h1')).getAttribute('textContent');
        let price_reg2 = await driver.findElement(By.css('#box-product s')).getAttribute('textContent');
        let price_reg2_line = await driver.findElement(By.css('#box-product s')).getCssValue('text-decoration-line');
        let price_reg2_color = await driver.findElement(By.css('#box-product s')).getCssValue('color');
        let price_reg2_size = await driver.findElement(By.css('#box-product s')).getCssValue('font-size');


        let price_akc2 = await driver.findElement(By.css('.campaign-price')).getAttribute('textContent');
        let price_akc2_fat = await driver.findElement(By.css('.campaign-price')).getCssValue('font-weight');
        let price_akc2_color = await driver.findElement(By.css('.campaign-price')).getCssValue('color');
        let price_akc2_size = await driver.findElement(By.css('.campaign-price')).getCssValue('font-size');

        // сравнение

        if (name1 == name2)
        {
            console.log('Текст названия товара одинаковый: ' + name1.valueOf() + '; ' + name2.valueOf());
        }
        else {
            console.log('Текст названия товара разный: ' + name1.valueOf() + '; ' + name2.valueOf());
        }

        if (price_reg1 == price_reg2)
        {
            console.log('Цена обычная товара одинаковая: ' + price_reg1.valueOf() + '; ' + price_reg2.valueOf());
        }
        else {
            console.log('Цена обычная товара разная: ' + price_reg1.valueOf() + '; ' + price_reg2.valueOf());
        }

        if (price_akc1 == price_akc2)
        {
            console.log('Цена акционная товара одинаковая: ' + price_akc1.valueOf() + '; ' + price_akc2.valueOf());
        }
        else {
            console.log('Цена акционная товара разная: ' + price_akc1.valueOf() + '; ' + price_akc2.valueOf());
        }

        //обычная цена зачёркнутая и серая (можно считать, что "серый" цвет это такой,
        // у которого в RGBa представлении одинаковые значения для каналов R, G и B)

        let value1 = price_reg1_color.valueOf().toString();
        value1 = value1.substring(5,value1.length-1);
        let colors1 = value1.split(', ');
        console.log(colors1);
        if(colors1[0] === colors1[1] && colors1[1] === colors1[2]){
            console.log('Обычная цена-1 зачёркнутая и серая: ' + price_reg1_line.valueOf() + '; ' + price_reg1_color.valueOf());
        }
        else {
            console.log('Обычная цена-1 зачёркнутая, но не серая: ' + price_reg1_line.valueOf() + '; ' + price_reg1_color.valueOf());
        }

        let value2 = price_reg2_color.valueOf().toString();
        value2 = value2.substring(5,value2.length-1);
        let colors2 = value2.split(', ');
        console.log(colors2);
        if(colors2[0] === colors2[1] && colors2[1] === colors2[2]) {
            console.log('Обычная цена-2 зачёркнутая и серая: ' + price_reg2_line.valueOf() + '; ' + price_reg2_color.valueOf());
        }
        else{
            console.log('Обычная цена-2 зачёркнутая, но не серая: ' + price_reg2_line.valueOf() + '; ' + price_reg2_color.valueOf());
        }

        //акционная жирная и красная (можно считать, что "красный" цвет это такой,
        // у которого в RGBa представлении каналы G и B имеют нулевые значения)

        let value3 = price_akc1_color.valueOf().toString();
        value3 = value3.substring(5,value3.length-1);
        let colors3 = value3.split(', ');
        console.log(colors3);
        if(colors3[1] === colors3[2]) {
            console.log('Акционная цена-1 жирная и красная: ' + price_akc1_fat.valueOf() + '; ' + price_akc1_color.valueOf());
        }
        else{
            console.log('Акционная цена-1 жирная, но не красная: ' + price_akc1_fat.valueOf() + '; ' + price_akc1_color.valueOf());
        }

        let value4 = price_akc1_color.valueOf().toString();
        value4 = value4.substring(5,value4.length-1);
        let colors4 = value4.split(', ');
        console.log(colors4);
        if(colors4[1] === colors4[2]) {
            console.log('Акционная цена-2 жирная и красная: ' + price_akc2_fat.valueOf() + '; ' + price_akc2_color.valueOf());
        }
        else{
            console.log('Акционная цена-2 жирная, но не красная: ' + price_akc2_fat.valueOf() + '; ' + price_akc2_color.valueOf());
        }


        if (price_akc1_size > price_reg1_size)
        {
            console.log('Акционная цена-1 крупнее, чем обычная: ' + price_akc1_size.valueOf() + ' > ' + price_reg1_size.valueOf());
        }
        else {
            console.log('Акционная цена-1 меньше, чем обычная: ' + price_akc1_size.valueOf() + ' < ' + price_reg1_size.valueOf());
        }


        if (price_akc2_size > price_reg2_size)
        {
            console.log('Акционная цена-2 крупнее, чем обычная: ' + price_akc2_size.valueOf() + ' > ' + price_reg2_size.valueOf());
        }
        else {
            console.log('Акционная цена-2 меньше, чем обычная: ' + price_akc2_size.valueOf() + ' < ' + price_reg2_size.valueOf());
        }

    }
    finally {
        await driver.quit();
    }
})();
