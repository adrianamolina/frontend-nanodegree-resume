	
var bio = {
	"name" : "Adriana" ,
	"role" : "Frontend" ,
	"contactInfo" : "adriana@blabla.com",
	"skills" : ["nubes", "arcoiris", "caballo", "pradera"]
};


var education = {
	"schools" : [
		{
			"school" : "Liceo",
			"city" : "Marte",
			"degree" : "Adulthood",
			"years" : 12
		},
		{
			"school" : "Complutense",
			"city" : "Madrid",
			"degree" : "Audiovisual",
			"years" : 5
		},
		{
			"school" : "Udacity",
			"city" : "internet",
			"degree" : "frontend",
			"years" : 1
		}
	]
};

var work = {
	"experience" : [
		{
			"company" : "Avatar",
			"city" : "Pandora",
			"role" : "blue stuff",
			"years" : 2
		},
		{
			"company" : "The Martian",
			"city" : "Mars",
			"role" : "Explore",
			"years" : 2
		},
		{
			"company" : "Nice",
			"city" : "Nice World",
			"role" : "being nice",
			"years" : 2
		}
	]
};

var project = {
	"DIY" : [
		{	
			"objects" : "bags",
			"materials" : ["fabrics", "threads", "haberdashery"],
			"tools" : ["machine", "scissors", "pins"]
		},
		{
			"objects" : "bracelet",
			"materials" : ["waxed cotton", "beads", "buttons"],
			"tools" : ["table", "lighter"]
		},
		{
			"objects" : "sweater",
			"materials" : ["yarn", "cotton"],
			"tools" : ["needles", "cables", "marker"]
		}
	],
	"Frontend" : {
		"skills" : ["html", "javascript", "css"],
		"exercises" : "resume"
	}
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace ("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace ("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace ("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace ("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}