#!/bin/bash

# get resume file name
resumeFile=$(ls src | egrep ".*(r|R)esume.*\.pdf")

# changes file naming if appropriate
if [ "${resumeFile}" != '' ]
then
    resumeCount=$(echo "$resumeFile" | wc -l)
    expectCount=$((1))

    if [ $resumeCount -ne $expectCount ] 
    then
        # send message to stderr
        >&2 echo 'ERROR: More Than One Resume Files Exist'
    elif [ "${resumeFile}" != 'Jathurshan T - Resume.pdf' ]
    then
        # rename resume file
        mv "./src/${resumeFile}" './src/Jathurshan T - Resume.pdf'
        echo 'SUCCESS: Resume Renamed Appropriately'
    else
        # does not rename for efficiency
        echo 'SUCCESS: Resume Already Renamed Appropriately'
    fi
fi