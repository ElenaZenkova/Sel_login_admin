const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {

        await driver.get('http://localhost/litecart/admin/login.php');
        await driver.findElement(By.name('username')).sendKeys('admin',);
        await driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN);
        await driver.wait(until.titleIs('My Store'), 1000);

        await driver.findElement(By.css("li#app-:nth-of-type(3)")).click(); //countries

        //
        // 1) зайти в админку
        // 2) открыть пункт меню Countries (или страницу http://localhost/litecart/admin/?app=countries&doc=countries)
        // 3) открыть на редактирование какую-нибудь страну или начать создание новой
        // 4) возле некоторых полей есть ссылки с иконкой в виде квадратика со стрелкой --
        // они ведут на внешние страницы и открываются в новом окне, именно это и нужно проверить.
        //
        //     Конечно, можно просто убедиться в том, что у ссылки есть атрибут target="_blank".
        //     Но в этом упражнении требуется именно кликнуть по ссылке, чтобы она открылась в новом окне,
        //     потом переключиться в новое окно, закрыть его, вернуться обратно, и повторить эти действия для всех таких ссылок.
        //
        //     Не забудьте, что новое окно открывается не мгновенно, поэтому требуется ожидание открытия окна.




        await driver.findElement(By.css('#content > form > table:nth-child(2) > tbody > tr:nth-child(2) > td > a > i')).click();
        await driver.findElement(By.css('#content > form > table:nth-child(2) > tbody > tr:nth-child(3) > td > a')).click();
        await driver.findElement(By.css('#content > form > table:nth-child(2) > tbody > tr:nth-child(6) > td > a > i')).click();
        await driver.findElement(By.css('#content > form > table:nth-child(2) > tbody > tr:nth-child(7) > td > a:nth-child(3) > i')).click();
        await driver.findElement(By.css('#content > form > table:nth-child(2) > tbody > tr:nth-child(8) > td > a > i')).click();
        await driver.findElement(By.css('#content > form > table:nth-child(2) > tbody > tr:nth-child(9) > td > a > i')).click();
        await driver.findElement(By.css('#content > form > table:nth-child(2) > tbody > tr:nth-child(10) > td > a > i')).click();

    }
    finally {
        await driver.quit();
    }
})();