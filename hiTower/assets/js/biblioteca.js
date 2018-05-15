$(document).ready(function () {
    var win = $(window);
    var cont = 1;
    var contLivro = 1;
    var contRow = 1;
    var rowEnd = '</div></div>';
    
    $(function(){
        $('#loading').show();
            
        $('#biblioteca').append(idHead(cont));
        $('#dropup-page').append(linkId(cont));
		
        for(var i=0;i<5;i++){
            var rowIni = '<div class="row livro"><div class="col-xs-offset-1 col-xs-10" id=row' + contRow + '>';
            $('#biblioteca').append(rowIni);
            for(var j=0;j<4;j++){
                $('#row' + contRow).append(livro(contLivro));
                contLivro++;
            }
            $('#biblioteca').append(rowEnd);
            contRow++;
        }
		$(".rating").each(function(){
			rating($(this));
		});
		
        $('#loading').hide();
        cont++;
    });
    
    // Each time the user scrolls
    win.scroll(function() {
        // End of the document reached?
        if ($(document).height() - win.height() == win.scrollTop()) {
            $('#loading').show();
            
            $('#biblioteca').append(idHead(cont));
            $('#dropup-page').append(linkId(cont));
            
            for(var i=0;i<5;i++){
                var rowIni = '<div class="row livro"><div class="col-xs-offset-1 col-xs-10" id=row' + contRow + '>';
                $('#biblioteca').append(rowIni);
                for(var j=0;j<4;j++){
                    $('#row' + contRow).append(livro(contLivro));
                    contLivro++;
                }
                $('#biblioteca').append(rowEnd);
                contRow++;
            }
            $(".rating").each(function(){
                rating($(this));
            });
			
            $('#loading').hide();
            cont++;
        }
    });
});

function idHead(index){
    var post = '<div id="page' + index + '" class="col-xs-12 col"><div class="col-xs-5 col"><hr></div><div class="col-xs-2 col"><div class="col-xs-5 col"><hr></div><div class="col-xs-2 page-num">' + index + '</div><div class="col-xs-5 col"><hr></div></div><div class="col-xs-5 col"><hr></div></div>'
	
    return post;
}

function linkId(index){
    var post = '<a class="dropdown-item col-xs-12" href="#page' + index + '">' + index + '</a>';
    return post;
}

function livro(index) {
    var post = '<div class="card-livro col-xs-3 capa" id="livro'+index+'"> <img src="assets/img/livro/A.jpeg"> <div class="card-text"> <h3 data-toggle="modal" data-target="#modalLivro'+index+'">Título do livro '+index+'</h3> <h5>Por: Autor</h5> <div class="card-info-num"> <div class="col-xs-4 col"> <span class="glyphicon glyphicon-star"></span> 14.1k </div> <div class="col-xs-4 col"> <span class="glyphicon glyphicon-eye-open"></span> 14.1k </div> <div class="col-xs-4 col"> <span class="glyphicon glyphicon-heart"></span> 14.1k </div> </div> </div> <!--MODAL--> <div class="modal fade" id="modalLivro'+index+'" tabindex="-1" role="dialog" aria-labelledby="livro'+index+'" aria-hidden="true"> <div class="livro-modal"> <div class="col-xs-offset-2 col-xs-8 col-sm-offset-2 col-sm-8 col-md-offset-0 col-md-5 col-lg-4 capa col"> <img src="assets/img/livro/A.jpeg"> </div> <div class="col-xs-12 col-sm-12 col-md-7 col-lg-8 info"> <h2 class="hidden-xs hidden-sm">Título do livro '+index+'</h2> <h2 class="hidden-md hidden-lg" style="text-align: center;">Título do livro '+index+'</h2> <h5><span class="glyphicon glyphicon-time"></span> Postado por (autor), (mês) (dia), (ano).</h5> <h5> <span class="label label-primary">Tag</span> <span class="label label-primary">Tag</span> <span class="label label-primary">Tag</span> </h5> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus massa, vestibulum eget felis ac, placerat tristique ligula. Ut non justo justo. Mauris malesuada purus eu ex varius vulputate. In a nibh quam. Morbi consequat, velit ut consectetur iaculis, augue lorem fringillaLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus massa, vestibulum eget felis ac, placerat tristique ligula. Ut non justo justo. Mauris malesuada purus eu ex varius vulputate. In a nibh quam. Morbi consequat, velit ut consectetur iaculis, augue lorem fringilla</p> </div> <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12"> <h4><small>RECOMENDAÇÕES/OBSERVAÇÕES</small></h4> <p class="rating">18</p> </div> </div> </div> <!--./MODAL--> </div>'
    
    return post;
}