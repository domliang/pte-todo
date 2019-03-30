// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.home')
      .assert.containsText('h1', 'PTE-Todos')
      .click('.new-task-btn')
      .pause(1000)
      .setValue('.new-todo-input input', 'nightwatch')
      .pause(1000)
      .click('.new-task-save-btn')
      .pause(1000)
      .assert.containsText('.all-count', '1')
      .assert.containsText('.active-count', '1')
      .click('.toggle-all')
      .pause(1000)
      .assert.containsText('.active-count', '0')
      .pause(1000)
      .click('.clear-completed')
      .pause(1000)
      .assert.containsText('.all-count', '0')
      .end()
  }
}
