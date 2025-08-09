//Variables
const mainCourses = document.querySelector('#main__content--courses');
const btnSubject = document.querySelectorAll('.btn__subject');
//Modal
const modalDescription = document.querySelector('.modal__background');
const closeModal = document.querySelector('.modal__background');
const contentModalDescription = document.querySelector('#modal__background');

let arrayDescription = [];


eventListener();
//Crear escuchador de eventos
function eventListener() {
    renderCoursesMain();
    mainCourses.addEventListener('click', getDataCourse);
    //Boton para cerrar Modal
    closeModal.addEventListener('click', eliminarProducto)
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
//Obtener los datos del course y mostrarlos en el modal para visualizar description mas completa.
function getDataCourse(e) {
    if (e.target.classList.contains('course__btn')) {
        const elementHTML = e.target.parentElement;
        modalDescription.classList.add('modal__background--active');
        selectData(elementHTML);
    }
}
//Seleccionar datos del curso
function selectData(course) {
    const courseObj = {
        id: course.querySelector('button').getAttribute('data-id'),
    }
    const courseId = courseObj.id;
    const findCourse = courses.find(course => course.id === courseId);
    arrayDescription.push(findCourse);
    renderModalDescription();
}

//Renderizar Objeto en el modal
function renderModalDescription() {
    arrayDescription.forEach(array => {
        const { subject, tittle, description, duration, price, poster, author, id } = array;
        const modalDescription = document.createElement('section');
        modalDescription.classList.add('modal__content');
        modalDescription.innerHTML += `
            
                    <header class="modal__header">

                        <div class="navbar__content--logo">
                            <a href="#" class="navbar__content--letter">
                                <span class="logo__span">G</span>
                                <p class="logo__text">anEden</p>
                            </a>
                        </div>

                        <div class="modal__header--content">
                            <button data-id="${id}" class="modal__btn--close">X</button>
                        </div>
                    </header>

                    <main id="modal__main" class="modal__main">

                        <section id="modal__content--description" class="modal__content--description">
                              <div class="modal__content--top">
                                <article class="modal__top--left">
                                    <h4 class="modal__tittle">${tittle}</h4>
                                    <p class="modal__description--text">
                                        ${description}
                                    </p>
                                    <div class="modal__content--price">
                                        <p class="modal__price--text">$ ${price} USD</p>
                                        <button data-id="${id}" class="modal__price--btn">Ver medio de pago</button>
                                    </div>
                                </article>
                                <article class="modal__top--middle">
                                    <div class="modal__content--img">
                                        <img class="modal__img" src="${poster}" alt="${tittle}">
                                    </div>
                                </article>
                                <article class="modal__top--right">
                                    <ul class="modal__content--right">
                                        <li class="modal__list--right">
                                            <i class="fa-solid fa-check"></i>
                                            <p class="modal__text--right">Clases en vivo</p>
                                        </li>
                                        <li class="modal__list--right">
                                            <i class="fa-solid fa-check"></i>
                                            <p class="modal__text--right">Acceso contenido 24/7</p>
                                        </li>
                                        <li class="modal__list--right">
                                            <i class="fa-solid fa-check"></i>
                                            <p class="modal__text--right">Contacto directo con tu mentor</p>
                                        </li>
                                        <li class="modal__list--right">
                                            <i class="fa-solid fa-check"></i>
                                            <p class="modal__text--right">Como vivir con contante extasis</p>
                                        </li>
                                    </ul>
                                </article>
                            </div>
                            <div class="modal__content--botton">
                                <ul class="modal__botton">
                                    <li class="modal__list--botton">
                                        <i class="fa-solid fa-calendar"></i>
                                        <p class="modal__botton--text">Duracion</p>
                                        <p class="modal__botton--text">${duration}</p>
                                    </li>
                                    <li class="modal__list--botton">
                                        <i class="fa-solid fa-clock"></i>
                                        <p class="modal__botton--text">Duracion</p>
                                        <p class="modal__botton--text">${subject}</p>
                                    </li>
                                    <li class="modal__list--botton">
                                        <i class="fa-brands fa-youtube"></i>
                                        <p class="modal__botton--text">Duracion</p>
                                        <p class="modal__botton--text">${author}</p>
                                    </li>
                                    <li class="modal__list--botton">
                                        <i class="fa-solid fa-hard-drive"></i>
                                        <p class="modal__botton--text">Duracion</p>
                                        <p class="modal__botton--text">${subject}</p>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </main>
            
        `;
        contentModalDescription.appendChild(modalDescription);
    });
}

function eliminarProducto (e) {
    if (e.target.classList.contains('modal__btn--close')) {
        const courseId = e.target.getAttribute('data-id');
        //Eliminar del arreglo por el data-id
        arrayDescription = arrayDescription.filter(course => course.id !== courseId);
        modalDescription.classList.remove('modal__background--active');
    }
}








