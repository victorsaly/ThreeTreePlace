const sources = [
    {
        "context": {
            "name": "sitemap:urls",
            "description": "Set with the `sitemap.urls` config."
        },
        "urls": [],
        "sourceType": "user"
    },
    {
        "context": {
            "name": "nuxt:pages",
            "description": "Generated from your static page files.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:pages'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/About"
            },
            {
                "loc": "/corporate-housing"
            },
            {
                "loc": "/guaranteed-rent"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/partnerships-and-joint-ventures"
            },
            {
                "loc": "/temporary-accommodation"
            },
            {
                "loc": "/trade-accommodation"
            }
        ],
        "sourceType": "app"
    },
    {
        "context": {
            "name": "nuxt:prerender",
            "description": "Generated at build time when prerendering.",
            "tips": [
                "Can be disabled with `{ excludeAppSources: ['nuxt:prerender'] }`."
            ]
        },
        "urls": [
            {
                "loc": "/About"
            },
            {
                "loc": "/corporate-housing"
            },
            {
                "loc": "/guaranteed-rent"
            },
            {
                "loc": "/trade-accommodation"
            },
            {
                "loc": "/partnerships-and-joint-ventures"
            },
            {
                "loc": "/"
            },
            {
                "loc": "/temporary-accommodation"
            }
        ],
        "sourceType": "app"
    }
];

export { sources };
//# sourceMappingURL=global-sources.mjs.map
