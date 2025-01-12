/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f2f2f2",
          "200": "#eff2f5",
        },
        white: "#fff",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mercury":
          "#e3e3e3",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray":
          "#171717",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-burnt-sienna-10":
          "rgba(238, 104, 85, 0.1)",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-sunglo":
          "#e96975",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-mine-shaft":
          "#202020",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-niagara-6":
          "rgba(10, 178, 125, 0.06)",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-shamrock":
          "#32be88",
        mintcream: "#ebf9f4",
        mediumseagreen: "#14b079",
        "day-gray-08": "#0f152a",
        "primary-blue": "#0052fe",
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-solitude":
          "#e8f4fd",
        "day-gray-06": "#788f9b",
        "gray-2": "#3e424a",
        orange: "#faa002",
        dodgerblue: "#0082ff",
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-cod-gray1":
          "#1d1d1d",
        lightgray: "rgba(201, 207, 221, 0.6)",
        gray: {
          "100": "#111827",
          "200": "#0b1426",
        },
        "groww-in-stocks-zomato-ltd-1440x810-default-waterloo": "#7c7e8c",
        "absolute-red": "#f7324c",
        "groww-in-stocks-zomato-ltd-1440x810-default-french-gray": "#c7c8ce",
        "groww-in-stocks-zomato-ltd-1440x810-default-persian-green": "#00b386",
        "absolute-green": "#0fba83",
        "day-gray-07": "#3e5765",
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-shark":
          "#191c1f",
        "groww-in-stocks-zomato-ltd-1440x810-default-gun-powder": "#44475b",
        "day-gray-04": "#d3e0e6",
        "gray-3": "#768396",
        "absolute-black": "#000",
        "primary-darkblue": "#0141cf",
        dimgray: "#666",
        darkslategray: "#333",
        slategray: "#5d667b",
        lavender: "#e2ecfe",
        "gray-5": "#dee1e6",
        lightslategray: "#808a9d",
        gainsboro: "#dedfe2",
      },
      spacing: {},
      fontFamily: {
        "tokeninsight-com-en-coins-ethereum-tokenomics-1440x810-default-inter-regular-12":
          "Inter",
        "www-indstocks-com-stocks-zomato-ltd-share-price-1440x810-default-sf-pro-text-regular-14":
          "'SF Pro Text'",
      },
      borderRadius: {
        "3xs": "10px",
        smi: "13px",
        "5xs-5": "7.5px",
        "6xs-7": "6.7px",
        "6xs-6": "6.6px",
        "21xl": "40px",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      xs: "0.75rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      sm: "0.875rem",
      mini: "0.938rem",
      lg: "1.125rem",
      "base-6": "0.975rem",
      "base-1": "0.944rem",
      "3xl": "1.375rem",
      "lg-9": "1.181rem",
      "xs-2": "0.7rem",
      smi: "0.813rem",
      "sm-8": "0.863rem",
      "2xs": "0.688rem",
      inherit: "inherit",
    },
    screens: {
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
