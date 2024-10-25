<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $address = htmlspecialchars(trim($_POST['address']));
    $orderDetails = htmlspecialchars(trim($_POST['order-details']));

    // Проверка на заполненность полей
    if (empty($name) || empty($phone) || empty($address)) {
        echo "Пожалуйста, заполните все обязательные поля.";
        exit;
    }

    // Формирование сообщения
    $message = "Новый заказ:\n\n";
    $message .= "Имя: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Адрес: $address\n";
    $message .= "Детали заказа: $orderDetails\n";

    // Заголовки письма
    $to = "your-email@example.com"; // Здесь нужно указать реальный адрес почты
    $subject = "Новый заказ от $name";
    $headers = "From: no-reply@flower-shop.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Ваш заказ успешно отправлен!";
    } else {
        echo "Ошибка при отправке заказа. Пожалуйста, попробуйте позже.";
    }
} else {
    echo "Некорректный метод запроса.";
}
?>
