$(function(){
//	console.log($('.search'));
	
	
	$('.search').on('click',function(){
        $('.header').addClass('searching');
    })
    $('.bag').on('click',function(){
        $('.header').removeClass('searching');
    })
   
    $('.bread').on('click',function(){
//  	console.log($(this));
    	
        $('.phone-lists .phone-item:first').toggleClass('chuxian xie');
    })
    
    
    
    var banas = $('.banner-box .gallery a');
    var flag = false;
    $('.docs .xi:first').removeClass('active');
    $('.docs .xi').get(0).offsetWidth;
    $('.docs .xi:first').addClass('active');
    moveTo = function(el,dir){
    	if(!flag){
    		flag=true;
    		if(dir=="right"){
    			banas.filter('.active')
    			     .removeClass('active')
    			     .addClass('leave')
    			     .delay(800)
    			     .queue(function(){
    			     	flag = false;
    			     	$(this).removeClass('leave').dequeue();
    			     });
    			$(el).addClass('right');
    			$(el).get(0).offsetWidth;
    			$(el).removeClass('right').addClass('active');
    		}else if(dir=="left"){
    			banas.filter('.active')
    			     .removeClass('active')
    			     .addClass('enter')
    			     .delay(800)
    			     .queue(function(){
    			     	flag = false;
    			     	$(this).removeClass('enter').dequeue();
    			     });
    			$(el).addClass('left');
    			$(el).get(0).offsetWidth;
    			$(el).removeClass('left').addClass('active');
    		}
    	}
    	
    	var active = $('.docs .active');
    	console.log(active);
    	if(!($(active).length==4)){
//  		console.log(1);
    		$('.docs .xi').eq(banas.index(el)).addClass('active');
    	}else{
//  		console.log(2);
			$('.docs .xi:first').removeClass('active');
		    $('.docs .xi').get(0).offsetWidth;
		    $('.docs .xi:first').addClass('active');
    		$('.docs .xi').removeClass('active').eq(banas.index(el)).addClass('active');
    	}
//  	$('.docs .xi').removeClass('active').eq(banas.index(el)).addClass('active');
    }
    
   moveRight = function(){
   	var active = banas.filter('.active');
   	var el = $(active).next().length?$(active).next():banas.eq(0);
   	moveTo(el,'right');
   }
   
   moveLeft = function(){
   	var active = banas.filter('.active');
   	var el = $(active).prev().length?$(active).prev():banas.eq(-1);
   	moveTo(el,'left');
   }
   
   setInterval(moveRight,2000);
   
   $('.doc-lists .docs').on('click',function(){
   	var m = banas.filter('.active').index();
   	var n = $(this).index();
   	var el = banas.eq(n);
   	if(n>m){
   		moveTo(el,'right');
   	}else if(n<m){
   		moveTo(el,'left');
   	}else if(n==m){
   		return;
   	}
   })
   
   var butRight = $('.buttun .right button');
   butRight.on('click',function(){
   	moveRight();
   })
   var butLeft = $('.buttun .left button');
   butLeft.on('click',function(){
   	moveLeft();
   })
   
   $(document).on('mousedown',false);
})
