# 🚀 Modern Productivity Dashboard

A beautiful, modern, and feature-rich productivity dashboard built with pure HTML, CSS, and vanilla JavaScript. This single-page application helps you stay organized with real-time information, task management, and full customization options.

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

### 🌤️ **Weather Integration**
- Real-time weather data using Open-Meteo API (no API key required)
- **Location detection** with city and country display
- Temperature and wind speed information
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
- **Dashboard title customization** - Make it your own
- **Personal greeting** - Add your name for a personalized experience
- **Greeting visibility toggle** - Show or hide the greeting for a minimal look
- **Accent color picker** - Choose your favorite color theme
- **Dark mode toggle** - Switch between light and dark themes
- **Settings persistence** - All preferences saved locally

### 🔍 **Global Search**
- **Search across everything** - Find tasks and notes instantly
- **Real-time results** - See matches as you type
- **Keyword highlighting** - Search terms highlighted in yellow
- **Smart categorization** - Results organized by Tasks and Notes
- **Quick navigation** - Click any result to open it
- **Completion status** - See if tasks are done or pending
- **Priority badges** - Color-coded priority indicators in search results
- **Due date badges** - Smart date display with overdue/today warnings
- **List context** - Shows which list each task belongs to
- **Ctrl+F shortcut** - Quick access with keyboard

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

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS custom properties
- **Vanilla JavaScript** - No frameworks, pure ES6+

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
   - No build process or dependencies to install!

### Alternative: Direct Download
- Download `index.html` as a standalone file
- Double-click to open in your default browser

### Requirements
- Modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- Internet connection (for weather data and external libraries)

---

## 🚀 Usage Guide

### Initial Setup

1. **First Launch**:
   - Allow location access when prompted for weather data
   - You'll see a welcome toast notification

2. **Customize Your Dashboard**:
   - Click the ⚙️ settings icon in the top-right corner (or press Ctrl+S)
   - Set your dashboard title
   - Enter your name for personalized greeting
   - Toggle "Show Greeting" to display or hide the greeting
   - Choose your favorite accent color
   - Toggle dark mode if preferred
   - Click "Save" to apply changes

3. **Search Your Content**:
   - Click the 🔍 search icon (or press Ctrl+F)
   - Type any keyword to search
   - Click results to navigate to tasks or notes

4. **Stay on Top of Deadlines**:
   - Dashboard shows overdue tasks count (red)
   - Dashboard shows tasks due today count (yellow)
   - Lists with urgent tasks are highlighted (red for overdue, yellow for due today)
   - Set due dates when creating tasks to enable deadline tracking

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
4. Updates temperature and wind speed

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
├── index.html          # Main application file (complete dashboard)
└── README.md          # This documentation file
```

### Code Organization

The `index.html` file is organized into:

1. **Head Section**
   - Meta tags and title
   - External CSS (Toast library)
   - Internal CSS styles
   - CSS animations and keyframes

2. **Body Section**
   - Settings button
   - Dashboard title and greeting
   - Cards container (Clock, Weather, To-Do)
   - Footer with links
   - Settings modal

3. **Scripts**
   - External JS (Toast library)
   - Clock functionality
   - Weather and location API calls
   - To-do list logic
   - Settings management
   - Toast notification triggers

---

## 🌐 API Reference

### Open-Meteo Weather API

**Endpoint**: `https://api.open-meteo.com/v1/forecast`

**Parameters**:
- `latitude` - User's latitude
- `longitude` - User's longitude  
- `current_weather=true` - Get current weather data

**Response Data Used**:
- `temperature` - Current temperature in °C
- `windspeed` - Wind speed in km/h

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
| Task Added | Success | "Task added: [task]" | 2500ms |
| Task Completed | Success | "Task completed! 🎉" | 2000ms |
| Task Uncompleted | Info | "Task marked as incomplete" | 2000ms |
| Task Deleted | Info | "Task deleted: [task]" | 3000ms |
| Empty Task Warning | Warning | "Please enter a task before adding" | 2500ms |
| Settings Saved | Success | "Settings saved successfully!" | 3000ms |
| Weather Error | Error | "Unable to fetch weather data" | 4000ms |
| Location Denied | Warning | "Location access denied..." | 5000ms |

### Toast Positions
- **Top-right**: Settings, Welcome
- **Bottom-right**: Tasks, Weather, Location

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

---

## 🚀 Future Enhancements

Potential features for future versions:

- [ ] Pomodoro timer integration
- [ ] Calendar integration
- [ ] Habit tracker
- [ ] Daily quotes/motivation
- [ ] Weather forecast (5-day)
- [ ] Export/import settings, notes, and lists
- [ ] Advanced filters (by priority, date, color, completion status)
- [ ] Sort tasks by priority or due date
- [ ] Drag-and-drop task reordering
- [ ] List templates (e.g., "Weekly Shopping", "Project Plan")
- [ ] Recurring tasks
- [ ] Task reminders/notifications
- [ ] Custom background images
- [ ] More widget options
- [ ] PWA support for offline use
- [ ] Sync across devices (cloud storage)

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

## 📊 Project Stats

- **Lines of Code**: ~3,180
- **Technologies**: 3 (HTML, CSS, JS)
- **External APIs**: 2
- **Features**: 18+
- **Modals**: 8 (Settings, Shortcuts, Search, Todo Overview, Create List, View List, List Settings, Notes Overview, Note Edit)
- **Keyboard Shortcuts**: 6
- **Customization Options**: 5 (Title, Name, Greeting, Accent Color, Dark Mode)
- **Color Options**: 12 (6 for lists, 6 for notes)
- **Priority Levels**: 4 (None, Low, Medium, High)
- **Smart Notifications**: Overdue tasks + Tasks due today tracking
- **File Size**: < 90KB
- **Load Time**: < 1 second

---

## 🔖 Version History

### v1.0.6 (Current)
- ✅ **New:** Tasks overdue notification system with red styling
- ✅ **New:** Tasks due today notification system with yellow styling
- ✅ **New:** Dashboard widget shows "X tasks overdue" counter (red, pulsing)
- ✅ **New:** Dashboard widget shows "X tasks due today" counter (yellow, pulsing)
- ✅ **New:** Lists with overdue tasks highlighted with red gradient
- ✅ **New:** Lists with tasks due today highlighted with yellow gradient
- ✅ **New:** Overdue badge on list cards (e.g., "⚠️ 2 overdue") - full-width at bottom
- ✅ **New:** Due today badge on list cards (e.g., "📅  2 due today") - full-width at bottom
- ✅ **New:** Priority system - overdue takes visual priority over due today
- ✅ **Enhanced:** List cards with overdue tasks have red glow effect (highest priority)
- ✅ **Enhanced:** List cards with due today tasks have golden glow effect
- ✅ **Enhanced:** Better visual hierarchy for time-sensitive items
- ✅ **Enhanced:** Badges span full card width for maximum visibility
- ✅ **Improved:** Only counts incomplete tasks in deadline counters
- ✅ **Improved:** Badges positioned at bottom for cleaner card layout
- ✅ **Improved:** Smart highlighting - red overrides yellow when both exist

### v1.0.5
- ✅ **New:** Toggle greeting visibility in settings
- ✅ **New:** "Show Greeting" checkbox in settings panel
- ✅ **New:** Task priority system (None, Low, Medium, High)
- ✅ **New:** Due date picker for tasks
- ✅ **New:** Color-coded priority badges (Red, Orange, Blue)
- ✅ **New:** Smart due date indicators (⚠️ overdue, 📅 today, 📆 upcoming)
- ✅ **New:** Priority and due date selectors in task creation
- ✅ **Improved:** Greeting can now be hidden for minimal look
- ✅ **Improved:** Task structure includes priority and dueDate fields
- ✅ **Improved:** Search results now display priority and due date badges
- ✅ **Enhanced:** Greeting setting persists across sessions
- ✅ **Enhanced:** Tasks display priority and due date badges
- ✅ **Enhanced:** Overdue tasks highlighted in red (in tasks and search)
- ✅ **Enhanced:** Today's tasks highlighted in yellow (in tasks and search)
- ✅ **Enhanced:** Search results show complete task information with colors
- ✅ **Added:** Default greeting is enabled (backwards compatible)

### v1.0.4
- ✅ **New:** Global search feature across all tasks and notes
- ✅ **New:** Search button (🔍) next to settings in top-right
- ✅ **New:** Real-time search with instant results
- ✅ **New:** Search highlighting - matching terms highlighted in yellow
- ✅ **New:** Click search results to open task list or note
- ✅ **New:** Ctrl+F keyboard shortcut for quick search access
- ✅ **New:** Organized results by type (Tasks / Notes)
- ✅ **New:** Result count displayed for each category
- ✅ **Enhanced:** Search through task titles, task notes, note titles, and note content
- ✅ **Enhanced:** Shows which list each task belongs to
- ✅ **Enhanced:** Displays completion status for tasks
- ✅ **Added:** Search modal with beautiful UI matching dashboard style

### v1.0.3
- ✅ **Major Update:** Multi-list to-do system with 3-modal workflow
- ✅ **New:** Create multiple color-coded to-do lists
- ✅ **New:** Organize tasks by category or project
- ✅ **New:** Dedicated list creation modal (name + color only)
- ✅ **New:** Task management modal (primary interface for adding/managing tasks)
- ✅ **New:** List settings modal (edit name, color, or delete list)
- ✅ **New:** Task notes field - Add optional notes/context to any task
- ✅ **New:** Track completion progress per list
- ✅ **Improved:** Beautiful task input section with contained design
- ✅ **Improved:** Input fields stack vertically for better UX
- ✅ **Improved:** Card-style task items with enhanced spacing
- ✅ **Improved:** Delete button positioned in top-right corner (smaller, cleaner)
- ✅ **Improved:** Cleaner separation between list creation and task management
- ✅ **Improved:** Settings icon (⚙️) for list properties
- ✅ **Enhanced:** Task management is now the primary focus when viewing a list
- ✅ **Enhanced:** Tasks display title + note in card layout with more space
- ✅ **Enhanced:** Delete button appears on hover for cleaner look
- ✅ **Enhanced:** Better shadows and hover effects on tasks
- ✅ **Added:** 6 color options for lists

### v1.0.2
- ✅ **New:** Note-taking widget with full CRUD functionality
- ✅ **New:** Color-coded sticky notes (6 colors)
- ✅ **New:** Beautiful sticky note cards with title and preview
- ✅ **New:** Note editor modal with rich editing features
- ✅ **New:** Auto-save notes to localStorage
- ✅ **Added:** Notes counter on dashboard
- ✅ **Enhanced:** Smooth animations for 4th card

### v1.0.1
- ✅ **New:** Dedicated keyboard shortcuts modal
- ✅ **New:** Ctrl+K shortcut to open shortcuts guide
- ✅ **Improved:** Keyboard shortcuts now in separate modal
- ✅ **Enhanced:** Better modal management (Escape closes any modal)
- ✅ **Added:** Shortcuts button in settings panel

### v1.0.0
- ✅ Initial release
- ✅ Real-time clock
- ✅ Weather integration
- ✅ To-do list functionality
- ✅ Settings customization
- ✅ Dark mode support
- ✅ Toast notifications
- ✅ Location detection (city & country)
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Social links integration

---

<div align="center">

### Built with ❤️ by [Simon Ringwelski](https://simonringwelski.dk)

**[⬆ Back to Top](#-modern-productivity-dashboard)**

</div>

