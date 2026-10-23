#!/usr/bin/env bash
# Inicializa el repositorio y crea el primer commit.
set -e
command -v git >/dev/null || { echo "Instala git primero: https://git-scm.com/downloads"; exit 1; }
[ -d .git ] || git init -b main
git add .
git commit -m "Primera versión: app de lectura a primera vista" || echo "Nada nuevo que guardar"
echo "Listo. Ahora: git remote add origin <URL> && git push -u origin main"
