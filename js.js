window.onload = function () {
    var gameLinks = document.querySelectorAll('.game-link');
    var gameInfos = document.querySelectorAll('.game-info');

    gameLinks.forEach(function(gameLink, index){
        gameLink.onclick = showGameInfo.bind({index});
    });

    function showGameInfo(){
        gameInfos.forEach(function(gameInfo){
            gameInfo.style.display = 'none';
        });
        gameLinks.forEach(function(gameLink, index){
            gameLink.classList.remove('game-link--active');
        });
        gameInfos[this.index].style.display = 'block';
        gameLinks[this.index].classList.add('game-link--active');
    }
}

