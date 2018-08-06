
$(function () {
  //localStorage.clear();

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4.5,
    spaceBetween: 10,
    freeMode: true
  });
  var hdgg = {
    times: 8,
    timesEle: '#countZa',
    recordEle: '.jiang',
    name: '摇色子',
    type: 26,
    rem: 20 / 375
  };
  var win = (parseInt($(".couten").css("width"))) - 60;
  var ads = true;
  var num = 0;
  var inter = true;

  var dian = true;
  $(document).ready(function () {
    var act = 2;
    $('.yezipiao1').animate({
          right: '2rem',
          top: '2rem'
        },
        4000);
    $('.yezipiao2').animate({
          left: '1.4rem',
          top: '5.5rem'
        },
        4000);
    $('.yezipiao3').animate({
          left: '2.4rem',
          top: '6.5rem'
        },
        4000);
    $('.yezipiao4').animate({
          left: '4rem',
          top: '7.6rem'
        },
        4000);
    $('.yezipiao5').animate({
          right: '3.75rem',
          top: '15.8rem'
        },
        4000);
    $('.yezipiao6').animate({
          right: '1.5rem',
          top: '19.5rem'
        },
        4000);
    $('.yezipiao7').animate({
          right: '3.5rem',
          top: '23.5rem'
        },
        4000);
    $('.yezipiao8').animate({
          left: '1.5rem',
          top: '21.5rem'
        },
        4000);
    $('.yanzileft').animate({
          left: '1.7rem',
          top: '17.25rem'
        },
        2000);
    $('.yanziright').animate({
          right: '1.2rem',
          top: '6.15rem'
        },
        1500);

    $('.starta,.saizi').on('click', function () {
      act = randomNum(1, 5);
      act = 1;
      console.log(act);
      $('.DB_guide').hide();
      $('.starta').addClass('startb');
      $('#saizi').removeClass().addClass('moving').addClass('saizi');
      $('.saizi').removeClass('saizihuang').addClass('moving');
      setTimeout(function () {
        $('.saizi').removeClass('moving').addClass('act' + act);
      }, 1500)
      dian = false;
      setTimeout(function () {
        $('.starta').removeClass('startb');
        dian = true;
      }, 2000)

    })
    $('.rule').on('click', function () {
      $('.alerty').show();
      $('.zhenotice').show();
    })
    $('body .moresay').on('click', function () {
      $(this).toggleClass('activeadv')
      $('.moresayp').toggle();
    })
    $('.alerty').on('click', '.saclose', function () {
      $('.moresay').removeClass('activeadv');
      $('.moresayp').hide();
      $('.alerty').hide();
      $('.zhenotice').hide();
    })


    window.styleReset = function () {
      $('#dialog5').addClass('hidem');
      $('#dialog5').remove();
      $('.saizi').addClass('saizihuang').removeClass('act' + act);
      $('.DB_guide').show();
    }



  })

})

function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

