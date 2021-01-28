var rng_views = document.getElementById("range_views");
var rng_out = document.getElementById("numbers_views");
var price_out = document.getElementById("price");
var time_abo = document.getElementById("time_abo");


var style = document.querySelector('[data="rangeBgColor"]');


var range_views = ["10K", "50K", "100K", "500K", "1M"];
var range_price_month = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];
var range_price_year = ["$72.00", "$108.00", "$144.00", "$216.00", "$324.00"];

var year = false;

function updateRange(){
    rng_out.textContent = range_views[rng_views.value];
    if(!year)
    {
        price_out.textContent = range_price_month[rng_views.value];
        time_abo.textContent = "month";
    }
    else
    {
        price_out.textContent = range_price_year[rng_views.value];
        time_abo.textContent = "year";
    }
};

function mouseDown(){
    document.getElementById("range_views").style.cursor = "grabbing";
    setColor("hsl(174,86%,35%)");
}

function mouseUp(){
    document.getElementById("range_views").style.cursor = "pointer";
    setColor("hsl(174, 86%, 45%)");
}

function setColor(color){
    style.innerHTML = "#range_views::-webkit-slider-thumb { background-color: "+ color +"; }";
}

window.addEventListener("DOMContentLoaded", updateRange);
rng_views.addEventListener("input", updateRange);