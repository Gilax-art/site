
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