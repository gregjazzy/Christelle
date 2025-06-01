from manim import *
import numpy as np

class ChristelleSignature(Scene):
    def construct(self):
        # Fond blanc pour contraste
        self.camera.background_color = WHITE
        
        # Créer un SVG path pour une écriture cursive authentique de "Christelle"
        # Points de contrôle pour une belle écriture cursive
        signature_path = """
        M 50 100 
        Q 40 80 60 90 
        Q 80 85 90 95 
        Q 100 105 110 95
        Q 120 85 130 95
        Q 140 105 150 95
        Q 160 85 170 95
        Q 180 105 190 95
        Q 200 85 210 95
        Q 220 105 230 95
        Q 240 85 250 100
        """
        
        # Créer la signature avec VMobject pour un contrôle total
        signature = VMobject()
        signature.set_points_as_corners([
            [-3, 0.5, 0], [-2.5, 0.8, 0], [-2, 0.3, 0], [-1.5, 0.6, 0],
            [-1, 0.2, 0], [-0.5, 0.7, 0], [0, 0.1, 0], [0.5, 0.5, 0],
            [1, 0.0, 0], [1.5, 0.4, 0], [2, -0.1, 0], [2.5, 0.3, 0], [3, 0, 0]
        ])
        signature.make_smooth()
        signature.set_stroke(color="#2c3e50", width=4)
        
        # Ajouter des flourish (fioritures) pour la majuscule "C"
        flourish = VMobject()
        flourish.set_points_as_corners([
            [-3.5, 1, 0], [-3.2, 1.2, 0], [-2.8, 0.9, 0], [-2.5, 0.8, 0]
        ])
        flourish.make_smooth()
        flourish.set_stroke(color="#2c3e50", width=3)
        
        # Créer le groupe complet
        full_signature = VGroup(flourish, signature)
        full_signature.move_to(ORIGIN)
        
        # Animation d'écriture progressive avec Create
        self.play(
            Create(flourish, run_time=1.5, rate_func=smooth),  # Majuscule d'abord
        )
        
        self.play(
            Create(signature, run_time=3.5, rate_func=linear),  # Puis le reste
        )
        
        # Effet de plume qui se retire
        pen_dot = Dot(color="#2c3e50", radius=0.08)
        pen_dot.move_to(signature.get_end())
        
        self.play(
            FadeIn(pen_dot, scale=0.5),
            run_time=0.3
        )
        
        self.play(
            pen_dot.animate.shift(DOWN * 0.3 + RIGHT * 0.2).fade(1),
            run_time=0.8
        )
        
        # Maintenir la signature
        self.wait(1)

# Version avec texte si l'approche SVG ne fonctionne pas
class ChristelleSignatureText(Scene):
    def construct(self):
        # Configuration pour fond transparent
        self.camera.background_color = "#00000000"  # Fond transparent
        
        # Utiliser une police cursive système avec la couleur dorée du site
        signature = Text(
            "Christelle", 
            font="Snell Roundhand",  # Police cursive MacOS
            font_size=90,
            color="#d4af37",  # Couleur dorée du site
            stroke_width=1.5,
            stroke_color="#c9a96e"  # Beige doré plus foncé pour le contour
        ).move_to(ORIGIN)
        
        # Animation d'écriture lettre par lettre
        self.play(
            Write(signature, run_time=4, rate_func=smooth),
        )
        
        # Effet de plume finale avec couleur dorée
        pen_trail = Line(
            start=signature.get_right(),
            end=signature.get_right() + RIGHT * 0.5 + DOWN * 0.2,
            stroke_width=3,
            stroke_color="#d4af37"  # Couleur dorée
        )
        
        self.play(
            Create(pen_trail, run_time=0.8, rate_func=smooth)
        )
        
        self.play(
            FadeOut(pen_trail, run_time=0.5)
        )
        
        self.wait(1)

if __name__ == "__main__":
    print("🖋️  Animation de signature manuscrite créée !")
    print("Exécutez: manim create_signature.py ChristelleSignatureText -pql") 