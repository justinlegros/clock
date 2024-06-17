const dateTime = document.getElementById("dateTime");
const dateP = document.getElementById("dateP");
const timeP = document.getElementById("timeP");
const submitBtn = document.getElementById("submitBtn")
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "Febuary", "March", "April", "June", "July", "August", "September", "November", "December"];

function updateDateTime() {
  const now = new Date();

  const currentDateTime = now.toLocaleString();
  const currentTime = currentDateTime.split(',')[1];
  const currentDate = currentDateTime.split(',')[0];
  const currentMonth = monthNames[now.getMonth()];
  const currentDay = dayNames[now.getDay()];
  const currentDateDay = now.getDate();
  
  dateP.innerHTML = `${currentDay} ${currentMonth}-${currentDateDay}`;
  timeP.innerHTML = currentTime;
}

submitBtn.addEventListener("click", () =>
  document.body.style.backgroundImage = `url('${document.getElementById("inputText").value}')`
);

setInterval(updateDateTime, 1000);
