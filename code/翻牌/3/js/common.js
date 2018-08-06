var ia = 0;
var site = 0;
var site1 = 0;
$(function () {
	var hdgg = {
		times: 8,
		timesEle: '#countZa',
		recordEle: '.jiang',
		name: '高温福利翻千元红包',
		type: 61,
		rem: 20 / 375,
		entranceShow: true,     //左上角
		gamecenterShow: false,   //右下角
		gamelistShow: true    //次数用光大弹窗
	};

	var inter = true;
	$(function () {
		setTimeout(function () {
			$('.kong').addClass('active1');
		}, 510)

		$('.banner').find('div').eq(4).removeClass('rotate4').removeClass('paibgmImg');
		$('.paibgm').show();
		$('.banner').find('div').addClass('init');
		site = 0;
		site1 = 0;
		inter = true;
		$('.kong').hide();

		douPai();

		setInterval(function () {
			if (!inter)
			{
				return;
			}
			$('.banner').find('div').eq(site).removeClass('init');
			site++;
		}, 300)

		function douPai()
		{
			if (!inter)
			{
				$('.banner').find('div').removeClass('active');
				return;
			}
			if (!$($('.banner').find('div')[8]).hasClass('init'))
			{
				$('.banner').find('.paibgm').eq(site1).addClass('active').siblings('.paibgm').removeClass('active');
				site1++;
				if (site1 === $('.paibgm').length)
				{
					site1 = 0;
				}
			}
			setTimeout(douPai, 1000)
		}

		$(document).on('click', '.close-btn', function () {
			window.styleReset();
		})
		window.styleReset = function () {
			site1 = 0;
			inter = true;
			douPai();
		}
		$('.banner').on('click', 'div', function () {
			if (!$('.banner').find('div').hasClass('init'))
			{

				$(this).removeClass('paibgm').hide();
				// site1--;
				inter = false;
				$('.zhenotice').show();
				$('body').append('<img class="biaode" src="./images/4.png"/>');
				var interbal = setInterval('gaibian()', 100);
				setTimeout(function () {
					clearInterval(interbal);
					$(".biaode").removeClass("zhuan_left").removeClass("zhuan_right");
					$(".biaode").addClass('zhuansi')
				}, 500)
				setTimeout(function () {
					$(".biaode").remove();
					$('.zhenotice').hide();
				}, 800)
			}
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

function gaibian()
{
	if (ia == 0)
	{
		ia = 1;
		$(".biaode").removeClass("zhuan_left");
		$(".biaode").addClass("zhuan_right");
	}
	else
	{
		ia = 0;
		$(".biaode").addClass("zhuan_left");
		$(".biaode").removeClass("zhuan_right");
	}
}