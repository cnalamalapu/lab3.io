document.addEventListener('DOMContentLoaded', function() {
    const mainForm = document.getElementById('mainForm');
    const billTotalInput = document.getElementById('billTotal');
    const tipInput = document.getElementById('tipInput');
    const tipPercentageInput = document.querySelector('.tip_percentage_input');
    const tipAmountDisplay = document.getElementById('tipAmount');
    const totalBillWithTipDisplay = document.getElementById('totalBillWithTip');

    mainForm.addEventListener('change', function() {
        const billAmount = Number(billTotalInput.value);
        const tipPercent = Number(tipInput.value);

        tipPercentageInput.value = tipPercent;
        const tipValue = (billAmount * tipPercent) / 100;
        const totalBillWithTip = billAmount + tipValue;

        tipAmountDisplay.value = tipValue.toFixed(2);
        totalBillWithTipDisplay.value = totalBillWithTip.toFixed(2);
    });
});
