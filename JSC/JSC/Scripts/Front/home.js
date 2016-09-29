/*Những dự án tiêu biểu*/
$(function () {
    $("#next-to-nhungduantieubieu").click(function () {                                                             /*Click nút xuống nội dung chia sẻ*/
        $('html, body').animate({
            scrollTop: $('#duantieubieu').offset().top
        }, 500);
    });
});

$(".hover-project").hover(function () {
    $(this).find(".box-info").slideToggle('fast');
});



/*JS cho another-service (Dịch vụ khác)*/
$(function () {
    var swap = true;
    $('.another-close-button').click(function () {
        if (swap === true) {
            $('.another-close-button img').attr("src", "../images/Homepage/another-service-close-icon.png");         /*Thay đổi nút xem thêm -> đóng*/
            $('.another-service .content .icon .another-other').slideDown("slow");                                   /*Mở mục xem chi tiết các dịch vụ*/
        } else if (swap === false) {
            $('.another-close-button img').attr("src", "../images/Homepage/another-service-more-icon.png");          /*Thay đổi nút đóng -> xem thêm*/
            $('.another-service .content .icon .another-other').slideUp("slow");                                     /*Mở mục xem chi tiết các dịch vụ*/
        }
        swap = !swap;
    });
});

/*JS cho Nội dung chia sẻ*/
$(function () {
    $("#next-to-noidungchiase").click(function () {                                                                 /*Click nút xuống nội dung chia sẻ*/
        $('html, body').animate({
            scrollTop: $('#noidungchiase').offset().top
        }, 500);
    });
});

$('.colum-content').hover(
        function () {
            $(this).find(".colum-img").find("img").css("transform", "scale(1.0)");                          /*Hover ảnh bài viết*/
            $(this).find(".hover").css('transform', 'rotate(-6deg)');                                       /*Hover nút xem chi tiết bài viết*/
        },
        function () {
            $(this).find(".colum-img").find("img").css("transform", "scale(1.1)");                          /*Hover ảnh bài viết*/
            $(this).find(".hover").css('transform', 'rotate(0deg)');                                        /*Hover nút xem chi tiết bài viết*/
        }
);

