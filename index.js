const express = require ('express')
const app = express()
//const classifier = new natural.BayesClassifier();
const natural = require('natural');
const tokenizer = new natural.WordTokenizer()
const sw = require('stopword')
const eng = sw.en
var bayes = require('bayes')

const XLSX = require('xlsx');
const workbook = XLSX.readFile('De-identified student comments.xlsx');
const sheet_name_list = workbook.SheetNames;
a = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
//console.log(a)

for (item in a) {
    helpful = a[item]['HELPFUL']
    improve = a[item]['IMPROVE']
    if(helpful === undefined && improve === undefined){ continue }{
        //console.log(helpful)
        console.log(improve)
        
        // helpful_words = tokenizer.tokenize(helpful)
        // text = sw.removeStopwords(helpful_words,eng)
        // //console.log(text)
        // stem_words = natural.PorterStemmer.stem(helpful)
        // stem_token = tokenizer.tokenize(stem_words)
        // //console.log(stem_words)
        //console.log(typeof(stem_token))
    }
        //var reg = '\s+[a-zA-Z]\s+'
        //console.log(stem_token)

var classifier = bayes()

// teach it positive phrases

classifier.learn(helpful, 'expections')
classifier.learn(helpful, 'feedback')
classifier.learn(helpful, 'marking')
classifier.learn(helpful, 'relevency')
classifier.learn(helpful, 'standard')

//classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive')

// teach it a negative phrase

//classifier.learn(helpful, 'negative')

// now ask it to categorize a document it has never seen before

//classifier.categorize('awesome, cool, amazing!! Yay.')
// => 'positive'

// serialize the classifier's state as a JSON string.
var stateJson = classifier.toJson()

// load the classifier back from its JSON representation.
var revivedClassifier = bayes.fromJson(stateJson)
        
console.log(revivedClassifier)

    if(improve === undefined){ continue }
       //console.log(improve);
  }  
  //}

//const readXlsxFile = require('read-excel-file/node');
// // File path.

// string = ""
//var rows =  readXlsxFile('De-identified student comments.xlsx', { sheet: 'POSITIVE' }).then((rows) => {
//v = string.concat(rows)
//console.log(v)
//})

// //var row =  readXlsxFile('De-identified student comments.xlsx', { sheet: 'NEGATIVE' }).then((row) => {
// //    console.log(row)
// //})
// //{'1': 'Helpful',
//  // '2': 'Improve',
//  // '3': 'Both comments- response per row',
//  // '4': 'NEGATIVE',
//  // '5': 'POSITIVE' }
//     // `rows` is an array of rows
//    // each row being an array of cells.
// //readXlsxFile(file, { getSheets: true }).then((sheets) => {
//     // sheets === { 1: 'Sheet1', 2: 'Sheet2' }
// //})



// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
// var result = sentiment.analyze( v ,String.raw `"Excellent teacher with strong, relevant subject knowledge and industry experience;
// Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
// The option to select group or individual assignment was a very big plus
// Access to additional learning resources, made easy, was appreciated and utilised
// Quick responses from Thor to questions when asked."`);
// //console.dir(result);

// var tokenizer = new natural.WordTokenizer();

// var a= (tokenizer.tokenize(String.raw`Excellent teacher with strong, relevant subject knowledge and industry experience;
// Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
// The option to select group or individual assignment was a very big plus
// Access to additional learning resources, made easy, was appreciated and utilised
// Quick responses from Thor to questions when asked.`))

// //console.log(a);

// var Analyzer = require('natural').SentimentAnalyzer;
// var stemmer = require('natural').PorterStemmer;
// var analyzer = new Analyzer("English", stemmer, "afinn");
// // getSentiment expects an array of strings
// //console.log(analyzer.getSentiment(a));

// var StopwordsFilter = require('node-stopwords-filter');
// var f = new StopwordsFilter();

// var input = String.raw `"Excellent teacher with strong, relevant subject knowledge and industry experience;
// Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
// The option to select group or individual assignment was a very big plus
// Access to additional learning resources, made easy, was appreciated and utilised
// Quick responses from Thor to questions when asked."`;
// //console.log(f.filter(input));

// var Sentiment = require('sentiment');
// var sentiment = new Sentiment();
// var result = sentiment.analyze(String.raw `"Excellent teacher with strong, relevant subject knowledge and industry experience;
// Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
// The option to select group or individual assignment was a very big plus
// Access to additional learning resources, made easy, was appreciated and utilised
// Quick responses from Thor to questions when asked."`);
// //console.dir(result);

// // app.get('/', (req,res) => {
// //     //res.sendFile(__dirname+'chart.html')
// //     res.send("hello")
// // })

//app.listen(3001)