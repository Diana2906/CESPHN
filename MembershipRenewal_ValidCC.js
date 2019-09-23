// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Valid CC', function() {
  this.timeout(50000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Valid CC', async function() {
    await driver.get("https://dev-cesphn.cs115.force.com/apex/membershiprenewal")
    await driver.findElement(By.id("memberNumber")).click()
    await driver.findElement(By.id("memberNumber")).sendKeys("201097")
    await driver.findElement(By.id("memberEmail")).click()
    await driver.findElement(By.id("memberEmail")).sendKeys("developer+selenium@vertic.com.au")
    await driver.sleep(5000)
    await driver.findElement(By.id("cardNumber")).sendKeys("4444 3333 2222 1111")
    await driver.findElement(By.id("customerName")).click()
    await driver.findElement(By.id("customerName")).sendKeys("selenium")
    await driver.findElement(By.id("Expiry Month")).click()
    {
      const dropdown = await driver.findElement(By.id("Expiry Month"))
      await dropdown.findElement(By.css("*[value='06']")).click()
    }
    await driver.findElement(By.id("Expiry Year")).click()
    {
      const dropdown = await driver.findElement(By.id("Expiry Year"))
      await dropdown.findElement(By.css("*[value='2032']")).click()
    }
    await driver.findElement(By.id("CVN")).click()
    await driver.findElement(By.id("CVN")).sendKeys("123")
    await driver.findElement(By.css(".rsform-submit-button")).click()
    await driver.wait(until.elementLocated(By.css(".toast-success")), 20000)
  })
})
