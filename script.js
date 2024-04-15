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

// Import the MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI
const uri = "mongodb+srv://danewika:8s4G7V4oNgXyZU5q@habitidb1.kqbnzlk.mongodb.net/?retryWrites=true&w=majority&appName=HabitiDB1";

// Database Name
const dbName = 'Webpage';

// Function to connect to MongoDB and perform operations
async function main() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to the MongoDB server');

    // Accessing the Webpage database
    const database = client.db(dbName);

    // Accessing the collections
    const dateCollection = database.collection('date');
    const descriptionCollection = database.collection('Description');
    const equipmentCollection = database.collection('Equipment');
    const eventsCollection = database.collection('Events');
    const timeCollection = database.collection('Time');
    const titleCollection = database.collection('Title');

    // Inserting documents
    await dateCollection.insertOne({ date: new Date() });
    console.log('Date document inserted');

    await descriptionCollection.insertOne({ description: 'Some description' });
    console.log('Description document inserted');

    await equipmentCollection.insertOne({ equipment: 'Some equipment' });
    console.log('Equipment document inserted');

    await eventsCollection.insertOne({ event: 'Some event' });
    console.log('Event document inserted');

    await timeCollection.insertOne({ time: 'Some time' });
    console.log('Time document inserted');

    await titleCollection.insertOne({ title: 'Some title' });
    console.log('Title document inserted');

    // Querying documents from date collection
    const dateDocuments = await dateCollection.find({}).toArray();
    console.log('Date documents:');
    console.log(dateDocuments);

    // Querying documents from description collection
    const descriptionDocuments = await descriptionCollection.find({}).toArray();
    console.log('Description documents:');
    console.log(descriptionDocuments);

    // Querying documents from equipment collection
    const equipmentDocuments = await equipmentCollection.find({}).toArray();
    console.log('Equipment documents:');
    console.log(equipmentDocuments);

    // Querying documents from events collection
    const eventsDocuments = await eventsCollection.find({}).toArray();
    console.log('Events documents:');
    console.log(eventsDocuments);

    // Querying documents from time collection
    const timeDocuments = await timeCollection.find({}).toArray();
    console.log('Time documents:');
    console.log(timeDocuments);

    // Querying documents from title collection
    const titleDocuments = await titleCollection.find({}).toArray();
    console.log('Title documents:');
    console.log(titleDocuments);

  } catch (err) {
    console.error('Error: ', err);
  } finally {
    // Close the client
    await client.close();
    console.log('Connection to MongoDB closed');
  }
}


