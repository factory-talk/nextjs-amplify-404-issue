/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    productionBrowserSourceMaps: true,
    i18n: {
        // These are all the locales you want to support in
        // your application
        // localeDetection: false,
        locales: ["en", "jp"],
        // This is the default locale you want to be used when visiting
        // a non-locale prefixed path e.g. `/hello`
        // defaultLocale: "en-US",
        defaultLocale: "en",

        // This is a list of locale domains and the default locale they
        // should handle (these are only required when setting up domain routing)
        // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
        // domains: [
        //     {
        //         domain: "localhost:3001",
        //         defaultLocale: "jp",
        //     },
        //     // {
        //     //     domain: "example.com",
        //     //     defaultLocale: "en",
        //     // },
        //     // {
        //     //     domain: "example.jp",
        //     //     defaultLocale: "jp",
        //     //     // an optional http field can also be used to test
        //     //     // locale domains locally with http instead of https
        //     //     http: true,
        //     // },
        // ],
    },
};

module.exports = nextConfig;
