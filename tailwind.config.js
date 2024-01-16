const config = {
  content: ["./app", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //White Mode
        primary: {
          maroon: "#801517",
        },
        secondary: {
          orange: "#F8991D",
          teal: "#17655C",
        },

        //Dark Mode
        DarkMode: {
          DarkBlue: "#0F172A",
          white: "#FFFFFF",
        },
      },
      fontSize: {
        "text-s": [
          "12px",
          {
            lineHeight: "16px",
          },
        ],
        "text-m": [
          "14px",
          {
            lineHeight: "20px",
          },
        ],
        "text-l": [
          "16px",
          {
            lineHeight: "24px",
          },
        ],
        "heading-s": [
          "20px",
          {
            lineHeight: "28px",
          },
        ],
        "heading-m": [
          "26px",
          {
            lineHeight: "36px",
          },
        ],
        "heading-l": [
          "36px",
          {
            lineHeight: "44px",
          },
        ],

        "heading-xl": [
          "44px",
          {
            lineHeight: "60px",
          },
        ],
        "heading-2xl": [
          "60px",
          {
            lineHeight: "72px",
          },
        ],
      },
    },
  },
  plugins: [],
};

module.exports = config;
