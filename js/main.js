//============Scroll Top======================
$(document).ready(function () {

    $('.top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    });


    $('.top').hide();

    $(window).scroll(function () {
        var topButton = $(this).scrollTop();

        if (topButton < 400) {
            $('.top').fadeOut();
        } else {
            $('.top').fadeIn();
        }
    });

});

//owl-carousel==========================


$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})



//Click jQuery==============

$(document).ready(function () {

    $('.cart').click(function () {
        $('.shoppingCart').show(300);
    });
    $('.cart').click(function () {
        $('.cart').hide();
    });
    $('.shopping-top').click(function () {
        $('.shoppingCart').hide(300);
    });
    $('.shopping-top').click(function () {
        $('.cart').show();
    });
    $('.add-to-cart').click(function () {
        $('.shopping-bg-img').hide(300);
    });

    $('.add-to-cart').click(function () {
        $('.shopping-cart-table').show();
    });


    $('.add-to-cart').click(function () {
        $(function () {
            toastr.success("Successfully Added", "Product");
        });

        toastr.options = {
            "positionClass": "toast-bottom-right",
            "timeOut": "3000",
        }
    });
    
    
     $('.add-cart').click(function () {
        $(function () {
            toastr.success("Successfully Added", "Product");
        });

        toastr.options = {
            "positionClass": "toast-bottom-right",
            "timeOut": "3000",
        }
    });



});



//============Fixed Menu====================== 

$(document).ready(function () {
    $(window).scroll(function () {
        var menuFixed = $(this).scrollTop();
        if (menuFixed > 40) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    })
})



$('.mainMenu li a').click(function (e) {
    e.preventDefault();

    var target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});



//Print button================

function onClickPrint() {
    window.print()
}





