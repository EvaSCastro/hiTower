$(document).ready(function () {
    var win = $(window);
    var cont = 1;
    
    // Each time the user scrolls
    win.scroll(function() {
        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            $('#loading').show();
            
            $('#posts').append(idHead(cont));
            $('#pagination').append(linkId(cont));
            for(var i=0;i<5;i++){
                $('#posts').append(randomPost());
            }
            $('#loading').hide();
            cont++;
        }
    });
});

function idHead(index){
    var post = '<h6 id="page' + index + '">' + index + '</h6>';
    
    return post;
}

function linkId(index){
    var post = '<a href="#page' + index + '">' + index + '</a>';
    
    return post;
}

// Generate a random post
function randomPost() {

    // Generate the post
    
    var post = '<div class="livro col-xs-offset-1 col-xs-10 col-sm-offset-1 col-sm-10 col-md-offset-1 col-md-5 linha"><div class="col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-8 col-md-offset-0 col-md-5 col-lg-4 capa"><img src="assets/img/livro/A.jpeg"></div><div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 info"><h2 class="hidden-xs hidden-sm">Título do livro</h2><h2 class="hidden-md hidden-lg" style="text-align: center;">Título do livro</h2><h5><span class="glyphicon glyphicon-time"></span> Postado por (autor), (mês) (dia), (ano).</h5><h5><span class="label label-primary">Tag</span> <span class="label label-primary">Tag</span> <span class="label label-primary">Tag</span></h5><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus massa, vestibulum eget felis ac, placerat tristique ligula. Ut non justo justo. Mauris malesuada purus eu ex varius vulputate. In a nibh quam. Morbi consequat, velit ut consectetur iaculis, augue lorem fringilla</p></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"><h4><small>RECOMENDAÇÕES/OBSERVAÇÕES</small></h4><p class="rating">18</p></div></div>';

    return post;
}