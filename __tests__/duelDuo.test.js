const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  }); 
  test("check that clicking the draw button displays the div with id=choices", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    element = await driver.findElement(By.id("choices"));
    await driver.wait(until.elementIsVisible(element),1000);
  });
  test("Check that clicking an Add to Duo button displays the div with id = player-duo", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click();
    await driver.findElement(By.className("bot-btn")).click();
    element = await driver.findElement(By.id("player-duo"));
    await driver.wait(until.elementIsVisible(element),1000);

  });
});