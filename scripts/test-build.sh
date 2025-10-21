#!/bin/bash

echo "🚀 Iniciando verificación completa del build..."
echo "================================================"

# Verificar Node.js y pnpm
echo "📋 Verificando herramientas:"
echo "Node.js: $(node --version)"
echo "pnpm: $(pnpm --version)"
echo ""

# Limpiar cache
echo "🧹 Limpiando cache..."
rm -rf .next
rm -rf node_modules/.cache
echo "✅ Cache limpiado"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
pnpm install --frozen-lockfile
if [ $? -eq 0 ]; then
    echo "✅ Dependencias instaladas correctamente"
else
    echo "❌ Error instalando dependencias"
    exit 1
fi
echo ""

# Verificar TypeScript
echo "🔍 Verificando TypeScript..."
pnpm tsc --noEmit
if [ $? -eq 0 ]; then
    echo "✅ TypeScript sin errores"
else
    echo "❌ Errores de TypeScript encontrados"
    exit 1
fi
echo ""

# Ejecutar build
echo "🏗️ Ejecutando build de producción..."
pnpm build
if [ $? -eq 0 ]; then
    echo "✅ Build completado exitosamente"
else
    echo "❌ Error en el build"
    exit 1
fi
echo ""

# Verificar archivos generados
echo "📁 Verificando archivos generados:"
if [ -d ".next" ]; then
    echo "✅ Directorio .next creado"
    if [ -f ".next/BUILD_ID" ]; then
        echo "✅ BUILD_ID generado: $(cat .next/BUILD_ID)"
    fi
    if [ -d ".next/static" ]; then
        echo "✅ Assets estáticos generados"
    fi
else
    echo "❌ Directorio .next no encontrado"
    exit 1
fi
echo ""

echo "🎉 ¡Verificación completa exitosa!"
echo "El proyecto está listo para deployment."
