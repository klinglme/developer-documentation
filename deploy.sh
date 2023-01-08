#!/usr/bin/env sh

cd docs
# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd src/.vuepress/dist

# if you are deploying to a custom domain
echo 'docs.klingl.me' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:klinglme/developer-documentation.git master:gh-pages

cd -
