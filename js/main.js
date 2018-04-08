var buttons = document.querySelectorAll(".btn");
var contents = [
    
    "<figure><img src=\"./img/photovoltaic-system.jpg\" alt=\"Solar Energy\"><figcaption>Solar Energy</figcaption><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo mauris, ullamcorper eu tellus in, consectetur tincidunt odio. Integer fringilla, metus id eleifend laoreet, quam neque finibus quam, eget efficitur sem leo sit amet velit. Nam a bibendum tortor, ac elementum metus. Donec suscipit quam ut nisl vestibulum, id vestibulum lorem ullamcorper.Integer fringilla, metus id eleifend laoreet, quam neque finibus quam, eget efficitur sem leo sit amet velit. Nam a bibendum tortor, ac elementum metus. Donec suscipit quam ut nisl vestibulum, id vestibulum lorem ullamcorper.</p></figure>",
    
    "<figure><img src=\"./img/windrader.jpg\" alt=\"Wind Energy\"><figcaption>Wind Energy</figcaption><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo mauris, ullamcorper eu tellus in, consectetur tincidunt odio. Integer fringilla, metus id eleifend laoreet, quam neque finibus quam, eget efficitur sem leo sit amet velit. Nam a bibendum tortor, ac elementum metus. Donec suscipit quam ut nisl vestibulum, id vestibulum lorem ullamcorper.Integer fringilla, metus id eleifend laoreet, quam neque finibus quam, eget efficitur sem leo sit amet velit. Nam a bibendum tortor, ac elementum metus. Donec suscipit quam ut nisl vestibulum, id vestibulum lorem ullamcorper.</p></figure>",
    
    "<figure><img src=\"./img/hydro.jpg\" alt=\"Hydro Energy\"><figcaption>Hydro Energy</figcaption><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo mauris, ullamcorper eu tellus in, consectetur tincidunt odio. Integer fringilla, metus id eleifend laoreet, quam neque finibus quam, eget efficitur sem leo sit amet velit. Nam a bibendum tortor, ac elementum metus. Donec suscipit quam ut nisl vestibulum, id vestibulum lorem ullamcorper.Integer fringilla, metus id eleifend laoreet, quam neque finibus quam, eget efficitur sem leo sit amet velit. Nam a bibendum tortor, ac elementum metus. Donec suscipit quam ut nisl vestibulum, id vestibulum lorem ullamcorper.</p></figure>"];

var container = document.querySelector(".container");
    
    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/windrader.jpg",
           "./img/photovoltaic-system.jpg",
           "./img/hydro.jpg"
        ];
        
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };  

    window.addEventListener("load", preloader);

    container.innerHTML = contents[0];

function handleClick(ev) {
    console.log(ev.target.innerHTML);
    for (i = 0; i < buttons.length; i += 1) {
        if (buttons[i].hasAttributes("id")) {
            buttons[i].removeAttribute("id");
        }
    }
    if (ev.target.innerHTML === "Solar Energy") {
        container.innerHTML = contents[0];
    }
    
    if (ev.target.innerHTML === "Wind Energy") {
        container.innerHTML = contents[1];
    }
    
    if (ev.target.innerHTML === "Hydro Energy") {
        container.innerHTML = contents[2];
    }
    
    ev.target.parentNode.setAttribute("id", "active");
}

    for (k = 0; k < buttons.length; k += 1) {
        buttons[k].addEventListener("click", handleClick, false);
}