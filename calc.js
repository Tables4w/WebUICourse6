window.addEventListener("DOMContentLoaded", function () {
    const goodsPriceList =
    {"pr1": 100, "pr2": 140, "pr3": 170, "pr4": 80, "pr5": 125};

    let amount = document.getElementById("amount");
    let product = document.getElementById("goodsList");
    let calcButton = document.getElementById("calculate");
    let resultfield = document.getElementById("result");
    calcButton.addEventListener("click", function () {
        let inp = amount.value;
        if (inp.match(/^\d+$/) !== null) {
            let res = goodsPriceList[product.value] * inp;
            resultfield.innerText = res;
        } else {
            resultfield.innerText = "Некорректный ввод количества";
        }
    });
});