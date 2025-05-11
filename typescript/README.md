## Requisitos

* Node.js 22 ou superior - Conferir a versão: node -v

## Como rodar o projeto baixado

## Sequencia para criar o projeto

Criar o arquivo package.
```
npm init
```

Instalar o TypeScript como uma dependência de desenvolvimento.
```
npm install --save-dev typescript
```

Criar o arquivo tsconfig.json, executar quando o typescript foi instalado somente no projeto.
```
npx tsc --init
```

Compilar os arquivos TypeScript.
```
npx tsc
```

Executar o arquivo JavaScript compilado.
```
node dist/index.js
```