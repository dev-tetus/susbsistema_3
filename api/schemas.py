from database import db
from json import JSONEncoder
import datetime as dt

class Trabajo(db.Model):
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    VIN = db.Column(db.String(16), unique=True, nullable=False)
    nombre = db.Column(db.String(120), unique=False, nullable=False)
    descripcion=db.Column(db.String(120), unique=False, nullable=False)
    fechaInicio=db.Column(db.DateTime, nullable=True)
    estado=db.Column(db.Enum('creado','planificado','iniciado','terminado'), nullable=False)
    matricula = db.Column(db.String(8), nullable=True)
    urgente = db.Column(db.Boolean, nullable=True)

    def __repr__(self):
        return '"Id: {id}":"Nombre: {nombre}, descripcion: {descripcion}, VIN: {VIN}, estado: {estado}, fecha de inicio: {fechaInicio}, matricula: {matricula}, urgente: {urgente}"'.format(id=self.id, nombre=self.nombre, descripcion=self.descripcion, VIN=self.VIN,estado=self.estado,fechaInicio=self.fechaInicio,matricula=self.matricula,urgente=self.urgente)
        
    def __init__(self, params):
        self.VIN = params.get("VIN")
        self.nombre = params.get("nombre")
        self.descripcion=params.get("descripcion")
        self.estado=params.get("estado")
        self.fechaInicio=dt.datetime.strptime(params.get("fechaInicio"), '%d-%m-%Y')
        self.matricula=params.get("matricula")
        self.urgente=bool(params.get("urgente"))

    
