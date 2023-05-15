// let select = document.querySelectorAll(".column select");
// let h1 = document.querySelector("h1");
// let btn = document.querySelector(".btn");
// let cnt = document.querySelector(".content");
// let alarmTime;
// let isAlaramSet = false;
// ringtone = new Audio("audio.mp3");
// for (let i = 0; i < select.length - 1; i++) {
//   for (let j = 0; j <= 59; j++) {
//     if (i === 0) {
//       if (j <= 12) {
//         let c = j < 10 ? "0" + j : j;
//         let opt = `<option value="${c}">${c}</option>`;
//         select[i].insertAdjacentHTML("beforeend", opt);
//       }
//     }
//     if (i === 1) {
//       let c = j < 10 ? "0" + j : j;
//       let opt = `<option value="${c}">${c}</option>`;
//       select[i].insertAdjacentHTML("beforeend", opt);
//     }
//   }
// }
// setInterval(() => {
//   let date = new Date();
//   let h = date.getHours(),
//     m = date.getMinutes(),
//     s = date.getSeconds(),
//     ampm = "AM";
//   if (h >= 12) {
//     h = h - 12;
//     ampm = "PM";
//   }
//   h = h === 0 ? (h = 12) : h;
//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   h1.innerText = `${h}:${m}:${s} ${ampm}`;
//   if (alarmTime == `${h}:${m} ${ampm}`) {
//     ringtone.play();
//     ringtone.loop = true;
//   }
// }, 1000);
// function setTime() {
//   if (isAlaramSet) {
//     alarmTime = "";
//     ringtone.pause();
//     cnt.classList.remove("disable");
//     btn.innerText = "set time";
//     return (isAlaramSet = false);
//   }
//   let time = `${select[0].value}:${select[1].value} ${select[2].value}`;
//   if (
//     select[0].value === "Hours" ||
//     select[1].value === "Minute" ||
//     select[2].value === "PM/AM"
//   ) {
//     return alert("please enter the correct values");
//   }
//   isAlaramSet = true;
//   alarmTime = time;
//   cnt.classList.add("disable");
//   btn.innerText = "clear time";
// }
// btn.addEventListener("click", setTime);

// let select = document.querySelectorAll("select")
// let h1 = document.querySelector("h1")
// let btn = document.querySelector(".btn")
// let cnt = document.querySelector(".content")
// let theTime;
// let alarmSetting = false;
// let audio = new Audio("audio.mp3")
// for (let i = 0; i < select.length - 1 ; i++) {
//     for (let j = 0 ; j <= 59 ; j++){
//         if (i === 0) {
//             if ( j <= 12) {
//                 j = j < 10 ? "0" + j : j;
//                 let opt = `<option value="${j}">${j}</option>`
//                 select[i].insertAdjacentHTML("beforeend", opt)
//             }
//         }
//         if ( i === 1) {
//             j = j < 10 ? "0" + j : j;
//             let opt = `<option value="${j}">${j}</option>`
//             select[i].insertAdjacentHTML("beforeend", opt)
//         }
//     }
// }
// setInterval( () => {
// let date = new Date()
// let h = date.getHours()
// let m = date.getMinutes()
// let s = date.getSeconds()
// let ampm = "AM"
// if (h > 12) {
//     h = h - 12
//     ampm = "PM"
// }
// h = h < 10 ? "0" + h : h;
// m = m < 10 ? "0" + m : m;
// s = s < 10 ? "0" + s : s;
// h1.innerText = `${h}:${m}:${s} ${ampm}`
// if (theTime === `${h}:${m} ${ampm}`) {
//     audio.play();
//     audio.loop = true
// }
// },1000)
// function setTime() {
//     if (alarmSetting) {
//         theTime = "";
//         cnt.classList.remove("disable")
//         btn.innerText = "set alarm"
//         audio.pause();
//         return alarmSetting = false
//     }
//     if (select[0].value === "Hours" || select[1].value === "Minute" || select[2].value === "PM/AM") {
//         return alert("please enter the correct values")
//     }
//     alarmSetting = true
//     let time = `${select[0].value}:${select[1].value} ${select[2].value}`
//     theTime = time
//     cnt.classList.add("disable")
//     btn.innerText = "clear alarm"
// }
// btn.addEventListener("click",setTime)

let select = document.querySelectorAll("select");
let h1 = document.querySelector("h1");
let ctn = document.querySelector(".content");
let btn = document.querySelector(".btn");
let alarmSet;
let rington = new Audio("audio.mp3");
let alarmSetting = false;
for (let i = 0; i < select.length - 1; i++) {
  for (let j = 0; j < 60; j++) {
    if (i === 0) {
      if (j <= 12) {
        j = j < 10 ? "0" + j : j;
        let opt = `<option value="${j}">${j}</option>`;
        select[i].insertAdjacentHTML("beforeend", opt);
      }
    }
    if (i === 1) {
      j = j < 10 ? "0" + j : j;
      let opt = `<option value="${j}">${j}</option>`;
      select[i].insertAdjacentHTML("beforeend", opt);
    }
  }
}
setInterval(() => {
  let date = new Date();
  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ampm = "AM";
  if (hrs > 12) {
    hrs = hrs - 12;
    ampm = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  h1.innerText = `${hrs}:${min}:${sec} ${ampm}`;
  if (alarmSet === `${hrs}:${min} ${ampm}`) {
    rington.play();
    rington.loop = true;
  }
}, 1000);
function setTime() {
  if (alarmSetting) {
    rington.pause();
    alarmSet = "";
    ctn.classList.remove("disable");
    btn.innerText = "set alarm";
    return (alarmSetting = false);
  }
  if (
    select[0].value === "Hours" ||
    select[1].value === "Minute" ||
    select[2].value === "PM/AM"
  ) {
    return alert("please choose a correct values");
  }
  alarmSetting = true;
  ctn.classList.add("disable");
  btn.innerText = "clear alarm";
  let time = `${select[0].value}:${select[1].value} ${select[2].value}`;
  alarmSet = time;
}
btn.addEventListener("click", setTime);
