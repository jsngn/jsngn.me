window.onscroll = function() {stickHeader()};

var header = document.getElementById("stickyHeader");

var sticky = header.offsetTop;

function stickHeader() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	}
	else {
		header.classList.remove("sticky");
	}
}
