#!/bin/sh

rm -rf dist
npm run build #--force
rsync -rv dist/* ossma@duck.o2switch.net:web/apps/poncon.fr/vhelio-spm/
