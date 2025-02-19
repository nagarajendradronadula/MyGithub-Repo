// Form submission and validation
document.getElementById('claim-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const policyNumber = document.getElementById('policy-number').value;
    const description = document.getElementById('incident-description').value;
    const incidentDate = document.getElementById('incident-date').value;
    const message = document.getElementById('form-message');

    if (policyNumber && description && incidentDate) {
        // Simulate submission (could be replaced with AJAX calls)
        message.textContent = 'Claim submitted successfully!';
        message.style.color = 'green';

        // Clear the form
        document.getElementById('claim-form').reset();
    } else {
        message.textContent = 'Please fill out all required fields.';
        message.style.color = 'red';
    }
});

// Track Claim Status (dummy data)
const claims = [
    { id: '001', policyNumber: 'POL123', date: '2024-09-15', status: 'Pending' },
    { id: '002', policyNumber: 'POL456', date: '2024-09-16', status: 'Approved' }
];

const claimList = document.getElementById('claim-status-list');

function loadClaimStatus() {
    claims.forEach(claim => {
        const listItem = document.createElement('li');
        listItem.textContent = `Claim #${claim.id}: Policy ${claim.policyNumber}, Date: ${claim.date}, Status: ${claim.status}`;
        claimList.appendChild(listItem);
    });
}

loadClaimStatus();

// Knowledge Base Search
const knowledgeBase = [
    'How to submit a claim?',
    'What is the insurance policy?',
    'How do I track my claim?',
    'Documents required for submitting a claim',
    'Common questions about insurance policies'
];

const searchInput = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    knowledgeBase
        .filter(article => article.toLowerCase().includes(query))
        .forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            searchResults.appendChild(listItem);
        });
});
