var fs = require('fs')
const cheerio = require('cheerio');

const writeToCsv = require("./tools/writeToCsv")

const { Builder, By, Key, Util } = require("selenium-webdriver")
var id = 0
var objectResult = []

//Misc
var keyword = "i3-540 Processor"
var website = "tokopedia"

async function example() {

  let driver = await new Builder().forBrowser("firefox").build()

  for (var i = 1; i <= 4; i++) {
    var urltovisit = `https://www.tokopedia.com/search?q=${keyword}&source=universe&st=product&page=${i}`
    await driver.get(urltovisit)
    var html = await driver.executeScript("return document.getElementsByTagName('html')[0].innerHTML");

    await scrapePage(html)
    await driver.sleep(7000)

  }

  await writeToCsv.writeToCsv(objectResult, keyword, website)

}

async function scrapePage(html) {

  var $ = cheerio.load(html)

  $("#zeus-root").each(function (i, e) {
    var html_nama_barang = $(e).find("span.css-1bjwylw")
    var html_list_harga = $(e).find("span.css-o5uqvq")
    var html_list_url = $(e).find("div.css-1g20a2m")

    var harga = []
    var nama_barang = []
    var url = []

    $(html_list_harga).each(function (i, e) {
      // console.log(`${pages} i : ${i} and e : ${$(e).text()}`)
      harga[i] = $(e).text()

    })

    $(html_nama_barang).each(function (i, e) {
      // console.log(`${pages} i : ${i} and e : ${$(e).text()}`)
      nama_barang[i] = $(e).text()
    })



    $(html_list_url).each(function (i, e) {

      url[i] = $(e).find('a').attr('href')
    })

    for (var i; i <= harga.length; i++) {
      // console.log(`${nama_barang[i]} ${harga[i]}`)
      objectResult.push({
        date: getDateToday(),
        id_processor: 289,
        nama_barang: nama_barang[i],
        harga: harga[i],
        url: url[i],
        website: website
      })


    }

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