describe("chromepoba2", () => { // так же теряет кнопки приходится свмому искаит мз локаторы
  it("tests chromepoba2", async () => {
    await browser.setWindowSize(1085, 811)
    await browser.url("https://www.saucedemo.com/")
    await expect(browser).toHaveUrl("https://www.saucedemo.com/")
    await browser.$("//*[@data-test=\"login-credentials\"]").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("aria/Username").click()
    await browser.$("aria/Username").setValue("standard_user")
    await browser.$("//*[@data-test=\"login-password\"]").click()
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("aria/Password").click()
    await browser.$("aria/Password").setValue("secret_sauce")
    await browser.$('#login-button').click()
    await browser.$("//*[@data-test=\"inventory-item-name\"]").click()
    await browser.$("aria/Add to cart").click()
    await browser.$("aria/Remove").click()
    await browser.$("aria/Go back").click()
    await browser.$("//*[@data-test=\"inventory-item-name\"]").click()
    await browser.$("aria/Add to cart").click()
    await browser.$("aria/Remove").click()
    await browser.$("aria/Go back Back to products").click()
    await browser.$("#react-burger-menu-btn").click()
    await browser.$("aria/Logout").click()
  });
});
