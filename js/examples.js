// $("#main").append("Adriana Molina");
	// var sentence = "I am Adriana and I am AWESOME";
	// var newSentence = sentence.replace ("AWESOME", "FUN");

	// console.log (sentence);
	// console.log (newSentence);
	var formattedName = HTMLheaderName.replace ("%data%", "Adriana Molina");
	var formattedRole = HTMLheaderRole.replace ("%data%", "Frontend");
	var skills = ["lol" , "xd" , "juas"];
	var bio = {
		"name" : "Adriana" ,
		"role" : "Frontend" ,
		"contactInfo" : "adriana@blabla.com",
		"pictureUrl" : "images/fry.jpg",
		"welcomeMessage" : "Welcome to this page" ,
		"skills" : skills
	};
	var work = {};

	work.currentPosition = "Touching balls";
	work.employer = "Myself";
	work.years = 2;
	work.city = "World";

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




	$("#main").prepend(bio.role);
	$("#main").prepend(bio.name);
	$("#main").append(bio.welcomeMessage, bio.contactInfo,
		bio.pictureUrl, bio.skills);
	$("#main").append(work["currentPosition"]);
	$("#main").append(education.lastSchool);