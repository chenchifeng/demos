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

### 文档就绪函数
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
