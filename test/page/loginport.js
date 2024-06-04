class SignInPage {

    get emailTextbox() {
        return $('[placeholder="Email *"]')
    }
    get passwordTextbox() {
        return $('[placeholder="Password *"]')
    }
    get signinButton() {
        return $('button.mat-raised-button.mat-primary')
    }
    get logoText(){
        return $('footer')
    }

    async Signin(email, password ) {
        await this.emailTextbox.setValue(email)     // короче всё бужет ровно если они все связываюися друг с другом
        await this.passwordTextbox.setValue(password)
        await this.signinButton.click()
    }

    async checkLogo(text) {
        await expect(this.logoText).toHaveTextContaining(text)
    }
}
module.exports = new SignInPage()