import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_APIKEY); 

export default async function Email(name: string, email: string, reason: string) {
    const { data, error } = await resend.emails.send({
        from: 'Xavier Morell <portfolio@resend.dev>',
        to: ['xmcampos@outlook.com'],
        subject: '[Portolio] New message from ' + name,
        html: `
            <h1>New message from ${name}</h1>
            <p>${reason}</p>
            <p>Contact email: ${email}</p>
        `,
    });

    if (error) return console.error({ error });

    await resend.emails.send({
        from: 'Xavier Morell <portfolio@resend.dev>',
        to: [email],
        subject: 'Thank you for contacting me!',
        html: `
            <h1>Thank you for contacting me, ${name}!</h1>
            <p>I will get back to you as soon as possible.</p>
        `,
    });
}