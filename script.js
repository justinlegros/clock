const dateTime = document.getElementById("dateTime");
const dateP = document.getElementById("dateP");
const timeP = document.getElementById("timeP");
const submitBtn = document.getElementById("submitBtn")

function updateDateTime() {
  const now = new Date();

  const currentDateTime = now.toLocaleString();
  const currentTime = currentDateTime.split(',')[1];
  const currentDate = currentDateTime.split(',')[0];
  
  timeP.innerHTML = currentTime;
  dateP.innerHTML = currentDate;
}

submitBtn.addEventListener("click", () =>
  document.body.style.backgroundImage = `url('${document.getElementById("inputText").value}')`
);

setInterval(updateDateTime, 1000);
