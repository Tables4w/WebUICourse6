window.addEventListener("DOMContentLoaded", function () {
    const goodsPriceList =
    {"pr1": 100, "pr2": 140, "pr3": 170, "pr4": 80, "pr5": 230};
    const goodsCategory =
    {"pr1": 1, "pr2": 2, "pr3": 2, "pr4": 1, "pr5": 3};
    const colorPriceMultiplier =
    {"col1": 1, "col2": 1.35, "col3": 0.7, "col4": 1.8, "col5": 1.5};

    let amount = document.getElementById("amount");
    let product = document.getElementById("goodsList");
    let resultfield = document.getElementById("result");
    let colorList = document.getElementById("colorList");
    let services = document.getElementsByName("RB");
    let prop = document.getElementsByName("cbProp");
    let cBlock = document.getElementById("colBlock");
    let pBlock = document.getElementById("propBlock");

    function calculate() {
        let inp = amount.value;
        if (inp !== "") {
            if (inp.match(/^\d+$/) !== null) {
                //Переменные-коэффициенты подсчёта
                let colmult=1;
                let serviceprice=(services[0].checked * (1000)) +
                (services[1].checked * (12000)) +
                (services[2].checked * (3000));
                let propprice=0;
                let propmult=1;

                //Множитель для товаров со списком цветов
                if(goodsCategory[product.value]===2){
                    colmult=colorPriceMultiplier[colorList.value];
                } else {colmult=1;}

                //Коэф-ты для товаров с чекбоксами
                if(goodsCategory[product.value]===1){
                    if(prop[0].checked===true){
                        propprice = 2750;
                    } else {propprice = 0;}
                    if(prop[1].checked===true){
                        propmult = 2;
                    } else {propmult = 1;}
                } else {propmult = 1; propprice = 0;}

                let res = goodsPriceList[product.value] * inp
                * colmult * propmult + serviceprice + propprice;
                resultfield.innerText = res;
            } else {
                resultfield.innerText = "Некорректный ввод количества";
            }
        }
        else{
            resultfield.innerText = "";
        }
    }

    services.forEach(function (elem) {
        elem.addEventListener("change", function () {
        calculate();
    });});

    prop.forEach(function (elem) {elem.addEventListener("change", function () {
        calculate();
    });});

    amount.addEventListener("input", function () {
        calculate();
    });

    colorList.addEventListener("change", function () {
            calculate();
    });

    product.addEventListener("change", function () {
        if (goodsCategory[product.value]===2) {
            calculate();
            pBlock.style = "display:none";
            cBlock.style = "display:flex; flex-direction: column";
        }
        if (goodsCategory[product.value]===1) {
            calculate();
            pBlock.style = "display:flex; flex-direction: column";
            cBlock.style = "display:none";
        }
        if (goodsCategory[product.value]===3) {
            calculate();
            pBlock.style = "display:none";
            cBlock.style = "display:none";
        }
    });
});