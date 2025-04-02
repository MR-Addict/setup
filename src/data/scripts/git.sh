#! /bin/bash

# 1. Install git
if ! command -v git &>/dev/null ;then
  echo "[INFO] Installing git..."
  sudo apt-get install git -y 1>/dev/null
else
  echo "[WARN] You have already installed git!"
fi

# 2. Config git
echo "[INFO] Configurating git..."
git config --global user.name Cael
git config --global user.email MR-Addict@qq.com
git config --global init.defaultBranch main
