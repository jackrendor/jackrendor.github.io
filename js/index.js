var texts = {
	sub1: "Software Developer",
	sub2: "CyberSec Enthusiast"
}
var sections = [
	[
		"Why these colors?",
		"I like cyan."
	],
	[
		"Who are you?",
		"I'm a <b>software developer</b>.<br><b>No</b>, I will not build websites for you <b><3</b>."
	],
	[
		"What are your skills?",
		"I have <b>deep knowledge</b> of <b>C/C++</b> and <b>Python</b>.<br>Currently studing <b>GoLang</b> and <b>PHP</b>.<br>I'm fairly experienced in the <b>infosec</b> environment and <b>system automation</b>."
	],
	[
		"What OS do you use?",
		"I use <b>Fedora</b> on my main PC. I'm fine with it since it gives me the stability I need and I like the story behind this distro."
	],
	[
		"Where can I find your works?",
		"You can find them on my <a href='https://github.com/jackrendor'>Github</a> page."
	],
	[
		"Do you have a blog?",
		"Actually, I'm writing posts and writeups for <a href='https://felinesec.com/'>FelineSec</a>.\nI am also working on my personal blog at the following url: <a href='https://blog.jackrendor.dev'>blog.jackrendor.dev</a>"
	],
	[
		"If you don't build websites, who made this?",
		"This site has been made by <a href='https://samtolomeo.xyz'>Samuele Tolomeo</a>, a <b>collegue</b> of mine and most of all, <b>a friend</b>."
	],
];

// replace <b> with <strong> for better screen reader support
sections.map(function (e) {
	return [e[0], e[1].replace(/(?:\<)(\/?|\S)(b>)/, '<$1strong>')]
})

// start writing into logo box
new TypeIt('.logo', {
	speed: 180,
	startDelay: 50,
	loop: true
})
.type('jack')
.pause(1500)
.delete()
.type('rendor')
.pause(1600)
.go()

// start writing first chip
new TypeIt('#sub1', {
	speed: 50,
	startDelay: 150,
	cursor: false,
	afterComplete: function () {
		setTimeout(function () {
			// start writing second chip
			new TypeIt('#sub2', {
				speed: 50,
				startDelay: 170,
				cursor: false,
			})
			.type(texts.sub2)
			.go()
		}, 1700)
		
	}
})
.type(texts.sub1)
.go()

// start showing sections
setTimeout(function () {
	// sections code start

	var sectionsCount = sections.length;
	var i = 0;
	var interval = setInterval(function () {
		if (i === sectionsCount) {
			document.querySelector('.contacts').classList.add("show")
			document.querySelector('footer').classList.add("show")
			clearInterval(interval)
			return
		}
		var section = sections[i]
		var parts = createSection()
		new TypeIt(parts[1], {
			speed: 50,
			startDelay: section[1],
			cursor: false,
			afterComplete: function () {
				setTimeout(function () {
					//console.log(section[1].length/10)
					new TypeIt(parts[2], {
						speed: 80-(30+(section[1].length/2.5)),
						startDelay: 50,
						cursor: false,
					})
					.type(section[1])
					.go()
				}, 200)
			}
		})
		.type(section[0])
		.go()
		i++
	}, 300)
	
	// sections code end
}, 1000)

function createSection (isBlog=false) {
	var a1, a2, small;
	var $ = document
	var section = $.createElement("section")
	if (isBlog) {
		small = $.createElement("small")
		section.appendChild(small)
		var a1 = $.createElement("a")
		a1.classList.add("title")
		section.appendChild(a1)
	} else {
		var h4 = $.createElement("h4")
		section.appendChild(h4)
	}
	var p = $.createElement("p")
	section.appendChild(p)
	if (isBlog) {
		a2 = $.createElement("a")
		a2.innerText = 'Read more'
		a2.classList.add("rm")
		section.appendChild(a2)
	}
	$.querySelector(".sections").appendChild(section)
	return [section, h4, p, a1, a2, small]
}

var body = document.getElementsByTagName("body")[0];

var div = document.createElement("div");
div.className = "mousefollower";
var canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;
canvas.style.position = "relative";

var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(25, 25, 20, 0, 2 * Math.PI);
ctx.fillStyle = "#0ffff05f";
ctx.fill();
ctx.strokeStyle = "#0ffff0";
ctx.lineWidth = 2;
ctx.stroke();

div.appendChild(canvas);
body.appendChild(div);

var move = function (e) {
	    div.style.top = e.pageY - 15 + "px";
	    div.style.left = e.pageX - 20 + "px";
}

body.addEventListener("mousemove", move, false);
body.addEventListener("wheel", move, false);
