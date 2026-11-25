# Serve Ease Academy – International Website V3.1

## Visual updates
- Premium international academy layout in deep navy, royal blue and white.
- Branded opening screen with an animated 0–1000 loading counter and progress bar.
- Animated homepage metric counters.
- The 500 figure is explicitly labelled as a **Student Enrolment Goal**, not a claim about current enrolment.
- Four course tracks, including Professional Typing & Office Administration (2 months).
- Kerala offline batches are described as starting soon; Qatar offline availability is enquiry-based.
- English, Arabic and Malayalam interface selector (some long-form course content remains English and needs professional translation before launch).

## Important implementation limits
- The enquiry form currently prepares a WhatsApp enquiry and stores a local browser copy. It is not a production admission database.
- Secure student accounts, payment processing, admin tools and cloud enquiry storage require backend services and configuration.
- Do not publish claims about actual student totals, accreditation, faculty credentials or country reach unless verified by the academy.


## Floating quick actions (V3.2)
- WhatsApp Enquiry opens the academy WhatsApp number configured in ACADEMY_CONFIG.
- Call Academy uses the configured academy phone number.
- Apply / Admission scrolls to the admission enquiry section.
- Live Assistance opens WhatsApp with a support message; this is not a staffed live-chat system.
- Back to Top returns to the page top.
