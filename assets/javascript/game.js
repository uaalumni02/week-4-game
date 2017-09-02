$(document).ready(function() {
    var Random = Math.floor(Math.random() * 101 + 19)
    $('#randomNumber').text(Random);
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    $('#Wins').text(wins);
    $('#Losses').text(losses);
    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#finalTotal').text(userTotal);
    }

    function win() {
        alert("Awesome Work Smart Guy!");
        wins++;
        $('#Wins').text(wins);
        reset();
    }

    function boo() {
        alert("Better Luck Next Time Ha Ha!");
        losses++;
        $('#Losses').text(losses);
        reset()
    }
    $('#one').on('click', function() {
        userTotal = userTotal + num1;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            boo();
        }
    })
    $('#two').on('click', function() {
        userTotal = userTotal + num2;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            boo();
        }
    })
    $('#three').on('click', function() {
        userTotal = userTotal + num3;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);
        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            boo();
        }
    })
    $('#four').on('click', function() {
        userTotal = userTotal + num4;
        console.log("New userTotal= " + userTotal);
        $('#finalTotal').text(userTotal);

        if (userTotal == Random) {
            win();
        } else if (userTotal > Random) {
            boo();
        }
    });
});