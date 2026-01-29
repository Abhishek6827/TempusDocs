---
title: Getting Started
description: Installation and Setup Guide
order: 2
---

Follow these instructions to get the Premium Admin Panel up and running on your local machine.

## Prerequisites

- **Node.js** 18.x or higher
- **npm**, **yarn**, or **pnpm**
- **Firebase Project** with Cloud Functions enabled
- **Firebase Admin SDK credentials**

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd Premium-AdminPanel
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory:

   ```env
   # Firebase Cloud Functions
   NEXT_PUBLIC_CLOUD_FUNCTIONS_URL=https://us-central1-tempusmail.cloudfunctions.net/api

   # Firebase Client SDK
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tempusmail.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=tempusmail
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tempusmail.firebasestorage.app
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   
   # TempusMail API (Optional if using API routes)
   NEXT_PUBLIC_QBOXMAIL_API_URL=https://api.qboxmail.com
   NEXT_PUBLIC_QBOXMAIL_API_TOKEN=your_token
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open the application:**
   
   Visit [http://localhost:3000](http://localhost:3000) in your browser.
