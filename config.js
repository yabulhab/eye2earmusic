let x = "y";
console.log(x)

let hostname = window.location.hostname;
console.log("hostname is " + hostname);

if (hostname === "yabulhab.github.io") {
	window._ROOT_FILE_PATH_ = "/eye2earmusic";
} else if (hostname === "localhost") {
	window._ROOT_FILE_PATH_ = ".";

} else {
	console.log("I'm confused. Where are we?");
}