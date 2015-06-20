var loader = new resLoader({
     resources : ["../image/atone.jpg","../image/bye.jpg","../image/confess.jpg","../image/end.jpg","../image/first.jpg","../image/grow-up.jpg","../image/inferior.jpg","../image/lonely.jpg","../image/one.jpg","../image/pride.jpg","../image/refuse.jpg"],
     onStart : function(total){
          console.log('start:'+total);
     },
     onProgress : function(current, total){
          console.log(current+'/'+total);
          var percent = current/total*100;
          $('.progressbar').css('width', percent+'%');
          $('.progresstext .current').text(current);
          $('.progresstext .total').text(total);
     },
     onComplete : function(total){
     	$('.progress').css('display', 'none');
     }
});

loader.start();