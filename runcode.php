<?php

    //get the code from the frontend
    $code = $_POST['code'];

    echo eval($code);

?>