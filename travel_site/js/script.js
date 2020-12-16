let menu = document.querySelector('#menu');
let links = document.getElementById('links');
let width = window.matchMedia("(max-width: 1200px)")

let discover = document.querySelector('#discover');
let tours = document.getElementById('tours');

console.log(width);

window.addEventListener('resize', function () {
    window.location.reload(); 
});

if (width.matches) { 
    menu.addEventListener("click", function(){ 
        if(links.style.display == 'flex'){
            links.style.display = "none";
        } else {
            links.style.display = "flex";
        }
    });
    discover.addEventListener("click", function(){ 
        if(tours.style.display == 'flex'){
            tours.style.display = "none";
        } else {
            tours.style.display = "flex";
        }
    });
} else { 
     loticraTxt.style.display = "block";
}