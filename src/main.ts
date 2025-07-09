import Highcharts from "highcharts";
import "highcharts/modules/item-series";

import "./symbols/phosphor/rain-cloud";
import "./symbols/star";
import "./symbols/phosphor/cross";
import "./symbols/phosphor/first-aid";
import "./symbols/phosphor/crosshair";
import "./symbols/phosphor/crosshair-simple";
import "./symbols/phosphor/crown-cross";
import "./symbols/phosphor/airplane";
import "./symbols/phosphor/airplane-tilt";
import "./symbols/phosphor/airplane-taxiing";
import "./symbols/phosphor/alarm";

var chartMixed = new Highcharts.Chart({
  chart: {
    renderTo: "container-mixed",
  },

  title: {
    text: "Multiple Symbols in Highcharts Series"
  },

  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },

  yAxis: {
    title: {
      text: "Values"
    }
  },

  series: [
    {
      type: "line",
      name: "Mixed Symbols in Single Series",
      // Example: Different symbol per data point using data object format
      data: [
        { y: 29.9, marker: { symbol: "cloud-rain", fillColor: "blue" } },
        { y: 71.5, marker: { symbol: "star", fillColor: "red" } },
        { y: 106.4, marker: { symbol: "cross", fillColor: "green" } },
        { y: 129.2, marker: { symbol: "first-aid", fillColor: "orange" } },
        { y: 144.0, marker: { symbol: "crown-cross", fillColor: "purple" } },
        { y: 176.0, marker: { symbol: "airplane", fillColor: "pink" } },
        { y: 135.6, marker: { symbol: "crosshair", fillColor: "brown" } },
        { y: 148.5, marker: { symbol: "crosshair-simple", fillColor: "gray" } },
        { y: 216.4, marker: { symbol: "airplane-tilt", fillColor: "gold" } },
        { y: 194.1, marker: { symbol: "airplane-taxiing", fillColor: "lightblue" } },
        { y: 95.6, marker: { symbol: "alarm", fillColor: "crimson" } },
        { y: 54.4, marker: { symbol: "cross", fillColor: "darkgreen" } },
      ],
      marker: {
        radius: 8,
        lineColor: "black",
        lineWidth: 0.5,
        states: {
          hover: {
            radius: 12,
            lineWidth: 0.7,
          },
        },
      },
    },
    {
      type: "line",
      name: "Pattern-based Symbols",
      // Example: Using a pattern to cycle through symbols programmatically
      data: [15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125].map((value, index) => {
        const symbols = ["circle", "square", "diamond", "triangle"];
        const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"];
        return {
          y: value,
          marker: {
            symbol: symbols[index % symbols.length],
            fillColor: colors[index % colors.length]
          }
        };
      }),
      marker: {
        radius: 6,
        lineColor: "white",
        lineWidth: 1,
      },
    }
  ],
});


var chart = new Highcharts.Chart({
  chart: {
    renderTo: "container",
  },

  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },

  series: [
    {
      type: "line",
      data: [
        29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
        95.6, 54.4,
      ],
      marker: {
        symbol: "cloud-rain",
        radius: 8,
        fillColor: "blue", // Interior color
        lineColor: "blue", // Border color
        lineWidth: 0.1, // Border thickness
        states: {
          hover: {
            radius: 12, // Larger on hover
            fillColor: "#ffeb3b", // Different color on hover
            lineColor: "#000", // Darker border on hover
            lineWidth: 1, // Thicker border on hover
          },
          select: {
            radius: 14, // Even larger when selected
            fillColor: "#4caf50",
            lineColor: "#2e7d32", // Darker green border when selected
            lineWidth: 4, // Even thicker border when selected
          },
        },
      },
    },
  ],
});


// Item chart with custom symbols
var chartItem = new Highcharts.Chart({
    chart: {
        renderTo: 'container-item-custom',
        type: 'item'
    },

    title: {
        text: 'Custom Symbol Item Chart'
    },

    subtitle: {
        text: 'Visualization using custom Phosphor icons'
    },

    legend: {
        labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
    },

    series: [{
        type: 'item',
        name: 'Categories',
        data: [
            { name: 'Aviation', y: 25, color: '#FF6B6B', marker: { symbol: 'airplane' } },
            { name: 'Emergency Services', y: 18, color: '#4ECDC4', marker: { symbol: 'first-aid' } },
            { name: 'Security', y: 12, color: '#45B7D1', marker: { symbol: 'crosshair' } },
            { name: 'Weather', y: 8, color: '#96CEB4', marker: { symbol: 'cloud-rain' } },
            { name: 'Alerts', y: 15, color: '#FECA57', marker: { symbol: 'alarm' } },
            { name: 'Transport', y: 22, color: '#FF9FF3', marker: { symbol: 'airplane-taxiing' } }
        ],
        dataLabels: {
            enabled: true,
            format: '{point.name}',
            style: {
                fontSize: '10px'
            }
        },

        // Rectangular layout
        rows: 6,
        crisp: false
    }]
});



new Highcharts.Chart( {

    chart: {
        renderTo: 'container-item',
        type: 'item'
    },

    title: {
        text: 'Distribution of seats'
    },

    subtitle: {
        text: 'Bundestag election 2021. Source: ' +
            '<a href="https://www.bundeswahlleiter.de/en/bundeswahlleiter.html"' +
            'target="_blank">Bundeswahlleiter</a> '
    },

    legend: {
        labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
    },

    series: [{
        type: 'item',
        name: 'Representatives',
        keys: ['name', 'y', 'color', 'label'],
        data: [
            ['The Left', 39, '#CC0099', 'DIE LINKE'],
            ['Social Democratic Party', 206, '#EE0011', 'SPD'],
            ['Alliance 90/The Greens', 118, '#448833', 'GRÜNE'],
            ['Free Democratic Party', 92, '#FFCC00', 'FDP'],
            ['Christian Democratic Union', 152, '#000000', 'CDU'],
            ['Christian Social Union in Bavaria', 45, '#3366CC', 'CSU'],
            ['Alternative for Germany', 83, '#3399FF', 'AfD'],
            ['South Schleswig Voters\' Association', 1, '#000099', 'SSW']
        ],
        dataLabels: {
            enabled: true,
            format: '{point.label}',
            style: {
                textOutline: '3px contrast'
            }
        },

        // Circular options
        center: ['50%', '88%'],
        size: '170%',
        startAngle: -100,
        endAngle: 100
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 600
            },
            chartOptions: {
                title: {
                    style: {
                        fontSize: '14px'
                    }
                }
            }
        }]
    }
});
