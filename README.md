# Youtubeapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## INICIO DEL PROYECTO - YoutubeApp

	Recursos:
		- https://developers.google.com/youtube/v3/docs/
		- https://console.developers.google.com/cloud-resource-manager
		- https://console.developers.google.com/apis/dashboard?project=youtube-app-188012
		- https://console.developers.google.com/apis/credentials/key/185?project=youtube-app-188012

1. Crear el proyecto
	- ng new youtubeapp

2. Ingresar al primer recurso y hacer clic en la opción `Consola de API`
	- Se abrira el segundo recurso

3. Hacer clic en `Crear Proyecto` 
	- Ingresar el nombre del nuevo proyecto `Youtube-App`
	- Hacer clic en el boton `Crear`

4. Dirigirse al tercer recurso haciendo clic en `Google APIs`

5. Hacer clic en la opción `Biblioteca`
 	- Filtrar por `Youtube`
	- Seleccionar la opción `Youtube Data API v3`
	- Hacer clic en `Habilitar`

5. Hacer clic en la opción `Credenciales`
	- Hacer clic en el botón `Crear Credenciales`
	- Hacer clic en la opción `Clave de API` 
	- Guardar la clave de API: `AIzaSyAtedwHHBW7t6ywRgj3VE_wjA_sk52rXuQ`

6. Dirigirse al tercer recurso haciendo clic en `Restringir Clave`
	- Ingresar un nombre `Youtube-App`
	- Seleccionar la opción `URL de referencia HTTP(sitios web)`
	- Ingresar la URL de referencia `http://localhost:4200`
	- Hacer clic en el boton `Guardar`

7. Instalar Bootstrap en el proyecto `index.html`

## COMPONENTES DE LA APLICACIÓN DE YOUTUBE

	Recursos:
		- https://getbootstrap.com/docs/4.0/components/navbar/#brand

1. Crear los siguientes directorios: `components`, `services` y `pipes`

2. Crear el componente `home` 
	- ng g c components/home -is

3. Crear el componente `navbar`
	- ng g c components/navbar -is

4. Crear un servicio
	- ng g s services/youtube

5. Importar el servicio al modulo y añadirlo en providers

6. Añadir el navbar del primer recurso en la vista del componente `navbar`
	- Añadir el selector del componente `navbar` en la vista principal

7. Añadir el selector del componente `home` en la vista principal

8. Añadir un nuevo estilo (clase) al fichero `styles.css`

## OBTENER LA LISTA DE REPRODUCCIÓN 'UPLOADS' (FAVORITOS)

	Recursos:
		- https://developers.google.com/youtube/v3/docs/channels/list
		- https://www.youtube.com/user/diego2106/playlists
		- https://developers.google.com/youtube/v3/docs/playlistItems/list

1. Ingresar al primer recurso, probar el API ingresando los siguientes datos:
	- `part` : `contentDetails`
	- `id` : `UCuaPTYj15JSkETGnEseaFFg` (Segundo Recurso)
	- Hacer clic en el boton `Execute`
	- Copiar el atributo `uploads` del resultado : `LLfM5rGQDqT6U3OmEYD-QV2Q`

2. Ingresar al tercer resurso, probar el API ingresando los siguientes datos:
	- `part` : `snippet`
	- `maxResults` : `10`
	- `playlistId` : `LLfM5rGQDqT6U3OmEYD-QV2Q`

3. Codear el servicio `youtube`
	- Añadir las propiedades `youtubeUrl` y `apikey`
	- Importar el modulo `HTTP` e inyectarlo en el constructor

4. Importar el modulo `HttpModule` en el modulo principal y añadirlo en `imports`

5. Importar el modulo `rxjs/Rx` en el servicio

6. Importar el modulo `URLSearchParams` en el servicio

7. Codear la funcion `getVideos` en el servicio

8. Codear el componente `home`
	- Importar el servicio `YoutubeService`
	- Inyectar el servicio en el constructor
	- LLamar a la funcion `getVideos` desde el constructor

9. Observar que la consola imprime un objeto
	- Guardar la propiedad `nextPageToken` : `CAoQAA`

10. Extraer el snippet de cada `item` y almacenarlo en un arreglo llamado `videos`

## CREAR LA INTERFAZ DE LOS VIDEOS DEL CANAL

	Recursos: 
		- https://getbootstrap.com/docs/4.0/components/card/#card-columns
		- https://getbootstrap.com/docs/4.0/components/modal/#live-demo
		- https://getbootstrap.com/docs/4.0/components/modal/#via-javascript

1. Copiar el codigo de la primera tarjeta del primer recurso y pegarlo en la vista del componente `home`

2. Codear la vista con el arreglo llamado `videos`
	- Clase `btn-block` : El boton sera del ancho de la tarjeta
	- `videos.length > 0` no se mostrara si no se tiene al menos un item el arreglo `videos`

~~~
Cuando la persona haga clic en el boton VER VIDEO, abrir el Modal
~~~

3. Codear la vista del componente `home`, añadir un modal (tercer recurso)
	- Controlar la salida, eliminar lo sgte: `data-dismiss="modal"`

4. Añadir los siguientes codigos al componente `home` para llamar al modal
	- declare var $:any;
	- $('#exampleModal').modal();







