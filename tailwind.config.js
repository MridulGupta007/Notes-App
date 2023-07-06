/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily: {
      'sans': ['"Open Sans"'],
      'heading': ['Poppins']
    },
    
    extend: {
       lineHeight: {
        'nav':'1.68rem' ,
        'side-element': '1.43rem',
        'heading': '3.125rem',
        'para': '1.18rem',
        'form': '1.18rem'
       },
       colors:{
        'exam-green': '#3AA078',
        'exam-green-light': '#3AA078D9',
        'disabled': '#E4F0EB',
        'color':'#D3D3D3',
        'side-element': '#ECEAEA'

       },
       width:{
        '55/100' : '55%',
        '42/100' : '42%',
        '10v' : '10vh'
       },
       textUnderlineOffset:{
        20: '20px'
       },
       textDecorationThickness:{
        5: '5px'
       }
    },
  },
  plugins: [],
}

