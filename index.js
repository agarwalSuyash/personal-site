// navbar diapperar
var newLocation;
var prevScrollpos = window.pageYOffset;
mybutton = document.getElementById("myBtn");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";             //navbar styling
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
      mybutton.style.display = "block";                           //scroll top button
    }
    else
    {
      mybutton.style.display = "none";  
    }
  } else {
    document.getElementById("navbar").style.top = "-150px";      //navbar styling
    mybutton.style.display = "none";                            //scroll top button
    }
  prevScrollpos = currentScrollPos;
}

//fades out a page
$('.nav-link').click(function(e) {
e.preventDefault();
newLocation = this.href;
$('body').fadeOut('slow', newpage);
	$('body').fadeIn('slow',newpage);
});
function newpage() {
window.location = newLocation;
}

// scroll to top button

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
