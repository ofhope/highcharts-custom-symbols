import { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
// Symbols are registered globally via Storybook preview import

export default {
	title: 'Decorative/Charts',
	parameters: {
		layout: 'centered',
	},
};

/**
 * A multi-series line chart where each content category carries its own
 * decorative symbol as a point marker. The symbol choice is intentional —
 * heart for wellness, star for technology, puzzle for science — giving the
 * legend a visual shorthand that readers internalise faster than colour alone.
 *
 * Pattern: one series per category, marker.symbol set per series.
 */
export const ContentCategoryPerformance = () => {
	const chartRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!chartRef.current) return;

		Highcharts.chart(chartRef.current, {
			chart: { type: 'line', spacingTop: 20 },
			title:    { text: 'Monthly Readership by Content Category' },
			subtitle: { text: 'Unique readers (thousands) · Nov 2024 – Apr 2025' },
			credits:  { enabled: false },
			xAxis: {
				categories: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
				crosshair: true,
			},
			yAxis: {
				title: { text: 'Unique Readers (k)' },
				min: 0,
				gridLineDashStyle: 'ShortDash',
			},
			tooltip: {
				shared: true,
				valueSuffix: 'k readers',
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
					name: 'Wellness',
					color: '#e74c3c',
					data: [42, 58, 61, 55, 67, 72],
					marker: { symbol: 'heart',     radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Technology',
					color: '#f39c12',
					data: [38, 35, 44, 50, 53, 60],
					marker: { symbol: 'star',      radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Science',
					color: '#2980b9',
					data: [28, 30, 33, 36, 34, 40],
					marker: { symbol: 'puzzle',    radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Events',
					color: '#9b59b6',
					data: [20, 48, 22, 25, 30, 45],
					marker: { symbol: 'balloon',   radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Night Reads',
					color: '#34495e',
					data: [18, 22, 25, 28, 24, 27],
					marker: { symbol: 'moon',      radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Deals & Offers',
					color: '#27ae60',
					data: [15, 30, 20, 18, 22, 19],
					marker: { symbol: 'tag',       radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
			],
		});
	}, []);

	return <div ref={chartRef} style={{ width: 900, height: 480 }} />;
};

/**
 * A column chart tracking sprint-by-sprint engineering health metrics.
 * Different KPI types are distinguished by decorative symbols floated above
 * each column — replacing dry axis labels with icons that signal the
 * nature of the metric at a glance.
 *
 * Pattern: single column series (colorByPoint) + one scatter series with
 * per-point marker symbols, mirroring the transportation UrbanModalShare
 * approach.
 */
export const SprintHealthDashboard = () => {
	const chartRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!chartRef.current) return;

		const metrics = [
			{ label: 'Team Morale',        symbol: 'heart',     color: '#e74c3c', value: 85 },
			{ label: 'Stories Delivered',  symbol: 'star',      color: '#f39c12', value: 72 },
			{ label: 'Blockers Resolved',  symbol: 'bomb',      color: '#e67e22', value: 60 },
			{ label: 'Open Unknowns',      symbol: 'puzzle',    color: '#2980b9', value: 48 },
			{ label: 'Energy Index',       symbol: 'lightling', color: '#1abc9c', value: 78 },
			{ label: 'Milestone Hit Rate', symbol: 'balloon',   color: '#9b59b6', value: 90 },
		];

		Highcharts.chart(chartRef.current, {
			chart: {
				type: 'column',
				spacingTop: 30,
				spacingBottom: 20,
			},
			title:    { text: 'Sprint Health Dashboard — Sprint 24' },
			subtitle: { text: 'Score out of 100 per KPI category' },
			credits:  { enabled: false },
			xAxis: {
				categories: metrics.map(m => m.label),
				crosshair: true,
			},
			yAxis: {
				title: { text: 'Score' },
				max: 115,
				min: 0,
				labels: { format: '{value}' },
				gridLineDashStyle: 'ShortDash',
				plotLines: [{
					value: 70,
					color: '#ccc',
					dashStyle: 'ShortDash',
					width: 1,
					label: {
						text: 'Target threshold',
						align: 'right',
						style: { color: '#aaa', fontSize: '11px' },
					},
				}],
			},
			legend: { enabled: false },
			tooltip: {
				headerFormat: '<b>{point.key}</b><br/>',
				pointFormat: 'Score: <b>{point.y}/100</b>',
			},
			plotOptions: {
				column: {
					colorByPoint: true,
					colors: metrics.map(m => m.color),
					borderRadius: 4,
					dataLabels: {
						enabled: true,
						format: '{y}',
						style: { fontWeight: 'bold', fontSize: '12px', textOutline: 'none' },
						y: -40,
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
					name: 'KPI Score',
					data: metrics.map(m => m.value),
				},
				{
					type: 'scatter',
					name: 'KPI Icons',
					showInLegend: false,
					enableMouseTracking: false,
					data: metrics.map((m, i) => ({
						x: i,
						y: m.value + 8,
						marker: {
							symbol: m.symbol,
							radius: 15,
							fillColor: m.color,
							lineColor: '#333',
							lineWidth: 0,
						},
					})),
				} as Highcharts.SeriesScatterOptions,
			],
		});
	}, []);

	return <div ref={chartRef} style={{ width: 900, height: 500 }} />;
};
