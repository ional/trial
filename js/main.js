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
	var datos={
		device:4,
		service:"RenderingControl",
		action:"SetVolumen"
	};
	console.log("device: "+datos.device);
	console.log("service: "+datos.service);
	console.log("action: "+datos.action);
	$.ajax({
		type: "POST",
    		url: 'http://localhost:8182/discoveragent/upnp?actionparameters',
		data: datos,
    		success: function(data) {
			console.log(data);
			//$('.response').append('<div>'+data+'</div>');
        	//it works, do something with the data
	    },
	    error: function() {
		//something went wrong, handle the error and display a message
	    }
	});

    }
};
console.log("Trial");
app.initialize();
