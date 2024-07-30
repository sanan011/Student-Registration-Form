document.getElementById("registration_form").onsubmit = function(event) {
  event.preventDefault();

  let userFirstName = document.getElementById("first_name").value;
  let userLastName = document.getElementById("last_name").value;
  let userEmail = document.getElementById("email").value;
  let userSubject = document.getElementById("subject").value;
  let userYearOfStudy = document.getElementById("year_of_study").value;
  let userUniversity = document.getElementById("university").value;

  let newRow = `
    <tr>
      <td>${userFirstName} ${userLastName}</td>
      <td>${userEmail}</td>
      <td>${userSubject}</td>
      <td>${userYearOfStudy}</td>
      <td>${userUniversity}</td>
    </tr>`;

  document.querySelector("#students_table tbody").innerHTML += newRow;
  document.getElementById("students_table").classList.remove("hidden");
  document.getElementById("students_table").classList.add("visible");
}
