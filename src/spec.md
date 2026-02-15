# Specification

## Summary
**Goal:** Replace the landing page hero wordmark with the user-uploaded CCPG brand logo.

**Planned changes:**
- Add the uploaded logo file (“CCPG logo Transparent BG.png”) into `frontend/public/assets/generated` with a stable filename.
- Update `HeroSection` to render the new CCPG logo instead of `/assets/generated/convert-cpg-wordmark.dim_512x128.png`.
- Ensure the hero logo displays correctly on both light and dark backgrounds with transparency preserved.

**User-visible outcome:** The landing page hero shows the CCPG brand logo in place of the existing convert.cpg wordmark.
