#!/bin/bash

echo "Welcome to the App-Arena Pattern generator!"
echo "What type of pattern would you like to create?"

options=("Atom" "Molecule" "Organism" "Abort")
patternPath=""
select opt in "${options[@]}"
do
	case ${opt} in
	Atom)
		echo "Creating a new atom"
		patternPath="00-atoms"
		break
        ;;
    Molecule)
        echo "Creating a new molecule"
        patternPath="01-molecules"
        break
        ;;
    Organism)
        echo "Creating a new organism"
        patternPath="02-organisms"
        break
        ;;
    Abort)
        exit
        ;;
    *)
        echo "Invalid option selected, exiting!"
        exit
        ;;
    esac
done

echo -n "Please specify the pattern name: "
read patternName
mkdir -p "source/patterns/${patternPath}/${patternName}/docs"
newPatternPath="source/patterns/${patternPath}/${patternName}"

set +B

cat > "${newPatternPath}/index.jsx" <<COMPONENT
import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent} from 'apparena-patterns-react';

export default class $(echo ${patternName} | sed -r 's/(^|-)([a-z])/\U\2/g') extends ReactComponent {
    render() {
        return (
            <div>

            </div>
        );
    }
}
COMPONENT

cat > "${newPatternPath}/docs/${patternName}.example.js" <<EXAMPLE
import React from 'react';
import {} from 'apparena-patterns-react';

export default function $(echo ${patternName} | sed -r 's/(^|-)([a-z])/\U\2/g')Example() {
    return (
        <div>

        </div>
    );
}
EXAMPLE

cat > "${newPatternPath}/docs/${patternName}.md" <<DESCRIPTION
# New pattern

This is a new pattern!
DESCRIPTION

set -B