const contentCourses = document.querySelector('#main__content--courses');



renderCourses();
function renderCourses () {
    courses.forEach(course => {
        const {subject, tittle, duration, price, poster, author, id} = course;
        const itemCourse = document.createElement('article');
        itemCourse.classList.add('course');
        itemCourse.innerHTML += `
                   <div class="course__content--img">
                        <img class="course__img" src="${poster}" alt="">
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
                            <li class="course__list--right">${duration}</li>
                            <li class="course__list--right">${price}</li>
                            <li class="course__list--right">${author}</li>
                        </ul>
                    </div>
                    <div class="course__content--btn">
                       <button data-id="${id}" class="course__btn">Ver mas</button>   
                    </div>
        `;
        contentCourses.appendChild(itemCourse);
    });
}

//Modal

const openModal = document.querySelector('.modal__background');
const modalMain = document.querySelector('#main__content--courses');
const modalContentItem = document.querySelector('#modal__content--main');
const modalBtnClose = document.querySelector('#modal__content');
let arrayDescription = [];



modalMain.addEventListener('click', getDataElements);
modalBtnClose.addEventListener('click', closeModal);

function getDataElements(e) {
    if (e.target.classList.contains('course__btn')) {
        const dataHTML = e.target.parentElement.parentElement
        openModal.classList.add('modal__background--active');
        selectData(dataHTML);
    }
}

function selectData(data) {
    const courseObj = {
        id: data.querySelector('button').getAttribute('data-id'),
    }
    const courseId = courseObj.id;
    const courseFind = courses.find(course => course.id === courseId);
    arrayDescription = [];
    arrayDescription.push(courseFind);
    renderCourseDescription();
}

function renderCourseDescription() { 
    cleanModal()
    arrayDescription.forEach(array => {
        const {subject, tittle, description, duration, price, poster, author, id} = array;
        const itemDescription = document.createElement('section');
        itemDescription.classList.add('modal__itemDescription');
        itemDescription.innerHTML = `
                         <header class="modal__header">
                                <div class="navbar__content--logo">
                                    <a href="#" class="navbar__content--letter">
                                        <span class="logo__span">G</span>
                                        <p class="logo__text">anEden</p>
                                    </a>
                                </div>

                                <div class="modal__content--btn">
                                    <button data-id="${id}" class="modal__btn--close">
                                        <i class="modal__icon--close fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                            </header>

                            <section class="modal__content--description">

                                <!-- Contenedor izquierdo -->
                                <div class="modal__content--top">
                                    <div class="modal__description--left">
                                        <h2 class="modal__description--tittle">${tittle}</h2>
                                        <div class="modal__content--text">
                                            <p class="modal__text">
                                                ${description}
                                            </p>
                                        </div>

                                        <div class="modal__content--price">
                                            <p class="modal__price">
                                                <i class="fa-solid fa-dollar-sign"></i>
                                                <span class="modal__price--span">${price}</span> USD
                                            </p>
                                            <a class="modal__method--pay" href="#">Ver medios de pago</a>
                                        </div>

                                        <div class="modal__content--pay">
                                            <button class="modal__btn--pay">Comprar curso</button>
                                        </div>
                                    </div>

                                    <!-- Contenedor derecho -->

                                    <div class="modal__description--right">
                                        <div class="modal__content--img">
                                            <img class="modal__img" src="${poster}" alt="${tittle}">
                                        </div>

                                        <div class="modal__content--info">
                                            <ul class="modal__content--list">
                                                <li class="modal__list--info">
                                                    <i class="modal__icon--check fa-solid fa-circle-check"></i>
                                                    <p class="modal__list--text">Clases online en vivo con mentores expertos</p>
                                                </li>

                                                <li class="modal__list--info">
                                                    <i class="modal__icon--check fa-solid fa-circle-check"></i>
                                                    <p class="modal__list--text">Clases online en vivo con mentores expertos</p>
                                                </li>

                                                <li class="modal__list--info">
                                                    <i class="modal__icon--check fa-solid fa-circle-check"></i>
                                                    <p class="modal__list--text">Clases online en vivo con mentores expertos</p>
                                                </li>

                                                <li class="modal__list--info">
                                                    <i class="modal__icon--check fa-solid fa-circle-check"></i>
                                                    <p class="modal__list--text">Clases online en vivo con mentores expertos</p>
                                                </li>

                                                <li class="modal__list--info">
                                                    <i class="modal__icon--check fa-solid fa-circle-check"></i>
                                                    <p class="modal__list--text">Clases online en vivo con mentores expertos</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal__content--botton">
                                    <ul class="modal__content--list--botton">
                                        <li class="modal__list--botton">
                                            <i class="modal__icon--botton fa-brands fa-youtube"></i>
                                            <p class="modal__text--botton">Duracion</p>
                                            <p class="modal__text--botton">${duration}</p>
                                        </li>

                                        <li class="modal__list--botton">
                                            <i class="modal__icon--botton fa-brands fa-youtube"></i>
                                            <p class="modal__text--botton">Duracion</p>
                                            <p class="modal__text--botton">${author}</p>
                                        </li>

                                        <li class="modal__list--botton">
                                            <i class="modal__icon--botton fa-brands fa-youtube"></i>
                                            <p class="modal__text--botton">Duracion</p>
                                            <p class="modal__text--botton">${subject}</p>
                                        </li>

                                        <li class="modal__list--botton">
                                            <i class="modal__icon--botton fa-brands fa-youtube"></i>
                                            <p class="modal__text--botton">Duracion</p>
                                            <p class="modal__text--botton">${price}</p>
                                        </li>

                                        <li class="modal__list--botton">
                                            <i class="modal__icon--botton fa-brands fa-youtube"></i>
                                            <p class="modal__text--botton">Duracion</p>
                                            <p class="modal__text--botton">${duration}</p>
                                        </li>
                                    </ul>
                                </div>
        `;
        modalContentItem.appendChild(itemDescription);
    });
}

function closeModal(e) {
    if (e.target.classList.contains('modal__icon--close')) {
        const courseId = e.target.getAttribute('data-id');
        arrayDescription = arrayDescription.filter(course => course.id !== courseId);
        console.log(arrayDescription)
        openModal.classList.remove('modal__background--active');
    }
}

function cleanModal() {
    while(modalContentItem.firstChild) {
        modalContentItem.removeChild(modalContentItem.firstChild)
    }
}















