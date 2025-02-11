// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Invalid CC (Allied Health Provider)', function() {
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
  it('Invalid CC (Allied Health Provider)', async function() {
    await driver.get("https://dev-cesphn.cs115.force.com/apex/MembershipSignUp")
    await driver.findElement(By.id("type")).click()
    {
      const dropdown = await driver.findElement(By.id("type"))
      await dropdown.findElement(By.css("*[value='Allied Health Provider - Medicare Approved']")).click()
    }
    await driver.sleep(5000)
    {
      const dropdown = await driver.findElement(By.id("category"))
      await dropdown.findElement(By.css("*[value='Dentist']")).click()
    }
    await driver.findElement(By.id("membershipPostcode")).sendKeys("123355677899")
    await driver.findElement(By.id("firstName")).sendKeys("Selenium")
    await driver.findElement(By.id("lastName")).sendKeys("Test")
    await driver.findElement(By.id("email")).sendKeys("developer+selenium@vertic.com.au")
    {
      const dropdown = await driver.findElement(By.id("product"))
      await dropdown.findElement(By.css("*[label='Default Product']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("gender"))
      await dropdown.findElement(By.css("*[value='Male']")).click()
    }
    await driver.findElement(By.xpath("//group-input/input")).sendKeys("Selenium")
    await driver.findElement(By.id("mobilePhone")).sendKeys("1237329204")
    await driver.findElement(By.css(".c-google-address-autocomplete > #address")).sendKeys("ggd")
    await driver.findElement(By.id("mailingStreet")).sendKeys("ggd")
    await driver.findElement(By.id("mailingCity")).sendKeys("mel")
    await driver.findElement(By.id("mailingState")).sendKeys("NT")
    await driver.findElement(By.id("mailingPostalCode")).sendKeys("193847383036")
    await driver.findElement(By.id("mobilePhone")).sendKeys("1237329204")
    await driver.findElement(By.css(".row:nth-child(6) > .col-sm-6:nth-child(1)")).click()
    await driver.findElement(By.id("cardNumber")).click()
    await driver.findElement(By.id("cardNumber")).sendKeys("4444 4444 4444 4444")
    await driver.findElement(By.id("customerName")).sendKeys("selenium")
    await driver.findElement(By.id("Expiry Month")).click()
    {
      const dropdown = await driver.findElement(By.id("Expiry Month"))
      await dropdown.findElement(By.css("*[value='08']")).click()
    }
    await driver.findElement(By.id("Expiry Year")).click()
    {
      const dropdown = await driver.findElement(By.id("Expiry Year"))
      await dropdown.findElement(By.css("*[value='2032']")).click()
    }
    await driver.findElement(By.id("CVN")).click()
    await driver.findElement(By.id("CVN")).sendKeys("123")
    await driver.findElement(By.css(".rsform-submit-button")).click()
    await driver.wait(until.elementLocated(By.css(".toast-error")), 20000)
  })
})
