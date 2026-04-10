import { useEffect, useRef } from 'react';
import Highcharts from 'highcharts';
// Symbols are registered globally via Storybook preview import

export default {
	title: 'PeopleAnalytics/Charts',
	parameters: {
		layout: 'centered',
	},
};

/**
 * A line chart tracking average property values across eight quarters,
 * broken down by property type. Building symbols make the series self-labelling —
 * a house icon on the residential line, an apartment block on the multi-unit
 * line — removing all ambiguity without relying solely on colour.
 *
 * Pattern: one series per property type, marker.symbol set per series.
 */
export const PropertyMarketTrends = () => {
	const chartRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!chartRef.current) return;

		Highcharts.chart(chartRef.current, {
			chart: { type: 'line', spacingTop: 20 },
			title:    { text: 'Property Market: Average Value by Type' },
			subtitle: { text: 'Average asking price (£k) · Q1 2023 – Q4 2024' },
			credits:  { enabled: false },
			xAxis: {
				categories: ['Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24', 'Q4 24'],
				crosshair: true,
			},
			yAxis: {
				title: { text: 'Average Price (£k)' },
				min: 150,
				gridLineDashStyle: 'ShortDash',
				labels: { format: '£{value}k' },
			},
			tooltip: {
				shared: true,
				valuePrefix: '£',
				valueSuffix: 'k',
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
					name: 'Detached House',
					color: '#e74c3c',
					data: [320, 318, 325, 330, 328, 335, 342, 350],
					marker: { symbol: 'house',             radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Apartment',
					color: '#2980b9',
					data: [185, 188, 192, 195, 193, 198, 205, 210],
					marker: { symbol: 'building-apartment', radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Mixed Use',
					color: '#27ae60',
					data: [280, 285, 290, 295, 300, 308, 315, 322],
					marker: { symbol: 'building',          radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
				{
					type: 'line',
					name: 'Commercial',
					color: '#8e44ad',
					data: [450, 445, 440, 460, 455, 468, 472, 480],
					marker: { symbol: 'building-office',   radius: 14, lineColor: '#fff', lineWidth: 2 },
				},
			],
		});
	}, []);

	return <div ref={chartRef} style={{ width: 900, height: 480 }} />;
};

/**
 * A column chart showing headcount distribution across work arrangements,
 * with people-analytics symbols floating above each bar to make the
 * work-setting immediately recognisable without reading axis labels.
 *
 * Gift and cross are used here for two key adjacent metrics: recognition
 * programme enrolment and medical leave, which naturally extend the
 * people-analytics symbol set into an HR context.
 *
 * Pattern: colorByPoint column series + single scatter series with
 * per-point marker symbols (same approach as Transportation/UrbanModalShare).
 */
export const WorkforceByArrangement = () => {
	const chartRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!chartRef.current) return;

		const segments = [
			{ label: 'Head Office',    symbol: 'building-office',   color: '#2980b9', value: 820  },
			{ label: 'Regional Hub',   symbol: 'building',          color: '#8e44ad', value: 310  },
			{ label: 'Co-working',     symbol: 'building-apartment', color: '#27ae60', value: 195  },
			{ label: 'Work from Home', symbol: 'house',             color: '#e74c3c', value: 640  },
			{ label: 'Parental Leave', symbol: 'baby',              color: '#f39c12', value: 48   },
			{ label: 'Recognition',    symbol: 'gift',              color: '#1abc9c', value: 280  },
			{ label: 'Medical Leave',  symbol: 'cross',             color: '#e67e22', value: 32   },
		];

		Highcharts.chart(chartRef.current, {
			chart: {
				type: 'column',
				spacingTop: 30,
				spacingBottom: 20,
			},
			title:    { text: 'Workforce Distribution by Arrangement' },
			subtitle: { text: 'Headcount across work settings and leave categories · FY 2025' },
			credits:  { enabled: false },
			xAxis: {
				categories: segments.map(s => s.label),
				crosshair: true,
			},
			yAxis: {
				title: { text: 'Headcount' },
				gridLineDashStyle: 'ShortDash',
			},
			legend: { enabled: false },
			tooltip: {
				headerFormat: '<b>{point.key}</b><br/>',
				pointFormat: 'Headcount: <b>{point.y}</b>',
			},
			plotOptions: {
				column: {
					colorByPoint: true,
					colors: segments.map(s => s.color),
					borderRadius: 4,
					dataLabels: {
						enabled: true,
						format: '{y}',
						style: { fontWeight: 'bold', fontSize: '11px', textOutline: 'none' },
						y: -38,
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
					name: 'Headcount',
					data: segments.map(s => s.value),
				},
				{
					type: 'scatter',
					name: 'Arrangement Icons',
					showInLegend: false,
					enableMouseTracking: false,
					data: segments.map((s, i) => ({
						x: i,
						y: s.value + 28,
						marker: {
							symbol: s.symbol,
							radius: 15,
							fillColor: s.color,
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
