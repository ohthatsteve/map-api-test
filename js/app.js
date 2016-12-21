var map;
var locationArray = ko.observableArray();
//Function to be ran after map is initialized
function initMap(){
	
	var geocoder;
	var infowindow;
	//Retrieve map div and give it an initial location
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat : 43.0447208, lng : -76.14674350000001},
          zoom: 15,
          styles: mapStyle,
          mapTypeControlOptions: { mapTypeIds: [] }

        });
	
	//Initialize geocoder after the map is initialized to retrieve latlng information
	geocoder = new google.maps.Geocoder();
	

	//Request and store latlng data for each location in array
	initialLocations.forEach(function(location){
		
		geocoder.geocode(
		{
			address: location.address,
			componentRestrictions: {locality: 'Syracuse'}
		}, 
			function(results, status){
				//If the location is found
				if(location.address && status == google.maps.GeocoderStatus.OK){
					//Store latlng data as an object in the object for the current location
					location.latLng = { lat: results['0'].geometry.location.lat(),
										lng: results['0'].geometry.location.lng()
										}
					
					addMarker(location);
					addInfoWindow(location);					

					//Add current location to the observable array
					locationArray.push(location);	
				}
				
				
			}
		)
	})

	function addMarker(location){
		//Create markers for each location
		location.marker = new google.maps.Marker({
			position: location.latLng,
			map: null,
			animation: google.maps.Animation.DROP,
			title: location.name
		})
	};

	function addInfoWindow(location){
		//Create infowindow for each marker
		location.marker.infowindow = new google.maps.InfoWindow({
			content: generateInfoWindow(location)
		})

		
		//Open infowindow when you click the marker
		location.marker.addListener('click', function(){
			location.marker.infowindow.open(map, location.marker);
			location.marker.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function(){
				location.marker.setAnimation(null);
			}, 1500);
		})
	};
	var content;
	function generateInfoWindow(location){

		if(location.catagory == 'dining'){
			content = '<div class = "info-window"><h3>' + location.name + ' </h3><img class = "info-window-top-img" src = "http://maps.googleapis.com/maps/api/streetview?size=250x125&location='+ location.address +'Syracuse,NY"><p>Address:  ' + location.address + '</p></div>';
		}
	return content;
	}
};
		
var ViewModel = function(){ 

	
	//Display or hide marker and infowindow of location clicked on list
	this.showMarker = function(){
		//If the marker isn't displayed, display it
		if(this.marker.map == null){
			this.marker.setMap(map);
			this.marker.infowindow.open(map, this.marker);
			map.setCenter(this.latLng);
		}


		//Else take it off the map
		else{
			this.marker.infowindow.close();
			this.marker.setMap(null);
		}
	};

	var currentCatagory;
	var active;
	
	//Display markers for all locations of the selected catagory
	this.showCatagory = function(){
		currentCatagory = this.type;
		active = this.active;

		//If catagory is inactive, display all markers for selected catagory
		if(!active){
			locationArray().forEach(function(location){
				if(location.catagory == currentCatagory){
					location.marker.setMap(map);
					location.active(true);
				}
				else{
					location.marker.setMap(null);
					location.active(false);
				}
			})
		
		//Set selected catagory to active
		this.active = true;
		}
		
		//Else remove markers from selected catagory from the map
		else{
			locationArray().forEach(function(location){
				if(location.catagory == currentCatagory){
					location.marker.setMap(null);
					location.marker.infowindow.close();
				}
				location.active(true);
			})
		
		//Set selected catagory to inactive
		this.active = false;
		}
	}

};
	
	var $navContent = $('#nav-content'),
		$navContainer = $('#nav-container'),
		$navIcon = $('#nav-icon');

	//Toggle classes to hide or display the navigation panel
	this.toggleNav = function(){
		//Hide content of the navigation panel on a timeout
		setTimeout(function(){
			$navContent.toggleClass('hidden')
		}, 250);
		
		$navContainer.toggleClass('closed');
		$navIcon.toggleClass('open');
	}

	//Fade header after any click
	this.fadeHeader = function(){
		var $header = $('#header');
		$header.addClass('fade-out');
	}

	ko.applyBindings(new ViewModel());