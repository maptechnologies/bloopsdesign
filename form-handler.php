<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {


    // Data
    $full_name      = $_POST['name'];
    $email_add      = $_POST['email'];
    $phone_no       = $_POST['phone'];
    $message_txt    = $_POST['message'];
    $to             = 'info@bloopsdesign.com';
    

    // echo "<pre>";
    // echo $full_name;
    // echo "<br>";

    // echo $email_add;
    // echo "<br>";
    // echo $phone_no;
    // echo "<br>";
    // echo $message_txt;

    // exit;

    // Email Settings
    $headers = '';
    $message = '';
    $subject = '';

    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "From: Bloops Design <info@bloopsdesign.com>\r\n";
    $headers .= "Reply-To: Bloops Design <info@bloopsdesign.com>\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Bcc: info@bloopsdesign.com\r\n"; #Admin Email

    $subject = 'New Submission - Lead Form';

    $message .= '<html><head>';
    $message .= '<title>Thank you for purchasing the Bloops Design</title>';
    $message .= '</head><body style="background:#ffffff; font-family:sans-serif; font-size:14px;"><div class="page-wrapper">';

    // Logo
    $message .= '<div class="header" style="text-align:center; background-color:rgba(76,76,76,1); padding:10px; border-radius: 40px;">
                    <a href="#"><img src="https://bloopsdesign.com/images/logof_new.png" width="35%"/></a>
                </div>';

    // Line
    $message .= '<hr style="border:2px solid #999; margin-bottom:30px" />';


    $message .= '<div class="body"><div class="body-content"><b>Customer Name: </b> ' . $full_name .'</div>';
    $message .= '<div class="body"><div class="body-content"><b>Customer Email: </b> ' . $email_add .'</div>';
    $message .= '<div class="body"><div class="body-content"><b>Customer Phone: </b> ' . $phone_no .'</div>';
    $message .= '<div class="body"><div class="body-content"><b>Message: </b> ' . $message_txt .'</div>';



    $message .= '</div>';
    $message .= '</div></div></body></html>';

    mail($to, $subject, $message, $headers);

      // Redirect the user to a thank you page
      header('Location: thank_you.php');
      exit;
}
?>

