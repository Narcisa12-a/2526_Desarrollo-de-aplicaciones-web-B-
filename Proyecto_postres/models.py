import sqlite3

class Producto:
    def __init__(self, id, nombre, cantidad, precio):
        self.id = id
        self.nombre = nombre
        self.cantidad = cantidad
        self.precio = precio

    def to_tuple(self):
        return (self.nombre, self.cantidad, self.precio)


 class Inventario:
    def __init__(self):
        self.productos = {}  # diccionario {id: Producto}

    def conectar(self):
        return sqlite3.connect("database.db")

    def crear_tabla(self):
        conn = self.conectar()
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS productos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT,
                cantidad INTEGER,
                precio REAL
            )
        """)
        conn.commit()
        conn.close()
        
    def agregar_producto(self, producto):
        conn = self.conectar()
        cursor = conn.cursor()
        cursor.execute("INSERT INTO productos (nombre, cantidad, precio) VALUES (?, ?, ?)",
producto.to_tuple())
        conn.commit()
        conn.close()

    def obtener_productos(self):
        conn = self.conectar()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM productos")
        datos = cursor.fetchall()
        conn.close()
        return datos

    def eliminar_producto(self, id):
        conn = self.conectar()
        cursor = conn.cursor()
        cursor.execute("DELETE FROM productos WHERE id=?", (id,))
        conn.commit()
        conn.close()