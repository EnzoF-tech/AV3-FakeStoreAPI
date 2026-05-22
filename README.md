# AV3 Mobile - FakeStore API

Projeto Ionic 8 / Angular standalone com template Tabs para a avaliação de Desenvolvimento de aplicativo Mobile.

## Identificação

- Aluno: Enzo Fernandes de Oliveira
- Turma: ADS0301M
- Unidade: Bonsucesso
- Turno: Manhã
- API usada: https://fakestoreapi.com/products

## O que foi implementado

- Tab 1: Card de identificação com nome, turma, unidade, turno, palavra-chave e foto em `src/assets/foto-enzo.png`.
- Tab 2: Exibe produtos um por um com botões **Próximo** e **Anterior**. Os botões ficam desabilitados no fim e no início da lista.
- Tab 3: Botão para apresentar todos os produtos e, depois, botão para suprimir a lista da tela.
- Serviço `ProductService` consumindo a FakeStore API com `HttpClient` e armazenando os produtos em array de objetos.
- Uso de componentes Ionic: `IonCard`, `IonButton`, `IonInput`, `IonIcon`, `IonChip`, `IonBadge`, `IonTabs` e navegação com `routerDirection`.
- CSS Custom Properties em `src/theme/variables.scss`.

## Como rodar

1. Instale Node.js LTS e Ionic CLI:

```bash
npm install -g @ionic/cli
```

2. Instale as dependências:

```bash
npm install
```

3. Rode no navegador:

```bash
ionic serve
```

## Como gerar APK Android

```bash
ionic build
npx cap add android
npx cap copy android
npx cap open android
```

No Android Studio, clique em **Build > Build Bundle(s) / APK(s) > Build APK(s)**.
Depois instale o APK no smartphone Android para apresentar ao professor.

## O que ainda precisa ser preenchido por você

- Digitar a palavra-chave fornecida pelo professor na Tab 1 durante o laboratório.
- Criar um repositório no GitHub e subir esse código.
- Tirar prints reais das Tabs 1, 2 e 3 no emulador ou smartphone.
- Colocar o link do GitHub e os prints no documento PDF de entrega.

## Correção de navegação

Esta versão usa `href` nos botões das abas e desativa as animações do Ionic em `provideIonicAngular({ animated: false })` para evitar tela cinza/branca ao trocar de aba em alguns navegadores.

Para rodar no navegador, use:

```bash
npm start
```

A palavra-chave da Tab 1 já está fixa como **AV3**.
