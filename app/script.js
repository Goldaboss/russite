'use strict';

$(document).ready(function () {
    $('.js-btn-start').on('click', function () {
        let self = this;
        setTimeout(function () {
            $(self).parent().remove();
        }, 5)
    })
});