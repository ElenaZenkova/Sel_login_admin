const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://localhost/litecart/admin/login.php');
        await driver.findElement(By.name('username')).sendKeys('admin',);
        await driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN);
        await driver.wait(until.titleIs('My Store'), 1000);

// 1 part
        //a

        await driver.findElement(By.css("li#app-:nth-of-type(3)")).click(); //countries
        let list1 = await driver.findElements(By.css('#content > form > table > tbody > tr > td:nth-child(5) > a'));

        let list2 = list1.sort();

        if (list1 == list2)
        {
            console.log("==================================================")
            console.log("Страны расположены в алфавитном порядке")

        }
        else {
            console.log("Страны не отсортированы")
        }

        //b

        await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(39) > td:nth-child(5) > a')).click();

        let Can1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3)'));

        let Can2 = Can1.sort();

        if (Can1 == Can2)
        {
            console.log("==================================================")
            console.log("Зоны_1 Канады расположены в алфавитном порядке")
        }
        else {
            console.log("Зоны_1 Канады не отсортированы")
        }

        await driver.findElement(By.css("li#app-:nth-of-type(3)")).click();

        await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(225) > td:nth-child(5) > a')).click();

        let Usa1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3)'));

        let Usa2 = Usa1.sort();

        if (Usa1 == Usa2)
        {
            console.log("==================================================")
            console.log("Зоны_1 США расположены в алфавитном порядке")
        }
        else {
            console.log("Зоны_1 США не отсортированы")
        }


//2 part

        await driver.get('http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones');

        await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(2) > td:nth-child(3) > a')).click();
        let c1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3) > select'));
        let c2 = c1.sort();

        if (c1 == c2)
        {
            console.log("==================================================")
            console.log("Зоны_2 Канады расположены в алфавитном порядке")
        }
        else {
            console.log("Зоны_2 Канады не отсортированы")
        }

        await driver.findElement(By.css("li#app-:nth-of-type(6)")).click();
        await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(3) > td:nth-child(3) > a')).click();
        let u1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3) > select'));
        let u2 = u1.sort();

        if (u1 == u2)
        {
            console.log("==================================================")
            console.log("Зоны_2 США расположены в алфавитном порядке")
        }
        else {
            console.log("Зоны_2 США не отсортированы")
        }

    }
    finally {
        await driver.quit();
    }
})();