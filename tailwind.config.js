module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: "640px",

      // => @media (min-width: 768px) { ... }
      md: "768px",

      // => @media (min-width: 1024px) { ... }
      lg: "1024px",

      // => @media (min-width: 1280px) { ... }
      xl: "1280px",

      // => @media (min-width: 1536px) { ... }
      "2xl": "1536px",
    },
    maxWidth: {
      36: "36rem",
      40: "40rem",
      // 500: "500px",
    },

    colors: {
      inherit: "inherit",
      transparent: "transparent",
      current: "currentColor",
      black: "#0000",
      white: "#fff",

      primary: {
        50: "#e3f3ff",
        100: "#bbe0ff",
        200: "#8eceff",
        300: "#5dbaff",
        400: "#33abff",
        500: "#009cff",
        DEFAULT: "#008cff",
        700: "#0a79eb",
        800: "#1068d9",
        900: "#1348ba",
      },
      secondary: {
        50: "#ddf1f1",
        100: "#aadddb",
        200: "#6fc8c3",
        DEFAULT: "#20b2ab",
        400: "#00a198",
        500: "#009085",
        600: "#008478",
        700: "#007468",
        800: "#006458",
        900: "#00483c",
      },

      gray: {
        50: "#F3F9FF",
        100: "#ECF1F7",
        200: "#E2E7ED",
        300: "#D1D7DD",
        400: "#ADB3B8",
        500: "#8D9298",
        DEFAULT: "#656A70",
        700: "#52575C",
        800: "#34393D",
        900: "#14191D",
      },
      error: {
        50: "#FFE9EF",
        100: "#FFC9D5",
        200: "#F8919D",
        300: "#F26276",
        400: "#FF2D54",
        500: "#FF0038",
        DEFAULT: "#F70038",
        700: "#E50031",
        800: "#D80029",
        900: "#C9001D",
      },
      success: {
        50: "#E8F5E9",
        100: "#C8E6C9",
        200: "#A5D6A7",
        300: "#81C784",
        400: "#66BB6B",
        500: "#4CAF51",
        DEFAULT: "#43A048",
        700: "#388E3D",
        800: "#2E7D33",
        900: "#1B5E21",
      },
      warning: {
        50: "#FFFEE7",
        100: "#FDFBC2",
        200: "#FBF898",
        300: "#F9F46B",
        400: "#F6EF45",
        500: "#FFF627",
        DEFAULT: "#FFE21D",
        700: "#FFC90C",
        800: "#FFB000",
        900: "#FF8500",
      },
    },

    spacing: {
      0: "0",
      1: "3px",
      2: "6px",
      3: "9px",
      4: "12px",
      5: "15px",
      6: "18px",
      7: "21px",
      8: "24px",
      9: "27px",
      10: "30px",
      11: "45px",
      //--------
      "7-rem": "7rem",
      "10-rem": "10rem",
      20: "25rem",
      30: "30rem",
    },

    borderRadius: {
      0: "0",
      1: "3px",
      2: "6px",
      3: "9px",
      4: "12px",
      5: "15px",
      6: "18px",
      7: "21px",
      8: "24px",
      9: "27px",
      10: "30px",
      11: "50%",
    },

    // borderWidth: {
    //   DEFAULT: '1px',
    //   '0': '0',
    //   '2': '2px',
    //  '3': '3px',
    //   '4': '4px',
    //  '6': '6px',
    //  '8': '8px',
    // }

    extend: {
      backgroundColor: {
        inherit: "inherit",
      },
      textColor: {
        inherit: "inherit",
      },
      borderColor: {
        inherit: "inherit",
      },
      transform: ["hover", "focus", "active"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
