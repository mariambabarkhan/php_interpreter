<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $filename = $_POST['filename'];

  $content = file_get_contents($filename);

  echo nl2br(htmlspecialchars($content));
}
?>
