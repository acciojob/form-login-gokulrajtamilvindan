function getFormvalue(event) {
    // Prevent form submission
    event.preventDefault();
    
    // Get input values using querySelector
    const firstName = document.querySelector('input[name="fname"]').value.trim();
    const lastName = document.querySelector('input[name="lname"]').value.trim();
    
    // Validate inputs
    if (!firstName || !lastName) {
        alert("Please fill in both first name and last name");
        return;
    }
    
    // Display full name
    alert(`${firstName} ${lastName}`);
}