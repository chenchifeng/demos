# jQuery

## 使用方法
1. 引入库
在head标签里,本地或CDN引入jQuery库即可.开发一般用压缩版jquery.min.js
```html
    <head>
        <script type="text/javascript" src="jquery.js"></script>
    </head>
```
2. 语法
```javascript
    $(selector).action();
```     
或
```javascript 
    jquery(selector).action();
``` 
$和jquery是等价的.一般使用$.

3. 文档就绪函数
防止文档在没有完全加载之前(就绪)就运行jQuery代码.
```javascript
$(document).ready(function(){

--- jQuery functions go here ----

});
``` 

## jQuery选择器
1. jQuery 元素选择器
jQuery 使用 CSS 选择器来选取 HTML 元素。
*返回的是一个对象数组*
$("p") 选取 <p> 元素。
$("p.intro") 选取**所有** class="intro" 的 <p> 元素。
$("p#demo") 选取所有 id="demo" 的 <p> 元素。
2. jQuery 属性选择器
jQuery 使用 **XPath** 表达式来选择带有给定属性的元素。
$("[href]") 选取所有带有 href **属性**的元素。
$("[href='#']") 选取所有带有 href 值**等于** "#" 的元素。
$("[href!='#']") 选取所有带有 href 值**不等于** "#" 的元素。
$("[href$='.jpg']") 选取所有 href 值以 ".jpg"**结尾**的元素。



