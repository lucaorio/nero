#!/bin/sh
# this script is part of Nero -> https://github.com/lucaorio/nero
# requires https://github.com/arybczak/ncmpcpp (mpc based)
# or https://github.com/MusicPlayerDaemon/mpc
song=$(/usr/local/bin/mpc status | head -1 | tail -1)
status=$(/usr/local/bin/mpc status | head -2 | tail -1 | awk -F'[][]' '{print $2}')
echo "{$status}{$song}"
