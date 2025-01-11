const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#FFA82E',
          'headerbackground': '#1B263B',
          'primarybackground': '#0D1B2A',
          'headertextcolor': '#5D7593',
        },
        backgroundImage: {
          'custom-radial-big': 'radial-gradient(92.42% 190.62% at 22.73% 32.81%, #E08300 0%, #FFE29F 100%)',
          'custom-radial-small': 'radial-gradient(92.42% 190.62% at 22.73% 32.81%, #FB1EB6 0%, #FFE29F 100%)',
      
        },
        boxShadow: {
          'custom': '0px 1px 2px 0px #00000066',
        },
      },
    },
    plugins: [],
  });