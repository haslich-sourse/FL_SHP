// Получаем элементы
const orderFormContainer = document.getElementById('order-form-container');
const orderNowBtn = document.getElementById('order-now-btn');
const closeFormBtn = document.getElementById('close-form');

// Показ формы при клике на кнопку
orderNowBtn.addEventListener('click', function() {
    orderFormContainer.style.display = 'flex';
});

// Закрытие формы при клике на "Закрыть"
closeFormBtn.addEventListener('click', function() {
    orderFormContainer.style.display = 'none';
});

document.querySelector('.order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    // Собираем данные формы
    const formData = new FormData(this);

    // Отправляем запрос на сервер с помощью fetch
    fetch('order.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Ваш заказ успешно отправлен!'); // Уведомляем пользователя
        orderFormContainer.style.display = 'none'; // Закрываем форму
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке заказа. Попробуйте еще раз.');
    });
});
