# MTNL Mumbai — Screenshot-Matched Responsive Website

This is a React + Vite recreation of the four MTNL Mumbai screens shown in the supplied reference image:
- Home
- Services
- Tariff Plans
- Helpline Numbers / Customer Care

The supplied composite screenshot is the visual source of truth. Cropped photo assets from the screenshot are included locally, so the service-card images do not depend on external image URLs.

## Run on Windows
1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP.
3. Open the extracted folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:
   ```powershell
   npm install
   npm run dev
   ```
6. Open the local address Vite prints, usually `http://localhost:5173`.

## Build
```powershell
npm run build
```
The production site is written to `dist/`.

## Included interactions
- Navigation between Home, Services, Tariffs, Customer Care, About Us and Tenders.
- Service search and category filters.
- Tariff category tabs and Individual/Business switch.
- Responsive layout for desktop, tablet and phone.

## Important
This is a frontend concept, not the official MTNL website. No payment or login is actually processed. Verify service details and telephone numbers before production use.
