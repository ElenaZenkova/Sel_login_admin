const {Builder, By,  until} = require('selenium-webdriver');
var driver = require('selenium-webdriver');

var Main_choose_items = require('/Users/dmitryzenkoff/WebstormProjects/Sel_login_admin/Task_19/Pages/Main_choose_items'),
    Items_details = require('/Users/dmitryzenkoff/WebstormProjects/Sel_login_admin/Task_19/Pages/Items_details'),
    Cart_delete = require('/Users/dmitryzenkoff/WebstormProjects/Sel_login_admin/Task_19/Pages/Cart_delete');




    class Application {


        constructor() {

            this.driver = new driver.Builder()
                .forBrowser("chrome")
                .build();


            this.mainChoosePage  = new Main_choose_items.MainChoosePage(this.driver);
            this.itemsDetailsPage = new Items_details.ItemsDetailsPage(this.driver);
            this.cartDeletePage = new Cart_delete.CartDeletePage(this.driver);
            }


        itemsAddDel() {
            this.mainChoosePage.open();
            this.mainChoosePage.selectItems();
            this.itemsDetailsPage.addItems();
            this.cartDeletePage.open();
            this.cartDeletePage.deleteItems();
            this.mainChoosePage.resultText();
        }

        quit() {
            this.driver.quit();
        }

    }


exports.Application = Application;
