#!/bin/bash
# server manager for node / next.js build update app
# Aleksandr Ivanovitch

nextvar="$(pwd)"
nextname=${nextvar//[^[:alnum:]]/}

#rm -R node_modules/ # remove prevent mismatch
#rm -R .next/        # remove prevent mismatch

function _pull {
  git pull
}

function _install {
  npm install --save-prod --legacy-peer-deps
}

function _migrate {
  npx prisma migrate deploy
  #  npx prisma db push
}

function _build {
  npm run build
}

function _init() {
  pm2 delete "${nextname,,}"

  pm2 start npm --name "${nextname,,}" -- start -- -p 3000

  pm2 startup && pm2 save
}

# init check of command
if _pull; then
  if _install; then
    if _build; then
      _init
    else
      printf '_build failed\n'
    fi
  else
    printf '_install failed\n'
  fi
else
  printf '_pull failed\n'
fi
