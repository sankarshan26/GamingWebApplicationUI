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
      },
    },
    plugins: [],
  });