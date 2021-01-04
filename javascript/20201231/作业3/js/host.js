// 发牌员
function Host() {
    this.deck = []
    this.player = new Player()
    this.hostPoints = 0
    this.playerPoints = 0
    this.win = 0
    let info = qs('.info')

    // 重置
    this.reset = () => {
        this.deck = []
        this.player.hand = []
        this.hostPoints = 0
        this.playerPoints = 0
        this.win = 0
        info.innerText = ''

        this.createDeck()
        this.shuffle()
    }

    // 创建牌组
    this.createDeck = () => {
        for (let i = 0; i < faces.length; i++) {
            for (let j = 1; j <= 13; j++) {
                let point = humans[j] ? humans[j] : j + ''
                this.deck.push(new Card(faces[i], point))
            }
        }
        // this.deck.push(new Card('little joker', '50'))
        // this.deck.push(new Card('big joker', '100'))
    }

    // 洗牌
    this.shuffle = () => {
        let temp = []
        // 从deck中随机取牌，放入temp中
        for (let i = 52; i > 0; i--) {
            // 随机数处乘以100，用于避开伪随机分布的重复性
            let index = Math.round(Math.random() * i * 100) % i
            let cardList = this.deck.splice(index, 1)
            temp.push(cardList[0])
        }
        this.deck = temp
    }

    // 抽牌
    this.draw = () => {
        return this.deck.pop()
    }

    // 算分
    this.calc = (playerHand) => {
        // 计算分数
        this.playerPoints = calcOne(playerHand)
        this.hostPoints = calcOne(this.player.hand)

        // 玩家爆牌
        if (this.playerPoints > 21) {
            info.innerText = '玩家爆牌了'
            this.win = -1
        }
        // 庄家爆牌
        else if (this.hostPoints > 21) {
            info.innerText = '庄家爆牌了'
            this.win = 1
        }
    }

    // 检查游戏是否结束
    this.checkGameOver = () => {
        if (this.win === 0) {
            // 玩家分数低于庄家
            if (this.playerPoints < this.hostPoints) {
                this.win = -1
            } else if (this.playerPoints == this.hostPoints) {
                this.win = 0
            } else {
                this.win = 1
            }
        }

        switch (this.win) {
            case -1:
                info.innerText += ' 输了'
                break;
            case 0:
                info.innerText += ' 平局'
                break;
            case 1:
                info.innerText += ' 赢了'
                break;
        }
    }

    function calcOne(cardArr) {
        let total = 0
        // 是否有人牌
        let hasHumans = false
        // A的个数
        let ACount = 0
        cardArr.forEach(card => {
            switch (card.point) {
                case 'A':
                    ACount++
                    total += 10
                    break;
                case 'J':
                case 'Q':
                case 'K':
                    hasHumans = true
                    total += 10
                    break;
                default:
                    total += Number(card.point)
                    break;
            }
        })

        // black jack
        if (cardArr.length === 2 && hasHumans && ACount === 1) {
            total = 21
        } else if (ACount > 0 && hasHumans) {
            total -= ACount * 9
        }

        return total
    }
}