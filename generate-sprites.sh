#!/bin/bash
makiPath=node_modules/@mapbox/maki/icons/
outputDir=sprites
spriteZeroPath=node_modules/@mapbox/spritezero-cli/bin/spritezero
iconConfigPath=src/styles/

mkdir temp
mkdir ${outputDir}

# not everyone will use nvm need to document this. 8.9 is required for spritezero no other version will work not 9.x not 8.6
# echo ". ~/.bash_profile" | sudo tee /etc/bash.bashrc for intellij terminal
source ~/.bash_profile
nvm use --delete-prefix v8.9.4

colorize () {
	echo Colorizing $1 to $2 "for iconset" $3
	local path=temp/$3/
	sed -e "s/<path/<path fill=\"$2\"/" ${makiPath}$1-11.svg > ${path}$1-11.svg
	sed -e "s/<path/<path fill=\"$2\"/" ${makiPath}$1-15.svg > ${path}$1-15.svg
}

createIconSet () {
	cp -R ${makiPath} temp/$2

	while IFS=, read -r col1 col2
	do
		colorize $col1 $col2 $2
	done < $1

	${spriteZeroPath} $outputDir/$2 temp/$2
	${spriteZeroPath} ${outputDir}/$2@2x temp/$2  --ratio=4
}

createIconSet ${iconConfigPath}apollo-bright-icons.csv apollo-bright-icons
createIconSet ${iconConfigPath}zen-icons.csv zen-icons

rm -rf temp