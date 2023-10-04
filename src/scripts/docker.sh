#! /bin/bash

# 1. Install docker
if ! command -v docker &>/dev/null ;then
  echo "[INFO] Installing docker..."
  sudo apt-get install docker.io -y 1>/dev/null
  sudo usermod -aG docker $USER
else
  echo "[WARN] You have already installed docker!"
fi

# 2. Config daemon.json for docker
if ! sudo test -f /etc/docker/daemon.json ;then
  echo "[INFO] Configurating docker daemon.json..."
  sudo wget -q $ORIGIN_URL/assets/docker/daemon.json -O /etc/docker/daemon.json
else
  echo "[WARN] You have already configurated daemon.json!"
fi

# 3. Install docker-compose
if ! command -v docker-compose &>/dev/null ;then
  echo "[INFO] Installing docker-compose..."
  wget -q https://github.com/docker/compose/releases/latest/download/docker-compose-linux-x86_64 -O docker-compose
  chmod +x docker-compose
  sudo mv docker-compose /usr/local/bin
else
  echo "[WARN] You have installed docker-compose!"
fi
