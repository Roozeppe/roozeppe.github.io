/*
This file contains all of the code running in the background that makes resumeBuilder.js possible. 
We call these helper functions because they support your code in this course.
*/

var HTMLbioPic = '<img src="%data%" alt="Picture of me">';
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h5 id="title">%data%</h5>';

var HTMLmobile = '<li><a><i class="fa fa-mobile fa-fw fa-lg fading"></i>%data%</a></li>';
var HTMLlocation = '<li><a href="#" target="_blank"><i class="fa fa-map-marker fa-fw fa-lg fading"></i>%data%</a></li>';
var HTMLemail = '<li><a><i class="fa fa-envelope-o fa-fw fa-lg fading"></i>%data%</a></li>';

var HTMLfacebook = '<li><hr></li><li><a href="#" target="_blank"><i class="fa fa-facebook fa-fw fa-lg fa-lg"></i>Facebook</a></li>';
var HTMLgplus = '<li><a href="#" target="_blank"><i class="fa fa-google-plus fa-fw fa-lg"></i>Google</a></li>';
var HTMLtwitter = '<li><a href="#" target="_blank"><i class="fa fa-twitter fa-fw fa-lg"></i>Twitter</a></li>';
var HTMLlinkedin = '<li><a href="#" target="_blank"><i class="fa fa-linkedin fa-fw fa-lg"></i>LinkedIn</a></li>';
var HTMLgithub = '<li><a href="#" target="_blank"><i class="fa fa-github fa-fw fa-lg"></i>Github</a></li>';

var HTMLprojects = '<li><hr></li><li><a href="#"><i class="fa fa-briefcase fa-fw fa-lg"></i>Projects</a></li>';
var HTMLclasses = '<li><a href="#"><i class="fa fa-graduation-cap fa-fw fa-lg"></i>Online courses</a></li>';
var HTMLcertificates = '<li><a href="#"><i class="fa fa-certificate fa-fw fa-lg"></i>Certificates</a></li>';

var HTMLlanguageStart = '<li><hr></li><li><i class="fa fa-code fa-fw fa-lg fading"></i>Languages used</li><ul id="lang"></ul>';
var HTMLlanguage = '<li class="tag">%data%</li>';
var HTMLshareStart = '<li><i class="fa fa-share-alt fa-fw fa-lg fading"></i>Share this project</li><ul id="share"></ul>';
var HTMLshareFB = '<i onclick=fbShare() class="fa fa-facebook fa-fw fa-lg fa-lg"></i>';
var HTMLshareTT = '<i onclick=ttShare() class="fa fa-twitter fa-fw fa-lg fa-lg"></i>';
var HTMLfork = '<li><a href="#" target="_blank"><i class="fa fa-code-fork fa-fw fa-lg fading"></i>Fork me on Github</a></li>';


//var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
//var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HeaderFacebook = '<li><a href="#" target="_blank"><img src="images/facebook.svg" alt="facebook social icon" width="48" height="48"></a></li>';
var HeaderTwitter = '<li><a href="#" target="_blank"><img src="images/twitter.svg" alt="twitter social icon" width="48" height="48"></a></li>';
var HeaderLinkedin = '<li><a href="#" target="_blank"><img src="images/linked_in.svg" alt="linkedin social icon" width="48" height="48"></a></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="item" onclick="%fn%"></div>';
var HTMLprojectImage = '<img src="%data%" alt="Chania" width="460" height="345">';
var HTMLcarouselStart = '<div class="carousel-caption"></div>';
var HTMLprojectTitle = '<h5>%data%</h5>';
var HTMLprojectDescription = '<p>%data%</p>';
var HTMLprojectDates = '<p>%data%</p>';


var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClassStart = '<div class="class-entry"><h3>Online Classes</h3><a href="http://roozeppe.github.io/under-construction/">MORE</a></div>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';

var HTMLcertificateStart = '<div class="cert-entry"><h3>Certifications</h3></div>';
var HTMLcertTitle = '<a href="#" target="_blank">%data%';
var HTMLcertDates = ' - %data%</a>';
var HTMLcertSchool = '<h5>%data%</h5>';
var HTMLcertImage = '<img src=%data% alt=Sapshot of my certification.'

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


// Facebook pop-up function.
function fbShare() {
  window.open("https://www.facebook.com/sharer/sharer.php?u=http://roozeppe.github.io/", 
    "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=5,left=5,width=600,height=600");
};

// Twitter pop-up function.
function ttShare() {
  window.open("https://twitter.com/intent/tweet?text=Check%20out%20Roozeppe's%20Resume&url=http://roozeppe.github.io/&hashtags=happycoding&via=roozeppejp", 
    "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=5,left=5,width=600,height=600");
};

// Project pages functions.
function frog_page () {
  window.open("http://roozeppe.github.io/frontend-nanodegree-arcade-game/")
};

function grayscale_page () {
  window.open("http://roozeppe.github.io/grayscale/")
};

function meme_page () {
  window.open("http://roozeppe.github.io/meme-maker/")
}

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. 
Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /* 
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js. 
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide: 
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      locations.forEach(function(place){
      // the search request object
      var request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
