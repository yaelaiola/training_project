import { Then } from "@cucumber/cucumber";
import assert from "assert";

Then(/^Inventory page should list (.*)$/, async function (numOfProducts) {
  console.log(`>> List all items in page if numOfProducts has a value`);
  if (!NodeIterator) throw Error(`Invalid numbe provided: ${numOfProducts}`);

  let eleArr = await $$(`.inventory_item_name`);
  assert.equal(
    eleArr.length,
    parseInt(numOfProducts),
    `Mismatch in items view, actual elements: ${eleArr.length}, expected elements: ${numOfProducts}`
  );
});

/**
 * Steps:
 * 1. Get proce list
 * 2. Convert string to number
 * 3. Assert if any value is <= 0
 */
Then(/^Validate all products have valid price$/, async function () {
  console.log(`>> List all items in page if numOfProducts has a value`);
  let eleArr = await $$(`.inventory_item_rpice`);
  let priceStrArr = [];

  for (let i = 0; i < eleArr.length; i++) {
    let priceStr = await eleArr[i].getText();
    priceStrArr.push(priceStr);
  }

  console.log(`>> Price with $: ${priceStrArr}`);

  // This action create a new list and change wach value in the array [Like list comprehansion in Python]
  /** + meaning: unary plus operator which convert a number in string to a number
   * If string will combine numbers and string, it will get the number only if it is in the beggining of the string
   * If str is already an number, nothing will happen
   * Examples:
   * str = "123abc" >> +str >> 123 (num)
   * str = "abc123" >> +str >> None (num)
   * str = "123" >> +str >> 123 (num)
   */
  let priceNumArr = priceStrArr.map((ele) => +ele.replace("$", ""));
  console.log(`>> Price with numbers: ${priceNumArr}`);

  priceNumArr.filter((ele) => ele <= 0);
  assert.equal(
    priceNumArr.length,
    0,
    `Prices must be bigger then 0: ${priceNumArr}`
  );

  /**
   * Table
   * Can play in Elements tab to see how much rows/columns we have and move between cells
   * Examples:
   * First of all search for somehting with ctrl+f
   * 1. //table[@id='table']/tbody/tr[2]/td[4] - A specific cell
   * 2. //table[@id='table']/tbody/tr - All ros will write in the search bar how many were found
   *
   */

  // // Number of rows and columns
  // let rowCount = await $$(`//table[@id="table1"]/tbody/tr`).length
  // let colCount = await $$(`//table[@id="table1"]/tbody/tr/th`).length

  // // Whole table
  // let arr = []
  // for (let i=0; i<rowCount; i++){
  //     let personObj = {
  //         lastname: "",
  //         firstname: "",
  //         email: "",
  //         due: "",
  //         web: "",
  //         action: ""
  //     }
  //     for (let j=0; j<colCount; j++){
  //         let cellValue = await $(`table[@id='table']/tbody/tr[${i+1}]/td[${j+1}]`).getText()
  //         if (j==0) personObj.lastname = cellValue
  //         if (j==1) personObj.firstname = cellValue
  //         if (j==2) personObj.email = cellValue
  //         if (j==3) personObj.due = cellValue
  //         if (j==4) personObj.web = cellValue
  //         if (j==5) personObj.action = cellValue
  //     }
  //     arr.push(personObj)
  // }

  // /**
  //  * If we'll print arr that contains personObj, we won't see its values.
  //  * To see its values, use the command "JSON.stringify"
  //  *  */

  // console.log(`Whole table: ${JSON.stringify(arr)}`)

  /**
   * Scrolling
   */

  /**
   * Type of wait
   * static.hard wait: browser.pause(ms)
   * dynamic wait: waitUntil() >> isDisplayed(), isEnabled(), isClickable(), wait until browser title get changed, wait until a field has text value loaded
   * $(selector).waitUntil(condition, {timeout, timeoutMsg, interval})
   * condition is a function that should return a boolean
   */
  await browser.waitUntil(
    async function () {
      return (
        (await browser.getTitle()) ==
        "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO"
      );
    },
    {
      timeout: 20000,
      interval: 500,
      timeoutMsg: `Failed loading WDIO web page: ${await browser.getTitle()}`,
    }
  );
});

Then(
  /^Verify if all users exist in customers list$/,
  async function () {}
);
