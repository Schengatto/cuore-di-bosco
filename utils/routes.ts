export type LanguageCode = "it" | "en";

const italianRoutes = [
    {
        id: "welcome",
        group: "",
        label: "BENVENUTI",
        path: `/it`,
    },
    {
        id: "booking",
        group: "",
        label: "PRENOTA",
        path: `/it/prenota`,
    },
    {
        id: "explore",
        group: "",
        label: "ESPLORA",
        path: `/it/esplora`,
    },
    {
        id: "rules",
        group: "",
        label: "REGOLAMENTO",
        path: `/it/regolamento`,
    },
    {
        id: "privacy-policy",
        group: "",
        label: "PRIVACY POLICY",
        path: `/it/privacy-policy`,
        hidden: true,
    },
];


const englishRoutes = [
    {
        id: "welcome",
        group: "",
        label: "WELCOME",
        path: `/en`,
    },
    {
        id: "booking",
        group: "",
        label: "BOOK",
        path: `/en/booking`,
    },
    {
        id: "explore",
        group: "",
        label: "EXPLORE",
        path: `/en/explore`,
    },
    {
        id: "rules",
        group: "",
        label: "RULES",
        path: `/en/rules`,
    },
    {
        id: "privacy-policy",
        group: "",
        label: "PRIVACY POLICY",
        path: `/en/privacy-policy`,
        hidden: true,
    },
];


export const routes = (languageCode: LanguageCode) => {
    switch (languageCode) {
        case "en":
            return englishRoutes;
        case "it":
        default:
            return italianRoutes;

    }
};
