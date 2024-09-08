import EmailIcon from '../assets/icons/social/EmailIcon.astro'
import GithubIcon from '../assets/icons/social/GithubIcon.astro'
import LinkedinIcon from '../assets/icons/social/LinkedinIcon.astro'
import CVIcon from '../assets/icons/social/CVIcon.astro'

export const SOCIAL_MEDIA = [
  {
    name: 'Github',
    url: 'https://github.com/camilo-torres',
    Icon: GithubIcon,
    txt: 'CAMILOITT',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/camilo-torres-9b6b9a1b5/',
    Icon: LinkedinIcon,
    txt: 'CAMILO TORRES',
  },
]

export const LINKS_PROFILE = [
  ...SOCIAL_MEDIA,
  {
    name: 'CV',
    url: 'https://docs.google.com/document/d/15GofteV8oRYbcxbblRIbflobqQmu1T2mOgOQV3CPCVU/edit?fbclid=IwAR2YNFAyqwdMW-dg4-eig54dRJqy7r7Y9GtCDi6HLhR2mhfQTyCOo6cjjnw',
    Icon: CVIcon,
  },
]

export const CONTACT_LINKS = [
  ...SOCIAL_MEDIA,
  {
    name: 'Email',
    url: 'mailto:camilocamilo5@outlook.com?subject=Solicitud de contacto&body=Estoy interesado en tu trabajo y me gustaría discutir oportunidades de trabajo junto.',
    Icon: EmailIcon,
    txt: 'camilocamilo5@outlook.com',
  },
]
