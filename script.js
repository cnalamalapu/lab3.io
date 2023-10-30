document.addEventListener('DOMContentLoaded', function() {
    const mainForm = document.getElementById('mainForm');
    const billTotalInput = document.getElementById('billTotal');
    const tipInput = document.getElementById('tipInput');
    const tipPercentageInput = document.querySelector('.tip_percentage_input');
    const tipAmountDisplay = document.getElementById('tipAmount');
    const totalBillWithTipDisplay = document.getElementById('totalBillWithTip');
    const errorText = document.getElementById("errorText");


    mainForm.addEventListener('change', function() {
        const billAmount = Number(billTotalInput.value);
        const tipPercent = Number(tipInput.value);
        const numberPattern = /^[0-9]+$/;
        const inputValue = billTotalInput.value;
        tipPercentageInput.value = tipPercent;
        const tipValue = (billAmount * tipPercent) / 100;
        const totalBillWithTip = billAmount + tipValue;
        if (numberPattern.test(inputValue) || inputValue == "") {
            tipAmountDisplay.value = tipValue.toFixed(2);
        totalBillWithTipDisplay.value = totalBillWithTip.toFixed(2);
        }else {
            totalBillWithTipDisplay.value= "";
            tipAmountDisplay.value="";
        }
    });

    billTotalInput.addEventListener("input", function () {
        const numberPattern = /^[0-9]+$/;
        const inputValue = billTotalInput.value;
        if (numberPattern.test(inputValue) || inputValue == "") {
            errorText.textContent = "";
            errorText.style.display = "none";
        } else {
            errorText.textContent = "Please enter a valid number.";
            errorText.style.color = "red";
        errorText.style.fontSize = "14px";
        errorText.style.marginTop = "5px";
        errorText.style.display = "block";
        totalBillWithTipDisplay.value= "";
        tipAmountDisplay.value="";
        }
    });
});

   

