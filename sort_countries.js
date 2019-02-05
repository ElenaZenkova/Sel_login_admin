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
        let list1 = await driver.findElements(By.css('tr.row'));

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

            for (let i = 2; i < list1.length +2; i++)
            {
                    let zone = await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child('+ i +') > td:nth-child(6)')).getText();

                    if (zone.valueOf() > 0)
                    {
                        await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(' + i + ') > td:nth-child(5) > a')).click();

                        let C1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3)'));

                        let C2 = C1.sort();

                        if (C1 == C2)
                        {
                            console.log(i + ": Зоны расположены в алфавитном порядке")
                        }
                        else
                            {
                            console.log(i + ": Зоны не отсортированы")
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
        await driver.wait(until.titleIs('Geo Zones | My Store'), 1000);

        let list3 = await driver.findElements(By.css('tr.row'));

        for (let j = 2; j < list3.length +2; j++)
        {
            let geo = await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child('+ j +') > td:nth-child(4)')).getText();

            if (geo.valueOf() > 0)
            {
                await driver.findElement(By.css('#content > form > table > tbody > tr:nth-child(' + j + ') > td:nth-child(3) > a')).click();

                let G1 = await driver.findElements(By.css('#table-zones > tbody > tr > td:nth-child(3) > select'));

                let G2 = G1.sort();

                if (G1 == G2)
                {
                    console.log(j + ": Геозоны расположены в алфавитном порядке")
                }
                else
                {
                    console.log(j + ": Геозоны не отсортированы")
                }

                await driver.findElement(By.css("li#app-:nth-of-type(6)")).click();
            }
            else
            {
                console.log(j + ": Геозон нет")
            }
        }

    }
    finally {
        await driver.quit();
    }
})();