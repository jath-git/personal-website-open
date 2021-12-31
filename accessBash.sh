#!/bin/bash

if [ $# -eq $((0)) ]
then
    modify=1
else
    if [ $1 != '-' ]
    then
        modify=1
    else
        modify=0
    fi
fi

if [ ${modify} -eq $((1)) ]
then
    chmod u+x hideFiles.sh nameResume.sh update.sh runAll.sh
    echo 'SUCCESS: Added Executive Permissions for All Bash Files'
else
    chmod u-x hideFiles.sh nameResume.sh update.sh runAll.sh
    echo 'SUCCESS: Removed Executive Permissions for All Bash Files'
fi