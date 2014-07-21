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
	console.log('initialize');
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
		$('#getnew .devices').append('<div>http://localhost:8182/discoveragent/upnp/devices</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?devicedetails&device=4', function(data) {
		//it works, do something with the data
		$('#getnew .details').append('<br><div>http://localhost:8182/discoveragent/upnp/devicedetails&device=4</div><br><div>'+data+'</div>');
	});
	$.get('http://localhost:8182/discoveragent/upnp/services?device=4', function(data) {
		//it works, do something with the data
		$('#getnew .services').append('<br><div>http://localhost:8182/discoveragent/upnp/services?device=4</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp/actions?device=4&service=RenderingControl', function(data) {
		//it works, do something with the data
		$('#getnew .actions').append('<br><div>http://localhost:8182/discoveragent/upnp/actions?device=4&service=RenderingControl</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp/parameters?device=4&service=RenderingControl&action=SetVolume', function(data) {
		//it works, do something with the data
		$('#getnew .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp/parameters?device=4&service=RenderingControl&action=SetVolume</div><br><div>'+data+'</div>');
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
				//window.location.href = 'home.html';
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
	$('#javascript .devices').append('<div>'+Discovery.devices()+'</div>');
	$('#javascript .services').append('<br><div>'+Discovery.services(4)+'</div>');
	$('#javascript .actions').append('<br><div>'+Discovery.actions(4,"RenderingControl")+'</div>');
	$('#javascript .parameters').append('<br><div>'+Discovery.parameters(4, "RenderingControl", "SetVolume")+'</div>');

	$('#javascript .screenSize').append('<br><div>'+Discovery.services()+'</div>');
	$('#javascript .geolocation').append('<br><div>'+Discovery.geolocation()+'</div>');
	$('#javascript .orientation').append('<br><div>'+Discovery.orientation()+'</div>');
	$('#javascript .media').append('<br><div>'+Discovery.media()+'</div>');
	$('#javascript .vibration').append('<br><div>'+Discovery.vibration()+'</div>');
	$('#javascript .battery').append('<br><div>'+Discovery.battery()+'</div>');
	$('#javascript .userProximity').append('<br><div>'+Discovery.userProximity()+'</div>');
	$('#javascript .deviceProximity').append('<br><div>'+Discovery.deviceProximity()+'</div>');
    }
};
console.log("Trial");
app.initialize();
