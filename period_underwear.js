var category = "תחתוני מחזור"
document.getElementById("category").innerHTML = category

var items = [
    {
        name: 'מודי בודי', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/logo_modibodi.png.png"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://modibodi.co.il/"
    },
    {
        name: 'אינטימה', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://www.intima-il.co.il/lingerie/period-underwear"
    },
    {
        name: 'דלתא', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://www.delta.co.il/women/period-underwear"
    },
    {
        name: 'סופר פארם', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://shop.super-pharm.co.il/care/feminine-hygiene-products/period-underwear/c/15211800"
    },
    {
        name: "ג'ק קובה", desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://jack-kuba.co.il/period-panties"
    },
    {
        name: 'נקסט', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://www.next.co.il/he/shop/promotion-periodpants-0"
    },
    {
        name: 'ליליבלום', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://lilibloom.co.il/product-category/%d7%aa%d7%97%d7%aa%d7%95%d7%a0%d7%99%d7%9d/"
    },
    {
        name: 'כותנה', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://www.cottna.co.il/c/_%D7%AA%D7%97%D7%AA%D7%95%D7%A0%D7%99_%D7%9E%D7%97%D7%96%D7%95%D7%A8"
    },
    {
        name: 'פיקס', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://www.fixfixfixfix.co.il/period-underwear"
    },
    {
        name: 'פלוקס', desc: 'תחתוני מחזור רב שימושיים', img: ".././images/hope.jpg"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://fluxundies.co.il/"
    },
    
];

var template = Handlebars.compile(document.getElementById("product-template").innerHTML);
var itemList = document.getElementById("product-list");

items.forEach(function (item) {
    var html = template(item);
    itemList.innerHTML += html;
});