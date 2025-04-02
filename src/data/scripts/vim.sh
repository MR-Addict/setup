#! /bin/bash

# 1. Install Vim
if ! command -v vim &>/dev/null ; then
  echo "[INFO] Installing vim..."
  sudo apt-get install vim -y 1>/dev/null
else
  echo "[WARN] You have installed vim!"
fi

# 2. Config vim
if [ ! -f /home/$USER/.vimrc ] ; then
  echo "[INFO] Configurating vim for $USER..."
  wget -q $HOST/assets/vim/vimrc -O /home/$USER/.vimrc
else
  echo "[WARN] You have already configurated vim in $USER!"
fi

if ! sudo test -f /root/.vimrc; then
  echo "[INFO] Configurating vim for root..."
  sudo cp /home/$USER/.vimrc /root
else
  echo "[WARN] You have already configurated vim in root!"
fi

echo "[INFO] Configuting vim as your default editor..."
sudo update-alternatives --set editor /usr/bin/vim.basic 1>/dev/null
