# 🎬 Génération de la Signature "Christelle" avec Manim

## 📋 Prérequis

1. **Python 3.8+** installé sur votre système
2. **pip** pour l'installation des packages

## 🚀 Installation et Utilisation

### Méthode 1 : Script Automatique (Recommandé)

```bash
# Lancer le script automatique
./install_and_run.sh
```

### Méthode 2 : Installation Manuelle

```bash
# 1. Créer un environnement virtuel
python3 -m venv manim_env
source manim_env/bin/activate  # Sur Mac/Linux
# ou
manim_env\Scripts\activate     # Sur Windows

# 2. Installer Manim
pip install manim

# 3. Générer l'animation
manim signature_simple.py ChristelleSignature -pql
```

## 📁 Fichiers Générés

L'animation sera créée dans :
```
media/videos/1080p60/ChristelleSignature.mp4
```

## 🎯 Intégration dans le Site Web

### Option 1 : Vidéo MP4

```html
<div class="signature-container">
    <video autoplay muted loop playsinline class="signature-video">
        <source src="ChristelleSignature.mp4" type="video/mp4">
    </video>
</div>
```

### Option 2 : Convertir en GIF (optionnel)

```bash
# Si vous préférez un GIF
ffmpeg -i ChristelleSignature.mp4 -vf "fps=30,scale=400:-1" signature.gif
```

## 🎨 Personnalisation

Pour modifier l'animation, éditez `signature_simple.py` :

- **Couleur** : Changez `color="#d4af37"` 
- **Taille** : Modifiez `font_size=72`
- **Durée** : Ajustez `run_time=3`
- **Position** : Changez `to_edge(LEFT, buff=1)`

## 🔧 CSS pour l'Intégration

```css
.signature-video {
    width: 300px;
    height: auto;
    opacity: 0;
    transition: opacity 1s ease-out;
}

.signature-container.animate .signature-video {
    opacity: 1;
}
```

## 📝 Avantages de Manim

✅ **Animation fluide** : Rendu vectoriel haute qualité  
✅ **Personnalisation totale** : Contrôle de chaque aspect  
✅ **Format web-friendly** : MP4 optimisé pour le web  
✅ **Fond transparent** : Intégration parfaite  
✅ **Qualité professionnelle** : Même outil que 3Blue1Brown

## 🆘 Dépannage

**Erreur "command not found"** :
- Vérifiez que Python 3 est installé
- Activez l'environnement virtuel

**Police manquante** :
- Manim utilisera une police par défaut
- Pour Dancing Script : installez-la sur votre système

**Qualité vidéo** :
- Basse qualité : `-ql` 
- Haute qualité : `-qh`
- 4K : `-qk`

## 🎯 Résultat Final

Vous obtiendrez une magnifique animation où "Christelle" s'écrit progressivement en or, avec un effet de lueur finale - parfait pour votre site de professeur de français ! 