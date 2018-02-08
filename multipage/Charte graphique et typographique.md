# Village n°1 Site Multipages : Charte graphique et typographique



## Logo (utiliser image logo tel qu'il est au format png ce sera plus facile)

### Logo - Mot village

font: Lato;
font-size: 36px;
weight: ExtraBold;
color: 004BA3;

### Logo - Mot Entreprise

font: Lato;
font-size: 36px;
weight: ExtraBold;
color: 004BA3;
text-transform: uppercase;

### Logo-Rond arrière-plan
width: 69px;
height: 69px;
background-color:#F2F2F2

---------------------------------------------------------------

## Menu principal

### Liens menu principal

font : Lato
font-weight: bold;
font-size: 16px;
line-height: 150%;
color: #333333;
text-decoration: none;
text-transform: uppercase;

## Liens menu principal selectionné 

a:hover
font : Lato
font-weight: bold;
font-size: 16px;
color: #FFCE66;
text-decoration: none;
text-transform: uppercase;

## Séparateur menu principal

color: #E0E0E0;
weight: 2px;
align: center;

---------------------------------------------------------------

## Menu secondaire

### Liens menu secondaire

font : Lato
font-weight: Semibold;
font-size: 16px;
line-height: 150%;
color: ##979797; (soit #333333 à 50% d'opacité)
text-decoration: none;
text-transform: uppercase;

### Liens menu secondaire selectionné

font : Lato
font-weight: Semibold;
font-size: 16px;
line-height: 150%;
color: ##333333;
text-decoration: none;
text-transform: uppercase;

+ Apparition d'un rectangle jaune au début du texte du lien selectionné (div avec un z-index et une dimension établie positionnéee en absolue
color: #FFCE66; 
position: absolute;
height: à définir selon élément;
width: à définir selon élément;

### Menu secondaire lorsqu'il se trouve dans le corps du texte (cfr page2 maquette Figma)

#### Items non selectionnés

font : Lato
font-weight: Semibold;
font-size: 16px;
line-height: 150%;
color: ##333333;
text-decoration: none;
text-transform: uppercase;

#### Items sélectionnés

Attention pas de rectangle jaune dans ce cas

font : Lato
font-weight: Semibold;
font-size: 16px;
line-height: 150%;
color: #FFCE66;
text-decoration: none;
text-transform: uppercase;
text-align: left;



-------------------------------------------

## Titres

### Titre H1

font: Open Sans;
font-weight: Semibold;
font-size: 64px;
color: #333333;
text-align: left;
text-transform: uppercase;

+ Apparition d'un rectangle jaune au début du titre (div avec un z-index et une dimension établie positionnéee en absolue.
color: #FFCE66; 
position: absolute;
height: à définir selon élément;
width: à définir selon élément;


### Titre H2

font: Open Sans;
font-weight: Semibold;
font-size: 48px;
color: #333333;
text-align: left;

+ Apparition d'un rectangle jaune au début du titre (div avec un z-index et une dimension établie positionnéee en absolue.
color: #FFCE66; 
position: absolute;
height: à définir selon élément;
width: à définir selon élément;

### Titre H2 (numéroté)

font: Open Sans;
font-weight: Semibold;
font-size: 22px;
color: #333333;
text-align: left;

+ Apparition d'un rectangle jaune dépassant la longeur du texte et décallé vers le bas(div avec un z-index et une dimension établie positionnéee en absolue.
color: FFCE66; 
position: absolute;
height: à définir selon élément;
width: à définir selon élément;

ou

border-bottom: 12px solid #FFCE66;
padding-bottom: 2px;

ou 

p {
  line-height: 1.6; 
}
.underline {
   text-decoration: none; 
   position: relative; 
 }   

.underline:after {
    position: absolute;
    height: 1px;
    margin: 0 auto;
    content: '';
    left: 0;
    right: 0;
    width: 90%;
    color: #000;
    background-color: red;
    left: 0;
    bottom: -3px; /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
}
-------------------------------------------
## Contenu texte

### intro ou chapeau

font: Lato;
font-weight: Semibold Italic;
font-size: 16px;
color: #333333;
line-height: 160%;
text-align: left;

### Corps du texte, liste à puces, liste numérotées

font: Lato;
font-weight: Regular;
font-size: 16px;
color: #333333;
line-height: 160%;
text-align: left;

-------------------------------------------
## Séparateur horizontal (ligne jaune hr ou div?)

color: #FFCE66;
height: 2px;
width: 435px;

-------------------------------------------









