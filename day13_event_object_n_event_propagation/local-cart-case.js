/* 
  !重点: 将"页面渲染"和"数据更新"分开(即 "separation of concerns"，"关注点分离"的思想)
*/


// 购物车逻辑代码
// 准备模拟的数据

/* 
数据解释:
    一个对象就是一条购物车数据
    { 
    id: 商品标识, 
    pic: 商品图片, 
    title: 商品标题, 
    price: 商品价格, 
    buy: 购物车中该商品的数量, 
    is_select: 是否被勾选上,true就是勾选上的,false就是没有勾选上, 
    number: 库存数量 
    }
*/
var cart = [
  {
    id: 1,
    pic: "https://img14.360buyimg.com/n0/jfs/t1/163320/37/21840/80258/624015e4E29776164/6cf014c9d82acedb.jpg",
    title: "小手机不便宜小手机不便宜",
    price: 100,
    buy: 2,
    is_select: true,
    number: 17,
  },
  {
    id: 2,
    pic: "https://img10.360buyimg.com/n1/s450x450_jfs/t1/44531/36/17161/415753/60f8d923E775663d0/5143ddaedf0a0607.jpg",
    title: "便宜的显示屏",
    price: 90,
    buy: 4,
    is_select: false,
    number: 17,
  },
  {
    id: 3,
    pic: "https://img10.360buyimg.com/n1/jfs/t19510/295/1033223371/145847/aef8c1a0/5ab89f3dNc3d53819.jpg",
    title: "里面有老婆的老婆饼",
    price: 50,
    buy: 6,
    is_select: false,
    number: 17,
  },
];


// 获取元素
var cart_box = document.querySelector(".cart_box");


// !页面渲染(不考虑数据更新)
function renderHtml() {
  let checkedListingNum = 0;
  let checkedItemNum = 0;
  let totalPrice = 0;

  cart.forEach(item => {
    if (item.is_select) {
        checkedListingNum++;
        checkedItemNum += item.buy;
        totalPrice += item.buy * item.price;
    }
  });

   let str = '';
   str += `<div class="top">
      <input type="checkbox" class="select-all" ${checkedListingNum == cart.length && cart.length > 0? 'checked':''}>全选
    </div>`;

    str += '<ul class="center">';
    str += cart.reduce((a, c) => a + `
      <li>
        <div class="select">
          <input type="checkbox" class='select-item' data-id=${c.id} ${c.is_select?'checked':''}>
        </div>
        <div class="show">
          <img src="${c.pic}">
        </div>
        <div class="title">
          ${c.title}
        </div>
        <div class="price">
          ${c.price.toFixed(2)}
        </div>
        <div class="number">
          <button class='sub' data-id=${c.id} ${c.buy<=1?'disabled':''}>-</button>
          <input type="text" value="${c.buy}">
          <button class='plus' data-id=${c.id} ${c.buy>=c.number?'disabled':''}>+</button>
        </div>
        <div class="subPrice">
            ${(c.price * c.buy).toFixed(2)}
        </div>
        <div class="destory">
          <button class='del' data-id=${c.id}>删除</button>
        </div>
      </li>`,'');

      str += ` </ul>
    <div class="bottom">
      <div class="totalNum">商品总数: ${checkedItemNum}</div>
      <div class="btns">
        <button class='pay' ${checkedListingNum==0?'disabled':''}>结算</button>
        <button class='delete-selection' ${checkedListingNum==0?'disabled':''}>删除所有已选中</button>
        <button class='clear' ${checkedListingNum==0?'disabled':''}>清空购物车</button>
      </div>
      <div class="totalPrice">
        总价格： ¥<span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>`;

    cart_box.innerHTML = str;
}

// 页面加载时先按现有数据渲染一次
renderHtml();


// !数据更新(不考虑页面渲染)
cart_box.addEventListener('click', function (e) {

    if (e.target.className == 'select-all') {
        // 复制全选的状态给单个item
        cart.forEach(item => item.is_select = e.target.checked);
    }

    if (e.target.className == 'select-item') {
        let id = e.target.dataset.id - 0;
        console.log('id',id); 
        // 点击checkbox，转换(toggle)勾选的状态
        cart.forEach(item => {if (id == item.id) item.is_select = !item.is_select});
    }

    if (e.target.className == 'sub') {
        let id = e.target.dataset.id - 0;
        cart.forEach(item => {if (id == item.id) item.buy--});
    }

    if (e.target.className == 'plus') {
        let id = e.target.dataset.id - 0;
        cart.forEach(item => {if (id == item.id) item.buy++});
    }

    if (e.target.className == 'pay') {
        alert('等等再买，等等党不会让你失望');
    }
    if (e.target.className == 'clear') {
        cart.length = 0;
    }

    if (e.target.className == 'delete-selection') {
        cart = cart.filter(item => !item.is_select);
    }

    renderHtml();
});