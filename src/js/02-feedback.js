import throttle from 'lodash.throttle';
// import '../css/common.css';
// import '../css/feedback-form.css';

const formData = {};

const refs = {
    form: document.querySelector('.js-feedback-form'),
    textarea: document.querySelector('.js-feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));

refs.form.addEventListener('input', e => {      // делегирование
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    console.log(formData);
    // стринги и парс (для того чтоб сохранялось не только сообщение, но и имя, и все в одном обьекте)
})

populateTextarea();

/* Останавливаем поведение по умолчанию
Убираем сообщение из хранилища
Очищаем форму */
function onFormSubmit(evt) {
    evt.preventDefault();
    console.log('Отправляем форму');

    evt.currentTarget.reset();

    localStorage.removeItem('feedback-message');
}

/* Получаем значение поля
Сохраняем его в хранилище */
function onTextareaInput(evt) {
    const message = evt.target.value;
    localStorage.setItem('feedback-message', message);
}

/* Получаем значение из хранилища
Если что-то там было, оновляем DOM */
function populateTextarea() {
    const savedMessage = localStorage.getItem('feedback-message');
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
}











