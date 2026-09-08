The website for the FibSEM OS organization.

----

This is a [Next.js](https://nextjs.org) project. Run via  
```bash
npm run dev
# or
yarn dev
```

----


### For community and contributors:

If you would like to be added to the page -- please send us your info (name, affiliation[s] with their logos and optionally -- website,title*, picture*,) and media that you'd like displayed.

Alternatively, open a PR, place the media in `public` and add yourself to the [community register](./src/app/data/community.json) in the following format:

```json
{
    "name"        : "Jane Smith", 
    "website"     : "https://example.com",                # <---- [OPTIONAL] your personal or institutional page
    "title"       : "The Freezer of Water",               # <---- [OPTIONAL]
    "image"       : "/community/jane_smith.jpg",          # <---- [OPTIONAL] your picture; omit it for an initial
    "affiliations": [ # <-- Can be multiple
      {
        "name": "Rosalind Franklin Institute",
        "logo": "/community/logos/rosalind_franklin_logo.png"
      },
      {
        "name": "Rosalind Franklin Institute",
        "logo": "/community/logos/rosalind_franklin_logo.png"
      }
    ]
  }

```

Thank you!

## Developer documentation

The pages under `/docs/developers/` are not in this repository. They are copied
out of a [fibsem-os](https://github.com/fibsem-os/fibsem-os) checkout by
`scripts/sync-developer-docs.mjs` before every build (`yarn build` runs it),
with relative links rewritten to site routes and GitHub links. The deploy
workflow checks fibsem-os out beside the site; locally, put a checkout at
`../fibsem-os` or point `FIBSEM_OS_DIR` at one. With neither, the build
skips those pages with a warning. Edit the pages in fibsem-os, not here.
