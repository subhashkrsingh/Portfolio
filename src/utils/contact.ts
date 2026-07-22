import emailjs from '@emailjs/browser';

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (serviceId && templateId && publicKey) {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: payload.name,
        from_email: payload.email,
        subject: payload.subject,
        message: payload.message,
      },
      { publicKey },
    );
    return;
  }

  const email = import.meta.env.VITE_CONTACT_EMAIL || 'hello@example.com';
  const params = new URLSearchParams({
    subject: payload.subject || 'Portfolio enquiry',
    body: `${payload.name} <${payload.email}>\n\n${payload.message}`,
  });

  window.location.href = `mailto:${email}?${params.toString()}`;
}
