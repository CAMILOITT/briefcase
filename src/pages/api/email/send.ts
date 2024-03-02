import type { APIRoute } from "astro";

import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST:APIRoute = async ({request}) => {
  
  try {
    const dataPost =  request.json()
    const {name, email, message} = await dataPost.then(data =>  data)

    await resend.emails.send({
      from: 'Contact <camilo@resend.dev>', 
      to: ['camilocamilo5@outlook.com'],
      subject: 'WORK',
      text: `
      Email: ${email}
      Name: ${name}
      Message: ${message}
      `
    });
    return new Response( 'Mensaje enviado correctamente',{status:200})
  } catch (error) {  
    return new Response( 'Error al enviar el mensaje, intente de nuevo',{status:500})
  }

}