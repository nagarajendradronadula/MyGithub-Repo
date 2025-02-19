document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('investment-form');
    const portfolioTableBody = document.querySelector('#portfolio-table tbody');
    const totalValueEl = document.getElementById('total-value');
    let investments = [];
    
    // Function to Add New Investment
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const assetName = document.getElementById('asset-name').value;
        const amountInvested = parseFloat(document.getElementById('amount-invested').value);
        const currentValue = parseFloat(document.getElementById('current-value').value);
        
        const investment = {
            id: Date.now(),
            assetName,
            amountInvested,
            currentValue,
            percentageChange: ((currentValue - amountInvested) / amountInvested) * 100
        };
        
        investments.push(investment);
        renderInvestments();
        form.reset();
    });
    
    // Function to Render Investments
    function renderInvestments() {
        portfolioTableBody.innerHTML = '';
        let totalValue = 0;
        
        investments.forEach(investment => {
            const row = document.createElement('tr');
            
            row.innerHTML = `
                <td>${investment.assetName}</td>
                <td>$${investment.amountInvested.toFixed(2)}</td>
                <td>$${investment.currentValue.toFixed(2)}</td>
                <td>${investment.percentageChange.toFixed(2)}%</td>
                <td>
                    <button onclick="updateInvestment(${investment.id})">Update</button>
                    <button onclick="removeInvestment(${investment.id})">Remove</button>
                </td>
            `;
            
            portfolioTableBody.appendChild(row);
            totalValue += investment.currentValue;
        });
        
        totalValueEl.textContent = `$${totalValue.toFixed(2)}`;
        updateChart();
    }
    
    // Function to Remove Investment
    window.removeInvestment = function (id) {
        investments = investments.filter(investment => investment.id !== id);
        renderInvestments();
    }
    
    // Function to Update Investment (Prompt-based for simplicity)
    window.updateInvestment = function (id) {
        const investment = investments.find(inv => inv.id === id);
        const newValue = parseFloat(prompt('Enter new current value:', investment.currentValue));
        
        if (!isNaN(newValue) && newValue > 0) {
            investment.currentValue = newValue;
            investment.percentageChange = ((newValue - investment.amountInvested) / investment.amountInvested) * 100;
            renderInvestments();
        }
    }
});
