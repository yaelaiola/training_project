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
    await browser.debug()
})

Given(/^A webpage is opened$/, async function(){
    console.log(`Going to oepn a webpage`)
    await browser.url("/javascript_alerts") // Will take it from baseUrl in wdio.conf.ts
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
    // console.log(`Going to perform some web interactions`)
    // let ele = await $(`[type=number]`)
    // await ele.setValue("12345")
    // await browser.debug()
    
    /**
     * 2. Select a value from a list by attribute, text, indes
     */
    // let ddele = await $(`#dropdown`)
    // await ddele.selectByVisibleText("Option 2")
    // await ddele.selectByAttribute("value", "1")
    // await ddele.selectByIndex(2)
    // await browser.debug()

    /**
     * 3. Get a list of options
     */
    // let eleArray = await $$(`select > option`)
    // let arr = []
    // for (let i=0; i < eleArray.length; i++){
    //     let ele = eleArray[i]
    //     let val = ele.getText()
    //     arr.push(val)
    //     console.log(`**** ${val}`)
    // }
    // console.log(`>> Options array: ${arr}`)
    // await browser.debug()

    /**
     * Checkbox
     */

    // let ele = await $(`//form[@id="checkboxes"]/input[1]`)
    // Select and Unselect a checkbox
    // uncheck is the same, click on a checked checkbox
    //await ele.click()

    // Check an option if not selected
    //console.log(`Check checkbox if it is uncheck`)
    // if (!await ele.isSelected()){
    //     await ele.click()
    // }

    // Assert if option is selected
    // let isChecked = await ele.isSelected()
    // assert.equal(isChecked, true)
    // console.log(`Checbox is checked !`)

    //select all
    // let eleArr = await $$(`//form[@id="checkboxes"]/input`)
    // for (let i=0; i < eleArr.length; i++){
    //     let ele = eleArr[i]
    //     if (!await ele.isSelected()){
    //         ele.click()
    //     }
    // }
    //await browser.debug()

    /**
     * Windows handling
     * 1. getTitle() - Get tab title. Can find it by searching in Elements tab undev devTools
     * 2. getWindowHandle()
     * 3. getWindowHandles()
     * 4. switchToWindow()
     */

    // // Open new windows
    // await $(`=Click Here`).click()
    // await $(`=Elemental Selenium`).click()
    // let currentWinTitle = await browser.getTitle()
    // let parentWinHandle = await browser.getWindowHandle()
    // console.log(`>> currentWinTitle: ${currentWinTitle}`)

    // // Switch to a specific window
    // console.log(`>> 1`)
    // let windHandles = await browser.getWindowHandles()
    // console.log(`>> 2`)
    // console.log(`>> windHandles: ${windHandles}`)
    // for (let i=0; i < windHandles.length; i++){
    //     console.log(`>> Window handle: ${windHandles[i]}`)
    //     await browser.switchToWindow(windHandles[i])
    //     currentWinTitle = await browser.getTitle()
    //     if (currentWinTitle === "Home | Elemental Selenium"){
    //         await browser.switchToWindow(windHandles[i])
    //         let headerTxtEleSel = (await $(`<h1>`)).getText()
    //         console.log(`headerTxtEleSel: ${headerTxtEleSel}`)
    //         break
    //     }
    // }

    // // Switch back to parent window
    // await browser.switchToWindow(parentWinHandle)
    // console.log(`parentWinHandle: ${(await $(`<h3>`)).getText()}`)

    /**
     * Handle Alerts
     * 1. isAlertOpen()
     * 2. acceptAlert()
     * 3. dismissAlert()
     * 4. getAlertText()
     * 5. sendAlertText()
     */

    // await $('button=Click for JS Alert').click()
    // await $('button=Click for JS Prompt').click()
    
    // if(await browser.isAlertOpen()){
    //     // await browser.acceptAlert()  //dismissAlert()
    //     let alertText = await browser.getAlertText()
    //     console.log(`>> alertText: ${alertText}`)
    //     await browser.sendAlertText(`Hello JS Prompt...`)
    //     await browser.dismissAlert()
    //     await browser.pause(2000)
    // }

    // console.log(`parentWinHandle: ${(await $(`<h3>`)).getText()}`)

    /**
     * File upload
     * Must provide an absolute path - We can get it by process.cwd()
     * Print it to log, copy it and paste it to your value
     */
    // console.log(process.cwd())
    // await $(`#file-upload`).addValue(`${process.cwd()}/data/fileupload/dummy.txt`)
    // await $(`#file-submit`).click()
    // await browser.debug()

    /**
     * Frames and iFrames
     */

    /**
     * Key press == Keywords
     */

    /** 
     * Basic scrolling
     * scrollIntoView
     */
    (await $('span=Best Sellers in Books')).scrollIntoView()
})