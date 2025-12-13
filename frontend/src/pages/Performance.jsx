import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Performance = () => {
  const [viewMode, setViewMode] = useState('quarterly');

  const quarterlyData = [
    { quarter: 'Q1 2024', return: 12.5, benchmark: 8.2, outperformance: 4.3, risk: 'Low' },
    { quarter: 'Q2 2024', return: -3.2, benchmark: -5.1, outperformance: 1.9, risk: 'Medium' },
    { quarter: 'Q3 2024', return: 18.7, benchmark: 12.3, outperformance: 6.4, risk: 'Low' },
    { quarter: 'Q4 2024', return: 9.4, benchmark: 7.8, outperformance: 1.6, risk: 'Low' },
  ];

  const yearlyData = [
    { year: '2019', return: 23.4, benchmark: 18.9 },
    { year: '2020', return: 15.2, benchmark: 12.1 },
    { year: '2021', return: 31.7, benchmark: 24.3 },
    { year: '2022', return: -8.3, benchmark: -12.6 },
    { year: '2023', return: 28.9, benchmark: 22.1 },
    { year: '2024', return: 37.4, benchmark: 28.5 },
  ];

  const data = viewMode === 'quarterly' ? quarterlyData : yearlyData;
  const totalReturn = viewMode === 'quarterly' ? '+37.4%' : '+128.3%';

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Portfolio <span className="text-primary">Performance</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent, data-driven results. We show you the complete picture - wins and losses.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setViewMode('quarterly')}
              className={`px-8 ${
                viewMode === 'quarterly'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Quarterly
            </Button>
            <Button
              onClick={() => setViewMode('yearly')}
              className={`px-8 ${
                viewMode === 'yearly'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              Yearly
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {data.map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="performance-card"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold font-display">
                    {viewMode === 'quarterly' ? period.quarter : period.year}
                  </h3>
                  {viewMode === 'quarterly' && (
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        period.risk === 'Low'
                          ? 'bg-success/10 text-success'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      Risk Level: {period.risk}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Ardhana Return</div>
                    <div
                      className={`flex items-center gap-2 text-2xl font-bold metric-value ${
                        period.return >= 0 ? 'text-success' : 'text-destructive'
                      }`}
                    >
                      {period.return >= 0 ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : (
                        <TrendingDown className="w-5 h-5" />
                      )}
                      {period.return > 0 ? '+' : ''}
                      {period.return}%
                    </div>
                  </div>

                  <div className="border-t border-border pt-3">
                    <div className="text-sm text-muted-foreground mb-1">Benchmark</div>
                    <div className="text-lg metric-value text-muted-foreground">
                      {period.benchmark > 0 ? '+' : ''}
                      {period.benchmark}%
                    </div>
                  </div>

                  {viewMode === 'quarterly' && (
                    <div className="border-t border-border pt-3">
                      <div className="text-sm text-muted-foreground mb-1">Outperformance</div>
                      <div className="text-lg metric-value text-primary">
                        +{period.outperformance}%
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="performance-card"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold font-display">
                {viewMode === 'quarterly' ? '2024 Total Performance' : 'Cumulative Performance'}
              </h3>
              <div className="text-3xl font-bold metric-value text-primary">{totalReturn}</div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey={viewMode === 'quarterly' ? 'quarter' : 'year'}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="return"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    name="Ardhana Return"
                  />
                  <Line
                    type="monotone"
                    dataKey="benchmark"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Benchmark"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};