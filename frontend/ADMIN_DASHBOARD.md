# 🍔 Ooze Cafe - Admin Dashboard

## 📋 Overview

The Ooze Cafe Admin Dashboard is a comprehensive management system for the cafe's menu, analytics, and settings. Built with React and modern UI/UX principles, it provides an intuitive interface for cafe administrators.

## ✨ Features

### 🔐 Authentication
- Secure admin login system
- Session management with localStorage
- Protected routes for admin-only access

### 📊 Analytics Dashboard
- **Real-time Statistics**
  - Total menu items count
  - Category breakdown
  - Popular items tracking
  - Average pricing analytics
  
- **Visual Insights**
  - Top categories with progress bars
  - Recent activity feed
  - Quick action buttons

### 🍽️ Menu Manager
- **Full CRUD Operations**
  - Add new menu items
  - Edit existing items
  - Delete items with confirmation
  - Toggle item status (active/inactive)

- **Advanced Filtering**
  - Search by item name
  - Filter by category
  - Real-time results

- **Beautiful UI**
  - Table view with avatars
  - Category badges
  - Status indicators
  - Modal forms for editing

### ⚙️ Settings Panel
- **Business Information**
  - Cafe name
  - WhatsApp number
  - Email address
  - Physical address

- **Regional Settings**
  - Currency selection
  - Timezone configuration

- **Preferences**
  - Notification toggles
  - Auto-backup settings
  - Dark mode (coming soon)

- **Danger Zone**
  - Clear all data
  - Reset to defaults

## 🚀 Getting Started

### Access the Admin Dashboard

1. **Navigate to Admin Login**
   ```
   http://localhost:5173/admin/login
   ```

2. **Login Credentials**
   ```
   Username: admin
   Password: ooze2024
   ```

3. **Dashboard Access**
   After successful login, you'll be redirected to:
   ```
   http://localhost:5173/admin/dashboard
   ```

## 📁 File Structure

```
src/
├── pages/
│   └── admin/
│       ├── AdminLogin.jsx          # Login page
│       ├── AdminLogin.css          # Login styles
│       ├── AdminDashboard.jsx      # Main dashboard
│       └── AdminDashboard.css      # Dashboard styles
│
└── components/
    └── admin/
        ├── Analytics.jsx           # Analytics component
        ├── Analytics.css           # Analytics styles
        ├── MenuManager.jsx         # Menu management
        ├── MenuManager.css         # Menu manager styles
        ├── Settings.jsx            # Settings panel
        └── Settings.css            # Settings styles
```

## 🎨 Design Features

### Modern UI/UX
- **Gradient Backgrounds**: Purple/blue gradients for premium feel
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Card-based Layout**: Clean, organized content sections
- **Icon Integration**: Emoji icons for visual appeal

### Color Palette
- Primary: `#667eea` → `#764ba2` (Purple gradient)
- Success: `#48bb78` (Green)
- Warning: `#ed8936` (Orange)
- Danger: `#fc8181` (Red)
- Neutral: `#f7fafc` (Light gray)

## 🔒 Security Features

- **Protected Routes**: Admin pages require authentication
- **Session Management**: Automatic logout on session expiry
- **Confirmation Dialogs**: For destructive actions
- **Input Validation**: Form validation on all inputs

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🛠️ Technologies Used

- **React 19.2.0**: UI framework
- **React Router DOM 7.10.1**: Routing
- **CSS3**: Modern styling with gradients, animations
- **LocalStorage**: Session management

## 📊 Dashboard Sections

### 1. Analytics
- Overview statistics cards
- Top categories ranking
- Recent activity timeline
- Quick action buttons

### 2. Menu Manager
- Searchable menu items table
- Category filtering
- Add/Edit modal forms
- Status management
- Delete functionality

### 3. Settings
- Business information form
- Regional preferences
- Toggle switches for features
- Danger zone for critical actions

## 🎯 Future Enhancements

- [ ] Backend integration with API
- [ ] Real-time order notifications
- [ ] Advanced analytics with charts
- [ ] Image upload for menu items
- [ ] Bulk import/export functionality
- [ ] Dark mode theme
- [ ] Multi-language support
- [ ] Role-based access control
- [ ] Email notifications
- [ ] PDF menu generation

## 💡 Usage Tips

1. **Adding Menu Items**: Click "Add New Item" button in Menu Manager
2. **Editing Items**: Click the edit icon (✏️) on any menu item
3. **Deleting Items**: Click the delete icon (🗑️) with confirmation
4. **Filtering**: Use search box or category filters for quick access
5. **Status Toggle**: Click active/inactive badge to toggle item status

## 🐛 Troubleshooting

### Can't Access Dashboard
- Ensure you're logged in at `/admin/login`
- Check browser console for errors
- Clear localStorage and login again

### Changes Not Saving
- Currently using localStorage (temporary)
- Refresh page to see updates
- Backend integration needed for persistence

## 📞 Support

For issues or questions about the admin dashboard:
- Email: info@oozecafe.com
- WhatsApp: 8129110411

## 📄 License

This admin dashboard is part of the Ooze Cafe project.

---

**Built with ❤️ for Ooze Cafe**
