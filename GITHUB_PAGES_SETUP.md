# Deploy no GitHub Pages - helpfy.com.br

## ✅ Configurações Feitas

- [x] `vite.config.ts` - configurado com `base: "/"`
- [x] `.github/workflows/deploy.yml` - workflow de deploy automático
- [x] `CNAME` - já existe com `helpfy.com.br`

## 📋 Próximos Passos

### 1. Fazer Push do Código para GitHub

```bash
# Adicione os arquivos modificados
git add .

# Faça commit
git commit -m "chore: configure GitHub Pages deployment"

# Faça push para main/master
git push origin main
# ou
git push origin master
```

### 2. Configurar Repositório no GitHub

1. Vá para **Settings** do seu repositório no GitHub
2. Clique em **Pages** (na seção Code and automation)
3. Em "Build and deployment":
   - **Source**: Selecione "GitHub Actions"
4. O workflow vai fazer o deploy automaticamente!

### 3. Configurar DNS (Domínio helpfy.com.br)

1. Vá ao seu provedor de DNS (onde registrou o domínio)
2. Configure os registros para apontar para GitHub Pages:

**Opção A - CNAME (Recomendado):**
```
CNAME: helpfy.com.br → seu-usuario.github.io
```

**Opção B - A Records:**
```
A: 185.199.108.153
A: 185.199.109.153
A: 185.199.110.153
A: 185.199.111.153
```

**IMPORTANTE:** Remova qualquer CNAME ou A record antigo do domínio.

### 4. Aguardar Propagação DNS

- Pode levar alguns minutos até algumas horas
- Verifique com: `nslookup helpfy.com.br`

## 🚀 Como Usar Daqui em Diante

Toda vez que fizer push para `main` ou `master`:
1. O GitHub Actions vai executar automaticamente
2. Vai fazer build do projeto
3. Vai fazer deploy para GitHub Pages
4. Site fica disponível em `helpfy.com.br`

## 📝 Build Local

Se quiser testar antes de fazer push:

```bash
bun run build
bun run preview
```

## ❌ Troubleshooting

Se o deploy não funcionar:

1. Verifique se o workflow rodou: **Actions** > **Deploy to GitHub Pages**
2. Confira se o CNAME foi criado corretamente no repo settings
3. Limpe cache do navegador (Ctrl+Shift+Del / Cmd+Shift+Del)
4. Aguarde a propagação de DNS
