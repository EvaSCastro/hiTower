$(document).ready(function () {
    $('#footer-main').append(footerGen());
});

function footerGen() {
    var footer = '<br><br><!--LINKS--><div class="container"><div class="row"><!--PRIMEIRA COLUNA--><div class="col-xs-offset-2 col-xs-8 col-sm-8 col-md-4"><p><img style="width: 150px; height: auto;" src="assets/img/logo/hiTowerBanner.png"></p><h5 class="mb-4 mt-3 font-weight-bold">© 2018 Copyright, hiTower™</h5></div><!--/.PRIMEIRA COLUNA--><!--SEGUNDA COLUNA--><div class="col-xs-offset-2 col-xs-8 col-sm-8 col-md-offset-0 col-md-4"><p><img style="width: 30px; margin-right: 5px;" src = "assets/img/geral/facebook.png">facebook.com/hiTower</p><p><img style="width: 30px; margin-right: 5px;" src = "assets/img/geral/instagram.png">@hiTower</p></div><!--/.SEGUNDA COLUNA--></div></div><!--/.LINKS--><br>';
    return footer;
}