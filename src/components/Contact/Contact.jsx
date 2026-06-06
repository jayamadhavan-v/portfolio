import { useState } from 'react';
import { contact } from '../../data/portfolioData.js';

const initialForm = {
  name: '',
  email: '',
  description: '',
};

function Contact() {
  const [formValues, setFormValues] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues(initialForm);
  };

  return (
    <section className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-bright relative z-10" id="contact">
      <div className="max-w-[1280px] mx-auto px-8 grid md:grid-cols-2 gap-20">
        <div className="space-y-12 reveal active">
          <div className="space-y-4">
            <h2 className="text-on-background font-headline-lg text-headline-lg">{contact.title}</h2>
            <p className="text-on-surface-variant font-body-lg text-body-lg">{contact.description}</p>
          </div>
          <div className="space-y-6">
            {contact.items.map((item, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <div className="text-on-surface-variant font-label-md text-label-md">{item.label}</div>
                  <div className="text-on-surface font-body-lg text-body-lg font-semibold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-card p-10 rounded-3xl glow-primary reveal active">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-on-surface-variant font-label-md text-label-md block">Full Name</label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-3"
                placeholder="John Doe"
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-on-surface-variant font-label-md text-label-md block">Email Address</label>
              <input
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-3"
                placeholder="john@example.com"
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-on-surface-variant font-label-md text-label-md block">Project Description</label>
              <textarea
                className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all py-3 resize-none"
                placeholder="Tell me about your vision..."
                rows="4"
                name="description"
                value={formValues.description}
                onChange={handleChange}
              />
            </div>
            <button
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-label-md text-label-md hover:shadow-xl btn-glow hover:-translate-y-1 transition-all active:scale-95"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
