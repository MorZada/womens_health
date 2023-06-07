
var items = [
    {
        category: 'תחתוני מחזור', page: './products.html?script=period_underwear', img: "./images/period_underwear.jpg",
    },
    {
        category: 'תחתוניות', page: './pumps.html', img: "./images/pantyliner.jpg",
    },
    {
        category: 'גביעוניות', page: './pumps.html', img: "./images/menstrual_cup.jpg",
    },
    {
        category: 'מדחום ביוץ', page: './pumps.html', img: "./images/thermometer.jpg",
    },
    {
        category: 'רפידות הנקה', page: './pumps.html', img: "./images/nursing_pads.jpg",
    },
    {
        category: 'מאמני רצפת אגן', page: './pumps.html', img: "./images/pelvic_floor_trainer.jpg",
    },
    {
        category: 'דאודורנט ללא כימיקלים', page: './pumps.html', img: "./images/deodorant.jpg",
    },
    {
        category: 'מכנסי טיולים', page: './pumps.html', img: "./images/pants.jpg",
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