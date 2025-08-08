//Variables
const mainCourses = document.querySelector('#main__content--courses');
const btnSubject = document.querySelectorAll('.btn__subject');

//Modal

const modalDescription = document.querySelector('.modal__background');
const closeModal = document.querySelector('.modal__btn--close');

const contentModalDescription = document.querySelector('#modal__main');






eventListener();

function eventListener() {
    renderCoursesMain();

    mainCourses.addEventListener('click', getDataCourse);

    closeModal.addEventListener('click', (e) => {
        e.preventDefault();
        modalDescription.classList.remove('modal__background--active');
    });

}


//Rederizar cursos en el menu principal
function renderCoursesMain() {
    courses.forEach(course => {
        const { subject, tittle, duration, price, author, id, poster } = course;
        const courseMain = document.createElement('article');
        courseMain.classList.add('course');
        courseMain.innerHTML = `
            <div class="course__content--img">
                <img class="course__img" src="${poster}" alt="${tittle}">
            </div>
            <div class="course__content--description">
                <ul class="course__description--left">
                    <li class="course__list--left">Materia :</li>
                    <li class="course__list--left">Titulo :</li>
                    <li class="course__list--left">Duracion :</li>
                    <li class="course__list--left">Precio :</li>
                    <li class="course__list--left">Profesor :</li>
                </ul>
                <ul class="course__description--right">
                    <li class="course__list--right">${subject}</li>
                    <li class="course__list--right">${tittle}</li>
                    <li class="course__list--right">${duration}  horas</li>
                    <li class="course__list--right">$ ${price}</li>
                    <li class="course__list--right">${author}</li>
                </ul>
            </div>
            <div class="course__content--btn">
               <button data-id="${id}" class="course__btn">Ver mas</button>   
            </div>
        `;
        mainCourses.appendChild(courseMain);
    });
}


//Obtener los datos del course para mostrarlos en el modal para visualizar description mas completa

function getDataCourse(e) {
    if (e.target.classList.contains('course__btn')) {
        const elementHTML = e.target.parentElement;
        modalDescription.classList.add('modal__background--active');
        selectData(elementHTML);
    }
}

function selectData(course) {
    const courseObj = {
        id: course.querySelector('button').getAttribute('data-id'),
    }
    const courseId = courseObj.id;
    const findCourse = courses.find(course => course.id === courseId);
    renderDescriptionCourse(findCourse);
    console.log(findCourse)
}

function renderDescriptionCourse(data) {
    data.forEach(data => {
        console.log(data)
        const {subject, tittle, descriprion, duracion, price, poster, author, id} = data;
        const courseDescription = document.createElement('div');
        courseDescription.classList.add('modal__layout');
        courseDescription.innerHTML = `
             <section class="modal__main--top">
                                <article class="modal__content--left">
                                    <div class="modal__content--tittle">
                                        <h3 class="modal__tittle">${tittle}</h3>
                                        <p class="modal__description">
                                            ${descriprion}
                                        </p>
                                    </div>

                                    <ul class="modal__content--price">
                                        <li class="modal__price">
                                            <i class="modal__dollar--icon fa-solid fa-dollar-sign"></i>
                                            <span class="modal__price--span">${price}</span>
                                            <p class="modal__price--currency">USD</p>
                                        </li>
                                        <button class="modal__btn--methodPay">Ver metodo de pago</button>
                                    </ul>

                                    <div class="modal__content--btnGet">
                                        <button data-id="${id}" class="btn__Get">Comprar</button>
                                    </div>

                                </article>

                                <article class="modal__content--middle">
                                    <div class="modal__content--img">
                                        <img class="${poster}" alt="${tittle}">
                                    </div>
                                </article>

                                <article class="modal__content--right">
                                    <ul class="modal__content--info">
                                        <li class="modal__list--info">
                                            <i class="fa-solid fa-check"></i>
                                            <p class="modal__info--text">Clases online con mentores expertos</p>
                                        </li>

                                        <li class="modal__list--info">
                                            <i class="fa-solid fa-check"></i>
                                            <p class="modal__info--text">Programa de empleavilidad y asesoria
                                                prefesional
                                            </p>
                                        </li>

                                        <li class="modal__list--info">
                                            <i class="fa-solid fa-check"></i>
                                            <p class="modal__info--text">Acceso a contenido pregrabado 24/7</p>
                                        </li>

                                        <li class="modal__list--info">
                                            <i class="fa-solid fa-check"></i>
                                            <p class="modal__info--text">Interactividad por chat y consejos o
                                                sujerencias
                                            </p>
                                        </li>
                                    </ul>
                                </article>
                            </section>

                            <section class="modal__content--botton">
                                <ul class="modal__content--list">
                                    <li class="modal__list--botton">
                                        <i class="modal__icon--spam fa-solid fa-calendar"></i>
                                        <p class="list__botton--text">Duracion</p>
                                        <p class="list__botton--text">${duracion}</p>
                                    </li>

                                    <li class="modal__list--botton">
                                        <i class="modal__icon--spam fa-solid fa-clock"></i>
                                        <p class="list__botton--text">Dedicacion</p>
                                        <p class="list__botton--text">${subject}</p>
                                    </li>

                                    <li class="modal__list--botton">
                                        <i class="modal__icon--spam fa-solid fa-youtube"></i>
                                        <p class="list__botton--text">Clases en vivo</p>
                                        <p class="list__botton--text">${author}</p>
                                    </li>

                                    <li class="modal__list--botton">
                                        <i class="modal__icon--spam fa-solid fa-ethernet"></i>
                                        <p class="list__botton--text">Disponibilidad</p>
                                        <p class="list__botton--text">${subject}</p>
                                    </li>
                                </ul>
                            </section>
        `;
        contentModalDescription.appendChild(courseDescription);
    });
}























