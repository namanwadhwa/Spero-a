const express = require ('express')
const app = express()
const natural = require('natural');
const tokenizer = new natural.WordTokenizer()
const sw = require('stopword')
const eng = sw.en
const bayes = require('bayes')
//const w2v = require('word2vec');

//console.log(w2v)
const XLSX = require('xlsx');
const workbook = XLSX.readFile('De-identified student comments.xlsx');
const sheet_name_list = workbook.SheetNames;
a = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])

for (item in a) {
    //console.log(a)
    
    helpful = a[item]['HELPFUL']
    improve = a[item]['IMPROVE']
    if(helpful === undefined){ continue }{
        helpfull = helpful
        console.log(helpfull)
        helpful_words = tokenizer.tokenize(helpful)
        text = sw.removeStopwords(helpful_words,eng)
        stem_words = natural.PorterStemmer.stem(helpful)
        stem_token = tokenizer.tokenize(stem_words)

        var classifier = bayes()
        // teach it positive phrases
        classifier.learn(helpful,'positive')
        var stateJson = classifier.toJson()
        // load the classifier back from its JSON representation.
        var revivedClassifier = bayes.fromJson(stateJson)
        console.log(revivedClassifier)

        // w2v.loadModel( './vectors.txt', function( error, model ) {
        //         console.log( model );
        //     });
    }
}    
//         const readXlsxFile = require('read-excel-file/node');
// // File path.

// string = ""
// var rows =  readXlsxFile('De-identified student comments.xlsx', { sheet: 'POSITIVE' }).then((rows) => {
// v = string.concat(rows)
// console.log(v)
// })
//     if(improve === undefined){ continue }{
//         improve = improve
//         //console.log(improve)

//     }

// //console.log(revivedClassifier)
//     }
        //stem_words = natural.PorterStemmer.stem(helpfull)
        //stem_token = tokenizer.tokenize(stem_words)
        //console.log(stem_words)
        //console.log(typeof(stem_token))