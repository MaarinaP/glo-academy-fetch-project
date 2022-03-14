"use strict";

let getData = fetch("db.json")
    .then((response) => response.json())
    .then((json) => {
        sendData("https://jsonplaceholder.typicode.com/posts", json, "POST", {
            "Content-type": "application/json; charset=UTF-8",
        });
    })
    .catch((error) => console.log(error));

const sendData = (url, json, method, headers) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(json),
        headers: headers,
    })
        .then((response) => response.json())
        .then((json) => console.log("example1", json))
        .catch((error) => console.log(error));
};

let getData2 = fetch("db.json")
    .then((response) => response.json())
    .then((json) => {
        return json;
    })
    .catch((error) => console.log(error));

const sendData2 = async (url) => {
    const data = await getData2;
    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((response) => response.json())
        .then((json) => console.log("example2", json))
        .catch((error) => console.log(error));
};

sendData2("https://jsonplaceholder.typicode.com/posts");
