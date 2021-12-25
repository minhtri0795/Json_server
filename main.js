const API = "http://localhost:3000/courses";
let button = document.querySelector(".button");
// get Courses
function getCourses() {
  fetch(API)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      renderUI(data);
    });
}
getCourses();
// render UI
function renderUI(courses) {
  let coursesData = courses.map((course) => {
    return `
      <li>
        <h2>${course.name}</h2>
        <p>${course.decs}</p>
      </li>`;
  });
  let html = coursesData.join("");
  let coursesList = document.querySelector(".courser-list");
  coursesList.innerHTML = html;
}

// Add new course
let addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", function (event) {
  var courseName = document.querySelector("#course-name");
  var courseDesc = document.querySelector("#course-desc");
  let courseData = {
    name: courseName.value,
    decs: courseDesc.value,
  };
  event.preventDefault();
  addCourse(API, courseData);
});
function addCourse(url, courseData) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(courseData),
  }).then(function () {
    getCourses();

    courseName.value = "";
  });
}
