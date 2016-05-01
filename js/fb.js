!function(){
	"use strict";


	var get_event_details = function (id) {
			$.ajax({
			url: 'https://graph.facebook.com/v2.3/'+id+'/feed?access_token=1094566467237112|d139094f4c03e6b38fc847c93d32b53d',
			type: 'GET',
			dataType: 'json',		
		})
		.done(function( response ) {
			console.log( response );

			// $('.event-display').html('<img src="'+response.cover.source+'">');
			$('.event-display').html( response.message );

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			// console.log("complete");
		});	
	};

	
	

	$.ajax({
		url: 'https://graph.facebook.com/v2.3/297402363703689/events?access_token=387632808073980|b234f72d6e537ace2eae0235c6520a00&fields=id,cover,name,picture,place,description,attending,start_time',
		type: 'GET',
		dataType: 'json',		
	})
	.done(function( response ) {

		// console.log(response);		

		$.each(response.data.reverse(), function(index, foegos_event) {
			var event_date 	= new Date( foegos_event.start_time );
			var event_date 	= moment( foegos_event.start_time ).locale('pt');
			var event_id 	= foegos_event.id;

			var event_html = $.parseHTML(foegos_event.description);

			console.log(event_html);

			var output  =  	'<article class="event cf" data-event="'+foegos_event.id+'" data-cover="" id="'+foegos_event.id+'">';
				output +=	'<time datetime="" class="date">'+
								'<span class="date__day">'+event_date.format('DD')+'</span>'+
								event_date.format('MMMM')+
								'<span class="date__year">'+event_date.format('YYYY')+'</span>'+
							'</time>';
				output +=	'<div class="event_wrap">'+
								'<div class="event_div">'+
									'<h1 class="event_title">'+
										'<a href="https://fb.com/'+foegos_event.id+'">'+foegos_event.name+'</a>'+
									'</h1>';
				if( 'place' in foegos_event && 'location' in foegos_event.place ){
					output +=	 	'<p class="event_category">'+
										'<i class="fa fa-map-marker"></i>'+foegos_event.place.location.city+
									'</p>';
				}
				output += 		'</div>';
				if( 'description' in foegos_event ){
					output +=	'<p class="event_description">'+event_html+'</p>';
					output +=	'<p class="">'+event_date.fromNow()+'</p>';
				}else{
					output +=	'<p class="event_description text-capitalize">'+event_date.fromNow()+'</p>';
				}
				output += 	'</div>'+
							'</article>';
			

			$('.events').prepend( output );

			$( '#'.event_id+' .event_description' ).html(event_html);

			jQuery(".timeago").timeago();

			$('article.event').click(function(event) {
				get_event_details( $(this).data('event') );
			}); 

		});

	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
// 		console.log("complete");
	});	

	// TIMEAGO
	jQuery(".timeago").timeago();



	// FACEBOOK LIKES
	$.ajax({
		url: 'https://graph.facebook.com/v2.6/297402363703689?access_token=387632808073980|b234f72d6e537ace2eae0235c6520a00&fields=likes,fan_count',
		type: 'GET',
		dataType: 'json',		
	})
	.done(function( response ) {
		console.log(response);
		// fan_count: 1013
		$('.fb-likes').html( response.fan_count );
	});

	


}();