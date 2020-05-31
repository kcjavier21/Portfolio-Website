$(document).on('click', '#nav ul li a', function(){
    $(this).addClass('highlight').siblings().removeClass('highlight')
})