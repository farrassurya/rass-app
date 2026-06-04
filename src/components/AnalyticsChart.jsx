import { useMemo, useState } from 'react';
import PanelCard from './PanelCard.jsx';
import ChartLegend from './ChartLegend.jsx';
import SelectField from './SelectField.jsx';

export default function AnalyticsChart({ analytics }) {
  const [range, setRange] = useState('Year');
  const [activePoint, setActivePoint] = useState(null);

  const chartData = range === 'Month' ? analytics.monthly : analytics.yearly;
  const maxValue = useMemo(
    () => Math.max(...chartData.map((item) => Math.max(item.revenue, item.expenses))),
    [chartData]
  );

  const chartConfig = {
    width: 780,
    height: 320,
    paddingX: 24,
    paddingTop: 18,
    paddingBottom: 44,
  };

  const innerHeight = chartConfig.height - chartConfig.paddingTop - chartConfig.paddingBottom;
  const stepX =
    chartData.length > 1 ? (chartConfig.width - chartConfig.paddingX * 2) / (chartData.length - 1) : 0;

  const pointX = (index) => chartConfig.paddingX + index * stepX;
  const pointY = (value) =>
    chartConfig.height - chartConfig.paddingBottom - (value / maxValue) * innerHeight;

  const makePath = (values) =>
    values.map((value, index) => `${index === 0 ? 'M' : 'L'} ${pointX(index)} ${pointY(value)}`).join(' ');

  const makeArea = (values) => {
    const linePath = makePath(values);
    const endX = pointX(values.length - 1);
    const baseY = chartConfig.height - chartConfig.paddingBottom;
    return `${linePath} L ${endX} ${baseY} L ${pointX(0)} ${baseY} Z`;
  };

  const revenueValues = chartData.map((item) => item.revenue);
  const expenseValues = chartData.map((item) => item.expenses);
  const gridValues = Array.from({ length: 6 }, (_, index) => Math.round((maxValue / 5) * index));

  return (
    <PanelCard className="p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Analytics</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">Revenue analytics</h3>
        </div>
        <div className="w-28">
          <SelectField
            value={range}
            onChange={(event) => {
              setRange(event.target.value);
              setActivePoint(null);
            }}
            options={["Year", "Month"]}
          />
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-[#334E68]/50 bg-slate-900/30 px-4 py-4">
        <svg viewBox={`0 0 ${chartConfig.width} ${chartConfig.height}`} className="h-72 w-full" role="img" aria-label="Revenue and expense analytics">
          <defs>
            <linearGradient id="revenueArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#63C9F8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#63C9F8" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="expenseArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B57E0" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#7B57E0" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          {gridValues.map((value) => {
            const y = pointY(value);
            return (
              <g key={`grid-${value}`}>
                <line x1={chartConfig.paddingX} y1={y} x2={chartConfig.width - chartConfig.paddingX} y2={y} stroke="rgba(184,192,204,0.2)" strokeDasharray="5 6" />
                <text x={4} y={y + 4} fill="#B8C0CC" fontSize="11">${Math.round(value / 1000)}k</text>
              </g>
            );
          })}

          <path d={makeArea(expenseValues)} fill="url(#expenseArea)" />
          <path d={makeArea(revenueValues)} fill="url(#revenueArea)" />
          <path d={makePath(expenseValues)} fill="none" stroke="#8D73F8" strokeWidth="2" />
          <path d={makePath(revenueValues)} fill="none" stroke="#63C9F8" strokeWidth="2" />

          {chartData.map((item, index) => {
            const x = pointX(index);
            return (
              <g key={`label-${item.label}`}>
                <text x={x} y={chartConfig.height - 16} textAnchor="middle" fill="#B8C0CC" fontSize="12">
                  {item.label}
                </text>
                <rect
                  x={x - Math.max(stepX / 2, 14)}
                  y={chartConfig.paddingTop}
                  width={Math.max(stepX, 28)}
                  height={innerHeight}
                  fill="transparent"
                  onMouseEnter={() => setActivePoint(index)}
                  onFocus={() => setActivePoint(index)}
                />
              </g>
            );
          })}

          {activePoint !== null ? (
            <g>
              <line x1={pointX(activePoint)} y1={chartConfig.paddingTop} x2={pointX(activePoint)} y2={chartConfig.height - chartConfig.paddingBottom} stroke="rgba(99,201,248,0.5)" strokeDasharray="4 5" />
              <circle cx={pointX(activePoint)} cy={pointY(chartData[activePoint].revenue)} r="4" fill="#63C9F8" />
              <circle cx={pointX(activePoint)} cy={pointY(chartData[activePoint].expenses)} r="4" fill="#8D73F8" />
            </g>
          ) : null}
        </svg>

        {activePoint !== null ? (
          <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 rounded-xl border border-white/10 bg-slate-950/95 px-3 py-2 text-xs text-white shadow-xl">
            <p className="font-semibold text-slate-100">{chartData[activePoint].label}</p>
            <p className="mt-1 text-sky-300">Revenue: ${chartData[activePoint].revenue.toLocaleString()}</p>
            <p className="text-violet-300">Expenses: ${chartData[activePoint].expenses.toLocaleString()}</p>
          </div>
        ) : null}
      </div>

      <ChartLegend
        items={[
          { label: 'Revenue', dotClass: 'bg-[#7B57E0]' },
          { label: 'Expenses', dotClass: 'bg-[#5395CF]' },
        ]}
      />
    </PanelCard>
  );
}