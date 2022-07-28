#!/bin/bash
# https://dev.to/reactstockholm/setup-a-next-js-project-with-pm2-nginx-and-yarn-on-ubuntu-18-04-22c9
# server manager for pm2/nextjs
# Aleksandr Ivanovitch

nextvar="$(pwd)"
nextname=${nextvar//[^[:alnum:]]/}

rm -R node_modules/ # remove prevent mismatch
rm -R .next/        # remove prevent mismatch

npm install --save-prod # install module prod

npm run build # build nextjs schema

npx prisma migrate deploy #try to migrate updates

pm2 delete "${nextname,,}"
pm2 start npm --name "${nextname,,}" -- start -- -p "$1"
pm2 save
