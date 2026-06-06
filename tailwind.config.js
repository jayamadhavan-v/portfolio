/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed": "#001e2c",
        "on-primary-fixed-variant": "#004c6e",
        "surface-container-high": "#e4e8ee",
        "on-primary": "#ffffff",
        "on-tertiary-fixed": "#2c1600",
        "tertiary": "#8a5100",
        "tertiary-fixed-dim": "#ffb86e",
        "surface-container-low": "#f0f4fa",
        "error": "#ba1a1a",
        "on-primary-fixed": "#001e2f",
        "secondary-fixed-dim": "#7bd0ff",
        "outline": "#6e7881",
        "tertiary-fixed": "#ffdcbd",
        "on-surface-variant": "#3e4850",
        "outline-variant": "#bec8d2",
        "surface-bright": "#f6faff",
        "primary-fixed-dim": "#89ceff",
        "error-container": "#ffdad6",
        "on-secondary": "#ffffff",
        "on-surface": "#171c20",
        "surface-dim": "#d6dae0",
        "on-secondary-fixed-variant": "#004c69",
        "on-tertiary": "#ffffff",
        "on-secondary-container": "#004d6a",
        "primary-fixed": "#c9e6ff",
        "surface-variant": "#dee3e9",
        "secondary": "#00668a",
        "primary-container": "#0ea5e9",
        "on-primary-container": "#003751",
        "secondary-fixed": "#c4e7ff",
        "secondary-container": "#40c2fd",
        "surface-tint": "#006591",
        "surface-container-lowest": "#ffffff",
        "surface-container-highest": "#dee3e9",
        "on-background": "#171c20",
        "on-tertiary-container": "#4d2b00",
        "on-tertiary-fixed-variant": "#693c00",
        "primary": "#006591",
        "on-error-container": "#93000a",
        "background": "#f6faff",
        "surface-container": "#eaeef4",
        "surface": "#f6faff",
        "inverse-primary": "#89ceff",
        "on-error": "#ffffff",
        "inverse-on-surface": "#edf1f7",
        "inverse-surface": "#2c3135",
        "tertiary-container": "#de8712"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "unit": "8px",
        "margin-mobile": "20px",
        "gutter": "32px",
        "section-padding-desktop": "120px",
        "section-padding-mobile": "64px",
        "container-max": "1280px"
      },
      fontFamily: {
        "headline-xl-mobile": ["Manrope", "sans-serif"],
        "code": ["monospace"],
        "headline-lg": ["Manrope", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-xl": ["Manrope", "sans-serif"],
        "headline-md": ["Manrope", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-xl-mobile": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "code": ["14px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-xl": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-md": ["14px", { "lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "600" }]
      },
      animation: {
        'tech-float': 'tech-float 3s ease-in-out infinite',
      },
      keyframes: {
        'tech-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
