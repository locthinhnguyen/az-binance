/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        lg: '1700px',
      },
      colors: {
        character: {
          primary: '#FFFFFF',
          mark: '#000000',
          danger: '#FF4D4F',
          warning: '#FAAD14',
          success: '#52C41A',
          'title-85': 'rgba(0, 0, 0, 0.85)',
          'primary-85': 'rgba(0, 0, 0, 0.85)',
          'secondary-45': 'rgba(0, 0, 0, 0.65)',
        },
      },
    },
    fontSize: {
      'h5-bold': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '700',
        },
      ],
      'h2-medium': [
        '30px',
        {
          fontWeight: '500',
          lineHeight: '38px',
        },
      ],
      'h3-medium': [
        '24px',
        {
          fontWeight: '500',
          lineHeight: '32px',
        },
      ],
      'h4-medium': [
        '20px',
        {
          fontWeight: '500',
          lineHeight: '20px',
        },
      ],
      description: [
        '12px',
        {
          fontWeight: '400',
          lineHeight: '20px',
        },
      ],
      'label-mid': [
        '16px',
        {
          fontWeight: '500',
          lineHeight: '32px',
        },
      ],
      'label-sm': [
        '14px',
        {
          fontWeight: '500',
          lineHeight: '16px',
        },
      ],
      regular: [
        '14px',
        {
          fontWeight: '400',
          lineHeight: '22px',
        },
      ],
    },
  },
  plugins: [],
};
