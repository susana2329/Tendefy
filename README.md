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
git clone [https://github.com/tobitchz/Tendefy.git](https://github.com/tobitchz/Tendefy.git)
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
SPOTIFY_REDIRECT_URI=[http://127.0.0.1:3000/auth/spotify/callback](http://127.0.0.1:3000/auth/spotify/callback)

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

<details>
<summary><b>Haz clic aquí para ver la documentación detallada del algoritmo matemático de Matching</b></summary>

# Algoritmo de Matching por Similitud Musical (Tendefy)

El enfoque tradicional para medir afinidad entre dos usuarios consiste en calcular la intersección plana de sus conjuntos de datos ($A \cap B$). Sin embargo, este método trata a todos los elementos por igual, ignorando que los primeros puestos de un ranking representan una preferencia sustancialmente más fuerte que los últimos.

Para capturar esta asimetría y el orden de prioridades, este modelo implementa un sistema de **pesos exponenciales** combinado con **medias geométricas** para la ponderación de coincidencias.

## 1. Función de Decaimiento Exponencial

Cada artista recibe un peso matemático ponderado en función de su posición $x$ dentro del ranking personal del usuario (restringido a los Top 50 de la API de Spotify):

$$f(x) = n^{x-1} \quad \text{donde } 0 < n < 1$$

El artista en la posición 1 recibe el peso máximo: $f(1) = n^0 = 1$. A medida que la posición desciende, el peso disminuye exponencialmente.

* **Configuración del parámetro ($n = 0.98$):** Durante la fase de pruebas preliminares, un valor de $n = 0.90$ penalizaba excesivamente las posiciones bajas (el puesto 50 aportaba menos del 1% del peso máximo), anulando coincidencias que cualitativamente eran relevantes. Seteando $n = 0.98$ se logra mantener la jerarquía de las posiciones altas sin invisibilizar por completo los gustos de rango medio-bajo.

### Matriz de Decaimiento ($n = 0.98$)
* **Posición 1:** $1.000$
* **Posición 10:** $0.834$
* **Posición 25:** $0.616$
* **Posición 50:** $0.372$

---

## 2. Coeficiente de Afinidad Individual (Media Geométrica)

Cuando dos usuarios ($A$ y $B$) comparten un mismo artista $k$, la contribución de esa coincidencia al score global no es lineal. Se calcula utilizando la **media geométrica** de sus respectivos pesos:

$$\text{score}_k = \sqrt{f(x_A) \cdot f(x_B)}$$

$$\text{score}_k = \sqrt{0.98^{x_A - 1} \cdot 0.98^{x_B - 1}} = 0.98^{\frac{x_A + x_B - 2}{2}}$$

### Justificación de la Media Geométrica
La media geométrica actúa como un penalizador natural de asimetrías severas. Si un artista es el #1 para el Usuario A, pero el #50 para el Usuario B, la media geométrica amortigua el resultado hacia un valor moderado. Esto previene que una coincidencia casual o periférica infle artificialmente el índice de compatibilidad global.

---

### 3. Agregación y Normalización

La afinidad bruta total se obtiene mediante la sumatoria de los scores individuales sobre el conjunto de intersección de artistas compartidos ($K = A \cap B$):

$$S_{\text{total}} = \sum_{k \in K} \sqrt{f(x_{A,k}) \cdot f(x_{B,k})}$$

Para transformar esta métrica en un valor porcentual comprensible, se normaliza contra el **máximo teórico almacenable**. Este escenario ideal se produce únicamente cuando ambos usuarios comparten exactamente los mismos 50 artistas en las mismas posiciones jerárquicas:

$$M_{\text{teorico}} = \sum_{i=1}^{50} 0.98^{i-1} = \frac{1 - 0.98^{50}}{1 - 0.98} \approx 31.79$$

$$\text{Afinidad Corregida } (\%) = \left( \frac{S_{\text{total}}}{M_{\text{teorico}}} \right) \times 100$$

### 4. Interpretación del Modelo

El porcentaje resultante no expresa una correlación directa de "cantidad de artistas compartidos", sino el grado de alineación dentro del espacio vectorial de preferencias del sistema. 

Debido a la rigidez matemática del máximo teórico (basado en vectores idénticos), **valores en el rango del 30% representan niveles de afinidad sumamente significativos en entornos reales**, indicando un solapamiento denso en las estructuras de distribución media y alta de los rankings analizados.

</details>
