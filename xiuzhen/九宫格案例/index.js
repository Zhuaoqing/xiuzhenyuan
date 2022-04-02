window.onload = function () {
  var box = document.querySelector('.box');
  var btn1 = document.querySelector('.btn1');
  var btn2 = document.querySelector('.btn2');
  //获取class名为box下所有的子元素
  var smallBox = document.querySelectorAll('.smallBox');
  var count = [];//随机数值
  var rgbArr = [];
  var timer;
  btn1.addEventListener('click', function () {
    clearInterval(timer)
    timer = setInterval(setTime,1000)
  });
  btn2.addEventListener('click', function () {
    clearInterval(timer)
    for(let i = 0; i < smallBox.length;i++){
      smallBox[i].style.backgroundColor = '#ffa600';
    }
  });
  var setTime = function setTime(){
    count = [];//随机数值
    rgbArr = [];
    for(let i = 0; i < smallBox.length;i++){
      smallBox[i].style.backgroundColor = '#ffa600';
    }
    for (var i = 0; i < 3; i++) {
      fn3();
      rgbArr.push(rgb)
      count.push(Math.floor(Math.random() * 9))
    }
    for (let i = 0; i < smallBox.length;i++){
      for(let j = 0; j < 3;j++){
        if(count[j] == i){
          smallBox[i] = count[j];
          smallBox[i].style.backgroundColor = rgbArr[j];
        }
      }
    }
  }
    
  //封装获取随机颜色的函数
  function fn3() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  }
}