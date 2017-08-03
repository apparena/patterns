jQuery(function () {
    jQuery('.section-usp-list').each(function () {
        jQuery(this).find('.usp-icon').matchHeight();
        jQuery(this).find('.usp-title').matchHeight();
        jQuery(this).find('.usp-description').matchHeight();
    });
});