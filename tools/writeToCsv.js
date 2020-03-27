const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Example of records
// const records = [
//     {date: 'test', 'title_news': 'this is title news', desc: 'this is desc' }
//     {name: 'Bob',  lang: 'French, English'},
//     {name: 'Mary', lang: 'English'}
// ];

exports.writeToCsv = function (arrayObject, keyword, website){

    const csvWriter = createCsvWriter({
		path: `./csv-res/${keyword}-${website}.csv`,
        header: [
            {id: 'date', title: 'Date'},
            {id: 'id_processor', title: 'ID Processor'},
            {id: 'nama_barang', title: 'Nama Barang'} ,
            {id: 'harga', title:"Harga"},
            {id: 'url', title: "URL"},
            {id: 'website', title: "Website"}
        ],
        fieldDelimiter: ','
    })
    csvWriter.writeRecords(arrayObject).then(() => {
        console.log(`${keyword} writed to csv`)
    })
}