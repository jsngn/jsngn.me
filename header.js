/* Makes header sticky upon scroll, right now only needed for mobile */
window.onscroll = function() {stickHeader()};

var header = document.getElementById("stickyheader");

var sticky = header.offsetTop;

function stickHeader() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	}
	else {
		header.classList.remove("sticky");
	}
}
