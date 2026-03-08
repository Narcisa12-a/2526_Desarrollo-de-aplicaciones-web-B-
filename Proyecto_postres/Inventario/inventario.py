import json
import csv

# Rutas donde se guardarán los archivos
ruta_txt = "inventario/data/datos.txt"
ruta_json = "inventario/data/datos.json"
ruta_csv = "inventario/data/datos.csv"


# Guardar producto en archivo TXT
def guardar_txt(producto):

    # "a" significa agregar al final del archivo
    with open(ruta_txt, "a") as archivo:

        archivo.write(
            f"{producto.id},{producto.nombre},{producto.precio},{producto.cantidad}\n"
                                    )
# Guardar producto en JSON
def guardar_json(producto):

    datos = producto.to_dict()

    try:
        # Intentar leer datos existentes
        with open(ruta_json, "r") as archivo:
            contenido = json.load(archivo)
    except:
        # Si el archivo está vacío o no existe
        contenido = []
    contenido.append(datos)
    with open(ruta_json, "w") as archivo:
        json.dump(contenido, archivo, indent=4)

# Guardar producto en CSV
def guardar_csv(producto):

    with open(ruta_csv, "a", newline="") as archivo:

        writer = csv.writer(archivo)
        writer.writerow([
            producto.id,
            producto.nombre,
            producto.precio,
            producto.cantidad
        ])