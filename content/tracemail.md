---
title: Tracemail
description: Real-time Email Logs and Access Analysis
order: 8
---

Tracemail allows you to analyze log traffic of **Received** and **Sent** e-mails. It also tracks access to POP, IMAP, and Webmail services in real-time, helping to identify issues or security anomalies.

**Retention**: Data history is kept up to **30 days**.

## Accessing Logs

1. Click **Tracemail** in the sidebar.
2. Select data type (Access, Received, Sent).
3. Filter by **Domain**, **Email Account**, or **Date**.
4. View results.

You can export individual results as **PDF** or the full list as **CSV**.

## Access Info

Displays logins and logouts for POP, IMAP, and Webmail.

**Key Fields:**
- **Action**: Login, Logout, Failed Login.
- **Protocol**: IMAP, POP3, Webmail.
- **Result**: Successful or specific failure reason.
- **IP Address**: Local (TempusMail server) and Remote (User's IP).
- **Client**: Email client user agent (e.g., Outlook, Thunderbird).
- **Traffic**: In/Out traffic generated during the session.

**Failure Reasons:**
- `authentication failed`: Incorrect password.
- `many connections`: Exceeded max concurrent connections.
- `unauthorized ip`: IP blockage rule.
- `disabled by user`: Account is deactivated.

## Received E-mails

View all emails received by a domain or account.
**Categories:** Accepted, Quarantined, Rejected.

- **Details**: Delivery status, folder delivered to, forwarding status, filtering rules applied.
- **Security**: Shows results of Antivirus and Antispam tests.
- **Locate Message**: Identify where the message currently resides (Inbox, Trash, Downloaded via POP).

**Note**: Messages blocked at the global gateway level (high-confidence spam) might not appear here.

## Sent E-mails

View all emails sent from a domain or account.
**Categories**: Delivered, Rejected, Queued.

- **Real-time Status**: Check if a message has left the TempusMail servers and been accepted by the recipient server.
- **Blocked**: Notifications if TempusMail Security blocked the outbound message (malware/spam suspicion).

## PDF Report

Generate a signed PDF document containing detailed info for specific logs. This is useful for:
- Compliance audits.
- Proving delivery to counterparties.
- Support tickets.

*Tracemail safeguards user privacy in compliance with GDPR.*
