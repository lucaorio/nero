#!/bin/sh
# requires https://github.com/koekeishiya/chunkwm
id=$(/usr/local/bin/chunkc tiling::query --desktop id)
mode=$(/usr/local/bin/chunkc tiling::query --desktop mode)

case $id in
  "1") env="ter" ;;
  "2") env="gnr" ;;
  "3") env="dsn" ;;
  "4") env="cod" ;;
  "5") env="wrt" ;;
  "6") env="mus" ;;
  "7") env="com" ;;
  *) env="ukw" ;;
esac

case $mode in
  "bsp") lyt="bsp" ;;
  "monocle") lyt="mon" ;;
  "float") lyt="flt" ;;
  *) lyt="ukw" ;;
esac

echo "[0$id-$env]: $lyt"
