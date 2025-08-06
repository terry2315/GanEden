//Variables
const mainCourses = document.querySelector('#main__content--courses');
const btnSubject = document.querySelectorAll('.btn__subject');







renderCoursesMain();
function renderCoursesMain() {
    user.forEach(user => {
        user.myCourses.forEach(myCourses => {
            const {subject, tittle, duration, price, poster, author} = myCourses;
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
                        <li class="course__list--right">${tittle}</li>
                        <li class="course__list--right">${duration}</li>
                        <li class="course__list--right">${author}</li>
                    </ul>
                </div>
            `;
            mainCourses.append(courseMain);
        });
    });
}











