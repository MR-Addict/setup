#! /bin/bash

# 1. Install powershell
if ! command -v pwsh &>/dev/null ; then
  echo "[INFO] Installing powershell..."
  [! -d /home/$USER/Powershell ] && mkdir /home/$USER/Powershell
  wget -q https://github.com/PowerShell/PowerShell/releases/download/v7.2.5/powershell-7.2.5-linux-x64.tar.gz -O /home/$USER/Powershell/powershell.tar.gz
  tar -zxf /home/$USER/Powershell/powershell.tar.gz -C /home/$USER/Powershell
  sudo ln -sf /home/$USER/Powershell/pwsh /usr/bin/pwsh
else
  echo "[WARN] You have already installed powershell!"
fi

# 2. Config Powershell
if [ ! -f /home/$USER/.config/powershell/Microsoft.PowerShell_profile.ps1 ] ; then
  [ ! -d /home/$USER/.config/powershell ] && mkdir /home/$USER/.config/powershell
  wget -q $HOST/assets/pwsh/Microsoft.PowerShell_profile.ps1 -O /home/$USER/.config/powershell/Microsoft.PowerShell_profile.ps1
  if ! command -v oh-my-posh &>/dev/null ; then
    sed -i "$ a\# Init Oh-my-posh" /home/$USER/.config/powershell/Microsoft.PowerShell_profile.ps1
    sed -i "$ a\oh-my-posh --init --shell pwsh --config /home/$USER/.poshthemes/amro.omp.json | Invoke-Expression" /home/$USER/.config/powershell/Microsoft.PowerShell_profile.ps1
  fi
fi
