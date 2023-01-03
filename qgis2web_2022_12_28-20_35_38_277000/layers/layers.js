var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Kolam_0 = new ol.format.GeoJSON();
var features_Kolam_0 = format_Kolam_0.readFeatures(json_Kolam_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kolam_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Kolam_0.addFeatures(features_Kolam_0);var lyr_Kolam_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kolam_0, 
                style: style_Kolam_0,
    title: 'Kolam<br />\
    <img src="styles/legend/Kolam_0_0.png" /> Rendah<br />\
    <img src="styles/legend/Kolam_0_1.png" /> Sedang<br />\
    <img src="styles/legend/Kolam_0_2.png" /> Tinggi<br />'
        });

lyr_Kolam_0.setVisible(true);
var layersList = [baseLayer,lyr_Kolam_0];
lyr_Kolam_0.set('fieldAliases', {'WADMKC': 'WADMKC', '18produksi': '18produksi', '18nilai': '18nilai', '19produksi': '19produksi', '19nilai': '19nilai', });
lyr_Kolam_0.set('fieldImages', {'WADMKC': 'TextEdit', '18produksi': 'TextEdit', '18nilai': 'TextEdit', '19produksi': 'TextEdit', '19nilai': 'TextEdit', });
lyr_Kolam_0.set('fieldLabels', {'WADMKC': 'inline label', '18produksi': 'inline label', '18nilai': 'inline label', '19produksi': 'inline label', '19nilai': 'inline label', });
lyr_Kolam_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});