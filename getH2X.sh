#!/usr/bin/env bash

curl -o html2xhtml.tar.gz http://www.it.uc3m.es/jaf/html2xhtml/downloads/html2xhtml-1.3.tar.gz
tar xzf html2xhtml.tar.gz
cd html2xhtml-1.3
./configure
make
mv src/html2xhtml ..
cd ..
rm -rf html2xhtml-1.3 html2xhtml.tar.gz