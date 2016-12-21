var map;
var locationArray = ko.observableArray();

//Model for location information
var Location = function(data){
	this.name  = data.name,
	this.address = data.vicinity,
	this.rating = data.rating,
	this.hours = data.opening_hours,
	lat = data.geometry.location.lat();
	lng = data.geometry.location.lng();
	this.latLng = {
		lat: lat,
		lng: lng
	}

self = this;
this.img = function getImgUrl(){
	if(data.photos){
		imgUrl = data.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 300})
	}
	else{
	imgUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + self.address;
	}
	return imgUrl;
	}	
}
/**
//If the location has a photos property, get that image url, if not use streetview
function getImgUrl(){
	if(data.photos){
		imgUrl = data.photos[0].getUrl({'maxWidth': 500, 'maxHeight': 300})
	}
	else{
	imgUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + self.address;
	}
	return imgUrl;
	}	
}

**/

//Function to be ran after map is initialized
function initMap(){
	var infowindow;
	var types = ['restaurant', 'store'];
	var locations = [];
	var lat = 43.0485152;
	var	lng = -76.1574217;
	var latlng = lat + ','+ lng;

	//Retrieve map div and give it an initial location
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat : lat,
		lng : lng},
		zoom: 15,
		styles: mapStyle,
		mapTypeControlOptions: { mapTypeIds: [] }

	});
	for(var i = 0; i < types.length; i++){
		getLocations(types[i]);

	}
		function getLocations(type){
			
			placeSearch = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
			$.ajax({
				url: placeSearch,
				data: {
					key: 'AIzaSyBqxSz8zf3XFUyBR7LVOswrSz1gLDueSRM',
					location: latlng,
					type: type,
					keyword: 'photos',
					
				},
				contentType: 'application/json',
				success: function(responce) {
					console.log(responce);
				},
				error: function(error){
					console.log(error);
				}
			})
		}
	}
		
	
/***
	function addMarker(location){
		//Create markers for each location
		location.marker = new google.maps.Marker({
			position: location.latLng,
			map: map,
			animation: google.maps.Animation.DROP,
			title: location.name
		})
	};

	function addInfoWindow(location){
		//Create infowindow for each marker
		location.marker.infowindow = new google.maps.InfoWindow({
			content: '<div class = "info-window"><h3>' + location.name + ' </h3><img class = "info-window-top-img" src = "'+location.img+'"></div>'
		})


		//Add click event listener to marker to open infowindow
		location.marker.addListener('click', function(){
		location.marker.infowindow.open(map, location.marker);
		location.marker.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function(){
			location.marker.setAnimation(null);
			}, 1500);
		})


	}


**/