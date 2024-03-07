#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
echo 'react.md' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Nikba-Creative-Studio/React-Nikba.git main:gh-pages
cd -