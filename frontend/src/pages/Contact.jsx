import React from 'react';
import { Button } from '../components/ui/button';

// Official contact details for Ardhana Capital
const CONTACT = {
  name: 'Ardhana Capital',
  email: 'info@ardhana.capital',
  phone: '+1 (555) 000-0000',
  hours: 'Mon–Fri, 9:00–17:00 (Local Time)',
  addressNote: 'Office address available upon request',
};

export const Contact = () => {
  const downloadVCard = () => {
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${CONTACT.name}\nORG:${CONTACT.name}\nEMAIL:${CONTACT.email}\nTEL:${CONTACT.phone.replace(/\s+/g, '')}\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ArdhanaCapital.vcf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-4">Contact <span className="text-primary">Ardhana Capital</span></h1>
        <p className="text-muted-foreground mb-6">For official inquiries, please use the contact details below. We do not accept investment applications via online forms. For partnership or investor interest, contact our team directly.</p>

        <div className="space-y-4 bg-card border border-border rounded-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <a className="text-lg font-medium text-primary" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Phone</div>
              <a className="text-lg font-medium text-primary" href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a>
            </div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground">Office</div>
            <div className="text-lg font-medium">{CONTACT.addressNote}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground">Hours</div>
            <div className="text-lg font-medium">{CONTACT.hours}</div>
          </div>

          <div className="pt-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" onClick={downloadVCard}>Download vCard</Button>
          </div>
        </div>
      </div>
    </div>
  );
};