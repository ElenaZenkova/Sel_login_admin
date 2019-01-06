

const {Builder, By, Key, until} = require('selenium-webdriver');

var driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost/litecart/en/')
    .then(_ =>
        driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(1) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(2) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(3) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(4) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-most-popular > div > ul > li:nth-child(5) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-campaigns > div > ul > li > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-latest-products > div > ul > li:nth-child(1) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-latest-products > div > ul > li:nth-child(2) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-latest-products > div > ul > li:nth-child(3) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-latest-products > div > ul > li:nth-child(4) > a.link > div.image-wrapper > div')).getText())
    .then(_ =>
        driver.findElement(By.css('#box-latest-products > div > ul > li:nth-child(5) > a.link > div.image-wrapper > div')).getText())
    
    .then(_ => driver.quit());
