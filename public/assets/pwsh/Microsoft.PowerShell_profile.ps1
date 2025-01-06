# Function
function la_fun { Get-ChildItem -Force }
function git_clean_fun { git restore . ; git clean -f }
function docker_clean_fun { docker system prune -a -f }

# Set Alias
Set-Alias -Name vim -Value nvim
Set-Alias -Name ll -Value Get-ChildItem
Set-Alias -Name la -Value la_fun
Set-Alias -Name htop -Value ntop
Set-Alias -Name ifconfig -Value ipconfig
Set-Alias -Name git-clean -Value git_clean_fun
Set-Alias -Name docker-clean -Value docker_clean_fun

# Oh-My-Posh
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/amro.omp.json" | Invoke-Expression

# Enviroments
$env:TF_ENABLE_ONEDNN_OPTS=0
$env:TF_CPP_MIN_LOG_LEVEL=1