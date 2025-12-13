import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { X } from 'lucide-react';
import { toast } from 'sonner';

export const GetStartedModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('ardhana-contact', JSON.stringify(formData));
    toast.success('Thank you! We will contact you shortly.');
    document.getElementById('get-started-modal').style.display = 'none';
    setFormData({ name: '', email: '', phone: '', investmentAmount: '' });
  };

  const closeModal = () => {
    document.getElementById('get-started-modal').style.display = 'none';
  };

  return (
    <div
      id="get-started-modal"
      className="fixed inset-0 z-[100] hidden items-center justify-center bg-background/80 backdrop-blur-sm"
      onClick={closeModal}
    >
      <div
        className="relative w-full max-w-md mx-4 bg-card border border-border rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold font-display mb-2">
            Start Your Investment Journey
          </h2>
          <p className="text-muted-foreground mb-6">
            Fill in your details and our team will reach out to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="amount">Estimated Investment Amount</Label>
              <Input
                id="amount"
                placeholder="$100,000"
                value={formData.investmentAmount}
                onChange={(e) => setFormData({ ...formData, investmentAmount: e.target.value })}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};