<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $filename = $_POST['filename'];
  $message = $_POST['message'];

  $file = fopen($filename, 'w');
  fwrite($file, $message);
  fclose($file);

  echo "Message written to file.";
}
?>
