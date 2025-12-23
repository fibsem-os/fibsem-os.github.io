
public/
├── community/
│   ├── julia_mahamid.jpg
│   ├── linhua_tan.jpg
│   ├── jenny_sachweh.jpg
│   ├── juergen_plitzko.jpg
│   ├── johann_brenner.jpg
│   ├── maud_dumoux.jpg
│   ├── michael_grange.jpg
│   ├── sven_klumpe.jpg
│   ├── patrick_cleeve.jpg
│   └── logos/
│       ├── embl_logo.png
│       ├── mpi_biochemistry_logo.png
│       ├── rosalind_franklin_logo.png
│       └── openfibsem_logo.png
├── contributors/
│   ├── sven_klumpe.jpg
│   ├── patrick_cleeve.jpg
│   ├── georg_ramm.jpg
│   └── alex_de_marco.jpg
├── related_orgs/
│   ├── VBC.png
│   ├── IMBA.png
│   ├── IMP.png
│   ├── Monash.svg
│   └── cz_biohub.png

Manual Fixes Needed - Report


2. Missing Logos (place in /public/community/logos/):

    /community/logos/embl_logo.png - Download from https://www.embl.org

    /community/logos/mpi_biochemistry_logo.png - Download from https://www.biochem.mpg.de

    /community/logos/rosalind_franklin_logo.png - Download from https://www.rfi.ac.uk

    /community/logos/openfibsem_logo.png - Create or download from GitHub

3. Missing Contributor Photos (place in /public/contributors/):

    /contributors/georg_ramm.jpg

    /contributors/alex_de_marco.jpg

4. Quick fixes for missing images:

For any missing images, you can:

    Use placeholder images temporarily

    Update the JSON to not include the image field for members without photos

    Use institution logos instead of personal photos

5. Websites to verify:

    ✅ Julia Mahamid: https://www.embl.org ✓

    ✅ Jürgen Plitzko: https://www.biochem.mpg.de ✓

    ✅ Maud Dumoux: https://www.rfi.ac.uk ✓

    ✅ Sven Klumpe: https://www.vbc.ac.at ✓

    Linhua Tan - Verify specific webpage

    Jenny Sachweh - Verify specific webpage

    Johann Brenner - Verify specific webpage

    Michael Grange - Verify specific webpage

To add new community members:

    Add entry to /app/data/community.json

    Add profile photo to /public/community/ (optional)

    Add new institution logo to /public/community/logos/ (if new institution)

    The page will automatically update!