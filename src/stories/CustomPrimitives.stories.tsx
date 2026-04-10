import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
import 'highcharts/modules/item-series';
// Symbols are registered globally via Storybook preview import

export default {
	title: 'CustomPrimitives/Gallery',
	parameters: {
		layout: 'centered',
	},
};

/**
 * A reference gallery showing every custom primitive symbol in sequence.
 * Useful for visual regression testing and quick verification of new symbols.
 */
export const SymbolGallery = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (!chartRef.current) return;

		Highcharts.chart(chartRef.current, {
			chart: { type: 'line' },
			title: { text: 'Custom Primitive Symbols' },
			subtitle: { text: 'All available shapes — hover to inspect' },
			credits: { enabled: false },
			xAxis: {
				categories: [
					'Circle', 'Square', 'Diamond', 'Star', 'Heart', 'Moon',
					'Pentagon', 'Hexagon', 'Octagon', 'Teardrop', 'Triangle', 'Triangle-Down',
				],
				title: { text: null },
			},
			yAxis: {
				title: undefined,
				min: 0,
				labels: { enabled: false },
				gridLineWidth: 0,
			},
			legend: { enabled: false },
			series: [{
				type: 'line',
				name: 'Symbol Showcase',
				data: [
					{ y: 10, marker: { symbol: 'circle',        fillColor: '#FF6B6B', radius: 14 } },
					{ y: 20, marker: { symbol: 'square',        fillColor: '#4ECDC4', radius: 14 } },
					{ y: 30, marker: { symbol: 'diamond',       fillColor: '#45B7D1', radius: 14 } },
					{ y: 40, marker: { symbol: 'star',          fillColor: '#96CEB4', radius: 14 } },
					{ y: 50, marker: { symbol: 'heart',         fillColor: '#FECA57', radius: 14 } },
					{ y: 60, marker: { symbol: 'moon',          fillColor: '#FF9FF3', radius: 14 } },
					{ y: 70, marker: { symbol: 'pentagon',      fillColor: '#54A0FF', radius: 14 } },
					{ y: 80, marker: { symbol: 'hexagon',       fillColor: '#5F27CD', radius: 14 } },
					{ y: 90, marker: { symbol: 'octagon',       fillColor: '#00D2D3', radius: 14 } },
					{ y: 100, marker: { symbol: 'teardrop',     fillColor: '#FFA502', radius: 14 } },
					{ y: 110, marker: { symbol: 'triangle',     fillColor: '#E84393', radius: 14 } },
					{ y: 120, marker: { symbol: 'triangle-down', fillColor: '#6C5CE7', radius: 14 } },
				],
				marker: {
					lineColor: '#fff',
					lineWidth: 2,
					states: { hover: { radius: 18, lineWidth: 2 } },
				},
				lineWidth: 1,
				color: '#ccc',
			}],
			plotOptions: {
				line: { marker: { enabled: true } },
			},
			tooltip: {
				pointFormat: '<b>{point.category}</b>',
			},
		});
	}, []);

	return <div ref={chartRef} style={{ width: 860, height: 380 }} />;
};

/**
 * A quarterly subscription performance chart where symbol shape encodes
 * product tier — making data readable even in greyscale or without a legend.
 * Demonstrates how custom primitives add a second visual channel beyond colour.
 */
export const SubscriptionTierPerformance = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (!chartRef.current) return;

		Highcharts.chart(chartRef.current, {
			chart: { type: 'line', spacingTop: 20 },
			title: { text: 'Subscription Tier Performance' },
			subtitle: { text: 'Net Promoter Score by plan — Q1 to Q4 2024' },
			credits: { enabled: false },
			xAxis: {
				categories: ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
				crosshair: true,
			},
			yAxis: {
				title: { text: 'Net Promoter Score' },
				min: 40,
				max: 100,
				plotLines: [{
					value: 70,
					color: '#ccc',
					dashStyle: 'ShortDash',
					width: 1,
					label: { text: 'Industry average', align: 'right', style: { color: '#999', fontSize: '11px' } },
				}],
			},
			tooltip: {
				shared: true,
				valueSuffix: ' NPS',
			},
			plotOptions: {
				line: {
					marker: { enabled: true },
					lineWidth: 2,
				},
			},
			series: [
				{
					type: 'line',
					name: 'Starter',
					color: '#95a5a6',
					data: [52, 55, 54, 58],
					marker: { symbol: 'circle', radius: 13, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Pro',
					color: '#3498db',
					data: [64, 68, 70, 72],
					marker: { symbol: 'diamond', radius: 13, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Business',
					color: '#f39c12',
					data: [71, 76, 79, 82],
					marker: { symbol: 'star', radius: 15, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Enterprise',
					color: '#9b59b6',
					data: [80, 84, 88, 93],
					marker: { symbol: 'hexagon', radius: 13, lineColor: '#fff', lineWidth: 2 },
				},
			],
		});
	}, []);

	return <div ref={chartRef} style={{ width: 860, height: 460 }} />;
};
