---
title: Migrations
description: Transfer Email Data from External Servers
order: 13
---

The **Migrations** tool allows you to batches transfer email contents from other mail servers (like Gmail, Office 365, or standard IMAP servers) to TempusMail.

## Supported Source Servers
- **Standard IMAP**: Generic IMAP servers.
- **Gmail**: Google Workspace or personal Gmail.
- **Exchange**: Microsoft Exchange servers.
- **Office 365**: Microsoft 365 (supports OAuth2).

## Migration Types
1. **Standard**: Requires individual user passwords in the CSV file.
2. **Master User**: Uses a single administrative account to access all mailboxes (if supported by source).

## Creating a Migration

1. Navigate to **Dashboard > Migrations**.
2. Click **+ Migration**.
3. Select **Remote Server Type** and **Migration Type**.
4. Upload a **CSV File** containing the mapping of accounts.
    - Format: `email@local;imap-server;email@remote;password`
5. **Schedule**:
    - **Run ASAP**: Starts immediately.
    - **Scheduled**: Set a specific date/time.
6. **Second Migration**: Automatically schedule a delta sync (e.g., 8 hours later) to catch any emails arriving during DNS propagation.

## Best Practices
- **MX Records**: Change your MX records *after* the first migration completes but *before* the second migration runs.
- **Limitations**: Messages > 50MB and Trash/Spam folders are typically excluded.
