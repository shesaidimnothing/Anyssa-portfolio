# Anyssa's Portfolio Images

This folder contains all images for Anyssa's creative portfolio website.

## 📁 Folder Structure

### `/projects/` - Main project showcase images
- **`/branding/`** - Logo designs, brand identity projects, packaging design
- **`/video-content/`** - Video thumbnails, stills from CapCut/iMovie projects
- **`/social-media/`** - Social media graphics, posts, story designs
- **`/illustrations/`** - Digital illustrations, artwork created in Illustrator

### `/hero/` - Hero section images
- Main showcase image for the homepage hero section

## 🎨 Anyssa's Creative Tools
- **CapCut** - Video editing and content creation
- **Canva** - Graphic design and social media content
- **Notion** - Project management and organization
- **Illustrator** - Vector graphics and illustrations
- **iMovie** - Video editing and post-production

## 📱 Image Guidelines

### Recommended Formats:
- **Projects**: JPG/PNG (1200x800px minimum)
- **Hero Images**: JPG/PNG (1920x1080px recommended)
- **Thumbnails**: JPG/PNG (400x300px)

### Naming Convention:
- Use descriptive names: `brand-logo-design-client-name.jpg`
- No spaces (use hyphens): `social-media-campaign-2024.png`
- Include project type: `video-thumbnail-tiktok-series.jpg`

## 📂 How to Add Images

1. **Choose the appropriate folder** based on project type
2. **Upload your images** with descriptive filenames
3. **Update the corresponding React components** to display the new images
4. **Test the website** to ensure images load correctly

## 🚀 Usage in Components

Images can be used in React components like this:

```jsx
import Image from 'next/image';

<Image 
  src="/images/projects/branding/logo-design.jpg"
  alt="Brand logo design project"
  width={800}
  height={600}
/>
```

---

*This portfolio showcases Anyssa's creative work across multiple platforms and mediums.*
