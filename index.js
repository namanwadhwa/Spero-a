const express = require ('express')
const app = express()
//var natural = require('natural');

var natural = require('natural');
const XLSX = require('xlsx');
const workbook = XLSX.readFile('De-identified student comments.xlsx');
const sheet_name_list = workbook.SheetNames;
a = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

for (item in a) {
    helpful = a[item]['HELPFUL']
    improve = a[item]['IMPROVE']
    if(helpful === undefined){ continue }{
        //console.log(helpful)
    }
    if(improve === undefined){ continue }
       //console.log(improve);
    }
  //}
  //console.log(typeof(helpful))
const readXlsxFile = require('read-excel-file/node');
// File path.

string = ""
var rows =  readXlsxFile('De-identified student comments.xlsx', { sheet: 'POSITIVE' }).then((rows) => {
   v = string.concat(rows)

//var row =  readXlsxFile('De-identified student comments.xlsx', { sheet: 'NEGATIVE' }).then((row) => {
//    console.log(row)
//})
//{'1': 'Helpful',
 // '2': 'Improve',
 // '3': 'Both comments- response per row',
 // '4': 'NEGATIVE',
 // '5': 'POSITIVE' }
    // `rows` is an array of rows
   // each row being an array of cells.
//readXlsxFile(file, { getSheets: true }).then((sheets) => {
    // sheets === { 1: 'Sheet1', 2: 'Sheet2' }
//})

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze( v ,String.raw `"Excellent teacher with strong, relevant subject knowledge and industry experience;
Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
The option to select group or individual assignment was a very big plus
Access to additional learning resources, made easy, was appreciated and utilised
Quick responses from Thor to questions when asked."`);
console.dir(result);
})

var tokenizer = new natural.WordTokenizer();

var a= (tokenizer.tokenize(String.raw`Excellent teacher with strong, relevant subject knowledge and industry experience;
Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
The option to select group or individual assignment was a very big plus
Access to additional learning resources, made easy, was appreciated and utilised
Quick responses from Thor to questions when asked.`))

//console.log(a);

var Analyzer = require('natural').SentimentAnalyzer;
var stemmer = require('natural').PorterStemmer;
var analyzer = new Analyzer("English", stemmer, "afinn");
// getSentiment expects an array of strings
//console.log(analyzer.getSentiment(a));

var StopwordsFilter = require('node-stopwords-filter');
var f = new StopwordsFilter();

var input = String.raw `"Excellent teacher with strong, relevant subject knowledge and industry experience;
Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
The option to select group or individual assignment was a very big plus
Access to additional learning resources, made easy, was appreciated and utilised
Quick responses from Thor to questions when asked."`;
//console.log(f.filter(input));

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze(String.raw `"Excellent teacher with strong, relevant subject knowledge and industry experience;
Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
The option to select group or individual assignment was a very big plus
Access to additional learning resources, made easy, was appreciated and utilised
Quick responses from Thor to questions when asked."`);
console.dir(result);

app.get('/', (req,res) => {
    //res.sendFile(__dirname+'chart.html')
    res.send("hello")
})

app.listen(3001)