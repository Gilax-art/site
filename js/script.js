
$('.stap-2__info').fadeOut(0);
$('.stap-3__info').fadeOut(0);

var subtitle = true;
$('.container__menu p').on('click', function(){
        if (subtitle == true){
                $('.subtitle').addClass('Out');
                subtitle = false
        }
        else {
                $('.subtitle').removeClass('Out');
                subtitle = true
        };
});

var burger = true;
$('.burger').on('click',function(){
        if(burger == true){
                $('.burger').addClass('close');
                $('.menu').addClass('open');
                burger = false;
        }
        else{
                $('.burger').removeClass('close');
                $('.menu').removeClass('open');
                burger = true;   
        }
});

var subcurs = true;
$('.tit:nth-child(5)').on('click',function(){
        if(subcurs == true){
                $('.subcurs').slideDown(600);
                subcurs = false;
        }else{
                $('.subcurs').slideUp(600);
                subcurs = true;
        }
});

$('.container-1__text p:nth-child(3)').on('click', function(){
        window.open(this.href="https://www.google.com.ua/?hl=ru");
});

$('.txlink').on('click', function(){
        window.open(this.href="https://www.google.com.ua/?hl=ru");
});

$('.ibut').on('click', function(){
        window.open(this.href="https://www.google.com.ua/?hl=ru");
});

$('.container-3__contant .but').on('click', function(){
        window.open(this.href="https://www.google.com.ua/?hl=ru");
});

$('.container-5__link').on('click', function(){
        window.open(this.href="https://www.google.com.ua/?hl=ru");
});

$('.plink').on('click', function(){
        window.open(this.href="https://www.google.com.ua/?hl=ru");
});

$('.b-1').addClass('on');
$('.b-1').on('click',function(){
        $('.stap-1__info').slideDown(350);
        $('.stap-2__info').slideUp(350);
        $('.stap-3__info').slideUp(350);
        $('.b-1').addClass('on');
        $('.b-2').removeClass('on');
        $('.b-3').removeClass('on');
});

$('.b-2').on('click',function(){
        $('.stap-2__info').slideDown(350);
        $('.stap-1__info').slideUp(350);
        $('.stap-3__info').slideUp(350);
        $('.b-2').addClass('on');
        $('.b-1').removeClass('on');
        $('.b-3').removeClass('on');
});

$('.b-3').on('click',function(){
        $('.stap-3__info').slideDown(350);
        $('.stap-1__info').slideUp(350);
        $('.stap-2__info').slideUp(350);
        $('.b-3').addClass('on');
        $('.b-1').removeClass('on');
        $('.b-2').removeClass('on');
});

$('.slick-slider').slick();

var hover = true;
$('.column-2 p').on('hover',function(){
        if(hover == true){
                $('.column-2 p:nth-child(1)').addClass('on');
                hover = false;
        }else{
                $('.column-2 p:nth-child(1)').removeClass('on');
                hover = true;
        }
});

$('.column-3 p').on('hover',function(){
        if(hover == true){
                $('.column-3 p:nth-child(1)').addClass('on');
                hover = false;
        }else{
                $('.column-3 p:nth-child(1)').removeClass('on');
                hover = true;
        }
});

$('.sitename').on('click', function(){
        location.reload();
});

$('.subslink').on('click', function(){
        window.open(this.href="https://www.google.com.ua/?hl=ru");
});

$('.footlink').on('click', function(){
        window.open(this.href="https://www.google.com.ua/?hl=ru");
});

$('.inst').on('click', function(){
        window.open(this.href="https://www.instagram.com");
});

$('.ok').on('click', function(){
        window.open(this.href="https://ok.ru/?_erv=vwhxlyirbwpynedop");
});

$('.teleg').on('click', function(){
        window.open(this.href="https://web.telegram.org/#/login");
});

$('.whats').on('click', function(){
        window.open(this.href="https://www.whatsapp.com/?lang=ru");
});

$('.vk').on('click', function(){
        window.open(this.href="https://vk.com");
});

$('.tito').on('click', function(){
        window.open(this.href="https://www.tiktok.com/login?redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%2F%3Flang%3Dru&lang=ru-RU");
});

$('.number').on('click', function(){
        window.open(this.href="tel:84951183934");
});

$('.adres').on('click', function(){
        window.open(this.href="mailto:info@femidafors.ru");
});