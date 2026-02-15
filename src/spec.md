# Specification

## Summary
**Goal:** Replace only the top-of-page (hero) logo with the user-uploaded CCPG logo.

**Planned changes:**
- Add the uploaded logo image as a static asset under `frontend/public/assets/generated` with the specified filename.
- Update `frontend/src/components/landing/sections/HeroSection.tsx` to use the new hero logo asset instead of `/assets/generated/ccpg-logo-transparent.dim_512x128.png`.
- Keep the hero logo responsive/aligned (maintain `h-12 w-auto` on mobile and `sm:h-16` on larger screens, or equivalent).

**User-visible outcome:** The centered hero logo at the very top of the landing page displays the new CCPG logo, while all other logos/images across the app remain unchanged.
