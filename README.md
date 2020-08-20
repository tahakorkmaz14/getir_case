# Getir Case Study

> NodeJS application for Getir case study

---

## Table of Contents

- [Installation](#installation)
- [Example](#example)
- [Tests](#tests)
- [Technologies](#technologies)

## Installation

### Clone

- Clone this repo to your local machine using `https://github.com/tahakorkmaz14/getir_case`

### Setup

- If you want more syntax highlighting, format your code like this:

> update and install these packages first

```shell
$ brew update
$ npm install
```

> now install and start mongodb

```shell
$ brew tap mongodb/brew
$ brew install mongodb-community@4.2
$ brew services start mongodb-community@4.2
```

> setup mongodb for projects

```shell
$ npm install -g mongodb
```

> install body parser for Post requests (REST API)

```shell
$ npm install --save body-parser
```

> install Jest for testing

```shell
$ npm install --save-dev jest supertest
```

> install Heroku for deployment

```shell
$ brew tap heroku/brew
$ brew install heroku/brew
```

---

## Example

> Deployed Heroku application link
  
  http://johnshepard14.herokuapp.com/get

> Example Body of the POST request

```
{
"startDate": "2016-01-26",
"endDate": "2018-02-02",
"minCount": 2000,
"maxCount": 3000
}
```

> Example response of the above request

```
{
    "code": "0",
    "msg": "success",
    "records": [
        {
            "key": "HKNUadsw",
            "createdAt": "2016-12-18T03:25:12.976Z",
            "totalCount": 2364
        },
        {
            "key": "bxoQiSKL",
            "createdAt": "2016-01-29T01:59:53.494Z",
            "totalCount": 2991
        },
        {
            "key": "dcJUSDLR",
            "createdAt": "2016-02-27T16:12:30.813Z",
            "totalCount": 2780
        },
        .
        .
        .
}   
```

---

## Tests

> Check the test results in the local directory

```shell
$ npm test
```

---

## Technologies

- NodeJS v12.18.2
- MongoDB Community Edition@4.2
- Jest and Supertest
- Heroku
