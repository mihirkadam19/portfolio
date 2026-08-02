import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Linkedin, Github } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setStatus('loading');

    const { error } = await supabase.from('contact_submissions').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Contact</SectionLabel>

        <div className="grid lg:grid-cols-2 gap-16 mt-12">
          {/* Left */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Let's build something<br />
              <span className="text-zinc-400">great together</span>
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Whether you have a project in mind, a role to fill, or just want to talk AI &mdash;
              I'm always happy to connect.
            </p>

            <div className="space-y-4">
              <ContactLink
                icon={<Mail size={16} />}
                label="mihirkadam1234@gmail.com"
                href="mailto:mihirkadam1234@gmail.com"
              />
              <ContactLink
                icon={<Linkedin size={16} />}
                label="linkedin.com/in/mihir-kadam-447a8421a"
                href="https://linkedin.com/in/mihir-kadam-447a8421a"
              />
              <ContactLink
                icon={<Github size={16} />}
                label="github.com/mihirkadam19"
                href="https://github.com/mihirkadam19"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 text-center py-16">
                <CheckCircle size={40} className="text-emerald-400" />
                <h3 className="text-white font-semibold text-lg">Message sent!</h3>
                <p className="text-zinc-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs text-zinc-500 hover:text-white underline underline-offset-2 transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Field
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'loading'}
                />
                <div>
                  <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === 'loading'}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/25 transition-colors resize-none disabled:opacity-50"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading' || !form.name || !form.email || !form.message}
                  className="w-full flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 font-semibold text-sm py-3 rounded-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02]"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-zinc-400 border-t-zinc-900 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  disabled,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}) {
  return (
    <div>
      <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/25 transition-colors disabled:opacity-50"
      />
    </div>
  );
}

function ContactLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
    >
      <span className="text-zinc-600 group-hover:text-white transition-colors">{icon}</span>
      <span className="text-sm">{label}</span>
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-px bg-zinc-700" />
      <span className="text-xs text-zinc-500 uppercase tracking-widest">{children}</span>
    </div>
  );
}
