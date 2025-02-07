# SPA-FRONTEND

## Project Description
SPA-FRONTEND is a single-page application (SPA) developed using React with a component-based architecture and styled with Tailwind CSS.

## Technologies Used
- **React.js** - For building the user interface
- **Tailwind CSS** - CSS framework
- **Webpack** - Module bundler
- **PostCSS** - CSS processing tool

## Running the Project
Follow these steps to run the project locally.

### 1. Clone the Repository
```sh
git clone https://github.com/onurcatik/spa-frontend.git
cd spa-frontend
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start Development Server
```sh
npm start
```

This command starts the application and runs it at `http://localhost:3000`.

## Project Structure

```
SPA-FRONTEND
│-- node_modules/        
│-- public/              
│-- src/                 
│   │-- components/       
│   │   │-- About.js      
│   │   │-- Contact.js    
│   │   │-- Footer.js     
│   │   │-- HeroSection.js 
│   │   │-- ImageGridSection.js 
│   │   │-- Navbar.js      
│   │   │-- PrivacyPolicy.js 
│   │   │-- ServicesSection.js 
│   │   │-- TermsOfService.js 
│   │   │-- Testimonials.js
│   │-- App.js           
│   │-- index.js         
│   │-- index.css        
│-- .gitignore           
│-- package.json           
│-- package-lock.json  
│-- postcss.config.js     
│-- reportWebVitals.js   
│-- serviceWorker.js       
│-- tailwind.config.js    
│-- webpack.config.js      
```

## Configuration Files
- **webpack.config.js**: Webpack configuration file.
- **tailwind.config.js**: Tailwind CSS configuration.
- **postcss.config.js**: Defines PostCSS settings.
- **serviceWorker.js**: Service worker for Progressive Web App (PWA) support.

## Contributing
If you would like to contribute, please follow these steps:

1. **Fork** the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Add your changes and commit (`git commit -m 'Add new feature'`).
4. Push your branch (`git push origin feature-name`).
5. Open a **Pull Request (PR)**.


