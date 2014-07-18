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
        //$('.search-key').on('keyup', $.proxy(this.findByName, this));

	$.post('http://localhost:8182/discoveragent/upnp?devices', function(data) {
		//it works, do something with the data
		$('#postzaharra .devices').append('<br><div>http://localhost:8182/discoveragent/upnp?devices</div><br><div>'+data+'</div>');
	});

	var dato={
		device:4
	};
	$.post('http://localhost:8182/discoveragent/upnp?devicedetails', dato, function(data) {
		//it works, do something with the data
		$('#postzaharra .details').append('<br><div>http://localhost:8182/discoveragent/upnp?devicedetails</div><br><div>'+data+'</div>');
	});
	$.post('http://localhost:8182/discoveragent/upnp?services', dato, function(data) {
		//it works, do something with the data
		$('#postzaharra .services').append('<br><div>http://localhost:8182/discoveragent/upnp?services</div><br><div>'+data+'</div>');
	});

	var datos1={
		device:4,
		service:"RenderingControl"
	};
	$.post('http://localhost:8182/discoveragent/upnp?actions', datos1, function(data) {
		//it works, do something with the data
		$('#postzaharra .actions').append('<br><div>http://localhost:8182/discoveragent/upnp?actions</div><br><div>'+data+'</div>');
	});
	var datos2={
		device:4,
		service:"RenderingControl",
		action:"SetVolume"
	};
	$.post('http://localhost:8182/discoveragent/upnp?parameters', datos2 , function(data) {
		//it works, do something with the data
		$('#postzaharra .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp?parameters</div><br><div>'+data+'</div>');
	});

	////////////////////////////////////////////////////////////////////////////////////////////////

	$.post('http://localhost:8182/discoveragent/upnp/devices', function(data) {
		//it works, do something with the data
		$('#postberria .devices').append('<br><div>http://localhost:8182/discoveragent/upnp/devices</div><br><div>'+data+'</div>');
	});

	$.post('http://localhost:8182/discoveragent/upnp?devicedetails', dato, function(data) {
		//it works, do something with the data
		$('#postberria .details').append('<br><div>http://localhost:8182/discoveragent/upnp/devicedetails</div><br><div>'+data+'</div>');
	});
	$.post('http://localhost:8182/discoveragent/upnp/services', dato, function(data) {
		//it works, do something with the data
		$('#postberria .services').append('<br><div>http://localhost:8182/discoveragent/upnp/services</div><br><div>'+data+'</div>');
	});

	$.post('http://localhost:8182/discoveragent/upnp/actions', datos1, function(data) {
		//it works, do something with the data
		$('#postberria .actions').append('<br><div>http://localhost:8182/discoveragent/upnp/actions</div><br><div>'+data+'</div>');
	});

	$.post('http://localhost:8182/discoveragent/upnp/parameters', datos2 , function(data) {
		//it works, do something with the data
		$('#postberria .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp/parameters</div><br><div>'+data+'</div>');
	});

	////////////////////////////////////////////////////////////////////////////////////////////////

	$.get('http://localhost:8182/discoveragent/upnp?devices', function(data) {
		//it works, do something with the data
		$('#getzaharra .devices').append('<br><div>http://localhost:8182/discoveragent/upnp?devices</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?devicedetails&device=4', function(data) {
		//it works, do something with the data
		$('#getzaharra .details').append('<br><div>http://localhost:8182/discoveragent/upnp?devicedetails&device=4</div><br><div>'+data+'</div>');
	});
	$.get('http://localhost:8182/discoveragent/upnp?services?device=4', function(data) {
		//it works, do something with the data
		$('#getzaharra .services').append('<br><div>http://localhost:8182/discoveragent/upnp?services&device=4</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?actions&device=4&service=RenderingControl', function(data) {
		//it works, do something with the data
		$('#getzaharra .actions').append('<br><div>http://localhost:8182/discoveragent/upnp?actions&device=4&service=RenderingControl</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?parameters&device=4&service=RenderingControl&action=SetVolume', function(data) {
		//it works, do something with the data
		$('#getzaharra .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp?parameters&device=4&service=RenderingControl&action=SetVolume</div><br><div>'+data+'</div>');
	});

	////////////////////////////////////////////////////////////////////////////////////////////////

	$.get('http://localhost:8182/discoveragent/upnp/devices', function(data) {
		//it works, do something with the data
		$('#getberria .devices').append('<br><div>http://localhost:8182/discoveragent/upnp/devices</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp?devicedetails&device=4', function(data) {
		//it works, do something with the data
		$('#getberria .details').append('<br><div>http://localhost:8182/discoveragent/upnp?devicedetails&device=4</div><br><div>'+data+'</div>');
	});
	$.get('http://localhost:8182/discoveragent/upnp/services?device=4', function(data) {
		//it works, do something with the data
		$('#getberria .services').append('<br><div>http://localhost:8182/discoveragent/upnp/services?device=4</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp/actions?device=4&service=RenderingControl', function(data) {
		//it works, do something with the data
		$('#getberria .actions').append('<br><div>http://localhost:8182/discoveragent/upnp/actions?device=4&service=RenderingControl</div><br><div>'+data+'</div>');
	});

	$.get('http://localhost:8182/discoveragent/upnp/parameters?device=4&service=RenderingControl&action=SetVolume', function(data) {
		//it works, do something with the data
		$('#getberria .parameters').append('<br><div>http://localhost:8182/discoveragent/upnp/parameters?device=5&service=RenderingControl&action=SetVolume</div><br><div>'+data+'</div>');
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
    }
};
console.log("Trial");
app.initialize();
