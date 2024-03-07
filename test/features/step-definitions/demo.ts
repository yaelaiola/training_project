import { Given, When,  Then } from "@cucumber/cucumber"
import assert from "assert"

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

Given(/^A webpage is opened$/, async function(){
    console.log(`Going to oepn a webpage`)
    await browser.url("/inputs") // Will take it from baseUrl in wdio.conf.ts
    await browser.setTimeout({implicit: 15000, pageLoad: 10000})
    await browser.maximizeWindow()
    console.log(`Webpage opened and maximized`)
})

When(/^Perform web interations$/, async function(){
    /**
     * 1. Input box
     * Actions:
     * 1. Type into input box
     * 2. Clear the field and type or just add value
     * 3. Click and type
     * 4. Slow typing
     */
    console.log(`Going to perform some web interactions`)
    let ele = await $(`[type=number]`)
    await ele.setValue("12345")
    // await browser.debug()
    // await browser.closeWindow()
})