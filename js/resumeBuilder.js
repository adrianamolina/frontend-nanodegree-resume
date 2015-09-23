	// $("#main").append("Adriana Molina");
	// var sentence = "I am Adriana and I am AWESOME";
	// var newSentence = sentence.replace ("AWESOME", "FUN");

	// console.log (sentence);
	// console.log (newSentence);

	var formattedName = HTMLheaderName.replace ("%data%", "Adriana Molina");
	var formattedRole = HTMLheaderRole.replace ("%data%", "Frontend");

	$("#header").append(formattedName);
	$("#header").append(formattedRole);



