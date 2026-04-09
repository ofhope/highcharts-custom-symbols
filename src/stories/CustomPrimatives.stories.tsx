import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import 'highcharts/modules/item-series';
// Plugin symbols are registered globally via Storybook preview import

export default {
	title: 'CustomPrimitives/Symbol Gallery',
	parameters: {
		layout: 'centered',
	},
};

export const SymbolGallery = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (!chartRef.current) return;
		// Render Highcharts chart in the story
		Highcharts.chart(chartRef.current, {
			chart: {
				type: 'line',
			},
			title: {
				text: 'Symbol Gallery - Generated SVG Symbols',
			},
			subtitle: {
				text: 'Testing all converted SVG symbols for visual verification',
			},
			xAxis: {
				categories: [
					'Circle', 'Square', 'Diamond', 'Star', 'Heart', 'Moon', 
					'Pentagon', 'Hexagon', 'Octagon', 'Teardrop', 'Triangle', 'Triangle-Down'
				],
				title: { text: 'Symbol Types' },
			},
			yAxis: {
				title: { text: 'Values' },
				min: 0,
			},
			legend: { enabled: false },
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
					{ y: 110, marker: { symbol: 'triangle', fillColor: '#FFA502', radius: 10 } },
					{ y: 120, marker: { symbol: 'triangle-down', fillColor: '#FFA502', radius: 10 } },
				],
				marker: {
					lineColor: '#000',
					lineWidth: 1,
					states: {
						hover: {
							radius: 15,
							lineWidth: 2,
						},
					},
				},
				lineWidth: 2,
				color: '#666',
			}],
			plotOptions: {
				line: {
					marker: { enabled: true },
				},
			},
			tooltip: {
				pointFormat: '<b>{point.category}</b><br/>Symbol: {point.marker.symbol}<br/>Value: {point.y}',
			},
		});
	}, []);

	return <div ref={chartRef} style={{ width: 800, height: 400 }} />;
};
