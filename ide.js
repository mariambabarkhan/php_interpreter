// Define constants
const VARIABLE = "variable";
const MATH = "math";
const FUNCTION = "function";
const LOOP = "loop";
const CONDITIONAL = "conditional";
const RFILE = "rfile";
const WFILE = "wfile";
const PRINT = "print";

// Get DOM elements
const components = document.getElementById("components");
const programmableArea = document.getElementById("programmable-area");
const runButton = document.getElementById("run-button");
const clearButton = document.getElementById("clear-button");
const code = document.getElementById("codeshow");
const output = document.getElementById("outputshow");



// Add event listeners to components
components.addEventListener("dragstart", dragStart);
programmableArea.addEventListener("dragover", dragOver);
programmableArea.addEventListener("drop", drop);

// Add event listeners to buttons
function run() {
    console.log('i run')
    const mycode = generateCode();
    code.innerHTML = mycode;
}

runButton.addEventListener("click", run);

function clear() {
    // Remove all children of programmableArea except the clear-button
    if (programmableArea.firstChild && programmableArea.firstChild.id != clearButton) {
        programmableArea.removeChild(programmableArea.firstChild);
    }
    programmableArea.textContent = "DRAG & DROP AREA";
}

clearButton.addEventListener("click", clear);


// Define functions for event listeners
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const type = event.dataTransfer.getData("text/plain");
    let component = document.createElement('div')
    programmableArea.appendChild(component);
    component.setAttribute('class', type);
    dropdiv(type, component)
}

const form = document.querySelector('form');
const codeDiv = document.querySelector('#code');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch('function.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(result => {
            codeDiv.innerText = result;
        });
});

//give classes instead of ids to input fields inside the divs

function dropdiv(id, parent) {
    console.log(id)
    switch (id) {

        case PRINT:
            parent.innerHTML += `
            <div>

                <label for="message">Message:</label>
                <input type="text" name="message" class="message"><br><br>
            
            </div>`
            break;


        case VARIABLE:
            parent.innerHTML += `
            <div class='varElem'></div>
            <label for='varname'>SET</label>
            <input class='varname' id='varname' name='varname'> 
            <label for='varValue'>TO</label>
            <input class='varValue' id='varValue' name='varValue'>
            `
            break;


        case MATH:
//             parent.innerHTML += `
//             <div>
//   <form action="math.php" method="post">
//     <label for="value1">Value 1:</label>
//     <input type="number" name="value1" id="value1"><br><br>
    
//     <label for="value2">Value 2:</label>
//     <input type="number" name="value2" id="value2"><br><br>

//     <label for="operation">Operation:</label>
//     <select name="operation" id="operation">
//       <option value="add">Addition</option>
//       <option value="subtract">Subtraction</option>
//       <option value="multiply">Multiplication</option>
//       <option value="divide">Division</option>
//     </select><br><br>

//     <input type="submit" value="Calculate">
//   </form>
// </div>

        parent.innerHTML += `
        <div>
        
        <label for="value1">Store in</label>
        <input type="text" name="result" class="result"><br><br>

            <label for="value1">Value 1:</label>
            <input type="number" name="value1" class="value1"><br><br>

            <label for="value2">Value 2:</label>
            <input type="number" name="value2" class="value2"><br><br>

            <label for="operation">Operation:</label>
            <select name="operation" class="operation">
                <option value="+">Addition</option>
                <option value="-">Subtraction</option>
                <option value="*">Multiplication</option>
                <option value="/">Division</option>
            </select><br><br>

        </div>

            `
            break;


        case FUNCTION:
            parent.innerHTML += `
            <div>
                <label for="message">Message:</label>
                <input type="text" name="message" class="message"><br><br>

            </div>`

            break;


        case CONDITIONAL:
            parent.innerHTML += `
            <div>
  <form method="post" action="process.php">
    <label for="input">Enter a value:</label>
    <input type="text" name="input" id="input">
    <br><br>
    <label for="condition">Enter a condition:</label>
    <select name="condition" id="condition">
      <option value="greater">Greater than</option>
      <option value="less">Less than</option>
      <option value="equal">Equal to</option>
    </select>
    <br><br>
    <label for="value">Enter a value to compare:</label>
    <input type="text" name="value" id="value">
    <br><br>
    <input type="submit" value="Submit">
  </form>
</div>
            `
            break;


        case RFILE:
            parent.innerHTML += `
            <div>
  <form action="rdfile.php" method="post">
    <label for="filename">Enter the filename:</label>
    <input type="text" name="filename" id="filename"><br><br>

    <input type="submit" value="Read File">
  </form>

</div>

            `
            break;


        case WFILE:
            parent.innerHTML += `
            <div>
  <form action="writefile.php" method="post">
    <label for="filename">Enter the filename:</label>
    <input type="text" name="filename" id="filename"><br><br>

    <label for="message">Enter the message:</label>
    <textarea name="message" id="message" cols="30" rows="10"></textarea><br><br>

    <input type="submit" value="Write to File">
  </form>
</div>

            `
            break;


        case LOOP:
            parent.innerHTML += `
            <div>
  <form action="forloop.php" method="post">
    <label for="initializer">Initializer:</label>
    <input type="text" name="initializer" id="initializer"><br><br>

    <label for="value">Value:</label>
    <input type="number" name="value" id="value"><br><br>

    <label for="times">Number of Times:</label>
    <input type="number" name="times" id="times"><br><br>

    <label for="increment">Increment:</label>
    <input type="number" name="increment" id="increment"><br><br>

    <label for="loopcontent">Loop Content:</label>
    <textarea name="loopcontent" id="loopcontent" cols="30" rows="10"></textarea><br><br>

    <input type="submit" value="Run For Loop">
  </form>
</div>

            `
            break;

    }
}

function generateCode() {
    console.log("generate code is running")
    let genCode = "";
    const subcomponent = programmableArea.children;
    for (let i = 0; i < subcomponent.length; i++) {
        const curr_subc = subcomponent[i];
        
        if (curr_subc.classList.contains(VARIABLE)) {
            genCode += generateVariableCode(curr_subc);
        }
        else if (curr_subc.classList.contains(MATH)) {
            genCode += generateMathCode(curr_subc);
        }
        else if (curr_subc.classList.contains(FUNCTION)) {
            genCode += generateFunctionCode(curr_subc);
        }
        else if (curr_subc.classList.contains(LOOP)) {
            genCode += generateLoopCode(curr_subc);
        }
        else if (curr_subc.classList.contains(CONDITIONAL)) {
            genCode += generateConditionalCode(curr_subc);
        }
        else if (curr_subc.classList.contains(RFILE)) {
            genCode += generateReadFileCode(curr_subc);
        }
        else if (curr_subc.classList.contains(WFILE)) {
            genCode += generateWriteFileCode(curr_subc);
        } else if (curr_subc.classList.contains(PRINT)) {
            genCode += generatePrintCode(curr_subc);
        }
        else {
            continue;
        }
        genCode += "; <br>"
        console.log(genCode)
    }
    return genCode;
}

// console.log(generateCode() + "123")

function generatePrintCode(el) {
    console.log("i work genprint")
    let message = el.getElementsByClassName('message')[0].value
    let printcode = 'echo "' + message + '"';
    return printcode;
}

function generateVariableCode(el) {
    console.log("i work genvar")
    let vname = el.getElementsByClassName('varname')[0].value
    let vvalue = el.getElementsByClassName('varValue')[0].value
    let varcode = "$" + vname + ' = ' + vvalue
    return varcode;
}

function generateMathCode(el) {
    console.log("i work genmath")
    val1 = el.getElementsByClassName("value1")[0].value
    val2 = el.getElementsByClassName("value2")[0].value
    res = el.getElementsByClassName("result")[0].value
    op = el.getElementsByClassName("operation")[0].value
    let mathcode = "$" + res + " = " + val1 + ' ' + op + ' ' + val2
    return mathcode;
}

function generateFunctionCode() {
    console.log("i work genfxn")
    let message = document.getElementById('mess').value
    fxncode = 'function writeMsg() { echo' + '"' + message + '"; } writeMsg(); '
    return fxncode;
}

function generateLoopCode() {
    console.log("i work genloop")
    loopcode = '$x = 1;while($x <= 5) {  echo "The number is: $x <br>";  $x++;}'
    return loopcode;
}

function generateConditionalCode() {
    console.log("i work genif")
    condcode = '$t = date("H"); if ($t < "20") { echo "Have a good day!";} else {echo "Have a good night!";}'
    return condcode;
}

function generateReadFileCode() {
    console.log("i work genrfile")
    rdfcode = '$myfile = fopen("webdictionary.txt", "r") or die("Unable to open file!");echo fread($myfile,filesize("webdictionary.txt"));fclose($myfile);'
    return rdfcode;
}

function generateWriteFileCode() {
    console.log("i work genwfile")
    wrtcode = '$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");    $txt = "John Doe\n";    fwrite($myfile, $txt);  $txt = "Jane Doe\n";    fwrite($myfile, $txt);    fclose($myfile);'
    return wrtcode;
}

function sendtoserver() {
    let phpcodegen = document.getElementById("code").firstChild.innerText;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "ide.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("code=" + encodeURIComponent(phpcodegen));
    xhr.onload = () => {
        document.getElementById("output").innerText = xhr.responseText;
    }
}

//create a post request to runcode.php
//send the generated code to the server
//get the result from the server and print it

function runCode() {
    let code = generateCode().replace(/<br>/g, "");
    console.log(code)
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "runcode.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("code=" + encodeURIComponent(code));
    xhr.onload = () => {
        document.getElementById("outputshow").innerHTML = xhr.responseText;
    }
}