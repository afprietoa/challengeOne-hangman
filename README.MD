# Universo

- El conjunto S representa el repertorio de palabras del juego que contiene n cadenas de texto ({S1,S2,S3,...,Sn})
- El conjunto E representa los estados durante la ahorca que contiene m números de enteros ({E1,E2,E3,...,Em})

Existen 3 estados principales G (Ganado), P (Perdido),I (Inicial) que pertenecen al conjunto E. Para saber cuan cerca el estado está a la ahorca se define un criterio de ordenación w como el orden descendente  de numeros enteros donde 8 es ganado y 1 es perdido. Criterio que se  evalua en la función de proximidad PROXw(x) retornando el siguiente estado más cernano a la ahorca de X.

# Configuración

la configuración nos da los elementos del juego, por lo que si la configuración es guardada es posible reanudar el juego en cualquier momento

## Elementos del juego

- La cadena que se va a adivinar representa el subconjunto S que contiene las letras Sk que conforman la palabra a  adivinar.
- El estado actual a la ahorca representa el elememento Ex que pertenece al conjunto E
- Los caracteres adivinadas de cada intento son representadas por el conjunto K , si x pertenece a K entonces x es una letra de Sk
- los caracteres errados de cada intento son representados por el conjunto L, si x pertenece a L entonces x no es una letra de Sk

El conjunto de configuraciones se representa con R

Ejemplo

S = {"alura"}
E = {1,2,3,4,5,6,7,8}
Prox(X) = X-1

Sk= {"A","L","U","R","A"}
Ex = ...
K = {"A", "L"}
L= {"B","J","K","C"}