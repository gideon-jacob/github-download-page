# GitHub Download Page

A beautiful download page for your GitHub project inspired by Google Play Store, built with Vite + React + TypeScript.

## Features

- 🎨 Beautiful Material Design UI inspired by Google Play Store
- 📱 Fully responsive design
- 🌙 Dark theme support
- 📸 Screenshot carousel
- 🔗 Social sharing functionality
- 📋 App information display
- 🔒 Privacy policy page
- ⚡ Built with Vite for fast development and builds

## Quick Start

1. **Clone and install dependencies:**
```bash
git clone <your-repo-url>
cd github-download-page
npm install
```

2. **Configure your app:**
Edit `src/config/siteConfig.ts` to customize your download page:

```typescript
export const siteConfiguration: ExtendedSiteConfiguration = {
  application: {
    name: "Your App Name",
    description: "Your app description...",
    github: "username/repository",
    downloadLink: "https://github.com/username/repository/releases/latest",
    // ... more configuration
  },
  developer: {
    name: "Your Name",
    website: "https://yourwebsite.com"
  },
  site: {
    primaryColor: "#03875F", // Your brand color
    links: [
      { name: "GitHub", href: "https://github.com/username/repository" }
    ]
  }
}
```

3. **Add your assets:**
- Replace `public/logo.png` with your app logo
- Add screenshots to `public/screenshots/` (01.webp, 02.webp, etc.)
- Replace `public/developer-icon.png` with your developer avatar

4. **Run the development server:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
```

## Configuration Options

The `siteConfiguration` object supports:

- **Application info**: name, description, version, download links
- **Developer info**: name, logo, website
- **Screenshots**: Array of image paths for the carousel
- **Social links**: Navigation links in the header
- **Privacy policy**: Custom privacy policy content
- **Theme**: Primary color customization

## Deployment

After building, deploy the `dist` folder to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Push the `dist` folder to `gh-pages` branch
- **Any static host**: Upload the `dist` folder contents

## Original Project

This is a frontend-only version of [therealsujitk/github-download-page](https://github.com/therealsujitk/github-download-page), rebuilt with Vite for better performance and easier deployment.

## License

MIT License - see LICENSE.md for details.