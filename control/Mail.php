<?php
require __DIR__ . "/../configuracion.php";

class Mail
{
    public function mail($data)
    {
        $resp = false;
        $name = $data['name'];
        $lastname = $data['lastname'];
        $email = $data['email'];
        $message = $data['textarea'];
        $subject = $data['subject'];

        $mailer = new MailControl();
        if ($mailer->sendMail($email, $name, $lastname, $subject, $message)) {
            $resp = true;
        }
        return $resp;
    }
}
