
var items = [
    {
        category: 'תחתוני מחזור', page: './products.html?script=period_underwear', img: "./images/period_underwear.jpg",
    },
    {
        category: 'תחתוניות', page: './products.html?script=pantyliner', img: "./images/pantyliner.jpg",
    },
    {
        category: 'גביעוניות', page: './products.html?script=menstrual_cup', img: "./images/menstrual_cup.jpg",
    },
    {
        category: 'מדחום ביוץ', page: './products.html?script=thermometer', img: "./images/thermometer.jpg",
    },
    {
        category: 'רפידות הנקה', page: './products.html?script=nursing_pads', img: "./images/nursing_pads.jpg",
    },
    {
        category: 'מאמני רצפת אגן', page: './products.html?script=pelvic_floor_trainer', img: "./images/pelvic_floor_trainer.jpg",
    },
    {
        category: 'דאודורנט ללא כימיקלים', page: './products.html?script=deodorant', img: "./images/deodorant.jpg",
    },
    {
        category: 'מכנסי טיולים', page: './products.html?script=pants', img: "./images/pants.jpg",
    },
    {
        category: 'משאבות הנקה', page: './products.html?script=pumps', img: "./images/pumps.jpg",
    },
    {
        category: 'אפליקציות', page: './products.html?script=apps', img: "./images/mobile.jpg",
    },

    
];

var template = Handlebars.compile(document.getElementById("store-template").innerHTML);
var itemList = document.getElementById("store-list");

items.forEach(function (item) {
    var html = template(item);
    itemList.innerHTML += html;
});