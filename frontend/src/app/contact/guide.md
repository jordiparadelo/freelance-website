# Contact Form Guide (Ultra-Short, High-Performance)

## Objective

Build a single-page contact form for a professional freelancer that:

- reduces user decision fatigue,
- keeps completion time under 60 seconds,
- qualifies leads with minimal friction,
- and preserves excellent performance, accessibility, and maintainability.

This form uses a guided structure (select inputs) instead of a large free-text textarea.

## Product Requirements

### Primary Goal

Balanced conversion strategy:

- keep the form fast and easy to complete,
- while collecting enough context to prioritize and respond effectively.

### Form Type

Single-page smart form (all inputs visible at once).

### Required Inputs (Ultra-Short Set)

1. **Service needed** (select, required)
   - Website
   - Web App
   - E-commerce
   - UI/UX Design
   - Other

2. **Budget range** (select, required)
   - <2k
   - 2k-5k
   - 5k-10k
   - 10k+

3. **Timeline** (select, required)
   - ASAP
   - 2-4 weeks
   - 1-2 months
   - Flexible

4. **Name** (text, required)
5. **Email** (email, required)

### Microcopy (Reduce Decision Friction)

Use brief helper text below select inputs:

- Service: "Pick the closest option."
- Budget: "A rough estimate is enough."
- Timeline: "Approximate is fine."

### Submission Experience

After successful submit:

- show inline success message on the same page,
- include optional secondary CTA: "Book a 20-min intro call",
- keep the main path email-first (calendar is optional, not mandatory).

## UX and UI Requirements

### Interaction

- one clear primary CTA: "Send inquiry",
- disable submit while processing,
- show field-level validation states and concise errors,
- preserve user values if validation fails.

### Visual Hierarchy

- form title + 1-sentence expectation setting,
- grouped fields in logical order: project details -> contact details -> submit,
- high-contrast labels and controls with visible focus states.

### Mobile-First

- fully usable at 320px width,
- large tap targets (minimum 44px),
- stacked inputs on small screens, optional two-column layout on larger screens.

## Accessibility Requirements

- semantic form elements (`label`, `input`, `select`, `button`),
- explicit label/input association with `htmlFor` and `id`,
- keyboard navigation for all controls,
- visible focus indicators,
- descriptive error messages tied with `aria-describedby`,
- success/error announcements using polite live regions where appropriate,
- no reliance on color alone for error/success communication.

## Performance Requirements

- avoid unnecessary client-side state complexity,
- minimize JavaScript for basic rendering and validation,
- prefer native form behavior and progressive enhancement,
- avoid heavy animation dependencies on this page,
- if transitions are used, animate only `opacity` and `transform`,
- respect reduced-motion preferences.

## Validation and Data Quality

### Client Validation

- required checks on all five fields,
- email format validation,
- reject whitespace-only name input.

### Server Validation

- validate again on submit (do not trust client-only checks),
- sanitize and normalize input values,
- protect against malformed payloads.

### Anti-Spam and Abuse

- add honeypot field and/or time-to-submit check,
- rate-limit submission endpoint by IP or fingerprint where possible,
- return generic failure messages to avoid abuse feedback loops.

## Security and Privacy

- do not log sensitive user data in plaintext unnecessarily,
- store only needed lead data,
- include a short privacy note near submit action,
- use HTTPS-only submission endpoint,
- prevent header/content injection in generated emails or notifications.

## Technical Implementation Guidance

### Architecture

- keep presentational form component separated from submit handler logic,
- extract option arrays/constants for service, budget, and timeline,
- keep validation schema centralized (for example with Zod),
- model submitted payload with explicit TypeScript types.

### Error Handling

- use guard clauses for invalid/empty states,
- return clear status model: `idle | submitting | success | error`,
- display actionable fallback for network/server failures.

### Maintainability

- avoid hardcoding repeated strings; centralize labels/messages/constants,
- keep components small and composable,
- add short comments only where logic is non-obvious.

## Analytics and Success Metrics

Track at minimum:

- form view rate,
- submit attempt rate,
- successful submit rate,
- drop-off by field (if available),
- click-through rate on optional booking CTA.

Target benchmarks:

- completion rate >= 30% from contact page visits,
- median completion time < 60 seconds.

## Testing Requirements

### Functional

- required field validation behavior,
- invalid email handling,
- successful submit state rendering,
- server error state rendering.

### Accessibility

- keyboard-only completion,
- screen-reader label and error announcement checks.

### Responsiveness

- verify layout and usability on mobile, tablet, and desktop breakpoints.

## Content and Tone

- concise, professional, low-jargon language,
- confident but friendly confirmation copy,
- avoid long paragraphs in helper and error messages.

## Definition of Done

The implementation is complete when:

- all five required fields are implemented as specified,
- validation and error states work on client and server,
- post-submit success + optional booking CTA are present,
- accessibility and mobile requirements are met,
- performance remains strong with minimal interaction latency,
- core tests for validation and submit states are passing.
