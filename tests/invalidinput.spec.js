// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('invalidinput', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('invalidinput', async function() {
    await driver.get("http://127.0.0.1:5500/src/")
    await driver.manage().window().setRect({ width: 1470, height: 920 })
    await driver.findElement(By.id("num1")).click()
    await driver.findElement(By.id("num1")).sendKeys("a")
    await driver.findElement(By.id("num2")).click()
    await driver.findElement(By.id("num2")).sendKeys("3")
    await driver.findElement(By.css("button:nth-child(1)")).click()
  })
})
