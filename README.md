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
    "image"       : "/community/placeholder_icecube.png", # <---- [OPTIONAL, if you prefer the ice cube] Your pic 
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