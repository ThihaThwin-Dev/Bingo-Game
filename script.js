let r1 = [0, 0, 0, 0]
let r2 = [0, 0, 0, 0]
let r3 = [0, 0, 0, 0]
let r4 = [0, 0, 0, 0]

var first = 1;
var second = 2;
var current = first;
let finished = false;
let count
/**
 * when user click this function will specify which row and coloumn is being clicked
 * if the clicked row and column is 0 then it will let the function run
 * the above function is to avoid clicking again and messes up the user order
 * this is done by checking the clicked value is 0 or not
 * if its not a 0 then it will changed the required base value for the if condition to run
 * thus causing the button unclickable for the second time
 * this function will change the background color depending on which user clicks
 * after everything have been run correctly this will add an count for the draw counter
 * and will also check who have won everytime this function has been clicked
 */
function flip(userclick) {
    if (finished == false) {
        let tmp = userclick.id.split(",");
        let clickrow = Number(tmp[0]);
        let clickcol = Number(tmp[1] - 1);
        var valid = true;
        switch (clickrow) {
            case 1:
                if (r1[clickcol] != 0) {
                    valid = false;
                    break;
                }
                r1[clickcol] = current;
                break;
            case 2:
                if (r2[clickcol] != 0) {
                    valid = false;
                    break;
                }
                r2[clickcol] = current;
                break;
            case 3:
                if (r3[clickcol] != 0) {
                    valid = false;
                    break;
                }
                r3[clickcol] = current;
                break;
            case 4:
                if (r4[clickcol] != 0) {
                    valid = false;
                    break;
                }
                r4[clickcol] = current;
                break;
        }
        if (valid == true) {
            userclick.style.transform = "scaleY(-1)";
            if (current == first) {
                userclick.style.background = "tomato";
                document.getElementById("turn").innerText = "Player 2 Turn!"
                document.getElementById("turn").style.color = "teal";
                current = second;
                computer();
            }
            else {
                userclick.style.background = "teal";
                document.getElementById("turn").innerText = "Player 1 Turn!"
                document.getElementById("turn").style.color = "tomato";
                current = first;
            }
            timesPlayed();
        }
        checkWhoWin();
    }
}
/**
 * to check who wins the game by specifying conditions
 * when one these conditions return true the game will immediately end 
 */
function checkWhoWin() {
    if (vertical(first) == true ||
        diagonal(first) == true ||
        horizontal(first) == true) {
        finished = true;
        document.getElementById("winner").innerText = "Player 1 win!"
    }
    else if (vertical(second) == true ||
        diagonal(second) == true ||
        horizontal(second) == true) {
        finished = true;
        document.getElementById("winner").innerText = "Player 2 win!"
    }
}
/**
 * to check for vertical win condition
 * if the specific conditions are met this function will return true
 * return false is to specify a break point for the loop when the nested if condition is met
 */
function vertical(player) {
    for (let index = 0; index < 4; index++) {
        if (r1[index] == player &&
            r2[index] == player &&
            r3[index] == player &&
            r4[index] == player
        ) {
            return true;
        }
    }
    return false;
}
/**
 * to check for horizontal win condition
 * if the specific conditions are met this function will return true
 */
function horizontal(player) {
    if (r1[0] == player &&
        r1[1] == player &&
        r1[2] == player &&
        r1[3] == player
    ) {
        return true;
    }
    if (r2[0] == player &&
        r2[1] == player &&
        r2[2] == player &&
        r2[3] == player
    ) {
        return true;
    }
    if (r3[0] == player &&
        r3[1] == player &&
        r3[2] == player &&
        r3[3] == player
    ) {
        return true;
    }
    if (r4[0] == player &&
        r4[1] == player &&
        r4[2] == player &&
        r4[3] == player
    ) {
        return true;
    }
}
/**
 * to check for diagonal win condition
 * if the specific conditions are met this function will return true
 */
function diagonal(player) {
    if (r1[0] == player &&
        r2[1] == player &&
        r3[2] == player &&
        r4[3] == player
    ) {
        return true;
    }
    if (r1[3] == player &&
        r2[2] == player &&
        r3[1] == player &&
        r4[0] == player
    ) {
        return true;
    }
}
/**
 * to check for draw
 * when user or computer clicks button +1 will be added to the count
 * when the count reaches 16 which is 4x4
 * the draw condition will be met and the game will conclude
 */
function timesPlayed() {
    var count = document.getElementById("count").innerText;
    var finalcount = +count + 1;
    document.getElementById("count").innerText = finalcount;
    if (finalcount == 16) {
        document.getElementById("winner").innerText = "Draw!"
        finished = true;
    }
}
/**
 * this function will run after the user click a button
 * if the computer clicked either a 1 or 2 a recursion will occur till the randomized value represent an empty button
 */
function computer() {
        var row = Math.floor(Math.random() * 4 + 1);
        var col = Math.floor(Math.random() * 4 + 1);
        document.getElementById(row + "," + col).click();

}