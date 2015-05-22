 Descripcion de la POC

1- Recibo un id por get
2- le suma +1 al click total de ese id
3- redirige la pagina a donde corresponde
4- cada tanto baja esos datos a db


Como Instalar aplicacion

1. Ejecutar 'npm install' para obtener las dependencias
2. Ejecutar 'node bin/www' para iniciar el servicio

Una vez que la app esta levantada, acceder a localhost:3000/links?id=<ID>

Si el query param ID no es provisto, retorna mensaje de error
Si el ID no existe en la base, avisa que no existe con un 200
Si el ID existe, redirije a la URL almacenada en el field url en la base

Prerequisitos

Instalar MongoDB y NodeJS previamente!