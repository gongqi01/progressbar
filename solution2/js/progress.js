
    var ractive1 = new Ractive({
      el: '#container1',
      template: '#template',
      data: { readonly:	 			false,					
    progress: 			25,
    barid: 'bar1' }
    });
    
    var ractive2 = new Ractive({
      el: '#container2',
      template: '#template',
      data: { readonly:	 			false,					
    progress: 			50,
    barid: 'bar2' }
    });
    
    var ractive3 = new Ractive({
      el: '#container3',
      template: '#template',
      data: { readonly:	 			false,					
    progress: 			75,
    barid: 'bar3' }
    });

		
		$(document).ready(function(){
			
			progressnum = ractive1.get('progress');
			
			$('#sbar').on('change', function() {
  			var currentVal =  parseInt(this.value);
  			switch(currentVal) {
    			case 2:
        	  progressnum = ractive2.get('progress');
        		break;
    			case 3:
        		progressnum = ractive3.get('progress');
        		break;
    			default:
    				
       		  progressnum = ractive1.get('progress');
      	}
			});
			
			
    	$("button").click(function(){

        var increVal = parseInt(progressnum) + parseInt($(this).attr("value"));
        progressnum = increVal;

			if(increVal < 0)
				increVal = 0;
			
			
			var selectedBar = parseInt($("#sbar").val());
			
			
			switch(selectedBar) {
    		case 2:
        	ractive2.set({
  					progress: increVal
					});
					
					if(increVal > 100)
			  		$( "#bar2" ).css( "background-color", "red" );
        	break;
    		case 3:
        	ractive3.set({
  					progress: increVal
					});
					if(increVal > 100)
			  		$( "#bar3" ).css( "background-color", "red" );
        	break;
    		default:
        	ractive1.set({
  					progress: increVal
					});
					if(increVal > 100)
			  		$( "#bar1" ).css( "background-color", "red" );
			}
			
			
    });
});