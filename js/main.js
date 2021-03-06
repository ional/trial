var app = {

    findByName: function() {
        console.log('findByName');
        /*this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            }
        });*/
    },

    initialize: function() {
	console.log('Initialize');
        this.store = new MemoryStore();

	//var dicovery = new Discovery();
        //$('.search-key').on('keyup', $.proxy(this.findByName, this));

	$.post('http://localhost:8182/discoveragent/upnp?devices', function(data) {
		//it works, do something with the data
		$('#postold .devices').append('<div>http://localhost:8182/discoveragent/upnp?devices</div><br><div>'+data+'</div>');
	});

	var dato={
		device:4
	};
	$.post('http://localhost:8182/discoveragent/upnp?devicedetails', dato, function(data) {
		//it works, do something with the data
		$('#postold .details').append('<br><div>http://localhost:8182/discoveragent/upnp?devicedetails</div><br><div>'+data+'</div>');
	});
	$.post('http://localhost:8182/discoveragent/upnp?services', dato, function(data) {
		//it works, do something with the data
		$('#postold .services').append('<br><div>http://localhost:8182/discoveragent/upnp?services</div><br><div>'+data+'</div>');
	});

	var datos1={
		device:4,
		service:"RenderingControl"
	};
	$.post('http://localhost:8182/discoveragent/upnp?actions', datos1, function(data) {
		//it works, do something with the data
		$('#postold .actions').append('<br><div>http://localhost:8182/discoveragent/upnp?actions</div><br><div>'+data+'</div>');
	});
	var datos2={
		device:4,
		service:"RenderingControl",
		action:"SetVolume"
	};
	$.post('http://localhost:8182/discoveragent/upnp?parameters', datos2 , function(data) {
		//it works, do something with the data
		$('#postold .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp?parameters</div><br><div>'+data+'</div>');
	});

	////////////////////////////////////////////////////////////////////////////////////////////////

	$.post('http://localhost:8182/discoveragent/upnp/devices', function(data) {
		//it works, do something with the data
		$('#postnew .devices').append('<div>http://localhost:8182/discoveragent/upnp/devices</div><br><div>'+data+'</div>');
	});

	$.post('http://localhost:8182/discoveragent/upnp?devicedetails', dato, function(data) {
		//it works, do something with the data
		$('#postnew .details').append('<br><div>http://localhost:8182/discoveragent/upnp/devicedetails</div><br><div>'+data+'</div>');
	});
	$.post('http://localhost:8182/discoveragent/upnp/services', dato, function(data) {
		//it works, do something with the data
		$('#postnew .services').append('<br><div>http://localhost:8182/discoveragent/upnp/services</div><br><div>'+data+'</div>');
	});

	$.post('http://localhost:8182/discoveragent/upnp/actions', datos1, function(data) {
		//it works, do something with the data
		$('#postnew .actions').append('<br><div>http://localhost:8182/discoveragent/upnp/actions</div><br><div>'+data+'</div>');
	});

	$.post('http://localhost:8182/discoveragent/upnp/parameters', datos2 , function(data) {
		//it works, do something with the data
		$('#postnew .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp/parameters</div><br><div>'+data+'</div>');
	});

	////////////////////////////////////////////////////////////////////////////////////////////////

	$.get('http://localhost:8182/discoveragent/upnp?devices', function(data) {
		//it works, do something with the data
		$('#getold .devices').append('<div>http://localhost:8182/discoveragent/upnp?devices</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?devicedetails&device=4', function(data) {
		//it works, do something with the data
		$('#getold .details').append('<br><div>http://localhost:8182/discoveragent/upnp?devicedetails&device=4</div><br><div>'+data+'</div>');
	});
	$.get('http://localhost:8182/discoveragent/upnp?services?device=4', function(data) {
		//it works, do something with the data
		$('#getold .services').append('<br><div>http://localhost:8182/discoveragent/upnp?services&device=4</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?actions&device=4&service=RenderingControl', function(data) {
		//it works, do something with the data
		$('#getold .actions').append('<br><div>http://localhost:8182/discoveragent/upnp?actions&device=4&service=RenderingControl</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?parameters&device=4&service=RenderingControl&action=SetVolume', function(data) {
		//it works, do something with the data
		$('#getold .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp?parameters&device=4&service=RenderingControl&action=SetVolume</div><br><div>'+data+'</div>');
	});

	////////////////////////////////////////////////////////////////////////////////////////////////

	$.get('http://localhost:8182/discoveragent/upnp/devices', function(data) {
		//it works, do something with the data
		$('#getnew .devices').append('<div>http://localhost:8182/discoveragent/upnp/devices</div><br><div>'+JSON.stringify(data)+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?devicedetails&device=4', function(data) {
		//it works, do something with the data
		$('#getnew .details').append('<br><div>http://localhost:8182/discoveragent/upnp/devicedetails&device=4</div><br><div>'+data+'</div>');
	});
	$.get('http://localhost:8182/discoveragent/upnp/services?device=4', function(data) {
		//it works, do something with the data
		$('#getnew .services').append('<br><div>http://localhost:8182/discoveragent/upnp/services?device=4</div><br><div>'+JSON.stringify(data)+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp/actions?device=4&service=RenderingControl', function(data) {
		//it works, do something with the data
		$('#getnew .actions').append('<br><div>http://localhost:8182/discoveragent/upnp/actions?device=4&service=RenderingControl</div><br><div>'+JSON.stringify(data)+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp/parameters?device=4&service=RenderingControl&action=SetVolume', function(data) {
		//it works, do something with the data
		$('#getnew .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp/parameters?device=4&service=RenderingControl&action=SetVolume</div><br><div>'+JSON.stringify(data)+'</div>');
	});
	/*$.ajax({
		type: "POST",
    		url: 'http://localhost:8182/discoveragent/upnp?proba',
		dataType:'json',
            	crossDomain: true,
		contentType: "application/x-www-form-urlencoded; charset=utf-8",
		data: datos,
    		success: function(data) {
			//it works, do something with the data
			console.log("Ondo bidali da.");
			obj = JSON.parse(data);
			if (obj && obj.success === true) {
				console.log(obj);
				//location.href = 'home.html';
			}
			//$('.response').append('<div>'+data+'</div>');
		},
		error:function(jqXHR, textStatus, errorThrown) { 
			//something went wrong, handle the error and display a message
			console.log("Message: " + jqXHR.status);
			console.log("textStatus: " + textStatus);
			console.log("errorThrown: " + errorThrown);
		}
	});*/

	/*//Funciona!!!!
	$.ajax({
		type: "GET",
    		url: 'http://localhost:8182/discoveragent/upnp?actionparameters&device=4&service=RenderingControl&action=SetVolume',
            	crossDomain: true,
            	contentType: "application/json",
		data: datos,
    		success: function(data) {
			console.log("Ondo bidali da.");
			console.log(data);
			//$('.response').append('<div>'+data+'</div>');
        	//it works, do something with the data
	    },
	    error: function() {
		//something went wrong, handle the error and display a message
	    }
	});*/

	////////////////////////////////////////////////////////////////////////////////////////////////

	/*var discover = discovery.get();
	console.log("discovery.devices() "+discover.devices());*/
	/*alert(discovery.devices());
	console.log("discovery.devices() "+discovery.devices());
	console.log("discovery.services(4) "+discovery.services(4));
	console.log("discovery.actions(4,'RenderingControl')"+discovery.actions(4,"RenderingControl"));
	console.log("discovery.parameters(4, 'RenderingControl', 'SetVolume') "+discovery.parameters(4, "RenderingControl", "SetVolume"));
	console.log("discovery.screenSize() "+discovery.screenSize());
	console.log("discovery.geolocation() "+discovery.geolocation());
	console.log("discovery.orientation() "+discovery.orientation());
	console.log("discovery.media() "+discovery.media());
	console.log("discovery.vibration() "+discovery.vibration());
	console.log("discovery.battery() "+discovery.battery());
	console.log("discovery.userProximity() "+discovery.userProximity());
	console.log("discovery.deviceProximity() "+discovery.deviceProximity());*/

	discovery.devices(function(data1){console.log(data1); $('#javascrip .devices').append('<div>'+data1+'</div>');});
	discovery.services(4,function(data2){console.log(data2); $('#javascrip .services').append('<br><div>'+data2+'</div>');});
	discovery.actions(4, "RenderingControl",function(data3){console.log(data3); $('#javascrip .actions').append('<br><div>'+data3+'</div>');});
	discovery.parameters(4, "RenderingControl", "SetVolume",function(data4){console.log(data4); $('#javascrip .parameters').append('<br><div>'+data4+'</div>');});
	discovery.geolocation(function(data5){console.log(data5); $('#javascrip .geolocation').append('<br><div>geolocation:</div><br><div>'+data5+'</div>');});
	discovery.features(function(data6){console.log(data6); $('#javascrip .features').append('<br><div>'+data6+'</div>');});

	$(document).ready(function(){
		var screen = discovery.screenSize();
		var geolocation = discovery.geolocation();
		var orientation = discovery.orientation();
		var media = discovery.media();
		var vibration = discovery.vibration();
		var battery = discovery.battery();
		var userProximity = discovery.userProximity();
		var deviceProximity = discovery.deviceProximity();
		var language = discovery.language();
		var camera = discovery.camera();

		console.log(screen);
		if(geolocation) console.log(geolocation);
		console.log(orientation);
		console.log(media);
		console.log(vibration);
		console.log(battery);
		console.log(userProximity);
		console.log(deviceProximity);
		console.log(language);
		console.log(camera);
	
		$('#javascrip .screenSize').append('<br><div>screen:</div><div>'+screen+'</div>');
		if(geolocation) $('#javascrip .geolocation').append('<br><div>geolocation:</div><br><div>'+geolocation+'</div>');
		$('#javascrip .orientation').append('<br><div>orientation:</div><br><div>'+orientation+'</div>');
		$('#javascrip .media').append('<br><div>media:</div><br><div>'+media+'</div>');
		$('#javascrip .vibration').append('<br><div>vibration:</div><br><div>'+vibration+'</div>');
		$('#javascrip .battery').append('<br><div>battery:</div><br><div>'+battery+'</div>');
		$('#javascrip .userProximity').append('<br><div>userProximity:</div><br><div>'+userProximity+'</div>');
		$('#javascrip .deviceProximity').append('<br><div>deviceProximity:</div><br><div>'+deviceProximity+'</div>');
		$('#javascrip .language').append('<br><div>language:</div><br><div>'+language+'</div>');
		$('#javascrip .camera').append('<br><div>camera:</div><br><div>'+camera+'</div>');
	});	
    }
};
console.log("Trial");
app.initialize();
