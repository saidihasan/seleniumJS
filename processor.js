/**
 * processor.js
 * Basicly generates scehma of json
 * about processor and mother that match both
 * they got a field for processor :
 * id
 * name
 * code_named
 * 
 * and save it as a json
 */
var fs = require('fs')
const cheerio = require('cheerio');

const { Builder, By, Key, Util } = require("selenium-webdriver");
const writeToCsv = require("./tools/writeToCsv")

(async function () {
    var url = "http://www.cpu-world.com/info/Intel/processor-number.html"
    let driver = await new Builder().forBrowser("firefox").build()

    await driver.get(url)



})();

function scrape(){
    
}