// Public free Javascript functions to make work easier
// Author: Daniel Ainoko
// Phone number: +234_81_787_75092
// Email: worksdaniel50@gmail.com

// console.log("Written and developed by 'JevenT' ");

// -------------Arithimetic expressions------------------

function add(a, b) {
  c = a + b;
  console.log(c);
}
// Example
// add(10,5);

function subtract(a, b) {
  c = a - b;
  console.log(c);
}
// Example
// subtract(10,8);

function divide(a, b) {
  c = a / b;
  console.log(c);
}
// Example
// divide(20,2);

function mult(a, b) {
  c = a * b;
  console.log(c);
}
// Example
// mult(5,5);

function modulus(a, b) {
  c = a % b;
  console.log(c);
}
// Example
// modulus(10,10);

// ------------------Other Javascript function----------------
function pop(a) {
  alert(a);
}

function write(a) {
  document.write(a);
}
// Example
// write("Hello world");

function c_log(a) {
  console.log(a);
}
// Example
// c_log("Hello");

function c_err(a) {
  console.error(a);
}
// Example
// c_err("Hello World");

function countValue(a) {
  let counting = document.getElementById(a);
  let counted = counting.value.length;
  console.log(counted);
}

try {
  function Copy(a) {
    var copyText = document.getElementById(a);
    // var copyBtn = document.getElementById(b);

    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(copyText.value);
    console.log("copied");
  }
} catch (err) {
  c_err("Cannot copy code, pls check the class names");
}


function delay(a, b) {
  setTimeout(a, b);
}


function thisDate(a) {
  let date = new Date(); // M-D-YYYY
  try {
    let inp = (document.getElementById(a).innerText = date);
  } catch (err) {
    console.error("Variable has not been declared in html page");
  }
  console.log(date);
  return;
}

function thisMonth(a) {
  var date = new Date();
  var month = date.getMonth() + 1;
  try {
    let inp = (document.getElementById(a).value = month);
  } catch (err) {
    console.error("Variable has not been declared in html page");
  }
  console.log(month);
  return;
  // unlike the actual javascript function, you dont need the concatenation '+1' just declare the function
}

function thisYear(a) {
  var date = new Date();
  var year = date.getFullYear();
  try {
    let inp = (document.getElementById(a).value = year);
  } catch (err) {
    console.error("Variable has not been declared in html page");
  }
  console.log(year);
  return;
}

function getId(tagId) {
  let id = document.getElementById(tagId);
  console.log(id);
}

function getTag(TagName) {
  let tagId = document.getElementsByTagName(TagName);
  console.log(tagId);
}

function getClass(ClassName) {
  let classId = document.getElementsByClassName(ClassName);
  console.log(classId);
}

function disCli(buttonId) {
  document.getElementById(buttonId).addEventListener("click", function (event) {
    event.preventDefault();
  });
}

// -----------------------API's-------------------------

// Currency api

try {
  const from_currencyEl = document.getElementById("from_currency");
  const from_ammountEl = document.getElementById("from_ammount");
  const to_currencyEl = document.getElementById("to_currency");
  const to_ammountEl = document.getElementById("to_ammount");
  const rateEl = document.getElementById("rate");
  const exchange = document.getElementById("exchange");

  from_currencyEl.addEventListener("change", calculate);
  from_ammountEl.addEventListener("input", calculate);
  to_currencyEl.addEventListener("change", calculate);
  to_ammountEl.addEventListener("input", calculate);

  exchange.addEventListener("click", () => {
    const temp = from_currencyEl.value;
    from_currencyEl.value = to_currencyEl.value;
    to_currencyEl.value = temp;
    calculate();
  });
} catch (err) {
  c_err(
    "Check your HTML document and see if the variables have been called in Javascript properly"
  );
  c_err("Api not working");
}
try {
  const convert = document.getElementById("convert");
  const result = document.getElementById("result");
  const from = document.getElementById("from");
  const to = document.getElementById("to");
  const amount = document.getElementById("amount");
  convert.addEventListener("click", function () {
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let amt = amount.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let rate = data.rates[toCurrency];
        let total = rate * amt;
        result.innerHTML = `${amt} ${fromCurrency} = ${total}
      ${toCurrency}`;
      });
  });
} catch (err) {
  c_err("currency API cannot work, some values may be Undefined");
}

// -----------------------------Assist function-------------------------

// form validation
function formValid(formName, UserName, UserEmail, UserPass, msgField) {
  try {
    var form = document.getElementById(formName);
    var name = document.getElementById(UserName);
    var email = document.getElementById(UserEmail);
    var password = document.getElementById(UserPass);
    var msg = document.getElementById(msgField);

    let condName = name.value.length;
    let condMail = email.value.length;
    let condPass = password.value.length;

    if (condName < 2 || condMail < 2 || condPass < 2) {
      name.style = "border-color: red";
      email.style = "border-color: red";
      password.style = "border-color: red";

      msg.innerHTML = "check fields, something might be wrong";
    } else {
      console.log("ok function");
      name.style = "border-color: #000";
      email.style = "border-color: #000";
      password.style = "border-color: #000";
      msg.innerHTML = "Registration successful @ - " + window.location.href;
      return form;
      // let car = form.action = FormAction;
      // window.location.assign(car);
    }
  } catch (err) {
    console.error(
      "Some variables may not have been declared for the formValid() function"
    );
  }
}

// Google search with this code
function googleSearch(input) {
  try {
    let searchField = document.getElementById(input).value;
    searchField.replace(" ", "+");
    window.open("https://www.google.com/search?q=" + searchField);
    console.log("Your search results for " + searchField);
  } catch (err) {
    // the catch error function
    console.error("Cannot search google :( ");
  }
}

// replicate input value in another element
function repInp(ToBeReplicated, displayRep) {
  try {
    // Where you want to replicate from
    let opt_a = document.getElementById(ToBeReplicated).value;
    let new_opt = opt_a.toLowerCase();
    let disp = document.getElementById(displayRep);

    if (new_opt === "") {
      console.error("The fields are empty?  bruh, wisen up");
    } else {
      // Where you want it to replicated
      let newDisp = (disp.value = new_opt);
      console.log("replicate success.....");
      console.log(newDisp);
    }
  } catch (err) {
    console.error("bruh, check your code again : ");
  }
}

// var suggestions = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'] + 1;
// var newSugg = this.suggestions[10] = 'eleven';
// console.log(newSugg);

// let btn = document.getElementById('btn')
// btn.onclick = () => {
//   var x = docuument.getElementById('inp');
//   if (x === NaN) {
//     console.log(x + " is not a number");
//   } else {
//     console.log(x + " is a number");
//   }
// }