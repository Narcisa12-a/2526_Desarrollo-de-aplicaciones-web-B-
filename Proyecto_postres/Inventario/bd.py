from flask_sqlalchemy import SQLAlchemy

# Crear objeto base de SQLAlchemy
db = SQLAlchemy()


# Modelo de base de datos
# Representa la tabla productos en SQLite

class ProductoDB(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    precio = db.Column(db.Float)
    cantidad = db.Column(db.Integer)