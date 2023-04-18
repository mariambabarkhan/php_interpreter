<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $initializer = $_POST['initializer'];
  $value = $_POST['value'];
  $times = $_POST['times'];
  $increment = $_POST['increment'];
  $loopcontent = $_POST['loopcontent'];

  for ($i = $value; $i <= $times; $i += $increment) {
    echo str_replace($initializer, $i, $loopcontent);
  }
}
?>
