# 🚀 Modern Productivity Dashboard

A beautiful, modern, and feature-rich productivity dashboard built with pure HTML, CSS, and vanilla JavaScript. This application features a **modular code structure** with separate files for better organization and maintainability. Helps you stay organized with real-time information, task management, time tracking, and full customization options.

![Dashboard Preview](https://img.shields.io/badge/Status-Active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Features

### 🎨 **Modern UI/UX**
- **Gradient backgrounds** with smooth color transitions
- **Glassmorphism design** with backdrop blur effects
- **Smooth animations** - Fade-in cards, slide-in modals, and interactive hover effects
- **Dark mode support** with seamless theme switching
- **Responsive design** that works on all devices

### ⏰ **Real-time Clock**
- Live updating time display
- Beautiful gradient text styling
- Formatted for easy readability
- **Time Tracking integration** - Access stopwatch, timer, and alarms

### ⏱️ **Time Tracking**
- **Stopwatch** - Track elapsed time with start, pause, and reset controls
- **Timer** - Set custom countdown with hours, minutes, and seconds
- **Alarms** - Set one-time and recurring alarms with custom labels and day selection
- **Session history** - View your last 20 time tracking sessions
- **Notifications** - Browser and audio notifications when timers/alarms complete
- **Automatic persistence** - Sessions saved to localStorage
- Access via ⏱️ button on the Current Time card

### 🌤️ **Weather Integration**
- Real-time weather data using Open-Meteo API (no API key required)
- **Location detection** with city and country display
- **Current weather** - Temperature, humidity, wind speed, and conditions
- **Weather conditions** - Visual icons (sunny, rainy, snowy, cloudy, etc.)
- **30+ weather conditions** - Accurate representation with emoji icons
- **7-day forecast** - Detailed weather predictions
- **Forecast details** - Daily high/low temps and precipitation
- **Hourly weather forecast** - Click any forecast day to see 24-hour weather breakdown
- **Hourly details** - Temperature, humidity, wind speed, and precipitation for each hour
- **24-hour time format** - Uses 24-hour format for hourly weather display
- **Weather modal** - Beautiful detailed view with full forecast
- Automatic geolocation support
- Styled location badge with pin emoji

### ✅ **Multi-List To-Do System**
- **Multiple to-do lists** - Organize tasks by category or project
- Create, edit, and delete entire lists
- **Color-coded lists** - Choose from 6 colors for visual organization
- Add, complete, and delete tasks within each list
- **Task notes** - Add optional notes/context to any task
- **Task priorities** - Set Low, Medium, or High priority with color-coded badges
- **Due dates** - Set optional due dates with smart indicators (overdue, today, upcoming)
- **Advanced sorting** - Sort by priority, due date, or creation date (ascending/descending)
- **Drag-and-drop reordering** - Intuitive task reordering with visual feedback
- **Recurring tasks** - Set tasks to repeat daily, weekly, monthly, or yearly
- **Automatic task generation** - Recurring tasks create new instances when completed
- **Task filtering** - Toggle to show/hide recurring tasks
- **Enhanced search integration** - Search results show comprehensive task information including recurring status, creation dates, and unique IDs
- **Overdue notifications** - Dashboard shows count of overdue tasks with red pulsing animation
- **Due today notifications** - Dashboard shows count of tasks due today with yellow pulsing animation
- **Smart list highlighting** - Lists with urgent tasks highlighted (red for overdue, yellow for due today)
- **Deadline badges** - Each list shows "⚠️ X overdue" or "📅 X due today" indicator
- **Priority system** - Overdue takes visual priority over due today
- **Beautiful input design** - Stacked inputs in contained card style
- **Task completion tracking** - See progress at a glance
- **Persistent storage** using localStorage
- **Enter key support** for quick task addition from both fields
- Modal-based interface with 3-modal workflow
- Toast notifications for all actions

### 📝 **Note-Taking Widget**
- Create, read, update, and delete notes
- **Color-coded sticky notes** - Choose from 6 beautiful colors
- Sticky note cards with title and content preview
- Full-featured note editor modal
- **Auto-save** to localStorage
- Notes counter on dashboard
- Click any note to view/edit full content
- Delete confirmation for safety

### ⚙️ **Customizable Settings**
- **Organized settings panel** - Collapsible sections for better organization
- **Dashboard title customization** - Make it your own
- **Personal greeting** - Add your name for a personalized experience
- **Greeting visibility toggle** - Show or hide the greeting for a minimal look
- **Accent color picker** - Choose your favorite color theme
- **Dark mode toggle** - Switch between light and dark themes
- **Connection status indicator** - Real-time online/offline status with visual indicator
- **Cache management** - Clear app cache while preserving your data
- **Settings persistence** - All preferences saved locally

### 🔍 **Global Search**
- **Search across everything** - Find tasks and notes instantly
- **Real-time results** - See matches as you type
- **Advanced filtering system** - Filter by content type and specific criteria
- **Search type filters** - Choose to search All, Tasks only, or Notes only
- **Task-specific filters** - Filter by priority, due date, completion status, list color, and recurring status
- **Note-specific filters** - Filter notes by color
- **Common filters** - Filter by creation date (today, yesterday, this week, etc.) when searching all content
- **Dynamic filter interface** - Shows relevant filters based on selected search type
- **Keyword highlighting** - Search terms highlighted in yellow
- **Smart categorization** - Results organized by Tasks and Notes
- **Quick navigation** - Click any result to open it
- **Completion status** - See if tasks are done or pending
- **Priority badges** - Color-coded priority indicators in search results
- **Due date badges** - Smart date display with overdue/today warnings
- **Recurring indicators** - Visual badges showing recurring task intervals
- **Creation timestamps** - See when tasks and notes were created
- **Unique task IDs** - Reference IDs for advanced task management
- **List context** - Shows which list each task belongs to
- **Ctrl+F shortcut** - Quick access with keyboard
- **Filter reset** - All filters reset when closing search modal

### ⌨️ **Keyboard Shortcuts**
- **Dedicated shortcuts modal** - Beautiful guide with modern key visualizations
- **6 productivity shortcuts** - Quick access to all features
- **Cross-platform support** - Works with Ctrl (Windows/Linux) and ⌘ (Mac)
- **Instant access** - Press Ctrl+K to view shortcuts anytime

### 🔗 **Social Integration**
- Link to personal website in footer
- GitHub profile link in settings modal
- Animated hover effects on all links

### 🍞 **Toast Notifications**
- Powered by [Toast Notification Library](https://github.com/BlizzardWolf7/Toast-Notification-Library)
- Beautiful, lightweight toast notifications for all user actions
- Multiple types: Success, Info, Warning, Error
- Auto-dismiss with customizable duration
- Pause on hover functionality
- Smooth slide-in animations

### 📱 **Progressive Web App (PWA)**
- **Installable** - Install as a standalone app on any device
- **Offline support** - Access your dashboard without internet
- **Service Worker** - Smart caching for performance
- **App-like experience** - Full-screen mode on mobile
- **Auto-updates** - Automatic seamless updates when new versions are available
- **Update detection** - Checks for updates every 5 minutes
- **Zero-downtime updates** - Updates install in background and activate automatically
- **Cross-platform icons** - Optimized icons for all devices (Android, iOS, Windows)
- **Connection monitoring** - Real-time online/offline status indicator in settings
- **Background sync** - Ready for future cloud sync features

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic markup structure in `index.html`
- **CSS3** - Modern styling with CSS custom properties in `style.css`
- **Vanilla JavaScript** - No frameworks, pure ES6+ in `script.js`
- **Modular architecture** - Separate HTML, CSS, and JS files for better code organization

### External APIs
- **[Open-Meteo API](https://open-meteo.com/)** - Free weather data (no API key required)
- **[BigDataCloud Reverse Geocoding API](https://www.bigdatacloud.com/)** - Location name resolution (free, no API key)
- **[Toast Notification Library](https://github.com/BlizzardWolf7/Toast-Notification-Library)** - Custom toast notification system

### Browser APIs Used
- **Geolocation API** - For user location detection
- **LocalStorage API** - For persistent data storage
- **Fetch API** - For external data requests

---

## 📦 Installation

### Quick Start

1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/BlizzardWolf7/simple-dashboard.git
   cd simple-dashboard
   ```

2. **Open the file**:
   - Simply open `index.html` in your web browser
   - Make sure `style.css` and `script.js` are in the same directory
   - No build process or dependencies to install!

3. **Install as PWA** (Optional):
   - Open the dashboard in a supported browser
   - Look for the "Install" button in your browser's address bar
   - Click to install as a standalone app on your device
   - Access offline with cached content

### Alternative: Direct Download
- Download all project files (`index.html`, `style.css`, `script.js`)
- Keep all files in the same directory
- Open `index.html` in your browser

### Requirements
- Modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Internet connection (for weather data and external libraries)
- For PWA features: HTTPS hosting or localhost
- For notification features: Browser notification permissions (optional)

---

## 🚀 Usage Guide

### Initial Setup

1. **First Launch**:
   - Allow location access when prompted for weather data
   - You'll see a welcome toast notification

2. **Customize Your Dashboard**:
   - Click the ⚙️ settings icon in the top-right corner (or press Ctrl+S)
   - **Styling Section** (🎨):
     - Set your dashboard title
     - Enter your name for personalized greeting
     - Toggle "Show Greeting" to display or hide the greeting
     - Choose your favorite accent color
     - Toggle dark mode if preferred
   - **Connection Section** (🌐):
     - Check connection status (Online/Offline indicator)
     - Clear app cache if needed (keeps your data safe)
   - **Guide & About Section** (📖):
     - View GitHub profile
     - Access keyboard shortcuts guide
   - Click "Save Settings" to apply changes

3. **Search Your Content**:
   - Click the 🔍 search icon (or press Ctrl+F)
   - Type any keyword to search
   - Click results to navigate to tasks or notes

4. **Stay on Top of Deadlines**:
   - Dashboard shows overdue tasks count (red)
   - Dashboard shows tasks due today count (yellow)
   - Lists with urgent tasks are highlighted (red for overdue, yellow for due today)
   - Set due dates when creating tasks to enable deadline tracking

### Using Time Tracking

Access time tracking features via the ⏱️ button on the Current Time card:

#### Stopwatch
1. Click "⏱️ Time Tracking" on the Current Time card
2. Select the "Stopwatch" tab
3. Click "Start" to begin tracking time
4. Click "Pause" to pause the stopwatch
5. Click "Reset" to reset the timer (saves session automatically)
6. View your session history at the bottom

#### Timer
1. Open Time Tracking modal
2. Select the "Timer" tab
3. Set hours, minutes, and seconds (default: 5 minutes)
4. Click "Start" to begin countdown
5. Click "Pause" to pause
6. Click "Reset" to reset to your set duration
7. **Automatic notifications** when timer completes:
   - Browser notification (if enabled)
   - Sound notification (if enabled)
   - Toast message
8. Completed sessions saved automatically

#### Alarms
1. Open Time Tracking modal
2. Select the "Alarm" tab
3. Set the alarm time using the time picker
4. Add an optional label (e.g., "Morning Alarm")
5. Select days to repeat:
   - Choose specific days (Mon-Fri for work alarms, etc.)
   - Or select all days for daily alarms
   - Leave empty for one-time alarms
6. Click "Add Alarm"
7. Manage alarms:
   - Toggle ON/OFF to enable/disable without deleting
   - Click "Delete" to permanently remove an alarm
8. **Notifications** when alarm triggers:
   - Browser notification (if enabled)
   - Sound notification (if enabled)
   - Toast message with alarm label

**Session History:**
- View your last 20 time tracking sessions
- Sessions show:
  - Duration tracked
  - Date and time
  - Type (Stopwatch or Timer)
- Automatically saved to localStorage
- Oldest sessions automatically removed (keeps last 20)

### Using the Multi-List To-Do System

#### Creating a New List
1. Click "✓ View Tasks" button on the dashboard
2. Click "+ New List" button
3. Enter a list name (e.g., "Work", "Personal", "Shopping")
4. Choose a color from 6 options (Blue, Green, Purple, Orange, Pink, Red)
5. Click "Create List"
6. **Note**: You can only add tasks AFTER creating the list

#### Viewing and Managing Lists
- Click any list card to open it
- Each list card shows:
  - List name with color-coded border
  - Completion ratio (e.g., "3/5" means 3 of 5 tasks done)
  - Preview of first 5 tasks
  - Hover effect for better UX

#### Managing Tasks Within a List
Once inside a list:
- **Add task**: 
  - Enter task title in the first input field (required)
  - Optionally add a note in the second field for additional context
  - Choose priority: None, Low, Medium, or High
  - Set an optional due date
  - Click "Add Task" button or press **Enter** from any field
  - Beautiful contained design with dashed border
- **Complete task**: Click on task text to toggle done/undone
- **Delete task**: Click the ✕ button in top-right corner
- **View progress**: See completion count at the top (e.g., "3/5 completed")
- **Task display includes**:
  - Task title (bold)
  - Task note (italic, if added)
  - Priority badge (color-coded: Red=High, Orange=Medium, Blue=Low)
  - Due date badge (with smart status: ⚠️ overdue, 📅 today, 📆 upcoming)
- Tasks show with different styling when completed (strikethrough + reduced opacity)

#### Editing List Settings
Inside a list view:
1. Click the **⚙️** icon in the top-right of the modal
2. Edit list name
3. Change list color
4. Delete entire list (with confirmation)
5. Click "Save Changes" to apply

#### List Persistence
- All lists and tasks automatically saved to localStorage
- Lists persist between browser sessions
- Changes sync across tabs in the same browser
- Real-time updates across all views

#### List Colors & Use Cases
- 🔵 **Blue** - Default, work/professional tasks
- 🟢 **Green** - Personal, health, or wellness tasks
- 🟣 **Purple** - Creative projects or learning
- 🟠 **Orange** - Urgent or time-sensitive items
- 🩷 **Pink** - Fun, social, or leisure activities
- 🔴 **Red** - Critical or high-priority tasks

#### Task Deadline Notifications

**On Dashboard:**
- **"X tasks overdue"** - Red counter with pulsing animation (shown first)
- **"X tasks due today"** - Yellow/orange counter with pulsing animation
- Both counters only count incomplete tasks
- Displayed prominently in the To-Do Lists widget

**In Lists Overview:**

**Overdue Tasks (Priority):**
- Lists with overdue tasks are **highlighted** with red gradient background
- **Red border** around the entire card
- **Red glow effect** on card shadow
- **"⚠️ X overdue" badge** at the bottom of the card (full-width, red)
- Takes visual priority over "due today" if both exist

**Tasks Due Today:**
- Lists with tasks due today are **highlighted** with yellow gradient background
- **Yellow border** around the entire card
- **Golden glow effect** on card shadow
- **"📅 X due today" badge** at the bottom of the card (full-width, yellow)
- Only shown if no overdue tasks in that list

**Visual Priority:**
1. Lists with overdue tasks: **Red** highlighting (most urgent)
2. Lists with tasks due today: **Yellow** highlighting (urgent)
3. Normal lists: Standard card styling

**Badge Details:**
- Badges span full card width for maximum visibility
- Position at card bottom for clean layout
- Icons: ⚠️ (overdue) and 📅 (due today)
- Gradient backgrounds matching urgency level
- Makes it impossible to miss time-sensitive tasks

### Weather & Location

The dashboard automatically:
1. Requests your location permission
2. Fetches current weather data
3. Displays city and country name
4. Shows temperature, humidity, and current conditions
5. Provides a 7-day weather forecast

**Weather Card Display:**
- **Temperature** - Current temperature in °C with weather emoji
- **Condition** - Text description (Clear, Rainy, Snowy, etc.)
- **Humidity** - Current humidity percentage (💧)
- **Show Forecast Button** - Opens detailed weather modal

**Weather Forecast Modal:**
1. Click "🌤️ Show Forecast" on the weather card
2. View detailed current weather:
   - Large temperature display
   - Weather condition
   - Humidity percentage
   - Wind speed
   - Current precipitation
3. See 7-day forecast with:
   - Daily weather icons
   - High and low temperatures
   - Precipitation amounts (if any)
   - Day names (Today, Mon, Tue, etc.)
   - **Click any day** to view 24-hour weather breakdown

**Hourly Weather View:**
- Click any forecast day card to open hourly details
- View hour-by-hour weather for the entire day
- 24-hour time format (00:00 - 23:00)
- Hourly information includes:
  - Temperature
  - Weather conditions with emoji icons
  - Humidity percentage
  - Wind speed
  - Precipitation (if any)
- Perfect for planning outdoor activities

**Weather Conditions:**
The app recognizes 30+ weather conditions including:
- ☀️ Clear skies
- ⛅ Partly cloudy
- ☁️ Overcast
- 🌧️ Rain (light, moderate, heavy)
- ❄️ Snow (light, moderate, heavy)
- ⛈️ Thunderstorms
- 🌫️ Fog
- 🌦️ Showers and drizzle

**No Location Permission?**
- Weather card will show "Location denied"
- You'll receive a toast notification with instructions

### Using the Notes Widget

#### Creating Notes
1. Click "📝 View Notes" button on the dashboard
2. Click "+ New Note" button
3. Enter a title and content
4. Choose a color from 6 options (Yellow, Pink, Blue, Green, Purple, Orange)
5. Click "Save Note"

#### Viewing & Editing Notes
- Click on any sticky note card to open it
- Edit the title, content, or color
- Click "Save Note" to update
- Notes are auto-saved to localStorage

#### Deleting Notes
- Open the note you want to delete
- Click "Delete Note" button
- Confirm deletion in the popup

#### Note Features
- **Color-coded organization** - Visual categorization
- **Date tracking** - See when notes were created/modified
- **Preview cards** - Quick overview in grid view
- **Character limit** - Titles limited to 50 characters

### Using Global Search

The powerful search feature helps you find anything instantly:

1. **Open Search**:
   - Click the 🔍 icon in top-right corner
   - Or press **Ctrl+F** (⌘+F on Mac)

2. **Search**:
   - Type any keyword
   - Results appear instantly as you type
   - Search covers:
     - Task titles
     - Task notes
     - Note titles
     - Note content

3. **View Results**:
   - Results organized into "Tasks" and "Notes" sections
   - Each section shows result count
   - **Tasks display**:
     - Completion status
     - Priority badge (color-coded)
     - Due date badge (with overdue/today indicators)
     - Parent list name
   - **Notes display**:
     - Color indicator
     - Content preview
   - Matching keywords highlighted in yellow

4. **Navigate to Results**:
   - Click any result to open it
   - Tasks: Opens the list containing that task
   - Notes: Opens the note for editing

### Keyboard Shortcuts

The dashboard includes a dedicated keyboard shortcuts modal with modern key visualizations:

- **Enter** (in task input) - Add new task
- **Escape** - Close any open modal
- **Ctrl+F** (or **⌘+F** on Mac) - Open global search
- **Ctrl+K** (or **⌘+K** on Mac) - Open shortcuts guide
- **Ctrl+S** (or **⌘+S** on Mac) - Open settings
- **Ctrl+D** (or **⌘+D** on Mac) - Toggle dark mode

Access the full shortcuts guide via the button in settings or press **Ctrl+K**.

### Settings Organization

The settings panel is now organized into collapsible sections for better navigation:

#### 🎨 **Styling**
- Dashboard title customization
- Personal name and greeting settings
- Accent color picker
- Dark mode toggle
- Greeting visibility toggle

#### 🔔 **Notifications**
- Enable/disable browser notifications
- Enable/disable notification sounds
- Browser notifications show when timers complete or alarms trigger
- Sound notifications play alert audio for timer/alarm completions
- App will request notification permission on first load

#### 🌐 **Connection**
- Real-time connection status indicator (Online/Offline)
- Clear App Cache button
  - Removes cached files for fresh updates
  - **Preserves all your tasks, notes, and settings**
  - Useful for troubleshooting or forcing updates

#### 📖 **Guide & About**
- App version display
- Last updated date
- Last checked for updates timestamp (updates in real-time)
- GitHub profile link
- Keyboard shortcuts guide access

**Tip**: Click any section header to expand/collapse it. The Styling section is open by default.

---

## 🎨 Customization

### Color Schemes

The dashboard uses CSS custom properties for easy theming:

```css
:root {
  --bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --card-bg: rgba(255, 255, 255, 0.95);
  --text: #2d3748;
  --accent: #667eea;
  --shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}
```

### Changing Colors

**Via Settings Panel** (Recommended):
- Open settings (⚙️ icon)
- Use the color picker to change accent color
- Changes apply immediately

**Via Code**:
- Edit the `:root` variables in the `<style>` section
- Modify gradient colors in `--bg` property
- Adjust `--accent` for button and highlight colors

### Modifying Animations

Animation timings can be adjusted:
```css
/* Card animation delays */
.card:nth-child(1) { animation-delay: 0.3s; }
.card:nth-child(2) { animation-delay: 0.4s; }
.card:nth-child(3) { animation-delay: 0.5s; }
```

### Adding Custom Cards

To add a new card to the dashboard:

```html
<div class="card">
  <h2>Your Card Title</h2>
  <div>Your card content here</div>
</div>
```

The card will automatically inherit the styling and animations.

---

## 📁 Project Structure

```
simple-dashboard/
│
├── index.html          # Main HTML structure
├── style.css           # All CSS styling and animations
├── script.js           # All JavaScript functionality
├── manifest.json       # PWA manifest configuration
├── sw.js               # Service Worker for offline support
├── icons/             # PWA icons for all platforms
│   ├── android/       # Android launcher icons
│   ├── ios/           # iOS app icons
│   └── windows11/     # Windows 11 tile icons
└── README.md          # This documentation file
```

### Code Organization

The project uses a **modular structure** with separate files:

1. **`index.html`** - Main HTML structure
   - Meta tags and title
   - Links to external CSS/JS libraries
   - Dashboard layout and modals
   - All HTML content

2. **`style.css`** - All styling and animations
   - CSS custom properties for theming
   - Gradient backgrounds and glassmorphism
   - Animations and keyframes
   - Responsive design rules
   - Dark mode styles

3. **`script.js`** - All functionality
   - Clock functionality
   - Weather and location API calls
   - To-do list logic
   - Notes system
   - Settings management
   - Time tracking features
   - Search functionality
   - Toast notification triggers
   - Service worker registration

4. **`sw.js`** - Service Worker
   - Offline caching
   - Update detection
   - Background sync capabilities

---

## 🌐 API Reference

### Open-Meteo Weather API

**Endpoint**: `https://api.open-meteo.com/v1/forecast`

**Parameters**:
- `latitude` - User's latitude
- `longitude` - User's longitude  
- `current` - Current weather variables
  - `temperature_2m` - Temperature at 2 meters
  - `relative_humidity_2m` - Humidity percentage
  - `precipitation` - Current precipitation (mm)
  - `weather_code` - WMO weather code
  - `wind_speed_10m` - Wind speed at 10 meters (km/h)
- `daily` - Daily forecast variables
  - `weather_code` - Daily weather codes
  - `temperature_2m_max` - Maximum temperature
  - `temperature_2m_min` - Minimum temperature
  - `precipitation_sum` - Total precipitation (mm)
  - `wind_speed_10m_max` - Maximum wind speed
- `timezone=auto` - Automatic timezone detection

**Response Data Used**:
- **Current**: temperature, humidity, precipitation, weather code, wind speed
- **Daily (7-day)**: weather codes, max/min temps, precipitation, wind speed

**Weather Codes**: WMO (World Meteorological Organization) standard codes for 30+ conditions

**Documentation**: [Open-Meteo API Docs](https://open-meteo.com/en/docs)

### BigDataCloud Reverse Geocoding API

**Endpoint**: `https://api.bigdatacloud.net/data/reverse-geocode-client`

**Parameters**:
- `latitude` - User's latitude
- `longitude` - User's longitude
- `localityLanguage=en` - Language for location names

**Response Data Used**:
- `city` - City name
- `locality` - Locality/neighborhood
- `principalSubdivision` - State/province (fallback)
- `countryName` - Country name

**Documentation**: [BigDataCloud API Docs](https://www.bigdatacloud.com/free-api/free-reverse-geocode-to-city-api)

---

## 💾 Data Storage

### LocalStorage Schema

The dashboard stores data in browser localStorage:

#### Settings Object
```javascript
{
  "title": "My Productivity Dashboard",
  "name": "Your Name",
  "accent": "#667eea",
  "darkMode": true,
  "showGreeting": true
}
```
**Key**: `"settings"`

**Settings Properties**:
- `title` - Dashboard title text
- `name` - User's name for greeting
- `accent` - Accent color (hex)
- `darkMode` - Dark theme enabled (boolean)
- `showGreeting` - Display greeting (boolean, default: true)

#### To-Do Lists Array
```javascript
[
  {
    "id": "1234567890",
    "name": "Work Tasks",
    "color": "blue",
    "tasks": [
      {
        "text": "Complete project report",
        "note": "Include Q4 analysis",
        "priority": "high",
        "dueDate": "2025-10-15",
        "done": false
      },
      {
        "text": "Review pull request",
        "note": "",
        "priority": "medium",
        "dueDate": "2025-10-14",
        "done": true
      }
    ]
  }
]
```
**Key**: `"todoLists"`

**List Colors**: `blue`, `green`, `purple`, `orange`, `pink`, `red`

**Task Structure**:
- `text` (required) - The main task title
- `note` (optional) - Additional context or details
- `priority` (optional) - Task priority: `none`, `low`, `medium`, `high`
- `dueDate` (optional) - Due date in YYYY-MM-DD format
- `done` (boolean) - Completion status

**Priority Levels**:
- `high` - Red badge, urgent/critical tasks
- `medium` - Orange badge, important tasks
- `low` - Blue badge, nice-to-have tasks
- `none` - No badge displayed

**Due Date States**:
- **Overdue** - Red badge with ⚠️ icon
- **Today** - Yellow badge with 📅 icon
- **Upcoming** - Default badge with 📆 icon

#### Notes Array
```javascript
[
  {
    "id": "1234567890",
    "title": "Note Title",
    "content": "Note content here...",
    "color": "yellow",
    "date": 1234567890
  }
]
```
**Key**: `"notes"`

**Note Colors**: `yellow`, `pink`, `blue`, `green`, `purple`, `orange`

#### Time Tracking Sessions Array
```javascript
[
  {
    "type": "Stopwatch",
    "duration": 1800,
    "timestamp": "2025-01-15T10:30:00.000Z",
    "date": "1/15/2025",
    "time": "10:30:00 AM"
  },
  {
    "type": "Timer",
    "duration": 300,
    "timestamp": "2025-01-15T11:45:00.000Z",
    "date": "1/15/2025",
    "time": "11:45:00 AM"
  }
]
```
**Key**: `"timeTrackingSessions"`

- Stores last 20 sessions automatically
- Session properties:
  - `type` - "Stopwatch" or "Timer"
  - `duration` - Duration in seconds
  - `timestamp` - ISO timestamp
  - `date` - Local date string
  - `time` - Local time string

#### Time Tracking Alarms Array
```javascript
[
  {
    "id": 1705315200000,
    "time": "09:00",
    "label": "Morning Alarm",
    "days": [1, 2, 3, 4, 5],
    "enabled": true,
    "createdAt": "2025-01-15T08:00:00.000Z"
  }
]
```
**Key**: `"timeTrackingAlarms"`

- Alarm properties:
  - `id` - Unique alarm ID (timestamp)
  - `time` - Alarm time in HH:MM format
  - `label` - Optional alarm label
  - `days` - Array of day numbers (0=Sunday, 6=Saturday)
  - `enabled` - Whether alarm is active
  - `createdAt` - Creation timestamp

- Day numbers:
  - `0` - Sunday
  - `1` - Monday
  - `2` - Tuesday
  - `3` - Wednesday
  - `4` - Thursday
  - `5` - Friday
  - `6` - Saturday

### Clearing Data

To reset the dashboard:
1. Open browser DevTools (F12)
2. Go to Application/Storage tab
3. Clear localStorage for the domain
4. Refresh the page

---

## 🎭 Animation Details

### Page Load Animations

1. **Title & Greeting** (0.1s - 0.2s delay)
   - Fade in from top
   - Smooth opacity transition

2. **Dashboard Cards** (0.3s - 0.5s delay)
   - Fade in with upward slide
   - Staggered animation for each card

3. **Footer** (0.6s delay)
   - Fade in transition

### Interactive Animations

- **Card Hover**: Lift effect (-5px translateY)
- **Settings Button**: Rotate 90° + scale on hover
- **Settings Modal**: Slide in from right
- **GitHub Link**: Icon rotates 360° on hover
- **Footer Link**: Underline slide animation
- **Task Items**: Slide right on hover
- **Buttons**: Lift and glow on hover

---

## 🔔 Toast Notifications

### Toast Events

| Action | Toast Type | Message | Duration |
|--------|-----------|---------|----------|
| Page Load | Info | "Welcome back, [name]! 👋" | 3500ms |
| Task Added | Success | "Task added!" | 2000ms |
| Task Completed | Success | "Task completed! 🎉" | 2000ms |
| Task Uncompleted | Info | "Task marked incomplete" | 2000ms |
| Task Deleted | Info | "Task deleted: [task]" | 2500ms |
| Empty Task Warning | Warning | "Please enter a task title" | 2000ms |
| Settings Saved | Success | "Settings saved successfully!" | 3000ms |
| Weather Error | Error | "Unable to fetch weather data" | 4000ms |
| Location Denied | Warning | "Location access denied..." | 5000ms |
| Timer Complete | Success | "⏰ Timer finished!" | 5000ms |
| Alarm Triggered | Success | "🔔 [alarm label] - [time]" | 10000ms |
| Alarm Added | Success | "Alarm added successfully!" | 2000ms |
| Alarm Deleted | Info | "Alarm deleted" | 2000ms |
| Alarm Toggled | Info | "Alarm [enabled/disabled]" | 2000ms |

### Toast Positions
- **Top-right**: Settings, Welcome, Cache management
- **Bottom-right**: Tasks, Weather, Location, Time Tracking

---

## 🌙 Dark Mode

### Automatic Theming

Dark mode adjusts:
- Background gradients (dark purple-grey)
- Card backgrounds (semi-transparent dark)
- Text colors (light grey/white)
- Shadow intensities (deeper shadows)
- Border colors and accents

### Triggering Dark Mode

1. **Via Settings**:
   - Open settings modal
   - Toggle "Dark Mode" checkbox
   - Click "Save"

2. **Persistence**:
   - Dark mode preference saved to localStorage
   - Automatically applied on page reload

---

## 🔧 Troubleshooting

### Weather Not Loading

**Problem**: Weather shows "Loading..." indefinitely

**Solutions**:
1. Check internet connection
2. Allow location access in browser settings
3. Check browser console for API errors
4. Try refreshing the page

### Location Permission Denied

**Problem**: Location shows "Location access required"

**Solutions**:
1. Click the 🔒 icon in browser address bar
2. Allow location access
3. Refresh the page
4. If still blocked, check browser privacy settings

### Tasks Not Saving

**Problem**: Tasks disappear on page refresh

**Solutions**:
1. Check if localStorage is enabled
2. Verify browser is not in private/incognito mode
3. Check available storage quota
4. Clear browser cache and try again

### Settings Not Persisting

**Problem**: Settings reset on page reload

**Solutions**:
1. Ensure localStorage is enabled
2. Check browser privacy settings
3. Verify cookies/storage not being cleared on exit
4. Try a different browser to isolate the issue

### Toast Notifications Not Appearing

**Problem**: No toast notifications visible

**Solutions**:
1. Check browser console for JavaScript errors
2. Verify CDN connection (check Network tab)
3. Ensure internet connection is stable
4. Try hard refresh (Ctrl+Shift+R)

### Checking Connection Status

**How to Check**:
1. Open settings (⚙️ icon in top-right)
2. Expand the "Connection" section (🌐)
3. Look at the "Status" indicator
4. Green dot + "Online" = Connected to internet
5. Red dot + "Offline" = No internet connection

**Note**: The app works offline thanks to the service worker, but some features (weather, location) require an internet connection.

### Clearing App Cache

**When to Clear Cache**:
- App not loading latest updates
- Service worker issues
- Testing or debugging

**How to Clear**:
1. Open settings (⚙️ icon in top-right)
2. Expand the "Connection" section (🌐)
3. Click "🗑️ Clear App Cache" button
4. Confirm the action
5. App will reload automatically

**Important**: Clearing cache removes cached files (HTML, CSS, JS) but **keeps all your tasks, notes, and settings safe** in localStorage.

### PWA Auto-Updates

**How It Works**:
- The app automatically checks for updates every 5 minutes
- When a new version is detected, it installs in the background
- A toast notification appears: "Update found! Installing new version... 🔄"
- The app automatically reloads to activate the new version
- Your tasks, notes, and settings remain safe during updates

**How Updates Are Detected**:

The update system uses a multi-step process:

1. **Service Worker Versioning** (`sw.js`):
   - Each version has a unique cache name (e.g., `productivity-dashboard-v1.1.0`)
   - When you update your code, you change the version number in `sw.js`

2. **Periodic Checks**:
   - Every 5 minutes, the app calls `registration.update()`
   - This forces the browser to check if `sw.js` has changed

3. **File Comparison**:
   - Browser compares the current `sw.js` file with the one on the server
   - If they differ (byte-by-byte comparison), it's a new version

4. **Background Installation**:
   - New service worker downloads and installs in the background
   - `updatefound` event fires when new worker is detected
   - Original service worker keeps running (no interruption)

5. **Automatic Activation**:
   - App sends `SKIP_WAITING` message to new service worker
   - New worker calls `skipWaiting()` to activate immediately
   - `controllerchange` event fires and app reloads
   - New version is now active

**Key Points**:
- Updates only detected if `sw.js` file changes on server
- Cache name change forces new resources to download
- Old cache automatically deleted on activation
- localStorage (tasks/notes/settings) never touched

**No Action Required**: Updates happen automatically when you're using the PWA. Just keep the app open and it will stay up-to-date!

**Manual Update**: If you want to force an update, you can:
1. Clear the app cache (Settings → Connection → Clear App Cache)
2. Or refresh the page (F5 or Ctrl+R)

### Checking App Version & Updates

**View App Information**:
1. Open settings (⚙️ icon in top-right)
2. Expand the "Guide & About" section (📖)
3. View app details:
   - **Version**: Current app version (v1.1.0)
   - **Last Updated**: Date of last app update
   - **Last Checked**: When the app last checked for updates

**Understanding "Last Checked"**:
- Shows relative time (e.g., "Just now", "2 minutes ago", "1 hour ago")
- Updates automatically every 60 seconds while viewing settings
- Stored in localStorage and persists across sessions
- Reset to current time every 5 minutes when update check runs

---

## 🚀 Future Enhancements

### 🎯 **Core Productivity Features**
- [ ] **Pomodoro Timer Integration** - Built-in focus timer with break reminders
- [ ] **Calendar Integration** - Sync with Google Calendar, Outlook, or Apple Calendar
- [ ] **Habit Tracker** - Daily habit tracking with streak counters and analytics
- [ ] **Time Tracking** - Track time spent on tasks and projects
- [ ] **Goal Setting** - Set and track short-term and long-term goals
- [ ] **Daily Quotes/Motivation** - Inspirational quotes and motivational content
- [ ] **Task Reminders/Notifications** - Browser notifications for due tasks

### 📊 **Data & Analytics**
- [ ] **Productivity Analytics** - Charts showing task completion trends
- [ ] **Habit Analytics** - Track habit streaks and success rates
- [ ] **Export/Import Data** - Backup and restore settings, notes, and lists
- [ ] **Data Visualization** - Interactive charts and graphs for insights

### 🎨 **Customization & Personalization**
- [ ] **Custom Background Images** - Upload personal photos or choose from gallery
- [ ] **Theme Customization** - Create custom color schemes and themes
- [ ] **Widget Layout Editor** - Drag-and-drop widget arrangement
- [ ] **Custom Widgets** - User-defined widgets for specific needs
- [ ] **Font Customization** - Choose from different font families and sizes
- [ ] **Layout Presets** - Quick layout switching (minimal, detailed, focused)

### 🔧 **Advanced Features**
- [ ] **List Templates** - Pre-built templates (Weekly Shopping, Project Plan, etc.)
- [ ] **Task Dependencies** - Link tasks that depend on each other
- [ ] **Sub-tasks** - Break down complex tasks into smaller components
- [ ] **Task Templates** - Reusable task structures for common activities
- [ ] **Bulk Operations** - Select and modify multiple tasks at once
- [ ] **Advanced Search Filters** - More granular filtering options

### 🌐 **Integration & Sync**
- [ ] **Cloud Sync** - Sync data across devices using cloud storage
- [ ] **Third-party Integrations** - Connect with Trello, Asana, Notion, etc.
- [ ] **API Support** - Allow external apps to interact with the dashboard
- [ ] **Webhook Support** - Real-time updates from external services
- [ ] **Import from Other Apps** - Migrate data from existing productivity tools

### 📱 **Mobile & PWA Enhancements**
- [ ] **Enhanced PWA Features** - Push notifications, background refresh
- [ ] **Offline Mode Improvements** - Better offline functionality
- [ ] **Mobile Gestures** - Swipe actions for quick task management
- [ ] **Voice Commands** - Add tasks using voice input
- [ ] **Camera Integration** - Scan documents or capture quick notes
- [ ] **Location-based Reminders** - Tasks triggered by location

### 🔒 **Security & Privacy**
- [ ] **Data Encryption** - Encrypt sensitive data locally
- [ ] **Secure Backup** - Encrypted cloud backup options
- [ ] **Two-Factor Authentication** - Enhanced security for cloud sync

### 🌍 **Accessibility & Internationalization**
- [ ] **Multi-language Support** - Support for multiple languages
- [ ] **Accessibility Improvements** - Screen reader support, keyboard navigation
- [ ] **High Contrast Mode** - Better visibility for users with visual impairments
- [ ] **Font Size Scaling** - Dynamic font size adjustment
- [ ] **Voice Feedback** - Audio feedback for actions
- [ ] **RTL Support** - Right-to-left language support

### 🔧 **Developer & Power User Features**
- [ ] **Plugin System** - Allow third-party extensions
- [ ] **Custom Scripts** - JavaScript automation for power users
- [ ] **Developer Tools** - Built-in debugging and development tools
- [ ] **API Documentation** - Comprehensive API documentation
- [ ] **Webhook Testing** - Built-in webhook testing tools
- [ ] **Performance Monitoring** - Built-in performance analytics

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Test your changes thoroughly
- Update documentation as needed
- Keep commits clean and descriptive
- Add comments for complex logic

---

## 📄 License

This project is open source and available for personal and commercial use.

**External Libraries**:
- [Toast Notification Library](https://github.com/BlizzardWolf7/Toast-Notification-Library) - GPL-3.0 License

---

## 🙏 Acknowledgments

### APIs & Services
- **[Open-Meteo](https://open-meteo.com/)** - Free weather API
- **[BigDataCloud](https://www.bigdatacloud.com/)** - Free geocoding API
- **[jsDelivr](https://www.jsdelivr.com/)** - CDN for library hosting

### Inspiration & Design
- Modern glassmorphism design trends
- Material Design principles
- Productivity app UI patterns

### Libraries
- Custom **[Toast Notification Library](https://github.com/BlizzardWolf7/Toast-Notification-Library)** by SimonRingwelski

---

## 👨‍💻 Author

**Simon Ringwelski**

- 🌐 Website: [simonringwelski.dk](https://simonringwelski.dk/)
- 🐙 GitHub: [@BlizzardWolf7](https://github.com/BlizzardWolf7)
- 📍 Location: Skive, Denmark

---

## 📞 Support

Need help or have questions?

1. **Check the documentation** above
2. **Open an issue** on GitHub

---

## ⭐ Show Your Support

If you found this project helpful or inspiring:

- ⭐ **Star** this repository
- 🍴 **Fork** it for your own use
- 📢 **Share** it with others
- 💬 **Provide feedback** through issues

---

## 📋 Version History

For detailed version history and changelog, see [CHANGELOG.md](CHANGELOG.md).

---

<div align="center">

### Built with ❤️ by [Simon Ringwelski](https://simonringwelski.dk)

**[⬆ Back to Top](#-modern-productivity-dashboard)**

</div>

