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

![alt text][nodejs]

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

![alt text][githubDownload]
![alt text][githubZip]

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
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "https://chatbot.firebaseio.com",
  projectId: "chatbot",
  storageBucket: "chatbot.appspot.com",
  messagingSenderId: "123456789012",
  appId: "appId"
});
```
Hay que reemplazar cada dato con los de tu proyecto. Para encontrarlos, ve a https://console.firebase.google.com (e inicia sesión de ser necesario).

![alt text][firebaseConsole]

Selecciona el proyecto cuya base de datos quieres asociar con la página.

![alt text][firebaseProject]

En la esquina superior izquierda, haz click en en símbolo del engrane y selecciona 'Project Settings'.

![alt text][firebaseSettings]

Ve hasta el final de la página, donde podrás ver una sección similar:

![alt text][firebaseAppInfo]

Cópiala y pégala para reemplazar la sección en `firebase.js`. Sobreescribe el archivo y ciérralo.

## Correr un servidor local para ver la página

Cambia de directorio al repo.

```
# windows
cd ruta\al\repo\chatbot-website
# unix
cd ruta/al/repo/chatbot-website
```

Corre el siguiente comando.

```
npm run serve
```

Cuando acabe de ejecutarse, aparecerá un mensaje con las direcciones en donde puedes ver la página:

```
DONE  Compiled successfully in 7508ms                4:18:55 PM

    
  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.1.79:8080/

  Note that the development build is not optimized.
  To create a production build, run yarn build.
```

En el navegador de tu preferencia, abre cualquiera de las dos direcciones que aparecen.

[nodejs]: https://github.com/is-bibih/chatbot-website/blob/master/images/g1-nodejs.png "Descarga de node.js"
[githubDownload]: https://github.com/is-bibih/chatbot-website/blob/master/images/g2-github-download.png "Descarga del repo desde github"
[githubZip]: https://github.com/is-bibih/chatbot-website/blob/master/images/g3-github-zip.png "Descarga del repo como .zip"
[firebaseConsole]: https://github.com/is-bibih/chatbot-website/blob/master/images/g4-firebase-console.png "Consola de Firebase"
[firebaseProject]: https://github.com/is-bibih/chatbot-website/blob/master/images/g5-firebase-project.png "Selección de proyecto de Firebase"
[firebaseSettings]: https://github.com/is-bibih/chatbot-website/blob/master/images/g6-firebase-settings.png "Configuración del proyecto"
[firebaseAppInfo]: https://github.com/is-bibih/chatbot-website/blob/master/images/g7-firebase-app-info.png "Información de la aplicación de Firebase"
