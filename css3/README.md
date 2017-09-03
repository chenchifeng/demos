# CSS3的新特性
只写了部分,参考自[W3CShool](http://www.w3school.com.cn/css3/)

## CSS3 2D转换 (transform)
通过CSS3转换(transform),能够对元素进行 移动 , 缩放 , 转动 , 拉长 或 拉伸.
其中2D转换方法包括:
1.  translate(x轴距离值,y轴距离值);  
    从元素当前位置移动,根据给定的left(x坐标)和top(y坐标)来移动.
    例:
    ```css
        .elem {
            /* 向右50px,向下100px; */
            transform: translate(50px,100px);
        }
    ```

2. ratate(数值deg);  
    元素顺时针旋转给定角度,如果是负值那就是逆时针.
    例:
    ```css
        .elem {
            /* 顺时针旋转30度 */
            transform: ratate(30deg);
        }
    ```

3. scale(width倍数,height倍数);
    元素的尺寸会增加或减少,根据给定的宽度和高度,缩放对应的比值倍数.
     例:
    ```css
        .elem {
            /* 放大一倍 */
            transform: scale(2,2);
        }
    ```

4. skew(水平值reg,Y垂直值reg);
    元素反转给定的角度,根据给定的水平线(X轴)和锤子线(Y轴)参数;
    例:
    ```css
        .elem {
            /* 水平翻转180度 */
            transform: skew(180deg,0reg);
        }
    ```

5. matrix();
    这是根据数学矩阵函数来对元素进行旋转,缩放,移动,以及倾斜的.
    有点难理解,以后再慢慢理解.

6. 以上的translate(n,n),scale(n,n),skew(x-angle,y-angle)方法如果只对X轴或Y轴变换,可以写成像translateX(n);这样的形式.


7. 转换属性
    1. transform:转换方法(参数);
        向元素应用2D或3D转换.
    2. transform-origin: 基点x轴位置 基点y轴位置 基点z轴位置;
        设置变换基点. 
        x可能值:left,center,right,length,%;
        x可能值:top,center,bottom,length,%;
        x可能值:length;

## CSS3 3D转换 (transform)
    其实和2D差不多,就是多了一个Z轴的值.
    但是效果上,对应的x,y,z轴不一样,效果也会不一样,3D的就是3D的效果.

## CSS3 过渡 (transition)
    当元素属性发生变化时,会根据给定的效果曲线,来发生一个 渐变的过渡 效果. 
    简写语法:
        transtion:  属性名(如果是全部就是all) 过渡时间(毫秒) 速度曲线(效果) 延时(可选);
    可能的值:
        transition-property: 属性名 | all(所有) |none(没有) ;
        transition-timing-function: linear(线性) | ease(由慢到快再慢) | ease-in (慢速开始) | ease-out (慢速结束) | ease-in-out(慢速开始和结束) | cubic-bezier(n,n,n,n) (自定义);

## CSS3 动画 (@keyframes , animation)
1. @keyframes 规则用于创建动画
	@keyframes 规则名 {
		关键帧 {
			样式;
		}
	}

    PS: 这里关键帧可以使0%~100%, 也可以是from...to...

2. animation 属性,写在对应添加动画的元素里.
	选择器 {
		animation: 规则名 动画时间 其他设置例如变化曲线是否循环等;
	}

## CSS3边框
1. 圆角     boreder-radius: px值 | %值 ;
2. 阴影     box-shadow:  水平偏移 垂直偏移 模糊距离 阴影大小(可选) 阴影颜色;
3. 边框图像 border-image:  url（） 内偏移 宽度 图像超出边框量 平铺(repeated)|铺满(rounded)丨拉伸(stretched);

## CSS3背景
1. 背景大小 background-size: 宽度 高度;
2. 定位区域 background-origin: content-box | padding-box | border-box;      (背景图像相对于设定值区域定位)
3. 绘制区域 background-clip:  content-box | padding-box | border-box;      (裁剪到设定值区域)

## CSS3文字效果
1. 文字阴影 text-shadow:  和box-shadow差不多.
2. 自动换行 word-warp: 通常(noremal) | 不换行 (none) |任意换行(unrestricted) | 压缩换行 (suppress);

## css3字体
语法: 
    @font-face {
        font-family: 字体名;
        src:url('字体库.ttf'),
            url('字体库.eof');/* IE9+ */
        font-weight: normal(标准) | bold(粗体) | bolder(更粗体) | lighter (更细体) | 100~700之间的数值(700=bold);
        font-style: normal(标准) | italic(斜体) | oblique(倾斜字体);
    }

## CSS 多列 
    例如把文本分为多列

## CSS3 用户界面
1. resize
    规定可否让用户调整元素尺寸.

2. box-sizing
    确切的方式定义适应某个区域的具体内容。
    例如box-sizing:border-box;的时候,width不会受到margin,padding的设置而产生变化.
3. outline-offset
    对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

## 其他
    以后在补充.



