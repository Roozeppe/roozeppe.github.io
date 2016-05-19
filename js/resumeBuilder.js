// Populate JSON objects with data.

var bio = {
	"bioPic": "images/me.jpg",
	"name" : "Roozeppe Jean Pierre",
	"role" : "Front-end Web Developer",
	"contacts" : {
		"mobile" : "646.363.5720",
		"location" : "Hollywood, FL",
		"location_url" : 'https://www.google.com/maps/place/Hollywood,+FL/',
		"email" : "roozeppe.jp@gmail.com",
		"facebook": "https://www.facebook.com/roozeppejp",
		"gplus": "https://plus.google.com/105769142245784133825",
		"twitter" : "https://twitter.com/roozeppejp",
		"github" : "https://github.com/Roozeppe",
		"linkedin" : "https://www.linkedin.com/in/roozeppejp"
	},
	"skills" : ["Responsive web design", "HTML 5", "CSS 3", "JavaScript", "JSON", "Jquery", "Python"],
	"display" : "A function that displays the bio section. It takes no parameters"
};

var links = {
	"projects" : "http://roozeppe.github.io/under-construction",
	"courses" : "http://roozeppe.github.io/under-construction",
	"certificates" : "http://roozeppe.github.io/under-construction",
	"github" : "https://github.com/Roozeppe/roozeppe.github.io"
};

var languages = ["HTML5", "CSS3", "JS"];

var work = {
	"jobs" : [
		{
		"employer" :  "",
		"title" : "",
		"dates" : "",
		"location" : "",
		"description" : ""
		},{
		"employer" : "",
		"title" : "",
		"dates" : "",
		"location" : "",
		"description" : ""
		}
	],
	"display" : "A function that displays the work section. It takes no parameters"
};

var projects = {
	"projects" : [
		{
	    "title" : "Grayscale",
	    "dates" : "2016",
	    "description" : "Grayscaling images",
	    "images" : "images/grayscale.jpg",
	    "img_alt" : "A grayscale image",
	    "fn" : "grayscale_page()"
		},{
	    "title" : "Meme maker",
	    "dates" : "2016",
	    "description" : "Make memes online for free.",
	    "images" : "images/meme.jpg",
	    "img_alt" : "A grayscale image",
	    "fn" : "meme_page()"
		}
	],
	"display" : "A function that displays the projects section. It takes no parameters"
};

var education = {
    "schools": [
    	{
         "name" : "City College Of New York",
         "location" : "New York",
         "degree": "N/A",
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
         "school" : "Udacity",
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
     "certification": [
    	{
         "title" : "CS50",
         "dates": "2016",
         "school": "HarvardX",
         "img": "http://placekitten.com/150/150",
         "url" : "https://s3.amazonaws.com/verify.edx.org/downloads/e537834617e64ec5841888ee26bc8957/Certificate.pdf"
    	},{
         "title" : "Python",
         "dates": "2015",
         "school": "MITX",
         "img": "http://placekitten.com/150/150",
         "url" : "https://s3.amazonaws.com/verify.edx.org/downloads/533701082c91490f99ea180f428ee25c/Certificate.pdf"
    	}
    ],
    "display" : "A function that displays the education section. It takes no parameters."
};

// The functions that display each section of the page.
bio.display = function displayBio() {
	var	formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var	formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	formattedLocation = formattedLocation.replace("#", bio.contacts.location_url);
	var	formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

	var	formattedFacebook = HTMLfacebook.replace("#", bio.contacts.facebook);
	var	formattedGplus = HTMLgplus.replace("#", bio.contacts.gplus);
	var	formattedTwitter = HTMLtwitter.replace("#", bio.contacts.twitter);
	var	formattedLinkedin = HTMLlinkedin.replace("#", bio.contacts.linkedin);
	var	formattedGithub = HTMLgithub.replace("#", bio.contacts.github);
	
	var formattedProjects = HTMLprojects.replace("#", links.projects);
	var formattedClasses = HTMLclasses.replace("#", links.courses);
	var formattedCertificates = HTMLcertificates.replace("#", links.certificates);

	// Create variables for the header.
	var formattedFork = HTMLfork.replace("#", links.github);
	var formattedHeaderFB = HeaderFacebook.replace("#", bio.contacts.facebook);
	var formattedHeaderTT = HeaderTwitter.replace("#", bio.contacts.twitter);
	var formattedHeaderLI = HeaderLinkedin.replace("#", bio.contacts.linkedin);

	// Add data to side menu.
	$("#nav-header").append(formattedBioPic);
	$("#nav-header").append(formattedName);
	$("#nav-header").append(formattedRole);

	$("#nav-contact").append(formattedMobile);
	$("#nav-contact").append(formattedLocation);
	$("#nav-contact").append(formattedEmail);

	$("#nav-contact").append(formattedFacebook);
	$("#nav-contact").append(formattedGplus);
	$("#nav-contact").append(formattedTwitter);
	$("#nav-contact").append(formattedLinkedin);
	$("#nav-contact").append(formattedGithub);

	$("#nav-contact").append(formattedProjects);
	$("#nav-contact").append(formattedClasses);
	$("#nav-contact").append(formattedCertificates);

	$("#nav-contact").append(HTMLlanguageStart);
	$("#nav-contact").append(HTMLshareStart);
	$("#share:last").append(HTMLshareFB);
	$("#share:last").append(HTMLshareTT);
	$("#nav-contact").append(formattedFork);

	// Add data to side menu language set used on this project.
	for (lang in languages) {
		var formattedLanguage = HTMLlanguage.replace("%data%", languages[lang]);

		$("#lang:last").append(formattedLanguage);
	};

	// Add data to header.
	$(".skills").before(formattedName);
	$(".skills").before(formattedRole);

	$("#connect:last").append(formattedHeaderFB);
	$("#connect:last").append(formattedHeaderTT);
	$("#connect:last").append(formattedHeaderLI);

	// Add data to footer.
	$(".col_0:last").append(formattedFacebook);
	$(".col_0:last").append(formattedGplus);
	$(".col_0:last").append(formattedTwitter);
	$(".col_0:last").append(formattedLinkedin);
	$(".col_0:last").append(formattedGithub);

	$(".col_1:last").append(formattedProjects);
	$(".col_1:last").append(formattedClasses);
	$(".col_1:last").append(formattedCertificates);
};

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
		var formattedProjectStart = HTMLprojectStart.replace("%fn%", projects.projects[project].fn)
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);	
		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

		$(".carousel-inner").append(formattedProjectStart);
		$(".item:last").append(formattedProjectImage);
		$(".item:last").append(HTMLcarouselStart);
		$(".carousel-caption:last").append(formattedProjectTitle);
		$(".carousel-caption:last").append(formattedProjectDescription);
		$(".carousel-caption:last").append(formattedProjectDates);
	}
}

education.display = function displayEducation() {
	$("#education").append(HTMLschoolStart);

	for(var school in education.schools){
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	};
		
	$("#education").append(HTMLonlineClassStart);

	for(var classe in education.onlineClasses){
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[classe].title);
		formattedOnlineTitle = formattedOnlineTitle.replace("#", education.onlineClasses[classe].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[classe].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[classe].dates);
		
		$(".class-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
		$(".class-entry:last").append(formattedOnlineDates);
	};

	$("#education").append(HTMLcertificateStart);
	for(var cert in education.certification) {
		var formattedCertTitle = HTMLcertTitle.replace("%data%", education.certification[cert].title);
		formattedCertTitle = formattedCertTitle.replace("#", education.certification[cert].url);
		var formattedCertDate = HTMLcertDates.replace("%data%", education.certification[cert].dates);
		var formattedCertSchool = HTMLcertSchool.replace("%data%", education.certification[cert].school);
		var formattedCertImg = HTMLcertImage.replace("%data%", education.certification[cert].img);
		
		$(".cert-entry:last").append(formattedCertTitle + formattedCertDate);
		$(".cert-entry:last").append(formattedCertSchool);
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





