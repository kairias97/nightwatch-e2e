const email = 'admin@phptravels.com'
const password = 'demoadmin'
const URL = 'https://www.phptravels.net/admin'
module.exports = {
  beforeEach: function (browser) {
    browser
      .url(browser.launch_url)
    browser.expect.element('input[type="text"]').to.be.visible
    browser.expect.element('input[type="password"]').to.be.visible
    browser
      .verify.valueContains('input[type="text"]', '')
      .assert.valueContains('input[type="password"]', '')
  },
  'should login with credentials': function (browser) {
    browser
      .setValue('input[name="email"]', email)
      .setValue('input[name="password"]', password)
      .click('button[type="submit"]')
      .waitForElementVisible('body')
      .assert.elementPresent('.serverHeader')
  },
  'should not login without email': function (browser) {
    browser
      .verify.valueContains('input[type="text"]', '')
      .assert.valueContains('input[type="password"]', '')
      .setValue('input[type="password"]', password)
      .click('button[type="submit"]')
      .assert.not.elementPresent('.serverHeader')
    
  },
  afterEach: function (browser) {
    browser.end()
  }
}
