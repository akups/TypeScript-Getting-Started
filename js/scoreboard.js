var Scoreboard = (function () {
    function Scoreboard() {
        this.results = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.results.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = "<h2>Scoreboard</h2>";
        for (var index = 0; index < this.results.length; index++) {
            var result = this.results[index];
            output += "</h4>";
            output += result.playerName + " : " + result.score + " / " + result.problemCount + " for factor " + result.factor;
            output += "</h4>";
        }
        var scoreElement = document.getElementById('scores');
        scoreElement.innerHTML = output;
    };
    return Scoreboard;
}());
//# sourceMappingURL=scoreboard.js.map