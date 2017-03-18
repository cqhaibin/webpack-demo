var webDriver = require('selenium-webdriver');
var driverServer = require('selenium-server');
debugger;
var By = webDriver.By;
process.env.SELENIUM_BROWSER = require('chromedriver').path;
console.log(driverServer.path);

var driver = new webDriver.Builder().forBrowser('chrome').usingServer(driverServer.path).build();
driver.get('http://www.baidu.com');
driver.quit();