# Site Web Professionnel - Professeur de Français

## Description

Site web élégant et classique conçu pour mettre en valeur votre activité de professeur de français. Le design transmet le sérieux, la classe et la compétence tout en créant un effet d'envie chez les visiteurs.

## Caractéristiques

### Design et Style
- **Design classique et élégant** avec une palette de couleurs sophistiquée
- **Typographie raffinée** utilisant Playfair Display (serif) et Lato (sans-serif)
- **Palette de couleurs** : bleu marine (#2c3e50), or (#d4af37), beige doré (#c9a96e)
- **Animations fluides** et transitions subtiles
- **Design responsive** s'adaptant à tous les appareils

### Fonctionnalités
- ✅ **Effet parallaxe** sur la section hero avec votre photo en arrière-plan
- ✅ **Navigation fluide** avec smooth scrolling
- ✅ **Animations d'apparition** des éléments au scroll
- ✅ **Formulaire de contact** fonctionnel avec validation
- ✅ **Notifications** de succès/erreur
- ✅ **Navigation fixe** qui s'adapte au scroll

### Sections
1. **Hero/Accueil** - Section d'impact avec effet parallaxe
2. **À propos** - Présentation de votre expertise et passion
3. **Services** - Cours particuliers, ateliers d'écriture, FLE
4. **Méthodologie** - Votre approche pédagogique en 4 étapes
5. **Contact** - Formulaire et informations de contact

## Personnalisation avec votre photo

### Remplacer la photo de la section hero

Pour utiliser votre propre photo avec l'effet parallaxe, suivez ces étapes :

1. **Préparez votre photo** :
   - Format recommandé : JPG ou PNG
   - Résolution minimale : 1920x1080px
   - Orientation : paysage (la photo sera utilisée en arrière-plan)
   - Assurez-vous que vous êtes bien visible même avec un overlay sombre

2. **Ajoutez votre photo** :
   - Placez votre photo dans le dossier du site
   - Nommez-la `christelle-photo.jpg` (ou le nom de votre choix)

3. **Modifiez le CSS** :
   Dans le fichier `styles.css`, trouvez cette ligne (environ ligne 96) :
   ```css
   background-image: linear-gradient(rgba(44, 62, 80, 0.4), rgba(44, 62, 80, 0.4)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop');
   ```
   
   Remplacez-la par :
   ```css
   background-image: linear-gradient(rgba(44, 62, 80, 0.4), rgba(44, 62, 80, 0.4)), url('christelle-photo.jpg');
   ```

### Personnaliser les informations

#### Modifier les informations de contact
Dans `index.html`, cherchez la section contact et modifiez :
- L'adresse email
- Le numéro de téléphone  
- L'adresse/ville
- Les horaires

#### Modifier le contenu
- **Nom** : Remplacez "Christelle" par votre nom dans la navigation et le titre
- **Description** : Adaptez les textes de présentation à votre profil
- **Services** : Modifiez les services selon votre offre
- **Méthodologie** : Ajustez selon votre approche pédagogique

## Installation et utilisation

### Méthode simple (recommandée)
1. Téléchargez tous les fichiers dans un dossier
2. Remplacez l'image par votre photo (voir instructions ci-dessus)
3. Ouvrez `index.html` dans votre navigateur web
4. Personnalisez le contenu selon vos besoins

### Pour hébergement web
1. Uploadez tous les fichiers sur votre serveur web
2. Assurez-vous que `index.html` est dans le répertoire racine
3. Votre site sera accessible via votre nom de domaine

## Structure des fichiers

```
├── index.html          # Page principale
├── styles.css          # Styles et design
├── script.js           # Interactions et animations
├── README.md          # Ce fichier
└── [votre-photo].jpg  # Votre photo (à ajouter)
```

## Compatibilité

- ✅ Tous les navigateurs modernes (Chrome, Firefox, Safari, Edge)
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Optimisé pour les performances
- ✅ SEO-friendly

## Support et modifications

Le code est conçu pour être facilement modifiable. Les principales zones de personnalisation :

### Couleurs (dans styles.css)
```css
:root {
    --primary-color: #2c3e50;    /* Bleu marine principal */
    --gold: #d4af37;             /* Or/doré */
    --accent-color: #c9a96e;     /* Beige doré */
    /* Modifiez ces valeurs pour changer la palette */
}
```

### Polices
Les polices sont chargées depuis Google Fonts. Pour les changer, modifiez les liens dans le `<head>` de `index.html`.

### Animations
Toutes les animations peuvent être désactivées en commentant les sections correspondantes dans `script.js`.

---

**Conseil** : Testez votre site sur différents appareils pour vous assurer que votre photo et les textes s'affichent correctement sur mobile et tablette. 

# Site Web Professionnel - Christelle - Professeur de Français

Un site web élégant et moderne pour une professeure de français, alliant tradition et sophistication.

## ✨ Fonctionnalités

### 🎨 Design & Interface
- **Design classique et élégant** avec palette de couleurs raffinée (bleu marine, or, beige doré)
- **Effet parallaxe** sur la section hero avec photo personnelle
- **Animations fluides** et transitions sophistiquées
- **Design responsive** adapté à tous les écrans
- **Police cursive** "Dancing Script" pour le nom dans la navigation

### 📱 Sections du Site
- **Hero** : Bandeau d'accueil avec photo en parallaxe et présentation
- **À propos** : Photo personnelle et présentation détaillée avec signature animée
- **Services** : Cours particuliers, ateliers d'écriture, français langue étrangère
- **Méthodologie** : Approche pédagogique en 4 étapes
- **Témoignages** : Avis clients avec système d'étoiles
- **Citation littéraire** : Section inspirante avec citation de Marguerite Yourcenar
- **Contact** : Formulaire interactif avec validation et informations de contact

### 🖋️ Signature Manuscrite Animée
- **Animation Manim** : Signature "Christelle" générée avec Manim (Python)
- **Couleur dorée** : Adaptée à la palette du site (#d4af37)
- **Effet d'écriture** : Animation qui simule l'écriture manuscrite cursive
- **Formats multiples** : MP4 pour vidéo HD et GIF pour compatibilité
- **Intégration élégante** : Apparition en fondu dans la section À propos

### ✨ Effet d'Étoiles Three.js
- **Étoiles scintillantes** : 15 étoiles dorées qui apparaissent pendant l'écriture
- **Animation progressive** : Apparition en fondu sur 2 secondes
- **Scintillement réaliste** : Shaders GLSL pour effet de twinkle authentique
- **Rotation douce** : Le système d'étoiles tourne lentement
- **Disparition magique** : Fondu de sortie 1.5 secondes après la fin de l'écriture
- **Performance optimisée** : Utilise WebGL pour rendu fluide

### 🎬 Technologie d'Animation
- **Manim Community** : Bibliothèque Python pour animations mathématiques et artistiques
- **Police cursive** : "Snell Roundhand" pour un rendu manuscrit authentique
- **Optimisation web** : Conversion en formats légers pour chargement rapide
- **Fallback** : Image GIF pour les navigateurs sans support vidéo

## 📁 Structure des Fichiers

```
├── index.html              # Page principale
├── styles.css              # Styles et animations CSS
├── script.js               # Interactions JavaScript
├── images/                 # Images et animations
│   ├── moi.jpeg           # Photo profil (section À propos)
│   ├── moi2.jpeg          # Photo hero (arrière-plan parallaxe)
│   ├── signature_doree.mp4 # Animation signature (format vidéo)
│   └── signature_doree.gif # Animation signature (format GIF)
├── create_signature.py     # Script Manim pour signature
├── signature_simple.py     # Version alternative Manim
├── install_and_run.sh     # Installation automatique Manim
└── README_SIGNATURE.md    # Guide détaillé signatures
```

## 🚀 Installation et Utilisation

### Démarrage Rapide
1. Clonez ou téléchargez tous les fichiers
2. Placez vos photos dans le dossier `images/`
3. Ouvrez `index.html` dans votre navigateur
4. Personnalisez le contenu selon vos besoins

### Génération d'Animations (Optionnel)
Pour créer de nouvelles animations de signature :

```bash
# Installation automatique
./install_and_run.sh

# Ou installation manuelle
python -m venv manim_env
source manim_env/bin/activate  # Linux/Mac
pip install manim

# Génération signature
manim create_signature.py ChristelleSignatureText -pql
```

## 🎨 Personnalisation

### Couleurs Principales
- **Bleu marine** : `#2c3e50` (textes principaux)
- **Or** : `#d4af37` (accents et signature)
- **Beige doré** : `#c9a96e` (éléments décoratifs)
- **Blanc cassé** : `#fdfcf8` (arrière-plans)

### Photos Requises
1. **Photo hero** (`moi2.jpeg`) : Format paysage, haute résolution
2. **Photo profil** (`moi.jpeg`) : Format portrait, carré de préférence

### Informations de Contact
Modifiez dans `index.html` section contact :
- Adresse email : `Latelier.coh@gmail.com`
- Téléphone
- Localisation
- Horaires

## 🌟 Caractéristiques Techniques

- **HTML5** sémantique et accessible
- **CSS3** avec variables personnalisées et animations
- **JavaScript ES6+** pour interactions
- **Optimisation mobile** avec media queries
- **Performance** : images optimisées et chargement rapide
- **SEO** : structure et métadonnées optimisées

## 📞 Contact

Pour toute question ou personnalisation :
- Email : Latelier.coh@gmail.com
- Site web fonctionnel et prêt à l'emploi
- Documentation complète incluse

---

*Créé avec passion pour promouvoir l'excellence de l'enseignement du français* ✨ 