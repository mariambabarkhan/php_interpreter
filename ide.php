<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="ide.css">
    <title>PHP - IDE</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
</head>

<body>
    <div>
        <div id="components">
            <div class="component" id="variable" draggable="true" ondragstart="dragStart(event)">
                <span>Variables</span>
            </div>
            <div class="component" id="math" draggable="true" ondragstart="dragStart(event)">
                <span>Math</span>
            </div>
            <div class="component" id="function" draggable="true" ondragstart="dragStart(event)">
                <span>Functions</span>
            </div>
            <div class="component" id="loop" draggable="true" ondragstart="dragStart(event)">
                <span>Loops</span>
            </div>
            <div class="component" id="conditional" draggable="true" ondragstart="dragStart(event)">
                <span>Conditionals</span>
            </div>
            <div class="component" id="rfile" draggable="true" ondragstart="dragStart(event)">
                <span>Read from File</span>
            </div>
            <div class="component" id="wfile" draggable="true" ondragstart="dragStart(event)">
                <span>Write to File</span>
            </div>
        </div>

        <div id="programmable-area"> DRAG & DROP AREA
            <button id="run-button" class="button">Run</button>

            <button id="clear-button" class="button">Clear</button>
        </div>
        <div id="code">PHP CODE
            <div id="output"> OUTPUT</div>
        </div>
    </div>
    <script src="ide.js"></script>

    
    <?php
    
    //get the code from the frontend
    $code = $_POST['code'];

    //create a file with the code
    $myfile = fopen("code.php", "w") or die("Unable to open file!");
    fwrite($myfile, "<?php");
    fwrite($myfile, $code);
    fwrite($myfile, "?>");
    fclose($myfile);

    system("C:\wamp\bin\php\php8.1.13\php.exe -f code.php 2>&1", $output);
    //execute the code
    $output = shell_exec('php code.php');
    echo ($output);

    return $output;
?>
   

</body>

</html>