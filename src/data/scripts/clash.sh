#! /bin/bash

# 1. Install clash
if ! clash -v &>/dev/null; then
  echo "[INFO] Installing clash..."
  wget -q $HOST/assets/clash/clash -O clash
  chmod u+x clash
  sudo mv clash /usr/local/bin
else
  echo "[WARN] You have already installed clash!"
fi

# 2. Config clash
if ! clash -t &>/dev/null; then
  echo "[INFO] Configurating clash..."
  [ ! -d /home/$USER/.config/clash ] && mkdir /home/$USER/.config/clash
  wget -q $HOST/assets/clash/Country.mmdb -O /home/$USER/.config/clash/Country.mmdb
else
  echo "[WARN] You have already configurated clash!"
fi

# 3. Config environment
echo "[INFO] Configurating proxy environment..."
if ! sudo grep -q http_proxy /etc/environment ; then
  sudo sed -i '$ a\\nexport http_proxy="http://127.0.0.1:7890"' /etc/environment
fi

if ! sudo grep -q https_proxy /etc/environment ; then
  sudo sed -i '$ a\export https_proxy="http://127.0.0.1:7890"' /etc/environment
fi

if ! sudo grep -q no_proxy /etc/environment ; then
  sudo sed -i '$ a\export no_proxy="localhost, 127.0.0.1, *edu.cn"' /etc/environment
fi

# 4. Config sudo
if ! sudo grep -q "http_proxy https_proxy no_proxy" /etc/sudoers ; then
  echo "[INFO] Configurating proxy for sudoers..."
  sudo sed -i '12 i Defaults env_keep+="http_proxy https_proxy no_proxy"' /etc/sudoers
else
  echo "[WARN] You have configurated proxy for sudoers!"
fi

# 5. Config apt
if [ ! -f /etc/apt/apt.conf.d/10proxy ] ; then
  echo "[INFO] Configurating proxy for apt..."
  echo 'Acquire::http::Proxy "http://127.0.0.1:7890/";' | sudo tee /etc/apt/apt.conf.d/10proxy &>/dev/null
else
  echo "[WARN] You have already configurated proxy for apt!"
fi

# 6. Add systemd service
if [ ! -f /etc/systemd/system/clash.service ] ; then
  echo "[INFO] Adding systemd service for clash..."
  curl -sL $HOST/assets/clash/clash.service | sudo tee /etc/systemd/system/clash.service &>/dev/null
  sudo systemctl enable clash.service &>/dev/null
  sudo systemctl start clash.service &>/dev/null
else
  echo "[WARN] You have already added systemd service for clash!"
fi
