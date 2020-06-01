// Iki gawe Navbar On Scroll Height COK
window.onscroll = function() {scrollFungsi()};

function scrollFungsi() {
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header-judul").style.fontSize = "35px";
    }
    else {
        document.getElementById("header-judul").style.fontSize = "60px";
    }
}

// IKi Ngunu gawe Galeri COK
$(document).ready(function () {
    $('.galeri').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled: true
        }
    });
});