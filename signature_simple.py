"""
Script Manim pour créer une animation d'écriture fluide de "Christelle"
Usage: manim signature_simple.py ChristelleSignature -pql
"""

try:
    from manim import *
except ImportError:
    print("❌ Manim n'est pas installé.")
    print("💡 Pour l'installer : pip install manim")
    print("📖 Documentation : https://docs.manim.community/")
    exit(1)

class ChristelleSignature(Scene):
    def construct(self):
        # Configuration pour fond transparent
        self.camera.background_color = WHITE
        
        # Créer un texte cursive élégant
        signature = Text(
            "Christelle", 
            font="Brush Script MT",  # Police cursive plus manuscrite
            font_size=100,
            color="#2c3e50",  # Bleu marine élégant
            stroke_width=1,
            stroke_color="#2c3e50"
        ).move_to(ORIGIN)
        
        # Créer une version avec effet d'encre
        ink_signature = Text(
            "Christelle", 
            font="Brush Script MT",
            font_size=100,
            color="#1a252f",  # Bleu plus foncé pour l'encre
            stroke_width=0.5,
            stroke_color="#1a252f"
        ).move_to(ORIGIN)
        
        # Animation d'écriture avec Create (trace progressive)
        self.play(
            Create(signature, run_time=4, rate_func=linear),
            lag_ratio=0.05  # Petite pause entre chaque partie
        )
        
        # Effet de brillance finale comme une plume qui se retire
        highlight = Line(
            start=signature.get_left() + LEFT * 0.5,
            end=signature.get_left() + LEFT * 0.5,
            stroke_width=8,
            stroke_color=WHITE,
            stroke_opacity=0.8
        )
        
        # Animation de la brillance qui traverse la signature
        self.play(
            highlight.animate.move_to(signature.get_right() + RIGHT * 0.5),
            run_time=1.2,
            rate_func=smooth
        )
        
        # Maintenir la signature visible
        self.wait(1)

# Instructions d'utilisation
if __name__ == "__main__":
    print("🎬 Pour générer l'animation :")
    print("1️⃣  manim signature_simple.py ChristelleSignature -pql")
    print("2️⃣  Le fichier sera dans media/videos/")
    print("3️⃣  Convertir en GIF si nécessaire :")
    print("    ffmpeg -i ChristelleSignature.mp4 signature.gif") 