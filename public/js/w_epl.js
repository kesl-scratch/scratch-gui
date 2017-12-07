
window.$(document).ready(function($){
    /*셀렉트박스*/
    $('.drop_wrap').bind({
        click : function(){
            $('.drop_wrap').not(this).find('ul').slideUp();
            $('.drop_wrap').not(this).removeClass('active');
            $(this).find('ul').slideToggle();
            $(this).find('.drop_down').toggleClass('active');
        }
    });
    $('.drop_wrap').find('li').bind({
        click : function(){
            $(this).find('ul').slideUp();
            $(this).parent().parent().find('.default').html($(this).text());
        }
    });

    /*메뉴 active*/
    $('.menu > li').click(function(){
        $('.menu > li').removeClass('active');
        $(this).toggleClass('active');
    });

    /*메뉴 리스트 slideDown*/
    $('.file').click(function(){
        $(this).toggleClass('active');
        $('.depth').toggleClass('active');
    });

    /*메뉴 리스트 active*/
    $('.menu .depth li').click(function(){
        $('.menu .depth li').removeClass('active');
        $(this).toggleClass('active');
    });
});

/*팝업 오픈*/
function bpop_open(popname) {
    $('.' + popname).bPopup({

    });
}
