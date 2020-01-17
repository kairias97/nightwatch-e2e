const Handle = {
  signIn: function (email, password) {
    return this
      .setValue('@email', email)
      .setValue('@password', password)
      .click('@submit')
  }
}
module.exports = {
  url: function () {
    return this.api.launch_url
  },
  commands: [Handle],
  elements: {
    email: {
      selector: 'input[type="text"]'
    },
    password: 'input[type="password"]',
    submit: 'button[type="submit"]'
  }
}
