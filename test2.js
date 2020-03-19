var fs = require('fs')
const cheerio = require('cheerio');

const { Builder, By, Key, Util } = require("selenium-webdriver")
var items = []
async function example() {

  let driver = await new Builder().forBrowser("firefox").build()

  for (var i = 1; i < 7; i++) {
    var urltovisit = `https://www.tokopedia.com/search?q=processor%20intel%20core%20i5&source=universe&st=product&page=${i}`
    await driver.get(urltovisit)
    var html = await driver.executeScript("return document.getElementsByTagName('html')[0].innerHTML");

    scrapePage(html)
    driver.sleep(7000)

  }

  // var elem = await driver.findElement(By.id("zeus-root"))

}

function scrapePage(html) {
  var $ = cheerio.load(html)

  $("#zeus-root").each(function (i, e) {

    var nama_barang = $(e).find("span.css-1bjwylw")
    var list_harga = $(e).find("span.css-o5uqvq")


    $(list_harga).each(function (i, e) {
      // console.log(`i : ${i} and e : ${$(e).text()}`)
    })

    $(nama_barang).each(function (i, e) {
      // console.log(`i : ${i} and e : ${$(e).text()}`)
    })

  })
}

function getDateToday() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return today
}


example()