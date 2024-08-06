window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoRandom = Math.floor(Math.random() * 4);
  let actionRandom = Math.floor(Math.random() * 4);
  let whatRandom = Math.floor(Math.random() * 3);
  let whenRandom = Math.floor(Math.random() * 4 + 1);

  let newExcuse =
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom];

  document.querySelector("body").style.display = "flex";
  document.querySelector("body").style.justifyContent = "center";
  document.querySelector("body").style.alignItems = "center";

  let excuseDOM = document.getElementById("excuse");
  excuseDOM.innerHTML = newExcuse;

  excuseDOM.style.position = "absolute";
  excuseDOM.style.fontFamily = "cursive";
  excuseDOM.style.fontSize = "30px";
  excuseDOM.style.textAlign = "center";
  excuseDOM.style.marginTop = "50%";
  excuseDOM.style.border = `${Math.floor(
    Math.random() * 5
  )}px solid rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
};
