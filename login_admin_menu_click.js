

const {Builder, By, Key, until} = require('selenium-webdriver');


var driver = new Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://localhost/litecart/admin/login.php')
    .then(_ =>
        driver.findElement(By.name('username')).sendKeys('admin', ))
    .then(_ =>
        driver.findElement(By.name('password')).sendKeys('admin', Key.RETURN))
    .then(_ =>
        driver.wait(until.titleIs('My Store'), 1000))

    .then(_ =>
        driver.findElement(By.css("li#app-:first-child")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#doc-template.selected")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-logotype")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

     .then(_ =>
         driver.findElement(By.css("li#app-:nth-of-type(2)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-catalog.selected")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-product_groups")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-option_groups")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-manufacturers")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-suppliers")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-delivery_statuses")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-sold_out_statuses")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-quantity_units")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-csv")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(3)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(4)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(5)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-customers.selected")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-csv")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-newsletter")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(6)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(7)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-languages")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#doc-storage_encoding")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(8)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-jobs > a")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-customer")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-shipping")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-payment")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-order_total")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-order_success")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-order_action")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(9)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-orders")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-order_statuses")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(10)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(11)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-monthly_sales")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-most_sold_products")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-most_shopping_customers")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(12)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-store_info")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-defaults")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-general")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-listings")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-images")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-checkout")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-advanced")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-security")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(13)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(14)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-tax_classes")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-tax_rates")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())

    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(15)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-search")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-scan")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-csv")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(16)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("li#app-:nth-of-type(17)")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())
    .then(_ =>
        driver.findElement(By.css("#doc-vqmods")).click())
    .then(_ =>
        driver.findElement(By.css("h1")).getText())




    .then(_ => driver.quit());