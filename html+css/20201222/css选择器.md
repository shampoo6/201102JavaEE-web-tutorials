# css 选择器

> 标题上有 `*` 星号的是重点内容

## 什么是选择器？
```css
div {
    width: 100px;
    height: 100px;
    background-color: blue;
}
```

css 中花括号前的就是选择器

## 作用

用于选中html中要修改样式的元素

## 语法
### 选择器的分类
#### *标签选择器
用于选择所有指定标签的选择器

选择器本身就是标签名

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* 选择器就是对应的标签名称 */
            div { 
                color: red;
            }
        </style>
    </head>
    <body>
        <div>1</div>
        <div>2</div>
    </body>
</html>
```

#### *id选择器

id选择器是用于选取指定id属性的元素的选择器

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* id选择器 */
            #id-selector {
                color: blue;
            }
        </style>
    </head>
    <body>
        <!-- 给标签添加id属性，用于id选择器的选择 -->
        <span id="id-selector">id选择器</span>
    </body>
</html>
```

id选择器是由 `#` 井号开头，后面跟一个id属性的名称

> 注意 `id` 属性的值在html中，全局唯一

#### *类选择器

类选择器用于选取指定类的一组元素

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            /* 类（class）选择器 */
            .my-class {
                color: yellow;
            }
        </style>
    </head>
    <body>
        <!-- 给标签添加class属性，用于类选择器的选择 -->
        <span class="my-class">class1选择器</span>
        <div class="my-class">class2选择器</div>
        <span class="my-class">class3选择器</span>
        <p class="my-class">class4选择器</p>
    </body>
</html>
```
类选择使用 `.` 点开头，id选择器使用 `#` 井开头，其他语法和id选择器一样

在html当中可以有多个class属性相同的元素，而id只能唯一

#### 属性选择器
通过属性进行元素选择的选择器

#### 派生选择器
由多个选择器所构成的，依赖树状结构的选择器

##### *后代选择器
后代选择器能够选中指定元素下，所包含的所有指定标签，例如：
```css
/* 该后代选择器，会选中 ol 标签内的所有 li 标签 */
ol li { 
    color: pink;
}
```

##### 子代选择器
子代选择器会选择，指定元素的子一级（而非孙子或曾孙级）的所有元素，例如：
```css
/* 该子代选择器，会选中 ol 标签内的所有子一级的 li 标签，不会跳级 */
ol > li {
    color: pink;
}
```

##### 兄弟选择器
兄弟选择器会选择指定元素所在父节点下，同辈的，最近的，下一个元素。例如：
```css
/* 该选择器，选择的是 .my-ul-li 类选择器所选元素的父节点下，最近的下一个 li 标签 */
.my-ul-li + li {
    color: pink;
}
```

#### 伪类选择器
他是选择器中含有 `:` 冒号的选择器

##### 语法
```css
selector:class {
}
```
selector: 选择器

:class : 伪类名

整体理解就是，伪类描述了选择器的某种状态

##### 以下伪类均作用域a标签
###### *hover
鼠标悬停时触发的样式

###### link
访问前的状态样式

###### active
点住不放是的样式

###### visited
访问后的样式

##### 树状节点相关伪类
###### *first-child
选中父节点中的第一个子元素

###### *last-child
选中父节点中的最后一个子元素

###### *nth-child(n)
选中父节点中的第n个子元素且元素类型必须是选择器所指类型

###### nth-of-type(n)
选中父节点中元素类型必须是选择器所指类型的第n个元素

> 可以参考《css选择器.html》

