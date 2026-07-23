import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { contactDetails, socialLinks, site } from '@/data/content';
import { sendContactMessage } from '@/utils/contact';
import { motion, useReducedMotion } from 'framer-motion';
import {
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  PhoneCall,
  Send,
  Sparkles,
  X,
} from 'lucide-react';
import { useState, type FormEvent } from 'react';

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactFormState, string>>;

const initialState: ContactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactIconMap = {
  email: Mail,
  phone: PhoneCall,
  location: MapPin,
} as const;

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: X,
  email: Mail,
} as const;

const contactSocialLinks = socialLinks.filter((link) => link.icon !== 'resume');

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  function validate(values: ContactFormState): FieldErrors {
    const nextErrors: FieldErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = 'Please add your name.';
    }

    if (!emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!values.subject.trim()) {
      nextErrors.subject = 'Please add a subject.';
    }

    if (values.message.trim().length < 20) {
      nextErrors.message = 'Please write at least 20 characters.';
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setStatus('submitting');

    try {
      await sendContactMessage(form);
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('idle');
      setErrors({
        message: 'Something went wrong while sending the message. Please try again.',
      });
    }
  }

  return (
    <section id="contact" className="section-shell section-padding scroll-mt-32">
      <div className="section-content rounded-[36px] border border-white/10 bg-[rgba(8,12,24,0.72)] p-6 shadow-card backdrop-blur-2xl md:p-8 xl:p-10">
        <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-text-secondary">
                  Contact
                </p>
                <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
                  Let&apos;s build something <span className="text-gradient">production-ready</span>
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
                  If you need an AI engineer who can move from product thinking to execution without losing
                  quality, this is the right place to start.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {contactDetails.map((detail) => {
                  const Icon = contactIconMap[detail.iconKey];

                  const content = (
                    <>
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
                          {detail.label}
                        </p>
                        <p className="mt-2 truncate text-sm font-medium text-white">{detail.value}</p>
                      </div>
                    </>
                  );

                  if (detail.href) {
                    return (
                      <a
                        key={detail.label}
                        href={detail.href}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition-colors hover:border-white/20 hover:bg-white/10"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={detail.label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {contactSocialLinks.map((link) => {
                  const Icon = socialIconMap[link.icon as keyof typeof socialIconMap];

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.icon === 'email' ? '_self' : '_blank'}
                      rel="noreferrer"
                      aria-label={link.label}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-secondary/35 hover:bg-secondary/15"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}

                <Button href={site.resumeUrl} variant="outline" download>
                  <Download className="h-4 w-4" />
                  Resume
                </Button>
              </div>

              <div className="mt-6 rounded-[28px] border border-secondary/20 bg-secondary/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-violet-100">
                  Preferred collaborations
                </p>
                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  AI products, dashboards, full stack applications, and thoughtful modernization work.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-text-secondary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Open to opportunities
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card grid gap-4 p-6 md:p-8"
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                    Send a message
                  </p>
                  <h3 className="mt-4 max-w-xl font-display text-3xl font-semibold text-white">
                    Tell me what you are building.
                  </h3>
                </div>
                <div className="hidden rounded-full border border-success/25 bg-success/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-100 sm:inline-flex">
                  EmailJS ready
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
                    Name
                  </span>
                  <input
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent/60 focus:outline-none"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name ? <span className="text-xs text-red-200">{errors.name}</span> : null}
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
                    Email
                  </span>
                  <input
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent/60 focus:outline-none"
                    placeholder="you@example.com"
                    type="email"
                    autoComplete="email"
                  />
                  {errors.email ? <span className="text-xs text-red-200">{errors.email}</span> : null}
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
                  Subject
                </span>
                <input
                  value={form.subject}
                  onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent/60 focus:outline-none"
                  placeholder="Project idea, collaboration, or opportunity"
                />
                {errors.subject ? <span className="text-xs text-red-200">{errors.subject}</span> : null}
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.24em] text-text-secondary">
                  Message
                </span>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                  className="min-h-[190px] rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent/60 focus:outline-none"
                  placeholder="Tell me what you are building and how I can help."
                />
                {errors.message ? <span className="text-xs text-red-200">{errors.message}</span> : null}
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button type="submit" variant="primary" className="min-w-[170px]" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : status === 'success' ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {status === 'success' ? 'Message sent' : 'Send message'}
                </Button>
                <p className="text-sm text-text-secondary">
                  Preferred email: {site.contactEmail}
                </p>
              </div>

              {status === 'success' ? (
                <motion.div
                  className="rounded-[24px] border border-success/30 bg-success/10 p-4 text-sm text-emerald-100"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thanks. Your message is ready to send.
                </motion.div>
              ) : null}
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
