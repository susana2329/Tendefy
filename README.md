# Tendefy

App de matching musical utilizando la API de Spotify.

## Requisitos Previos

* **Node.js** (v18 o superior)
* Una cuenta en **[Spotify Developer Dashboard](https://developer.spotify.com/)**
* Una instancia de **MongoDB** (Local o Atlas)

---

## Instalación y Despliegue

```bash
# Clonar el repositorio e ingresar al backend
git clone https://github.com/tobitchz/Tendefy.git
cd Tendefy/backend

# Instalar dependencias
npm install

# Levantar el servidor en desarrollo
npm run dev
```

## Configuración del Entorno

Para que el backend funcione localmente, se deben configurar las siguientes variables de entorno. Puedes crear un archivo `.env` en la raíz de la carpeta `backend/` y definir estos campos con tus credenciales:

```ini
# Configuración del Servidor
PORT=3000
JWT_SECRET=tu_secreto_jwt

# API de Spotify
SPOTIFY_CLIENT_ID=tu_client_id
SPOTIFY_CLIENT_SECRET=tu_client_secret
SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/auth/spotify/callback

# Base de Datos (MongoDB)
USER_DB_MONGO_DB=
PASSWORD_DB_MONGO_DB=
APP_NAME_MONGO_DB=
NAME_DB_MONGO_DB=

# Servidor de Correos (SendGrid)
SENDGRID_API_KEY=

# Almacenamiento de Multimedia (Cloudinary)
CLAUD_NAME=
CLAUD_API_KEY=
CLAUD_API_SECRET=
```

## Core Engineering

El sistema de matching no utiliza una intersección plana de artistas compartidos, sino un modelo de **pesos exponenciales combinado con medias geométricas**, que pondera tanto la posición de cada artista en el ranking de cada usuario como la simetría entre ambos rankings.

📄 La documentación matemática completa del algoritmo (función de decaimiento, coeficiente de afinidad, normalización e interpretación de resultados) está disponible en:

**[`/ALGORITMO_MATCHING.md`](/ALGORITMO_MATCHING.md)**
