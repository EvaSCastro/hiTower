$(document).ready(function () {
    var win = $(window);

	$(function(){
		$('#loading').show();
		for(var i=0;i<5;i++){
            $('#postsUser').append(randomPost());
        }
		$('#loading').hide();
	});
	
    // Each time the user scrolls
    win.scroll(function() {
        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            $('#loading').show();
            
            for(var i=0;i<5;i++){
                $('#postsUser').append(randomPost());
            }
            
            $('#loading').hide();
        }
    });
});

// Generate a random post
function randomPost() {

    // Generate the post
    var post = '<article> <div class="post"> <div class="col-xs-12" style="padding: 0px;"> <!--<div class="col-xs-1 user-top"> <img class="img-circle" src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"> </div>--> <div class="col-xs-12" style="padding: 0px;"> <div class="ribbon-top"> <strong>@jgoa156</strong><span class="text-muted" style="margin-left: 20px;">5 dias atrás</span> </div> </div> </div> <div class="col-xs-12" style="padding: 0px;"> <!--<div class="col-xs-1 user-bottom"></div>--> <div class="col-xs-12" style="padding: 0px;"> <div class="ribbon-bottom"> Panel content </div> </div> </div> </div> <h6 style="color: white;">A</h6></article>';

    return post;
}