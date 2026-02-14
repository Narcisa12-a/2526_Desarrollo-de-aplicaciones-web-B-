from flask import Flask

app = Flask(__name__)

# Ruta principal
@app.route("/")
def inicio():
    return "Bienvenido a Cat Cake – Tienda Online de Postres Artesanales. 🐱🍰"

    # Ruta dinámica ejemplo cliente
    @app.route("/cliente/<nombre>")
    def cliente(nombre):
        return f"Hola {nombre}, gracias por visitar Cat Cake."

        # Ruta dinámica ejemplo producto
        @app.route("/postre/<nombre>")
        def postre(nombre):
            return f"Postre seleccionado: {nombre} – Disponible para pedido."

            if __name__ == "__main__":
                app.run(debug=True)