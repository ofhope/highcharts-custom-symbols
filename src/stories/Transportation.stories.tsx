import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
// Symbols are registered globally via Storybook preview import

export default {
	title: 'Transportation/Charts',
	parameters: {
		layout: 'centered',
	},
};

// ─── Shared palette ───────────────────────────────────────────────────────────
const TRANSPORT_COLORS: Record<string, string> = {
	bicycle:    '#27ae60',
	car:        '#e74c3c',
	bus:        '#f39c12',
	train:      '#2980b9',
	tram:       '#8e44ad',
	motorcycle: '#16a085',
	van:        '#d35400',
	scooter:    '#1abc9c',
	moped:      '#e67e22',
};

/**
 * A column chart overlaid with matching transport symbols at the top of each
 * bar. Demonstrates the most straightforward use-case: categorical data where
 * the subject of each category is a vehicle.
 *
 * Symbol placement uses a single scatter series with per-point marker config,
 * which keeps the series list lean and the legend clean.
 */
export const UrbanModalShare = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (!chartRef.current) return;

		const modes   = ['bicycle', 'car', 'bus', 'train', 'tram', 'motorcycle', 'van'] as const;
		const labels  = ['Bicycle', 'Car', 'Bus', 'Train', 'Tram', 'Motorcycle', 'Van'];
		const data    = [22, 35, 18, 14, 7, 3, 1];
		const colors  = modes.map(m => TRANSPORT_COLORS[m]);

		Highcharts.chart(chartRef.current, {
			chart: {
				type: 'column',
				spacingTop: 30,
				spacingBottom: 20,
			},
			title:    { text: 'How Does the City Move?' },
			subtitle: { text: 'Transport mode share — % of daily trips, European urban average' },
			credits:  { enabled: false },
			xAxis: {
				categories: labels,
				crosshair: true,
				lineColor: '#ddd',
				tickColor: '#ddd',
			},
			yAxis: {
				title: { text: 'Modal Share (%)' },
				max: 52,
				labels: { format: '{value}%' },
				gridLineDashStyle: 'ShortDash',
			},
			legend: { enabled: false },
			tooltip: {
				headerFormat: '<span style="font-size:11px;font-weight:bold">{point.key}</span><br/>',
				pointFormat: '{point.y}% of daily trips',
			},
			plotOptions: {
				column: {
					colorByPoint: true,
					colors,
					borderRadius: 4,
					dataLabels: {
						enabled: true,
						format: '{y}%',
						style: { fontWeight: 'bold', fontSize: '11px', textOutline: 'none' },
						y: -4,
					},
				},
				scatter: {
					showInLegend: false,
					enableMouseTracking: false,
					states: { hover: { enabled: false } },
				},
			},
			series: [
				{
					type: 'column',
					name: 'Modal Share',
					data,
				},
				// One scatter series; each point carries its own marker symbol
				{
					type: 'scatter',
					name: 'Transport Icons',
					showInLegend: false,
					enableMouseTracking: false,
					data: modes.map((mode, i) => ({
						x: i,
						y: data[i] + 4,   // float the icon just above the bar
						marker: {
							symbol: mode,
							radius: 16,
							fillColor: colors[i],
							lineWidth: 0,
						},
					})),
				} as Highcharts.SeriesScatterOptions,
			],
		});
	}, []);

	return <div ref={chartRef} style={{ width: 860, height: 480 }} />;
};

/**
 * A multi-series line chart where each series uses a different transport
 * symbol as its point marker. Real-world data pattern: tracking journey
 * times by mode across a working week to surface peak-day congestion.
 *
 * Custom symbols make the chart legible in black-and-white and give the
 * legend immediate visual meaning — no need to map colour back to mode.
 */
export const WeeklyCommuteTracker = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (!chartRef.current) return;

		Highcharts.chart(chartRef.current, {
			chart: { type: 'line', spacingTop: 20 },
			title:    { text: 'Commute Times Across the Week' },
			subtitle: { text: 'Average door-to-door journey time (min) · city centre → suburbs' },
			credits:  { enabled: false },
			xAxis: {
				categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				crosshair: true,
			},
			yAxis: {
				title: { text: 'Journey Time (min)' },
				min: 15,
				gridLineDashStyle: 'ShortDash',
			},
			tooltip: {
				shared: true,
				valueSuffix: ' min',
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
					name: 'Bicycle',
					color: TRANSPORT_COLORS.bicycle,
					data: [28, 27, 29, 28, 30],
					marker: { symbol: 'bicycle', radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Train',
					color: TRANSPORT_COLORS.train,
					data: [35, 34, 36, 35, 33],
					marker: { symbol: 'train', radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Bus',
					color: TRANSPORT_COLORS.bus,
					data: [42, 48, 44, 50, 58],
					marker: { symbol: 'bus', radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Car',
					color: TRANSPORT_COLORS.car,
					data: [45, 52, 48, 56, 65],
					marker: { symbol: 'car', radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
			],
		});
	}, []);

	return <div ref={chartRef} style={{ width: 860, height: 480 }} />;
};

/**
 * A scatter chart comparing cost-per-km against CO₂ emissions for seven
 * transport modes. Each mode is its own scatter series so it carries a
 * unique symbol, colour, and name in the tooltip.
 *
 * This is the richest demonstration of transport symbols: shape, colour,
 * and position all encode meaning simultaneously.
 */
export const CostVsCarbon = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		if (!chartRef.current) return;

		const modes = [
			{ name: 'Bicycle',     symbol: 'bicycle',    color: TRANSPORT_COLORS.bicycle,    x: 0.02, y: 0   },
			{ name: 'Scooter',     symbol: 'scooter',    color: TRANSPORT_COLORS.scooter,    x: 0.08, y: 22  },
			{ name: 'Tram',        symbol: 'tram',       color: TRANSPORT_COLORS.tram,       x: 0.14, y: 29  },
			{ name: 'Train',       symbol: 'train',      color: TRANSPORT_COLORS.train,      x: 0.12, y: 41  },
			{ name: 'Bus',         symbol: 'bus',        color: TRANSPORT_COLORS.bus,        x: 0.18, y: 89  },
			{ name: 'Moped',       symbol: 'moped',      color: TRANSPORT_COLORS.moped,      x: 0.20, y: 72  },
			{ name: 'Motorcycle',  symbol: 'motorcycle', color: TRANSPORT_COLORS.motorcycle, x: 0.25, y: 103 },
			{ name: 'Car',         symbol: 'car',        color: TRANSPORT_COLORS.car,        x: 0.35, y: 192 },
			{ name: 'Van',         symbol: 'van',        color: TRANSPORT_COLORS.van,        x: 0.55, y: 268 },
		];

		Highcharts.chart(chartRef.current, {
			chart: { type: 'scatter', spacingTop: 20, spacingRight: 30 },
			title:    { text: 'Cost vs Carbon: Transport Mode Comparison' },
			subtitle: { text: 'Per kilometre — estimated cost (£) and CO₂ emissions (g)' },
			credits:  { enabled: false },
			xAxis: {
				title: { text: 'Cost per km (£)' },
				min: -0.02,
				gridLineDashStyle: 'ShortDash',
			},
			yAxis: {
				title: { text: 'CO₂ emissions per km (g)' },
				min: -10,
				gridLineDashStyle: 'ShortDash',
				plotLines: [{
					value: 0,
					color: '#27ae60',
					dashStyle: 'ShortDash',
					width: 1,
					label: {
						text: 'Zero emissions',
						style: { color: '#27ae60', fontSize: '11px' },
					},
				}],
			},
			legend: { enabled: false },
			tooltip: {
				useHTML: true,
				formatter: function () {
					return `<b>${this.series.name}</b><br/>
						Cost: <b>£${this.x}/km</b><br/>
						CO₂: <b>${this.y}g/km</b>`;
				},
			},
			plotOptions: {
				scatter: {
					dataLabels: {
						enabled: true,
						format: '{series.name}',
						style: {
							fontSize: '11px',
							fontWeight: 'normal',
							textOutline: 'none',
							color: '#555',
						},
						y: -22,
					},
				},
			},
			series: modes.map(m => ({
				type: 'scatter' as const,
				name: m.name,
				color: m.color,
				data: [{ x: m.x, y: m.y }],
				marker: {
					symbol: m.symbol,
					radius: 18,
					fillColor: m.color,
					lineColor: '#fff',
					lineWidth: 2,
				},
			})),
		});
	}, []);

	return <div ref={chartRef} style={{ width: 860, height: 520 }} />;
};
