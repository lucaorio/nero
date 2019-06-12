#!/bin/sh
# this script is part of Nero -> https://github.com/lucaorio/nero
# https://github.com/MusicPlayerDaemon/mpc (via ncmpcpp)
song=$(/usr/local/bin/mpc status | head -1 | tail -1)
status=$(/usr/local/bin/mpc status | head -2 | tail -1 | awk -F'[][]' '{print $2}')
echo "{$status}{$song}"
