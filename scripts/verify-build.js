const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

console.log("🔍 Verificando configuración del proyecto...\n")

// Verificar archivos de configuración
const requiredFiles = [
  "package.json",
  "next.config.mjs",
  "tailwind.config.ts",
  "tsconfig.json",
  ".npmrc",
  "vercel.json",
]

console.log("📁 Verificando archivos de configuración:")
requiredFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - Existe`)
  } else {
    console.log(`❌ ${file} - Falta`)
  }
})

// Verificar package.json
console.log("\n📦 Verificando package.json:")
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
  console.log(`✅ Nombre: ${packageJson.name}`)
  console.log(`✅ Versión: ${packageJson.version}`)
  console.log(`✅ Package Manager: ${packageJson.packageManager || "No especificado"}`)
  console.log(`✅ Node Engine: ${packageJson.engines?.node || "No especificado"}`)
} catch (error) {
  console.log(`❌ Error leyendo package.json: ${error.message}`)
}

// Verificar dependencias críticas
console.log("\n🔧 Verificando dependencias críticas:")
const criticalDeps = ["next", "react", "react-dom", "tailwindcss"]
try {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"))
  criticalDeps.forEach((dep) => {
    if (packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]) {
      const version = packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep]
      console.log(`✅ ${dep}: ${version}`)
    } else {
      console.log(`❌ ${dep}: No encontrado`)
    }
  })
} catch (error) {
  console.log(`❌ Error verificando dependencias: ${error.message}`)
}

console.log("\n🏗️ Iniciando verificación de build local...\n")
