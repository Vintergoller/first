<?php
    // Start with PHPMailer class
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require_once 'phpmailer/src/Exception.php';
    require_once 'phpmailer/src/PHPMailer.php';
    // create a new object
    $mail = new PHPMailer(true);
    // configure an SMTP
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isSMTP();

    $mail->setFrom('2330044@gmail.com', 'Дом IQ');
    $mail->addAddress('n.felix2003@gmail.com', 'Me');
    $mail->Subject = 'Заявка на истоляцию';
    // Set HTML 
    
    $body = '<h1>Новый заказ!</h`>';

    $body.='<p><strong>Имя: </strong> '.$_POST['name'].'</p>';
    $body.='<p><strong>Имя: </strong> '.$_POST['nameCompany'].'</p>';
    $body.='<p><strong>Имя: </strong> '.$_POST['nameNumb'].'</p>';

    $mail->Body =$body

    // send the message
    if(!$mail->send()){
        echo 'Сообщение не может быть отправленно.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>