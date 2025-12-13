import { motion } from 'framer-motion';
import { Target, TrendingDown, Activity, BarChart3 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const RiskMetrics = () => {
  const metrics = [
    {
      icon: Target,
      title: 'Sharpe Ratio',
      value: '2.34',
      description: 'Risk-adjusted return measure',
      color: 'text-primary',
    },
    {
      icon: TrendingDown,
      title: 'Max Drawdown',
      value: '-8.5%',
      description: 'Largest peak-to-trough decline',
      color: 'text-destructive',
    },
    {
      icon: Activity,
      title: 'Win Rate',
      value: '73%',
      description: 'Percentage of profitable quarters',
      color: 'text-success',
    },
    {
      icon: BarChart3,
      title: 'Volatility',
      value: '12.3%',
      description: 'Standard deviation of returns',
      color: 'text-primary',
    },
  ];

  const riskAllocationData = [
    { name: 'Low Risk', value: 40, color: 'hsl(145, 72%, 48%)' },
    { name: 'Medium Risk', value: 35, color: 'hsl(33, 95%, 60%)' },
    { name: 'High Risk', value: 25, color: 'hsl(210, 60%, 55%)' },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Risk <span className="text-secondary">Metrics</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Data-driven risk management ensures capital preservation while capturing opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="performance-card group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <metric.icon className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold font-display mb-2">{metric.title}</h3>
              <div className={`text-3xl font-bold metric-value mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="performance-card mb-12"
        >
          <h3 className="text-2xl font-bold font-display mb-6">Risk-Adjusted Excellence</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskAllocationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskAllocationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Our portfolio allocation strategy balances growth potential with capital preservation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="performance-card"
        >
          <h3 className="text-2xl font-bold font-display mb-6">Risk Management Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">Quantitative Analysis</h4>
              <p className="text-muted-foreground leading-relaxed">
                We employ sophisticated statistical models to measure, monitor, and manage risk across
                all portfolio positions. Our systematic approach ensures consistent application of risk
                parameters.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">Diversification Strategy</h4>
              <p className="text-muted-foreground leading-relaxed">
                Strategic allocation across asset classes, sectors, and geographies reduces concentration
                risk while maintaining exposure to high-conviction opportunities.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">Downside Protection</h4>
              <p className="text-muted-foreground leading-relaxed">
                Position sizing and stop-loss disciplines protect capital during adverse market
                conditions. Our maximum drawdown of -8.5% demonstrates effective risk control.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">Continuous Monitoring</h4>
              <p className="text-muted-foreground leading-relaxed">
                Real-time portfolio analytics and daily risk assessments enable rapid response to
                changing market dynamics and emerging risks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};