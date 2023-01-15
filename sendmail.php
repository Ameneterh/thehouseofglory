<?php
if (isset($_POST['submit'])){
  $to = "ameneterh@gmail.com";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $number = $_POST['contact-number'];
  $office = $_POST['office'];
  $message = $_POST['message'];
  $subject = "Contact Form Details";
  $header = "From:" . $from;
  $result = mail($to, $subject, $message, $header);

  if ($result) {
    echo '<script type="text/javascript">alert("Your message was sent successfully!");</script>';
    echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
  }
  else {
    echo '<script type="text/javascript">alert("Sorry! Message was NOT sent!");</script>';
    echo '<script type="text/javascript">window.location.href = window.location.href;</script>';
  }
}
?>