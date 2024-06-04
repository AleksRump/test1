describe("chromeport", () => {
  it("tests chromeport", async () => {
    await browser.setWindowSize(1085, 811)
    await browser.url("http://ask-int.portnov.com/#/login")
    await expect(browser).toHaveUrl("http://ask-int.portnov.com/#/login")
    await browser.$("#mat-input-2").click()
    await browser.$("#mat-input-2").setValue("teacherBP1@gmail.com")
    await browser.$("#mat-input-3").setValue("12345")
    await browser.$("/html/body/ac-root/mat-sidenav-container/mat-sidenav-content/main/ac-login-page/mat-card[1]/form/div/button/span").click()
    await browser.$("aria/Home[role=\"heading\"]").click()
    await browser.$("/html/body/ac-root/mat-sidenav-container/mat-sidenav/ac-side-menu/mat-list/a[2]/div").click()
    await browser.$("aria/Assignments[role=\"heading\"]").click()
    await browser.$("aria/User's Management[role=\"heading\"]").click()
    await browser.$("aria/Teachers[role=\"tab\"]").click()
    await browser.$("/html/body/ac-root/mat-sidenav-container/mat-sidenav/ac-side-menu/mat-list/a[6]/div").click()
    await browser.$("aria/Log Out").click()
    await browser.$("//*[@id=\"mat-dialog-2\"]/ac-modal-confirmation/div[2]/button[2]/span").click()
  });
});
// не воспроизводит после негго не находит элементы