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

#Semana 12
from flask import Flask, render_template, request, redirect

# Importar clases del sistema
from inventario.productos import Producto
from inventario.inventario import guardar_txt, guardar_json, guardar_csv
from inventario.bd import db, ProductoDB

# Crear aplicación Flask
app = Flask(__name__)

# Configurar base de datos SQLite
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///catcake.db"

# Inicializar base de datos
db.init_app(app)

# Ruta principal
@app.route("/")
def inicio():

    # Muestra la página principal
    return render_template("index.html")

# Ruta para ver productos
@app.route("/productos")
def productos():

    # Consultar todos los productos de la base de datos
    lista = ProductoDB.query.all()
    return render_template("productos.html", productos=lista)

# Ruta para agregar producto
@app.route("/agregar", methods=["GET", "POST"])
def agregar():

    if request.method == "POST":

        # Obtener datos del formulario
        nombre = request.form["nombre"]
        precio = request.form["precio"]
        cantidad = request.form["cantidad"]
        # Crear objeto Producto
        producto = Producto(0, nombre, precio, cantidad)
        # Guardar en archivos
        guardar_txt(producto)
        guardar_json(producto)
        guardar_csv(producto)
        # Guardar en base de datos
        nuevo = ProductoDB(
            nombre=nombre,
            precio=precio,
            cantidad=cantidad
        )
        db.session.add(nuevo)
        db.session.commit()
        return redirect("/productos")

    return render_template("producto_form.html")

# Ejecutar aplicación
if __name__ == "__main__":

    with app.app_context():
            db.create_all()

    app.run(debug=True)