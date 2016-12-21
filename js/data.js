//Long arrays of data are moved to a seperate file to improve readability

//Hardcoded location data array
var initialLocations = [{
	name: 'MOST',
	address: '500 S Franklin St',
	catagory: 'entertainment',
	web: 'http://www.most.org/',
	active: ko.observable(true)
},{
	name: 'Oncenter War Memorial',
	address: '800 S State St',
	catagory: 'entertainment',
	web: 'http://www.oncenter.org/',
	active: ko.observable(true)
},{
	name: 'Everson Museum of Art',
	address: '401 Harrison St',
	catagory: 'entertainment',
	web: 'http://www.everson.org/',
	active: ko.observable(true)
},{
	name: 'Carrier Dome',
	address: '900 Irving Ave',
	catagory: 'entertainment',
	web: 'http://www.carrierdome.com/',
	active: ko.observable(true)
},{
	name: 'Dinosaur BBQ',
	address: '246 W Willow St',
	catagory: 'dining',
	web: 'http://www.dinosaurbarbque.com/',
	active: ko.observable(true)
},{
	name: 'Recess Coffee',
	address: '110 Montgomery St',
	catagory: 'dining' ,
	web: 'http://recesscoffee.com/',
	active: ko.observable(true)
},{
	name: 'Cafe Kubal',
	address: '401 S Salina St',
	catagory: 'dining',
	web: 'http://www.cafekubal.com/',
	active: ko.observable(true)
},{
	name: 'Roji Tea Lounge',
	address: '108 E Washington St',
	catagory: 'dining',
	web: 'https://www.facebook.com/rojitealounge',
	active: ko.observable(true)
},{
	name: 'Strong Hearts Cafe',
	address: '719 E Genesee St',
	catagory: 'dining',
	web: 'http://www.strongheartscafe.com/',
	active: ko.observable(true)
},{
	name: 'J. Ryan\'s',
	address: '253 E Water St',
	catagory: 'dining',
	web: 'http://www.jryanspub.com/',
	active: ko.observable(true) 	
},{
	name: 'Modern Malt',
	address: '325 S Clinton St',
	catagory: 'dining',
	web: 'http://eatdrinkmalt.com/',
	active: ko.observable(true)
},{
	name: 'asdfjkae',
	web: '',
	active: ko.observable(true)
}];

//Array of catagories used for filtering
var catagories = [{
	type: 'dining',
	icon: '🍽',
	active: false
},{
	type: 'entertainment',
	icon: '🎭',
	active: false
}];

//Map style to remove Google's points of interest and make the map prettier, generated from https://mapstyle.withgoogle.com/
var mapStyle = [
		  {
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#8ec3b9"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1a3646"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.country",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#4b6878"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#64779e"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.province",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#4b6878"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape.man_made",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#334e87"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape.natural",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#283d6a"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#6f9ba5"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#3C7680"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#304a7d"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#98a5be"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#2c6675"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#255763"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#b0d5ce"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#98a5be"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#283d6a"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#3a4762"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#0e1626"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#4e6d70"
		      }
		    ]
		  }
		]