<?php
require __DIR__ . '/../configuracion.php';
require __DIR__ . '/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Cargar las variables desde el archivo .env
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

class MailControl
{
    public function sendMail($email, $name, $lastname, $subject, $message)
    {
        $mail = new PHPMailer(true);
        $resp = false;
        try {
            $mail->isSMTP();
            $mail->Host       = $_ENV['SMTP_HOST'];
            $mail->SMTPAuth = true;
            $mail->Username   = $_ENV['SMTP_USERNAME'];
            $mail->Password   = $_ENV['SMTP_PASSWORD'];
            $mail->Port       = $_ENV['SMTP_PORT'];
            $mail->SMTPSecure = $_ENV['SMTP_SECURE'];

            $mail->Port = 465;

            $mail->setFrom($email, "$name $lastname");
            $mail->addAddress('russoflorencia96@gmail.com', 'Florencia');

            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = nl2br(htmlspecialchars($message));

            $mail->send();
            $resp = true;
        } catch (Exception $e) {
            error_log("Error al enviar el mail: {$e->getMessage()}");
        }
        return $resp;
    }
}
