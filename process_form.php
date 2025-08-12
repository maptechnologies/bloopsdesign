<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    // Create a timestamp
    $timestamp = date('Y-m-d H:i:s');

    // Compose the data to be saved
    $data = "Timestamp: $timestamp\n";
    $data .= "Name: $name\n";
    $data .= "Phone: $phone\n";
    $data .= "Email: $email\n";
    $data .= "--------------------------\n"; // Separator for entries

    // Path to the backup file for the second form
    $backupFile = 'second_form_submissions_backup.txt';

    // Append the data to the backup file
    file_put_contents($backupFile, $data, FILE_APPEND);

    // Send the email
    $to = 'info@bloopsdesign.com';
    $subject = 'Form Submission';
    $message = "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $headers = 'From: info@bloopsdesign.com' . "\r\n" .
        'Reply-To: info@bloopsdesign.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    // Redirect the user to a thank you page
    header('Location: thank_you.php');
    exit;
}
?>
