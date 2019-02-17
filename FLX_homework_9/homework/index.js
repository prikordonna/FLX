const data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
    ]

//1
function findTypes() {
    let argumentsType = [];
    for (let i = 0; i < arguments.length; i++) {
        argumentsType.push(typeof arguments[i]);
    }
    return argumentsType;
}
findTypes(null, 5, "hello");

//2
function executeforEach (array, callback) {
    for (let i = 0; i < array.length; i ++) {
        callback(array[i]);
    }
}
executeforEach([1,2,3], (el) => console.log(el));

//3
function mapArray(arr, callback) {
    let sum = [];
    executeforEach(arr, el => sum.push(callback(el)) );
    return sum;
}
mapArray([2, 5, 8], el => el + 3);

//4
function filterArray(numbers, callback) {
    let bigger = [];
    executeforEach(numbers, el => callback(el) ? bigger.push(el) : "" );
    return bigger;
}
filterArray([2, 5, 8], el => el > 3);

//5
function getAmountOfAdultPeople (data) {
    return filterArray(data, function (el) {
        if (el.age > 18) {
            return true;
        }
    }).length;
}
getAmountOfAdultPeople(data);

//6
function getGreenAdultBananaLovers (data) {
    return mapArray(filterArray(data, function (el) {
        if(el.favoriteFruit === "banana" && el.eyeColor === "green") {
            return el.name;
        }
    }), el => el.name );
}
getGreenAdultBananaLovers(data);

//7
function objectKeys (obj) {
    let keys = [];
    for (const key in obj) {
        keys.push(key);
    }
    return keys;
}
objectKeys({keyOne:1, keyTwo:2, keyThree: 3});

//8
function objectValues (obj) {
    let values = [];
    for (const key in obj) {
        values.push(obj[key]);
    }
    return values;
}
objectValues({keyOne:1, keyTwo:2, keyThree: 3});

//9
function showFormattedDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let inputMonth = months[date.getMonth()];
    return `Date: ${date.getDate()} of ${inputMonth}, ${date.getFullYear()}`;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

//10
function isEvenYear(date) {
    let currentYear = date.getFullYear();
    if (currentYear % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEvenYear(new Date('2019-01-27T01:10:00'));

//11
function isEvenMonth(date) {
    let month = date.getMonth();
    if ((month + 1) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
isEvenMonth(new Date('2019-02-27T01:10:00'));