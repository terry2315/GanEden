//Variables
const mainCourses = document.querySelector('#main__content--courses');
const btnSubject = document.querySelectorAll('.btn__subject');


eventListener();

function eventListener() {
    renderCoursesMain();

    mainCourses.addEventListener('click', getDataCourse);

}


//Rederizar cursos en el menu principal
function renderCoursesMain() {
    user.forEach(user => {
        user.myCourses.forEach(myCourses => {
            const {subject, tittle, duration, poster, author, id, description} = myCourses;
            const courseMain = document.createElement('article');
            courseMain.classList.add('course');
            courseMain.innerHTML += `
                <div class="course__content--img">
                    <img class="course__img" src="${poster}" alt="">
                </div>
                <div class="course__content--description">
                    <ul class="course__description--left">
                        <li class="course__list--left">Materia :</li>
                        <li class="course__list--left">Titulo :</li>
                        <li class="course__list--left">Duracion :</li>
                        <li class="course__list--left">Profesor :</li>
                    </ul>
                    <ul class="course__description--right">
                        <li class="course__list--right">${subject}</li>
                        <li class="course__list--right"><h4>${tittle}</h4></li>
                        <li class="course__list--right">${duration}</li>
                        <li class="course__list--right">${author}</li>
                    </ul>
                </div>
                <div class="course__content--btn">
                    <button data-id="${id}" class="course__btn">Ver mas</button>   
                </div>
            `;
            mainCourses.append(courseMain);
        });
    });
}

//Obtener los datos del course para mostrarlos en el modal para visualizar description mas completa

function getDataCourse(e) {

    if (e.target.classList.contains('course__btn')) {
        const elementHTML = e.target.parentElement.parentElement;
        selectData(elementHTML);
    }

}




function selectData(course) {
    
    const courseObj = { 
        id: course.querySelector('button').getAttribute('data-id')
    }
    
    const courseId = courseObj.id;
    console.log(courseId)


}

















