$(document).ready(function(){
  $('.city_label').on('click', function() {
    $('.city_label').children('.active').removeClass('active');
    $(this).children('.city').attr('class','city active');
    var city = $('.city_label').children('.active');
    var img;
    //console.log(city.html());
    $(".cities").fadeOut(800);
    switch (city.html()) {
      case "Новокузнецк":
        img = 1;
        break;
      case "Барнаул":
        img = 2;
        break;
      case "Омск":
        img = 3;
        break;
      case "Красноярск":
        img = 4;
        break;
      case "Новосибирск":
        img = 5;
        break;
    }
    $(".speackers").css("left","1500px");
    function nextBg() {
      $('.cities').css('background','url("../likebz/img/slide/'+img+'.jpg")');
      $(".speackers").css("left","0px");
    }
    setTimeout(nextBg,800);
    $(".cities").fadeIn(800);
  });
});

$(function () {
    var jqBar = $('.chanel_video');
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (jqBar.position().top - $(window).height()));
        numOne = $(".num_one").text();
        numTwo = $(".num_two").text();
        if (scrollEvent) {
          $({numberValue: numOne}).animate({numberValue: 845}, {
            duration: 2000,
            easing: 'linear',
            step: function() {
                $('.num_one').text(Math.ceil(this.numberValue));
            }
          });

          $({numberValue: numTwo}).animate({numberValue: 5748}, {
            duration: 2000,
            easing: 'linear',
            step: function() {
                $('.num_two').text(Math.ceil(this.numberValue));
            }
          });
        }
    });
});
