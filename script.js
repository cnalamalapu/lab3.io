document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#mainForm').onchange = function() {
        let billAmount = Number(document.getElementById('billTotal').value);
        let tipPercent = document.getElementById('tipInput').value;
        let tipPercentageDisplay = document.querySelector('.tip_percentage_input'); // Updated selector
        let tipAmountDisplay = document.querySelector('#tipAmount');
        let totalBillWithTipDisplay = document.querySelector('#totalBillWithTip');
        tipPercentageDisplay.value = tipPercent;
        let tipValue = billAmount * (tipPercent / 100);
        let totalBillWithTip = billAmount + tipValue;
        tipAmountDisplay.value = tipValue.toFixed(2);
        totalBillWithTipDisplay.value = totalBillWithTip.toFixed(2);
    };
});
