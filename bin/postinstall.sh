# as tested sources reside in foreign module, they would be copied into src/custom-element
# to be treated as internal by test coverage
#npm link @epa-wg/custom-element

cd src/custom-element
mkdir demo >/dev/null
mkdir ide >/dev/null

rm *.d.ts >/dev/null
rm *.js >/dev/null
pwd
cp ../../node_modules/@epa-wg/custom-element/*.d.ts .
cp ../../node_modules/@epa-wg/custom-element/*.js .
cp ../../node_modules/@epa-wg/custom-element/index.html index.html
cp -r ../../node_modules/@epa-wg/custom-element/demo/* demo/
cp -r ../../node_modules/@epa-wg/custom-element/ide/* ide/

cp -r demo ../../public