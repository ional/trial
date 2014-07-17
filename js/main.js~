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
		$('.devices').append('<div>'+data+'</div>');
	});
	var datos={
		device:4
	};
	$.post('http://localhost:8182/discoveragent/upnp?devicedetails', datos, function(data) {
		//it works, do something with the data
		$('.details').append('<br><div>'+data+'</div>');
	});
	$.post('http://localhost:8182/discoveragent/upnp?services', datos, function(data) {
		//it works, do something with the data
		$('.services').append('<br><div>'+data+'</div>');
	});
	var datos={
		device:4,
		service:"RenderingControl"
	};
	$.post('http://localhost:8182/discoveragent/upnp?serviceactions', datos, function(data) {
		//it works, do something with the data
		$('.actions').append('<br><div>'+data+'</div>');
	});
	var datos={
		device:4,
		service:"RenderingControl",
		action:"SetVolume"
	};
	$.post('http://localhost:8182/discoveragent/upnp?actionparameters', datos , function(data) {
		//it works, do something with the data
		$('.parameters').append('<br><div>'+data+'</div>');
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
    		url: 'http://localhost:8182/discoveragent/upnp?actionparameters&device=4&service=RenderingControl&action=SetVolumen',
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
