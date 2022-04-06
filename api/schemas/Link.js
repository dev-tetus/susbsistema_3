module.exports = {
  "description": "Enlace de relación",
  "title": "🔗 Link",
  "type": "object",
  "properties": {
    "href": {
      "description": "URL del enlace",
      "type": "string",
      "format": "uri",
      "x-faker": "internet.url"
    },
    "rel": {
      "description": "Relación del documento enlazado con el actual. Contiene una lista de tipos de enlaces separados por espacio.",
      "type": "string",
      "x-faker": "lorem.words"
    }
  },
  "example": {
    "href": "http://www.example.com/path/resource",
    "rel": "relAction1 relAction2"
  }
}