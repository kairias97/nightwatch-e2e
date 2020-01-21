const email = 'admin@phptravels.com'
const password = 'demoadmin'
const URL = 'https://www.phptravels.net/admin'
module.exports = {
  beforeEach: function (browser) {
    let login = browser.page.login()
    
    login.navigate()
    login.expect.element('@email').to.be.visible
    login.expect.element('@password').to.be.visible
    login
      .verify.valueContains('@email', '')
      .assert.valueContains('@password', '')
  },
  'should login with credentials': function (browser) {
    // let login = browser.page.login()
    // login.signIn(email, password)
    browser
      .login(email, password) //using custom command login
      .waitForElementVisible('body')
      .assert.elementPresent('.serverHeader')
  },
  'should not login without email': function (browser) {
    let login = browser.page.login()
    login
      .verify.valueContains('@email', '')
      .assert.valueContains('@password', '')
      .signIn('', password);
    browser
      .assert.not.elementPresent('.serverHeader')
    
  },
  afterEach: function (browser) {
    browser.end()
  }
}