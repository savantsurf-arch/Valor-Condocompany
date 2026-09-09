@echo off
title Publicar Valor Condocompany na Vercel
echo =======================================================
echo   PUBLICANDO VALOR CONDOCOMPANY NA VERCEL (PRODUCAO)
echo =======================================================
echo.
echo Enviando arquivos estaticos atualizados diretamente para a Vercel...
echo.
npx vercel --prod
echo.
echo Concluido!
pause
