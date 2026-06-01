/**
 * Copia dist/index.html para cada rota do SPA, para que o GitHub Pages
 * sirva HTTP 200 em acessos diretos (ex: helpfy.com.br/privacidade).
 * Sem isso, o GitHub Pages retorna 404 para qualquer rota além da raiz.
 */
import { copyFileSync, mkdirSync } from "fs";
import { join } from "path";

const distDir = "dist";

// Liste aqui todas as rotas definidas no App.tsx (exceto "/")
const routes = ["privacidade", "termos-de-uso", "cookies", "lgpd"];

for (const route of routes) {
  const dir = join(distDir, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(join(distDir, "index.html"), join(dir, "index.html"));
  console.log(`✓ ${distDir}/${route}/index.html`);
}

console.log("Rotas SPA copiadas com sucesso.");
