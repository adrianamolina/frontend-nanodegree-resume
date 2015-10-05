	
var bio = {
	"name" : "Adriana Poulain" ,
	"role" : "Frontend" ,
	"contactInfo" : "adriana@blabla.com",
	"skills" : ["nubes", "arcoiris", "caballo", "pradera"]
};
// mal porque añade primero "%data%" y luego ya el replace con el nombre
//$("#header").append(HTMLheaderName);
	var formattedName = HTMLheaderName.replace ("%data%", bio.name);
	$("#header").append(formattedName);
// lo mismo que con el nombre $("#header").append(HTMLheaderRole);
	var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
	$("#header").append(formattedRole);

$("#main").append(internationalizeButton);

function inName() {
	var nameBefore = bio.name.split(" ");
	nameBefore = nameBefore[0] + " " + nameBefore[1].toUpperCase();
	return nameBefore;
}


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
			"years" : "January - - - July 2006"
			"description" : "Lorem ipsum dolor sit amet, consectetur 
	adipiscing elit. Cras feugiat eget elit at viverra. Pellentesque 
	non mi facilisis, luctus purus sed, gravida quam. Mauris vel 
	tortor pharetra, facilisis ante ut, venenatis eros. Integer et 
	ante at velit sollicitudin dictum ac sed lorem. Nullam tincidunt 
	acus id tellus pulvinar, sit amet tincidunt sem elementum. 
	Aenean ut commodo nunc, blandit iaculis diam. Quisque ullamcorper 
	llamcorper dui ac scelerisque. Suspendisse eget dignissim ligula, 
	non accumsan leo. Nullam volutpat velit vitae ultricies tempus. 
	Pellentesque vehicula arcu sed nulla mattis, nec blandit ligula 
	suscipit."
		},
		{
			"company" : "The Martian",
			"city" : "Mars",
			"role" : "Explore",
			"years" : "July 2006 - - - July 2008"
			"description" : "Lorem ipsum dolor sit amet, consectetur 
	adipiscing elit. Cras feugiat eget elit at viverra. Pellentesque 
	non mi facilisis, luctus purus sed, gravida quam. Mauris vel 
	tortor pharetra, facilisis ante ut, venenatis eros. Integer et 
	ante at velit sollicitudin dictum ac sed lorem. Nullam tincidunt 
	acus id tellus pulvinar, sit amet tincidunt sem elementum. 
	Aenean ut commodo nunc, blandit iaculis diam. Quisque ullamcorper 
	llamcorper dui ac scelerisque. Suspendisse eget dignissim ligula, 
	non accumsan leo. Nullam volutpat velit vitae ultricies tempus. 
	Pellentesque vehicula arcu sed nulla mattis, nec blandit ligula 
	suscipit."
		},
		{
			"company" : "Nice",
			"city" : "Nice World",
			"role" : "being nice",
			"years" : "July 2009 - - - july 2011"
			"description" : "Lorem ipsum dolor sit amet, consectetur 
	adipiscing elit. Cras feugiat eget elit at viverra. Pellentesque 
	non mi facilisis, luctus purus sed, gravida quam. Mauris vel 
	tortor pharetra, facilisis ante ut, venenatis eros. Integer et 
	ante at velit sollicitudin dictum ac sed lorem. Nullam tincidunt 
	acus id tellus pulvinar, sit amet tincidunt sem elementum. 
	Aenean ut commodo nunc, blandit iaculis diam. Quisque ullamcorper 
	llamcorper dui ac scelerisque. Suspendisse eget dignissim ligula, 
	non accumsan leo. Nullam volutpat velit vitae ultricies tempus. 
	Pellentesque vehicula arcu sed nulla mattis, nec blandit ligula 
	suscipit."
		}
	]
};

function displayWork () {
	for (w in work.experience) {
	$("#workExperience").append(HTMLworkStart);
	var formattedCompany = HTMLworkEmployer.replace ("%data%", 
		work.experience[w].company);
	var formattedRole = HTMLworkTitle.replace ("%data%", 
		work.experience[w].role);
	var formattedCompanyRole = formattedCompany + formattedRole;
	$(".work-entry:last").append(formattedCompanyRole);

	var formattedYears = HTMLworkDates.replace ("%data%", 
		work.experience[w].years);
	$(".work-entry:last").append(formattedYears);
	var formattedLocation = HTMLworkLocation.replace ("%data%",
		work.experience[w].city);
	$(".work-entry:last").append(formattedLocation);
	//$(".work-entry:last").append(formattedCompany);
	//$(".work-entry:last").append(formattedRole);
	}
}

displayWork();

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