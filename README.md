# Revstar Test
## REVSTAR INVENTORY APP
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
EL Repositorio cuenta con 3 secciones principales,

- views
- companies_api
- auth_api

Las apis esán desarrolladas teniendo como base la arquitectura de microservicios y Hexagonal.

Para poder desplegar las apis se debe realizar la instalación de los modulos con:

```sh
npm i
```

Para posterior desplegar las apis con:

```sh
npm run start
```

Para el frontend, igualmente se realiza la instalación de las dependencias y posterior se corre con:

```sh
npm run dev
```

NOTA: Se permitió en el repositorio los archivos .env, ya que si esto no es una buena práctica, para los fines de tests de la aplicación, estos fueron agregados.

Para poder revisar la documentación de las apis, estas cuentan con Swagger el cual puede ser ingresado de la siguiente forma:

Api auth -> http://localhost:3000/docs
Companie auth -> http://localhost:3001/docs

La revisión de la documentación de swagger no está condigurada en despliegue.