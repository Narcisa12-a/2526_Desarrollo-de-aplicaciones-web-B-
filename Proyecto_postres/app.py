from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def inicio():
    return render_template("index.html")

    @app.route("/about")
    def about():
        return render_template("about.html")

        @app.route("/productos")
        def productos():
            lista_productos = [
                    {"nombre": "Bolitas de chocolate", "precio": 1.00},
                            {"nombre": "Postre en vaso", "precio": 2.50}
                                ]
                                    return render_template("productos.html", productos=lista_productos)

                                    if __name__ == "__main__":
                                        app.run(debug=True)