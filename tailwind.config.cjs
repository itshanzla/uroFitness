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
          page: 'var(--background-page)', 
          section: 'var(--background-section)', 
          alt: '#E3F0F6', // Soft Pale Blue
          hover: 'var(--blue-hover)', // Light Sky Blue
          selected: 'var(--blue-pale)', // Soft Pale Blue
        },
        text: {
          primary: 'var(--text-primary)', 
          secondary: 'var(--text-secondary)', 
          muted: 'var(--text-muted)', 
          disabled: '#9CA3AF', // Cool Gray
          link: '#1193D4', // Vibrant Cyan Blue
        },
        border: {
          DEFAULT: 'var(--border-default)', 
          strong: 'var(--blue-muted)', // Soft Muted Blue
          focus: 'var(--blue-primary)', // Vibrant Cyan Blue
        },
        button: {
          primary: {
            DEFAULT: 'var(--blue-primary)', // Vibrant Cyan Blue
            text: '#FFFFFF', // Pure White
            hover: '#0E7AB0', // Strong Deep Blue
            active: '#0B628C', // Dark Navy Blue
          },
          secondary: {
            DEFAULT: 'var(--blue-pale)', // Soft Pale Blue
            text: 'var(--blue-primary)', // Vibrant Cyan Blue
            border: 'var(--blue-muted)', // Soft Muted Blue
            hover: 'var(--blue-hover)', // Light Sky Blue
          },
        },
        icon: {
          DEFAULT: 'var(--blue-primary)', // Vibrant Cyan Blue
          muted: 'var(--blue-muted)', // Soft Muted Blue
          active: 'var(--blue-primary)', // Vibrant Cyan Blue
        },
        surface: {
          card: 'var(--surface-card)', 
          sidebar: 'var(--surface-sidebar)', 
          header: 'var(--surface-header)', 
        },
        form: {
          input: 'var(--form-input)', 
          text: 'var(--text-primary)', 
          border: 'var(--form-border)', 
          focus: 'var(--blue-primary)', 
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
