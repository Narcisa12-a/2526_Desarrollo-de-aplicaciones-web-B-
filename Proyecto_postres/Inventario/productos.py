# Clase Producto usando Programación Orientada a Objetos
# Representa un producto del inventario de la tienda Cat Cake

class Producto:

    # Constructor de la clase
    def __init__(self, id, nombre, precio, cantidad):
        self.id = id
        self.nombre = nombre
        self.precio = precio
        self.cantidad = cantidad

    # Convertir el objeto a diccionario
    # Esto permite guardarlo fácilmente en JSON
    def to_dict(self):

        return {
            "id": self.id,
            "nombre": self.nombre,
            "precio": self.precio,
            "cantidad": self.cantidad
        }