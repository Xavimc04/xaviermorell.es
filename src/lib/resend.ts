import { Resend } from "resend";

const resend = new Resend("re_VnXHuCKt_DYz9MJpTbcXwYBGc9bCSqtfQ"); 

export default async function Email() {
    const { data, error } = await resend.emails.send({
        from: 'Xavier Morell <portfolio@resend.dev>',
        to: ['xaviermorcam@campus.monlau.com'],
        subject: 'Hello World',
        html: '<strong>It works!</strong>',
    });

    if (error) return console.error({ error });

    console.log({ data });
}