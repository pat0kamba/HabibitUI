document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
  
    const monthYearElement = document.getElementById("monthYear");
    const calendarElement = document.getElementById("calendar");
  
    function updateCalendar() {
      monthYearElement.textContent = getMonthName(currentMonth) + " " + currentYear;
      calendarElement.innerHTML = generateCalendar(currentYear, currentMonth);
      attachEventListeners();
    }
  
    function generateCalendar(year, month) {
      // Calendar generation logic here (can be more complex)
      // For simplicity, let's assume a fixed-size 6x7 calendar grid
      let calendarHTML = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
  
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
  
      let dayCounter = 1;
      for (let i = 0; i < 6; i++) {
        calendarHTML += "<tr>";
        for (let j = 0; j < 7; j++) {
          if (i === 0 && j < firstDay.getDay()) {
            calendarHTML += "<td></td>";
          } else if (dayCounter <= daysInMonth) {
            calendarHTML += `<td data-day="${dayCounter}">${dayCounter}</td>`;
            dayCounter++;
          }
        }
        calendarHTML += "</tr>";
      }
  
      return calendarHTML;
    }
  
    function attachEventListeners() {
      const dayCells = document.querySelectorAll("#calendar td[data-day]");
      dayCells.forEach((cell) => {
        cell.addEventListener("click", function () {
          const day = this.dataset.day;
          const task = prompt(`Enter task for ${getMonthName(currentMonth)} ${day}, ${currentYear}`);

          

          if (task !== null) {
            // Implement logic to store the task (e.g., save to localStorage, database, etc.)
            // For simplicity, we'll just update the cell conten
            // DATA BASE ENTRY ******************************
           dateCollection.insertOne({ date: new Date(currentYear, currentMonth, day)});t
            this.innerHTML = `${day}<br>${task}`;
          }
        });
      });
    }
  
    function getMonthName(month) {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return monthNames[month];
    }
  
    function updateMonth(direction) {
      if (direction === "next") {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
      } else {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
      }
  
      updateCalendar();
    }
  
    // Initial calendar rendering
    updateCalendar();
    // Call the main function
    main(); 
  
    // Event listeners for changing months
    document.getElementById("prevMonth").addEventListener("click", function () {
      updateMonth("prev");
    });
  
    document.getElementById("nextMonth").addEventListener("click", function () {
      updateMonth("next");
    });
  });
  
  function changeQuantity(button, amount) {
    const quantityElement = button.parentElement.querySelector('.quantity-value');
    let currentQuantity = parseInt(quantityElement.textContent);
    currentQuantity += amount;
  
    if (currentQuantity < 1) {
      currentQuantity = 1;
    }
  
    quantityElement.textContent = currentQuantity;
  }

  
  // Handle Equipment checkbox
  let checkbox1 = document.querySelector("input[id=toggle1]");

  checkbox1.addEventListener('change', function(){
      if (this.checked)
      {
        document.getElementById("status1").textContent = "Booked";
      }
      else
      {
        document.getElementById("status1").textContent = "Available";
      }
  });

  let checkbox2 = document.querySelector("input[id=toggle2]");

  checkbox2.addEventListener('change', function(){
      if (this.checked)
      {
        document.getElementById("status2").textContent = "Booked";
      }
      else
      {
        document.getElementById("status2").textContent = "Available";
      }
  });

  let checkbox3 = document.querySelector("input[id=toggle3]");

  checkbox3.addEventListener('change', function(){
      if (this.checked)
      {
        document.getElementById("status3").textContent = "Booked";
      }
      else
      {
        document.getElementById("status3").textContent = "Available";
      }
  });

  let checkbox4 = document.querySelector("input[id=toggle4]");

  checkbox4.addEventListener('change', function(){
      if (this.checked)
      {
        document.getElementById("status4").textContent = "Booked";
      }
      else
      {
        document.getElementById("status4").textContent = "Available";
      }
  });