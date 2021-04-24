/*Menu ẩn hiện */
var menubtn = document.getElementsByClassName('menu-icon')[0];

var menuid = document.getElementById('menuID');

menubtn.onclick = function() {
    if(menuid.style.maxHeight == '0px'){
        menuid.style.maxHeight = '200px';
    }else{
        menuid.style.maxHeight = '0px';
    }
}


/*Chi tiết sản phẩm*/
// var product_img = document.getElementById('product-img');
// var small_img = document.getElementsByClassName('small-img');

// small_img[0].onclick = function() {
//     product_img.src = small_img[0].src;
// }

// small_img[1].onclick = function() {
//     product_img.src = small_img[1].src;
// }

// small_img[2].onclick = function() {
//     product_img.src = small_img[2].src;
// }

// small_img[3].onclick = function() {
//     product_img.src = small_img[3].src;
// }

/*Đăng kí - Đăng nhập*/
var login = document.getElementById('login');
var loginForm = document.getElementById('loginForm');
var register = document.getElementById('register');
var registerForm = document.getElementById('registerForm');
var indicator = document.getElementById('indicator');

login.onclick = function() {
    loginForm.style.transform = 'translateX(300px)';
    registerForm.style.transform = 'translateX(300px)';
    indicator.style.transform = 'translateX(0px)';
}

register.onclick = function() {
    loginForm.style.transform = 'translateX(0px)';
    registerForm.style.transform = 'translateX(0px)';
    indicator.style.transform = 'translateX(100px)';
}

/*Tab UL*/
// var line = document.querySelector('line')
// console.log(line);