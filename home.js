
let sky_night = document.getElementById('sky_night');
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let mountain = document.getElementById('mountain');
let btn = document.getElementById('btn');


window.addEventListener('scroll',function()
{
    let value = window.scrollY;
    sky_night.style.left = value  * 0.15 + 'px';
    moon.style.top = value  * 1.25 + 'px';
    mountain.style.top = value  * 0.0 + 'px';
    text.style.marginRight = value  * 4 + 'px';
    text.style.marginTop = value  * .001 + 'px';
    btn.style.marginTop = value  * .5 + 'px';
    
})
