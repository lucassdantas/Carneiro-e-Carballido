<?php
header("Access-Control-Allow-Origin: http://localhost:5173"); 
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $data = json_decode(file_get_contents('php://input'), true);

    if (!empty($data['nome']) && !empty($data['telefone']) && !empty($data['email']) && !empty($data['subject']) && !empty($data['message'])) {
        $nome = htmlspecialchars($data['nome']);
        $telefone = htmlspecialchars($data['telefone']);
        $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
        $subject = htmlspecialchars($data['subject']);
        $message = htmlspecialchars($data['message']);

        if ($email) {
            $mail = new PHPMailer(true);

            try {

                $mail->isSMTP();
                $mail->Host       = 'smtp.gmail.com'; 
                $mail->SMTPAuth   = true;
                $mail->Username   = 'email'; 
                $mail->Password   = 'senha'; 
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                $mail->Port       = 587; 

                
                $mail->setFrom('email do remetente', 'Ciclano');
                $mail->addAddress('email do destinatário', 'Fulano'); 

                
                $mail->isHTML(true); 
                $mail->Subject = $subject . $nome;
                $mail->Body    = "
                    <p><strong>Nova mensagem!</strong></p>
                    <p><strong>Nome:</strong> $nome</p>
                    <p><strong>Telefone:</strong> $telefone</p>
                    <p><strong>Email:</strong> $email</p>
                    <p><strong>Mensagem:</strong> $message</p>
                ";

                
                $mail->send();
                echo json_encode(['message' => 'E-mail enviado com sucesso!']);
            } catch (Exception $e) {
                echo json_encode(['message' => 'Erro ao enviar o e-mail: ' . $mail->ErrorInfo]);
            }
        } else {
            echo json_encode(['message' => 'Email inválido.']);
        }
    } else {
        echo json_encode(['message' => 'Preencha todos os campos.']);
    }
} else {
    echo json_encode(['message' => 'Método inválido.']);
}
?>
