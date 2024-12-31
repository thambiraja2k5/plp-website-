document.getElementById('calculate').addEventListener('click', function() {
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const annualReturn = parseFloat(document.getElementById('sp-returns').value) / 100; // Get value from dropdown
    const years = parseInt(document.getElementById('duration').value);

    if (isNaN(monthlyInvestment) || isNaN(annualReturn) || isNaN(years)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    const months = years * 12;
    const monthlyRate = annualReturn / 12;

    let maturityAmount = 0;
    for (let i = 1; i <= months; i++) {
        maturityAmount = (maturityAmount + monthlyInvestment) * (1 + monthlyRate);
    }

    const totalInvested = monthlyInvestment * months; // Actual amount invested
    const netProfit = maturityAmount - totalInvested; // Net profits

    // Display results
    document.getElementById('result').innerText = `Maturity Amount: S$${maturityAmount.toFixed(2)}`;
    document.getElementById('invested-amount').innerText = `Total Invested: S$${totalInvested.toFixed(2)}`;
    document.getElementById('net-profit').innerText = `Net Profit: S$${netProfit.toFixed(2)}`;
});
