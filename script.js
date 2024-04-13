$(document).ready(function(){
    $('.btn-close').hide();
    
    $('.navbar-toggler-icon').click(function(){
        $(this).hide();
        $('.navbar-toggler').hide();
        $('.btn-close').show();
    });

    $('.navbar-toggler').click(function(){
        $(this).hide();
        $('.navbar-toggler').hide();
        $('.btn-close').show();
    });

    $('.btn-close').click(function(){
        $('.navbar-toggler-icon').show();
        $('.navbar-toggler').show();
        $(this).hide();
        $('.navbar-collapse').collapse('hide');
    });

    
    $('.nav-item.dropdown').hover(function() {
        if ($(window).width() > 768) { 
            $(this).find('.dropdown-menu').addClass('show');
        }
    }, function() {
        if ($(window).width() > 768) {
            $(this).find('.dropdown-menu').removeClass('show');
        }
    });

    
    $('.nav-link[href="capabilities.html"]').click(function(event){
        if ($(window).width() <= 991) {
            var currentPage = window.location.pathname.split("/").pop();
            if (currentPage !== "capabilities.html") {
                event.preventDefault();
                window.location.href = "capabilities.html";
                localStorage.setItem('dropdownOpen', 'true');
            }
        } else {
            event.preventDefault();
            window.location.href = "capabilities.html";
            localStorage.setItem('dropdownOpen', 'true');
        }
    });

});

function redirectToPage(url) {
    window.location.href = url;
}
