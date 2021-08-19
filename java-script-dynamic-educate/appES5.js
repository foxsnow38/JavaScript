




function Course(title, instructor, image) {
    this.courseid = Math
        .floor(Math.random() * 10000);
    this.title = title;
    this.instructor = instructor;
    this.image = image;

}

//console.log(UI.addCouseToList.html);

var form = document.getElementById("new-course").addEventListener("submit", function (e) {
    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;



    const course = new Course(title, instructor, image);
    console.log(course);

    const ui = new UI();


    if (title == "" || instructor == "" || image == "") {
        ui.showAlert("Plase Complete the Form", "warning");


    } else {

        ui.addCouseToList(course);
        ui.clearControls();
        ui.showAlert("The Course Has Been Added", "success")
        Storage.setCourse(course);
    }

    e.preventDefault();


})
function UI() {

}
UI.prototype.addCouseToList = function (course) {

    var list = document.getElementById("course-list")

    var html =
        ` 
 <tr>
<td> <img src ="${course.image}"/></td>
<td>${course.title}</td>
<td>${course.instructor}</td>
<td><a href="#" data-id="${course.courseid}" class="btn btn-danger btn-sm delete">DELETE</a></td>
 </tr>
 `;
    list.innerHTML += html;

}


UI.prototype.clearControls = function () {

    const title = document.getElementById("title").value = "";
    const instructor = document.getElementById("instructor").value = "";
    const image = document.getElementById("image").value = "";
}

UI.prototype.deleteCourse = function (a) {
    if (a.classList.contains("delete")) {
        a.parentElement.parentElement.remove();

    }
}
UI.prototype.showAlert = function (message, color) {

    var alert = ` <div class="alert alert-${color}">
${message}
    </div>
    `;
    const row = document.querySelector(".row");
    row.insertAdjacentHTML("beforebegin", alert);
    setTimeout(() => {
        document.querySelectorAll(".alert").remove();

    }, 3000);
}

document.getElementById("course-list").addEventListener("click", function (e) {
    const ui = new UI();
    ui.deleteCourse(e.target);
    Storage.deleteCourse(e.target);
    ui.showAlert("The Course Has Been Deleted", "danger")
})

class Storage {
    static getCourses() {
        let courses;
        if (localStorage.getItem("courses") === null) {
            courses = [];
        }
        else { courses = JSON.parse(localStorage.getItem("courses")) }
        return courses;
    }
    static displayCourse() {
        const courses = Storage.getCourses();
        courses.forEach(courses => {
            const ui = new UI();

            ui.addCouseToList(courses);

        });
    }
    static setCourse(courseset) {
        const courses = Storage.getCourses();
        courses.push(courseset);
        localStorage.setItem("courses", JSON.stringify(courses));
    }
    static deleteCourse(coursedelete) {
        if (coursedelete.classList.contains("delete")) {
            const id = coursedelete.getAttribute("data-id");
let index =0;
            const courses = Storage.getCourses();
     
           courses.forEach((course,index) => {if (course.courseid ==id){
               courses.splice(index,1);

           }
               
           localStorage.setItem("courses",JSON.stringify(courses))
           });
            // courses.forEach((course, index) => {
            //     if (parseInt(course.courseid) === id) {
            //         course.splice(index, 1)
            //     }

            localStorage.setItem("courses", JSON.stringify(courses));
        };
        

    }
}


document.addEventListener("DomContentLoaded", Storage.displayCourse());
console.log(document)
