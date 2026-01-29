---
title: Introduction
description: Overview of the Premium Admin Panel
order: 1
---

A modern, full-featured admin panel built with **Next.js 15**, **shadcn/ui**, and **Tailwind CSS**. It features a responsive design with light/dark mode support and **Firebase Cloud Functions** integration for secure domain management.

## ✨ Features

- 🚀 **Next.js 15.5.6** - Latest stable version with App Router
- 🎨 **shadcn/ui** - Beautiful, accessible component library
- 💅 **Tailwind CSS 4.0** - Utility-first CSS framework
- 🌓 **Dark Mode** - Seamless light/dark theme switching
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 📊 **Data Visualization** - Interactive charts with Recharts
- 🎯 **TypeScript** - Full type safety throughout the application
- 🔥 **Firebase Cloud Functions** - Secure serverless API architecture
- 🔐 **Firebase Authentication** - Secure user authentication with ID tokens

## Project Structure

The project follows a standard Next.js App Router structure:

```bash
Premium-AdminPanel/
├── app/                  # App Router pages and layouts
│   ├── dashboard/        # Main admin dashboard routes
│   └── api/              # API routes (proxying Cloud Functions)
├── components/           # Reusable React components
│   ├── ui/               # shadcn/ui primitives
│   └── ...               # Feature-specific components
├── lib/                  # Utilities and helpers
│   ├── firebase/         # Firebase configuration
│   └── api.ts            # TempusMail / Cloud Function API client
└── public/               # Static assets
```
