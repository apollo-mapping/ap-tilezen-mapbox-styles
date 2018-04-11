#!/bin/bash
makiPath=node_modules/@mapbox/maki/icons/
outputDir=sprites
spriteZeroPath=node_modules/@mapbox/spritezero-cli/bin/spritezero
mkdir temp
mkdir $outputDir

colorize () {
	echo Colorizing $1 to $2 "for iconset" $3
	# not sure if want to use fill too seemed bulky but without it was wierd
	local path=temp/$3/
	sed -e "s/<path/<path fill=\"$2\"/" $makiPath$1-11.svg > $path$1-11.svg
	sed -e "s/<path/<path fill=\"$2\"/" $makiPath$1-15.svg > $path$1-15.svg
}

createIconSet () {
	cp -R $makiPath temp/$2

	while IFS=, read -r col1 col2
	do
		colorize $col1 $col2 $2
	done < $1

	$spriteZeroPath $outputDir/$2 temp/$2
	$spriteZeroPath $outputDir/$2@2x temp/$2  --ratio=4
}

createIconSet apollomapping-bright-icons.csv apollomapping-bright-icons
