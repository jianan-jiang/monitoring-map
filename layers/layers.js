var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_MonitoringMPE_1 = new ol.format.GeoJSON();
var features_MonitoringMPE_1 = format_MonitoringMPE_1.readFeatures(json_MonitoringMPE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonitoringMPE_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_MonitoringMPE_1.addFeatures(features_MonitoringMPE_1);var lyr_MonitoringMPE_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MonitoringMPE_1, 
                style: style_MonitoringMPE_1,
                title: '<img src="styles/legend/MonitoringMPE_1.png" /> Monitoring MPE'
            });var format_SPE_2 = new ol.format.GeoJSON();
var features_SPE_2 = format_SPE_2.readFeatures(json_SPE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPE_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SPE_2.addFeatures(features_SPE_2);var lyr_SPE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SPE_2, 
                style: style_SPE_2,
                title: '<img src="styles/legend/SPE_2.png" /> SPE'
            });var format_Piezometer_3 = new ol.format.GeoJSON();
var features_Piezometer_3 = format_Piezometer_3.readFeatures(json_Piezometer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piezometer_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Piezometer_3.addFeatures(features_Piezometer_3);var lyr_Piezometer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Piezometer_3, 
                style: style_Piezometer_3,
                title: '<img src="styles/legend/Piezometer_3.png" /> Piezometer'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MonitoringMPE_1.setVisible(true);lyr_SPE_2.setVisible(true);lyr_Piezometer_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MonitoringMPE_1,lyr_SPE_2,lyr_Piezometer_3];
lyr_MonitoringMPE_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Reading Time': 'Reading Time', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_SPE_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Reading Time': 'Reading Time', 'Reading 1': 'Reading 1', 'Reading 2': 'Reading 2', 'Reading 3': 'Reading 3', 'Address': 'Address', 'Location': 'Location', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_Piezometer_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Dipped Depth': 'Dipped Depth', 'Location': 'Location', 'Type': 'Type', 'Data Logger Type': 'Data Logger Type', 'Data Logger S/N': 'Data Logger S/N', 'Monitoring Frequency': 'Monitoring Frequency', 'Traffic Control Required': 'Traffic Control Required', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_MonitoringMPE_1.set('fieldImages', {'fid': '', 'ID': '', 'Reading Time': '', 'Easting': '', 'Northing': '', });
lyr_SPE_2.set('fieldImages', {'fid': '', 'ID': '', 'Reading Time': '', 'Reading 1': '', 'Reading 2': '', 'Reading 3': '', 'Address': '', 'Location': '', 'Easting': '', 'Northing': '', });
lyr_Piezometer_3.set('fieldImages', {'fid': '', 'ID': '', 'Dipped Depth': '', 'Location': '', 'Type': '', 'Data Logger Type': '', 'Data Logger S/N': '', 'Monitoring Frequency': '', 'Traffic Control Required': '', 'Easting': '', 'Northing': '', });
lyr_MonitoringMPE_1.set('fieldLabels', {'fid': 'no label', 'ID': 'header label', 'Reading Time': 'inline label', 'Easting': 'inline label', 'Northing': 'inline label', });
lyr_SPE_2.set('fieldLabels', {'fid': 'no label', 'ID': 'header label', 'Reading Time': 'inline label', 'Reading 1': 'inline label', 'Reading 2': 'inline label', 'Reading 3': 'inline label', 'Address': 'inline label', 'Location': 'inline label', 'Easting': 'inline label', 'Northing': 'inline label', });
lyr_Piezometer_3.set('fieldLabels', {'fid': 'no label', 'ID': 'header label', 'Dipped Depth': 'inline label', 'Location': 'inline label', 'Type': 'inline label', 'Data Logger Type': 'inline label', 'Data Logger S/N': 'inline label', 'Monitoring Frequency': 'inline label', 'Traffic Control Required': 'inline label', 'Easting': 'inline label', 'Northing': 'inline label', });
lyr_Piezometer_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});