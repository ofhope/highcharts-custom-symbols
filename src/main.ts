import Highcharts from "highcharts";
import "highcharts/modules/item-series";

import "../symbols/custom-primitives";
import "../symbols/transportation";

// Symbol Gallery Chart - Visual test of all generated symbols
// Symbol gallery chart with all generated symbols
new Highcharts.Chart({
    chart: {
        renderTo: 'container-gallery',
        type: 'line'
    },

    title: {
        text: 'Symbol Gallery - Generated SVG Symbols'
    },

    subtitle: {
        text: 'Testing all converted SVG symbols for visual verification'
    },

    xAxis: {
        categories: [
            'Circle', 'Square', 'Diamond', 'Star', 'Heart', 'Moon', 
            'Pentagon', 'Hexagon', 'Octagon', 'Plus', 'Rotated-Square', 'Teardrop', 'Baby-Fill'
        ],
        title: {
            text: 'Symbol Types'
        }
    },

    yAxis: {
        title: {
            text: 'Values'
        },
        min: 0
    },

    legend: {
        enabled: false
    },

    series: [{
        type: 'line',
        name: 'Symbol Showcase',
        data: [
            { y: 10, marker: { symbol: 'circle', fillColor: '#FF6B6B', radius: 10 } },
            { y: 20, marker: { symbol: 'square', fillColor: '#4ECDC4', radius: 10 } },
            { y: 30, marker: { symbol: 'diamond', fillColor: '#45B7D1', radius: 10 } },
            { y: 40, marker: { symbol: 'star', fillColor: '#96CEB4', radius: 10 } },
            { y: 50, marker: { symbol: 'heart', fillColor: '#FECA57', radius: 10 } },
            { y: 60, marker: { symbol: 'moon', fillColor: '#FF9FF3', radius: 10 } },
            { y: 70, marker: { symbol: 'pentagon', fillColor: '#54A0FF', radius: 10 } },
            { y: 80, marker: { symbol: 'hexagon', fillColor: '#5F27CD', radius: 10 } },
            { y: 90, marker: { symbol: 'octagon', fillColor: '#00D2D3', radius: 10 } },
            { y: 100, marker: { symbol: 'teardrop', fillColor: '#FFA502', radius: 10 } },
            { y: 100, marker: { symbol: 'triangle', fillColor: '#FFA502', radius: 10 } },
            { y: 100, marker: { symbol: 'triangle-down', fillColor: '#FFA502', radius: 10 } },
        ],
        marker: {
            lineColor: '#000',
            lineWidth: 1,
            states: {
                hover: {
                    radius: 15,
                    lineWidth: 2
                }
            }
        },
        lineWidth: 2,
        color: '#666'
    }],

    plotOptions: {
        line: {
            marker: {
                enabled: true
            }
        }
    },

    tooltip: {
        pointFormat: '<b>{point.category}</b><br/>Symbol: {point.marker.symbol}<br/>Value: {point.y}'
    }
});

// Transportation Symbols Chart - Showcase all transportation symbols
new Highcharts.Chart({
    chart: {
        renderTo: 'container-transportation',
        type: 'scatter'
    },

    title: {
        text: 'Transportation Symbols Collection'
    },

    subtitle: {
        text: 'All available transportation symbols from the generated collection'
    },

    xAxis: {
        title: {
            text: 'X Position'
        },
        min: 0,
        max: 6,
        tickInterval: 1,
        labels: {
            formatter: function() {
                return '';
            }
        }
    },

    yAxis: {
        title: {
            text: 'Y Position'
        },
        min: 0,
        max: 4,
        tickInterval: 1,
        labels: {
            formatter: function() {
                return '';
            }
        }
    },

    legend: {
        enabled: false
    },

    plotOptions: {
        scatter: {
            marker: {
                radius: 16,
                states: {
                    hover: {
                        radius: 20,
                        lineWidth: 2
                    }
                }
            },
            lineWidth: 0
        }
    },

    series: [{
        type: 'scatter',
        name: 'Transportation Symbols',
        data: [
            // Row 1 - Air Transportation
            { x: 0, y: 3, marker: { symbol: 'airplane', fillColor: '#FF6B6B' } },
            { x: 1, y: 3, marker: { symbol: 'airplane-tilt', fillColor: '#FF8E8E' } },
            { x: 2, y: 3, marker: { symbol: 'airplane-taxiing', fillColor: '#FFB1B1' } },
            
            // Row 2 - Land Transportation - Cars & Trucks
            { x: 0, y: 2, marker: { symbol: 'car', fillColor: '#4ECDC4' } },
            { x: 1, y: 2, marker: { symbol: 'bus', fillColor: '#45B7D1' } },
            { x: 2, y: 2, marker: { symbol: 'van', fillColor: '#96CEB4' } },
            { x: 3, y: 2, marker: { symbol: 'cable-car', fillColor: '#FECA57' } },
            
            // Row 3 - Land Transportation - Two Wheelers
            { x: 0, y: 1, marker: { symbol: 'bicycle', fillColor: '#FF9FF3' } },
            { x: 1, y: 1, marker: { symbol: 'motorcycle', fillColor: '#54A0FF' } },
            { x: 2, y: 1, marker: { symbol: 'moped', fillColor: '#5F27CD' } },
            { x: 3, y: 1, marker: { symbol: 'moped-front', fillColor: '#00D2D3' } },
            { x: 4, y: 1, marker: { symbol: 'scooter', fillColor: '#FFA502' } },
            
            // Row 4 - Rail & Water Transportation
            { x: 0, y: 0, marker: { symbol: 'train', fillColor: '#2ED573' } },
            { x: 1, y: 0, marker: { symbol: 'train-simple', fillColor: '#3742FA' } },
            { x: 2, y: 0, marker: { symbol: 'tram', fillColor: '#FF3838' } },
            { x: 3, y: 0, marker: { symbol: 'boat', fillColor: '#70A1FF' } },
            { x: 4, y: 0, marker: { symbol: 'sailboat', fillColor: '#5352ED' } }
        ],
        marker: {
            lineColor: '#000',
            lineWidth: 1
        }
    }],

    tooltip: {
        useHTML: true,
        formatter: function() {
            const point = this as any;
            const symbolName = point.marker.symbol;
            const color = point.marker.fillColor;
            return `<div style="text-align: center;">
                        <strong>${symbolName}</strong><br/>
                        <span style="color: ${color};">●</span> Color: ${color}<br/>
                        Position: (${point.x}, ${point.y})
                    </div>`;
        }
    }
});
