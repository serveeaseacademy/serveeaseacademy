# Serve Ease Academy — redesign handoff

## Included in this package
- Existing static HTML project retained as the starting point.
- Updated brand palette: Royal Blue `#2952BE` and White `#FFFFFF`.
- Updated academy logo asset (`logo.png`) using the approved Royal Blue / White direction.
- Homepage positioning updated for an international academy with online learning worldwide and offline batches in Qatar and India.
- Civil Services Coaching section retained.
- Unverified animated counters removed and replaced with capability labels.
- Admission enquiry now offers Online Worldwide, Qatar Offline Batch, and India Offline Batch.
- Language selector added for English, Arabic and Malayalam. Core interface labels and enquiry placeholders switch language; detailed course content is still primarily English and requires a complete professional translation pass.

## Important production work still required
This package is a front-end redesign, not a live payment/student portal yet. The original project is a static `index.html` site. The current enquiry form stores submissions in the visitor's browser unless a backend is configured. It is not a reliable central admissions database.

Before accepting real admissions or payments, implement:
1. Supabase project, database tables, row-level security policies and server-side validation.
2. Supabase Auth for student registration, email verification, password reset and protected student dashboard.
3. Server-side payment checkout integration with an approved merchant gateway for the academy's country/account. Never collect or store card details directly.
4. Payment webhook verification and enrollment status updates.
5. Admin dashboard with role-based access, course/batch management, enquiry review and payment reconciliation.
6. Full English, Arabic and Malayalam translation of every page and course detail, including proper RTL layout testing for Arabic.
7. Verify academy contact details, course fees, batch dates, campus addresses, legal terms and refund policy before publishing.

## Deployment
Keep the existing Vercel project connected to the same GitHub repository. Back up the current `main` branch, replace the project files with this package, review the preview deployment, and only then merge/deploy to production. Do not publish payment or authentication claims until those backend features have been implemented and tested.
