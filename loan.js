document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;
    var loanAmount = document.getElementById('loanAmount').value;
    var loanType = document.getElementById('loanType').value;
    var employmentStatus = document.getElementById('employmentStatus').value;

    if (name === '' || email === '' || mobileNumber === '' || loanAmount === '' || loanType === '' || employmentStatus === '') {
        alert('Please fill out all fields in the Loan Application Form.');
        return false;
    }

    alert('Loan Application Form submitted successfully!');
    this.reset();
});
