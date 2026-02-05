# App del Clima – Chile

Aplicación web para la visualización del clima actual y el detalle semanal de distintas ciudades de Chile.

---

## Descripción de la App

La aplicación muestra el clima en al menos **10 localidades de Chile**.  
Desde la página principal se presenta una lista de ciudades en formato de cards, donde se visualiza la temperatura actual y el estado del clima. Al seleccionar una localidad, el usuario es redirigido a una vista de detalle con información más completa, como humedad, presión atmosférica, velocidad del viento y un pronóstico semanal.

El enfoque de la creación de esta aplicación fue practicar **estructura semántica en HTML, diseño responsivo con Bootstrap y manipulación del DOM mediante JavaScript**, además de la organización de estilos utilizando SASS y la metodología BEM.

---

## Tecnologías utilizadas

- HTML5 semántico  
- Bootstrap 5 (vía CDN)  
- JavaScript Vanilla (nativo)
- CSS compilado desde SASS  
- Metodología BEM  
- Git y GitHub para control de versiones  

---

## Metodología de estilos

Se utiliza la metodología **BEM (Bloque, Elemento, Modificador)** para mantener un CSS ordenado, escalable y fácil de mantener.

---

## Estructura SASS

- **base**: variables globales (colores, tipografía, espaciados)
- **layout**: estructura general (header, main, footer)
- **components**: componentes reutilizables (cards de clima, vistas de detalle)

---

##  Funcionalidades

- Listado de al menos 10 localidades de Chile.
- Visualización de:
  - Nombre de la ciudad
  - Temperatura actual
  - Estado del clima
- Navegación a la vista de detalle mediante parámetro `?id=`.
- Vista de detalle con:
  - Temperatura
  - Humedad
  - Presión atmosférica
  - Velocidad del viento
  - Pronóstico semanal generado dinámicamente
- Diseño responsivo 
- Navegación simple mediante navbar.

---

 Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir el archivo `clima.html` en el navegador.
3. Navegar seleccionando las distintas localidades.

---

## Repositorio

Repositorio público del proyecto:  
https://github.com/gissbarreracontreras/proyectos-.git

---

## Convención de commits

- `feat`: agregar estructura base y cards de localidades  
- `feat`: implementación de vista de detalle y pronóstico semanal  
- `style`: ajustes de estilos generales y hover de cards  
- `docs`: creación y actualización del README  

---

Aplicación  desarrollada por Gisselle Barrera
Bootcamp Frontend Trainee.


