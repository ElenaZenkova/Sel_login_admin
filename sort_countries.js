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

            for (let i = 2; i < 240; i++)
            {

                    let zone = await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child('+ i +') > td:nth-child(6)')).getText();

                    if (zone.valueOf() > 0)
                    {
                        await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(' + i + ') > td:nth-child(5) > a')).click();

                        let C1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3)'));

                        let C2 = C1.sort();

                        if (C1 == C2)
                        {
                            console.log(i-1 + ": Зоны расположены в алфавитном порядке")
                        }
                        else
                            {
                            console.log(i-1 + ": Зоны не отсортированы")
                            }

                        await driver.findElement(By.css("li#app-:nth-of-type(3)")).click();
                    }
                    else
                    {
                        console.log(i + ": Зон нет")
                    }
            }

//2 part

        await driver.get('http://localhost/litecart/admin/?app=geo_zones&doc=geo_zones');

        await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(2) > td:nth-child(3) > a')).click();
        let Can1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3) > select'));
        let Can2 = Can1.sort();

        if (Can1 == Can2)
        {
            console.log("==================================================")
            console.log("Зоны Канады расположены в алфавитном порядке")
        }
        else {
            console.log("Зоны Канады не отсортированы")
        }

        await driver.findElement(By.css("li#app-:nth-of-type(6)")).click();
        await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(3) > td:nth-child(3) > a')).click();
        let Usa1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3) > select'));
        let Usa2 = Usa1.sort();

        if (Usa1 == Usa2)
        {
            console.log("==================================================")
            console.log("Зоны США расположены в алфавитном порядке")
        }
        else {
            console.log("Зоны США не отсортированы")
        }

    }
    finally {
        await driver.quit();
    }
})();