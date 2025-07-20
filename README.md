# Manish Jha - Portfolio Website

A modern, responsive portfolio website showcasing Manish Jha's work as a Game Developer. Built with HTML, CSS, and JavaScript, this portfolio features a clean design with smooth animations and interactive elements.

## 🎮 About

This portfolio website represents Manish Jha, a Game Developer with over 6 years of experience in Unity development, game design, and UI/UX design. The website showcases his professional journey, skills, projects, and provides contact information.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Navigation**: Sidebar navigation with active link highlighting
- **Portfolio Showcase**: Interactive project gallery with filtering capabilities
- **Skills Display**: Animated skills section with progress bars
- **Contact Form**: Functional contact form with input animations
- **Social Media Integration**: Links to social media profiles
- **Smooth Scrolling**: Enhanced user experience with smooth scroll behavior
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: 
  - Custom properties (CSS variables)
  - Flexbox and Grid layouts
  - Responsive design with media queries
  - Smooth animations and transitions
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event handling
  - Interactive components
  - Portfolio filtering
  - Form validation
- **External Libraries**:
  - [Unicons](https://unicons.iconscout.com/) - Icon library
  - [Boxicons](https://boxicons.com/) - Additional icons
  - [Swiper.js](https://swiperjs.com/) - Touch slider
  - [MixItUp](https://www.kunkalabs.com/mixitup/) - Portfolio filtering

## 📁 Project Structure

```
manish-portfolio/
├── assets/
│   ├── about-img.png
│   ├── home-bg.jpg
│   └── home-img.png
├── css/
│   └── style.css
├── js/
│   └── main.js
├── index.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - all libraries are loaded via CDN

### Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. The website should load immediately with all features working

### Local Development

If you want to modify the website:

1. Open the project in your preferred code editor
2. Make changes to the HTML, CSS, or JavaScript files
3. Refresh your browser to see the changes
4. For live development, you can use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

## 📱 Sections

### Home Section
- Personal introduction and professional title
- Social media links
- Contact information (Messenger, WhatsApp, Email)
- Call-to-action button

### About Section
- Professional background and experience
- Key statistics (6+ years experience, 10+ projects)
- Personal description and expertise areas

### Qualifications Section
- Education timeline
- Work experience timeline
- Interactive timeline with hover effects

### Skills Section
- Interactive tabs for different skill categories
- Progress bars for skill proficiency
- Animated skill displays

### Work Section
- Portfolio project showcase
- Filterable project categories
- Project popup modals with detailed information

### Contact Section
- Contact form with animated inputs
- Contact information cards
- Social media integration

## 🎨 Design Features

- **Color Scheme**: Dark theme with pink accent color
- **Typography**: Poppins font family for body text, Turret Road for signature elements
- **Animations**: Smooth transitions and hover effects
- **Layout**: CSS Grid and Flexbox for responsive layouts
- **Icons**: Unicons and Boxicons for consistent iconography

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 576px - 767px
- **Small Mobile**: Below 576px

## 🔧 Customization

### Colors
The color scheme can be modified by changing CSS variables in `css/style.css`:
```css
:root {
  --skin-color: hsl(342, 92%, 46%); /* Main accent color */
  --body-color: hsl(var(--hue-color), 19%, 5%); /* Background */
  --title-color: hsl(var(--hue-color), 8%, 95%); /* Text color */
}
```

### Content
- Update personal information in `index.html`
- Replace images in the `assets/` folder
- Modify skills and projects in the respective sections

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Contact

- **Name**: Manish Jha
- **Profession**: Game Developer
- **Experience**: 6+ years
- **Location**: India
- **Email**: user@gmail.com
- **WhatsApp**: 999-888-777

## 🌟 Features in Detail

### Interactive Elements
- **Skill Tabs**: Click to switch between different skill categories
- **Portfolio Filtering**: Filter projects by category
- **Project Modals**: Click on projects to view detailed information
- **Contact Form**: Animated input fields with focus effects
- **Navigation**: Smooth scrolling to sections with active link highlighting

### Performance Optimizations
- Optimized images for web
- Minimal JavaScript for fast loading
- CSS animations using transform and opacity for smooth performance
- Responsive images that scale appropriately

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- High contrast color scheme

---

**Built with ❤️ by Manish Jha**