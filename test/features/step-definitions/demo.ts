import { Given, When,  Then } from "@cucumber/cucumber"
//import { assert } from "console"
import assert from "assert"

//Given("Google page is opened", async function(){
Given(/^Google page is opened$/, async function(){
    console.log(`Going to open browser with google URL`)
    await browser.url("https://www.google.com")
    await browser.pause(1000)
    console.log(`Browser opened successfully`)
})

When(/^Search with (.*)$/, async function(searchItem){ 
    console.log(`>> searchItem: ${searchItem}`)
    let locator = await $(`textarea[id="APjFqb"]`)
    await locator.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^Click on the firat search result$/, async function(){
    console.log(`>> Going to press on first result`)
    let locator = await $(`<h3>`)
    await locator.click()
})

Then(/^The URL should match (.*)$/, async function(ExpectedURL){
    console.log(`>> Verify expectedURL: ${ExpectedURL}`)
    let url = await browser.getUrl()
    assert.equal(url, ExpectedURL, `Expected result: ${ExpectedURL}, Actual result: ${url}`)
})