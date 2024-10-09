var wms_layers = [];


        var lyr_GoogleTraffic_0 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_3 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_4 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_5 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SQG_6 = new ol.format.GeoJSON();
var features_SQG_6 = format_SQG_6.readFeatures(json_SQG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SQG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SQG_6.addFeatures(features_SQG_6);
var lyr_SQG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SQG_6, 
                style: style_SQG_6,
                popuplayertitle: "ĐS QG",
                interactive: true,
                title: '<img src="styles/legend/SQG_6.png" /> ĐS QG'
            });
var format_STC_7 = new ol.format.GeoJSON();
var features_STC_7 = format_STC_7.readFeatures(json_STC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STC_7.addFeatures(features_STC_7);
var lyr_STC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STC_7, 
                style: style_STC_7,
                popuplayertitle: "ĐS TĐC",
                interactive: true,
                title: '<img src="styles/legend/STC_7.png" /> ĐS TĐC'
            });
var format_QHCiuchnhHLGTCC_8 = new ol.format.GeoJSON();
var features_QHCiuchnhHLGTCC_8 = format_QHCiuchnhHLGTCC_8.readFeatures(json_QHCiuchnhHLGTCC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QHCiuchnhHLGTCC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QHCiuchnhHLGTCC_8.addFeatures(features_QHCiuchnhHLGTCC_8);
var lyr_QHCiuchnhHLGTCC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QHCiuchnhHLGTCC_8, 
                style: style_QHCiuchnhHLGTCC_8,
                popuplayertitle: "QHC điều chỉnh - HL GTCC",
                interactive: true,
                title: '<img src="styles/legend/QHCiuchnhHLGTCC_8.png" /> QHC điều chỉnh - HL GTCC'
            });
var format_QHCiuchnhDepot_9 = new ol.format.GeoJSON();
var features_QHCiuchnhDepot_9 = format_QHCiuchnhDepot_9.readFeatures(json_QHCiuchnhDepot_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QHCiuchnhDepot_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QHCiuchnhDepot_9.addFeatures(features_QHCiuchnhDepot_9);
var lyr_QHCiuchnhDepot_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QHCiuchnhDepot_9, 
                style: style_QHCiuchnhDepot_9,
                popuplayertitle: "QHC điều chỉnh - Depot",
                interactive: false,
                title: '<img src="styles/legend/QHCiuchnhDepot_9.png" /> QHC điều chỉnh - Depot'
            });
var format_QHCiuchnhPhnTuyn_10 = new ol.format.GeoJSON();
var features_QHCiuchnhPhnTuyn_10 = format_QHCiuchnhPhnTuyn_10.readFeatures(json_QHCiuchnhPhnTuyn_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QHCiuchnhPhnTuyn_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QHCiuchnhPhnTuyn_10.addFeatures(features_QHCiuchnhPhnTuyn_10);
var lyr_QHCiuchnhPhnTuyn_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QHCiuchnhPhnTuyn_10, 
                style: style_QHCiuchnhPhnTuyn_10,
                popuplayertitle: "QHC điều chỉnh - Phần Tuyến",
                interactive: true,
    title: 'QHC điều chỉnh - Phần Tuyến<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_0.png" /> 1<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_1.png" /> 10<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_2.png" /> 11<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_3.png" /> 12<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_4.png" /> 1A<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_5.png" /> 2<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_6.png" /> 2A<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_7.png" /> 3<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_8.png" /> 4<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_9.png" /> 5<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_10.png" /> 6<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_11.png" /> 7<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_12.png" /> 8<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_13.png" /> 9<br />\
    <img src="styles/legend/QHCiuchnhPhnTuyn_10_14.png" /> M<br />'
        });
var format_PhngX_11 = new ol.format.GeoJSON();
var features_PhngX_11 = format_PhngX_11.readFeatures(json_PhngX_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PhngX_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhngX_11.addFeatures(features_PhngX_11);
var lyr_PhngX_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhngX_11, 
                style: style_PhngX_11,
                popuplayertitle: "Phường Xã",
                interactive: true,
                title: '<img src="styles/legend/PhngX_11.png" /> Phường Xã'
            });
var format_QunHuyn_12 = new ol.format.GeoJSON();
var features_QunHuyn_12 = format_QunHuyn_12.readFeatures(json_QunHuyn_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QunHuyn_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QunHuyn_12.addFeatures(features_QunHuyn_12);
var lyr_QunHuyn_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QunHuyn_12, 
                style: style_QunHuyn_12,
                popuplayertitle: "Quận Huyện",
                interactive: false,
                title: '<img src="styles/legend/QunHuyn_12.png" /> Quận Huyện'
            });
var format_Tnh_13 = new ol.format.GeoJSON();
var features_Tnh_13 = format_Tnh_13.readFeatures(json_Tnh_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tnh_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tnh_13.addFeatures(features_Tnh_13);
var lyr_Tnh_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tnh_13, 
                style: style_Tnh_13,
                popuplayertitle: "Tỉnh",
                interactive: false,
                title: '<img src="styles/legend/Tnh_13.png" /> Tỉnh'
            });
var format_Diadiem_14 = new ol.format.GeoJSON();
var features_Diadiem_14 = format_Diadiem_14.readFeatures(json_Diadiem_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diadiem_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diadiem_14.addFeatures(features_Diadiem_14);
var lyr_Diadiem_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Diadiem_14, 
                style: style_Diadiem_14,
                popuplayertitle: "Diadiem",
                interactive: false,
                title: 'Diadiem'
            });

lyr_GoogleTraffic_0.setVisible(false);lyr_GoogleTerrain_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_GoogleRoad_3.setVisible(false);lyr_GoogleLabels_4.setVisible(false);lyr_GoogleHybrid_5.setVisible(false);lyr_SQG_6.setVisible(false);lyr_STC_7.setVisible(false);lyr_QHCiuchnhHLGTCC_8.setVisible(false);lyr_QHCiuchnhDepot_9.setVisible(true);lyr_QHCiuchnhPhnTuyn_10.setVisible(true);lyr_PhngX_11.setVisible(false);lyr_QunHuyn_12.setVisible(true);lyr_Tnh_13.setVisible(true);lyr_Diadiem_14.setVisible(true);
var layersList = [lyr_GoogleTraffic_0,lyr_GoogleTerrain_1,lyr_GoogleSatellite_2,lyr_GoogleRoad_3,lyr_GoogleLabels_4,lyr_GoogleHybrid_5,lyr_SQG_6,lyr_STC_7,lyr_QHCiuchnhHLGTCC_8,lyr_QHCiuchnhDepot_9,lyr_QHCiuchnhPhnTuyn_10,lyr_PhngX_11,lyr_QunHuyn_12,lyr_Tnh_13,lyr_Diadiem_14];
lyr_SQG_6.set('fieldAliases', {'fid': 'fid', 'loaiduong': 'loaiduong', });
lyr_STC_7.set('fieldAliases', {'fid': 'fid', 'loaiduong': 'loaiduong', });
lyr_QHCiuchnhHLGTCC_8.set('fieldAliases', {'fid': 'fid', 'loaiduong': 'loaiduong', });
lyr_QHCiuchnhDepot_9.set('fieldAliases', {'fid': 'fid', });
lyr_QHCiuchnhPhnTuyn_10.set('fieldAliases', {'fid': 'fid', 'tuyen': 'tuyen', 'doantuyen': 'doantuyen', 'huongtuyen': 'huongtuyen', 'caongam': 'caongam', 'tentuyen': 'tentuyen', });
lyr_PhngX_11.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_QunHuyn_12.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Tnh_13.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_Diadiem_14.set('fieldAliases', {'ten': 'ten', 'loai': 'loai', });
lyr_SQG_6.set('fieldImages', {'fid': 'TextEdit', 'loaiduong': 'TextEdit', });
lyr_STC_7.set('fieldImages', {'fid': 'TextEdit', 'loaiduong': 'TextEdit', });
lyr_QHCiuchnhHLGTCC_8.set('fieldImages', {'fid': 'TextEdit', 'loaiduong': 'TextEdit', });
lyr_QHCiuchnhDepot_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_QHCiuchnhPhnTuyn_10.set('fieldImages', {'fid': 'TextEdit', 'tuyen': 'TextEdit', 'doantuyen': 'TextEdit', 'huongtuyen': 'TextEdit', 'caongam': 'TextEdit', 'tentuyen': 'TextEdit', });
lyr_PhngX_11.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_QunHuyn_12.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_Tnh_13.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_Diadiem_14.set('fieldImages', {'ten': '', 'loai': '', });
lyr_SQG_6.set('fieldLabels', {'fid': 'hidden field', 'loaiduong': 'inline label - visible with data', });
lyr_STC_7.set('fieldLabels', {'fid': 'hidden field', 'loaiduong': 'inline label - visible with data', });
lyr_QHCiuchnhHLGTCC_8.set('fieldLabels', {'fid': 'hidden field', 'loaiduong': 'inline label - visible with data', });
lyr_QHCiuchnhDepot_9.set('fieldLabels', {'fid': 'no label', });
lyr_QHCiuchnhPhnTuyn_10.set('fieldLabels', {'fid': 'hidden field', 'tuyen': 'no label', 'doantuyen': 'header label - visible with data', 'huongtuyen': 'no label', 'caongam': 'no label', 'tentuyen': 'header label - visible with data', });
lyr_PhngX_11.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'inline label - visible with data', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'inline label - visible with data', 'NL_NAME_2': 'no label', 'NAME_3': 'inline label - visible with data', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_QunHuyn_12.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_Tnh_13.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_Diadiem_14.set('fieldLabels', {'ten': 'no label', 'loai': 'no label', });
lyr_Diadiem_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});