# Algoritmo de Matching por Similitud Musical (Tendefy)

## Índice

- [Motivación](#motivación)
- [1. Función de decaimiento exponencial](#1-función-de-decaimiento-exponencial)
- [2. Coeficiente de afinidad individual (media geométrica)](#2-coeficiente-de-afinidad-individual-media-geométrica)
- [3. Agregación y normalización](#3-agregación-y-normalización)
- [4. Interpretación del modelo](#4-interpretación-del-modelo)
- [Referencia rápida](#referencia-rápida)

---

## Motivación

El enfoque tradicional para medir la afinidad entre dos usuarios consiste en calcular la intersección plana de sus conjuntos de datos ($A \cap B$). Este método trata a todos los elementos por igual, ignorando que los primeros puestos de un ranking representan una preferencia sustancialmente más fuerte que los últimos.

Para capturar esta asimetría y el orden de prioridades, este modelo implementa un sistema de **pesos exponenciales** combinado con **medias geométricas** para la ponderación de coincidencias.

---

## 1. Función de decaimiento exponencial

Cada artista recibe un peso matemático en función de su posición $x$ dentro del ranking personal del usuario (restringido al Top 50 devuelto por la API de Spotify):

$$
f(x) = n^{x-1} \quad \text{donde } 0 < n < 1
$$

El artista en la posición 1 recibe el peso máximo: $f(1) = n^0 = 1$. A medida que la posición desciende, el peso disminuye exponencialmente.

### Configuración del parámetro ($n = 0.98$)

Durante la fase de pruebas preliminares, un valor de $n = 0.90$ penalizaba excesivamente las posiciones bajas (el puesto 50 aportaba menos del 1% del peso máximo), anulando coincidencias que cualitativamente eran relevantes.

Con $n = 0.98$ se mantiene la jerarquía de las posiciones altas sin invisibilizar por completo los gustos de rango medio-bajo.

**Matriz de decaimiento ($n = 0.98$):**

| Posición | Peso $f(x)$ |
|:--------:|:-----------:|
| 1        | 1.000       |
| 10       | 0.834       |
| 25       | 0.616       |
| 50       | 0.372       |

---

## 2. Coeficiente de afinidad individual (media geométrica)

Cuando dos usuarios ($A$ y $B$) comparten un mismo artista $k$, la contribución de esa coincidencia al score global no es lineal. Se calcula utilizando la **media geométrica** de sus respectivos pesos:

$$
\text{score}_k = \sqrt{f(x_A) \cdot f(x_B)}
$$

$$
\text{score}_k = \sqrt{0.98^{x_A - 1} \cdot 0.98^{x_B - 1}} = 0.98^{\frac{x_A + x_B - 2}{2}}
$$

### Justificación de la media geométrica

La media geométrica actúa como un **penalizador natural de asimetrías severas**. Si un artista es el #1 para el Usuario A, pero el #50 para el Usuario B, la media geométrica amortigua el resultado hacia un valor moderado. Esto previene que una coincidencia casual o periférica infle artificialmente el índice de compatibilidad global.

---

## 3. Agregación y normalización

La afinidad bruta total se obtiene mediante la sumatoria de los scores individuales sobre el conjunto de intersección de artistas compartidos ($K = A \cap B$):

$$
S_{\text{total}} = \sum_{k \in K} \sqrt{f(x_{A,k}) \cdot f(x_{B,k})}
$$

Para transformar esta métrica en un valor porcentual comprensible, se normaliza contra el **máximo teórico almacenable**. Este escenario ideal se produce únicamente cuando ambos usuarios comparten exactamente los mismos 50 artistas en las mismas posiciones jerárquicas:

$$
M_{\text{teórico}} = \sum_{i=1}^{50} 0.98^{i-1} = \frac{1 - 0.98^{50}}{1 - 0.98} \approx 31.79
$$

$$
\text{Afinidad Corregida } (\%) = \left( \frac{S_{\text{total}}}{M_{\text{teórico}}} \right) \times 100
$$

---

## 4. Interpretación del modelo

El porcentaje resultante **no** expresa una correlación directa de "cantidad de artistas compartidos", sino el grado de alineación dentro del espacio de preferencias del sistema.

Debido a la rigidez matemática del máximo teórico (basado en vectores idénticos), valores en el rango del **30%** representan niveles de afinidad sumamente significativos en entornos reales, indicando un solapamiento denso en las estructuras de distribución media y alta de los rankings analizados.

---

## Referencia rápida

```
n            = 0.98                    // factor de decaimiento
f(x)         = n^(x-1)                 // peso por posición
score_k      = sqrt(f(xA) * f(xB))     // afinidad por artista compartido
S_total      = Σ score_k               // suma sobre intersección K = A ∩ B
M_teorico    = (1 - n^50) / (1 - n)    // ≈ 31.79
Afinidad (%) = (S_total / M_teorico) * 100
```
