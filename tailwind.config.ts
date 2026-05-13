import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fbf9f7",
        surface: "#fbf9f7",
        "surface-container": "#efeeec",
        "surface-container-low": "#f5f3f1",
        primary: "#4e635a",
        "primary-fixed": "#d1e8dd",
        "primary-fixed-dim": "#b5ccc1",
        secondary: "#3f627d",
        "secondary-fixed": "#cae6ff",
        "secondary-fixed-dim": "#a7cbe9",
        "secondary-container": "#badefd",
        "on-background": "#1b1c1b",
        "on-surface": "#1b1c1b",
        "on-surface-variant": "#424845",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#40637d",
        "on-secondary-fixed": "#001e30",
        "on-secondary-fixed-variant": "#264a64",
      },
      spacing: {
        "stack-sm": "16px",
        "stack-md": "32px",
        "stack-lg": "64px",
        "margin-mobile": "20px",
        gutter: "24px",
        "container-max": "1140px",
      },
    },
  },
  plugins: [],
};
export default config;