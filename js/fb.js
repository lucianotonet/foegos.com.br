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
		url: 'https://graph.facebook.com/v2.3/297402363703689/events?access_token=387632808073980|b234f72d6e537ace2eae0235c6520a00&fields=id,cover,name,picture,place,description,attending,start_time,interested_count',
		type: 'GET',
		dataType: 'json',		
	})
	.done(function( response ) {

		// console.log(response);		

		// $.each(response.data.reverse(), function(index, foegos_event) {
		
			var foegos_event = response.data[0];

			var event_date 	= new Date( foegos_event.start_time );
			var event_date 	= moment( foegos_event.start_time ).locale('pt');
			var event_id 	= foegos_event.id;

			//var event_html = $.parseHTML(foegos_event.description);

			console.log(foegos_event);

			var output  =  	'<article class="event cf text-center" data-event="'+foegos_event.id+'" data-cover="" id="'+foegos_event.id+'">';
				output +=	'<time datetime="" class="date">'+
									'<small>'+event_date.fromNow()+'</small>'+
									'<br/>'+									
							'</time>';
				output +=	'<div class="event_wrap">'+
								'<div class="event_div">'+									
									'<h1 class="event_title">'+
										'<a href="https://fb.com/'+foegos_event.id+'">'+foegos_event.name+'</a>'+										
									'</h1>'+

									'<i class="fa fa-calendar"></i> '+
								'<span class="date__day">'+event_date.format('DD')+'</span> de '+
								event_date.format('MMMM')+
								' de <span class="date__year">'+event_date.format('YYYY')+'</span>';
				
				if( 'place' in foegos_event ){
					output +=	 	' | <span> '+
										'<i class="fa fa-map-marker"></i> '+foegos_event.place.name+
									'</span>';
				}

				output += 		'</div>';
				// if( 'description' in foegos_event && foegos_event.description ){
				// 	output +=	'<p class="event_description"></p>';
				// }
				
				// if ( foegos_event.interested_count > 1){
				// 	output +=	'<p class="event_description"><small>'+event_date.fromNow()+' | '+foegos_event.interested_count+' pessoas disseram que vão</small></p>';						
				// }else 
				// if ( foegos_event.interested_count == 1) {
				// 	output +=	'<p class="event_description"><small>'+event_date.fromNow()+' | Uma pessoa confirmada até agora</small></p>';						
				// }else{
				// 	output +=	'<p class="event_description"><small>'+event_date.fromNow()+' | Você vai?</small></p>';
				// }
				
				// output +=	'<p class="">'+event_date.fromNow()+'</p>';
				output += 	'</div>'+
							'</article>';
			

			$('.events').prepend( output );

			//$( '#'.event_id+' .event_description' ).html(event_html);

			jQuery(".timeago").timeago();

			$('article.event').click(function(event) {
				get_event_details( $(this).data('event') );
			}); 

		// });

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