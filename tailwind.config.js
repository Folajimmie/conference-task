/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        primary: '#0C9EDA',
			'primary-01': '#D2DEEE',
			'primary-02': '#A5BDDC',
			'primary-03': '#799BCB',
			'primary-04': '#4C7AB9',
			'primary-05': '#194786',
			'primary-06': '#133565',
			'primary-07': '#0C2443',
			'primary-08': '#040F1E',
			secondary: '#F4ED9D',
			'secondary-01': '#FDFBEB',
			'secondary-02': '#FBF8D8',
			'secondary-03': '#F8F4C4',
			'secondary-04': '#F6F1B1',
			'secondary-05': '#C3BE7E',
			'secondary-06': '#928E5E',
			'secondary-07': '#625F3F',
			'secondary-08': '#312F1F',
			error: '#B00020',
			'error-light': '#FEECEC',
			success: '#3CC13B',
			'success-light': '#E0F5E0',
			warning: '#F3BB1C',
			'warning-light': '#FDF3D8',
			blue: '#98D4C2',
			orange: '#F3B942',
			pink: '#EE6544',
			green: '#4EB748',
			'blue-light': '#98D4C233',
			'orange-light': '#F3B94233',
			'pink-light': '#EE654433',
			'green-light': '#4EB74866',
			black: '#000000',
			'black-03': '#312E2F',
			'dark-01': '#6F7174',
			'dark-02': '#4D5154',
			'dark-03': '#2B2C34',
			white: '#FFFFFF',
			'white-01': '#FFFFFE',
			'white-02': '#FFFEF9',
			neutral: '#DEE0E3',
			'neutral-01': '#F4F5F6',
			'neutral-02': '#E9EBEC',
			'neutral-03': '#DEE0E3',
			'neutral-04': '#DBDCDD',
			'neutral-05': '#D3D6D9',
			'neutral-06': '#C8CCD0',
			'neutral-07': '#A0A3A6',
			'neutral-08': '#f9f9f9'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }, 
      fontSize: {
        'headline' : [
          '48px',
          {
            lineHeight: '56px',
            letterSpacing: '0.5px',
            fontWeight: 700
          }
        ],
        'headline-1' : [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '0.5px',
            fontWeight: 700
          }
        ], 
        'headline-2' : [
          '28px', 
          {
            lineHeight: '36px',
            letterSpacing: '0.25px',
            fontWeight: 600
          }
        ],
        'headline-3' : [
          '24px',
          {
            lineHeight: '24px',
            letterSpacing: '0.25px',
            fontWeight: 500
          }
        ],
        'title-1' : [
          '22px',
          {
            lineHeight: '28px',
            fontWeight: 600
          }
        ],
        'title-2' : [
          '20px', 
          {
            lineHeight: '24px',
            fontWeight: 500
          }
        ],
        'title-3' : [
          '18px', 
          {
            lineHeight: '20px',
            fontWeight: 500
          }
        ],
        'body-1' : [
          '16px', 
          {
            lineHeight: '24px',
            fontWeight: 400,
            letterSpacing: '0.25px'
          }
        ],
        'body-2' : [
          '14px', 
          {
            lineHeight: '20px',
            fontWeight: 400
          }
        ],
        'body-3' : [
          '12px', 
          {
            lineHeight: '16px',
            fontWeight: 300
          }
        ],
        'label-1' : [
          '14px', 
          {
            lineHeight: '20px',
            fontWeight: 400,
            letterSpacing: '0.25px'
          }
        ],
        'label-2' : [
          '12px', 
          {
            lineHeight: '16px',
            fontWeight: 400,
            letterSpacing: '0.25px'
          }
        ],
        'label-3' : [
          '10px', 
          {
            lineHeight: '12px',
            fontWeight: 400,
            letterSpacing: '0.5px'
          }
        ],
        'button-1' : [
          '16px', 
          {
            lineHeight: '24px',
            fontWeight: 500,
            letterSpacing: '0.5px',
          }
        ],
        'button-2' : [
          '14px', 
          {
            lineHeight: '20px',
            fontWeight: 500,
            letterSpacing: '0.25px',
          }
        ],
      },

      backgroundImage: {
        'hero-bg': "url('Assets/background2.jpg')",
        'banner-bg': "url('../Assets/logo.svg')"
      },

      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
