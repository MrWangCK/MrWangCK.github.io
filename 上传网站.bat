@echo off
chcp 65001 >nul
title GitHub Pages 一键自动上传

echo ========================================
echo GitHub Pages 一键自动上传脚本
echo ========================================

:: 配置你的仓库信息
set "REPO_NAME=MrWangCK.github.io"
set "GIT_URL=https://github.com/MrWangCK/MrWangCK.github.io.git"

:: 初始化Git（如果未初始化）
if not exist ".git" (
    git init
    git remote add origin %GIT_URL%
)

echo 正在添加文件...
git add .

echo 正在提交更新...
git commit -m "自动提交: %date% %time%"

echo 正在推送到 GitHub...
git pull origin main --rebase
git push -u origin main

echo ========================================
echo 上传完成！
echo ========================================

pause