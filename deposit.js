document.getElementById('depositForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var accountNumber = document.getElementById('accountNumber').value;
    var depositAmount = document.getElementById('depositAmount').value;
    var depositType = document.getElementById('depositType').value;

    if (accountNumber === '' || depositAmount === '' || depositType === '') {
        alert('Please fill out all fields in the Deposit Form.');
        return false;
    }

    alert('Deposit Form submitted successfully!');
    this.reset();
});
