# css 选择器

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
#### 标签选择器
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

#### id选择器

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

#### 