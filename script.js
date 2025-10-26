    /* CLOCK */
    function updateClock() {
        const now = new Date();
        document.getElementById("clock").textContent = now.toLocaleTimeString();
      }
      setInterval(updateClock, 1000);
      updateClock();
  
      /* WEATHER (Open-Meteo, no API key) */
      let locationData = { city: "", country: "", lat: 0, lon: 0 };
      let weatherData = null;
      let forecastData = null;
      let hourlyData = null;
      
      function getLocation(lat, lon) {
        // Reverse geocoding to get city and country
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
          .then(res => res.json())
          .then(data => {
            const city = data.city || data.locality || data.principalSubdivision || "Unknown";
            const country = data.countryName || "Unknown";
            locationData = { city, country, lat, lon };
            document.getElementById("location").textContent = `📍 ${city}, ${country}`;
          })
          .catch(() => {
            document.getElementById("location").textContent = `📍 Location unavailable`;
          });
      }
  
      // Weather code to condition mapping
      function getWeatherCondition(code) {
        const conditions = {
          0: { text: 'Clear', emoji: '☀️' },
          1: { text: 'Mainly Clear', emoji: '🌤️' },
          2: { text: 'Partly Cloudy', emoji: '⛅' },
          3: { text: 'Overcast', emoji: '☁️' },
          45: { text: 'Foggy', emoji: '🌫️' },
          48: { text: 'Foggy', emoji: '🌫️' },
          51: { text: 'Light Drizzle', emoji: '🌦️' },
          53: { text: 'Drizzle', emoji: '🌦️' },
          55: { text: 'Heavy Drizzle', emoji: '🌧️' },
          56: { text: 'Freezing Drizzle', emoji: '🌧️' },
          57: { text: 'Freezing Drizzle', emoji: '🌧️' },
          61: { text: 'Light Rain', emoji: '🌧️' },
          63: { text: 'Rain', emoji: '🌧️' },
          65: { text: 'Heavy Rain', emoji: '⛈️' },
          66: { text: 'Freezing Rain', emoji: '🌧️' },
          67: { text: 'Freezing Rain', emoji: '🌧️' },
          71: { text: 'Light Snow', emoji: '🌨️' },
          73: { text: 'Snow', emoji: '❄️' },
          75: { text: 'Heavy Snow', emoji: '❄️' },
          77: { text: 'Snow Grains', emoji: '🌨️' },
          80: { text: 'Light Showers', emoji: '🌦️' },
          81: { text: 'Showers', emoji: '🌧️' },
          82: { text: 'Heavy Showers', emoji: '⛈️' },
          85: { text: 'Snow Showers', emoji: '🌨️' },
          86: { text: 'Heavy Snow', emoji: '❄️' },
          95: { text: 'Thunderstorm', emoji: '⛈️' },
          96: { text: 'Thunderstorm', emoji: '⛈️' },
          99: { text: 'Thunderstorm', emoji: '⛈️' }
        };
        return conditions[code] || { text: 'Unknown', emoji: '🌡️' };
      }
  
      function getWeather(lat, lon) {
        // Get location name
        getLocation(lat, lon);
        
        // Get current weather + 7-day forecast + hourly data
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max&hourly=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m&timezone=auto`)
          .then(res => res.json())
          .then(data => {
            // Store full weather data
            weatherData = data.current;
            forecastData = data.daily;
            hourlyData = data.hourly;
            
            // Display current weather
            const temp = Math.round(weatherData.temperature_2m);
            const humidity = weatherData.relative_humidity_2m;
            const condition = getWeatherCondition(weatherData.weather_code);
            
            document.getElementById("weather").innerHTML = `
              <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">${condition.emoji} ${temp}°C</div>
              <div style="font-size: 0.9rem; opacity: 0.8;">${condition.text}</div>
              <div style="font-size: 0.85rem; opacity: 0.7; margin-top: 0.5rem; margin-bottom: 0.5rem;">💧 ${humidity}%</div>
            `;
            
            // Show the "Show Forecast" button
            document.getElementById("showWeatherBtn").style.display = "block";
          })
          .catch(() => {
            document.getElementById("weather").textContent = "Weather unavailable.";
            showToast({
              text: "Unable to fetch weather data",
              type: "error",
              duration: 4000,
              position: "bottom-right"
            });
          });
      }
  
      /* WEATHER MODAL */
      const showWeatherBtn = document.getElementById("showWeatherBtn");
      const weatherModal = document.getElementById("weatherModal");
      const closeWeatherBtn = document.getElementById("closeWeatherBtn");
  
      // Open weather modal
      showWeatherBtn.onclick = () => {
        if (!weatherData || !forecastData) {
          showToast({
            text: "Weather data not available",
            type: "warning",
            duration: 2500,
            position: "bottom-right"
          });
          return;
        }
        
        displayWeatherDetails();
        weatherModal.classList.add("active");
      };
  
      // Close weather modal
      closeWeatherBtn.onclick = () => {
        weatherModal.classList.remove("active");
      };
  
      weatherModal.onclick = (e) => {
        if (e.target === weatherModal) {
          weatherModal.classList.remove("active");
        }
      };
  
      // Display detailed weather information
      function displayWeatherDetails() {
        if (!weatherData || !forecastData) return;
  
        // Update location
        document.getElementById("weatherCityDetailed").textContent = 
          `📍 ${locationData.city}, ${locationData.country}`;
  
        // Update current weather details
        const temp = Math.round(weatherData.temperature_2m);
        const condition = getWeatherCondition(weatherData.weather_code);
        
        document.getElementById("weatherTempLarge").textContent = `${temp}°C`;
        document.getElementById("weatherConditionLarge").textContent = condition.text;
        document.getElementById("weatherHumidityDetail").textContent = `${weatherData.relative_humidity_2m}%`;
        document.getElementById("weatherWindDetail").textContent = `${Math.round(weatherData.wind_speed_10m)} km/h`;
        document.getElementById("weatherPrecipDetail").textContent = `${weatherData.precipitation || 0} mm`;
  
        // Display 7-day forecast
        displayForecast();
      }
  
      // Display 7-day forecast
      function displayForecast() {
        if (!forecastData) return;
  
        const forecastContainer = document.getElementById("forecastContainer");
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        // Generate forecast cards for next 7 days
        let forecastHTML = '';
        
        for (let i = 0; i < 7; i++) {
          const date = new Date(forecastData.time[i]);
          const dayName = i === 0 ? 'Today' : days[date.getDay()];
          const condition = getWeatherCondition(forecastData.weather_code[i]);
          const tempMax = Math.round(forecastData.temperature_2m_max[i]);
          const tempMin = Math.round(forecastData.temperature_2m_min[i]);
          const precip = forecastData.precipitation_sum[i] || 0;
          
          forecastHTML += `
            <div class="forecast-day" data-day-index="${i}" onclick="showHourlyWeather(${i})">
              <div class="forecast-date">${dayName}</div>
              <div class="forecast-icon">${condition.emoji}</div>
              <div class="forecast-temps">
                <span class="forecast-temp-max">${tempMax}°</span>
                <span class="forecast-temp-min">${tempMin}°</span>
              </div>
              ${precip > 0 ? `<div class="forecast-precip">💧 ${precip.toFixed(1)}mm</div>` : ''}
            </div>
          `;
        }
        
        forecastContainer.innerHTML = forecastHTML;
      }
  
      // Hourly Weather Modal functionality
      const hourlyWeatherModal = document.getElementById("hourlyWeatherModal");
      const closeHourlyWeatherBtn = document.getElementById("closeHourlyWeatherBtn");
  
      // Close hourly weather modal
      closeHourlyWeatherBtn.onclick = () => {
        hourlyWeatherModal.classList.remove("active");
      };
  
      hourlyWeatherModal.onclick = (e) => {
        if (e.target === hourlyWeatherModal) {
          hourlyWeatherModal.classList.remove("active");
        }
      };
  
      // Show hourly weather for a specific day
      function showHourlyWeather(dayIndex) {
        if (!hourlyData || !forecastData) {
          showToast({
            text: "Hourly weather data not available",
            type: "warning",
            duration: 2500,
            position: "bottom-right"
          });
          return;
        }
  
        const selectedDate = new Date(forecastData.time[dayIndex]);
        const dayName = dayIndex === 0 ? 'Today' : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][selectedDate.getDay()];
        const dateString = selectedDate.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
  
        // Update modal header
        document.getElementById("hourlyDate").textContent = `${dayName} - ${dateString}`;
        document.getElementById("hourlyLocation").textContent = `📍 ${locationData.city}, ${locationData.country}`;
  
        // Filter hourly data for the selected day
        const startOfDay = new Date(selectedDate);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(selectedDate);
        endOfDay.setHours(23, 59, 59, 999);
  
        const hourlyForDay = [];
        for (let i = 0; i < hourlyData.time.length; i++) {
          const hourTime = new Date(hourlyData.time[i]);
          if (hourTime >= startOfDay && hourTime <= endOfDay) {
            hourlyForDay.push({
              time: hourTime,
              temperature: hourlyData.temperature_2m[i],
              humidity: hourlyData.relative_humidity_2m[i],
              precipitation: hourlyData.precipitation[i] || 0,
              weatherCode: hourlyData.weather_code[i],
              windSpeed: hourlyData.wind_speed_10m[i]
            });
          }
        }
  
        // Display hourly weather
        displayHourlyWeather(hourlyForDay);
        hourlyWeatherModal.classList.add("active");
      }
  
      // Display hourly weather data
      function displayHourlyWeather(hourlyData) {
        const container = document.getElementById("hourlyWeatherContainer");
        let hourlyHTML = '';
  
        hourlyData.forEach(hour => {
          const timeString = hour.time.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
          });
          const condition = getWeatherCondition(hour.weatherCode);
          const temp = Math.round(hour.temperature);
          const humidity = Math.round(hour.humidity);
          const windSpeed = Math.round(hour.windSpeed);
          const precip = hour.precipitation;
  
          hourlyHTML += `
            <div class="hourly-weather-item">
              <div class="hourly-time">${timeString}</div>
              <div class="hourly-icon">${condition.emoji}</div>
              <div class="hourly-temp">${temp}°C</div>
              <div class="hourly-details">
                <div class="hourly-humidity">💧 ${humidity}%</div>
                <div class="hourly-wind">💨 ${windSpeed} km/h</div>
                ${precip > 0 ? `<div class="hourly-precip">🌧️ ${precip.toFixed(1)}mm</div>` : ''}
              </div>
            </div>
          `;
        });
  
        container.innerHTML = hourlyHTML;
      }
  
      // Close weather modals with Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          if (weatherModal.classList.contains("active")) {
            weatherModal.classList.remove("active");
          }
          if (hourlyWeatherModal.classList.contains("active")) {
            hourlyWeatherModal.classList.remove("active");
          }
        }
      });
  
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          pos => getWeather(pos.coords.latitude, pos.coords.longitude),
          () => {
            document.getElementById("weather").textContent = "Location denied.";
            document.getElementById("location").textContent = "📍 Location access required";
            
            showToast({
              text: "Location access denied. Please enable location permissions.",
              type: "warning",
              duration: 5000,
              close: true,
              position: "bottom-right"
            });
          }
        );
      }
  
      /* TO-DO LISTS SYSTEM */
      const openTodoBtn = document.getElementById("openTodoBtn");
      const todoModal = document.getElementById("todoModal");
      const closeTodoBtn = document.getElementById("closeTodoBtn");
      const createListBtn = document.getElementById("createListBtn");
      const todoListsContainer = document.getElementById("todoListsContainer");
      const todoCount = document.getElementById("todoCount");
      
      // Create List Modal
      const createListModal = document.getElementById("createListModal");
      const newListNameInput = document.getElementById("newListNameInput");
      const createListSaveBtn = document.getElementById("createListSaveBtn");
      const createListCancelBtn = document.getElementById("createListCancelBtn");
      
      // View List Modal
      const viewListModal = document.getElementById("viewListModal");
      const viewListName = document.getElementById("viewListName");
      const viewListTaskInput = document.getElementById("viewListTaskInput");
      const viewListTaskNote = document.getElementById("viewListTaskNote");
      const taskPriority = document.getElementById("taskPriority");
      const taskDueDate = document.getElementById("taskDueDate");
      const viewListAddTaskBtn = document.getElementById("viewListAddTaskBtn");
      const viewListTasks = document.getElementById("viewListTasks");
      const taskProgress = document.getElementById("taskProgress");
      const closeViewListBtn = document.getElementById("closeViewListBtn");
      const listSettingsBtn = document.getElementById("listSettingsBtn");
      
      // List Settings Modal
      const listSettingsModal = document.getElementById("listSettingsModal");
      const settingsListNameInput = document.getElementById("settingsListNameInput");
      const saveListSettingsBtn = document.getElementById("saveListSettingsBtn");
      const deleteListFromSettingsBtn = document.getElementById("deleteListFromSettingsBtn");
      const cancelListSettingsBtn = document.getElementById("cancelListSettingsBtn");
      
      let todoLists = [];
      let currentListId = null;
      let createListColor = 'blue';
      let settingsListColor = 'blue';
  
      // Load to-do lists from localStorage
      function loadTodoLists() {
        todoLists = JSON.parse(localStorage.getItem("todoLists")) || [];
        renderTodoLists();
        updateTodoCount();
      }
  
      // Save to-do lists to localStorage
      function saveTodoLists() {
        localStorage.setItem("todoLists", JSON.stringify(todoLists));
        updateTodoCount();
      }
  
      // Update total tasks count
      function updateTodoCount() {
        const totalTasks = todoLists.reduce((sum, list) => sum + list.tasks.length, 0);
        const completedTasks = todoLists.reduce((sum, list) => 
          sum + list.tasks.filter(t => t.done).length, 0);
        todoCount.textContent = `${totalTasks} task${totalTasks !== 1 ? 's' : ''} (${completedTasks} done)`;
        
        // Count tasks overdue
        const tasksOverdue = todoLists.reduce((sum, list) => 
          sum + list.tasks.filter(t => !t.done && t.dueDate && isOverdue(t.dueDate)).length, 0);
        
        const tasksOverdueEl = document.getElementById("tasksOverdue");
        tasksOverdueEl.textContent = `${tasksOverdue} task${tasksOverdue !== 1 ? 's' : ''} overdue`;
        
        if (tasksOverdue > 0) {
          tasksOverdueEl.classList.add('has-tasks');
        } else {
          tasksOverdueEl.classList.remove('has-tasks');
        }
        
        // Count tasks due today
        const tasksDueToday = todoLists.reduce((sum, list) => 
          sum + list.tasks.filter(t => !t.done && t.dueDate && isToday(t.dueDate)).length, 0);
        
        const tasksDueTodayEl = document.getElementById("tasksDueToday");
        tasksDueTodayEl.textContent = `${tasksDueToday} task${tasksDueToday !== 1 ? 's' : ''} due today`;
        
        if (tasksDueToday > 0) {
          tasksDueTodayEl.classList.add('has-tasks');
        } else {
          tasksDueTodayEl.classList.remove('has-tasks');
        }
      }
  
      // Render to-do lists overview
      function renderTodoLists() {
        if (todoLists.length === 0) {
          todoListsContainer.innerHTML = `
            <div class="empty-todo">
              <div style="font-size: 3rem; margin-bottom: 1rem;">✓</div>
              <p>No lists yet. Create your first to-do list!</p>
            </div>
          `;
          return;
        }
  
        todoListsContainer.innerHTML = todoLists.map(list => {
          const completedCount = list.tasks.filter(t => t.done).length;
          
          // Count tasks overdue in this list
          const tasksOverdueInList = list.tasks.filter(t => 
            !t.done && t.dueDate && isOverdue(t.dueDate)
          ).length;
          
          // Count tasks due today in this list
          const tasksDueTodayInList = list.tasks.filter(t => 
            !t.done && t.dueDate && isToday(t.dueDate)
          ).length;
          
          const hasOverdue = tasksOverdueInList > 0;
          const hasDueToday = tasksDueTodayInList > 0;
          
          // Overdue takes priority over due today
          const highlightClass = hasOverdue ? 'has-overdue' : (hasDueToday ? 'has-due-today' : '');
          
          const overdueBadge = hasOverdue 
            ? `<div class="overdue-badge">⚠️ ${tasksOverdueInList} overdue</div>` 
            : '';
          
          const dueTodayBadge = hasDueToday && !hasOverdue
            ? `<div class="due-today-badge">📅 ${tasksDueTodayInList} due today</div>` 
            : '';
          
          const tasksPreview = list.tasks.slice(0, 5).map(task => `
            <div class="todo-list-task ${task.done ? 'done' : ''}">${task.text}</div>
          `).join('');
          
          return `
            <div class="todo-list-card ${list.color} ${highlightClass}" data-id="${list.id}">
              <div class="todo-list-header">
                <div class="todo-list-name">${list.name || 'Untitled List'}</div>
                <div class="todo-list-count">${completedCount}/${list.tasks.length}</div>
              </div>
              <div class="todo-list-tasks">
                ${tasksPreview || '<div class="todo-list-task" style="opacity: 0.5;">No tasks yet</div>'}
                ${list.tasks.length > 5 ? `<div class="todo-list-task" style="opacity: 0.5;">+ ${list.tasks.length - 5} more...</div>` : ''}
              </div>
              ${overdueBadge}
              ${dueTodayBadge}
            </div>
          `;
        }).join('');
  
        // Add click listeners to lists
        document.querySelectorAll('.todo-list-card').forEach(listEl => {
          listEl.addEventListener('click', () => {
            const id = listEl.dataset.id;
            openListView(id);
          });
        });
      }
  
      // Open to-do lists overview modal
      openTodoBtn.onclick = () => {
        todoModal.classList.add("active");
      };
  
      closeTodoBtn.onclick = () => {
        todoModal.classList.remove("active");
      };
  
      todoModal.onclick = (e) => {
        if (e.target === todoModal) {
          todoModal.classList.remove("active");
        }
      };
  
      // CREATE LIST MODAL
      createListBtn.onclick = () => {
        newListNameInput.value = "";
        createListColor = 'blue';
        updateCreateListColorSelection();
        createListModal.classList.add("active");
      };
  
      // Color selection for create modal
      document.querySelectorAll('#createListColors .list-color-option').forEach(option => {
        option.addEventListener('click', () => {
          createListColor = option.dataset.color;
          updateCreateListColorSelection();
        });
      });
  
      function updateCreateListColorSelection() {
        document.querySelectorAll('#createListColors .list-color-option').forEach(option => {
          if (option.dataset.color === createListColor) {
            option.classList.add('active');
          } else {
            option.classList.remove('active');
          }
        });
      }
  
      createListSaveBtn.onclick = () => {
        const name = newListNameInput.value.trim();
  
        if (!name) {
          showToast({
            text: "Please enter a list name",
            type: "warning",
            duration: 2500,
            position: "bottom-right"
          });
          return;
        }
  
        const newList = {
          id: Date.now().toString(),
          name,
          color: createListColor,
          tasks: []
        };
        todoLists.unshift(newList);
        saveTodoLists();
        renderTodoLists();
        createListModal.classList.remove("active");
        
        showToast({
          text: `List "${name}" created!`,
          type: "success",
          duration: 2500,
          position: "bottom-right"
        });
      };
  
      createListCancelBtn.onclick = () => {
        createListModal.classList.remove("active");
      };
  
      createListModal.onclick = (e) => {
        if (e.target === createListModal) {
          createListModal.classList.remove("active");
        }
      };
  
      // VIEW LIST MODAL
      function openListView(id) {
        const list = todoLists.find(l => l.id === id);
        if (!list) return;
  
        currentListId = id;
        viewListName.textContent = list.name;
        viewListTaskInput.value = "";
        viewListTaskNote.value = "";
        taskPriority.value = "none";
        taskDueDate.value = "";
        renderViewListTasks();
        viewListModal.classList.add("active");
      }
  
      // Helper function to check if date is today
      function isToday(dateString) {
        if (!dateString) return false;
        const today = new Date();
        const date = new Date(dateString);
        return date.toDateString() === today.toDateString();
      }
  
      // Helper function to check if date is overdue
      function isOverdue(dateString) {
        if (!dateString) return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const date = new Date(dateString);
        return date < today;
      }
  
      // Format due date for display
      function formatDueDate(dateString) {
        if (!dateString) return '';
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString(undefined, options);
      }
  
      function renderViewListTasks() {
        const list = todoLists.find(l => l.id === currentListId);
        if (!list) return;
  
        // Get sorting preference
        const sortBy = taskSortSelect.value;
        const showRecurring = showRecurringToggle.checked;
        
        // Filter and sort tasks
        let tasksToShow = [...list.tasks];
        
        // Filter recurring tasks if needed
        if (!showRecurring) {
          tasksToShow = tasksToShow.filter(task => !task.recurring);
        }
        
        // Sort tasks
        if (sortBy !== 'none') {
          tasksToShow.sort((a, b) => {
            switch (sortBy) {
              case 'priority':
                const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1, 'none': 0 };
                return priorityOrder[b.priority] - priorityOrder[a.priority];
              case 'dueDate':
                if (!a.dueDate && !b.dueDate) return 0;
                if (!a.dueDate) return 1;
                if (!b.dueDate) return -1;
                return new Date(a.dueDate) - new Date(b.dueDate);
              case 'dueDateDesc':
                if (!a.dueDate && !b.dueDate) return 0;
                if (!a.dueDate) return -1;
                if (!b.dueDate) return 1;
                return new Date(b.dueDate) - new Date(a.dueDate);
              case 'created':
                return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
              case 'createdDesc':
                return new Date(a.createdAt || 0) - new Date(b.createdAt || 0);
              default:
                return 0;
            }
          });
        }
  
        const completedCount = tasksToShow.filter(t => t.done).length;
        taskProgress.textContent = `${completedCount}/${tasksToShow.length} completed`;
  
        if (tasksToShow.length === 0) {
          viewListTasks.innerHTML = '<div class="empty-tasks">No tasks yet. Add your first task above!</div>';
          return;
        }
  
        viewListTasks.innerHTML = tasksToShow.map((task, originalIndex) => {
          const noteHtml = task.note ? `<div class="task-note">${task.note}</div>` : '';
          
          // Build metadata badges
          let metadataHtml = '';
          if (task.priority && task.priority !== 'none') {
            metadataHtml += `<span class="priority-badge ${task.priority}">${task.priority}</span>`;
          }
          if (task.dueDate) {
            const dueClass = isOverdue(task.dueDate) ? 'overdue' : (isToday(task.dueDate) ? 'today' : '');
            const dueIcon = isOverdue(task.dueDate) ? '⚠️' : (isToday(task.dueDate) ? '📅' : '📆');
            metadataHtml += `<span class="due-date-badge ${dueClass}">${dueIcon} ${formatDueDate(task.dueDate)}</span>`;
          }
          if (task.recurring) {
            const recurringIcon = { 'daily': '🔄', 'weekly': '📅', 'monthly': '📆', 'yearly': '🗓️' };
            metadataHtml += `<span class="recurring-badge">${recurringIcon[task.recurring]} ${task.recurring}</span>`;
          }
          
          const metadataSection = metadataHtml ? `<div class="task-metadata">${metadataHtml}</div>` : '';
          
          return `
            <li draggable="true" data-original-index="${originalIndex}">
              <div class="drag-handle">⋮⋮</div>
              <span class="${task.done ? 'done' : ''}" data-original-index="${originalIndex}">
                <div class="task-text">${task.text}</div>
                ${noteHtml}
                ${metadataSection}
              </span>
              <button data-original-index="${originalIndex}">✕</button>
            </li>
          `;
        }).join('');
  
        // Add drag and drop functionality
        setupDragAndDrop();
  
        // Add click listeners
        viewListTasks.querySelectorAll('span').forEach(span => {
          span.addEventListener('click', () => {
            const originalIndex = parseInt(span.dataset.originalIndex);
            toggleTaskCompletion(originalIndex);
          });
        });
  
        viewListTasks.querySelectorAll('button').forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const originalIndex = parseInt(btn.dataset.originalIndex);
            deleteTask(originalIndex);
          });
        });
      }
  
      // Drag and drop functionality
      function setupDragAndDrop() {
        const taskItems = viewListTasks.querySelectorAll('li');
        
        taskItems.forEach(item => {
          item.addEventListener('dragstart', handleDragStart);
          item.addEventListener('dragover', handleDragOver);
          item.addEventListener('drop', handleDrop);
          item.addEventListener('dragend', handleDragEnd);
          item.addEventListener('dragenter', handleDragEnter);
          item.addEventListener('dragleave', handleDragLeave);
        });
      }
  
      let draggedElement = null;
  
      function handleDragStart(e) {
        draggedElement = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.outerHTML);
      }
  
      function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      }
  
      function handleDragEnter(e) {
        e.preventDefault();
        if (this !== draggedElement) {
          this.classList.add('drag-over');
        }
      }
  
      function handleDragLeave(e) {
        this.classList.remove('drag-over');
      }
  
      function handleDrop(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        
        if (this !== draggedElement) {
          const draggedIndex = parseInt(draggedElement.dataset.originalIndex);
          const targetIndex = parseInt(this.dataset.originalIndex);
          
          // Reorder tasks in the actual list
          const list = todoLists.find(l => l.id === currentListId);
          if (list) {
            const draggedTask = list.tasks[draggedIndex];
            list.tasks.splice(draggedIndex, 1);
            list.tasks.splice(targetIndex, 0, draggedTask);
            saveTodoLists();
            renderViewListTasks();
          }
        }
      }
  
      function handleDragEnd(e) {
        this.classList.remove('dragging');
        draggedElement = null;
        
        // Remove drag-over class from all items
        viewListTasks.querySelectorAll('li').forEach(item => {
          item.classList.remove('drag-over');
        });
      }
  
      // Recurring task functionality
      function processRecurringTasks() {
        const today = new Date().toISOString().split('T')[0];
        
        todoLists.forEach(list => {
          list.tasks.forEach(task => {
            if (task.recurring && task.done && task.dueDate) {
              const taskDate = new Date(task.dueDate);
              const todayDate = new Date(today);
              
              // Check if task was completed and is due for renewal
              if (taskDate <= todayDate) {
                let nextDueDate = new Date(taskDate);
                
                switch (task.recurring) {
                  case 'daily':
                    nextDueDate.setDate(nextDueDate.getDate() + 1);
                    break;
                  case 'weekly':
                    nextDueDate.setDate(nextDueDate.getDate() + 7);
                    break;
                  case 'monthly':
                    nextDueDate.setMonth(nextDueDate.getMonth() + 1);
                    break;
                  case 'yearly':
                    nextDueDate.setFullYear(nextDueDate.getFullYear() + 1);
                    break;
                }
                
                // Create new recurring task
                const newTask = {
                  ...task,
                  done: false,
                  dueDate: nextDueDate.toISOString().split('T')[0],
                  createdAt: new Date().toISOString(),
                  id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
                };
                
                list.tasks.push(newTask);
              }
            }
          });
        });
        
        saveTodoLists();
      }
  
  
      function addTaskToCurrentList() {
        const text = viewListTaskInput.value.trim();
        const note = viewListTaskNote.value.trim();
        const priority = taskPriority.value;
        const dueDate = taskDueDate.value;
        const recurring = taskRecurring.value;
        
        if (!text) {
          showToast({
            text: "Please enter a task title",
            type: "warning",
            duration: 2000,
            position: "bottom-right"
          });
          return;
        }
  
        const list = todoLists.find(l => l.id === currentListId);
        if (!list) return;
  
        const newTask = {
          text, 
          note, 
          priority, 
          dueDate: dueDate || null,
          recurring: recurring !== 'none' ? recurring : null,
          done: false,
          createdAt: new Date().toISOString(),
          id: Date.now().toString()
        };
        
        list.tasks.push(newTask);
        saveTodoLists();
        renderViewListTasks();
        renderTodoLists();
        viewListTaskInput.value = "";
        viewListTaskNote.value = "";
        taskPriority.value = "none";
        taskDueDate.value = "";
        taskRecurring.value = "none";
  
        showToast({
          text: "Task added!",
          type: "success",
          duration: 2000,
          position: "bottom-right"
        });
      }
  
      function toggleTaskCompletion(index) {
        const list = todoLists.find(l => l.id === currentListId);
        if (!list) return;
  
        const task = list.tasks[index];
        task.done = !task.done;
        
        // If completing a recurring task, create the next occurrence
        if (task.done && task.recurring && task.dueDate) {
          const taskDate = new Date(task.dueDate);
          let nextDueDate = new Date(taskDate);
          
          switch (task.recurring) {
            case 'daily':
              nextDueDate.setDate(nextDueDate.getDate() + 1);
              break;
            case 'weekly':
              nextDueDate.setDate(nextDueDate.getDate() + 7);
              break;
            case 'monthly':
              nextDueDate.setMonth(nextDueDate.getMonth() + 1);
              break;
            case 'yearly':
              nextDueDate.setFullYear(nextDueDate.getFullYear() + 1);
              break;
          }
          
          // Create new recurring task
          const newTask = {
            ...task,
            done: false,
            dueDate: nextDueDate.toISOString().split('T')[0],
            createdAt: new Date().toISOString(),
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9)
          };
          
          list.tasks.push(newTask);
        }
        
        saveTodoLists();
        renderViewListTasks();
        renderTodoLists();
  
        showToast({
          text: task.done ? "Task completed! 🎉" : "Task marked incomplete",
          type: task.done ? "success" : "info",
          duration: 2000,
          position: "bottom-right"
        });
      }
  
      function deleteTask(index) {
        const list = todoLists.find(l => l.id === currentListId);
        if (!list) return;
  
        const taskText = list.tasks[index].text;
        list.tasks.splice(index, 1);
        saveTodoLists();
        renderViewListTasks();
        renderTodoLists();
  
        showToast({
          text: `Task deleted: "${taskText}"`,
          type: "info",
          duration: 2500,
          position: "bottom-right"
        });
      }
  
      viewListAddTaskBtn.onclick = addTaskToCurrentList;
  
      // Sort controls event listeners
      taskSortSelect.addEventListener('change', () => {
        renderViewListTasks();
      });
  
      showRecurringToggle.addEventListener('change', () => {
        renderViewListTasks();
      });
  
      // Enter key support for both inputs
      viewListTaskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addTaskToCurrentList();
        }
      });
  
      viewListTaskNote.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addTaskToCurrentList();
        }
      });
  
      closeViewListBtn.onclick = () => {
        viewListModal.classList.remove("active");
      };
  
      viewListModal.onclick = (e) => {
        if (e.target === viewListModal) {
          viewListModal.classList.remove("active");
        }
      };
  
      // LIST SETTINGS MODAL
      listSettingsBtn.onclick = () => {
        const list = todoLists.find(l => l.id === currentListId);
        if (!list) return;
  
        settingsListNameInput.value = list.name;
        settingsListColor = list.color;
        updateSettingsListColorSelection();
        listSettingsModal.classList.add("active");
      };
  
      // Color selection for settings modal
      document.querySelectorAll('#settingsListColors .list-color-option').forEach(option => {
        option.addEventListener('click', () => {
          settingsListColor = option.dataset.color;
          updateSettingsListColorSelection();
        });
      });
  
      function updateSettingsListColorSelection() {
        document.querySelectorAll('#settingsListColors .list-color-option').forEach(option => {
          if (option.dataset.color === settingsListColor) {
            option.classList.add('active');
          } else {
            option.classList.remove('active');
          }
        });
      }
  
      saveListSettingsBtn.onclick = () => {
        const name = settingsListNameInput.value.trim();
  
        if (!name) {
          showToast({
            text: "Please enter a list name",
            type: "warning",
            duration: 2500,
            position: "bottom-right"
          });
          return;
        }
  
        const listIndex = todoLists.findIndex(l => l.id === currentListId);
        if (listIndex !== -1) {
          todoLists[listIndex].name = name;
          todoLists[listIndex].color = settingsListColor;
          saveTodoLists();
          renderTodoLists();
          viewListName.textContent = name;
          listSettingsModal.classList.remove("active");
  
          showToast({
            text: "List settings updated!",
            type: "success",
            duration: 2000,
            position: "bottom-right"
          });
        }
      };
  
      deleteListFromSettingsBtn.onclick = () => {
        if (!currentListId) return;
  
        if (confirm("Are you sure you want to delete this list and all its tasks?")) {
          todoLists = todoLists.filter(l => l.id !== currentListId);
          saveTodoLists();
          renderTodoLists();
          listSettingsModal.classList.remove("active");
          viewListModal.classList.remove("active");
          
          showToast({
            text: "List deleted",
            type: "info",
            duration: 2500,
            position: "bottom-right"
          });
        }
      };
  
      cancelListSettingsBtn.onclick = () => {
        listSettingsModal.classList.remove("active");
      };
  
      listSettingsModal.onclick = (e) => {
        if (e.target === listSettingsModal) {
          listSettingsModal.classList.remove("active");
        }
      };
  
      // Keyboard shortcuts for modals
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          if (listSettingsModal.classList.contains("active")) {
            listSettingsModal.classList.remove("active");
          } else if (viewListModal.classList.contains("active")) {
            viewListModal.classList.remove("active");
          } else if (createListModal.classList.contains("active")) {
            createListModal.classList.remove("active");
          } else if (todoModal.classList.contains("active")) {
            todoModal.classList.remove("active");
          }
        }
      });
  
      // Initialize to-do lists
      loadTodoLists();
      
      // Process recurring tasks after loading lists
      processRecurringTasks();
  
      /* GLOBAL SEARCH */
      const searchBtn = document.getElementById("searchBtn");
      const searchModal = document.getElementById("searchModal");
      const searchInput = document.getElementById("searchInput");
      const searchResults = document.getElementById("searchResults");
      const closeSearchBtn = document.getElementById("closeSearchBtn");
  
      // Open search modal
      searchBtn.onclick = () => {
        searchModal.classList.add("active");
        setTimeout(() => searchInput.focus(), 100);
        updateAdvancedFilters(); // Show correct filters on open
      };
  
      closeSearchBtn.onclick = () => {
        searchModal.classList.remove("active");
        searchInput.value = "";
        
        // Reset filters
        document.querySelector('input[name="searchType"][value="all"]').checked = true;
        document.getElementById('filterPriority').value = '';
        document.getElementById('filterDueDate').value = '';
        document.getElementById('filterCompletion').value = '';
        document.getElementById('filterListColor').value = '';
        document.getElementById('filterRecurring').value = '';
        document.getElementById('filterNoteColor').value = '';
        document.getElementById('filterCreatedDate').value = '';
        updateAdvancedFilters();
        
        searchResults.innerHTML = `
          <div class="search-empty">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
            <p>Type to search across all tasks, notes, recurring status, and creation dates</p>
          </div>
        `;
      };
  
      searchModal.onclick = (e) => {
        if (e.target === searchModal) {
          searchModal.classList.remove("active");
        }
      };
  
      // Filter functions
      function applyTaskFilters(task, list) {
        const priorityFilter = document.getElementById('filterPriority').value;
        const dueDateFilter = document.getElementById('filterDueDate').value;
        const completionFilter = document.getElementById('filterCompletion').value;
        const listColorFilter = document.getElementById('filterListColor').value;
        const recurringFilter = document.getElementById('filterRecurring').value;
  
        // Priority filter
        if (priorityFilter && task.priority !== priorityFilter) {
          return false;
        }
  
        // Due date filter
        if (dueDateFilter) {
          if (dueDateFilter === 'nodate' && task.dueDate) return false;
          if (dueDateFilter !== 'nodate' && !task.dueDate) return false;
          if (dueDateFilter === 'overdue' && !isOverdue(task.dueDate)) return false;
          if (dueDateFilter === 'today' && !isToday(task.dueDate)) return false;
          if (dueDateFilter === 'upcoming' && (isOverdue(task.dueDate) || isToday(task.dueDate))) return false;
        }
  
        // Completion filter
        if (completionFilter === 'completed' && !task.done) return false;
        if (completionFilter === 'incomplete' && task.done) return false;
  
        // List color filter
        if (listColorFilter && list.color !== listColorFilter) return false;
  
        // Recurring filter
        if (recurringFilter === 'recurring' && !task.recurring) return false;
        if (recurringFilter === 'non-recurring' && task.recurring) return false;
  
        return true;
      }
  
      function applyNoteFilters(note) {
        const noteColorFilter = document.getElementById('filterNoteColor').value;
  
        // Note color filter
        if (noteColorFilter && note.color !== noteColorFilter) return false;
  
        return true;
      }
  
      function applyCommonFilters(item) {
        const createdDateFilter = document.getElementById('filterCreatedDate').value;
        
        if (createdDateFilter && item.createdAt) {
          const itemDate = new Date(item.createdAt);
          const today = new Date();
          const yesterday = new Date(today);
          yesterday.setDate(yesterday.getDate() - 1);
          
          const startOfWeek = new Date(today);
          startOfWeek.setDate(today.getDate() - today.getDay());
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 6);
          
          const startOfLastWeek = new Date(startOfWeek);
          startOfLastWeek.setDate(startOfWeek.getDate() - 7);
          const endOfLastWeek = new Date(startOfLastWeek);
          endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);
          
          const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
          const startOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          const endOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
          
          switch (createdDateFilter) {
            case 'today':
              if (itemDate.toDateString() !== today.toDateString()) return false;
              break;
            case 'yesterday':
              if (itemDate.toDateString() !== yesterday.toDateString()) return false;
              break;
            case 'thisweek':
              if (itemDate < startOfWeek || itemDate > endOfWeek) return false;
              break;
            case 'lastweek':
              if (itemDate < startOfLastWeek || itemDate > endOfLastWeek) return false;
              break;
            case 'thismonth':
              if (itemDate < startOfMonth) return false;
              break;
            case 'lastmonth':
              if (itemDate < startOfLastMonth || itemDate > endOfLastMonth) return false;
              break;
          }
        }
  
        return true;
      }
  
      // Search functionality
      function performSearch(query) {
        if (!query || query.trim().length === 0) {
          searchResults.innerHTML = `
            <div class="search-empty">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
              <p>Type to search across all tasks, notes, recurring status, and creation dates</p>
            </div>
          `;
          return;
        }
  
        const searchTerm = query.toLowerCase();
        const searchType = document.querySelector('input[name="searchType"]:checked').value;
        
        let taskResults = [];
        let noteResults = [];
  
        // Search through tasks if type is 'all' or 'tasks'
        if (searchType === 'all' || searchType === 'tasks') {
        todoLists.forEach(list => {
          list.tasks.forEach((task, index) => {
            const taskText = task.text.toLowerCase();
            const taskNote = task.note ? task.note.toLowerCase() : "";
            const recurringText = task.recurring ? task.recurring.toLowerCase() : "";
            
            // Also search in creation date (formatted)
            let createdAtText = "";
            if (task.createdAt) {
              const createdDate = new Date(task.createdAt);
              createdAtText = createdDate.toLocaleDateString(undefined, { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric',
                weekday: 'long'
              }).toLowerCase();
            }
            
              if (taskText.includes(searchTerm) || 
                  taskNote.includes(searchTerm) || 
                  recurringText.includes(searchTerm) ||
                  createdAtText.includes(searchTerm)) {
                
                // Apply advanced filters
                let passesFilters = applyTaskFilters(task, list);
                if (searchType === 'all') {
                  passesFilters = passesFilters && applyCommonFilters(task);
                }
                
                if (passesFilters) {
                  taskResults.push({
                type: 'task',
                listName: list.name,
                listId: list.id,
                listColor: list.color,
                taskIndex: index,
                title: task.text,
                note: task.note,
                priority: task.priority,
                dueDate: task.dueDate,
                recurring: task.recurring,
                createdAt: task.createdAt,
                id: task.id,
                done: task.done
                  });
                }
              }
            });
          });
        }
  
        // Search through notes if type is 'all' or 'notes'
        if (searchType === 'all' || searchType === 'notes') {
          notes.forEach(note => {
            const noteTitle = note.title.toLowerCase();
            const noteContent = note.content.toLowerCase();
            
            if (noteTitle.includes(searchTerm) || noteContent.includes(searchTerm)) {
              // Apply note filters
              let passesFilters = applyNoteFilters(note);
              if (searchType === 'all') {
                passesFilters = passesFilters && applyCommonFilters(note);
              }
              
              if (passesFilters) {
                noteResults.push({
                  type: 'note',
                  id: note.id,
                  title: note.title,
                  content: note.content,
                  color: note.color,
                  createdAt: note.createdAt
                });
              }
            }
          });
        }
  
        // Display results
        if (taskResults.length === 0 && noteResults.length === 0) {
          searchResults.innerHTML = `
            <div class="search-no-results">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">😔</div>
              <p>No results found for "${query}"</p>
            </div>
          `;
          return;
        }
  
        let resultsHtml = '';
  
        // Display task results
        if (taskResults.length > 0) {
          resultsHtml += `
            <div class="search-section">
              <div class="search-section-title">Tasks (${taskResults.length})</div>
              ${taskResults.map(result => {
                const highlightedTitle = highlightText(result.title, searchTerm);
                const highlightedNote = result.note ? highlightText(result.note, searchTerm) : '';
                const doneClass = result.done ? 'style="opacity: 0.6; text-decoration: line-through;"' : '';
                
                // Build metadata badges for search results
                let metadataHtml = '';
                if (result.priority && result.priority !== 'none') {
                  metadataHtml += `<span class="priority-badge ${result.priority}">${result.priority}</span> `;
                }
                if (result.dueDate) {
                  const dueClass = isOverdue(result.dueDate) ? 'overdue' : (isToday(result.dueDate) ? 'today' : '');
                  const dueIcon = isOverdue(result.dueDate) ? '⚠️' : (isToday(result.dueDate) ? '📅' : '📆');
                  metadataHtml += `<span class="due-date-badge ${dueClass}">${dueIcon} ${formatDueDate(result.dueDate)}</span> `;
                }
                if (result.recurring) {
                  const recurringIcon = { 'daily': '🔄', 'weekly': '📅', 'monthly': '📆', 'yearly': '🗓️' };
                  metadataHtml += `<span class="recurring-badge">${recurringIcon[result.recurring]} ${result.recurring}</span> `;
                }
                
                // Format creation date
                let createdDateHtml = '';
                if (result.createdAt) {
                  const createdDate = new Date(result.createdAt);
                  const formattedDate = createdDate.toLocaleDateString(undefined, { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  });
                  createdDateHtml = `<div class="search-result-meta">Created: ${formattedDate}</div>`;
                }
                
                // Add task ID for reference (subtle)
                const taskIdHtml = result.id ? `<div class="search-result-meta" style="font-size: 0.7rem; opacity: 0.3;">ID: ${result.id.substring(0, 8)}...</div>` : '';
                
                return `
                  <div class="search-result-item task" data-type="task" data-list-id="${result.listId}">
                    <div class="search-result-type">Task ${result.done ? '• Completed' : ''}</div>
                    <div class="search-result-title" ${doneClass}>${highlightedTitle}</div>
                    ${highlightedNote ? `<div class="search-result-content" ${doneClass}>${highlightedNote}</div>` : ''}
                    ${metadataHtml ? `<div class="task-metadata" style="margin-top: 0.5rem;">${metadataHtml}</div>` : ''}
                    <div class="search-result-meta">From list: ${result.listName}</div>
                    ${createdDateHtml}
                    ${taskIdHtml}
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }
  
        // Display note results
        if (noteResults.length > 0) {
          resultsHtml += `
            <div class="search-section">
              <div class="search-section-title">Notes (${noteResults.length})</div>
              ${noteResults.map(result => {
                const highlightedTitle = highlightText(result.title || 'Untitled', searchTerm);
                const highlightedContent = highlightText(result.content, searchTerm);
                
                return `
                  <div class="search-result-item note" data-type="note" data-note-id="${result.id}">
                    <div class="search-result-type">Note • ${result.color}</div>
                    <div class="search-result-title">${highlightedTitle}</div>
                    <div class="search-result-content">${highlightedContent}</div>
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }
  
        searchResults.innerHTML = resultsHtml;
  
        // Add click listeners to results
        document.querySelectorAll('.search-result-item').forEach(item => {
          item.addEventListener('click', () => {
            handleSearchResultClick(item);
          });
        });
      }
  
      // Highlight search terms
      function highlightText(text, search) {
        if (!text) return '';
        const regex = new RegExp(`(${search})`, 'gi');
        return text.replace(regex, '<span class="search-highlight">$1</span>');
      }
  
      // Handle search result clicks
      function handleSearchResultClick(item) {
        const type = item.dataset.type;
        
        if (type === 'task') {
          const listId = item.dataset.listId;
          searchModal.classList.remove("active");
          openListView(listId);
        } else if (type === 'note') {
          const noteId = item.dataset.noteId;
          searchModal.classList.remove("active");
          
          // Find and open the note
          const note = notes.find(n => n.id === noteId);
          if (note) {
            currentNoteId = noteId;
            noteEditTitle.textContent = "Edit Note";
            noteTitleInput.value = note.title;
            noteContentInput.value = note.content;
            selectedColor = note.color;
            updateColorSelection();
            deleteNoteBtn.style.display = "block";
            noteEditModal.classList.add("active");
          }
        }
      }
  
      // Real-time search
      searchInput.addEventListener("input", (e) => {
        performSearch(e.target.value);
      });
  
      // Filter event listeners
      document.querySelectorAll('input[name="searchType"]').forEach(radio => {
        radio.addEventListener('change', () => {
          updateAdvancedFilters();
          performSearch(searchInput.value);
        });
      });
  
      // Advanced filter listeners
      document.getElementById('filterPriority').addEventListener('change', () => {
        performSearch(searchInput.value);
      });
      document.getElementById('filterDueDate').addEventListener('change', () => {
        performSearch(searchInput.value);
      });
      document.getElementById('filterCompletion').addEventListener('change', () => {
        performSearch(searchInput.value);
      });
      document.getElementById('filterListColor').addEventListener('change', () => {
        performSearch(searchInput.value);
      });
      document.getElementById('filterRecurring').addEventListener('change', () => {
        performSearch(searchInput.value);
      });
      document.getElementById('filterNoteColor').addEventListener('change', () => {
        performSearch(searchInput.value);
      });
      document.getElementById('filterCreatedDate').addEventListener('change', () => {
        performSearch(searchInput.value);
      });
  
      // Function to show/hide advanced filters based on search type
      function updateAdvancedFilters() {
        const searchType = document.querySelector('input[name="searchType"]:checked').value;
        const taskFilters = document.getElementById('taskFilters');
        const noteFilters = document.getElementById('noteFilters');
        const commonFilters = document.getElementById('commonFilters');
        
        if (searchType === 'tasks') {
          taskFilters.style.display = 'flex';
          noteFilters.style.display = 'none';
          commonFilters.style.display = 'none';
        } else if (searchType === 'notes') {
          taskFilters.style.display = 'none';
          noteFilters.style.display = 'flex';
          commonFilters.style.display = 'none';
        } else {
          // For 'All' type, show only common filters
          taskFilters.style.display = 'none';
          noteFilters.style.display = 'none';
          commonFilters.style.display = 'flex';
        }
      }
  
      /* SETTINGS */
      const settingsBtn = document.getElementById("settingsBtn");
      const modal = document.getElementById("settingsModal");
      const saveBtn = document.getElementById("saveSettings");
      const titleInput = document.getElementById("dashboardTitle");
      const nameInput = document.getElementById("userName");
      const accentInput = document.getElementById("accentColor");
      const darkToggle = document.getElementById("darkModeToggle");
      const showGreetingToggle = document.getElementById("showGreetingToggle");
      const enableNotificationsToggle = document.getElementById("enableNotificationsToggle");
      const enableNotificationSoundToggle = document.getElementById("enableNotificationSoundToggle");
      const titleElement = document.querySelector("h1");
      const greetingElement = document.getElementById("greeting");
  
      settingsBtn.onclick = () => modal.classList.add("active");
      modal.onclick = e => { if (e.target === modal) modal.classList.remove("active"); };
  
      function applySettings() {
        const user = JSON.parse(localStorage.getItem("settings")) || {};
        
        // Apply title
        if (user.title) {
          titleElement.textContent = user.title;
        }
        
        // Apply greeting visibility and content
        const showGreeting = user.showGreeting !== false; // Default to true
        if (showGreeting && user.name) {
          greetingElement.textContent = `Hello, ${user.name}!`;
          greetingElement.style.display = "block";
        } else if (showGreeting) {
          greetingElement.textContent = "";
          greetingElement.style.display = "block";
        } else {
          greetingElement.style.display = "none";
        }
        
        // Apply accent color
        if (user.accent) document.documentElement.style.setProperty("--accent", user.accent);
        
        // Apply dark mode
        if (user.darkMode) document.body.classList.add("dark");
        else document.body.classList.remove("dark");
        
        // Set input values
        titleInput.value = user.title || "My Productivity Dashboard";
        nameInput.value = user.name || "";
        accentInput.value = user.accent || "#667eea";
        darkToggle.checked = !!user.darkMode;
        showGreetingToggle.checked = showGreeting;
        enableNotificationsToggle.checked = user.enableNotifications !== false; // Default to true
        enableNotificationSoundToggle.checked = user.enableNotificationSound !== false; // Default to true
      }
  
      saveBtn.onclick = () => {
        const settings = {
          title: titleInput.value.trim() || "My Productivity Dashboard",
          name: nameInput.value.trim(),
          accent: accentInput.value,
          darkMode: darkToggle.checked,
          showGreeting: showGreetingToggle.checked,
          enableNotifications: enableNotificationsToggle.checked,
          enableNotificationSound: enableNotificationSoundToggle.checked
        };
        localStorage.setItem("settings", JSON.stringify(settings));
        modal.classList.remove("active");
        applySettings();
        
        // Show success toast for settings saved
        showToast({
          text: "Settings saved successfully!",
          type: "success",
          duration: 3000,
          position: "top-right"
        });
      };
  
      applySettings();
  
      /* SETTINGS SECTIONS TOGGLE */
      document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
          const section = header.parentElement;
          section.classList.toggle('open');
        });
      });
  
      /* CLEAR CACHE BUTTON */
      const clearCacheBtn = document.getElementById('clearCacheBtn');
      
      clearCacheBtn.addEventListener('click', async () => {
        if (!confirm('Clear app cache? This will remove cached files but keep your tasks and notes safe.')) {
          return;
        }
  
        try {
          // Clear all caches
          if ('caches' in window) {
            const cacheNames = await caches.keys();
            await Promise.all(
              cacheNames.map(cacheName => caches.delete(cacheName))
            );
            
            console.log('[Cache] All caches cleared successfully');
            
            showToast({
              text: "Cache cleared! The app will reload to fetch fresh content.",
              type: "success",
              duration: 3000,
              position: "top-right"
            });
            
            // Reload after a short delay to show the toast
            setTimeout(() => {
              window.location.reload(true);
            }, 1500);
          } else {
            showToast({
              text: "Cache API not supported in this browser",
              type: "warning",
              duration: 3000,
              position: "top-right"
            });
          }
        } catch (error) {
          console.error('[Cache] Error clearing cache:', error);
          showToast({
            text: "Failed to clear cache. Check console for details.",
            type: "error",
            duration: 4000,
            position: "top-right"
          });
        }
      });
      
      // Notification and audio functionality
      let notificationPermission = 'default';
      let notificationSound = null;
      
      // Initialize notification sound
      function initNotificationSound() {
        notificationSound = new Audio();
        // Create a simple notification sound using Web Audio API
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime + 0.2);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
      }
      
      // Request notification permission
      async function requestNotificationPermission() {
        if ('Notification' in window) {
          try {
            const permission = await Notification.requestPermission();
            notificationPermission = permission;
            return permission;
          } catch (error) {
            console.error('Error requesting notification permission:', error);
            return 'denied';
          }
        }
        return 'denied';
      }
      
      // Show browser notification
      function showBrowserNotification(title, options = {}) {
        if (notificationPermission === 'granted' && 'Notification' in window) {
          try {
            const notification = new Notification(title, {
              icon: 'icons/ios/192.png',
              badge: 'icons/ios/32.png',
              ...options
            });
            
            // Auto-close after 5 seconds
            setTimeout(() => {
              notification.close();
            }, 5000);
            
            return notification;
          } catch (error) {
            console.error('Error showing notification:', error);
          }
        }
      }
      
      // Play notification sound
      function playNotificationSound() {
        try {
          initNotificationSound();
        } catch (error) {
          console.error('Error playing notification sound:', error);
        }
      }
  
      // Welcome toast on page load
      setTimeout(() => {
        const user = JSON.parse(localStorage.getItem("settings")) || {};
        const userName = user.name ? user.name : "there";
        
        showToast({
          text: `Welcome back, ${userName}! 👋`,
          type: "info",
          duration: 3500,
          position: "top-right"
        });
        
        // Request notification permission on first load
        requestNotificationPermission();
      }, 500);
  
      /* SHORTCUTS MODAL */
      const shortcutsBtn = document.getElementById("shortcutsBtn");
      const shortcutsModal = document.getElementById("shortcutsModal");
      const closeShortcutsBtn = document.getElementById("closeShortcutsBtn");
  
      shortcutsBtn.onclick = () => {
        shortcutsModal.classList.add("active");
      };
  
      closeShortcutsBtn.onclick = () => {
        shortcutsModal.classList.remove("active");
      };
  
      shortcutsModal.onclick = (e) => {
        if (e.target === shortcutsModal) {
          shortcutsModal.classList.remove("active");
        }
      };
  
      /* KEYBOARD SHORTCUTS */
      document.addEventListener("keydown", (e) => {
        // Escape - Close any open modal
        if (e.key === "Escape") {
          if (searchModal.classList.contains("active")) {
            searchModal.classList.remove("active");
          } else if (modal.classList.contains("active")) {
            modal.classList.remove("active");
          } else if (shortcutsModal.classList.contains("active")) {
            shortcutsModal.classList.remove("active");
          }
        }
  
        // Ctrl+F - Open search
        if ((e.ctrlKey || e.metaKey) && e.key === "f") {
          e.preventDefault();
          searchModal.classList.add("active");
          setTimeout(() => searchInput.focus(), 100);
        }
  
        // Ctrl+S - Open settings
        if ((e.ctrlKey || e.metaKey) && e.key === "s") {
          e.preventDefault();
          modal.classList.add("active");
        }
  
        // Ctrl+K - Open shortcuts guide
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
          e.preventDefault();
          shortcutsModal.classList.add("active");
        }
  
        // Ctrl+D - Toggle dark mode
        if ((e.ctrlKey || e.metaKey) && e.key === "d") {
          e.preventDefault();
          darkToggle.checked = !darkToggle.checked;
          
          const settings = JSON.parse(localStorage.getItem("settings")) || {};
          settings.darkMode = darkToggle.checked;
          localStorage.setItem("settings", JSON.stringify(settings));
          applySettings();
          
          showToast({
            text: darkToggle.checked ? "Dark mode enabled" : "Light mode enabled",
            type: "success",
            duration: 2000,
            position: "top-right"
          });
        }
      });
  
      /* NOTES SYSTEM */
      const openNotesBtn = document.getElementById("openNotesBtn");
      const notesModal = document.getElementById("notesModal");
      const closeNotesBtn = document.getElementById("closeNotesBtn");
      const createNoteBtn = document.getElementById("createNoteBtn");
      const notesGrid = document.getElementById("notesGrid");
      const noteEditModal = document.getElementById("noteEditModal");
      const noteEditTitle = document.getElementById("noteEditTitle");
      const noteTitleInput = document.getElementById("noteTitleInput");
      const noteContentInput = document.getElementById("noteContentInput");
      const saveNoteBtn = document.getElementById("saveNoteBtn");
      const deleteNoteBtn = document.getElementById("deleteNoteBtn");
      const cancelNoteBtn = document.getElementById("cancelNoteBtn");
      const notesCount = document.getElementById("notesCount");
      
      let notes = [];
      let currentNoteId = null;
      let selectedColor = 'yellow';
  
      // Load notes from localStorage
      function loadNotes() {
        notes = JSON.parse(localStorage.getItem("notes")) || [];
        renderNotes();
        updateNotesCount();
      }
  
      // Save notes to localStorage
      function saveNotes() {
        localStorage.setItem("notes", JSON.stringify(notes));
        updateNotesCount();
      }
  
      // Update notes count
      function updateNotesCount() {
        const count = notes.length;
        notesCount.textContent = `${count} note${count !== 1 ? 's' : ''}`;
      }
  
      // Render notes grid
      function renderNotes() {
        if (notes.length === 0) {
          notesGrid.innerHTML = `
            <div class="empty-notes">
              <div style="font-size: 3rem; margin-bottom: 1rem;">📝</div>
              <p>No notes yet. Create your first note!</p>
            </div>
          `;
          return;
        }
  
        notesGrid.innerHTML = notes.map(note => {
          const preview = note.content.substring(0, 100);
          const date = new Date(note.date).toLocaleDateString();
          
          return `
            <div class="sticky-note ${note.color}" data-id="${note.id}">
              <div class="sticky-note-title">${note.title || 'Untitled'}</div>
              <div class="sticky-note-preview">${note.content || 'No content'}</div>
              <div class="sticky-note-date">${date}</div>
            </div>
          `;
        }).join('');
  
        // Add click listeners to notes
        document.querySelectorAll('.sticky-note').forEach(noteEl => {
          noteEl.addEventListener('click', () => {
            const id = noteEl.dataset.id;
            openNoteForEditing(id);
          });
        });
      }
  
      // Open notes modal
      openNotesBtn.onclick = () => {
        notesModal.classList.add("active");
      };
  
      // Close notes modal
      closeNotesBtn.onclick = () => {
        notesModal.classList.remove("active");
      };
  
      notesModal.onclick = (e) => {
        if (e.target === notesModal) {
          notesModal.classList.remove("active");
        }
      };
  
      // Create new note
      createNoteBtn.onclick = () => {
        currentNoteId = null;
        noteEditTitle.textContent = "New Note";
        noteTitleInput.value = "";
        noteContentInput.value = "";
        selectedColor = 'yellow';
        updateColorSelection();
        deleteNoteBtn.style.display = "none";
        noteEditModal.classList.add("active");
      };
  
      // Open note for editing
      function openNoteForEditing(id) {
        const note = notes.find(n => n.id === id);
        if (!note) return;
  
        currentNoteId = id;
        noteEditTitle.textContent = "Edit Note";
        noteTitleInput.value = note.title;
        noteContentInput.value = note.content;
        selectedColor = note.color;
        updateColorSelection();
        deleteNoteBtn.style.display = "block";
        noteEditModal.classList.add("active");
      }
  
      // Color selection
      document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => {
          selectedColor = option.dataset.color;
          updateColorSelection();
        });
      });
  
      function updateColorSelection() {
        document.querySelectorAll('.color-option').forEach(option => {
          if (option.dataset.color === selectedColor) {
            option.classList.add('active');
          } else {
            option.classList.remove('active');
          }
        });
      }
  
      // Save note
      saveNoteBtn.onclick = () => {
        const title = noteTitleInput.value.trim();
        const content = noteContentInput.value.trim();
  
        if (!title && !content) {
          showToast({
            text: "Please add a title or content to your note",
            type: "warning",
            duration: 2500,
            position: "bottom-right"
          });
          return;
        }
  
        if (currentNoteId) {
          // Update existing note
          const noteIndex = notes.findIndex(n => n.id === currentNoteId);
          if (noteIndex !== -1) {
            notes[noteIndex] = {
              ...notes[noteIndex],
              title,
              content,
              color: selectedColor,
              date: Date.now()
            };
            
            showToast({
              text: "Note updated successfully!",
              type: "success",
              duration: 2000,
              position: "bottom-right"
            });
          }
        } else {
          // Create new note
          const newNote = {
            id: Date.now().toString(),
            title,
            content,
            color: selectedColor,
            date: Date.now()
          };
          notes.unshift(newNote);
          
          showToast({
            text: "Note created successfully!",
            type: "success",
            duration: 2000,
            position: "bottom-right"
          });
        }
  
        saveNotes();
        renderNotes();
        noteEditModal.classList.remove("active");
      };
  
      // Delete note
      deleteNoteBtn.onclick = () => {
        if (!currentNoteId) return;
  
        if (confirm("Are you sure you want to delete this note?")) {
          notes = notes.filter(n => n.id !== currentNoteId);
          saveNotes();
          renderNotes();
          noteEditModal.classList.remove("active");
          
          showToast({
            text: "Note deleted",
            type: "info",
            duration: 2000,
            position: "bottom-right"
          });
        }
      };
  
      // Cancel note editing
      cancelNoteBtn.onclick = () => {
        noteEditModal.classList.remove("active");
      };
  
      noteEditModal.onclick = (e) => {
        if (e.target === noteEditModal) {
          noteEditModal.classList.remove("active");
        }
      };
  
      // Update keyboard shortcuts to close note modals with Escape
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
          if (noteEditModal.classList.contains("active")) {
            noteEditModal.classList.remove("active");
          }
          if (notesModal.classList.contains("active")) {
            notesModal.classList.remove("active");
          }
        }
      });
  
      // Initialize notes
      loadNotes();
  
      /* PWA SUPPORT */
      const lastCheckedElement = document.getElementById('lastChecked');
      
      // Format time ago
      function formatTimeAgo(timestamp) {
        const now = Date.now();
        const diff = now - timestamp;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        if (seconds < 10) return 'Just now';
        if (seconds < 60) return `${seconds} seconds ago`;
        if (minutes === 1) return '1 minute ago';
        if (minutes < 60) return `${minutes} minutes ago`;
        if (hours === 1) return '1 hour ago';
        if (hours < 24) return `${hours} hours ago`;
        if (days === 1) return '1 day ago';
        return `${days} days ago`;
      }
      
      // Update last checked time
      function updateLastChecked() {
        const timestamp = Date.now();
        localStorage.setItem('lastUpdateCheck', timestamp.toString());
        if (lastCheckedElement) {
          lastCheckedElement.textContent = formatTimeAgo(timestamp);
        }
      }
      
      // Update the display periodically
      setInterval(() => {
        const lastCheck = localStorage.getItem('lastUpdateCheck');
        if (lastCheck && lastCheckedElement) {
          lastCheckedElement.textContent = formatTimeAgo(parseInt(lastCheck));
        }
      }, 60000); // Update every 60 seconds
      
      // Initialize last checked display
      const lastCheck = localStorage.getItem('lastUpdateCheck');
      if (lastCheck && lastCheckedElement) {
        lastCheckedElement.textContent = formatTimeAgo(parseInt(lastCheck));
      }
      
      // Register service worker
      if ('serviceWorker' in navigator) {
        let refreshing = false;
        
        // Reload page when new service worker takes control
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          if (refreshing) return;
          refreshing = true;
          console.log('[PWA] New service worker activated, reloading...');
          window.location.reload();
        });
        
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('./sw.js')
            .then((registration) => {
              console.log('[PWA] Service Worker registered successfully:', registration.scope);
              
              // Update last checked on initial load
              updateLastChecked();
              
              // Check for updates periodically (every 5 minutes)
              setInterval(() => {
                registration.update();
                updateLastChecked();
              }, 300000); // 5 minutes = 300,000ms
              
              // Check for updates
              registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                console.log('[PWA] New service worker detected');
                
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // New service worker available - auto-update
                    console.log('[PWA] New version available, auto-updating...');
                    
                    showToast({
                      text: "Update found! Installing new version... 🔄",
                      type: "info",
                      duration: 3000,
                      position: "top-right"
                    });
                    
                    // Tell the new service worker to skip waiting and activate immediately
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                  }
                });
              });
            })
            .catch((error) => {
              console.error('[PWA] Service Worker registration failed:', error);
            });
        });
      }
  
      /* CONNECTION STATUS */
      const statusIndicator = document.getElementById("statusIndicator");
      const statusText = statusIndicator.querySelector(".status-text");
  
      function updateConnectionStatus() {
        const isOnline = navigator.onLine;
        
        if (isOnline) {
          statusIndicator.classList.remove("offline");
          statusIndicator.classList.add("online");
          statusText.textContent = "Online";
        } else {
          statusIndicator.classList.remove("online");
          statusIndicator.classList.add("offline");
          statusText.textContent = "Offline";
        }
      }
  
      // Set initial status
      updateConnectionStatus();
  
      // Online/Offline detection
      window.addEventListener('online', () => {
        updateConnectionStatus();
        showToast({
          text: "Back online! 🌐",
          type: "success",
          duration: 3000,
          position: "bottom-right"
        });
      });
  
      window.addEventListener('offline', () => {
        updateConnectionStatus();
        showToast({
          text: "You're offline. Don't worry, the app still works! 📱",
          type: "warning",
          duration: 5000,
          close: true,
          position: "bottom-right"
        });
      });
  
      /* TIME TRACKING */
      // Time tracking state
      let timeTrackingState = {
        stopwatch: {
          running: false,
          startTime: 0,
          elapsedTime: 0,
          interval: null
        },
        timer: {
          running: false,
          totalTime: 0,
          remainingTime: 0,
          interval: null
        },
        sessions: JSON.parse(localStorage.getItem('timeTrackingSessions') || '[]'),
        alarms: JSON.parse(localStorage.getItem('timeTrackingAlarms') || '[]')
      };
  
      // Format time helper function
      function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      }
  
      // Update stopwatch display
      function updateStopwatchDisplay() {
        const elapsed = timeTrackingState.stopwatch.elapsedTime + 
          (timeTrackingState.stopwatch.running ? Math.floor((Date.now() - timeTrackingState.stopwatch.startTime) / 1000) : 0);
        document.getElementById('stopwatch-display').textContent = formatTime(elapsed);
      }
  
      // Update timer display
      function updateTimerDisplay() {
        document.getElementById('timer-display').textContent = formatTime(timeTrackingState.timer.remainingTime);
      }
  
      // Save session to localStorage
      function saveSession(type, duration) {
        const session = {
          type: type,
          duration: duration,
          timestamp: new Date().toISOString(),
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString()
        };
        timeTrackingState.sessions.unshift(session);
        // Keep only last 20 sessions
        timeTrackingState.sessions = timeTrackingState.sessions.slice(0, 20);
        localStorage.setItem('timeTrackingSessions', JSON.stringify(timeTrackingState.sessions));
        updateSessionsList();
      }
  
      // Update sessions list display
      function updateSessionsList() {
        const sessionsList = document.getElementById('time-sessions-list');
        sessionsList.innerHTML = '';
        
        if (timeTrackingState.sessions.length === 0) {
          sessionsList.innerHTML = '<p style="text-align: center; opacity: 0.7; margin: 1rem 0;">No sessions yet</p>';
          return;
        }
  
        timeTrackingState.sessions.forEach(session => {
          const sessionItem = document.createElement('div');
          sessionItem.className = 'session-item';
          sessionItem.innerHTML = `
            <div>
              <div class="session-time">${formatTime(session.duration)}</div>
              <div class="session-date">${session.date} ${session.time}</div>
            </div>
            <div style="font-size: 0.9rem; opacity: 0.7;">${session.type}</div>
          `;
          sessionsList.appendChild(sessionItem);
        });
      }
  
      // Stopwatch controls
      function startStopwatch() {
        if (!timeTrackingState.stopwatch.running) {
          timeTrackingState.stopwatch.running = true;
          timeTrackingState.stopwatch.startTime = Date.now();
          timeTrackingState.stopwatch.interval = setInterval(updateStopwatchDisplay, 100);
          
          document.getElementById('stopwatch-start').style.display = 'none';
          document.getElementById('stopwatch-pause').style.display = 'inline-block';
        }
      }
  
      function pauseStopwatch() {
        if (timeTrackingState.stopwatch.running) {
          timeTrackingState.stopwatch.running = false;
          timeTrackingState.stopwatch.elapsedTime += Math.floor((Date.now() - timeTrackingState.stopwatch.startTime) / 1000);
          clearInterval(timeTrackingState.stopwatch.interval);
          
          document.getElementById('stopwatch-start').style.display = 'inline-block';
          document.getElementById('stopwatch-pause').style.display = 'none';
        }
      }
  
      function resetStopwatch() {
        timeTrackingState.stopwatch.running = false;
        timeTrackingState.stopwatch.elapsedTime = 0;
        clearInterval(timeTrackingState.stopwatch.interval);
        
        document.getElementById('stopwatch-start').style.display = 'inline-block';
        document.getElementById('stopwatch-pause').style.display = 'none';
        updateStopwatchDisplay();
      }
  
      // Timer controls
      function startTimer() {
        if (!timeTrackingState.timer.running && timeTrackingState.timer.remainingTime > 0) {
          timeTrackingState.timer.running = true;
          timeTrackingState.timer.interval = setInterval(() => {
            timeTrackingState.timer.remainingTime--;
            updateTimerDisplay();
            
            if (timeTrackingState.timer.remainingTime <= 0) {
              clearInterval(timeTrackingState.timer.interval);
              timeTrackingState.timer.running = false;
              document.getElementById('timer-start').style.display = 'inline-block';
              document.getElementById('timer-pause').style.display = 'none';
              
              // Timer finished notification
                showToast({
                  text: "⏰ Timer finished!",
                  type: "success",
                  duration: 5000,
                  close: true,
                  position: "bottom-right"
                });
              
              
              // Check notification settings
              const settings = JSON.parse(localStorage.getItem("settings")) || {};
              const enableNotifications = settings.enableNotifications !== false; // Default to true
              const enableNotificationSound = settings.enableNotificationSound !== false; // Default to true
              
              // Show browser notification if enabled
              if (enableNotifications) {
                showBrowserNotification("Timer Finished!", {
                  body: "Your timer has completed!",
                  tag: "timer-complete"
                });
              }
              
              // Play notification sound if enabled
              if (enableNotificationSound) {
                playNotificationSound();
              }
              
              // Save completed timer session
              saveSession('Timer', timeTrackingState.timer.totalTime);
            }
          }, 1000);
          
          document.getElementById('timer-start').style.display = 'none';
          document.getElementById('timer-pause').style.display = 'inline-block';
        }
      }
  
      function pauseTimer() {
        if (timeTrackingState.timer.running) {
          timeTrackingState.timer.running = false;
          clearInterval(timeTrackingState.timer.interval);
          
          document.getElementById('timer-start').style.display = 'inline-block';
          document.getElementById('timer-pause').style.display = 'none';
        }
      }
  
      function resetTimer() {
        timeTrackingState.timer.running = false;
        clearInterval(timeTrackingState.timer.interval);
        
        const hours = parseInt(document.getElementById('timer-hours').value) || 0;
        const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
        const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
        
        timeTrackingState.timer.totalTime = hours * 3600 + minutes * 60 + seconds;
        timeTrackingState.timer.remainingTime = timeTrackingState.timer.totalTime;
        
        document.getElementById('timer-start').style.display = 'inline-block';
        document.getElementById('timer-pause').style.display = 'none';
        updateTimerDisplay();
      }
  
      // Update timer display when inputs change
      function updateTimerFromInputs() {
        const hours = parseInt(document.getElementById('timer-hours').value) || 0;
        const minutes = parseInt(document.getElementById('timer-minutes').value) || 0;
        const seconds = parseInt(document.getElementById('timer-seconds').value) || 0;
        
        timeTrackingState.timer.totalTime = hours * 3600 + minutes * 60 + seconds;
        timeTrackingState.timer.remainingTime = timeTrackingState.timer.totalTime;
        updateTimerDisplay();
      }
  
      // Alarm functions
      function addAlarm() {
        const time = document.getElementById('alarm-time').value;
        const label = document.getElementById('alarm-label').value.trim();
        
        if (!time) {
          showToast({
            text: "Please select a time for the alarm",
            type: "warning",
            duration: 3000,
            position: "bottom-right"
          });
          return;
        }
  
        // Get selected days
        const selectedDays = [];
        const dayCheckboxes = document.querySelectorAll('.day-checkbox input[type="checkbox"]:checked');
        
        if (dayCheckboxes.length === 0) {
          showToast({
            text: "Please select at least one day for the alarm",
            type: "warning",
            duration: 3000,
            position: "bottom-right"
          });
          return;
        }
  
        dayCheckboxes.forEach(checkbox => {
          selectedDays.push(parseInt(checkbox.value));
        });
  
        const alarm = {
          id: Date.now(),
          time: time,
          label: label || 'Alarm',
          days: selectedDays,
          enabled: true,
          createdAt: new Date().toISOString()
        };
  
        timeTrackingState.alarms.push(alarm);
        localStorage.setItem('timeTrackingAlarms', JSON.stringify(timeTrackingState.alarms));
        updateAlarmsList();
        
        // Clear form
        document.getElementById('alarm-time').value = '09:00';
        document.getElementById('alarm-label').value = '';
        document.querySelectorAll('.day-checkbox input[type="checkbox"]').forEach(cb => cb.checked = false);
  
        showToast({
          text: "Alarm added successfully!",
          type: "success",
          duration: 2000,
          position: "bottom-right"
        });
      }
  
      function updateAlarmsList() {
        const alarmsContainer = document.getElementById('alarm-list-container');
        alarmsContainer.innerHTML = '';
  
        if (timeTrackingState.alarms.length === 0) {
          alarmsContainer.innerHTML = '<div class="empty-alarms">No alarms set</div>';
          return;
        }
  
        timeTrackingState.alarms.forEach(alarm => {
          const alarmItem = document.createElement('div');
          alarmItem.className = 'alarm-item';
          
          const daysText = alarm.days.length === 7 ? 'Every day' : 
                          alarm.days.length === 0 ? 'No days selected' :
                          alarm.days.map(day => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day]).join(', ');
  
          alarmItem.innerHTML = `
            <div class="alarm-info">
              <div class="alarm-time">${alarm.time}</div>
              <div class="alarm-label">${alarm.label}</div>
              <div class="alarm-days">${daysText}</div>
            </div>
            <div class="alarm-actions">
              <button class="alarm-toggle ${alarm.enabled ? '' : 'disabled'}" onclick="toggleAlarm(${alarm.id})">
                ${alarm.enabled ? 'ON' : 'OFF'}
              </button>
              <button class="alarm-delete" onclick="deleteAlarm(${alarm.id})">Delete</button>
            </div>
          `;
  
          alarmsContainer.appendChild(alarmItem);
        });
      }
  
      function toggleAlarm(alarmId) {
        const alarm = timeTrackingState.alarms.find(a => a.id === alarmId);
        if (alarm) {
          alarm.enabled = !alarm.enabled;
          localStorage.setItem('timeTrackingAlarms', JSON.stringify(timeTrackingState.alarms));
          updateAlarmsList();
          
          showToast({
            text: `Alarm ${alarm.enabled ? 'enabled' : 'disabled'}`,
            type: "info",
            duration: 2000,
            position: "bottom-right"
          });
        }
      }
  
      function deleteAlarm(alarmId) {
        if (confirm('Are you sure you want to delete this alarm?')) {
          timeTrackingState.alarms = timeTrackingState.alarms.filter(a => a.id !== alarmId);
          localStorage.setItem('timeTrackingAlarms', JSON.stringify(timeTrackingState.alarms));
          updateAlarmsList();
          
          showToast({
            text: "Alarm deleted",
            type: "info",
            duration: 2000,
            position: "bottom-right"
          });
        }
      }
  
      function checkAlarms() {
        const now = new Date();
        const currentTime = now.toTimeString().slice(0, 5); // HH:MM format
        const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  
        timeTrackingState.alarms.forEach(alarm => {
          if (alarm.enabled && alarm.time === currentTime && alarm.days.includes(currentDay)) {
            // Trigger alarm
            triggerAlarm(alarm);
          }
        });
      }
  
      function triggerAlarm(alarm) {
        // Show toast notification
        showToast({
          text: `🔔 ${alarm.label} - ${alarm.time}`,
          type: "success",
          duration: 10000,
          close: true,
          position: "bottom-right"
        });
  
        // Check notification settings
        const settings = JSON.parse(localStorage.getItem("settings")) || {};
        const enableNotifications = settings.enableNotifications !== false;
        const enableNotificationSound = settings.enableNotificationSound !== false;
  
        // Show browser notification if enabled
        if (enableNotifications) {
          showBrowserNotification(`Alarm: ${alarm.label}`, {
            body: `It's ${alarm.time}!`,
            tag: `alarm-${alarm.id}`,
            icon: '/icons/android/android-launchericon-192-192.png'
          });
        }
  
        // Play notification sound if enabled
        if (enableNotificationSound) {
          playNotificationSound();
        }
      }
  
      // Event listeners for time tracking
      document.addEventListener('DOMContentLoaded', function() {
        // Initialize sessions list
        updateSessionsList();
        
        // Initialize timer display
        updateTimerFromInputs();
        
        // Time tracking modal
        const timeTrackingBtn = document.getElementById('timeTrackingBtn');
        const timeTrackingModal = document.getElementById('timeTrackingModal');
        const closeTimeTrackingBtn = document.getElementById('closeTimeTrackingBtn');
        
        // Open time tracking modal
        timeTrackingBtn.onclick = () => {
          timeTrackingModal.classList.add('active');
          updateSessionsList();
        };
        
        // Close time tracking modal
        closeTimeTrackingBtn.onclick = () => {
          timeTrackingModal.classList.remove('active');
        };
        
        timeTrackingModal.onclick = e => {
          if (e.target === timeTrackingModal) {
            timeTrackingModal.classList.remove('active');
          }
        };
        
        // Tab switching
        const tabs = document.querySelectorAll('.time-tracking-tab');
        const contents = document.querySelectorAll('.time-tracking-content');
        
        tabs.forEach(tab => {
          tab.onclick = () => {
            const targetTab = tab.dataset.tab;
            
            // Update tab states
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update content states
            contents.forEach(c => c.classList.remove('active'));
            document.getElementById(`${targetTab}-content`).classList.add('active');
            
            // Show/hide Recent Sessions based on active tab
            const sessionsSection = document.querySelector('.time-sessions');
            if (targetTab === 'alarm') {
              sessionsSection.style.display = 'none';
            } else {
              sessionsSection.style.display = 'block';
            }
          };
        });
        
        // Stopwatch controls
        document.getElementById('stopwatch-start').onclick = startStopwatch;
        document.getElementById('stopwatch-pause').onclick = pauseStopwatch;
        document.getElementById('stopwatch-reset').onclick = () => {
          if (timeTrackingState.stopwatch.elapsedTime > 0) {
            saveSession('Stopwatch', timeTrackingState.stopwatch.elapsedTime);
          }
          resetStopwatch();
        };
        
        // Timer controls
        document.getElementById('timer-start').onclick = startTimer;
        document.getElementById('timer-pause').onclick = pauseTimer;
        document.getElementById('timer-reset').onclick = resetTimer;
        
        // Timer input listeners
        document.getElementById('timer-hours').oninput = updateTimerFromInputs;
        document.getElementById('timer-minutes').oninput = updateTimerFromInputs;
        document.getElementById('timer-seconds').oninput = updateTimerFromInputs;
        
        // Alarm controls
        document.getElementById('alarm-add').onclick = addAlarm;
        
        // Initialize alarms list
        updateAlarmsList();
        
        // Set up alarm checking system - check every minute
        setInterval(checkAlarms, 60000);
        
        // Close time tracking modal with Escape key
        document.addEventListener('keydown', function(e) {
          if (e.key === 'Escape' && timeTrackingModal.classList.contains('active')) {
            timeTrackingModal.classList.remove('active');
          }
        });
      });