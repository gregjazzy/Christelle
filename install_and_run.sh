#!/bin/bash

echo "🎬 Installation et génération de la signature Christelle avec Manim"
echo "=============================================================="

# Vérifier si Python est installé
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 n'est pas installé. Veuillez l'installer d'abord."
    exit 1
fi

# Créer un environnement virtuel
echo "📦 Création de l'environnement virtuel..."
python3 -m venv manim_env
source manim_env/bin/activate

# Installer Manim
echo "⬇️  Installation de Manim..."
pip install manim

# Vérifier si Dancing Script est disponible
echo "🔤 Vérification des polices..."
pip install fonttools

# Générer l'animation
echo "🎨 Génération de l'animation de signature..."
python3 create_signature.py

echo ""
echo "✨ Animation générée avec succès !"
echo "📁 Le fichier vidéo se trouve dans : media/videos/1080p60/ChristelleSignature.mp4"
echo "📋 Copiez ce fichier dans votre dossier web pour l'utiliser."
echo ""
echo "Pour intégrer dans votre site web, utilisez :"
echo '<video autoplay muted loop>'
echo '  <source src="ChristelleSignature.mp4" type="video/mp4">'
echo '</video>' 