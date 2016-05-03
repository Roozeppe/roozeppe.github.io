/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Populate JSON objects with data.

var bio = {
	"name" : "Roozeppe Jean Pierre",
	"role" : "Front-end Web Developer",
	"contacts" : {
		"mobile" : "646.363.5720",
		"email" : "roozeppe.jp@gmail.com",
		"twitter" : "@roozeppejp",
		"github" : "roozeppejp",
		"linkedin" : "roozeppejp",
		"location" : "Hollywood, FL"
	},
	"bioPic": "http://placekitten.com/150/150",
	"welcomeMsg" : "Thanks for checking out my resume!",
	"skills" : ["Responsive web design", "HTML 5", "CSS 3", "JavaScript", "JSON", "Jquery", "Python"],
	"display" : "A function that displays the bio section. It takes no parameters"
};

var work = {
	"jobs" : [
		{
		"employer" : "Self",
		"title" : "Uber Partner",
		"dates" : "2014 - Future",
		"location" : "Miami, Fl",
		"description" : "Driving personal vehichle for hire."
		},{
		"employer" : "Self",
		"title" : "Lyft Partner",
		"dates" : "2014 - Future",
		"location" : "Miami, Fl",
		"description" : "Driving personal vehichle for hire."
		}
	],
	"display" : "A function that displays the work section. It takes no parameters"
};

var projects = {
	"projects" : [
		{
	    "title" : "Responsive Images",
	    "dates" : "2016",
	    "description" : [
	    	"Display eight pictures on a single page, with responsive technics that allows the browser to choose,",
	    	"and render the best picture to display according to the screen resolution,",
	    	"the size of the viewport width and device pixel ratio (DPI)."
	    ].join(" "),
	    "images" : "http://placehold.it/225x225"
		},{
	    "title" : "Responsive Web Design",
	    "dates" : "2016",
	    "description" : "A very simple website that response accordingly to different screen resolution, and devices.",
	    "images" : "http://placehold.it/225x225"
		}
	],
	"display" : "A function that displays the projects section. It takes no parameters"
};

var education = {
    "schools": [
    	{
         "name" : "City College Of New York",
         "location" : "New York",
         "degree": "No degree",
         "majors": ["Computer Science"],
         "dates": "2010",
         "url" : "https://www.ccny.cuny.edu/"
    	}
    ],
    "onlineClasses" : [
    	{
         "title": "JavaScript Basics",
         "school" : "Udacity",
         "dates" : "2016",	
         "url" : "https://www.udacity.com/course/javascript-basics--ud804"
    	},{
         "title": "Responsive Images",
         "school" : "Udacity",
         "dates" : "2016",	
         "url" : "https://www.udacity.com/course/responsive-images--ud882"
    	},{
         "title": "Responsive Web Design",
         "school" : "Udacity",
         "dates" : "2016",	
         "url" : "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
    	},{
         "title": "Intro to HTML and CSS",
         "school" : "HarvardX",
         "dates" : "2015",	
         "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    	},{
         "title": "CS50: Introduction to Computer Science",
         "school" : "HarvardX",
         "dates" : "2015",	
         "certificate" : "http://bit.ly/1PzrF0L",
         "url" : "http://bit.ly/1s297Bj"
    	},{
         "title": " 6.00.1x: Introduction to Computer Science and Programming Using Python",
         "school" : "MITX",
         "dates" : "2015",
         "certificate" : "http://bit.ly/1REkhm4",
         "url" : "http://bit.ly/1McdTkf"
    	}
    ],
    "display" : "A function that displays the education section. It takes no parameters"
};

// The functions that display each section of the page.
bio.display = function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var	formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var	formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var	formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
	var	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var	formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var	formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	
	/*$("#header").append(formattedBioPic);

	/*$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLinkedin);
	$("#topContacts").append(formattedLocation);

	
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		bio.skills.sort(); //Sorting the skill set before using it.
		$("#header").append(HTMLskillsStart);

		for(skill in bio.skills) {
			var	formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkills);
		}
	} */
}

work.display = function displayWork() {
	for(var job in work.jobs){
		var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

projects.display = function displayProjects() {
	for(var project in projects.projects){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);	
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

education.display = function displayEducation() {
	for(var school in education.schools){
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
		$(".education-entry").append(HTMLonlineClasses);

	for(var classe in education.onlineClasses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[classe].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[classe].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[classe].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[classe].url).replace("#", education.onlineClasses[classe].url);
		
		$(".education-entry").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".education-entry").append(formattedOnlineDates);
		$(".education-entry").append(formattedOnlineURL);
	}
}

// Adding a google map to the page
$("#mapDiv").append(googleMap);

// Display the contents of the web page by calling the functions.
bio.display();
work.display();
projects.display();
education.display();




/*
function inName(name) {
	name = bio.name;
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
*/





