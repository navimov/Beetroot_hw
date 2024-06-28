class WorldClock {
  constructor(timezone) {
    this.timezone = timezone;
    this.clockItem = document.createElement("div");
    this.clockItem.className = "clock";

    this.timeContainer = document.createElement("div");
    this.timeContainer.className = "timeContainer";

    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "buttonsContainer";

    const getTime = document.createElement("button");
    getTime.className = "time";
    getTime.innerText = "show time";
    getTime.onclick = () => this.showTime();

    const getDateTime = document.createElement("button");
    getDateTime.className = "dateTime";
    getDateTime.innerText = "date&time";
    getDateTime.onclick = () => this.showDateTime();

    const deleteClock = document.createElement("button");
    deleteClock.className = "delClock";
    deleteClock.innerText = "Delete";
    deleteClock.onclick = () => this.deleteClock();

    buttonsContainer.appendChild(getTime);
    buttonsContainer.appendChild(getDateTime);
    buttonsContainer.appendChild(deleteClock);
    this.clockItem.appendChild(this.timeContainer);
    this.clockItem.appendChild(buttonsContainer);
    document.querySelector("#clockContainer").appendChild(this.clockItem);
  }
  getCurrentDate() {
    return new Date().toLocaleDateString("uk-UA", { timeZone: this.timezone });
  }

  getCurrentDateTime() {
    return new Date().toLocaleString("uk-UA", { timeZone: this.timezone });
  }

  showTime() {
    this.timeContainer.innerHTML = "";
    const itemInfo = document.createElement("h4");
    itemInfo.className = "itemInfo";
    itemInfo.innerText = this.getCurrentDateTime().split(", ")[1];
    this.timeContainer.appendChild(itemInfo);
  }

  showDateTime() {
    this.timeContainer.innerHTML = "";
    const itemInfo = document.createElement("h4");
    itemInfo.className = "itemInfo";
    itemInfo.innerText = this.getCurrentDateTime();
    this.timeContainer.appendChild(itemInfo);
  }

  deleteClock() {
    this.clockItem.remove();
  }
}

async function fetchTimezone(city) {
  try {
    const response = await fetch(`https://worldtimeapi.org/api/timezone`);
    const data = await response.json();
    const timezone = data.find((zone) => zone.includes(city));
    if (timezone) {
      return timezone;
    } else {
      throw new Error("Invalid city");
    }
  } catch (error) {
    throw new Error("Error fetching timezone data");
  }
}

document.getElementById("addClockBtn").onclick = async () => {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Enter a city");
  } else {
    try {
      const timezone = await fetchTimezone(city);
      new WorldClock(timezone);
    } catch (error) {
      alert("Please enter a valid city.");
    }
  }
};
