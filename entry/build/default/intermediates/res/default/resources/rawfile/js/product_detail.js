let productList = [
  {
    'id': 1,
    'name': 'HW nove9 新品手机【官方标配】8+128G全网通',
    'img': 'imgs/ic_1.png',
    'price': 4488,
    'details': [
      '品牌：HW | 型号：nove9 | 上市时间：2024年',
      '屏幕尺寸：6.7英寸 OLED 曲面屏，支持120Hz高刷',
      '处理器：骁龙8 Gen2 八核 3.2GHz',
      '后置摄像头：5000万像素主摄 + 1300万超广角 + 1200万长焦',
      '电池容量：4800mAh，支持66W超级快充'
    ]
  },
  {
    'id': 2,
    'name': 'XX设备  新品优惠！新品优惠！新品优惠！',
    'img': 'imgs/ic_2.png',
    'price': 4488,
    'details': [
      '品牌：XX | 型号：Pro Max | 上市时间：2024年',
      '屏幕尺寸：6.8英寸 LCD 直屏，支持90Hz刷新率',
      '处理器：天玑9200 八核 3.05GHz',
      '后置摄像头：6400万像素主摄 + 800万超广角 + 200万微距',
      '电池容量：5000mAh，支持80W超级快充'
    ]
  },
  {
    'id': 3,
    'name': 'HW nove9 新品手机【官方标配】8+128G全网通',
    'img': 'imgs/ic_3.png',
    'price': 4488,
    'details': [
      '品牌：HW | 型号：nove9 | 上市时间：2024年',
      '屏幕尺寸：6.7英寸 OLED 曲面屏，支持120Hz高刷',
      '处理器：骁龙8 Gen2 八核 3.2GHz',
      '后置摄像头：5000万像素主摄 + 1300万超广角 + 1200万长焦',
      '电池容量：4800mAh，支持66W超级快充'
    ]
  },
  {
    'id': 4,
    'name': 'XX设备  新品优惠！新品优惠！新品优惠！',
    'img': 'imgs/ic_4.png',
    'price': 4488,
    'details': [
      '品牌：XX | 型号：Pro Max | 上市时间：2024年',
      '屏幕尺寸：6.8英寸 LCD 直屏，支持90Hz刷新率',
      '处理器：天玑9200 八核 3.05GHz',
      '后置摄像头：6400万像素主摄 + 800万超广角 + 200万微距',
      '电池容量：5000mAh，支持80W超级快充'
    ]
  },
  {
    'id': 5,
    'name': 'HW nove9 新品手机【官方标配】8+128G全网通',
    'img': 'imgs/ic_5.png',
    'price': 4488,
    'details': [
      '品牌：HW | 型号：nove9 | 上市时间：2024年',
      '屏幕尺寸：6.7英寸 OLED 曲面屏，支持120Hz高刷',
      '处理器：骁龙8 Gen2 八核 3.2GHz',
      '后置摄像头：5000万像素主摄 + 1300万超广角 + 1200万长焦',
      '电池容量：4800mAh，支持66W超级快充'
    ]
  },
  {
    'id': 6,
    'name': 'HW nove9 新品手机【官方标配】8+128G全网通',
    'img': 'imgs/ic_6.png',
    'price': 4488,
    'details': [
      '品牌：HW | 型号：nove9 | 上市时间：2024年',
      '屏幕尺寸：6.7英寸 OLED 曲面屏，支持120Hz高刷',
      '处理器：骁龙8 Gen2 八核 3.2GHz',
      '后置摄像头：5000万像素主摄 + 1300万超广角 + 1200万长焦',
      '电池容量：4800mAh，支持66W超级快充'
    ]
  }
];

let urlSearchParams = new URLSearchParams(window.location.search);
let productIndex = urlSearchParams.get('index');
let productDetail = productList[productIndex];
productDetail.sku = '冰晶蓝，8GB+128GB，4G网网通，官电视剧还是快点好4G网网通';
document.getElementById('price').innerHTML = '<span>¥ </span>' + productDetail.price;
document.getElementById('product-name').innerHTML = productDetail.name;

// 比货模式：显示第二件商品价格和标题
let compareIdx = parseInt(urlSearchParams.get('compareIdx'));
let compareProduct = null;
let isCompareMode = !isNaN(compareIdx) && compareIdx >= 0 && compareIdx < productList.length && compareIdx != productIndex;

// 构建轮播 slides
let swiperStr = '';
if (isCompareMode) {
  compareProduct = productList[compareIdx];
  document.getElementById('compare-price').innerHTML = '¥' + compareProduct.price;
  document.getElementById('compare-price').style.display = '';
  document.getElementById('compare-name').innerHTML = compareProduct.name;
  document.getElementById('compare-name').style.display = '';

  // 底部栏改为选一/选二
  document.getElementById('menu').innerHTML =
    '<div style="flex:1"><button class="btn-compare btn-choose-one" onclick="chooseOne()">选一</button></div>' +
    '<div style="flex:1"><button class="btn-compare btn-choose-two" onclick="chooseTwo()">选二</button></div>';

  // 先放商品一的图片，再放商品二的图片
  swiperStr += '<div class="slide showing" data-label="一"><img src="' + productDetail.img + '" /></div>';
  for (let i = 0; i < 3; i++) {
    swiperStr += '<div class="slide" data-label="一"><img src="imgs/ic_' + ((productDetail.id + i) % 6 + 1) + '.png" /></div>';
  }
  swiperStr += '<div class="slide" data-label="二"><img src="' + compareProduct.img + '" /></div>';
  for (let i = 0; i < 3; i++) {
    swiperStr += '<div class="slide" data-label="二"><img src="imgs/ic_' + ((compareProduct.id + i) % 6 + 1) + '.png" /></div>';
  }
} else {
  swiperStr += '<div class="slide showing"><img src="' + productDetail.img + '" /></div>';
  for (let i = 0; i < 3; i++) {
    swiperStr += '<div class="slide"><img src="imgs/ic_' + ((productDetail.id + i) % 6 + 1) + '.png" /></div>';
  }
}
let totalSlides = isCompareMode ? 8 : 4;
swiperStr += '<div id="dot">1/' + totalSlides + '</div>';
document.getElementById('swiper').innerHTML = swiperStr;

// 构建商品详情（比货模式下交替插入第二件商品对应段落）
let detailHtml = '';
let mainDetails = productDetail.details || [];
let cmpDetails = compareProduct ? (compareProduct.details || []) : [];
let maxLen = Math.max(mainDetails.length, cmpDetails.length);
for (let i = 0; i < maxLen; i++) {
  if (i < mainDetails.length) {
    detailHtml += '<p class="detail-p">' + mainDetails[i] + '</p>';
  }
  if (cmpDetails.length > 0 && i < cmpDetails.length) {
    detailHtml += '<p class="detail-p compare-detail">' + cmpDetails[i] + '</p>';
  }
}
document.getElementById('product-info').innerHTML = detailHtml;

let currentIndex = 0;
let slides = document.querySelectorAll('#swiper .slide');

function showNext() {
  var currentSlide = document.querySelector('#swiper .slide.showing');
  if (currentSlide) {
    currentSlide.classList.remove('showing');
    currentIndex += 1;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    var dot = document.querySelector('#dot');
    dot.innerHTML = (currentIndex + 1) + '/' + slides.length;
    slides[currentIndex].classList.add('showing');
  } else {
    slides[0].classList.add('showing');
  }
}

var slideInterval = setInterval(showNext, 2000);

// 触摸滑动切换
var touchStartX = 0;
var touchStartY = 0;

document.getElementById('slider').addEventListener('touchstart', function (e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  clearInterval(slideInterval);
}, { passive: true });

document.getElementById('slider').addEventListener('touchend', function (e) {
  var deltaX = e.changedTouches[0].clientX - touchStartX;
  var deltaY = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(deltaX) > 30 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) {
      showNext();
    } else {
      showPrev();
    }
  }
  slideInterval = setInterval(showNext, 2000);
});

function showPrev() {
  var currentSlide = document.querySelector('#swiper .slide.showing');
  if (currentSlide) {
    currentSlide.classList.remove('showing');
    currentIndex -= 1;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    var dot = document.querySelector('#dot');
    dot.innerHTML = (currentIndex + 1) + '/' + slides.length;
    slides[currentIndex].classList.add('showing');
  }
}

function orderConfirm() {
  arkTSFunObj.jumpOrderConfirm(JSON.stringify(productDetail));
}

function chooseOne() {
  arkTSFunObj.jumpOrderConfirm(JSON.stringify(productDetail));
}

function chooseTwo() {
  if (compareProduct) {
    arkTSFunObj.jumpOrderConfirm(JSON.stringify(compareProduct));
  }
}
