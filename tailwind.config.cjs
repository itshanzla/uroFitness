module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          page: '#FAFBFB', // Very Light Gray/White
          section: '#F8F8F8', // Lighter Gray
          alt: '#E3F0F6', // Soft Pale Blue
          hover: '#D4E6F1', // Light Sky Blue
          selected: '#E3F0F6', // Soft Pale Blue
        },
        text: {
          primary: '#1F2937', // Dark Slate Gray
          secondary: '#4B5563', // Medium Dark Gray
          muted: '#6B7280', // Medium Gray
          disabled: '#9CA3AF', // Cool Gray
          link: '#1193D4', // Vibrant Cyan Blue
        },
        border: {
          DEFAULT: '#E3F0F6', // Soft Pale Blue
          strong: '#B6D4E3', // Soft Muted Blue
          focus: '#1193D4', // Vibrant Cyan Blue
        },
        button: {
          primary: {
            DEFAULT: '#1193D4', // Vibrant Cyan Blue
            text: '#FFFFFF', // Pure White
            hover: '#0E7AB0', // Strong Deep Blue
            active: '#0B628C', // Dark Navy Blue
          },
          secondary: {
            DEFAULT: '#E3F0F6', // Soft Pale Blue
            text: '#1193D4', // Vibrant Cyan Blue
            border: '#B6D4E3', // Soft Muted Blue
            hover: '#D4E6F1', // Light Sky Blue
          },
        },
        icon: {
          DEFAULT: '#1193D4', // Vibrant Cyan Blue
          muted: '#B6D4E3', // Soft Muted Blue
          active: '#1193D4', // Vibrant Cyan Blue
        },
        surface: {
          card: '#F8F8F8', // Lighter Gray
          sidebar: '#FAFBFB', // Very Light Gray/White
          header: '#FFFFFF', // Pure White
        },
        form: {
          input: '#FFFFFF', // Pure White
          text: '#1F2937', // Dark Slate Gray
          border: '#E3F0F6', // Soft Pale Blue
          focus: '#1193D4', // Vibrant Cyan Blue
        },
        feedback: {
          success: '#F0FDF4', // Very Pale Green
          warning: '#FFFBEB', // Very Pale Yellow
          error: '#EF4444', // Vibrant Red for errors
        },
      },
    },
  },
  plugins: [],
};
