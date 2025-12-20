import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { ArrowRight, TrendingUp, Shield, LineChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [counts, setCounts] = useState({
    aum: 0,
    clients: 0,
    return: 0,
    year: 2018,
  });

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounts({
          aum: Math.floor(247 * progress),
          clients: Math.floor(850 * progress),
          return: (14.2 * progress).toFixed(1),
          year: 2018,
        });

        if (step >= steps) clearInterval(timer);
      }, interval);
    };

    animateCounts();
  }, []);

  const stats = [
    {
      value: `$${counts.aum}M`,
      label: 'Assets Under Management',
      color: 'text-primary',
    },
    {
      value: `${counts.clients}+`,
      label: 'Trusted Clients',
      color: 'text-secondary',
    },
    {
      value: `${counts.return}%`,
      label: 'Avg Quarterly Return',
      color: 'text-primary',
    },
    {
      value: counts.year,
      label: 'Established',
      color: 'text-secondary',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm"
            >
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">99% Data-Driven Fund Management</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              Ardhana
              <br />
              <span className="gradient-text">Capital</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Elite fund management powered by data intelligence and disciplined risk management.
              We educate, we transparency, we perform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/performance">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base group"
                >
                  View Portfolio Performance
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/approach">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted h-12 px-8 text-base"
                >
                  Learn Our Approach
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-24 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-card p-6 text-center">
                <div className={`metric-value text-3xl md:text-4xl mb-2 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
              Why Choose <span className="text-primary">Ardhana Capital</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine cutting-edge data analytics with time-tested investment principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: LineChart,
                title: 'Data-Driven',
                description: '99% of decisions backed by quantitative analysis and market intelligence',
              },
              {
                icon: Shield,
                title: 'Risk Management',
                description: 'Systematic approach to capital preservation and downside protection',
              },
              {
                icon: TrendingUp,
                title: 'Consistent Returns',
                description: '14.2% average quarterly returns through disciplined strategy execution',
              },
              {
                icon: Users,
                title: 'Client Education',
                description: 'Complete transparency and ongoing education for informed partnership',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="performance-card group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold font-display mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
                Ready to Start Your Investment Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join over 850 clients who trust us with their financial future
              </p>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};