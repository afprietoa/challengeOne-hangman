# Universe

- The set S represents the repertoire of words of the game that contains n text strings ({S1,S2,S3,...,Sn})
- the set E represents the states during the hanging that contains m numbers of integers ({E1,E2,E3,...,Em})

There are 3 main states W (Won), L (Lost),I (Initial) that belong to the set E. To know how close the state is to hanging, a sort criterion is defined as descending order of integers where 8 is won and 1 is lost. Criterin that is evaluated in the proximity function PROXw(x) returning the next closest state to the hanging X.

# Configuration

The configuration gives us the elements of the game, so if the configuration is saved it is possible to resume the game at any time.

## Game elements

- the string to be guessed represents the subset SS that contains the letter SSx that make up the word to be gussed.
- The current hanging state represents the element Ex that belongs to the set E.
- The gussed characters of each attempt are represented by the set W , if x belongs to W then x is a letter of SS.
- The wronged characters of each attempt are represented by the set L, if x belongs to L then x is not a letter of SS.

### Ejemplo

S = {"alura"}
E = {1,2,3,4,5,6,7,8}
Prox(X) = X-1

SS= {"A","L","U","R","A"}
EX = ...
W = {"A", "L"}
L= {"B","J","K","C"}