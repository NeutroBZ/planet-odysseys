// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

// Configuración SMTP de SiteGround
const transporter = nodemailer.createTransport({
  host: 'mail.tudominio.com', // Reemplaza con tu dominio
  port: 465,
  secure: true, // true para 465, false para otros puertos
  auth: {
    user: 'info@tudominio.com', // Tu email de SiteGround
    pass: 'tu-contraseña', // La contraseña de tu email
  },
  tls: {
    rejectUnauthorized: false, // Opcional, para evitar errores de certificado
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const email = data.get('email');
    const phone = data.get('phone');
    const message = data.get('message');
    const whatsappConsent = data.get('whatsapp-consent');

    // Validar datos requeridos
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        success: false,
        message: 'Por favor completa todos los campos requeridos'
      }), { status: 400 });
    }

    // Configurar el email
    const mailOptions = {
      from: `"Planet Odysseys" <info@tudominio.com>`, // Tu email de SiteGround
      to: 'info@tudominio.com', // Donde quieres recibir los mensajes
      replyTo: email.toString(),
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono/WhatsApp:</strong> ${phone}</p>` : ''}
        ${whatsappConsent ? '<p><strong>✅ Aceptó recibir mensajes por WhatsApp</strong></p>' : ''}
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // Enviar el email
    await transporter.sendMail(mailOptions);

    // También podrías enviar una copia al visitante
    if (email) {
      const autoReplyOptions = {
        from: `"Planet Odysseys" <info@tudominio.com>`,
        to: email.toString(),
        subject: 'Hemos recibido tu mensaje - Planet Odysseys',
        html: `
          <h2>¡Gracias por contactarnos, ${name}!</h2>
          <p>Hemos recibido tu mensaje y uno de nuestros especialistas te responderá dentro de las próximas 24 horas.</p>
          <p>Mientras tanto, te invitamos a explorar nuestros <a href="https://planetodysseys.com/tours">tours</a> y <a href="https://planetodysseys.com/blog">artículos del blog</a>.</p>
          <br>
          <p>Saludos,</p>
          <p><strong>Equipo Planet Odysseys</strong></p>
        `,
      };
      
      // Enviar auto-respuesta (opcional, no esperar a que termine)
      transporter.sendMail(autoReplyOptions).catch(console.error);
    }

    return new Response(JSON.stringify({
      success: true,
      message: '¡Mensaje enviado con éxito! Te contactaremos pronto.'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error al enviar email:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'Error al enviar el mensaje. Por favor intenta de nuevo.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};