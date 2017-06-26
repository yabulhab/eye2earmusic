let x = "y";
console.log(x)

let hostname = window.location.hostname;
console.log("hostname is " + hostname);

if (hostname === "https://yabulhab.github.io/eye2earmusic/") {
	window._ROOT_FILE_PATH_ = "/eye2earmusic";
} else if (hostname === "localhost") {
	window._ROOT_FILE_PATH_ = ".";
} else {
	console.log("I'm confused. Where are we?");
}