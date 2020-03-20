const title = document.querySelector("#titleword");

const BASE_COLOR = "rgb(0, 0, 139)";
const OTHER_COLOR = "#b2fcff";

function isExist() {
  let ids = ['jin', 'din', 'infiscap'];
  let result = ids.find(isID);
  if (typeof result !== 'undefined')
    MsgAndFocus('ID가 중복되었습니다.', 'inputID');
  else
    MsgAndFocus('사용 가능한 ID 입니다.', 'inputPW');
}

function MsgAndFocus(msg, objID) {
  alert(msg);
  let obj = document.getElementById(objID);
  if (objID === 'inputID') obj.value = "";
  obj.focus();
}

function isID(value, index, array) {
  let id = document.getElementById('inputID').value;
  return id === value;
}

function ComparePW() {
  let pw = document.getElementById('inputPW');
  let pwOK = document.getElementById('inputPWOK');
  if (pw.value !== pwOK.value) {
    MsgAndFocus('패스워드가 서로 다릅니다.', 'inputPW');
    pwOK.value = "";
  }
}

function setEmail() {
  let selectEmail = document.getElementById('selectEmail');
  alert(selectEmail.value);
}

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR)  {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}
init();

