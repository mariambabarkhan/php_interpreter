<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $message = $_POST['message'];

  echo "Your message is: " . $message;
}
?>