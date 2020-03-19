var fs = require('fs')

const {Builder,By,Key,Util} = require("selenium-webdriver")
async function example(){
  let driver = await new Builder().forBrowser("firefox").build()
  await driver.get("https://www.tokopedia.com/search?q=processor+intel+core+i5&source=universe&st=product")
  let elem = await driver.findElement(By.id("zeus-root"))



  elem.getAttribute("innerHTML").then(function(res){
    fs.writeFile("tokopedia.html",res,function(err){
      if(err){
        console.log("Error writing file")
      }else{
        console.log("Writed!")
      }
    })

  })
  
}

example()