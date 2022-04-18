const link = require('./Link')
module.exports = {
  "description": "Información de un trabajo",
  "title": "🔨 Trabajo",
  "type": "object",
  "properties": {
    "trabajo": {
      "type": "object",
      "required": [
        "nombre",
        "descripcion",
        "estado",
        "VIN"
      ],
      "properties": {
        "id": {
          "type": "integer",
          "format": "int32",
          "description": "Id trabajo",
          "readOnly": true
        },
        "VIN": {
          "description": "Número de identificación de 16 carácteres único del vehiculo gestionado por el subsistema_2",
          "type": "string",
          "format": "byte"
        },
        "nombre": {
          "description": "Nombre del trabajo",
          "type": "string",
          "format": "byte"
        },
        "descripcion": {
          "description": "Descripción del trabajo",
          "type": "string",
          "format": "byte"
        },
        "fechaInicio": {
          "description": "Indica la fecha de inicio del trabajo",
          "type": "string",
          "format": "date"
        },
        "estado": {
          "description": "Estado del trabajo de entre cuatro opciones",
          "type": "string",
          "enum": [
            "creado",
            "planificado",
            "iniciado",
            "terminado"
          ]
        },
        "matricula": {
          "description": "Número de matrícula del vehículo en el cual se va a realizar el trabajo",
          "type": "string",
          "format": "byte"
        },
        "urgente": {
          "description": "Dice si el trabajo es urgente",
          "type": "boolean",
          "default": false
        },
        "links": {
          "description": "Enlaces de relación",
          "readOnly": true,
          "type": "object",
          "properties": {
            "parent": link,
            "self": link
          }
        }
      }
    }
  }
}