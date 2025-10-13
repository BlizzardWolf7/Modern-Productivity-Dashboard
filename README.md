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

### ✅ **Smart To-Do List**
- Add, complete, and delete tasks
- **Persistent storage** using localStorage
- Task completion toggle with visual feedback
- **Enter key support** for quick task addition
- Beautiful card-style task items with hover effects
- Toast notifications for all task actions

### ⚙️ **Customizable Settings**
- **Dashboard title customization** - Make it your own
- **Personal greeting** - Add your name for a personalized experience
- **Accent color picker** - Choose your favorite color theme
- **Dark mode toggle** - Switch between light and dark themes
- **Settings persistence** - All preferences saved locally

### ⌨️ **Keyboard Shortcuts**
- **Dedicated shortcuts modal** - Beautiful guide with modern key visualizations
- **5 productivity shortcuts** - Quick access to all features
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
   - Click the ⚙️ settings icon in the top-right corner
   - Set your dashboard title
   - Enter your name for personalized greeting
   - Choose your favorite accent color
   - Toggle dark mode if preferred
   - Click "Save" to apply changes

### Using the To-Do List

#### Adding Tasks
- Type your task in the input field
- Click "Add Task" button or press **Enter**
- See a success toast confirmation

#### Managing Tasks
- **Complete a task**: Click on the task text to mark as done
- **Uncomplete a task**: Click on completed task to mark as pending
- **Delete a task**: Click the ✕ button on the right

#### Task Persistence
- All tasks are automatically saved to localStorage
- Tasks persist between browser sessions
- Tasks sync across tabs in the same browser

### Weather & Location

The dashboard automatically:
1. Requests your location permission
2. Fetches current weather data
3. Displays city and country name
4. Updates temperature and wind speed

**No Location Permission?**
- Weather card will show "Location denied"
- You'll receive a toast notification with instructions

### Keyboard Shortcuts

The dashboard includes a dedicated keyboard shortcuts modal with modern key visualizations:

- **Enter** (in task input) - Add new task
- **Escape** - Close any open modal
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
  "darkMode": true
}
```
**Key**: `"settings"`

#### Tasks Array
```javascript
[
  {
    "text": "Task description",
    "done": false
  },
  {
    "text": "Completed task",
    "done": true
  }
]
```
**Key**: `"tasks"`

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

- [ ] Multiple to-do lists with categories
- [ ] Pomodoro timer integration
- [ ] Calendar integration
- [ ] Note-taking widget
- [ ] Habit tracker
- [ ] Daily quotes/motivation
- [ ] Weather forecast (5-day)
- [ ] Export/import settings and tasks
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

- **Lines of Code**: ~1,130
- **Technologies**: 3 (HTML, CSS, JS)
- **External APIs**: 2
- **Features**: 12+
- **Keyboard Shortcuts**: 5
- **File Size**: < 40KB
- **Load Time**: < 1 second

---

## 🔖 Version History

### v1.0.1 (Current)
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

