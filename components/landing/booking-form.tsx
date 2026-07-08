"use client";

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, service, date, notes }),
      });
      const json = await res.json();
      
      if (!res.ok) {
        toast({
          title: "Error",
          description: json?.error || 'Failed to submit booking',
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Success!",
        description: "Booking sent — we will contact you soon.",
        variant: "default",
      });
      
      setName('');
      setEmail('');
      setPhone('');
      setService('');
      setDate('');
      setNotes('');
    } catch (err: any) {
      toast({
        title: "Error",
        description: String(err.message || 'Something went wrong'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
      <input 
        required 
        value={name} 
        onChange={e=>setName(e.target.value)} 
        placeholder="Full name" 
        disabled={isSubmitting}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground disabled:opacity-50 dark:bg-input/30" 
      />
      <input 
        required 
        value={email} 
        onChange={e=>setEmail(e.target.value)} 
        placeholder="Email" 
        type="email" 
        disabled={isSubmitting}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground disabled:opacity-50 dark:bg-input/30" 
      />
      <input 
        value={phone} 
        onChange={e=>setPhone(e.target.value)} 
        placeholder="Phone" 
        disabled={isSubmitting}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground disabled:opacity-50 dark:bg-input/30" 
      />
      <input 
        value={service} 
        onChange={e=>setService(e.target.value)} 
        placeholder="Service (e.g. boiler repair)" 
        disabled={isSubmitting}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground disabled:opacity-50 dark:bg-input/30" 
      />
      <input 
        value={date} 
        onChange={e=>setDate(e.target.value)} 
        placeholder="Preferred date" 
        disabled={isSubmitting}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground disabled:opacity-50 dark:bg-input/30" 
      />
      <textarea 
        value={notes} 
        onChange={e=>setNotes(e.target.value)} 
        placeholder="Additional notes" 
        disabled={isSubmitting}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-foreground disabled:opacity-50 dark:bg-input/30" 
      />
      <div className="flex items-center gap-2">
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="px-4 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Request Booking'}
        </button>
      </div>
    </form>
  );
}
