const tabTarget = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-contents]");

tabTarget.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targets = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabTarget.forEach((tab) => {
      tab.classList.remove("active");
    });
    targets.classList.add("active");
    tab.classList.add("active");
  });
});

const countdown = document.getElementById("countdown");
const userTimeInput = document.getElementById("userSetTime");
let time = 0;
let countdownInterval;

document.getElementById("saveTime").addEventListener("click", () => {
  time = userTimeInput.value * 60; // Convert input value to seconds
  if (time === 0) {
    console.log("Time cannot be zero."); // Handle invalid input if needed
    return;
  }
  clearInterval(countdownInterval); // Clear any existing interval
  countdownInterval = setInterval(updateCountdown, 1000);
});

function updateCountdown() {
  if (time < 0) {
    clearInterval(countdownInterval); // Stop the countdown when time reaches zero
    console.log("Countdown finished.");
    return;
  }

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  countdown.innerHTML = `${minutes}:${seconds}`;
  time--;
}

// setting
const setting = document.getElementById("settingId");

setting.onclick = function () {
  document.querySelector(".setting-menu").classList.toggle("active");
};

// pop up
const pops = document.querySelectorAll('[data-pop-target]');
const popsContent =  document.querySelectorAll('[data-pop-content]');
const popCancel =  document.querySelectorAll('[data-cancel-pop]');
const popSave =  document.querySelectorAll('[data-save-pop]');
pops.forEach(pop =>{
  pop.addEventListener("click",(e)=>{
      const targets = document.querySelector(pop.dataset.popTarget);
      popsContent.forEach(popContent=>{
        popContent.classList.remove('active');
      });
      pops.forEach(pop=>{
        pop.classList.remove('active');
      })
      targets.classList.add('active');
  })
});

popCancel.forEach(cancel=>{
  cancel.addEventListener("click",()=>{
    popsContent.forEach(popContent=>{
      popContent.classList.remove('active');
    });
  })
})

popSave.forEach(popsaves=>{
  popsaves.addEventListener('click',(e)=>{
    const dataUserInput = document.querySelectorAll('[data-user-input]');
    const parentTarget = document.querySelector(e.target.dataset.savePop);

    const p = document.createElement('p');
    p.classList.add('addText');
    dataUserInput.forEach(data=>{
      p.innerHTML = e.target.closest('div').querySelector('input').value;
      parentTarget.appendChild(p);
    })
  })
})

setInterval(runTime,1000);
// time
function runTime(){
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  h = (h % 12 === 0) ? 12 : h % 12;
  h = (h < 10) ? "0" + h : h;
  let ampm = (h < 12) ? "AM" : "PM";
  s = (s < 10) ? "0"+s : s;
  m = (m < 10) ? "0"+m : m;
  document.getElementById("time").innerHTML = 
  `Time: ${h}:${m}:${s} ${ampm}`;
}
