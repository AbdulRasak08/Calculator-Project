function press(value) {
  document.getElementById("display").value += value;
 }
document.getElementById("num0Btn").onclick= 
function() {
    press('0')
};
document.getElementById("numOneBtn").onclick= 
function() {
    press('1')
};
document.getElementById("num2Btn").onclick= 
function() {
    press('2')
};
document.getElementById("num3Btn").onclick= 
function() {
    press('3')
};
document.getElementById("num4Btn").onclick= 
function() {
    press('4')
};
document.getElementById("num5Btn").onclick= 
function() {
    press('5')
};
document.getElementById("num6Btn").onclick= 
function() {
    press('6')
};
document.getElementById("num7Btn").onclick= 
function() { 
    press('7')
};
document.getElementById("num8Btn").onclick= 
function() {
    press('8')
};
document.getElementById("num9Btn").onclick= 
function() {
    press('9')
};
document.getElementById("dotBtn").onclick= 
function() {
    press('.')
};
document.getElementById("addBtn").onclick= 
function() {
    press('+')
};
document.getElementById("subtractBtn").onclick= 
function() {
    press('-')
};document.getElementById("multiplyBtn").onclick= 
function() {
    press('x')
};document.getElementById("divisionBtn").onclick= 
function() {
    press('÷')
};
document.getElementById("persentBtn").onclick= 
function() {
    press('%')
};
document.getElementById("clearBtn").onclick= 
function() {
    clearDisplay();
}
document.getElementById("delBtn").onclick= 
function() {
   deleteBtn();
}
document.getElementById("equalBtn").onclick= 
function() {
    calculate();
};
document.getElementById("bracketBtn").onclick= 
function() {
    press('()')
};

let expression = "";
let openBracket = true;

function press(value) {
    if (value === '%') {
         expression += "/100";
        document.getElementById("display").value += '%';
    } else if (value === "()") {
        const bracket = openBracket ? "(" : ")";
        expression += bracket;
        document.getElementById("display").value += bracket;
        openBracket = !openBracket
    } else {
        expression += value;
        document.getElementById("display").value += value;
    }
}

function deleteBtn() {
    expression = expression.slice(0, -1);
    document.getElementById("display").value =
    document.getElementById("display").value.slice(0, -1);
}


