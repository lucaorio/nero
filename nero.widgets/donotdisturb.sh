#!/bin/bash
# requires https://github.com/sindresorhus/do-not-disturb-cli
source ~/.nvm/nvm.sh
status=${NVM_BIN}/bin/node ${NVM_BIN}/do-not-disturb status
echo $status