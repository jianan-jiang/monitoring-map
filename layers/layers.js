ol.proj.get("EPSG:28356").setExtent([330005.054606, 6250052.454066, 331050.110844, 6250852.020678]);
var wms_layers = [];
var lyr_Australia_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.nearmap.com/wms?REQUEST%3DGetCapabilities%26apikey%3DMjQ4OTEyNzgtZWFkMi00YTEzLThmNWQtOTczNmJiZmM5NjFk",
    attributions: '<a href=""></a>',
                              params: {
                                "LAYERS": "NearMap%5CAustralia",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Australia",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Australia_0, 1]);
        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_MonitoringMPE_2 = new ol.format.GeoJSON();
var features_MonitoringMPE_2 = format_MonitoringMPE_2.readFeatures(json_MonitoringMPE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28356'});
var jsonSource_MonitoringMPE_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MonitoringMPE_2.addFeatures(features_MonitoringMPE_2);var lyr_MonitoringMPE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MonitoringMPE_2, 
                style: style_MonitoringMPE_2,
                title: '<img src="styles/legend/MonitoringMPE_2.png" /> Monitoring MPE'
            });var format_SPE_3 = new ol.format.GeoJSON();
var features_SPE_3 = format_SPE_3.readFeatures(json_SPE_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28356'});
var jsonSource_SPE_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SPE_3.addFeatures(features_SPE_3);var lyr_SPE_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPE_3, 
                style: style_SPE_3,
                title: '<img src="styles/legend/SPE_3.png" /> SPE'
            });var format_Piezometer_4 = new ol.format.GeoJSON();
var features_Piezometer_4 = format_Piezometer_4.readFeatures(json_Piezometer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28356'});
var jsonSource_Piezometer_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Piezometer_4.addFeatures(features_Piezometer_4);var lyr_Piezometer_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Piezometer_4, 
                style: style_Piezometer_4,
                title: '<img src="styles/legend/Piezometer_4.png" /> Piezometer'
            });

lyr_Australia_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_MonitoringMPE_2.setVisible(true);lyr_SPE_3.setVisible(true);lyr_Piezometer_4.setVisible(true);
var layersList = [lyr_Australia_0,lyr_OpenStreetMap_1,lyr_MonitoringMPE_2,lyr_SPE_3,lyr_Piezometer_4];
lyr_MonitoringMPE_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Reading Time': 'Reading Time', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPE_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Reading Time': 'Reading Time', 'Reading 1': 'Reading 1', 'Reading 2': 'Reading 2', 'Reading 3': 'Reading 3', 'Address': 'Address', 'Location': 'Location', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Piezometer_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Dipped Depth': 'Dipped Depth', 'Location': 'Location', 'Type': 'Type', 'Data Logger Type': 'Data Logger Type', 'Data Logger S/N': 'Data Logger S/N', 'Monitoring Frequency': 'Monitoring Frequency', 'Traffic Control Required': 'Traffic Control Required', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_MonitoringMPE_2.set('fieldImages', {'fid': '', 'ID': '', 'Reading Time': '', 'Easting': '', 'Northing': '', });
lyr_SPE_3.set('fieldImages', {'fid': '', 'ID': '', 'Reading Time': '', 'Reading 1': '', 'Reading 2': '', 'Reading 3': '', 'Address': '', 'Location': '', 'Easting': '', 'Northing': '', });
lyr_Piezometer_4.set('fieldImages', {'fid': '', 'ID': '', 'Dipped Depth': '', 'Location': '', 'Type': '', 'Data Logger Type': '', 'Data Logger S/N': '', 'Monitoring Frequency': '', 'Traffic Control Required': '', 'Easting': '', 'Northing': '', });
lyr_MonitoringMPE_2.set('fieldLabels', {'fid': 'no label', 'ID': 'header label', 'Reading Time': 'no label', 'Easting': 'inline label', 'Northing': 'inline label', });
lyr_SPE_3.set('fieldLabels', {'fid': 'no label', 'ID': 'header label', 'Reading Time': 'no label', 'Reading 1': 'no label', 'Reading 2': 'no label', 'Reading 3': 'no label', 'Address': 'inline label', 'Location': 'inline label', 'Easting': 'inline label', 'Northing': 'inline label', });
lyr_Piezometer_4.set('fieldLabels', {'fid': 'no label', 'ID': 'header label', 'Dipped Depth': 'no label', 'Location': 'inline label', 'Type': 'inline label', 'Data Logger Type': 'inline label', 'Data Logger S/N': 'inline label', 'Monitoring Frequency': 'no label', 'Traffic Control Required': 'inline label', 'Easting': 'inline label', 'Northing': 'inline label', });
lyr_Piezometer_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});