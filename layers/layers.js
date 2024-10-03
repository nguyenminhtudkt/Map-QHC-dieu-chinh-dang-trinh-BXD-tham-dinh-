var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_SQG_1 = new ol.format.GeoJSON();
var features_SQG_1 = format_SQG_1.readFeatures(json_SQG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SQG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SQG_1.addFeatures(features_SQG_1);
var lyr_SQG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SQG_1, 
                style: style_SQG_1,
                popuplayertitle: "ĐS QG",
                interactive: true,
                title: '<img src="styles/legend/SQG_1.png" /> ĐS QG'
            });
var format_STC_2 = new ol.format.GeoJSON();
var features_STC_2 = format_STC_2.readFeatures(json_STC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STC_2.addFeatures(features_STC_2);
var lyr_STC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STC_2, 
                style: style_STC_2,
                popuplayertitle: "ĐS TĐC",
                interactive: true,
                title: '<img src="styles/legend/STC_2.png" /> ĐS TĐC'
            });
var format_QHCiuchnhHLGTCC_3 = new ol.format.GeoJSON();
var features_QHCiuchnhHLGTCC_3 = format_QHCiuchnhHLGTCC_3.readFeatures(json_QHCiuchnhHLGTCC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QHCiuchnhHLGTCC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QHCiuchnhHLGTCC_3.addFeatures(features_QHCiuchnhHLGTCC_3);
var lyr_QHCiuchnhHLGTCC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QHCiuchnhHLGTCC_3, 
                style: style_QHCiuchnhHLGTCC_3,
                popuplayertitle: "QHC điều chỉnh - HL GTCC",
                interactive: true,
                title: '<img src="styles/legend/QHCiuchnhHLGTCC_3.png" /> QHC điều chỉnh - HL GTCC'
            });
var format_QHCiuchnhDepot_4 = new ol.format.GeoJSON();
var features_QHCiuchnhDepot_4 = format_QHCiuchnhDepot_4.readFeatures(json_QHCiuchnhDepot_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QHCiuchnhDepot_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QHCiuchnhDepot_4.addFeatures(features_QHCiuchnhDepot_4);
var lyr_QHCiuchnhDepot_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QHCiuchnhDepot_4, 
                style: style_QHCiuchnhDepot_4,
                popuplayertitle: "QHC điều chỉnh - Depot",
                interactive: false,
                title: '<img src="styles/legend/QHCiuchnhDepot_4.png" /> QHC điều chỉnh - Depot'
            });
var format_QHCiuchnhPhnTuyn_5 = new ol.format.GeoJSON();
var features_QHCiuchnhPhnTuyn_5 = format_QHCiuchnhPhnTuyn_5.readFeatures(json_QHCiuchnhPhnTuyn_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QHCiuchnhPhnTuyn_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QHCiuchnhPhnTuyn_5.addFeatures(features_QHCiuchnhPhnTuyn_5);
var lyr_QHCiuchnhPhnTuyn_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QHCiuchnhPhnTuyn_5, 
                style: style_QHCiuchnhPhnTuyn_5,
                popuplayertitle: "QHC điều chỉnh - Phần Tuyến",
                interactive: true,
    title: 'QHC điều chỉnh - Phần Tuyến<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_0.png" /> 1<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_1.png" /> 10<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_2.png" /> 11<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_3.png" /> 12<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_4.png" /> 1A<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_5.png" /> 2<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_6.png" /> 2A<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_7.png" /> 3<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_8.png" /> 4<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_9.png" /> 5<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_10.png" /> 6<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_11.png" /> 7<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_12.png" /> 8<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_13.png" /> 9<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_5_14.png" /> M<br />'
        });
var format_PhngX_6 = new ol.format.GeoJSON();
var features_PhngX_6 = format_PhngX_6.readFeatures(json_PhngX_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhngX_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhngX_6.addFeatures(features_PhngX_6);
var lyr_PhngX_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhngX_6, 
                style: style_PhngX_6,
                popuplayertitle: "Phường Xã",
                interactive: false,
                title: '<img src="styles/legend/PhngX_6.png" /> Phường Xã'
            });
var format_QunHuyn_7 = new ol.format.GeoJSON();
var features_QunHuyn_7 = format_QunHuyn_7.readFeatures(json_QunHuyn_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QunHuyn_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QunHuyn_7.addFeatures(features_QunHuyn_7);
var lyr_QunHuyn_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QunHuyn_7, 
                style: style_QunHuyn_7,
                popuplayertitle: "Quận Huyện",
                interactive: false,
                title: '<img src="styles/legend/QunHuyn_7.png" /> Quận Huyện'
            });
var format_Tnh_8 = new ol.format.GeoJSON();
var features_Tnh_8 = format_Tnh_8.readFeatures(json_Tnh_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tnh_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tnh_8.addFeatures(features_Tnh_8);
var lyr_Tnh_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tnh_8, 
                style: style_Tnh_8,
                popuplayertitle: "Tỉnh",
                interactive: false,
                title: '<img src="styles/legend/Tnh_8.png" /> Tỉnh'
            });
var format_aim_9 = new ol.format.GeoJSON();
var features_aim_9 = format_aim_9.readFeatures(json_aim_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aim_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aim_9.addFeatures(features_aim_9);
var lyr_aim_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aim_9, 
                style: style_aim_9,
                popuplayertitle: "Địa điểm",
                interactive: false,
                title: 'Địa điểm'
            });

lyr_GoogleRoad_0.setVisible(false);lyr_SQG_1.setVisible(true);lyr_STC_2.setVisible(true);lyr_QHCiuchnhHLGTCC_3.setVisible(true);lyr_QHCiuchnhDepot_4.setVisible(true);lyr_QHCiuchnhPhnTuyn_5.setVisible(true);lyr_PhngX_6.setVisible(false);lyr_QunHuyn_7.setVisible(true);lyr_Tnh_8.setVisible(true);lyr_aim_9.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_SQG_1,lyr_STC_2,lyr_QHCiuchnhHLGTCC_3,lyr_QHCiuchnhDepot_4,lyr_QHCiuchnhPhnTuyn_5,lyr_PhngX_6,lyr_QunHuyn_7,lyr_Tnh_8,lyr_aim_9];
lyr_SQG_1.set('fieldAliases', {'fid': 'fid', 'loaiduong': 'loaiduong', });
lyr_STC_2.set('fieldAliases', {'fid': 'fid', 'loaiduong': 'loaiduong', });
lyr_QHCiuchnhHLGTCC_3.set('fieldAliases', {'fid': 'fid', 'loaiduong': 'loaiduong', });
lyr_QHCiuchnhDepot_4.set('fieldAliases', {'fid': 'fid', });
lyr_QHCiuchnhPhnTuyn_5.set('fieldAliases', {'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'caongam': 'caongam', });
lyr_PhngX_6.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_QunHuyn_7.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Tnh_8.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_aim_9.set('fieldAliases', {'ten': 'ten', 'loai': 'loai', });
lyr_SQG_1.set('fieldImages', {'fid': 'TextEdit', 'loaiduong': 'TextEdit', });
lyr_STC_2.set('fieldImages', {'fid': 'TextEdit', 'loaiduong': 'TextEdit', });
lyr_QHCiuchnhHLGTCC_3.set('fieldImages', {'fid': 'TextEdit', 'loaiduong': 'TextEdit', });
lyr_QHCiuchnhDepot_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_QHCiuchnhPhnTuyn_5.set('fieldImages', {'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'caongam': 'TextEdit', });
lyr_PhngX_6.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_QunHuyn_7.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_Tnh_8.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_aim_9.set('fieldImages', {'ten': '', 'loai': '', });
lyr_SQG_1.set('fieldLabels', {'fid': 'hidden field', 'loaiduong': 'inline label - visible with data', });
lyr_STC_2.set('fieldLabels', {'fid': 'hidden field', 'loaiduong': 'inline label - visible with data', });
lyr_QHCiuchnhHLGTCC_3.set('fieldLabels', {'fid': 'hidden field', 'loaiduong': 'inline label - visible with data', });
lyr_QHCiuchnhDepot_4.set('fieldLabels', {'fid': 'no label', });
lyr_QHCiuchnhPhnTuyn_5.set('fieldLabels', {'fid': 'hidden field', 'tuyen': 'inline label - visible with data', 'doantuyen': 'inline label - visible with data', 'huongtuyen': 'no label', 'caongam': 'no label', });
lyr_PhngX_6.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'inline label - visible with data', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'inline label - visible with data', 'NL_NAME_2': 'no label', 'NAME_3': 'inline label - visible with data', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_QunHuyn_7.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_Tnh_8.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_aim_9.set('fieldLabels', {'ten': 'no label', 'loai': 'no label', });
lyr_aim_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});