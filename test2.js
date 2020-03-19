var fs = require('fs')
const cheerio = require('cheerio');

const { Builder, By, Key, Util } = require("selenium-webdriver")
var items = []
var html
async function example() {
  let driver = await new Builder().forBrowser("firefox").build()
  await driver.get("https://www.tokopedia.com/search?q=processor+intel+core+i5&source=universe&st=product")
  // var elem = await driver.findElement(By.id("zeus-root"))
  var html = await driver.executeScript("return document.getElementsByTagName('html')[0].innerHTML");
  
  var $ = cheerio.load(html)

  $("#zeus-root").each(function(i,e){

    var nama_barang = $(e).find("span.css-1bjwylw")
    var list_harga = $(e).find("span.css-o5uqvq")
    
    $(list_harga).each(function(i,e){
      console.log(`i : ${i} and e : ${$(e).text()}`)
    })

    $(nama_barang).each(function(i,e){
      console.log(`i : ${i} and e : ${$(e).text()}`)
    })

  })
}

example()