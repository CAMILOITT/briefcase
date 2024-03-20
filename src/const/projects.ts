import { Css, Express, MongoDb, Node, React, Sockets, TypeScript } from './tech'

const listProjects = [
  {
    title: 'Pixel Art',
    description:
      'Un sitio web de dibujo de pixel art que permite a los usuarios crear obras de arte detalladas pixel a pixel. Con una interfaz intuitiva, los artistas pueden dar vida a sus ideas en forma de arte pixelado. Además, ofrece la opción de exportar las creaciones en formatos populares para compartir fácilmente en línea o utilizar en proyectos',
    img: 'pixel_art',
    tag: [TypeScript, React, Css],
    links: {
      demo: 'https://pixel-draw-silk.vercel.app',
      code: 'https://github.com/CAMILOITT/pixel-draw-app',
    },
  },
  {
    title: 'Message Hub',
    description:
      'Un sitio web de mensajería que conecta a usuarios en tiempo real a través de chats individuales. Además, la plataforma ofrece notificaciones instantáneas para mantener a los usuarios actualizados.',
    img: 'chat_hub',
    tag: [TypeScript, Css, React, Node, Express, MongoDb, Sockets],
    links: {
      demo: 'https://messagehub-six.vercel.app',
      code: 'https://github.com/CAMILOITT/MESSAGEHUB',
    },
  },
  {
    title: 'VideoConnect',
    description:
      'Un sitio web de video llamadas que ofrece una experiencia de comunicación cara a cara en línea. Los usuarios pueden iniciar llamadas de video con amigos, familiares o colegas desde cualquier parte del mundo.',
    img: 'video_connect',
    tag: [TypeScript, Css, React, Node, Sockets],
    links: {
      demo: '',
      code: 'https://github.com/CAMILOITT/web-cam',
    },
  },
] as const

export default listProjects
