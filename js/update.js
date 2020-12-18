$('#btn-baogia').click(function () {
    $('html, body').animate({
        scrollTop: $('#baogia').offset().top
    }, 2000);
});
$('#btn-dichvu').click(function () {
    $('html, body').animate({
        scrollTop: $('#dichvu').offset().top
    }, 2000);
});
var typed2 = new Typed('#typed2', {
    strings: ['<h2>Vì Sao Nên Chọn Bảo Vệ Thanh Long</h2>'],
    typeSpeed: 20,
    backSpeed: 20,
    fadeOut: true,
    loop: true
});

var typed3 = new Typed('#typed3', {
    strings: ['<p style="font-size:20px">Với đội ngũ lãnh đạo dày dặn kinh nghiệm, chúng tôi tự tin là đơn vị cung cấp dịch vụ bảo vệ uy tín chất lượng cao được nhiều đối tác và khách hàng tin tưởng trong nhiều năm.</p>'],
    typeSpeed: 10,
    backSpeed: 10,
    fadeOut: true,
    loop: true
});