/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            main: {
                50: "#FFF1E8",
                100: "#FFE3D2",
                200: "#FFC7A5",
                300: "#FFAB77",
                400: "#FF8F4A",
                500: "#FF731D",
                600: "#D25E17",
                700: "#A54911",
                800: "#77350C",
                900: "#4A2006",
            },
            warmGray: {
                50: "#FAFAF9",
                100: "#F5F5F4",
                200: "#E7E5E4",
                300: "#D6D3D1",
                400: "#A8A29E",
                500: "#78716C",
                600: "#57534E",
                700: "#44403C",
                800: "#292524",
                900: "#1C1917",
            },
            primary: {
                50: "#FCFAF8",
                100: "#F9F5F2",
                200: "#F6F0EB",
                300: "#F3EAE4",
                400: "#F0E5DE",
                500: "#EDE0D7",
                600: "#D6B8A3",
                700: "#BE8F6F",
                800: "#9C6946",
                900: "#68462F",
                950: "#342317",
            },
            sub: {
                50: "#B1C5EE",
                100: "#A0B7E5",
                300: "#5B7EC4",
                500: "#1746A2",
                700: "#0E2A61",
                900: "#050E20",
            },
            black: "#000000",
            white: "#FFFFFF",
            gray: "#D6D3D1",
        },
        // borderWidth: {
        //   12: "0.5px",
        // },

        extend: {
            width: {
                500: "31.25rem",
                50: "50vw",
                89: "89vw",
            },
            height: {
                500: "31.25rem",
                50: "50vh",
                89: "89vh",
            },
        },
    },
    plugins: [],
};
