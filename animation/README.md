这是一个CSS3动画属性:animation 的一个小demo.

1. @keyframes 规则用于创建动画
	@keyframes 规则名 {
		关键帧 {
			样式;
		}
	}

2. animation 属性,写在对应添加动画的元素里.
	选择器 {
		animation: 规则名 动画时间 其他设置例如变化曲线是否循环等;
	}