#! /bin/bash

count="false"

# 1. Update grub timeout
if ! sudo grep -q GRUB_TIMEOUT=0 /etc/default/grub ;then
  echo "[INFO] Updating grub timeout..."
  sudo sed -i 's/GRUB_TIMEOUT=.*/GRUB_TIMEOUT=0/' /etc/default/grub
  count="true"
else
  echo "[WARN] You have already updated grub timeout!"
fi

# 2. Disable timeout adjust
lastLine=$( sudo tail -n 1 /etc/grub.d/30_os-prober )
if [ "$lastLine" = "adjust_timeout" ] ;then
  echo "[INFO] Disabling adjust timeout..."
  sudo sed -i '$ d' /etc/grub.d/30_os-prober
  sudo sed -i '$ a\#adjust_timeout' /etc/grub.d/30_os-prober
  count="true"
else
  echo "[WARN] You have disabled adjust timeout!"
fi

# 3. Update grub
if [ "$count" = "true" ] ;then
  echo "[INFO] Updating grub..."
  sudo update-grub &>/dev/null
else
  echo "[WARN] You dont't have to update grub!"
fi
