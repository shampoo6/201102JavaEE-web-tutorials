function Player() {
    this.hand = []
    this.hold = (card) => {
        this.hand.push(card)
    }
    this.render = () => {
        let html = ''
        this.hand.forEach(card => {
            html += card.render()
        })
        return html
    }
}