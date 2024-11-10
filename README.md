
# Lahicimos Frontend

Este repositorio contiene la interfaz de usuario de **La hicimos?**, una página web diseñada para los oyentes del podcast **Hoy Trasnoche**. La aplicación permite a los usuarios buscar las películas de las que se habla en el podcast, y en cada detalle de película se muestra en qué episodio se mencionó, junto con la descripción del capítulo, la fecha y un enlace para escuchar el episodio.

## Tecnologías Utilizadas

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Vite**: Empaquetador rápido con soporte de HMR para desarrollo.
- **ESLint**: Configuración de reglas para asegurar calidad de código.

## Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/LukeLabruna/lahicimos-front.git
   cd lahicimos-front
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Backend

La aplicación se conecta con un backend desarrollado específicamente para este proyecto, el cual gestiona la base de datos de películas y episodios de **Hoy Trasnoche**.
- **Repositorio**: https://github.com/LukeLabruna/lahicimos-back
- **Deploy**: https://lahicimos-back.onrender.com/

## Deploy

La aplicación cuenta con un despliegue en línea, permitiendo el acceso a los usuarios sin necesidad de instalar dependencias localmente.
- **Deploy**: https://lahicimos-front.vercel.app/ 

## Características

- **Búsqueda de Películas**: Encuentra rápidamente películas mencionadas en el podcast.
- **Detalles de Episodio**: Muestra en qué capítulo se comentó cada película, con su descripción, fecha y enlace para escuchar.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Genera los archivos para producción.
- `npm run lint`: Ejecuta ESLint para mantener el código limpio.

---

© 2024 - Lahicimos
