#!/bin/bash

passwordExist=$(ls ../ | egrep 'personal-website-password.txt' | wc -l)

if [ $passwordExist -eq $((1)) ]
    # password file exists in appropriate destination
then
    securedRepo=$(cat ../personal-website-password.txt)
    securedExist=$(ls ../ | egrep "$securedRepo" | wc -l)
    if [ $securedExist -eq $((1)) ]
    then
        rm -r ./public ./src ./.gitignore ./accessBash.sh ./hideFiles.sh ./nameResume.sh ./package-lock.json ./package.json ./README.md ./runAll.sh
        cp -r "../${securedRepo}/public" "../${securedRepo}/src" "../${securedRepo}/.gitignore" "../${securedRepo}/accessBash.sh" "../${securedRepo}/hideFiles.sh" "../${securedRepo}/nameResume.sh" "../${securedRepo}/package-lock.json" "../${securedRepo}/package.json" "../${securedRepo}/README.md" "../${securedRepo}/runAll.sh" .

        ./runAll.sh
    else
        # repository name defined in password file does not exist
        >&2 echo 'ERROR: Secured Repository Does Not Exist'
    fi
else
    # personal-website-password.txt does not exist
    if [ $passwordExist -eq $((0)) ]
    then
        >&2 echo 'ERROR: Password File Does Not Exist'
    else
        >&2 echo 'ERROR: Something Went Wrong in Finding Password File'
    fi
fi