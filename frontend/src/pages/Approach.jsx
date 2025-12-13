import { motion } from 'framer-motion';
import { Lightbulb, Database, Target, Award } from 'lucide-react';

export const Approach = () => {
  const principles = [
    {
      icon: Database,
      title: 'Data Intelligence',
      description:
        'Every investment decision is supported by comprehensive data analysis. We process market data, historical patterns, and real-time indicators to identify high-probability opportunities.',
    },
    {
      icon: Target,
      title: 'Disciplined Execution',
      description:
        'We follow strict entry and exit criteria based on our quantitative models. Emotional decision-making is eliminated through systematic rules and automated alerts.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description:
        'Markets evolve, and so do we. Our team continuously refines our models and strategies based on new data, market conditions, and emerging opportunities.',
    },
    {
      icon: Award,
      title: 'Client Success',
      description:
        'Your success is our success. We align our interests with yours through transparent fee structures and a commitment to long-term partnership.',
    },
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
            Our <span className="text-primary">Approach</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four core principles guide every decision we make at Ardhana Capital.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="performance-card mb-12 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold font-display mb-6 text-center">
            Transparency is Our Foundation
          </h2>
          <p className="text-muted-foreground text-center leading-relaxed max-w-3xl mx-auto mb-8">
            We provide complete visibility into our portfolio performance, risk metrics, and
            decision-making process. You'll always know where your capital is invested, how it's
            performing, and why we made each strategic decision. Our quarterly reports break down every
            aspect of fund performance with full transparency.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '100%',
                subtitle: 'Portfolio Visibility',
                color: 'text-primary',
              },
              {
                title: 'Quarterly',
                subtitle: 'Detailed Reports',
                color: 'text-secondary',
              },
              {
                title: 'Real-Time',
                subtitle: 'Data Access',
                color: 'text-primary',
              },
            ].map((item, index) => (
              <div key={index} className="stat-card p-6 text-center">
                <div className={`text-4xl font-bold metric-value mb-2 ${item.color}`}>
                  {item.title}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="performance-card group"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold font-display mb-3">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="performance-card max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold font-display mb-6">Investment Process</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  1
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Market Analysis</h4>
                <p className="text-muted-foreground">
                  Our team analyzes market conditions, sector trends, and individual securities using
                  proprietary quantitative models and data analytics platforms.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  2
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Opportunity Identification</h4>
                <p className="text-muted-foreground">
                  We identify high-probability investment opportunities that meet our risk-adjusted
                  return criteria and align with our portfolio strategy.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  3
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Risk Assessment</h4>
                <p className="text-muted-foreground">
                  Each position is evaluated for risk exposure, position sizing, and correlation with
                  existing holdings to ensure proper diversification.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  4
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Execution & Monitoring</h4>
                <p className="text-muted-foreground">
                  Trades are executed systematically, and positions are monitored continuously with
                  predefined exit criteria and stop-loss parameters.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  5
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Performance Review</h4>
                <p className="text-muted-foreground">
                  We conduct thorough quarterly reviews to assess strategy effectiveness, identify areas
                  for improvement, and communicate results to our clients.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};