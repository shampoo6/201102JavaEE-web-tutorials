# css简介

## 什么是css

css: cascading style sheet （cascading: 层级，叠加，累加）(style sheet: 样式表)

## 作用

用于描述html元素张什么样子的

## 使用
在 `head` 标签中加入 `style` 标签，然后书写在其中(或独立的css文件)

> 使用可以参考 《css简介.html》

## 样式结构
```css
div {
    width: 100px;
    height: 100px;
    background-color: blue;
}
```
`div` css选择器，用于找到页面中需要修改样式的元素

花括号部分：样式表，存放了用于描述元素长相的所有样式属性

每一行是一个样式属性（css属性），多个属性又分号隔开，属性的结构是键值对结构，前面是属性名称，后面是属性值

