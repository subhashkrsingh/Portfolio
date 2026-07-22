import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { socialLinks, site } from '@/data/content';
import { sendContactMessage } from '@/utils/contact';
import { CheckCircle2, Github, Linkedin, LoaderCircle, Mail, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { useMemo, useState, type FormEvent } from 'react';

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

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const contactMethods = useMemo(
    () => [
      { label: 'GitHub', href: socialLinks[0].href, icon: Github },
      { label: 'LinkedIn', href: socialLinks[1].href, icon: Linkedin },
      { label: 'Email', href: socialLinks[2].href, icon: Mail },
    ],
    [],
  );

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
      <div className="section-content">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Start a conversation"
            description="An accessible form with validation, EmailJS support, and a graceful fallback for local development."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <motion.aside
              className="glass-card flex h-full flex-col justify-between p-6"
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-text-secondary">
                  Available channels
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-white">
                  Reach out for AI engineering, dashboards, or product builds.
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-secondary">
                  Use the form, open GitHub, or connect on LinkedIn. The portfolio is designed to make
                  the next step feel obvious.
                </p>
              </div>

              <div className="mt-6 grid gap-3">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.label === 'Email' ? '_self' : '_blank'}
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors hover:border-white/20 hover:bg-white/10"
                    >
                      <span className="flex items-center gap-3 text-sm font-medium text-white">
                        <Icon className="h-4 w-4 text-accent" />
                        {method.label}
                      </span>
                      <Sparkles className="h-4 w-4 text-text-secondary" />
                    </a>
                  );
                })}
              </div>

              <div className="mt-6 rounded-[24px] border border-success/30 bg-success/10 p-5 text-sm text-emerald-100">
                <p className="font-semibold uppercase tracking-[0.24em]">Response style</p>
                <p className="mt-2 leading-7">
                  Clear, concise, and focused on outcomes. If the fit is right, the next conversation is
                  already half the work.
                </p>
              </div>
            </motion.aside>
          </Reveal>

          <Reveal>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card grid gap-4 p-6"
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            >
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
                  className="min-h-[180px] rounded-[24px] border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-text-secondary focus:border-accent/60 focus:outline-none"
                  placeholder="Tell me what you are building and how I can help."
                />
                {errors.message ? <span className="text-xs text-red-200">{errors.message}</span> : null}
              </label>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button type="submit" variant="primary" className="min-w-[160px]" disabled={status === 'submitting'}>
                  {status === 'submitting' ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
                  {status === 'success' ? <CheckCircle2 className="h-4 w-4" /> : null}
                  {status === 'success' ? 'Sent' : 'Send message'}
                </Button>
                <p className="text-sm text-text-secondary">
                  {site.contactEmail} is the default contact address.
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
