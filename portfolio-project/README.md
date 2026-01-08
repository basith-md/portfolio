# Basit Ali - Portfolio Project

A modern, interactive React portfolio showcasing data analytics expertise with smooth animations and gesture-based navigation.

## Features

- **Gesture Navigation**: Swipe or use arrow keys to navigate between sections
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Responsive Design**: Optimized for all device sizes using Tailwind CSS
- **Interactive Cards**: Expandable cards for detailed information
- **Modern UI**: Dark theme with gradient accents and glass effects

## Sections

1. **About**: Personal information, skills visualization, education, and contact details
2. **Experience**: Professional timeline with achievements and technologies
3. **Projects**: Featured projects with filtering and detailed views

## Technologies Used

- React 19.1.1
- Framer Motion 12.23.12
- React Use Gesture 9.1.3
- Tailwind CSS 4.1.13
- Node.js 22.19.0

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Navigation

- **Swipe Left/Right**: Navigate between sections
- **Swipe Up/Down**: Jump to About or Projects sections
- **Arrow Keys**: Alternative navigation method
- **Click Cards**: Expand for detailed information
- **Escape Key**: Close expanded cards

## Project Structure

```
src/
├── components/
│   ├── Navigation/
│   │   └── SwipeNavigation.js
│   ├── Sections/
│   │   ├── AboutSection.js
│   │   ├── ExperienceSection.js
│   │   └── ProjectsSection.js
│   ├── Cards/
│   │   └── ExpandableCard.js
│   └── UI/
├── data/
│   ├── personalInfo.js
│   ├── experiences.js
│   └── projects.js
├── utils/
│   └── helpers.js
├── App.js
├── index.js
└── index.css
```

## Customization

### Personal Information
Edit `src/data/personalInfo.js` to update:
- Contact information
- Skills and proficiency levels
- Education details
- Certifications

### Experience
Modify `src/data/experiences.js` to add or update:
- Job positions and companies
- Achievements and metrics
- Technologies used
- Duration and location

### Projects
Update `src/data/projects.js` to showcase:
- Project descriptions and features
- Technologies and tools used
- Results and achievements
- GitHub and demo links

### Styling
Customize the appearance by modifying:
- `tailwind.config.js` for theme colors and animations
- `src/index.css` for global styles and custom classes
- Individual component files for specific styling

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to package.json:
```json
"scripts": {
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Performance Optimization

- Lazy loading for components
- Optimized animations with proper easing
- Efficient re-rendering patterns
- Responsive images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- **Email**: basit.ali@example.com
- **LinkedIn**: [linkedin.com/in/basit-ali](https://linkedin.com/in/basit-ali)
- **GitHub**: [github.com/basit-ali](https://github.com/basit-ali)