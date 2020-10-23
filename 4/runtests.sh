#!/bin/sh

case "$(uname -s)" in

   Darwin)
      node ./dist/index.js < Test/1-in.json | diff - Test/1-out.json
     ;;

   Linux)
     /opt/rh/rh-nodejs10/root/usr/bin/node ./dist/index.js < Test/1-in.json | diff - Test/1-out.json
     ;;

   *)

esac