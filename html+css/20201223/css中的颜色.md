# css中的颜色

样式的颜色，有以下几种类型：

## 内置颜色参数
内置颜色参数（是一个代表颜色的单词）
```css
div {
    color: red;
}
```

如果填入 `transparent` ，可以之间使内容透明

## rgb
颜色的rgb（red红，green绿，blue蓝）值。rgb值如下：`rgb(255,255,255)`:
```css
div {
    color: rgb(255,255,255);
}
```
取值范围是 `0~255`，如果全为0是黑色，全为255是白色

## rgba
和rgb颜色值基本相同，最后的a代表alpha通道值（透明度）
```css
div {
    color: rgba(255,255,255,1);
}
```

## 16进制颜色值
可以将颜色的rgb用16进制数表示

```css
div {
    color: #FFFFFF;
}
```

前两位代表红色、中间两位代表绿色、最后两位代表蓝色

如果对应颜色的数值相同的话可以省略，例如：
```css
div {
    color: #aabbcc;
    /* 可以省略成以下写法 */
    color: #abc
}
```

## hsl
hsl分别代表： h: 色调，s：饱和度，l：灰度
```css
div {
    color: hsl(255,255,255);
}
```
