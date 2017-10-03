/**
 * KingTable 2.0.0
 * Italian locale file.
 * https://github.com/RobertoPrevato/KingTable
 *
 * Copyright 2017, Roberto Prevato
 * https://robertoprevato.github.io
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function () {

  if (typeof KingTable == "undefined") {
    var message = "KingTable library is not defined. For further details: https://github.com/RobertoPrevato/KingTable/wiki/Errors#39";
    throw new Error(message);
  }

  KingTable.regional.es = {
    "goToDetails": "Ir al detalle",
    "sortOptions": "Opciones de ordenacion",
    "searchSortingRules": "Durante una busqueda, ordenar por relevancia.",
    "advancedFilters": "Filtros avanzados",
    "sortModes": {
      "simple": "Simple (una propiedad)",
      "complex": "Complejo (varias propiedades)"
    },
    "viewsType": {
      "table": "Tabla",
      "gallery": "Galeria"
    },
    "exportFormats": {
      "csv": "Csv",
      "json": "Json",
      "xml": "Xml"
    },
    "columns": "Columnas",
    "export": "Exportar",
    "view": "Ver",
    "views": "Vistas",
    "loading": "Cargando datos",
    "noData": "Sin datos a mostrar",
    "page": "Pagina",
    "resultsPerPage": "Resultados por página",
    "results": "Resultados",
    "of": "de",
    "firstPage": "Primera página",
    "lastPage": "Ultima página",
    "prevPage": "Página siguiente",
    "nextPage": "Página anterior",
    "refresh": "Refrescar",
    "fetchTime": "Datos recuperados a las:",
    "anchorTime": "Datos a:",
    "sortAscendingBy": "Ordenación por {{name}} ascendente",
    "sortDescendingBy": "Ordenación por {{name}} descendientes",
    "errorFetchingData": "Se ha encontrado un error durante la carga de la información."
  };
})();