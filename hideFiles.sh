#!/bin/bash

# delete global helper import
cat ./src/globalHelpers.js > temp.txt
sed "s/return \`Currently.*\`/return \`Contact me for any Inquiries\`/" temp.txt > ./src/globalHelpers.js
rm temp.txt

# replace resume import
cat ./src/globalConstants.js > temp.txt
sed "s/import RESUME from .*\.pdf.*;/const RESUME = null;/" temp.txt > ./src/globalConstants.js
rm temp.txt

cat ./src/globalConstants.js > temp.txt
sed "s/const PHONE = .*;/const PHONE = '';/" temp.txt > ./src/globalConstants.js
rm temp.txt

cat ./src/globalConstants.js > temp.txt
sed "s/const LINKEDIN = .*;/const LINKEDIN = '';/" temp.txt > ./src/globalConstants.js
rm temp.txt

# change location of footer
# cat ./src/components/contact/Contact.scss > temp.txt
# sed "s/bottom: calc.*;/bottom: calc(2 * (-93vh));/" temp.txt > ./src/components/contact/Contact.scss
# rm temp.txt

# simplify experience and skills data
echo 'import { experience } from "./templateData"; export default experience;' > ./src/data/experienceData.js
echo 'import { skills } from "./templateData"; export default skills;' > ./src/data/skillsData.js

# remove files from repository
rm -r ./public/assets/biquadris-uml.jpeg './src/Jathurshan T - Resume.pdf' 'public/assets'
echo '# personal-website' > './README.md'

# return success message after hiding files
echo 'SUCCESS: Sensitive Files Have Been Deleted'