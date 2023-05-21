// $(".btn-view").on('click', function(){
//     window.open($(".btn-view").attr("value"));
// });

// var productsViewButtons = document.querySelectorAll(".btn-view")

// productsViewButtons.forEach(function(btn) {
//     btn.addEventListener("click", function () {
//         window.open(btn.getAttribute("value"))
//     });
// });

$(".btn-view").click(function() {
    var value = $(this).attr("value")
    console.log(value);
    window.open(value)
});

