module.exports = {
  '@disabled': true,
  'step one: navigate to ecosia.org' : function (browser) {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', ['nightwatch', browser.Keys.ENTER])
  },
  'step two: click submit' : function (browser) {
    browser
      .assert.containsText('.mainline-results', 'Nightwatch.js')
      .end();
  }
};
