# 布局

## float+margin
布局步骤:
1. 对两边侧栏分别设置width，并对左侧栏添加float:left，对右侧栏添加float:right。
2. 对主面板设置margin-left为左侧栏的width，margin-right为右侧栏的width。
注意：
1. DOM书写顺序是先写两侧栏，然后再写主面板。（不然主面板会把侧栏挤到下一列）
2. 布局简单明了，但是渲染时先渲染侧栏再渲染比较重要的主面板。
二列的实现方法：
如果是左边带有侧栏的二栏布局，则去掉右侧栏，不要设置主面板的margin-right值，其他操作相同。反之亦然。

## position+margin
布局步骤：
1. 对父级元素（容器）设置position：relative；
2. 对两边侧栏设置width，position：absolute；
3. 设置两侧的top：0；左侧栏left:0;右侧栏right:0;
4. 对主面板设置margin-left为左侧栏的width，margin-right为右侧栏的width。
注意:
1. 如果中间栏含有最小宽度限制，或是含有宽度的内部元素，则浏览器窗口小到一定程度，主面板与侧栏会发生重叠。

## 圣杯布局(float+负margin+padding+position)
布局步骤:
1. 三个都设置成float:left;
2. 主面板的width:100%; 两侧设置确定的width;
3. 左侧栏设置margin-left:-100%; 右侧栏设置margin-right:负的自身宽度;
4. 给父容器设置padding-left为左侧栏宽度, padding-right为右侧栏宽度;
5. 设置两个侧栏position:relative, 左侧栏left为负的自身宽度,右侧栏right为负的自身宽度;
注意:
1. 这里的DOM书写顺序也是先写主面板,再写两侧栏。
2. 当面板的main内容部分比两边的子面板宽度小的时候，布局就会乱掉。可以通过设置main的min-width属性或使用双飞翼布局避免问题。
步骤解析：
1. 为了让三列可以在同一行
2. 设置宽度
3. 利用负的margin调整位置，回到各自应该的位置
4. 让内容在中间，不被两边的遮住（但是这样设置了padding就让整个width变大了，也就是又推开了位置。而且这里三个都float了，还是同一个方向，所以中间就不可以margin来实现了）
5. 用相对定位调整位置，达到最终效果。 

## 双飞翼布局(float+负margin+margin)

## flex布局
