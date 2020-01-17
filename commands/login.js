const Events = require('events');

module.exports = class Login extends Events {
  command(email, password, cb) {
    this.api
      .setValue('input[type="text"]', email)
      .setValue('input[type="password"]', password)
      .click('button[type="submit"]')
    if (cb) {
      cb.call(this.api);
    }
  
    this.emit('complete');
  }
}
