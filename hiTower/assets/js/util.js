
//FUNÇÕES RELACIONADAS AO MENU LATERAL
function openNav() {
    document.getElementById("sidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function setActiveDiv(el) {
    $(".btn-pref .btn").removeClass("btn-a");
    $(".btn-pref .btn").addClass("btn-b");
    /*$(".btn-pref .btn").prop("disabled",false);*/
    var element = $(el).closest('.btn');
    element.toggleClass("btn-a");
    element.toggleClass("btn-b");
    /*element.attr("disabled",true);*/
}

//JQUERY
$(document).ready(function () {
    //FUNÇÃO PARA MUDAR COR DA CAIXA COM NÍVEL
    $("#levelPerfil").each(function(){
        var idNum = $(this).find(".levelPerfilNum").text();

        if(idNum.length >= 3){
            var lvl = idNum.charAt(1);                            
        }
        else{
            var lvl = idNum.charAt(0);
        }

        switch(lvl){
            case '1':
                $(this).addClass("level1");
                break;
            case '2':
                $(this).addClass("level2");
                break;
            case '3':
                $(this).addClass("level3");
                break;
            case '4':
                $(this).addClass("level4");
                break;
            case '5': 
                $(this).addClass("leval5");
                break;
            case '6':
                $(this).addClass("level6");
                break;
            case '7':
                $(this).addClass("level7");
                break;
            case '8':
                $(this).addClass("level8");
                break;
            case '9':
                $(this).addClass("level9");
                break;
        }
    });
    
    //CLASSIFICAÇÃO INDICATIVA
    $(".rating").each(function(){
		rating($(this));
	});
    
    //CONVERSÃO DE VALORES
    $("#segNum").each(function(){
        var aux = $(this);
        aux.text(converter(9300000));
    });
    $("#pubNum").each(function(){
        var aux = $(this);
        aux.text(converter(9233));
    });
});

function rating(obj){
        switch(obj.text()){
            case 'L':
                obj.addClass("rL");
                break;
            case '10':
                obj.addClass("r10");
                break;
            case '12':
                obj.addClass("r12");
                break;
            case '14': 
                obj.addClass("r14");
                break;
            case '16':
                obj.addClass("r16");
                break;
            case '18':
                obj.addClass("r18");
                break;
        }
    }

function converter(num){
    var numA,numB,tx;
    
    if(num < 1000){
        tx = num;
    }
    else if(num < 1000000){
        numA = parseInt(num/1000);
        numB = parseInt((num%1000)/100);
        tx = numA + '.' + numB + 'k';
    }
    else if(num < 1000000000){
        numA = parseInt(num/1000000);
        numB = parseInt((num%1000000)/100000);
        tx = numA + '.' + numB + 'm';
    }
    else{
        numA = parseInt(num/1000000000);
        numB = parseInt((num%1000000000)/100000000);
        tx = numA + '.' + numB + 'b';
    }
    return tx;
}