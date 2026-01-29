---
title: API Reference
description: Internal API Routes and Qboxmail Integration
order: 4
---

The application uses an internal API layer at `/api/*` to proxy requests to external services securely.

## Qboxmail Integration (`lib/api.ts`)

The `qboxmailAPI` object contains methods to interact with Qboxmail services.

### Domains

#### `GET /api/domains`
Fetches a list of domains for the current user.

- **Auth Required**: Yes (Firebase ID Token)
- **Parameters**: `search` (optional)

#### `POST /api/domains`
Creates a new domain.

**Payload:**
```json
{
  "name": "example.com",
  "postmaster_password": "securePassword123",
  "plan": "premium"
}
```

### Email Accounts

#### `GET /api/domains/[id]/email-accounts`
List all email accounts for a specific domain.

#### `POST /api/domains/[id]/email-accounts`
Create a new email account.

**Payload:**
```json
{
  "address": "user@example.com",
  "password": "userPassword123",
  "name": "User Name"
}
```

## Cloud Functions

Calls are predominantly proxied to:
`https://us-central1-tempusmail.cloudfunctions.net/api`

The API client automatically attaches the Firebase ID Token to the `Authorization: Bearer <token>` header.
