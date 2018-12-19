//Toggle Mobile menu expansion when icon is clicked.
function mobileNavToggle() {
    var x = document.getElementById("mobileNav");
    if (x.className === "mobilenav") {
		x.classList.toggle("animate");
        x.className += " responsive";
    } else {
		x.classList.toggle("animate");
        x.className = "mobilenav";
    }
	
}

// Displays button once page has been scrolled more than 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

//Scroll to top
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

//Gallery
function gallery(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}