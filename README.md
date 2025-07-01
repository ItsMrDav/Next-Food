# Next-Food Recipe Sharing Platform

A modern web application built with Next.js where users can share and discover delicious recipes.

## Features

- 📱 Responsive design for all devices
- 🖼️ Image handling with Next.js Image optimization
- 💽 SQLite database for storing recipes
- ⚡ Server-side rendering for optimal performance
- 🎨 CSS Modules for styled components

## Tech Stack

- [Next.js]
- [SQLite]
- CSS Modules
- React Server Components

## Project Structure

- `/app` - Next.js app router pages and layouts
- `/components` - Reusable React components
- `/lib` - Database and utility functions
- `/public` - Static assets and images
- `/assets` - Source images and icons

## Features

### Recipe Sharing

- Browse a collection of recipes
- View detailed recipe instructions
- Share your own recipes
- Dynamic image loading and optimization

### User Interface

- Responsive grid layout
- Modern gradient design
- Optimized images with next/image
- Loading states and error handling

## Database Schema

### Meals Table

- id (INTEGER PRIMARY KEY)
- slug (TEXT UNIQUE)
- title (TEXT)
- image (TEXT)
- summary (TEXT)
- instructions (TEXT)
- creator (TEXT)
- creator_email (TEXT)
