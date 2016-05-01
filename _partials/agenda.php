<script>
  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '387632808073980',
  //     xfbml      : true,
  //     version    : 'v2.6'
  //   });
  // };

  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "//connect.facebook.net/pt_BR/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));
  

  window.fbAsyncInit = function() {
		FB.init({
			appId      : '387632808073980',
			xfbml      : true,
			version    : 'v2.3'
		});

		FB.api(
		    "/297402363703689?access_token=387632808073980|b234f72d6e537ace2eae0235c6520a00&fields=likes,fan_count",
		    function (response) {
		      if (response && !response.error) {
		        /* handle the result */
		        // console.log( response );
		      }
		      console.log( response );
		    }
		);

	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		// js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&appId=387632808073980&version=v2.3";
		js.src = "//connect.facebook.net/pt_BR/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));

</script>

	<div class="container">
		<div class="row">

			<div class="col-md-8 col-md-offset-2 bg-dark">
				
					<div class="text-center">
					  	<h1 class="section-title">AGENDA</h1>					  	
					</div>
					

					<div class="events">
			
					</div>
					<!-- End Events posts -->
			
					<a href="https://www.facebook.com/foegos/events" class="btn btn-block">VER AGENDA COMPLETA <i class="fa fa-chevron-right"></i></a>
					

					&nbsp;
					&nbsp;
					&nbsp;
				

			</div>
		</div>

		<hr>

		<div class="row">
			
			<div class="col-md-6 text-right">
			  	
			  	<div class="fb-page" data-href="https://www.facebook.com/foegos" data-width="" data-hide-cover="false" data-show-facepile="false" data-show-posts="false"></div>

			</div>	

			<div class="col-md-6">
				<h1 class="fa-2x">GRATOS PELOS <strong class="fa-2x"><span class="fb-likes"></span></strong> LIKES!</h1>						
				<div
				  class="fb-like"
				  data-href="https://www.facebook.com/foegos"
				  data-share="true"
				  data-width="300"
				  data-height="400"
				  data-show-faces="true"
				  data-show-facepile="true"
				  data-colorscheme="dark" >
				</div>				
			</div>
							
		</div>
		&nbsp;
		<div class="row">
			<div class="col-sm-12 text-center">

			</div>
		</div>
		<hr>

	</div>