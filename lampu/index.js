// function saklar(params) {
//   console.log(params);
//   let lampu1 = document.getElementById("lampu1");
//   console.log(lampu1.src);
//   lampu1.src = "assests/images/on.gif";
// }

function saklar(params) {
  console.log(params);

  let lampu1 = document.getElementById("lampu1");
  if (params == "on") {
    // nyala
    lampu1.src = "assests/images/on.gif";
  }
  if (params == "off") {
    // mati
    lampu1.src = "assests/images/off.gif";
  }
  return lampu1;
}
