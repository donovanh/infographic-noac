/******************************************************* *
**
** Function to load SVG safely using AJAX,
** including fallback to png files when
** SVG is not supported
**
** Pass the selector and the URL of the files
** without its extenstion as the function
** will take care of it.
**
** Based on http://css-tricks.com/ajaxing-svg-sprite/
**
* *******************************************************/

// Set up the data values
var data = [
  {
    mapName: "map1",
    startHue: 181,
    endHue: 238,
    counties: [
      {
        name: "Carlow County",
        value: "3.28" 
      },
      {
        name: "Cavan County",
        value: "2.9" 
      },
      {
        name: "Clare County",
        value: "3.92" 
      },
      {
        name: "Cork City",
        value: "5.25" 
      },
      {
        name: "Cork County",
        value: "4.11" 
      },
      {
        name: "Donegal County",
        value: "2.19" 
      },
      {
        name: "Dublin City",
        value: "4.74" 
      },
      {
        name: "Dún Laoghaire-Rathdown",
        value: "4.6" 
      },
      {
        name: "Fingal County",
        value: "3.83" 
      },
      {
        name: "Galway City",
        value: "n/a" 
      },
      {
        name: "Galway County",
        value: "2.54" 
      },
      {
        name: "Kerry County",
        value: "3.46" 
      },
      {
        name: "Kildare County",
        value: "2.86" 
      },
      {
        name: "Kilkenny County",
        value: "2.89" 
      },
      {
        name: "Laois County",
        value: "2.78" 
      },
      {
        name: "Leitrim County",
        value: "5.64" 
      },
      {
        name: "Limerick City & County",
        value: "3.98" 
      },
      {
        name: "Longford County",
        value: "5.32" 
      },
      {
        name: "Louth County",
        value: "1.88" 
      },
      {
        name: "Mayo County",
        value: "2.75" 
      },
      {
        name: "Meath County",
        value: "4.07" 
      },
      {
        name: "Monaghan County",
        value: "4.35" 
      },
      {
        name: "Offaly County",
        value: "3.21" 
      },
      {
        name: "Roscommon County",
        value: "2.21" 
      },
      {
        name: "Sligo County",
        value: "1.92" 
      },
      {
        name: "South Dublin County",
        value: "3.69" 
      },
      {
        name: "Tipperary County",
        value: "3.71" 
      },
      {
        name: "Waterford City & County",
        value: "4.34" 
      },
      {
        name: "Westmeath County",
        value: "3.34" 
      },
      {
        name: "Wexford County",
        value: "4.12" 
      },
      {
        name: "Wicklow County",
        value: "3.04" 
      }
    ]
  },
  {
    mapName: "map2",
    startHue: 301,
    endHue: 9,
    counties: [
      {
        name: "Carlow County",
        value: "200965" 
      },
      {
        name: "Cavan County",
        value: "148072" 
      },
      {
        name: "Clare County",
        value: "554385" 
      },
      {
        name: "Cork City",
        value: "866664" 
      },
      {
        name: "Cork County",
        value: "1761063" 
      },
      {
        name: "Donegal County",
        value: "333793" 
      },
      {
        name: "Dublin City",
        value: "2379655" 
      },
      {
        name: "Dún Laoghaire-Rathdown",
        value: "1502259" 
      },
      {
        name: "Fingal County",
        value: "1020967" 
      },
      {
        name: "Galway City",
        value: "n/a" 
      },
      {
        name: "Galway County",
        value: "691893" 
      },
      {
        name: "Kerry County",
        value: "645401" 
      },
      {
        name: "Kildare County",
        value: "656923" 
      },
      {
        name: "Kilkenny County",
        value: "308473" 
      },
      {
        name: "Laois County",
        value: "208255" 
      },
      {
        name: "Leitrim County",
        value: "113305" 
      },
      {
        name: "Limerick City & County",
        value: "767853" 
      },
      {
        name: "Longford County",
        value: "124614" 
      },
      {
        name: "Louth County",
        value: "359121" 
      },
      {
        name: "Mayo County",
        value: "603544" 
      },
      {
        name: "Meath County",
        value: "556439" 
      },
      {
        name: "Monaghan County",
        value: "331638" 
      },
      {
        name: "Offaly County",
        value: "259381" 
      },
      {
        name: "Roscommon County",
        value: "189229" 
      },
      {
        name: "Sligo County",
        value: "213625" 
      },
      {
        name: "South Dublin County",
        value: "1082197" 
      },
      {
        name: "Tipperary County",
        value: "444549" 
      },
      {
        name: "Waterford City & County",
        value: "514062" 
      },
      {
        name: "Westmeath County",
        value: "326665" 
      },
      {
        name: "Wexford County",
        value: "594634" 
      },
      {
        name: "Wicklow County",
        value: "428715" 
      }
    ]
  },
  {
    mapName: "map3",
    startHue: 56,
    endHue: 128,
    counties: [
      {
        name: "Carlow County",
        value: "28.13" 
      },
      {
        name: "Cavan County",
        value: "23.64" 
      },
      {
        name: "Clare County",
        value: "34.31" 
      },
      {
        name: "Cork City",
        value: "56.07" 
      },
      {
        name: "Cork County",
        value: "21.71" 
      },
      {
        name: "Donegal County",
        value: "22.91" 
      },
      {
        name: "Dublin City",
        value: "42.61" 
      },
      {
        name: "Dún Laoghaire-Rathdown",
        value: "35.63" 
      },
      {
        name: "Fingal County",
        value: "38.86" 
      },
      {
        name: "Galway City",
        value: "n/a" 
      },
      {
        name: "Galway County",
        value: "17.82" 
      },
      {
        name: "Kerry County",
        value: "23.03" 
      },
      {
        name: "Kildare County",
        value: "30.96" 
      },
      {
        name: "Kilkenny County",
        value: "28.02" 
      },
      {
        name: "Laois County",
        value: "22.23" 
      },
      {
        name: "Leitrim County",
        value: "47.36" 
      },
      {
        name: "Limerick City & County",
        value: "27.64" 
      },
      {
        name: "Longford County",
        value: "40.28" 
      },
      {
        name: "Louth County",
        value: "25.24" 
      },
      {
        name: "Mayo County",
        value: "23.06" 
      },
      {
        name: "Meath County",
        value: "19.41" 
      },
      {
        name: "Monaghan County",
        value: "37.20" 
      },
      {
        name: "Offaly County",
        value: "27.76" 
      },
      {
        name: "Roscommon County",
        value: "27.30" 
      },
      {
        name: "Sligo County",
        value: "31.58" 
      },
      {
        name: "South Dublin County",
        value: "37.60" 
      },
      {
        name: "Tipperary County",
        value: "18.49" 
      },
      {
        name: "Waterford City & County",
        value: "33.15" 
      },
      {
        name: "Westmeath County",
        value: "27.63" 
      },
      {
        name: "Wexford County",
        value: "25.87" 
      },
      {
        name: "Wicklow County",
        value: "20.54" 
      }
    ]
  }
];

buildMaps(data);
buildDataTable(data); 

function buildMaps(data) {
  data.forEach(function(mapData) {
    loadSvg("#" + mapData.mapName, "map", mapData.mapName, function() {
      buildMap(mapData);
      buildLegend(mapData);
    });
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function buildDataTable(data) {
  // dynamic-data-table
  var tableData = {};
  var tableHTML = '';
  data.forEach(function(mapData) {
    mapData.counties.forEach(function(county) {
      var value = numberWithCommas(county.value)
      if (!tableData[county.name]) {
        tableData[county.name] = "<th>" + county.name + "</th>";
        tableData[county.name] += "<td>" + value + "</td>";
      } else {
        tableData[county.name] += "<td>" + value + "</td>";
      }
    });
  });
  for (var county in tableData) {
      if (tableData.hasOwnProperty(county)) {
        tableHTML += "<tr>"+ tableData[county] +"</tr>"
      }
    }
  var container = document.querySelector("#dynamic-data-table");
  container.innerHTML = tableHTML;
}


function buildMap(map) {
  // Set up the smallest/biggest
  var smallest = getSmallestOrLargest(map.counties, true);
  var biggest = getSmallestOrLargest(map.counties, false);

  // Use the data values to generate the colour hues
  // For each county
  map.counties.forEach(function(county) {

    // Generate the hue
    // Begin by making the hue non-circular
    if (map.endHue < map.startHue) {
      var startHue = map.startHue;
      var endHue = map.endHue + 360;
    } else {
      var startHue = map.startHue;
      var endHue = map.endHue;
    }
    if (!isNaN(county.value)) {
      var offset = ((county.value - smallest.value) * 100) / (biggest.value - smallest.value);
      // Calculate the offset in terms of a percentage between the hues
      var hue = (offset * (endHue - startHue) / 100) + startHue;
      // Correct for the hue being greater than 360
      if (hue > 360) {
        hue = hue - 360;
      }
      var saturation = 100 - offset / 10;
      var opacity = 1 - (100 - offset * 5) / 100;
      if (opacity < .1) { opacity = .2; }
      var hsl = "hsla("+ Math.round(hue) +", "+ saturation +"%, 50%, "+ opacity +")";
    } else {
      // It's n/a, so set a default grey
      var hsl = "hsla(50, 0%, 60%,1)";
    }

    // Apply this hsl value as a fill to the SVG layer
    var countyClass = county.name
                      .replace(/ /g, '_')
                      .replace(/_&/, '');
    var countyLayer = document.querySelector("#" + map.mapName + " ." + countyClass);
    if (countyLayer) {
      countyLayer.setAttribute("fill", hsl);
    }
  });
}

function buildLegend(map) {
  // Set gradient on info-map-legend-bar for this map
  console.log('here');
  var startColour = "hsla("+ map.startHue +", 100%, 50%, .2)";
  var endColour = "hsl("+ map.endHue +", 100%, 50%)";
  var gradient = "linear-gradient(to right, "+ startColour +", "+ endColour +")";
  var legend = document.querySelector("#" + map.mapName + "-container .info-map-legend-bar");
  console.log(legend, "#" + map.mapName + "-container .info-map-legend-bar");
  if (legend) {
    legend.setAttribute("style", "background-image: " + gradient);
  }
}

function getSmallestOrLargest(data, smallest) {
  return data.reduce(function(prev, current) {
    if (!isNaN(current.value)) {
      if (smallest) {
        return (parseInt(prev.value) < parseInt(current.value)) ? prev : current;
      } else {
        return (parseInt(prev.value) > parseInt(current.value)) ? prev : current
      }
    } else {
      return prev
    }
  });
}

