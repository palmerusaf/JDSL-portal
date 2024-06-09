#!/usr/bin/env bash

lastCommitHex=$(git rev-parse --short HEAD)
lastCommitDec=$(printf "%d" 0x$lastCommitHex)
for jsonFile in ./the_system/*.json; do
  tmp=($(echo $jsonFile).tmp)
   jq .Functions+="["$lastCommitDec"]" $jsonFile > $tmp && mv $tmp $jsonFile
done
