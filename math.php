<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $value1 = $_POST['value1'];
  $value2 = $_POST['value2'];
  $operation = $_POST['operation'];

  switch ($operation) {
    case 'add':
      $result = $value1 + $value2;
      break;
    case 'subtract':
      $result = $value1 - $value2;
      break;
    case 'multiply':
      $result = $value1 * $value2;
      break;
    case 'divide':
      $result = $value1 / $value2;
      break;
    default:
      $result = "Invalid operation";
  }

  echo "Result: " . $result;
}
?>
