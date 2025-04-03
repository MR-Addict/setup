#! /bin/bash

# 1. Clone nvm to .nvm
if [ ! -d /home/$USER/.nvm ] ; then
  echo "[INFO] Cloning nvm to /home/$USER/.nvm..."
  git clone https://github.com/nvm-sh/nvm.git /home/$USER/.nvm &>/dev/null
  cd /home/$USER/.nvm
  git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)` &>/dev/null
else
  echo "[WARN] You have already cloned nvm to /home/$USER/.nvm!"
fi

# 2. Config nvm
if ! grep -q .nvm /home/$USER/.bashrc ; then
  echo "[INFO] Configurating nvm..."
  curl -sL $HOST/assets/nvm/nvm.sh | cat >> /home/$USER/.bashrc
  source /home/$USER/.bashrc
else
  echo "[WARN] You have already configurated nvm for $USER!"
fi
