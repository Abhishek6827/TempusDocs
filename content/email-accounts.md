---
title: Email Accounts
description: Managing Email Accounts, Settings, and Security
order: 6
---

An email account (inbox) is an email address associated with a space where messages are sent and received. The messages present in an email account can be accessed and managed via the **POP / IMAP** and **SMTP** protocols or via the **Webmail** interface.

An email account must always be connected to a domain, so you must first activate a domain.

## Email Account List

The list of email accounts contains all the email accounts present in the TempusMail systems belonging to a given domain.

To view the list:
1. Click on the domain name in the domain list.
2. Select **Email Account**.

**Information displayed:**
- Email account status (Updating, Online, Offline)
- Address of the email account
- Storage used
- Last access date and time
- Number of messages sent in the last 24 hours

## Add an Email Account

1. Go to **Domains** and click on the specific domain.
2. Select the **Email Account** tab.
3. Click the **+ Email Account** button.

### Step 1 - New Account
- **Name/Description**: Name of the user or description (e.g., "Sales Dept").
- **Last Name**: User's last name.
- **Email Address**: Choose the address (e.g., `user@mydomain.com`).
- **Password**: Choose or generate a secure password.

### Step 2 - Services
Choose available services (based on plan):
- Storage capacity
- POP/IMAP/SMTP access
- Webmail access
- Microsoft® Exchange ActiveSync
- DAV Access

### Step 3 - Account Security
- Force password change on first login.
- Set password expiration policies.
- Force 2FA (Two-factor authentication).
- **IP Restrictions**: Limit access to specific trusted IP addresses/classes.
- API Access controls.

### Step 4 - Options
- **Forwarding**: Configure auto-forwarding to alternative addresses.
- **Spam**: Activate delivery of spam messages to Inbox if desired.

## Email Account Settings

To modify an account, click its name in the list.

### Master Data & General
- **User Details**: Update name, description.
- **Localization**: Language and Time Zone settings.
- **Account Limits**: Change storage capacity.
- **Sending Limits**: Adjust daily sending limits (Note: increases may entail costs).
- **Services**: Toggle specific protocols (POP, IMAP, etc.).

### Forwarding
Enter up to 20 alternative addresses for auto-forwarding.

### Security
- **Password Management**: Change password, force reset, policy settings.
- **OTP Authentication**: Enforce 2FA.
- **IP Enabled**: Restrict access to specific IPs.
- **API Access**: Toggle API permissions.

### Autoresponder
Set up automatic replies (e.g., Out of Office) for specific time intervals.

### Webmail Settings
- **Localization**: Default Language, Time Zone, Date/Time format.
- **Email Signatures**: Create standardized signatures for the user identity.
    - **Centralized Management**: Admin can manage corporate signatures via Domain Settings.
    - **Company Addressbook**: Toggle visibility of the user in the global address book.

## Identity Management

### Signatures
Signatures are automatically added to TempusMail Webmail.
- **Add Signature**: Click "New signature", select identity, and add HTML/Text body.
- **Options**: Set as default, Add sender in BCC.

### Deactivate / Reactivate
- **Deactivate**: Prevents login and receiving mail. Account remains billable.
- **Reactivate**: Restores full functionality.

## Delete an Email Account
**Caution**: Deletion is irreversible. All messages and settings will be lost.
1. Click the **More** icon next to the account.
2. Select **Delete**.
3. Confirm operation.
