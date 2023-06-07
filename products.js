
var items = [
    {
        name: 'אנאבלה', desc: 'משאבת חלב המחקה את פעולת הלשון של התינוק/ת.', img: "./images/anabella_pump.png"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://www.annabella-pump.co.il/"
    },
    {
        name: 'ביאמבה', desc: 'משאבת חלב המתחברת לחזיה, ומאפשרת שאיבה ללא שימוש בידיים.', img: "./images/biamba_pump.png"
        , eco: 'אקולוגי', israel: "מיוצר בישראל",
        url: "https://biamba.co.il/"
    },
    
];

var template = Handlebars.compile(document.getElementById("product-template").innerHTML);
var itemList = document.getElementById("product-list");

items.forEach(function (item) {
    var html = template(item);
    itemList.innerHTML += html;
});