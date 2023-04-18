<?php
$input = $_POST['input'];
$condition = $_POST['condition'];
$value = $_POST['value'];

if ($condition == 'greater') {
  echo "if ($input > $value) {\n";
  echo "  // Code to execute if $input is greater than $value\n";
  echo "} else {\n";
  echo "  // Code to execute if $input is less than or equal to $value\n";
  echo "}";
} elseif ($condition == 'less') {
  echo "if ($input < $value) {\n";
  echo "  // Code to execute if $input is less than $value\n";
  echo "} else {\n";
  echo "  // Code to execute if $input is greater than or equal to $value\n";
  echo "}";
} else {
  echo "if ($input == $value) {\n";
  echo "  // Code to execute if $input is equal to $value\n";
  echo "} else {\n";
  echo "  // Code to execute if $input is not equal to $value\n";
  echo "}";
}
?>
