---
title: Imports
description: Bulk Import of Domains and Email Accounts via CSV
order: 7
---

Imports allow you to automatically add a list of domains and/or email accounts to TempusMail in batches using a configured **CSV file**. This is ideal for migrating from a previous provider.

## Who can import?
Admins, team members, or managers with authorization to oversee domains.

## What can be imported?
- Domains
- Email Accounts
- Alias Domains
- Email Aliases

**Limit**: Up to **250 items** per CSV file. A separate CSV is required for each import type.

## CSV File Creation

The CSV file typically uses `;` (semicolon) as a separator. If data contains special characters, use `"` (quotation marks) as a text delimiter.

### Basic Import Formats

**Email Account Import:**
```csv
Email account;Password
user@domain.com;secretPass123
```

**Domain Import:**
```csv
Domain;Password
newdomain.com;postmasterPass123
```

**Domain Alias Import:**
```csv
Real Domain;Alias Domain
primary.com;alias.com
```

**Email Alias Import:**
```csv
Email Alias;Recipients
alias@domain.com;user1@domain.com,user2@domain.com
```

### Advanced Imports

You can include additional fields (even if empty) for more control.

**Advanced Email Account Import (5 columns):**
```csv
Account Email;Password;Name;Surname;Forward
user@domain.com;pass;John;Doe;forward@other.com
```

**Advanced Domain Import (3 columns):**
`Domain;Postmaster password;Manager codes`

### Password Hashing
If you are migrating existing passwords, you can import hashes directly.
Supported formats: `MD5-CRYPT`, `SHA512-CRYPT`, `BLF-CRYPT`, `SHA256`, etc.

Format: `{SCHEME}HashValue`
Example: `{SHA512-CRYPT}$6$xVM3rIc...`

## Performing Imports

1. Go to **Imports** in the sidebar.
2. Click **+ Import**.
3. Select the **Import Type**.
4. Upload your CSV file.
5. Click **Import**.

**Note**: For email accounts and aliases, the parent domain must typically exist before import (unless creating domains in the same batch process logic, usually recommended to import Domains first).

## Imports List

Displays the history of all imports:
- **Status**: Validating, Validated, Not Valid.
- **Info**: User, Code, Type, Errors, Date.

## Deleting an Import Record
Click the **Trash** icon to remove the import record.
- If the import was already completed, this **does not** delete the created domains/accounts; it only removes the history log.
- If the import was pending/planned, it cancels the operation.

**Note**: Import logs older than 30 days are automatically deleted.
