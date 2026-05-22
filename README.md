# BookMyAcre — React + Vite Migration

A full React + Vite (JS) migration of the original multi-page HTML/jQuery website.

## Project Structure

```
bookmyacre/
├── index.html               # Vite entry HTML
├── vite.config.js           # Vite configuration
├── package.json
├── public/                  # ← Copy all your static assets here
│   ├── favicon.png
│   ├── bma.png
│   ├── bma_white_.png
│   ├── about.png
│   ├── preloader.gif
│   ├── ace.webp, dasnac.png, escon.webp, m3m...
│   ├── img/
│   │   ├── slider/          slide1.png, slide2.png, slide3.png
│   │   ├── projects/        1.png … 8.png, neo_farms.png
│   │   ├── bg/              about.jpg, blog.jpg, contacts.jpg, projects.jpg, text-1.jpg
│   │   ├── blog/            1-760x514.jpg, 2-760x514.jpg, 3-760x514.jpg
│   │   └── final-icons/     1.png, 2.png, 6.png, 10.png, 12.png, 13.png, 14.png, 15.png
└── src/
    ├── main.jsx             # React entry
    ├── App.jsx              # Router + layout
    ├── index.css            # Global styles
    ├── components/
    │   ├── Navbar.jsx / .css
    │   ├── Footer.jsx / .css
    │   ├── Loader.jsx
    │   └── ContactForm.jsx / .css
    └── pages/
        ├── HomePage.jsx / .css
        ├── AboutPage.jsx
        ├── ProjectsPage.jsx
        ├── BlogPage.jsx
        ├── ContactPage.jsx
        ├── CareerPage.jsx
        ├── PrivacyPage.jsx
        └── InnerPage.css    # Shared inner-page styles
```

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Copy your images/assets

From your original project, copy these into `public/`:

```
bma.png, bma_white_.png, about.png, favicon.png, preloader.gif
ace.webp, dasnac.png, escon.webp, M3M-Logo-1.jpg, purvanchal-logo.png
img/slider/slide1.png, slide2.png, slide3.png
img/projects/1.png … 8.png, neo_farms.png
img/bg/about.jpg, blog.jpg, contacts.jpg, projects.jpg, text-1.jpg
img/final-icons/1.png, 2.png, 6.png, 10.png, 12.png, 13.png, 14.png, 15.png
img/blog/1-760x514.jpg, 2-760x514.jpg, 3-760x514.jpg
```

### 3. Run dev server

```bash
npm run dev
```

Open http://localhost:5173

### 4. Build for production

```bash
npm run build
npm run preview
```

## Pages

| Route       | Component    | Original      |
| ----------- | ------------ | ------------- |
| `/`         | HomePage     | index.html    |
| `/about`    | AboutPage    | about.html    |
| `/projects` | ProjectsPage | projects.html |
| `/blog`     | BlogPage     | blog.html     |
| `/contact`  | ContactPage  | contacts.html |
| `/career`   | CareerPage   | career.html   |
| `/privacy`  | PrivacyPage  | privacy.html  |

## Contact Form

The `ContactForm` component in `src/components/ContactForm.jsx` now posts to a Node/Express backend at `/api/mail` by default.

This app can use an environment override with `VITE_MAIL_ENDPOINT` if needed.

## Key Tech Differences from Original

| Original            | React + Vite                       |
| ------------------- | ---------------------------------- |
| jQuery              | React state & hooks                |
| Bootstrap grid      | CSS Grid / Flexbox                 |
| Revolution Slider   | CSS transitions + useState         |
| Owl Carousel        | CSS scroll snap                    |
| WOW.js              | IntersectionObserver hook          |
| Multiple HTML files | React Router SPA                   |
| Stellar parallax    | CSS `background-attachment: fixed` |
| jQuery validate     | HTML5 + React validation           |

## Google Tag Manager

Add your GTM snippet to `index.html` in the `<head>` section:

## Contact Form Dev Testing

The React form sends POST requests to `/api/mail` by default.
During `npm run dev`, Vite is configured to proxy `/api/mail` to a local Node/Express backend at `http://127.0.0.1:4000`.

To test locally, add a `.env` file with:

```env
VITE_MAIL_ENDPOINT=http://127.0.0.1:4000/api/mail
```

Then run the backend server from the project root:

```bash
npm run server
```

That makes the form submit to your local Node/Express backend during development.

```html
<!-- GTM -->
<script>
  /* your GTM snippet */
</script>
```

## Google Analytics

Already included as a script tag. Replace `G-M5DSSMTL57` with your GA4 ID in `index.html`.

## Deployment

The contact form is wired to a Node/Express backend at `/api/mail`.
The flow is:

1. React form submits to `POST /api/mail`
2. Express sanitizes and validates the request
3. The backend sends the message to `info@bookmyacre.com`
4. The backend optionally sends an auto-reply confirmation back to the user
5. The client receives JSON with `success` and `message`

Before going live, update your environment variables and SMTP settings for your hosting environment.

### Production deployment

1. Run:

```bash
npm run build
```

2. Deploy the resulting `dist/` folder and `server.js` to a Node-capable host.

3. Set environment variables for your mail provider and allowed origins:

```env
PORT=4000
MAIL_TO=info@bookmyacre.com
MAIL_FROM=no-reply@bookmyacre.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-user
SMTP_PASS=your-password
CORS_ORIGINS=https://www.bookmyacre.com,https://bookmyacre.com
```

4. Start the server:

```bash
npm run server
```

If you want the same app to serve both frontend and API, `server.js` already serves the built `dist/` assets and handles `/api/mail`.

### Local dev with Vite proxy

During `npm run dev`, Vite proxies `/api/mail` to `http://127.0.0.1:4000` using `vite.config.js`.
That means the form can use the local Node/Express backend while you run the React dev server.
