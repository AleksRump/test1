
describe('Demo test', function () {

    it('My first Test', async () => {
        browser.url('http://ask-int.portnov.com/#/login')
        await $('[placeholder="Email *"]').setValue('teacherBP1@gmail.com')
        await $('[placeholder="Password *"]').setValue('12345')
        await $('button.mat-raised-button.mat-primary').click()
        //browser.keys('Enter')

        browser.pause(1000)
    })
})
