rm -rf dist
rm -rf coverage
rm -rf storybook-static
#bash postinstall.sh
#yarn
yarn test
yarn build
yarn build-storybook
