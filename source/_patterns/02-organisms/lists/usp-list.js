
$(function () {
    $('.section-usp-list').each(function(){
        $(this).find('.usp-icon').matchHeight();
        $(this).find('.usp-title').matchHeight();
        $(this).find('.usp-description').matchHeight();
    });
});