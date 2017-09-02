var aBtn   = document.getElementById('btn').getElementsByTagName('input'),
    aVideo = document.getElementById('video').getElementsByTagName('li');

for (var i = 0; i < aBtn.length; i++) {
    // 自定义一个index索引属性
    aBtn[i].index = i;
    aBtn[i].onclick = function() {
        for (var j = 0; j < aVideo.length; j++) {
            aVideo[j].style.display = 'none';
        }
        aVideo[this.index].style.display = 'block';
    };
}

// 这里设计到一个作用域的问题,其实js里面是把所有的代码都运行了一遍,
// 放到缓存里面,然后我们出发了什么事件,然后再运行对应function(语句体)操作,
// 所以上面 aVideo[this.index] 这里不可以直接用 i 来写,
// 而是要根据出发时间的索引值来推出应该修改的是哪一个元素. 也就是
//     触发的a元素 -> a元素的索引 -> b元素的索引 ->修改的b元素
// 这样的一个过程









// for (var i = 0; i < aBtn.length; i++) {
//     aBtn[i].onclick = function(){
//         // console.log(this);    使用这一句可以看到我们点击的是那个
//         // console.log(this.dataset.index);    使用这一句可以看到我们点击的是那个的索引值
//         // 获取索引    这里的_iNow是局部变量(出去了这个function就销毁的)
//         var _iNow = parseInt(this.dataset.index);
//         // 把所有的都设置成不显示
//         for (var j = 0; j < aVideo.length; j++) {
//             aVideo[j].style.display = 'none';
//         }
//         // 显示点击的btn对应的li
//         aVideo[_iNow].style.display = 'block';
//     };
// }
