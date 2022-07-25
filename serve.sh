#!/bin/bash
# server manager for node / next.js build update app
# Aleksandr Ivanovitch

nextvar="$(pwd)"
nextname=${nextvar//[^[:alnum:]]/}

#export NODE_OPTIONS=--openssl-legacy-provider
rm -R node_modules/
npm install npm install --save-prod
npm run build
pm2 delete "${nextname,,}"
pm2 start npm --name "${nextname,,}" -- start -- -p "$1"
pm2 save
