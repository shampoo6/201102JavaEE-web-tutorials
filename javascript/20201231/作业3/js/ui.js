function UI() {
    this.render = () => {
        // 庄家
        qs('.card-count').innerText = host.deck.length
        qs('.host>ul').innerHTML = host.player.render()
        // 玩家
        qs('.player>ul').innerHTML = player.render()
        // 更新分数
        qs('.host-points').innerText = host.hostPoints
        qs('.player-points').innerText = host.playerPoints
    }
}