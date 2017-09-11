# jQuery

## 使用方法
### 引入库
在head标签里,本地或CDN引入jQuery库即可.开发一般用压缩版jquery.min.js
```html
    <head>
        <script type="text/javascript" src="jquery.js"></script>
    </head>
```
### 语法
```js
    $(selector).action();
```     
或
```js
    jquery(selector).action();
```
$和jquery是等价的.一般使用$.

### *文档就绪函数*
防止文档在没有完全加载之前(就绪)就运行jQuery代码.
```js
$(document).ready(function(){

--- jQuery functions go here ----

});
```
简洁写法:
```js
$(function(){

--- jQuery functions go here ----

});
```

## jQuery选择器

### 元素选择器

jQuery 使用 CSS 选择器来选取 HTML 元素。

*返回的是一个对象数组*
选择器类型 | 选择器语法 | 选择器说明
---|---|---
标签选择器   | $("p")      | 选取 <p> 元素。
class选择器  | $("p.intro")| 选取 **所有** class="intro" 的 <p> 元素。
id选择器     | $("p#demo") | 选取所有 id="demo" 的 <p> 元素。
### jQuery 属性选择器

jQuery 使用 **XPath** 表达式来选择带有给定属性的元素。

选择器类型 | 选择器语法 | 选择器说明
---|---|---
属性匹配选择器 | $("[href]") | 选取所有带有 href **属性** 的元素。
等于匹配选择器   | $("[href='#']")    | 选取所有带有 href 值 **等于** "#" 的元素。
不等匹配选择器   | $("[href!='#']")   | 选取所有带有 href 值 **不等于** "#" 的元素。
结尾匹配选择器   | $("[href$='.jpg']")| 选取所有 href 值以 ".jpg" **结尾** 的元素。

其中href可为任意属性.

### 其他
选择器类型 | 选择器语法 | 选择器说明
---|---|---
所有选择器         | $( * )             | 选取所有元素
当前选择器         | $(this)            | 选区当前元素
还有更多

**注意这里用$(jQuery选择器选择出来的对象都是jQuery对象),jQuery对象和DOM对象是不一样的,不能通用对方的属性和方法。如果要用必须经过转换，但不建议**

## jQuery事件

### 常见DOM事件
鼠标事件 | 键盘事件 | 表单事件| 文档/窗口事件
---|---|---|---
click | keypress| submit | load
dbclick | keydown | change | resize
mouseenter | keyup |focus | scroll
mouseleave | | biur | unload

### 语法
```js
$('p').click();
//或者
$('p').click(funciton(){
    //code
});
```
### 更多事件
以后再补充

## jQuery效果
### 显示与隐藏
```js
//显示
$(selector).show(speed,callback);
//隐藏
$(selector).hide(speed,callback);
//显示被隐藏的,或者隐藏在显示的,来回切换(toggle中文就是切换的意思)
$(selector).toggle(speed,callback);
```
可选参数:
1. speed: slow (慢速) | fast (快速) | 毫秒值;
2. callback回调函数,实现效果后指向的函数名称;

### 淡入淡出
```js
// 淡进
$(selector).fadeIn(speed,callback);
// 淡出
$(selector).fadeOut(speed,callback);
// 存在的淡进, 不存在的淡出
$(selector).fadeToggle(speed,callback);
// 渐变为给定的透明度(0到1之间)
$(selector).fadeTo(speed,callback);
```
可选参数:
1. speed: slow (慢速) | fast (快速) | 毫秒值;
2. callback回调函数,实现效果后指向的函数名称;

### 滑动 (滑出滑入,例如实现手风琴的效果)
```js
// 滑下(展开)
$(selector).sideDown(speed,callback);
// 滑上(收起)
$(selector).sideUp(speed,callback);
// 展开的收起,收起的展开
$(selector).sideToggle(speed,callback);
```
可选参数:
1. speed: slow (慢速) | fast (快速) | 毫秒值;
2. callback回调函数,实现效果后指向的函数名称;

**简单地说,以上这三个效果都是从display:none到不是display:none的一个过程,或者逆过程,只是实现效果不一样而已,一个是直接,一个是改变透明度,一个是改变高度**

### 动画
这个和css3的transform和transition结合使用差不多. 都是改变属性值,然后中间有一个渐变的过渡,然后实现动画效果.
语法：
```js
$(selector).animate({params},speed,callback);
```
必需的 params 参数定义形成动画的 CSS 属性。
可选的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
可选的 callback 参数是动画完成后所执行的函数名称。
例子:
```js
$("button").click(function(){
  $("div").animate({left:'250px'});
}); 
```

### jQuery stop() 停止效果/动画
语法:
```js
$(selector).stop(stopAll,goToEnd);
```
可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。

### jQuery Callback 动画/效果100%后回调执行函数
*由于 JavaScript 语句（指令）是逐一执行的 - 按照次序，动画之后的语句可能会产生错误或页面冲突，因为动画还没有完成。为了避免这个情况，您可以以参数的形式添加 Callback 函数。* 
语法:
```js
$(selector).hide(speed,callback)
```
**注意:如果没有callback的话,可能效果都还没有实现,然后就执行了后面的代码了**

### jQuery - Chaining
通过 jQuery，您可以把动作/方法链接起来。
Chaining 允许我们在一条语句中允许多个 jQuery 方法（在相同的元素上）。
例如:
下面的例子把 css(), slideUp(), and slideDown() 链接在一起。"p1" 元素首先会变为红色，然后向上滑动，然后向下滑动：
```js
$("#p1").css("color","red").slideUp(2000).slideDown(2000);
```
或者可以写成
```js
$("#p1").css("color","red")
  .slideUp(2000)
  .slideDown(2000);
```

## jQuery HTML
### 获取内容和属性
#### 获取内容
1. $('selector').html();                  返回元素的内容(包括html标记,和innerHTML差不多)
2. $('selector').text();                  返回元素的文本内容(不包括html标记,和innerText差不多)
3. $('selector').val();                   返回表单字段的值(value)

#### 获取属性
 $('selector').attr('属性名');             返回对应属性名的属性值


#### 设置内容
1. $('selector').html('内容 可以有标签');   设置或返回元素的内容(包括html标记,和innerHTML差不多)
2. $('selector').text('内容');             设置或返回元素的文本内容(不包括html标记,和innerText差不多)
3. $('selector').val('值');                设置或返回表单字段的值(value)

*以上3个方法都是有回调函数的,回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。*
例子:
```js
$("#btn1").click(function(){
  $("#test1").text(function(i,origText){
    return "Old text: " + origText + " New text: Hello world!
    (index: " + i + ")";
  });
});
```

#### 设置属性
1.  $('selector').attr('属性名','值');         设置对应属性名的属性值
2. attr() 方法也允许您同时设置多个属性。(传入的是键值对)
```js
$("button").click(function(){
  $("#w3s").attr({
    "href" : "http://www.w3school.com.cn/jquery",
    "title" : "W3School jQuery Tutorial"
  });
});
```
回调函数
*jQuery 方法 attr()，也提供回调函数。回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。*


   




