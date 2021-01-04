// 配置
// 花色
let faces = ['♠', '♥', '♦', '♣']
// 人牌(用于生成牌组时，查询数子对应的符号)
let humans = {
    1: 'A',
    11: 'J',
    12: 'Q',
    13: 'K'
}

// 牌类
function Card(_face, _point) {
    this.face = _face
    this.point = _point
    // 定义卡片的显示函数
    this.render = () => {
        return '<li>' + this.face + ' ' + this.point + '</li>'
    }
}
