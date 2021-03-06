/*(function () {
	Discovery = {
		devices: function() {
			//function code
			$.post('http://localhost:8182/discoveragent/upnp/devices', function(data) {
				//it works, do something with the data
				return data;
			});
		},
		services: function(device){
		//function code
			var dato={
				device: device
			};
			$.post('http://localhost:8182/discoveragent/upnp/services', dato, function(data) {
				//it works, do something with the data
				return data;
			});
		},
		actions: function(device, service){
			var dato={
				device: device,
				service: service
			};
			$.post('http://localhost:8182/discoveragent/upnp/actions', dato, function(data) {
				//it works, do something with the data
				return data;
			});
		},
		parameters: function(device, service, action){
			var dato={
				device: device,
				service: service,
				action: action
			};
			$.post('http://localhost:8182/discoveragent/upnp/parameters', dato, function(data) {
				//it works, do something with the data
				return data;
			});
		},
		screenSize: function(){
			if(window.outerWidth && window.outerHeight){
				var width = window.outerWidth;
				var height = window.outerHeight;
				return "{"+width+","+height+"}";
				//return [window.screen.width, window.screen.height];
			} else  return 'Vibration is not supported in your browser.';
		},
		geolocation: function(){
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var lat = position.coords.latitude;
				    	var lon = position.coords.longitude;
					return "{"+lat+","+long+"}";
				});
			} else return 'Vibration is not supported in your browser.';
		},
		orientation: function(){
			if (window.DeviceOrientationEvent) {
				return window.orientation;
				/* window.addEventListener("deviceorientation", function(event) {
				  return {event.alpha, event.beta, event.gamma};
			      	}, true);/
			}else{
				 return 'Orientation detect is not supported in your browser.';
			}
		},
		media: function(){
			if((navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)){
				return "Media";
				/*if (navigator.getUserMedia) {
					navigator.getUserMedia({audio: true, video: true}, function(stream) {
						video.src = stream;
					}, onFailSoHard);
				} else if (navigator.webkitGetUserMedia) {
					navigator.webkitGetUserMedia('audio, video', function(stream) {
						video.src = window.webkitURL.createObjectURL(stream);
					}, onFailSoHard);
				} else {
				  	video.src = 'somevideo.webm'; // fallback.
				}/
			}else{
				 return 'Media is not supported in your browser.';
			}
		},
		vibration: function(){
			if(navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate){
				navigator.vibrate([1000]);
				return "Vibration";
			} else return 'Vibration is not supported in your browser.';
		},
		battery: function(){
			if(navigator.battery || navigator.webkitBattery || navigator.mozBattery)
			{
				console.warn("Battery charging: ", battery.charging); // true
				console.warn("Battery level: ", battery.level); // 0.58
				console.warn("Battery discharging time: ", battery.dischargingTime);
				return "Battery";
			} else return 'Battery status is not supported in your browser.';
		},
		userProximity: function(){
			if(window.DeviceProximityEvent){
				return 'Device Proximity Event';
			} else return 'DeviceProximityEvent status is not supported in your browser.';
		},
		deviceProximity: function(){
			if(window.UserProximityEvent){
				return 'User Proximity Event';
			} else return 'UserProximityEvent status is not supported in your browser.';
		}
	};
})();*/
discovery = (function () {
	function Discovery () {
	}

	var discovery={
		
		get: function (selector) {
			return new Dicovery();
		},
		devices: function (cb) {
		    	//function code
			$.post('http://localhost:8182/discoveragent/upnp/devices', function(data) {
				//it works, do something with the data
				cb(data);
			});
		},
		services: function(device, cb){
		//function code
			var dato={
				device: device
			};
			$.post('http://localhost:8182/discoveragent/upnp/services', dato, function(data) {
				//it works, do something with the data
				cb(data);
			});
		},
		actions: function(device, service, cb){
			var dato={
				device: device,
				service: service
			};
			$.post('http://localhost:8182/discoveragent/upnp/actions', dato, function(data) {
				//it works, do something with the data
				cb(data);
			});
		},
		parameters: function(device, service, action, cb){
			var dato={
				device: device,
				service: service,
				action: action
			};
			$.post('http://localhost:8182/discoveragent/upnp/parameters', dato, function(data) {
				//it works, do something with the data
				cb(data);
			});
		},
		features: function(cb){
			$.post('http://localhost:8182/discoveragent/features', function(data) {
				//it works, do something with the data
				cb(data);
			});
		},
		screenSize: function(){
			if(window.outerWidth && window.outerHeight){
				var width = window.outerWidth;
				var height = window.outerHeight;
				return "{"+width+","+height+"}";
			} else  return 'ScreenSize info is not supported in your browser.';
		},
		geolocation: function(cb){
			if(navigator.geolocation) {
				var proba;
				navigator.geolocation.getCurrentPosition(function(position) {
					cb("{"+position.coords.latitude.toString()+","+position.coords.longitude.toString()+"}");
				});
			} else cb('Geolocation is not supported in your browser.');

		},
		orientation: function(){
			if (window.DeviceOrientationEvent) {
				if (window.matchMedia("(orientation: portrait)").matches) {
				   // you're in PORTRAIT mode
					return "Portrait";
				}

				if (window.matchMedia("(orientation: landscape)").matches) {
				   // you're in LANDSCAPE mode
					return "Landscape";
				}
			}else return 'Orientation detect is not supported in your browser.';

		},
		media: function(){
			if((navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)){
				return "Media";
				/*if (navigator.getUserMedia) {
					navigator.getUserMedia({audio: true, video: true}, function(stream) {
						video.src = stream;
					}, onFailSoHard);
				} else if (navigator.webkitGetUserMedia) {
					navigator.webkitGetUserMedia('audio, video', function(stream) {
						video.src = window.webkitURL.createObjectURL(stream);
					}, onFailSoHard);
				} else {
				  	video.src = 'somevideo.webm'; // fallback.
				}*/
			}else return 'Media is not supported in your browser.';
		},
		vibration: function(){
			//if(navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate ){
			if(navigator.notification){
				//navigator.vibrate(1000);
				navigator.notification.vibrate(1000);
				navigator.notification.beep(1);
				return 'Vibration';
			} else return 'Vibration is not supported in your browser.';
		},
		battery: function(cb){
			if(navigator.battery || navigator.webkitBattery || navigator.mozBattery || window.navigator.msBattery ){
			//if(battStat){
				/*console.warn("Battery charging: ", battery.charging); // true
				console.warn("Battery level: ", battery.level); // 0.58
				console.warn("Battery discharging time: ", battery.dischargingTime);*/
				//return 'Battery: '+navigator.battery.level;

				window.addEventListener("batterystatus", function(info) {
					   //console.log("Probando:    "+info.toString());
					   //alert(info.level.toString());
					   return info.level.toString();
			      	} , false);
			} else return 'Battery status is not supported in your browser. ';
		},
		userProximity: function(){
			if(window.DeviceProximityEvent){
				return 'Device Proximity Event';
			} else return 'DeviceProximityEvent status is not supported in your browser.';
		},
		deviceProximity: function(){
			if(window.UserProximityEvent){
				return 'User Proximity Event';
			} else return 'UserProximityEvent status is not supported in your browser.';
		},
		language: function(){
			if(navigator.language){
				return 'Language: '+navigator.language;
			} else return 'Language is not supported in your browser.';
		},
		camera: function(){

			//return navigator.camera;
			if(navigator.camera){
				navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
				        destinationType: Camera.DestinationType.DATA_URL
				});

				function onSuccess(imageData) {
				    var image = document.getElementById('myImage');
				    image.src = "data:image/jpeg;base64," + imageData;
				    return imageData.toString();
				}

				function onFail(message) {
				    alert('Failed because: ' + message);
				    return "Error";
				}
				//return 'Camera';
			} else return 'Camera is not supported in your browser.';
		}
	}
	/*Discovery.prototype.devices = function () {
	    	//function code
		$.post('http://localhost:8182/discoveragent/upnp/devices', function(data) {
			//it works, do something with the data

			return data;
		});
	};*/
    	return discovery;
}());
