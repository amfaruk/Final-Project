export const sectors = {
  airport: {
    fields: [
      { name: "TA_Nm", label: "Airport Name", type: "text" },
      { name: "TA_Tp", label: "Airport Type", type: "text" },
      { name: "TA_Vol", label: "Volume", type: "number" },
    ],
    geometry: "Point",
  },

  electric_tower: {
    fields: [
      { name: "East", label: "East", type: "number" },
      { name: "North", label: "North", type: "number" },
      { name: "Elevation", label: "Elevation", type: "number" },
      { name: "Barcode", label: "Barcode", type: "text" },
    ],
    geometry: "Point",
  },

  asphalt: {
    fields: [
      { name: "roadcode", label: "Road Code", type: "text" },
      { name: "linkname", label: "Road Name", type: "text" },
      { name: "region", label: "Region", type: "text" },
      { name: "linklength", label: "Length (km)", type: "number" },
    ],
    geometry: "LineString",
  },

  power_line_132: {
    fields: [
      { name: "voltage", label: "Voltage", type: "text" },
      { name: "source_file", label: "Source File", type: "text" },
    ],
    geometry: "LineString",
  },

  railway: {
    fields: [
      { name: "length_m", label: "Length", type: "number" },
      { name: "phase", label: "Phase", type: "number" },
    ],
    geometry: "LineString",
  },

  telecom: {
    fields: [
      { name: "site_name", label: "Site Name", type: "text" },
      { name: "operator", label: "Operator", type: "text" },
      { name: "technology", label: "Technology", type: "text" },
    ],
    geometry: "Point",
  },

  sub_station: {
    fields: [
      { name: "name", label: "Station Name", type: "text" },
      { name: "type", label: "Type", type: "text" },
      { name: "kv", label: "KV", type: "text" },
    ],
    geometry: "Point",
  },

  transformer: {
    fields: [
      { name: "description", label: "Description", type: "text" },
      { name: "transform_type", label: "Type", type: "text" },
    ],
    geometry: "Point",
  },

  power_plants: {
    fields: [
      { name: "name", label: "Plant Name", type: "text" },
      { name: "capacity_mw", label: "Capacity", type: "number" },
      { name: "type", label: "Type", type: "text" },
    ],
    geometry: "Point",
  },

  roads: {
    fields: [
      { name: "road_name", label: "Road Name", type: "text" },
      { name: "length_km", label: "Length", type: "number" },
      { name: "region", label: "Region", type: "text" },
    ],
    geometry: "LineString",
  },

  railway_substation: {
    fields: [
      { name: "station_name", label: "Station Name", type: "text" },
      { name: "urban_population", label: "Population", type: "number" },
    ],
    geometry: "Point",
  },

  mv_lines: {
    fields: [
      { name: "mv_id", label: "MV ID", type: "text" },
      { name: "source_file", label: "Source File", type: "text" },
    ],
    geometry: "LineString",
  },

  infrastructure: {
    fields: [],
    geometry: "Polygon",
  },

  infrastructure_3d: {
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "type", label: "Type", type: "text" },
    ],
    geometry: "Polygon",
  },

  power_lines_230: {
    fields: [{ name: "voltage", label: "Voltage", type: "text" }],
    geometry: "LineString",
  },

  power_lines_400: {
    fields: [{ name: "voltage", label: "Voltage", type: "text" }],
    geometry: "LineString",
  },

  power_lines_500: {
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "length_km", label: "Length", type: "number" },
    ],
    geometry: "LineString",
  },
};