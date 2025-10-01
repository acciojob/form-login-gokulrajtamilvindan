document.getElementById("form1").addEventListener("submit", getFormvalue);

function getFormvalue(event) {
  event.preventDefault(); // prevent page reload

  let firstName = document.forms["form1"]["fname"].value.trim();
  let lastName = document.forms["form1"]["lname"].value.trim();

  let fullName = firstName + " " + lastName;

  alert(fullName);
}
