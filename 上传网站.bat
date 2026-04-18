@echo off
echo ==============================================
echo          GitHub Pages 一键自动上传
echo              作者：MrWangCK
echo ==============================================
echo.

cd /d "C:\programming\0\wcky"

echo 正在添加文件...
git add .

echo 正在提交更新...
git commit -m "自动更新：%date% %time%"

echo 正在推送到 GitHub...
git push

echo.
echo ==============================================
echo              ✅ 上传完成！
echo        等待 1-3 分钟网站自动更新
echo ==============================================
echo.

pause