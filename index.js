const express = require ('express')
const app= express()
//var natural = require('natural');

var natural = require('natural');

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

////////////////

var StopwordsFilter = require('node-stopwords-filter');
var f = new StopwordsFilter();

var input = String.raw `"Excellent teacher with strong, relevant subject knowledge and industry experience;
Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
The option to select group or individual assignment was a very big plus
Access to additional learning resources, made easy, was appreciated and utilised
Quick responses from Thor to questions when asked."`;
//console.log(f.filter(input));
//////////////////////////////

var Sentiment = require('sentiment');
var sentiment = new Sentiment();
var result = sentiment.analyze(String.raw `"Excellent teacher with strong, relevant subject knowledge and industry experience;
Access to videos of the on campus lectures were helpful although I didn't like that they seemed to replace blackboard lectures for cloud students)
The option to select group or individual assignment was a very big plus
Access to additional learning resources, made easy, was appreciated and utilised
Quick responses from Thor to questions when asked."`);
console.dir(result);

/////////////////////////////////
app.get('/', (req,res) => {
    //res.sendFile(__dirname+'chart.html')
    res.send("hello")
})

app.listen(3001)