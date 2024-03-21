import { Given } from "@cucumber/cucumber"
import assert from "assert"

Given(/^Login to inventory web app$/, async function(){
    console.log(`Launch URL: login saucedemo`)
    await browser.url("https://www.saucedemo.com/")
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    
    console.log(`Login to inventory`)
    await $(`#user-name`).setValue("standard_user")
    await $(`#password`).setValue("secret_sauce")
    await $(`#login-button`).click()
    
})

Given(/^get list of (.*) from reqres.in$/, async function(endpointRef){

})