---
title: Architecture
description: Technical Architecture and Design Decisions
order: 3
---

The Premium Admin Panel is designed as a modern, serverless-first application leveraging Next.js and Firebase.

## Design Philosophy

- **Security First**: Operations sensitive to business logic (like domain creation) are handled via Firebase Cloud Functions or Server-side API routes, ensuring no sensitive tokens are exposed to the client.
- **Client-Side Scalability**: The UI is built with Next.js Client Components where interactivity is needed (Dashboard, Forms) but leverages Server Components for initial data fetching where appropriate.
- **Type Safety**: End-to-end TypeScript usage from the API layer (`lib/api.ts`) to the UI components.

## Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 with `shadcn/ui` components
- **State Management**: React Hooks & Context (`AuthProvider`, `ThemeProvider`)
- **Icons**: Lucide React

### Backend / Infrastructure
- **Authentication**: Firebase Authentication (Email/Password & seamless cross-domain auth)
- **API Layer**: 
    - **Next.js API Routes**: Proxy requests to Cloud Functions/Qboxmail API.
    - **Firebase Cloud Functions**: Handles business logic, database interactions, and secure 3rd party API calls.
- **Database**: Firestore (via Cloud Functions)

## Authentication Flow

1. **User Login**: Users authenticate using Firebase Client SDK.
2. **Token Generation**: On successful login, an ID token is retrieved.
3. **API Requests**: All requests to internal API routes (`/api/*`) include the ID Token in the `Authorization` header.
4. **Verification**: 
    - The API route validates the token using `firebase-admin`.
    - If valid, the request is proxied to the backend Cloud Functions or processed directly.
