export const CLASSES = [
  {
    id: 1,
    name: "IfcBuildingElement",
    //ifcEntities: [
    children: [
      {
        id: 2,
        name: "IfcWall",
        // components: [
        children: [
          {
            id: 3,
            name: "Wand",
            information: [
              { name: "TypenName", content: "" },
              { name: "Tragfunktion", content: "" },
              { name: "Material/Baustoff", content: "" },
              { name: "Lage (innen/außen)", content: "" },
              { name: "Feuerwiderstandsklasse", content: "" },
              { name: "Ausführung", content: "" },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "IfcSlab",
        children: [
          {
            id: 5,
            name: "Geschossdecke",
            information: [
              { name: "TypenName", content: "" },
              { name: "Flächeneignung", content: "" },
              { name: "Tragfunktion", content: "" },
              { name: "Material/Baustoff", content: "" },
              { name: "Feuerwiderstandsklasse", content: "" },
              { name: "Dicke", content: "" },
              { name: "Oberflächenqualität", content: "" },
            ],
          },
        ],
      },
      {
        id: 6,
        name: "IfcWindow",
        children: [
          {
            id: 7,
            name: "Fenster",
            information: [
              { name: "TypenName", content: "" },
              { name: "Rohbaubreite", content: "" },
              { name: "Rohbauhöhe", content: "" },
              { name: "Brüstungshöhe", content: "" },
              { name: "Fensternummer", content: "" },
              { name: "Feuerwiderstandsklasse", content: "" },
            ],
          },
          {
            id: 8,
            name: "Fenster 2",
            information: [
              { name: "TypenName", content: "" },
              { name: "Rohbaubreite", content: "" },
              { name: "Rohbauhöhe", content: "" },
              { name: "Brüstungshöhe", content: "" },
              { name: "Fensternummer", content: "" },
              { name: "Feuerwiderstandsklasse", content: "" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "IfcSpacialStructureElement",
    children: [
      {
        id: 10,
        name: "IfcSpace",
        children: [
          {
            id: 11,
            name: "Raum",
            information: [
              { name: "Typenname", content: "" },
              { name: "Raumbegrenzung", content: "" },
              { name: "Raumbegrenzungsflächen", content: "" },
              { name: "Raumnummer", content: "" },
            ],
          },
        ],
      },
    ],
  },
];
