const {By} = require('selenium-webdriver')

module.exports = {
    addMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Old Yeller')

        await driver.findElement(By.xpath('//button[text()="Add"]')).click()

        const movie = await driver.findElement(By.xpath('//li'))

        expect(movie.isDisplayed()).toBeTruthy()
    }
}