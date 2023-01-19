# Proyecto: Invoice App 🧾

👋🏻 Bienvenidx al Proyecto de [FrontEnd-Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl) desarrollado por la comunidad de Discord de [vamoacodear 👩🏻‍💻](https://www.twitch.tv/vamoacodear)

## Descripción

En este proyecto, construiremos una API con las tecnologias elegidas para devolver, guardar, actualizar o eliminar datos al frontend.

> Lucirá muy bien en tu portfolio 🎨

Lo que intetamos hacer con este proyecto es simular un espacio de trabajo.
Donde si bien no aplicamos al 100% metodologia Agile, ni marco Scrum, intentamos hacer lo posible considerando que es un grupo de trabajo interdiciplinario con diferentes usos horarios.

Para ello mediante GitHub Projects creamos y asignamos tareas, donde van cambiando de columna según su estado. Una vez realizada, el/la colaborador/a realiza un PR, se hace un Code Review y una vez que 2 aprobadores den el ok, recién ahí se mergea a Main.
De esta manera aprenderas cosas del día a día de un ambiente laboral!:

- Metodología Agile
- Marco Scrum
- PR
- Code Review
- Utilización de diferentes tecnologías que decidimos utilizar en el proyecto, como: Git, Github, Node, Express, TypeScript, ESLint, Prettier, Husky, entre otras!

## Estructura del proyecto
```
.
├── __test__
│   └── index.spec.ts
├── bin
|   ├── seed.ts
│   └── www.ts
├── prisma
│   ├── data.dto.ts
│   ├── data.json
│   └── schema.prisma
├── src
│   ├── apps
│   │   └── home
│   │       ├── controller.ts
│   │       ├── model.ts
│   │       └── routes.ts
│   ├── configs
│   │   ├── enviroments
│   │   │   └── config.env.ts
│   │   ├── types
│   │   │   └── types.d.ts
|   |   └── index.ts
│   └── server.ts
├── jest.config.js
├── commitlint.config.js
├── README.md
├── tsconfig.json
├── tsconfig.prod.json
├── package.json
├── package-lock.json
└── vercel.json

10 directories, 21 files

```
*Nota:* Si quieres agregar algún archivo que vaya a ser añadido en un script de node, agregarlo en la carpeta ```bin```

## Diseño

El equipo de diseño de Frontend Mentor (?) nos dejó un data.json con la información necesaria para modelar la base de datos. El archivo se encuentra en el canal de Discord [invoice-app.zip](https://discord.com/channels/916074182524174386/1063212906403082322/1063213368816701542)

## Clonar el repositorio

```
git clone https://github.com/nsdonato/back-invoices
```

## Permisos para contribuir

Debes estar en Discord y en el canal #🧾-invoice-app hilo "Usuarios GitHub" pedir que agreguemos tu usuario de GitHub al repositorio que quieras aportar, front o back.

## Extensiones

En el proyecto hay extensiones recomendadas en el archivo .vscode/extensions.json (no tenes que hacer nada), puede salirte el cartel o directamente podes ir a la pestaña de extensiones y buscarlas poniendo: `@recommended`

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Pre-Instalación

Utilizar el comando `nvm use`, esto verifica si hay un archivo `.nvmrc` en el proyecto y si no estas usando esa versión la setea. Si no la tenes instalada al final del comentario del package, te deja el comando para instalar la versión correspondiente en tu pc.

## Instalar dependencias:

```
npm install
```

## Ejecutar la aplicación

```
npm run start
```

## Variables de entorno local

Renombrar `.env.template` a `.env` y completar las variables de entorno para que te puedas conectar de manera local a la base de datos

## Endpoints

### Ejemplo GET

- `/api/invoice/:id` Obtener una factura especifica

## Ayuda

Si tienes cualquier duda puedes preguntar en nuestro [Discord](https://discord.io/vamoacodear) canal #🧾-invoices-app

## Pull Request

> 🚨 Por favor utilizar el template de Pull Request para poder darle al code reviewer un mejor panorama de lo que va a revisar, gracias.

## Colaboradores

<a href="https://github.com/nsdonato/front-invoices/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nsdonato/front-invoices" />
</a>
