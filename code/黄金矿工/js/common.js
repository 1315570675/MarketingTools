window.onload = function(){
setTimeout(()=>{
	$('.start').on('click', function () {
		if (dian == false) {
			return;
		}
		$('.start').addClass('started');
		setTimeout(function () {
			$('.start').removeClass('started');
		}, 300);
		$('.DB_guide').hide();
		dian = false;
		$('.persons').addClass('startWa');
		pause();
		var leftg = parseFloat($('.tongs').offset().left / 20);
		var topg = parseFloat($('.tongs').offset().top / 20);
		var sdeg = leftg / topg;
		if (sdeg < 0.730) {
			$('.line').animate({
				'height': '8.02rem'
			}, 1000);
			setTimeout(function () {
				$('.prize1').hide();
				$('.award').addClass('prize11');
			}, 1010);
			setTimeout(function () {
				$('.line').animate({
					'height': '3.02rem'
				}, 1000);
			}, 1020);
			setTimeout(function () {
				$('.award').removeClass('prize11');
				$('.prize1').show();
			}, 2030)
		} else if (sdeg > 0.730 && sdeg < 0.790) {
			$('.line').animate({
				'height': '13.82rem'
			}, 1000);
			setTimeout(function () {
				$('.prize4').hide();
				$('.award').addClass('prize44');
			}, 1010);
			setTimeout(function () {
				$('.line').animate({
					'height': '3.02rem'
				}, 1000);
			}, 1020);
			setTimeout(function () {
				$('.award').removeClass('prize44');
				$('.prize4').show();
			}, 2030)
		} else if (sdeg > 0.790 && sdeg < 0.8880) {
			$('.line').animate({
				'height': '8rem'
			}, 1000);
			setTimeout(function () {
				$('.prize2').hide();
				$('.award').addClass('prize22');
			}, 1010);
			setTimeout(function () {
				$('.line').animate({
					'height': '3.02rem'
				}, 1000);
			}, 1020);
			setTimeout(function () {
				$('.award').removeClass('prize22');
				$('.prize2').show();
			}, 2030)
		} else if (sdeg > 0.8880 && sdeg < 0.8893) {
			$('.line').animate({
				'height': '12.02rem'
			}, 1000);
			setTimeout(function () {
				$('.prize5').hide();
				$('.award').addClass('prize55');
			}, 1010);
			setTimeout(function () {
				$('.line').animate({
					'height': '3.02rem'
				}, 1000);
			}, 1020);
			setTimeout(function () {
				$('.award').removeClass('prize55');
				$('.prize5').show();
			}, 2030)
		}
		else if (sdeg > 0.8893 && sdeg < 0.8902) {
			$('.line').animate({
				'height': '15.02rem'
			}, 1000);
			setTimeout(function () {
				$('.prize6').hide();
				$('.award').addClass('prize66');
			}, 1010);
			setTimeout(function () {
				$('.line').animate({
					'height': '3.02rem'
				}, 1000);
			}, 1020);
			setTimeout(function () {
				$('.award').removeClass('prize66');
				$('.prize6').show();
			}, 2030)
		} else if (sdeg > 0.8902) {
			$('.line').animate({
				'height': '8.82rem'
			}, 1000);
			setTimeout(function () {
				$('.prize3').hide();
				$('.award').addClass('prize33');
			}, 1010);
			setTimeout(function () {
				$('.line').animate({
					'height': '3.02rem'
				}, 1000);
			}, 1020);
			setTimeout(function () {
				$('.award').removeClass('prize33');
				$('.prize3').show();
			}, 2030)
		}
		// 广告
		setTimeout(function () {
			$('.start').show();
			$('.DB_guide').show();
			dian = true;
			play();
			$('.persons').removeClass('startWa');
		}, 2030)
	})
},1000)

}

$('.personRightGo').animate({
	'right': '7.5rem'
}, 1000);
setTimeout(function () {
	$('.personRightGo').stop();
	$('.personRightGo').hide(100);
	$('.machine').addClass('persons');
//	$('.prizeZz').show();
	setTimeout(function () {
		$('.prizeZz').hide();
	}, 2000);
	$('.tongs').addClass('activity');
}, 1400);
var times = $('#countZa').text();

var hdgg = {
	times: times,
	timesEle: '#countZa',
	recordEle: '.jiang',
	name: '现金红包挖到手软',
	type: 42,
	rem: 20 / 375,
	entranceShow: false
};
$('.rule').on('click', function () {
	$('.alerty').show();
	$('.zhenotice').show();
})
$('body .moresay').on('click', function () {
	$(this).toggleClass('activeadv')
	$('.moresayp').toggle();
})
$('body .saclose').on('click', function () {
	$('.moresay').removeClass('activeadv');
	$('.moresayp').hide();
	$('.alerty').hide();
	$('.zhenotice').hide();
})
var dian = true;

//左上角宝箱
$('.leftPrize').click(function () {
	$('.prizeZz').show()
});
$('.closePrizeList').click(function () {
	$('.prizeZz').hide()
});


function closeBtn(res) {
	$('#dialog5').on('click', '.close-btn', function () {
		res.close();
		$('#dialog5').addClass('hidem');
		$('#dialog5').remove();
	})
}

//解决动画暂停问题
var container = document.querySelector('.tongs');

function pause() {
	var cTransform = getComputedStyle(container).transform;
	container.style.transform = cTransform;
	container.classList.remove('activity');
}

function play() {
	container.classList.add('activity');
}
