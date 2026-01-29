---
title: Domain Management
description: Managing Lifecycle of Email Domains
order: 5
---

A domain represents the container of all email accounts, alias domains, and email aliases. In TempusMail, domain management focuses on hosting email accounts, distinct from domain registration with your provider.

## List of Domains

The **Domains** list displays all domains in the system.

**Information Displayed:**
- **Status**: Updating, Waiting for ownership, Enabled, Disabled, Error.
- **Counts**: Active Email Accounts / Total Available.
- **Aliases**: Count of active alias domains and email aliases.
- **Plan**: Basic, Professional, or Enterprise.

**Actions:**
- Click on a domain name to manage accounts and settings.
- Click **More** (icon) to Disable or Delete a domain.

## Add a Domain

1. Go to **Domains** in the sidebar.
2. Click **+ Domain**.

### Step 1 - Select Plan
Choose between **Basic**, **Professional**, or **Enterprise**. Features vary by plan.

### Step 2 - Domain Information
- **Domain Name**: e.g., `mydomain.com`.
- **Owner/Company**: Entity owning the domain.
- **Postmaster Password**: Password for the administrative `postmaster` account created automatically.
- **Defaults**: Language and Time Zone.

### Step 3 - Domain Limits
Set limits for accounts based on storage size (e.g., number of 8GB, 25GB, or 50GB accounts).
- Set default quota size for new accounts.
- Set maximum quota per account.

### Step 4 - Services
enable/disable default services for the domain:
- POP / IMAP / SMTP Access
- Webmail
- Exchange ActiveSync / DAV Access

### Step 5 - Security
**IP Restrictions**: Limit access to POP/IMAP/Webmail to specific keys IPs (max 5) for the entire domain.

### Step 6 - Options
**Spam Filter**: Set sensitivity level (Aggressive, Standard, Tolerant). Recommended: Standard.

## Domain Ownership Verification

Before activating email services, you must prove ownership. Click the domain in the list to see verification options.

### Verification by DNS
Point a DNS record to a specific IP.
A unique record is generated, e.g., `d458381318.mydomain.com A 185.97.217.16`.

1. Go to your DNS provider.
2. Create the **A Record** as specified.
3. Wait for propagation (can take 12-24 hours, though often faster).
4. Click **Verify DNS** in the TempusMail panel.

### Verification by Email
If active elsewhere, receive a code via an existing email address (e.g., `admin@mydomain.com`) and enter it in the panel.

### Verification by HTML
1. Download the generated HTML file.
2. Upload it to your website's root directory.
3. Click **Execute Verification**.

*Note: After verification, remember to update your MX records to point to TempusMail servers.*

## Domain Settings

Access via **Domains > [Domain Name] > Settings**.

### Registry & Localization
Update company details, language, and time zone defaults.

### General & Limits
- **Plan**: Change between Basic/Pro/Enterprise (downgrades may lose data).
- **Storage Limits**: Adjust total accounts or storage quotas. Capable of retroactive application.
- **Sending Limits**: adjust daily email sending caps.
- **Service Toggles**: Enable/disable access protocols.
- **Catch-all**: Define an address to receive emails sent to non-existent users.

### Security
- **Tracemail Logs**: Limit log visibility (e.g., 21 days).
- **Antimalware Premium**: Enable advanced threat protection.
- **Password Policies**: Force resets, block old passwords, expiration rules.
- **OTP**: Enforce 2FA for all users.
- **DKIM**: Configure custom DKIM signatures for better deliverability.
- **API Access**: Toggle API availability.

### Webmail & Centralized Signatures
Manage email signatures for the entire organization (Professional/Enterprise plans).
- Use variables like `{{f_name}}`, `{{phone}}`, `{{role}}` to create dynamic templates.
- Enforce signatures on all users.

## Disable / Enable / Delete

### Disable
Prevents login and receiving of new mail. Existing data is preserved.
Navigate to **More > Disable**.

### Delete
**Irreversible operation**. Removes the domain and **all** associated accounts and data.
Navigate to **More > Delete**.
