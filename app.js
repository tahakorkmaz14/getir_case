var express = require('express');
var createError = require('http-errors');
const bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true";

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

class UserResponse {
    code;
    msg;
    records;
}

app.post('/get', (req, res) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("getir-case-study");
        var projectionQ = {_id:0, key:1, createdAt:1, totalCount:{"$sum": "$counts"}};
        var matchQ = {$and: [
            {createdAt: { $gte: new Date (req.body.startDate) }},
            {createdAt: { $lte: new Date(req.body.endDate) }},
            {totalCount: {$gte:req.body.minCount}},
            {totalCount: {$lte:req.body.maxCount}}
         ]};

        dbo.collection("records").aggregate().project(projectionQ).match(matchQ).toArray(function(err, result) {
            if (err) throw err;
            const response = new UserResponse();
            response.code = "0";
            response.msg = "success";
            response.records = result;
            res.json(response)
            db.close();
        });
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    const response = new UserResponse();
    response.code = err.status.toString();
    response.msg = err.message;
    response.records = [];
    res.json(response)
});

module.exports = app;
