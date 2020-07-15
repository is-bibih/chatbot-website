# chatbot-website
Plantilla para página web que muestra las interacciones con un chatbot usando Firebase.

A continuación se incluyen las instrucciones para hacer una copia de la página y conectarla a una base de datos de Firebase.

## Resumen
1. Instalar `node.js`
1. Instalar Vue CLI
1. Clonar el repositorio
1. Instalar dependencias con `npm`
1. Configurar la página
1. Correr un servidor local para ver la página

## Instalar `node.js`

Esto permite descargar las dependencias necesarias para el proyecto.

Para instalar `node.js`, ve a https://nodejs.org/en/download/ y descarga el instalador apropiado para tu sistema operativo. Se recomienda usar la versión LTS (long-term support), que es la que está seleccionada por defecto.

foto

Una vez que lo hayas descargado, ejecuta el archivo para correr el instalador.

Como alternativa a este proceso, puedes encontrar descargas para administradores de paquetes en https://nodejs.org/en/download/package-manager/ (recomendado para Linux).

Para comprobar la instalación de `node.js`, abre una terminal y ejecuta el siguiente comando.

```
node -v
```

Esto debería de mostrar la versión de `node.js` instalada.

## Instalar Vue CLI

A continuación, es necesario instalar Vue CLI. Para esto, corre el siguiente comando. Necesitarás privilegios de administrador.

```
npm install -g @vue/cli
```

Para comprobar que se instaló correctamente, puedes ver la versión instalada:

```
vue --version
```

## Clonar el repositorio

Si tienes `git`, ejecuta el siguiente comando en el directorio donde quieres que se guarde el repo.

```
git clone https://github.com/is-bibih/chatbot-website.git
```

Si no tienes `git`, puedes descargar un zip del repo:

foto

Extráelo en el directorio de tu preferencia.

## Instalar dependencias con `npm`

Abre una terminal y cambia de directorio al repo que acabas de descargar.

```
# windows
cd ruta\al\repo\chatbot-website
# unix
cd ruta/al/repo/chatbot-website
```

Instala las dependencias:

```
npm install
```

## Configurar la página

En el editor de texto de tu preferencia, abre el archivo `chatbot-website/src/firebase.js`. Busca la sección de la línea 3 a la 11:

```javascript
const app = initializeApp({
  apiKey: "AIzaSyBChigHV8ZdXiE5RNz4BwpLPsc4UD3Mmyg",
  authDomain: "covid-19-bjmcqv.firebaseapp.com",
  databaseURL: "https://covid-19-bjmcqv.firebaseio.com",
  projectId: "covid-19-bjmcqv",
  storageBucket: "covid-19-bjmcqv.appspot.com",
  messagingSenderId: "859229292547",
  appId: "1:859229292547:web:09c455911406d0c5f9a636"
});
```
