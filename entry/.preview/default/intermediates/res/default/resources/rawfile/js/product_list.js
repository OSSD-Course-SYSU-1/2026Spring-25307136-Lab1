let productList = [
  {
    'id': 1,
    'name': 'HW nove9 新品手机【官方标配】8+128G全网通',
    'img': 'imgs/ic_1.png',
    'price': 4488
  },
  {
    'id': 2,
    'name': 'XX设备  新品优惠！新品优惠！新品优惠！',
    'img': 'imgs/ic_2.png',
    'price': 4488
  },
  {
    'id': 3,
    'name': 'HW nove9 新品手机【官方标配】8+128G全网通',
    'img': 'imgs/ic_3.png',
    'price': 4488
  },
  {
    'id': 4,
    'name': 'XX设备  新品优惠！新品优惠！新品优惠！',
    'img': 'imgs/ic_4.png',
    'price': 4488
  },
  {
    'id': 5,
    'name': 'HW nove9 新品手机【官方标配】8+128G全网通',
    'img': 'imgs/ic_5.png',
    'price': 4488
  },
  {
    'id': 6,
    'name': 'HW nove9 新品手机【官方标配】8+128G全网通',
    'img': 'imgs/ic_6.png',
    'price': 4488
  }
];

function addDocument() {
  let list = '';
  for (let i = 0; i < productList.length; i++) {
    list += `<li onclick='jumpDetail(${i})'>`;
    list += `<img alt='' src='${productList[i].img}' />`;
    list += '<div>';
    list += `<p>${productList[i].name}</p>`;
    list += `<span><span>¥</span> ${productList[i].price}</span>`;
    list += '</div>';
    list += '</li>';

    let tmp = document.getElementById('productList');
    tmp.innerHTML = list; // 添加到div里
  }
}

addDocument();

function jumpDetail(index) {
  window.location.href = 'product_detail.html?index=' + index;
}

// ========== 比货模式 ==========
var compareModeEnabled = false;
var selectedCompareItems = [];

function enableCompareMode() {
  if (compareModeEnabled) return;
  compareModeEnabled = true;
  let lis = document.querySelectorAll('#productList li');
  for (let i = 0; i < lis.length; i++) {
    let checkbox = document.createElement('div');
    checkbox.className = 'compare-checkbox';
    checkbox.setAttribute('data-index', i);
    lis[i].insertBefore(checkbox, lis[i].firstChild);
    // 比货模式下禁用跳转详情
    lis[i].removeAttribute('onclick');
    // 点击整个商品区域来勾选/取消
    lis[i].onclick = function() {
      let cb = this.querySelector('.compare-checkbox');
      let idx = parseInt(cb.getAttribute('data-index'));
      // 反选：直接取消勾选
      if (cb.classList.contains('checked')) {
        cb.classList.remove('checked');
        let pos = selectedCompareItems.indexOf(idx);
        if (pos !== -1) {
          selectedCompareItems.splice(pos, 1);
        }
        return;
      }
      // 已达上限，阻止勾选
      if (selectedCompareItems.length >= 2) {
        if (typeof arkTSFunObj !== 'undefined' && arkTSFunObj.showToast) {
          arkTSFunObj.showToast('只能选两件哦');
        }
        return;
      }
      // 勾选
      cb.classList.add('checked');
      if (selectedCompareItems.indexOf(idx) === -1) {
        selectedCompareItems.push(idx);
      }
    };
  }
}

function disableCompareMode() {
  compareModeEnabled = false;
  selectedCompareItems = [];
  let checkboxes = document.querySelectorAll('.compare-checkbox');
  for (let cb of checkboxes) {
    cb.remove();
  }
  // 恢复原有点击跳转
  let lis = document.querySelectorAll('#productList li');
  for (let i = 0; i < lis.length; i++) {
    lis[i].setAttribute('onclick', `jumpDetail(${i})`);
  }
}

function confirmCompare() {
  if (selectedCompareItems.length === 0) return;
  let firstIdx = selectedCompareItems[0];
  let secondIdx = selectedCompareItems.length >= 2 ? selectedCompareItems[1] : -1;
  window.location.href = 'product_detail.html?index=' + firstIdx + '&compareIdx=' + secondIdx;
}
