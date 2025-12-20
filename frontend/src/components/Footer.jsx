import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="site-footer" className="border-t border-border bg-card/50 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-4 md:mb-0">
          <div className="text-lg font-semibold">Ardhana Capital</div>
          <div className="text-sm text-muted-foreground">Data-driven fund management</div>
        </div>

        <div className="space-y-1 text-sm text-muted-foreground text-right">
          <div>Email: <a href="mailto:info@ardhana.capital" className="text-primary">info@ardhana.capital</a></div>
          <div>Phone: <a href="tel:+15550000000" className="text-primary">+1 (555) 000-0000</a></div>
          <div className="mt-1"><Link to="/contact" className="text-primary underline">Contact Us</Link></div>
        </div>
      </div>
    </footer>
  );
};