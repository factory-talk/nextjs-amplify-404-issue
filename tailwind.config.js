/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./pages/**/*.tsx",
        "./pages/*.tsx",
        "./src/components/*.tsx",
        "./src/components/**/*.tsx",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#4e4e4e",
                    DEFAULT: "#222",
                    dark: "#0f172a",
                },
                secondary: {
                    light: "#0284c7",
                    DEFAULT: "#1f2937",
                    dark: "#0c4a6e",
                },
                error: {
                    light: "#ff6d61",
                    DEFAULT: "#CC0001",
                    dark: "#960010",
                },
                success: {
                    DEFAULT: "#4EC274",
                },
                white: "#fff",
                black: "#222",
                transparent: "transparent",
                inherit: "inherit",
                grey: {
                    100: "#f5f5f5",
                    200: "#F6F6F7",
                    300: "#ededed",
                    400: "#e4e4e4",
                    500: "#8E8E8E",
                    600: "#585858",
                    900: "#626262",
                },
            },
        },
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1600px",
            "3xl": "1700px",
        },
    },
    corePlugins: {
        preflight: false,
    },
};
