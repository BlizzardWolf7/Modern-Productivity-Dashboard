# 📋 Changelog

All notable changes to the Modern Productivity Dashboard project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - Current

### ✨ Added
- Time Tracking feature with comprehensive stopwatch and timer functionality
- Time Tracking button (⏱️) added to the Current Time card
- Dedicated Time Tracking modal with tabbed interface
- Stopwatch functionality with start, pause, and reset controls
- Timer functionality with customizable hours, minutes, and seconds
- Timer countdown with automatic completion notifications
- Alarm functionality with one-time and recurring alarms
- Alarm tab in Time Tracking modal with time picker and day selection
- Hourly weather forecast feature for detailed day-by-day weather analysis
- Clickable forecast days to view 24-hour weather breakdown
- 24-hour time format for hourly weather display
- Modular code structure with separate CSS (style.css) and JavaScript (script.js) files

### 🔧 Enhanced
- Time card now includes interactive Time Tracking functionality
- Modal interface with consistent design language matching dashboard theme
- Time display formatting with proper zero-padding (HH:MM:SS)
- Session management with automatic cleanup (keeps last 20 sessions)
- Timer input validation and real-time display updates
- Keyboard support for modal closing (Escape key)
- Weather forecast now includes hourly data API integration
- Forecast day cards are now interactive with hover effects
- Alarm system integrates with existing notification settings
- Time Tracking modal tabs properly styled for three-tab layout
- Service worker caching strategy updated to include separate CSS and JS files

### 🚀 Improved
- Productivity tracking capabilities with time measurement tools
- User experience with intuitive time tracking interface
- Data persistence with localStorage integration
- Visual feedback with color-coded control buttons
- Session history for productivity analysis
- Timer notifications using existing toast system
- Weather information more detailed with hour-by-hour breakdown
- Alarm management with enable/disable and delete functionality
- Code organization with separation of concerns (HTML, CSS, JS)
- Better caching performance with explicit file references in service worker

---

## [1.0.9]

### ✨ Added
- Advanced task sorting system with multiple options
- Sort by priority (High → Low)
- Sort by due date (Soonest first or Latest first)
- Sort by creation date (Newest first or Oldest first)
- Drag-and-drop task reordering functionality
- Visual drag handles (⋮⋮) on task items
- Smooth drag-and-drop animations and feedback
- Recurring tasks with 4 interval options (Daily, Weekly, Monthly, Yearly)
- Automatic recurring task generation when completed
- Recurring task badges with interval icons (🔄📅📆🗓️)
- Toggle to show/hide recurring tasks
- Enhanced task controls panel with sorting and filtering options
- Task creation timestamps for better organization
- Unique task IDs for improved data management
- Enhanced search functionality with comprehensive task information
- Search by recurring status (daily, weekly, monthly, yearly)
- Search by creation date and time
- Display creation timestamps in search results
- Display recurring task indicators in search results
- Display unique task IDs in search results for reference
- Advanced search filtering system with type-based filters
- Search type filters (All, Tasks, Notes) with radio button selection
- Task-specific advanced filters (Priority, Due Date, Completion, List Color, Recurring)
- Note-specific advanced filters (Color)
- Dynamic filter interface that shows relevant filters based on search type
- Real-time filter application with instant search results update
- Filter reset functionality when closing search modal

### 🔧 Enhanced
- Task list interface with comprehensive control panel
- Task metadata display with recurring indicators
- Drag-and-drop visual feedback with rotation and opacity effects
- Improved task completion workflow for recurring tasks
- Better task organization and management capabilities
- Search results display with comprehensive task information
- Search functionality with expanded searchable fields
- Search interface with advanced filtering capabilities
- Filter controls with intuitive radio button and dropdown selections

### 🚀 Improved
- Task management workflow with multiple sorting options
- User experience with intuitive drag-and-drop reordering
- Productivity with automatic recurring task generation
- Task visibility with filtering options
- Data persistence with unique task identification
- Search experience with comprehensive task information display
- Task discovery with enhanced search capabilities
- Search workflow with advanced filtering options
- Content discovery with type-specific filter controls

---

## [1.0.8]

### ✨ Added
- Enhanced weather system with detailed conditions
- Humidity display on weather card
- Weather condition icons (30+ conditions)
- Weather emoji mapping (sunny, rainy, snowy, cloudy, etc.)
- 7-day weather forecast modal
- Detailed weather view with current conditions
- Daily high/low temperature forecast
- Precipitation forecasts (mm)
- Wind speed in detailed view
- "Show Forecast" button on weather card
- Weather modal with beautiful gradient design
- Interactive forecast cards with hover effects
- Separate changelog document (CHANGELOG.md) for better organization

### 🔧 Enhanced
- Weather card shows condition with emoji
- Weather API now fetches comprehensive data
- Better visual representation of weather data

### 🚀 Improved
- Weather information more detailed and useful
- User can plan ahead with 7-day forecast
- README.md cleaned up by removing project stats section to reduce clutter
- Version history moved to dedicated changelog file for better maintainability

---

## [1.0.7]

### ✨ Added
- Progressive Web App (PWA) support
- Installable as standalone app on all devices
- Offline functionality with service worker
- Smart caching strategy for optimal performance
- PWA manifest configuration (manifest.json)
- Service Worker (sw.js) for offline support and caching
- Cross-platform app icons (180+ icons)
- Android launcher icons (6 sizes)
- iOS app icons (24 sizes)
- Windows 11 tile icons (80 sizes)
- Auto-generated icons using PWABuilder Image Generator
- Background sync capability for future features
- Connection status indicator in settings
- Real-time online/offline status display
- Visual connection indicator with pulsing dot
- Collapsible settings sections (Styling, Connection, Guide/About)
- Cache clearing functionality with data preservation
- Clear App Cache button in Connection section
- Automatic update system for PWA
- Periodic update checks (every 5 minutes)
- Zero-downtime updates with automatic activation
- App version display in Guide & About section
- Last updated date in settings
- Last checked for updates timestamp (real-time)

### 🔧 Enhanced
- App-like experience on mobile devices
- Full-screen mode support
- Better organized settings interface

### 🚀 Improved
- Faster loading with cached resources
- Works offline after first visit
- Better connectivity debugging for users
- Settings modal UI with categorized sections
- Seamless updates without user intervention

---

## [1.0.6]

### ✨ Added
- Tasks overdue notification system with red styling
- Tasks due today notification system with yellow styling
- Dashboard widget shows "X tasks overdue" counter (red, pulsing)
- Dashboard widget shows "X tasks due today" counter (yellow, pulsing)
- Lists with overdue tasks highlighted with red gradient
- Lists with tasks due today highlighted with yellow gradient
- Overdue badge on list cards (e.g., "⚠️ 2 overdue") - full-width at bottom
- Due today badge on list cards (e.g., "📅 2 due today") - full-width at bottom
- Priority system - overdue takes visual priority over due today

### 🔧 Enhanced
- List cards with overdue tasks have red glow effect (highest priority)
- List cards with due today tasks have golden glow effect
- Better visual hierarchy for time-sensitive items
- Badges span full card width for maximum visibility

### 🚀 Improved
- Only counts incomplete tasks in deadline counters
- Badges positioned at bottom for cleaner card layout
- Smart highlighting - red overrides yellow when both exist

---

## [1.0.5]

### ✨ Added
- Toggle greeting visibility in settings
- "Show Greeting" checkbox in settings panel
- Task priority system (None, Low, Medium, High)
- Due date picker for tasks
- Color-coded priority badges (Red, Orange, Blue)
- Smart due date indicators (⚠️ overdue, 📅 today, 📆 upcoming)
- Priority and due date selectors in task creation

### 🚀 Improved
- Greeting can now be hidden for minimal look
- Task structure includes priority and dueDate fields
- Search results now display priority and due date badges

### 🔧 Enhanced
- Greeting setting persists across sessions
- Tasks display priority and due date badges
- Overdue tasks highlighted in red (in tasks and search)
- Today's tasks highlighted in yellow (in tasks and search)
- Search results show complete task information with colors

### 📝 Added
- Default greeting is enabled (backwards compatible)

---

## [1.0.4]

### ✨ Added
- Global search feature across all tasks and notes
- Search button (🔍) next to settings in top-right
- Real-time search with instant results
- Search highlighting - matching terms highlighted in yellow
- Click search results to open task list or note
- Ctrl+F keyboard shortcut for quick search access
- Organized results by type (Tasks / Notes)
- Result count displayed for each category

### 🔧 Enhanced
- Search through task titles, task notes, note titles, and note content
- Shows which list each task belongs to
- Displays completion status for tasks

### 📝 Added
- Search modal with beautiful UI matching dashboard style

---

## [1.0.3]

### ✨ Added
- Multi-list to-do system with 3-modal workflow
- Create multiple color-coded to-do lists
- Organize tasks by category or project
- Dedicated list creation modal (name + color only)
- Task management modal (primary interface for adding/managing tasks)
- List settings modal (edit name, color, or delete list)
- Task notes field - Add optional notes/context to any task
- Track completion progress per list

### 🚀 Improved
- Beautiful task input section with contained design
- Input fields stack vertically for better UX
- Card-style task items with enhanced spacing
- Delete button positioned in top-right corner (smaller, cleaner)
- Cleaner separation between list creation and task management
- Settings icon (⚙️) for list properties

### 🔧 Enhanced
- Task management is now the primary focus when viewing a list
- Tasks display title + note in card layout with more space
- Delete button appears on hover for cleaner look
- Better shadows and hover effects on tasks

### 📝 Added
- 6 color options for lists

---

## [1.0.2]

### ✨ Added
- Note-taking widget with full CRUD functionality
- Color-coded sticky notes (6 colors)
- Beautiful sticky note cards with title and preview
- Note editor modal with rich editing features
- Auto-save notes to localStorage

### 📝 Added
- Notes counter on dashboard

### 🔧 Enhanced
- Smooth animations for 4th card

---

## [1.0.1]

### ✨ Added
- Dedicated keyboard shortcuts modal
- Ctrl+K shortcut to open shortcuts guide

### 🚀 Improved
- Keyboard shortcuts now in separate modal

### 🔧 Enhanced
- Better modal management (Escape closes any modal)

### 📝 Added
- Shortcuts button in settings panel

---

## [1.0.0]

### ✨ Initial Release
- Real-time clock
- Weather integration
- To-do list functionality
- Settings customization
- Dark mode support
- Toast notifications
- Location detection (city & country)
- Smooth animations
- Responsive design
- Social links integration

---

## 📝 Notes

- All versions maintain backwards compatibility with existing data
- localStorage data structure is preserved across updates
- PWA updates are automatic and seamless
- All features work offline after initial load (except weather/location)

---

## 🔗 Links

- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
- [Project Repository](https://github.com/BlizzardWolf7/simple-dashboard)

---

<div align="center">

**Built with ❤️ by [Simon Ringwelski](https://simonringwelski.dk)**

</div>
