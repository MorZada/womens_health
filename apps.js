

var category = "אפליקציות"
document.getElementById("category").innerHTML = category

var items = [
    {
        name: 'Clue', desc: 'מעקב אחר המחזור והביוץ', img: ".././images/anabella_pump.png"
        , eco: 'אנדרואיד ואייפון', israel: "מיוצר בישראל",
        url: "https://helloclue.com/"
    },
    {
        name: 'ilo', desc: 'משאבת חלב המתחברת לחזיה, ומאפשרת שאיבה ללא שימוש בידיים.', img: ".././images/biamba_pump.png"
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