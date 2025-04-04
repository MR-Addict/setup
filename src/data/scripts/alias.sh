#! /bin/bash

# Config alias
if [ ! -f /home/$USER/.bash_aliases ] ; then
  echo "[INFO] Configurating alias for $USER..."
  wget -q $HOST/assets/alias/bash_aliases -O /home/$USER/.bash_aliases
else
  echo "[WARN] You have already configurate alias in $USER!"
fi

if ! sudo test -f /root/.bash_aliases; then
  echo "[INFO] Configurating alias for root..."
  sudo cp /home/$USER/.bash_aliases /root
else
  echo "[WARN] You have already configurate alias in root!"
fi
