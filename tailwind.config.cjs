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
          page: '#FAFBFB',
          section: '#F8F8F8',
          alt: '#E3F0F6',
          hover: '#D4E6F1',
          selected: '#E3F0F6',
        },
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
          muted: '#6B7280',
          disabled: '#9CA3AF',
          link: '#1193D4',
        },
        border: {
          DEFAULT: '#E3F0F6',
          strong: '#B6D4E3',
          focus: '#1193D4',
        },
        button: {
          primary: {
            DEFAULT: '#1193D4',
            text: '#FFFFFF',
            hover: '#0E7AB0',
            active: '#0B628C',
          },
          secondary: {
            DEFAULT: '#E3F0F6',
            text: '#1193D4',
            border: '#B6D4E3',
            hover: '#D4E6F1',
          },
        },
        icon: {
          DEFAULT: '#1193D4',
          muted: '#B6D4E3',
          active: '#1193D4',
        },
        surface: {
          card: '#F8F8F8',
          sidebar: '#FAFBFB',
          header: '#FFFFFF',
        },
        form: {
          input: '#FFFFFF',
          text: '#1F2937',
          border: '#E3F0F6',
          focus: '#1193D4',
        },
        feedback: {
          success: '#F0FDF4',
          warning: '#FFFBEB',
          error: '#FEF2F2',
        },
      },
    },
  },
  plugins: [],
};
