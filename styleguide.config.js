const path = require("path");

module.exports = {
    title: "UI by Nikita Babko",
    version: "v1.0.0-alpha.5",
    template: {
        head: {
            links: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,700",
                },
            ],
        },
        meta: [
            {
                property: "og:title",
                content: "BabkoUI Design System",
            },
            {
                property: "og:description",
                content:
                    "BabkoUI is a UI library and Design System based on React and Styled Components",
            },
        ],
        favicon: "public/favicon.ico",
    },
    theme: {
        color: {
            base: "#333",
            light: "#333",
            link: "#00BCD4",
            linkHover: "#FF5722",
            focus: "#009CB0",
            baseBackground: "#fff",
            sidebarBackground: "#00BCD4",
            ribbonText: "#333",
            codeBase: "#333",
        },
        fontFamily: {
            base: '"Open Sans", sans-serif',
        },
    },
    styleguideComponents: {
        // Wrapper: path.join(__dirname, "src/Logo"),
        // LogoRenderer: path.join(__dirname, "src/Logo"),
        StyleGuideRenderer: path.join(__dirname, "src/StyleGuide"),
        // SectionsRenderer: path.join(__dirname, "src/SectionsRenderer"),
        // ComponentsListRenderer: path.join(__dirname, "src/Logo"),
        // HeadingRenderer: path.join(__dirname, "src/SectionsRenderer"),
        // TableOfContentsRenderer: path.join(__dirname, "src/Toc"),
    },
    sections: [
        {
            name: "Introduction",
            content: path.join(__dirname, "src/content/intro.md"),
        },
        {
            name: "Style",
            sections: [
                {
                    name: "Colors",
                    content: path.join(__dirname, "src/content/colors.md"),
                },
            ],
        },

        {
            name: "Components",
            components: path.join(__dirname, "src/components/[A-Z]**/*.js"),
        },
    ],
    require: [path.join(__dirname, "src/styles/index.css")],
};
