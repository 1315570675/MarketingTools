$(function () {
  var act = 0;
  var qianResult = ['平安签', '好运签', '幸福签'];
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4.5,
    spaceBetween: 10,
    freeMode: true
  });

  var hdgg = {
    times: 8,
    timesEle: '#countZa',
    recordEle: '.jiang',
    name: '抽签中大奖',
    type: 52,
    rem: 20 / 375,
    entranceShow: true,     //左上角
    gamecenterShow: true,   //右下角
    gamelistShow: true//次数用光大弹窗
  };

  $(document).ready(function () {
    var dian = true;
    //摇一摇触发
    var SHAKE_THRESHOLD = 3000;
    var last_update = 0;
    var x = y = z = last_x = last_y = last_z = 0;
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', deviceMotionHandler, false);
    }
    else {
      alert("本浏览器不支持摇一摇功能!");
    }

    function deviceMotionHandler(eventData) {
      var acceleration = eventData.accelerationIncludingGravity;

      var curTime = new Date().getTime();

      if ((curTime - last_update) > 100) {

        var diffTime = curTime - last_update;
        last_update = curTime;

        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;

        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;

        if (speed > SHAKE_THRESHOLD) {
          debugger;
          // alert("看到我就是摇了!");
          if (!dian) return;
          act = randomNum(1, 3);
			act = 2;
          $('.qianziBox').addClass('qianzi' + act);
          $('.hezi').addClass('hezi2');
          $('.yin1').addClass('yin2');
          setTimeout(function () {
            $('.hezi').removeClass('hezi2');
            $('.yin1').removeClass('yin2');
            $('.zheQian').show();
          }, 1000);
          setTimeout(function () {
            $('.zheQian').hide();
          }, 1800);
          $('.DB_guide').hide();
          dian = false;
          setTimeout(function () {
//            hdgg.win({
//              success: function (res) {
//                alertCommon(res.ad.imageUrl, res.ad.advIntro, act, res.ad.receiveText);
//                closeBtn(res)
//                closeGo(res)
//
//              }
//            });
			  $('.botGun').animate({'top': '18.5rem'}, 1000);
			  $('.red-bg').animate({'height': '17.2rem'}, 1000);
			  window.removeEventListener('devicemotion', deviceMotionHandler);
			  dian = true;
          }, 2000);
          setTimeout(function () {
            window.addEventListener('devicemotion', deviceMotionHandler, false)
          }, 3000)
        }
        last_x = x;
        last_y = y;
        last_z = z;
      }
    }

    // 点击触发
    $('.starta').on('click', function () {

      if (dian == false) {
        return;
      }
      act = randomNum(1, 3);
		act = 2;
      $('.qianziBox').addClass('qianzi' + act);
      $('.hezi').addClass('hezi2');
      $('.yin1').addClass('yin2');
      setTimeout(function () {
        $('.hezi').removeClass('hezi2');
        $('.yin1').removeClass('yin2');
        $('.zheQian').show();
      }, 1000);
      setTimeout(function () {
        $('.zheQian').hide();
      }, 1800);
      $('.DB_guide').hide();
      dian = false;
      setTimeout(function () {
		  $('.botGun').animate({'top': '18.5rem'}, 1000);
		  $('.red-bg').animate({'height': '17.2rem'}, 1000);
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

var botArr = [
  {'txt': 'iPhone X', 'img': '3.png'},
  {'txt': '米家（MIJIA）扫地机器人', 'img': './images/4.png'},
  {'txt': '九阳（Joyoung）豆浆机', 'img': './images/5.png'},
  {'txt': '九阳（Joyoung）榨汁机', 'img': './images/6.png'},
  {'txt': '幸运福袋', 'img': './images/6.png'}
]
var prizeDetail = [
  {
    '商品名称：': 'AppleiPhone X',
    '品牌：': 'Apple',
    '型号：': 'iPhone X',
    '机身颜色：': '银色／深空灰色',
    '商品毛重：': '435.00g',
    '机身内存：': '64GB'
  },
  {
    '商品名称：': '米家（MIJIA）扫地机器人',
    '商品编号：': '3304295',
    '商品毛重：': '6.6kg',
    '续航时间：': '121分钟-180分钟',
    '清扫路线：': '规划式',
    '产品特色：': 'APP操控，自动回充',
    '类型：': '扫地机器人',
  },
  {
    '商品名称：': '九阳DJ13B-D08EC',
    '商品编号：': '416905',
    '商品毛重：': '3.5kg',
    '适用人数：': '3-4人（1.3L）',
    '加热方式：': '底盘加热',
    '主杯容量：': '400-600ml',
    '功能：': '免滤',
    '颜色：': '白色'
  },
  {
    '商品名称：': '九阳L6-C5',
    '型号：': 'L6-C5',
    '产品尺寸（mm）：': '224*164*238',
    '产品净重（kg）：': '1.9',
    '适用人数：': '3-4人（1.3L）',
    '主杯容量：': '400-600ml',
    '果渣储藏罐容量：': '500-1000ml',
    '颜色：': '银色',
    '功能：': '榨汁'
  },
  {
    '商品名称：': '幸运福袋'
  }
];
$('.swiper-slide div').click(function () {
  var aHtml = '';
  var poupIndex = $(this).parent().index();
  $('.changeName').text(botArr[poupIndex].txt);
  $('.headBox img').attr('src', botArr[poupIndex].img);
  for (var ikey in prizeDetail[poupIndex]) {
    aHtml += '<span class="goodsName">' + ikey + '<span class="changeName2">' + prizeDetail[poupIndex][ikey] + '</span></span>'
  }
  $('.goodsDetail').after(aHtml);
  $('#everyDetail,.closeDetail').show(10);
})
$('.closeDetail').click(function () {
  $('#everyDetail,.closeDetail').hide(10);
  $('.goodsDetail').nextAll().remove();
})
