/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
        white: "#f5f5f5",
        primary: {
            200:"#efeffc",
            300:"#cfd0f6",
            400:"#7f81e8",
            DEFAULT: "#5F62E2",
            600: "#5658CB"
        },
         secondary: {
            200:"#FFD700",
            400:"#C99200",
            DEFAULT: "#D4AF37",
            600: "#A57C00"
        },
        gray: {
        300:"#fafafa",
            400:"#EEEEEE",
            500:"#F5F5F5",
            600:"#DCDCDC",
            // 700: "",
            // 800: "",
            DEFAULT: "#808080",
        },
        black: "3B3B3B",
        goldBg: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
    },
    fontSize: {
        "8xl": [
            "120px",
            {
                lineHeight: "120px",
                letterSpacing:"-6px",
                fontWeight: "500",
            },
        ],
        "7xl": [
            "72px",
            {
                lineHeight: "80px",
                letterSpacing:"-4.5px",
                fontWeight: "600",
            },
        ],
        "6xl": [
            "55px",
            {
                lineHeight: "60px",
                letterSpacing:"-2.5px",
                fontWeight: "600",
            },
        ],
        "5xl": [
            "48px",
            {
                lineHeight: "54px",
                letterSpacing:"-1.6000000px",
                fontWeight: "500",
            },
        ],
        "4xl": [
            "36px",
            {
                lineHeight: "44px",
                letterSpacing:"-1.2000000px",
                fontWeight: "500",
            },
        ],
        "3xl": [
            "28px",
            {
                lineHeight: "34px",
                letterSpacing:"-0.800000011920929px",
                fontWeight: "500",
            },
        ],
        "2xl": [
            "24px",
            {
                lineHeight: "30px",
                letterSpacing:"-1px",
                fontWeight: "400",
            },
        ],
        xl: [
            "24px",
            {
                lineHeight: "30px",
                letterSpacing:"-1px",
                fontWeight: "400",
            },
        ],
        lg: [
            "21px",
            {
                lineHeight: "30px",
                letterSpacing:"-0.80px",
                fontWeight: "400",
            },
        ],
        base: [
            "17px",
            {
                lineHeight: "25px",
                letterSpacing:"-0.70px",
                fontWeight: "400",
            },
        ],
        sm: [
            "15px",
            {
                lineHeight: "23px",
                letterSpacing:"-0.60px",
                fontWeight: "400",
            },
        ],
        caption1: [
            "20px",
            {
                lineHeight: "24px",
                letterSpacing:"-0.60px",
                fontWeight: "400",
            },
        ],
        caption2: [
            "18px",
            {
                lineHeight: "20px",
                letterSpacing:"-0.30px",
                fontWeight: "400",
            },
        ],
        caption3: [
            "15px",
            {
                lineHeight: "18px",
                letterSpacing:"-0.50px",
                fontWeight: "400",
            },
        ],
        caption4: [
            "13px",
            {
                lineHeight: "15px",
                letterSpacing:"-0.20px",
                fontWeight: "400",
            },
        ],
    },
    borderRadius: {
          DEFAULT: '10px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
