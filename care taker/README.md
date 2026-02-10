# Care Taker Website

A professional caregiving services website built from mockup designs.

## Pages

- **Home** – Hero section with "Dignified Care for Every Chapter of Life", team image, and core values (Respect, Dignity, Professionalism)
- **Our Story** – Vision, Mission, featured team member, Leadership and Staff profiles
- **Services** – Five service categories with detailed modals and direct inquiry links to the Contact page
- **Caregivers Corner** – Resource hub with caregiver training, wellness support, policy guidance, and team updates
- **Contact Us** – Contact form with optional service pre-fill from Services modal links

## Getting Started

Open `index.html` in a browser, or run a local server:

```bash
npx serve .
```

Then visit http://localhost:3000 (or the port shown).

## Customization

- **Images**: Replace Unsplash URLs in the HTML with your own team and service images. Save them in an `assets` or `images` folder.
- **Logo**: The header uses a styled "H" – replace the logo div with an `<img>` if you have a custom logo.
- **Contact form**: The form currently uses `action="#"`. Connect it to a backend or form service (e.g. Formspree, Netlify Forms) for real submissions.

## Structure

```
care taker/
├── index.html
├── our-story.html
├── services.html
├── caregivers-corner.html
├── contact.html
├── css/
│   └── styles.css
└── README.md
```
