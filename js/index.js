let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let o1 = document.querySelector(".o1");
let o2 = document.querySelector(".o2");
let o3 = document.querySelector(".o3");


let article1 = document.querySelector(".article1");
let article2 = document.querySelector(".article2");
let article3 = document.querySelector(".article3");

article1.style.display = "none";
article2.style.display = "none";
article3.style.display = "none";

article1.style.display = "block";
option1.style="background-color: #5a8d3e; color:#fff;"

option1.onclick = function(){
    article1.style.display = "none";
    article2.style.display = "none";
    article3.style.display = "none";

    article1.style.display = "block";
    option1.style=".option:focus"
    option2.style=".option"
    option3.style=".option"
}
option2.onclick = function(){
    article1.style.display = "none";
    article2.style.display = "none";
    article3.style.display = "none";

    article2.style.display = "block";
    option1.style=".option"
    option2.style=".option:focus"
    option3.style=".option"
}
option3.onclick = function(){
    article1.style.display = "none";
    article2.style.display = "none";
    article3.style.display = "none";

    article3.style.display = "block";
    option1.style=".option"
    option2.style=".option"
    option3.style=".option:focus"
}
o1.onclick = function(){
    article1.style.display = "none";
    article2.style.display = "none";
    article3.style.display = "none";

    article1.style.display = "block";
    option1.style="background-color: #5a8d3e ; color:#fff;"
    option2.style="background-color: #fff ; color:#5a8d3e;"
    option3.style="background-color: #fff ; color:#5a8d3e;"
}
o2.onclick = function(){
    article1.style.display = "none";
    article2.style.display = "none";
    article3.style.display = "none";

    article2.style.display = "block";
    option1.style="background-color: #fff ; color:#5a8d3e;"
    option2.style="background-color: #5a8d3e ; color:#fff;"
    option3.style="background-color: #fff ; color:#5a8d3e;"
}
o3.onclick = function(){
    article1.style.display = "none";
    article2.style.display = "none";
    article3.style.display = "none";

    article3.style.display = "block";
    option1.style="background-color: #fff ; color:#5a8d3e;"
    option2.style="background-color: #fff ; color:#5a8d3e;"
    option3.style="background-color: #5a8d3e ; color:#fff;"
}


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $("nav").addClass("bg-1");
            $("nav").addClass("shadow-sm");
        } else {
           $("nav").removeClass("bg-1");
           $("nav").removeClass("shadow-sm");
        }
    });
});