const SignInPage = require('../page/loginport')
//describe('Demo test', function(){})  1 способ объявления функции
describe('Test sign in object', () => {
    it('Sign in test', async () => {
        browser.url('http://ask-int.portnov.com/#/login')

        await SignInPage.Signin('teacherBP1@gmail.com', '12345')
        await SignInPage.checkLogo('Assessment Control @ Portnov')

        //await $('[placeholder="Email *"]').setValue('teacherBP1@gmail.com')
        //await $('[placeholder="Password *"]').setValue('12345')
        //await $('button.mat-raised-button.mat-primary').click()
        //await expect($('footer')).toHaveTextContaining('Assessment Control @ Portnov')

        browser.pause(1000)
    })
})