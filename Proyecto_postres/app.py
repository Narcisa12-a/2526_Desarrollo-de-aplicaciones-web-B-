from flask import Flask

app = Flask(__name__)

# Ruta principal
@app.route("/")
def inicio():
    return "Bienvenido a Cat Cake 🐱🍰 | Tienda Online de Postres Artesanales"

# Ruta dinámica para cliente
@app.route("/cliente/<nombre>")
def cliente(nombre):
    return f"Hola {nombre}, gracias por visitar Cat Cake. Tu pedido está en proceso."

# Ruta dinámica para postre
@app.route("/postre/<nombre>")
def postre(nombre):
    return f"Postre seleccionado: {nombre} 🧁 | Disponible en Cat Cake."
    if __name__ == "__main__":
        app.run(debug=True)

#Semana 10
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
      
 #Semana 11      
from flask import Flask, render_template, request, redirect
from models import Inventario, Producto

app = Flask(__name__)
inventario = Inventario()
inventario.crear_tabla()

@app.route("/")
def inicio():
    return render_template("index.html")

@app.route("/inventario")
def ver_inventario():
    productos = inventario.obtener_productos()
    return render_template("inventario.html", productos=productos)

@app.route("/agregar", methods=["GET", "POST"])
def agregar():
    if request.method == "POST":
        nombre = request.form["nombre"]
        cantidad = int(request.form["cantidad"])
        precio = float(request.form["precio"])
        nuevo = Producto(None, nombre, cantidad, precio)
        inventario.agregar_producto(nuevo)
        return redirect("/inventario")

    return render_template("agregar.html")

@app.route("/eliminar/<int:id>")
def eliminar(id):
    inventario.eliminar_producto(id)
    return redirect("/inventario")

@app.route("/editar/<int:id>", methods=["GET","POST"])
def editar(id):

    producto = obtener_producto(id)

    if request.method == "POST":
        nombre = request.form["nombre"]
        cantidad = request.form["cantidad"]
        precio = request.form["precio"]
        actualizar_producto(id, nombre, cantidad, precio)
        return redirect("/productos")

    return render_template("editar.html", producto=producto)
if __name__ == "__main__":
    app.run(debug=True)