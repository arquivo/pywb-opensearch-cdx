String.prototype.replaceAll = String.prototype.replaceAll || function(needle, replacement) {
    return this.split(needle).join(replacement);
}; 
/*Arquivo.pt specific functions and js code, such as loading constants, cookies, custom html code, etc*/
var ARQUIVO = ARQUIVO || (function(){
    var _static_path;
	var	_url;
	var _ts;
	var _hostname = window.location.hostname;
	var _language ='pt';
    return {
        init : function(static_path) {
			_static_path = static_path;
			this.loadLanguage();
        },
        /*Choose language and load corresponding Constants*/
		loadLanguage: function(){
			var language = localStorage.language;
		    if( language == 'EN'){
		      $('html').attr('lang', 'en');						
		        document.write('<script type="text/javascript" language="JavaScript" src="'+_static_path+'/properties/ConstantsEN.js?release=Zeus"><\/script>');
		        _language = 'en';
		    }
		    else{
		      _language ='pt';	
		      $('html').attr('lang', 'pt');
		        document.write('<script type="text/javascript" language="JavaScript" src="'+_static_path+'/properties/ConstantsPT.js?release=Zeus"><\/script>');
		    }
		},
		iframeResize: function(){ /*Code written by the author of Jquery to dynamically resize iframe to always have height equal to the parent container*/
			var buffer = 20; //scroll bar buffer
			var iframe = document.getElementById('replay_iframe');
			var bottomBar =47;

			function pageY(elem) {
			    return elem.offsetParent ? (elem.offsetTop + pageY(elem.offsetParent)) : elem.offsetTop;
			}

			function resizeIframe() {
			    var height = document.documentElement.clientHeight;
			    height -= pageY(document.getElementById('replay_iframe'))+ buffer ;
			    height = (height < 0) ? 0 : height;
			    document.getElementById('replay_iframe').style.height = height+20-bottomBar + 'px';
			}

			// .onload doesn't work with IE8 and older.
			if (iframe.attachEvent) {
			    iframe.attachEvent("onload", resizeIframe);
			} else {
			    iframe.onload=resizeIframe;
			}

			window.onresize = resizeIframe;    			
		},
		/*Write custom html code before the Iframe*/
		beforeIframe: function(){
			document.write(''+
			  '<div class="swiper-container swiper-container-horizontal noprint">'+
			  ' <div class="swiper-wrapper" id="swiperWrapper">'+
			  '  <div class="swiper-slide content swiper-slide-active">'+
			  '    <div class="main-content">'+
			  '      <div class="container-fluid">'+
			  '        <div class="row text-center logo-main-div-no-border">'+
			  '                    <a href="/?l='+_language+'"><img src="'+_static_path+'/img/01_preto.png" id="arquivoLogo" alt="Logo Arquivo.pt" class="text-center logo-main"></a>'+
			  '                    <a class="pull-right main-menu"id="menuButton"><i class="fa fa-bars"></i></a>'+
			  '        </div>  '+
			  '        <div class="row logo-main-div replay-options">'+
			  				'<button class="clean-button" style="padding:11px" onclick="ARQUIVO.showPageOptions()"><span class="opts">'+Content.options+'</span></button>'+
			  		/*   	'<ion-button size="small" expand="full" color="white" fill="outline"class="options-button" onclick="console.log(\'custom button\')" >Opcoes da p&#225gina</ion-button>'+*/
			  '        </div>  '+			  
			  '      </div>  ');		
		},
		afterIframe: function(){
			document.write(''+
			  '   </div>' +
              '   <div class="maskMenu"></div>'+
              '  </div>'+
             '		<div class="swiper-slide menu swiper-slide-prev">' +       
/*              '			<div class="main-menu-top-div">'+
			  '	 			<h4 id="menuUrl" title="'+_url+'">'+ this.truncateEndURL(_url, 20)+'</h4>' +
			  ' 			<h5 id="menuTs">'+ this.getShortDatets() +'</h5>' + 			                             
			  '			</div>'+
*/
			  '			<button class="clean-button" onclick="ARQUIVO.copyLink();"><h4><i class="fa fa-link padding-right-menu-icon" aria-hidden="true"></i> '+Content.copyLink+'</h4></button>' +
  					   '<button class="clean-button" id="pagesMenu" onclick="ARQUIVO.pagesClick();"><h4><i class="fa fa-globe padding-right-menu-icon" aria-hidden="true"></i> '+Content.pages+'<i id="pagesCarret" class="fa fa-caret-down iCarret shareCarret pull-right" aria-hidden="true"></i></h4></button>'+	 			  
      				   '<div id="pageOptions">'+
              ' 			<a href="/index.jsp?l='+Content.language+'" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'NewSearchClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4 class="submenu"><i class="fa fa-search right-7" aria-hidden="true"></i> '+Content.newSearch+'</h4></a>' +
              ' 			<a href="//'+_hostname+'/advanced.jsp?l='+Content.language+'" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'AdvancedSearchClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4 class="submenu"><i class="fa fa-search-plus right-7" aria-hidden="true"></i> '+Content.advancedSearch+'</h4></a>' +
              		   '</div>'+
			  		   '<button class="clean-button" id="imagesMenu" onclick="ARQUIVO.imagesClick();"><h4><i class="fa fa-image padding-right-menu-icon" aria-hidden="true"></i> '+Content.images+'<i id="imagesCarret" class="fa iCarret shareCarret pull-right fa-caret-down" aria-hidden="true"></i></h4></button>'+
      				   '<div id="imageOptions">'+
              ' 			<a href="/images.jsp?l='+Content.language+'" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'NewImageSearchClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4 class="submenu"><i class="fa fa-search right-7" aria-hidden="true"></i> '+Content.newSearch+'</h4></a>' +
              ' 			<a href="/advancedImages.jsp?l='+Content.language+'" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'AdvancedImageSearchClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4 class="submenu"><i class="fa fa-search-plus right-7" aria-hidden="true"></i> '+Content.advancedSearch+'</h4></a>' +
              		   '</div>'+

              //' 		<a href="#" id="shareMenu"><h4><i alt="'+Content.moreInfoIcon+'" class="fa fa-share-alt right-9" aria-hidden="true"></i> '+Content.share+'<i id="shareCarret" class="fa fa-caret-down iCarret shareCarret pull-right" aria-hidden="true"></i></h4></a>'+
              //'			<div id="shareOptions">'+
              //' 			<a class="addthis_button_facebook" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'FacebookShareClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');" href=""><h4 class="submenu"><i class="fa fa-facebook right-13" aria-hidden="true"></i> '+ Content.facebook+'</h4></a>'+
              //' 			<a class="addthis_button_twitter" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'TwitterShareClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');" ><h4 class="submenu"><i class="fa fa-twitter" aria-hidden="true"></i> '+Content.twitter+'</h4></a>'+
              //' 			<a title="'+Content.mailTitle+'" href="mailto:?subject='+Content.emailMessage+'[sub]" onclick="this.href = this.href.replace(\'[sub]\',document.title + \'%0D%0A'+ encodeURIComponent(this.getDatets()) +'%0D%0A %0D%0A\' + encodeURIComponent(window.location.href) ); ga(\'send\', \'event\', \'ReplayBarFunctions\', \'EmailShareClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');""><h4 class="submenu"><i class="fa fa-envelope" aria-hidden="true"></i> '+Content.email+'</h4></a>'+
			  //'			</div>'+
			  //' 		<a href="#" id="a_moreinfo" title="'+Content.moreInfoIcon+'"><h4><i class="fa fa-info-circle right-9" aria-hidden="true"></i> '+Content.moreInfoIcon+'</h4></a>'+			  
             //' 		<a id="screenshotOption"><h4><i class="fa fa-camera right-5" aria-hidden="true"></i> '+Content.saveImage+'</h4></a>' +
			 //'	 		<a id="printOption"><h4><i class="fa fa-print right-7" aria-hidden="true"></i> '+Content.print+'</h4></a>'+
             // '		 <a id="expandPage" href="/noFrame/replay/'+_ts+'/'+_url+'" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'ExpandClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4><i class="ion ion-arrow-resize right-8" aria-hidden="true"></i> '+Content.expandPage+'</h4></a>'+			                
              '		 <a id="switchDesktop" href="" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'SwitchDesktopClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4><i class="fa fa-desktop right-8" aria-hidden="true"></i> '+Content.switchDesktop+'</h4></a>'+			                    
			  '		 <a id="reportBug"><h4><i class="fa fa-bug right-10" aria-hidden="true"></i> '+Content.report+'</h4></a>'+              
              '		 <a href="'+Content.aboutHref+'" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'AboutClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4><i class="fa fa-info-circle right-10" aria-hidden="true"></i> '+Content.about+'</h4></a>'+
              '		 <a id="changeLanguage" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'ChangeLanguageTo'+Content.otherLanguage+'Click\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4><i class="fa fa-flag right-6" aria-hidden="true"></i> '+Content.otherLanguageExtended+'</h4></a>'+
              '		</div>'+
              '	</div>'+
			  '</div>'+
			  '<div id="divPrintMe"></div>');
			this.attachScreenshotModal();
			this.attachPrintModal();
			this.iframeResize();
			this.createSlideMenu();
			this.attachLanguageChange();
			this.attachShare();
			this.attachTools();
			this.attachSwitchDesktop();
			this.attachMoreInfoModal();
			this.attachReportBug();
 		},
 		copyLink: function(){
			var dummy = document.createElement('input')			    
			var urlToCopy= window.location.href;

			document.body.appendChild(dummy);
			dummy.value = urlToCopy;
			dummy.select();
			document.execCommand('copy');
			document.body.removeChild(dummy);
			$('body').append('<div id="alertCopy" class="alert alert-success alertCopy"><strong>'+Content.linkCopied+'</strong></div>');
			$('#alertCopy').show().delay(1500).fadeOut();
			setTimeout(function(){
  			$('#alertCopy').remove();
			}, 2000); /*time to show the notification plus the time to do the fadeout effect*/ 			
 		},
 		showPageOptions: function(){
 			console.log("options");

		              uglipop({
		                class:'modalReplay noprint scrollModal', //styling class for Modal
		                source:'html',
		                content:'<button onclick="ARQUIVO.closeUglipopCustomCss()" class="expand__close__white" title="Fechar"></button>'+
				                '<div class="main-menu-top-div">'+
							    	'<h4 id="menuUrl" title="'+_url+'">'+ this.truncateEndURL(_url, 20)+'</h4>' +
							  		'<h5 id="menuTs">'+ this.getShortDatets() +'</h5>' + 			                             
							  	'</div>'+
							  	'<div class="fullwidth menu">'+
									'<a href="//'+_hostname+'/search.jsp?l='+Content.language+'&query='+encodeURIComponent(_url)+'" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'ListVersionsClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4><i class="fa fa-list" aria-hidden="true"></i> '+Content.allVersions+'</h4></a>'+ 						                      
									'<a href="#" id="a_moreinfo" title="'+Content.moreInfoIcon+'"><h4><i class="fa fa-info-circle right-9" aria-hidden="true"></i> '+Content.moreInfoIcon+'</h4></a>' +									
             						'<a id="screenshotOption"><h4><i class="fa fa-camera right-5" aria-hidden="true"></i> '+Content.saveImage+'</h4></a>' +
			 						'<a id="printOption"><h4><i class="fa fa-print right-7" aria-hidden="true"></i> '+Content.print+'</h4></a>'+									
			 						'<a id="expandPage" href="/noFrame/replay/'+_ts+'/'+_url+'" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'ExpandClick\', \'arquivo.pt/'+_ts+'/'+_url+'\');"><h4><i class="ion ion-arrow-resize right-8" aria-hidden="true"></i> '+Content.expandPage+'</h4></a>'+								
								'</div>'+
		                        '<div></div>'
		              });
		              $( ".scrollModal" ).ready(function() {
		                $( ".scrollModal" ).parent().css({
		                    'top': 'inherit',
		                    'left': 'inherit',
		                    'bottom': '47px',
		                    'width': '100%',
		                    'max-height': '80%',		                    
		                    'opacity': '1',  
		                    'overflow': 'auto' ,
		                    'transform': 'none',
		                    '-webkit-transform': 'none',
		                    '-ms-transform': 'unset'
		                });

		              }); 
		              ARQUIVO.attachClosePopup();
                	  $('#a_moreinfo').on('click', function(e){         
        				ARQUIVO.moreInfoModal();        
      				  });  


 		},
 		updateInfo: function(url, ts){
 			_url = url;
 			_ts = ts;
			/*get new page title and update it*/  
			var title = $("#replay_iframe").contents().find("meta[property='og:title']").attr("content");
			if(title === undefined || title === null) // there is no og:title meta tag in this iframe
			{
			  title = $("#replay_iframe").contents().find("title").html(); //search for a title tag in the iframe
			  if (title === undefined || !title.length){ //there is no title 
			      title = "Arquivo.pt"/*Content.shareMessage;*/
			  }
			}
			title = title + " - preservado pelo Arquivo.pt"/*Content.preservedByArquivo*/;
			document.title = title;

			var addthis_config = addthis_config||{};
			addthis_config.data_track_addressbar = false;
			addthis_config.data_track_clickback = false;

			theurl= 'arquivo.pt/wayback/'+_ts+'/'+_url;

			$('#expandPage').attr('href', '/noFrame/replay/'+_ts+'/'+_url);
			$('#expandPage').attr('onclick', 'ga(\'send\', \'event\', \'ReplayBarFunctions\', \'ExpandClick\', \'arquivo.pt/'+_ts+'/'+_url+'\')');

			$('#menuUrl').attr('title', _url);
			$('#menuUrl').html(ARQUIVO.truncateEndURL(_url,20)); /*update menu url*/
			$('#menuTs').html(ARQUIVO.getShortDatets()); /*update menu ts*/

			ga('send', 'pageview'); /*New page*/ 			
 		},
 		createSlideMenu: function(){
		    var ignoreInitialTransitionEnd = 0;
		    var toggleMenu = function(){
		      if (swiper.previousIndex == 0)
		        swiper.slidePrev()
		    }
		    , swiper = new Swiper('.swiper-container', {
		      slidesPerView: 'auto'
		      , initialSlide: 1
		      , resistanceRatio: .00000000000001
		      ,onTransitionEnd: function(slider){
		        if(ignoreInitialTransitionEnd === 0){
		          ignoreInitialTransitionEnd+=1;
		          return;
		        }
		        if( $('.swiper-wrapper').css('transform').split(',')[4] != 0){
		          $('.swiper-wrapper').addClass('active');
		          $('.maskMenu').fadeIn(150);    
		        }
		        else{
		          $('.swiper-wrapper').removeClass('active');
		          $('.maskMenu').fadeOut();             
		        }
		      }
		      , onSlideChangeEnd: function(slider) {
		        if (slider.activeIndex == 0){
		          menuButton.removeEventListener('click', toggleMenu, false);
		        }
		        else{
		          $('.swiper-wrapper').addClass('active');
		          menuButton.addEventListener('click', toggleMenu, false);
		        }
		      }
		      , slideToClickedSlide: true
		    })
	        $('.swiper-wrapper').css('-webkit-transition', 'all 0s linear' );
	        $('.swiper-wrapper').css('-moz-transition', 'all 0s linear' );
	        $('.swiper-wrapper').css('-o-transition', 'all 0s linear' );
	        $('.swiper-wrapper').css('-ms-transition', 'all 0s linear' );
	        $('.swiper-wrapper').css('transition', 'all 0s linear' );
	        $('.swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)' );
	        $('.swiper-wrapper').css('-webkit-transform', 'translate3d(0px, 0px, 0px)' );	
			$('.maskMenu').on('click', function (e) { 
				ARQUIVO.closeSwipeMenu(); 
			});  
			$('#menuButton').on('click', function(e){
				ga('send', 'event', 'ReplayBarFunctions', 'MainMenuClick', 'arquivo.pt/'+_ts+'/'+_url);
				$('.swiper-wrapper').addClass('active');
				$('.swiper-wrapper').css('-webkit-transition', 'all 0.3s linear' );
				$('.swiper-wrapper').css('-moz-transition', 'all 0.3s linear' );
				$('.swiper-wrapper').css('-o-transition', 'all 0.3s linear' );
				$('.swiper-wrapper').css('-ms-transition', 'all 0.3s linear' );
				$('.swiper-wrapper').css('transition', 'all 0.3s linear' );
				$('.swiper-wrapper').css('transform', 'translate3d(-'+$('.menu').width()+'px, 0px, 0px)' );
				$('.swiper-wrapper').css('-webkit-transform', 'translate3d(-'+$('.menu').width()+'px, 0px, 0px)' );
				$('.maskMenu').fadeIn(150);    
			});	        	    
 		},
 		attachScreenshotModal: function(){
		  $('#screenshotOption').on('click', function(e){
		  	ARQUIVO.closeSwipeMenu();    		  	
		  	ARQUIVO.screenshotModal();		  	
		  }); 			
 		}, 		
 		/*When user clicks on the screenshot link generate screenshot of current url*/
 		attachScreenshot: function(){
		  $('#takeScreenshot').on('click', function(e){
		  	ARQUIVO.closeUglipop();
		    window.open('//'+_hostname+'/screenshot/?url='+encodeURIComponent("https://"+_hostname+"/noFrame/replay/"+ _ts+'/'+_url)+"&width="+window.screen.width/*window.innerWidth*/+"&height="+/*window.innerHeight*/ window.screen.height);
		  }); 			
 		},
 		attachPrintModal: function(){
		  $('#printOption').on('click', function(e){
		  	ARQUIVO.closeSwipeMenu();    		  	
		  	ARQUIVO.printModal();
		  }); 			
 		}, 
 		attachPrint: function(){
		  $('#printPage').on('click', function(e){
		    ARQUIVO.getImageToPrint("https://"+_hostname+"/noFrame/replay/"+ _ts+"/"+_url);
		  }); 			
 		},  		 		 				
 		attachShare: function(){
		  $('#shareMenu').on('click', function(e){
		  	ga('send', 'event', 'ReplayBarFunctions', 'ShareMenuClick', '//arquivo.pt/'+_ts+'/'+_url);
		    $('#shareCarret').toggleClass('fa-caret-up fa-caret-down');
		    $('#shareOptions').slideToggle( "fast", "linear" );
		  }); 	 			
 		}, 	
 		attachTools: function(){
		  $('#toolsMenu').on('click', function(e){
		  	ga('send', 'event', 'ReplayBarFunctions', 'ToolsMenuClick', '//arquivo.pt/'+_ts+'/'+_url);		  	
		    $('#toolsCarret').toggleClass('fa-caret-up fa-caret-down');
		    $('#toolsOptions').slideToggle( "fast", "linear" );
		  }); 	 			
 		}, 	 			
 		attachSwitchDesktop: function(){
		  $('#switchDesktop').on('click', function(e){		  	
		  	e.preventDefault();
		  	ga('send', 'event', 'ReplayBarFunctions', 'SwitchDesktopClick', '//arquivo.pt/'+_ts+'/'+_url);	
			Cookies.set('forceDesktop', 'true', { domain: window.location.hostname.substr(2, window.location.hostname.length), path:'djsakj' });
			/*redirect current link from mobile to desktop version i.e. remove the m. from current link*/
			window.location = window.location.href.replace(window.location.hostname , window.location.hostname.substr(2, window.location.hostname.length)); 
		  }); 	 			
 		},
		moreInfoModal: function(){
		  ga('send', 'event', 'ReplayBarFunctions', 'MoreInformationMenuClick', '//arquivo.pt/'+_ts+'/'+_url);
		    var requestURL = "//"+window.location.hostname.replace("m.","")+ "/textsearch";
		    metadataResponse= '';
		      $.ajax({
		      // example request to the cdx-server api - 'http://arquivo.pt/textsearch?metadata=http%3A%2F%2Fquiz.musicbox.sapo.pt%2F%2F20131108093638'
		          url: requestURL,
		          data: {
		            metadata: _url+"/"+_ts
		          },
		          dataType: 'text',

		        error: function() {
		             printLoading= false; 
		             console.log('error showing metadata');
		         },
		         success: function(data) {
		              var theMetadata = jQuery.parseJSON(data).response_items;
		              for(var obj in theMetadata){
		                  if(theMetadata.hasOwnProperty(obj)){
		                    for(var prop in theMetadata[obj]){
		                        if(theMetadata[obj][prop] === '') continue; /*do not show empty fields*/
		                        if(theMetadata[obj].hasOwnProperty(prop)){
		                          if(theMetadata[obj][prop].startsWith('http')){
		                            metadataResponse += '<p class="modalparagraph"><strong>'+prop + '</strong>: <a target=_blank href="'+theMetadata[obj][prop]+'">' + theMetadata[obj][prop] + '</a></p>';    
		                          }
		                          else if(prop == "collection"){
		                            metadataResponse += '<p class="modalparagraph"><strong>'+prop + '</strong>: <a target=_blank href="https://archive.org/details/portuguese-web-archive?sin=&and[]='+ theMetadata[obj][prop] +'&and[]=subject%3A%22pwacrawlid%3A'+ theMetadata[obj][prop] +'%22&and[]=collection%3A%22portuguese-web-archive%22">' + theMetadata[obj][prop] + '</a></p>';
		                          }
		                          else{
		                           metadataResponse += '<p class="modalparagraph"><strong>'+prop + '</strong>: ' + theMetadata[obj][prop] + '</p>';
		                          }
		                        }
		                    }
		                  }
		              }            

		              uglipop({
		                class:'modalReplay noprint scrollModal', //styling class for Modal
		                source:'html',
		                content:'<button id="removeModal" class="expand__close" title="Fechar"></button>'+
		                        '<h4 class="modalTitle"><i  alt="'+Content.moreInfoIcon+'" class="ion ion-information-circled menu-icon"></i> '+Content.moreInfoIcon+' <a target="_blank" href="https://github.com/arquivo/pwa-technologies/wiki/Arquivo.pt-API-v.0.2-(beta-version)#response-fields">'+Content.techDetails+'</a></h4>'+
		                        '<div>' + metadataResponse + '</div>'
		              });
		              ARQUIVO.attachRemoveModal();
		              $( ".scrollModal" ).ready(function() {
		                $( ".scrollModal" ).parent().css({
		                    'top': '1%',
		                    'left': '3%',
		                    'bottom': '1%',
		                    'width': '94%',
		                    'height': '98%', 
		                    'opacity': '0.9',  
		                    'overflow': 'auto' ,
		                    'transform': 'none',
		                    '-webkit-transform': 'none',
		                    '-ms-transform': 'unset'
		                });

		              }); 
		              loadedModal = true;
		         },
		         type: 'GET',
		      });   
		}, 		
		attachMoreInfoModal: function(){
       		$('#a_moreinfo').on('click', function(e){         
        		ARQUIVO.moreInfoModal();        
      		});    			
		},
		attachRemoveModal: function(){
		       $('#removeModal').on('click', function(e){    
		          ARQUIVO.closeUglipopCustomCss();  
		        });
		       $('#uglipop_overlay').on('click', function(e){
		          if( $('#uglipop_popbox').hasClass('scrollModal')){
		            ARQUIVO.closeUglipopCustomCss();
		          }
		       });    
		},
		closeUglipopCustomCss: function(){
		  $('#uglipop_content_fixed').hide();
		  $('#uglipop_overlay').hide();
		  $( "#uglipop_content_fixed" ).css({
		                  'top': '50%',
		                  'left': '50%',
		                  'bottom': '',
		                  'width': '',
		                  'height': '', 
		                  'opacity': '1',  
		                  'overflow': 'auto' ,
		                  'transform': 'translate(-50%, -50%)',
		                  '-webkit-transform': 'translate(-50%, -50%)',
		                  '-ms-transform': 'translate(-50%, -50%)'
		  });
		},			
			 		 	 
 		attachLanguageChange: function(){
		  $('#changeLanguage').on('click', function(e){
		    ARQUIVO.setLang(Content.otherLanguage);
		  }); 	 			
 		},
 		/*Choose language*/
		setLang: function(lang) {
		    if(lang == 'EN')
		     {
		     	localStorage.setItem('language', 'EN');
		        window.location.reload();
		     }
		    else //default language Portuguese
		    {
		        localStorage.setItem('language', 'PT');   
		        window.location.reload();
		    }   
		},
		truncateURL: function(url, maxLength){
			var middleLength = 8;
			if(maxLength > 5){
				middleLength = (maxLength-3)/2;
			}
			url = url.replace(/(^\w+:|^)\/\//, ''); /*remove protocol from url*/
			if(url.length > maxLength){
				url = url.substring(0,middleLength) + '...' + url.substring(url.length-middleLength, url.length);
			}
			return url;
		},
		truncateEndURL: function(url, maxLength){
			url = url.replace(/(^\w+:|^)\/\//, ''); /*remove protocol from url*/
			if(url.length > maxLength){
				url = url.substring(0, maxLength - 3) + '...' ;
			}
			return url;
		},		
		/*Returns current timestamp in short form such as '2 Nov, 2015' */
		getShortDatets: function(){
		              var year = _ts.substring(0, 4);
		              var month = _ts.substring(4, 6);
		              var day = _ts.substring(6, 8);
		              if(day.charAt(0) == '0'){
		                day = day.charAt(1);
		              }

		  return day+" "+ Content.months[month]+", "+year;
		},
		getDatets: function(){
		              var year = ts.substring(0, 4);
		              var month = ts.substring(4, 6);
		              var day = ts.substring(6, 8);
		              if(day.charAt(0) == '0'){
		                day = day.charAt(1);
		              }
		  return day+" "+ Content.months[month]+", "+year;
		},
		getImageToPrint: function(encodedURLToPrint){
			ARQUIVO.closeUglipop();
			ARQUIVO.loadingModal();
		    var requestURL = "//"+_hostname+ "/print";
		    $.ajax({
		    // example request to the cdx-server api - 'http://arquivo.pt/print/?url='
		       url: requestURL,
		       data: {
		          url: encodedURLToPrint
		       },
		       dataType: 'text',
   		       error: function() {
		         top.alert('error printing');
		         top.alert('url: ' + requestURL+'?url='+encodedURLToPrint);
		       },
		       success: function(data) {
		            var theImage = jQuery.parseJSON(data);
		            $('#divPrintMe').show();
		            if($('#imgToPrint').length){ //if 2nd time user prints only update the image
		                $('#imgToPrint').attr('src','data:image/png;base64,'+theImage.imgBase64);
		            }
		            else{
		                $('#divPrintMe').append('<img id="imgToPrint" style="display: block;" width=600px src="data:image/png;base64,'+ theImage.imgBase64 + '"/>');                    
		            }
		            setTimeout(function(){
		  		    	window.print();
					}, 200); /*Wait 200ms for element to be created before printing*/
		            setTimeout(function(){
		            	$('#divPrintMe').hide();
					}, 1000); /*Wait 1s for image to be printed before hiding it*/					

		       },
		       complete : function(){
		       	ARQUIVO.loadingModal();
        		console.log(this.url);
    		   },
		       type: 'GET',
		    });
		},
		pagesClick: function(){
		    $('#pagesCarret').toggleClass('fa-caret-up fa-caret-down');
		    $('#pageOptions').slideToggle( "fast", "linear" );
		},
		imagesClick: function(){
		    $('#imagesCarret').toggleClass('fa-caret-up fa-caret-down');
		    $('#imageOptions').slideToggle( "fast", "linear" );
		},
		printModal: function(){
			ga('send', 'event', 'ReplayBarFunctions', 'PrintMenuClick', 'arquivo.pt/'+_ts+'/'+_url);
		    uglipop({
		      class:'modalReplay noprint', //styling class for Modal
		      source:'html',
		      content:'<h4 class="modalTitle"><i class="fa fa-print" aria-hidden="true"></i> '+Content.printModalTitle+'</h4>'+
		              '<div class="row"><a id="printPage" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'PrintMenuConfirm\', \'arquivo.pt/'+_ts+'/'+_url+'\');" class="col-xs-6 text-center leftAnchor modalOptions">OK</a><a id="cancelPopup" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'PrintMenuCancel\', \'arquivo.pt/'+_ts+'/'+_url+'\');" class="col-xs-6 text-center modalOptions">'+Content.cancel+'</a></div>'});
		    this.attachPrint();          			
		    this.attachClosePopup();
		},
		screenshotModal: function(){
			ga('send', 'event', 'ReplayBarFunctions', 'ScreenshotMenuClick', 'arquivo.pt/'+_ts+'/'+_url);			
		    uglipop({
		      class:'modalReplay noprint', //styling class for Modal
		      source:'html',
		      content:'<h4 class="modalTitle"><i class="fa fa-camera" aria-hidden="true"></i> '+Content.saveAsImage+'</h4>'+
		              '<div class="row"><a id="takeScreenshot" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'ScreenshotMenuConfirm\', \'arquivo.pt/'+_ts+'/'+_url+'\');" class="col-xs-6 text-center leftAnchor modalOptions">OK</a><a id="cancelPopup" onclick="ga(\'send\', \'event\', \'ReplayBarFunctions\', \'ScreenshotMenuCancel\', \'arquivo.pt/'+_ts+'/'+_url+'\');" class="col-xs-6 text-center modalOptions">'+Content.cancel+'</a></div>'});
		    this.attachScreenshot();          			
		    this.attachClosePopup();
		},
		loadingModal: function(){
			$('.maskMenu').toggle();
			$('#loadingAnimation').toggle();
		},		
		closeUglipop: function(){
			$('#uglipop_content_fixed').fadeOut();
			$('#uglipop_overlay').fadeOut('fast');
		},
 		attachClosePopup: function(){
		  $('#cancelPopup').on('click', function(e){
		  	ARQUIVO.closeUglipop();
		  }); 	 			
 		},
		attachReportBug: function(){
			$('#reportBug').click( function(e) {
				e.preventDefault();
				ga('send', 'event', 'ReplayBarFunctions', 'ReportBug', window.location.href);
				window.location = Content.bug + window.location.href.replaceAll('&', '%26');
			});
		},		 		
		closeSwipeMenu: function(){
	      $('.swiper-wrapper').css('-webkit-transition', 'all 0.3s linear' );
	      $('.swiper-wrapper').css('-moz-transition', 'all 0.3s linear' );
	      $('.swiper-wrapper').css('-o-transition', 'all 0.3s linear' );
	      $('.swiper-wrapper').css('-ms-transition', 'all 0.3s linear' );
	      $('.swiper-wrapper').css('transition', 'all 0.3s linear' );
	      $('.swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)' );
	      $('.swiper-wrapper').css('-webkit-transform', 'translate3d(0px, 0px, 0px)' );
	      $('.swiper-wrapper').removeClass('active');
	      $('.maskMenu').fadeOut(); 
		} 		 									 		
    };
}());

