import { Droplet, Heart, MessagesSquare, ShieldCheck, Star, Users, Zap } from 'lucide-react';
import heroCharacter from '../assets/images/character-hero-transparent.png';
import attendanceCharacter from '../assets/images/character-attendance-transparent.png';
import tattooMachine from '../assets/images/object-machine.png';
import inkBottle from '../assets/images/object-ink.png';
import blackRose from '../assets/images/object-rose.png';
import flashPaper from '../assets/images/object-flash.png';
import aboutPhoto from '../assets/images/about.png';
import socialPhoto from '../assets/images/social.png';
import footerPhoto from '../assets/images/footer.png';
import tattoo01 from '../assets/images/tattoo-01.jpeg';
import tattoo02 from '../assets/images/tattoo-02.jpeg';
import tattoo03 from '../assets/images/tattoo-03.jpeg';
import tattoo04 from '../assets/images/tattoo-04.jpeg';

export const brand = {
  name: 'CECÍLIA',
  subtitle: 'OLD SCHOOL TATTOO',
  instagram: 'https://instagram.com/c.anacleto.ink',
  whatsapp: 'https://wa.me/5581985233290?text=Oi%2C%20Cec%C3%ADlia%21%20Quero%20fazer%20uma%20tattoo%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  location: 'Recife, PE',
  businessHours: 'Segunda a Sábado • 10h às 19h',
};

export const navLinks = [
  { label: 'Sobre mim', href: '#sobre' },
  { label: 'Meu estilo', href: '#estilo' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Provas sociais', href: '#provas' },
  { label: 'Contato', href: '#contato' },
];

export const images = {
  heroCharacter,
  attendanceCharacter,
  tattooMachine,
  inkBottle,
  blackRose,
  flashPaper,
  aboutPhoto,
  socialPhoto,
  footerPhoto,
  tattoos: [tattoo01, tattoo02, tattoo03, tattoo04],
};

export const heroObjects = [
  { src: tattooMachine, alt: 'Máquina de tatuagem 3D', className: 'left-[35%] top-[28%] w-[90px] md:w-[130px] lg:w-[150px]', duration: 5.8, delay: .15 },
  { src: inkBottle, alt: 'Frasco de tinta 3D', className: 'left-[31%] bottom-[25%] w-[70px] md:w-[95px] lg:w-[110px]', duration: 6.4, delay: .35 },
  { src: blackRose, alt: 'Rosa preta 3D', className: 'right-[18%] bottom-[21%] w-[115px] md:w-[150px] lg:w-[175px]', duration: 7.2, delay: .1 },
  { src: flashPaper, alt: 'Desenho de tattoo em papel', className: 'right-[17%] top-[31%] w-[95px] md:w-[125px] lg:w-[145px]', duration: 6.8, delay: .55 },
];

export const about = {
  label: 'Sobre mim',
  title: 'Eternizando momentos, memórias e ideias na pele',
  text: 'Sou Cecília, tatuadora apaixonada por transformar sentimentos, lembranças e ideias em tatuagens com significado. Meu objetivo é eternizar histórias na pele com sensibilidade, técnica e autenticidade, criando artes que carregam personalidade e permanecem no tempo.',
  signature: 'Cada tattoo nasce para marcar mais do que a pele: ela marca a história.',
};

export const styleContent = {
  label: 'Meu estilo?',
  title: 'Meu estilo é Old School',
  text1: 'Old School é um estilo clássico, marcado por traços firmes, cores sólidas e composições que resistem ao tempo. É a tatuagem que carrega história, personalidade e atitude em cada detalhe.',
  text2: 'Mais do que um estilo, é uma forma de eternizar momentos, memórias e ideias na pele com autenticidade e significado.',
  features: [
    { icon: Zap, title: 'Traços firmes', description: 'Linhas sólidas que garantem presença e impacto.' },
    { icon: Droplet, title: 'Cores sólidas', description: 'Paleta clássica com contraste marcante.' },
    { icon: Star, title: 'Clássico & atemporal', description: 'Um estilo que atravessa gerações sem perder força.' },
    { icon: Heart, title: 'Com significado', description: 'Cada tattoo carrega uma história e uma intenção.' },
  ],
};

export const attendance = {
  label: 'Atendimento',
  title: 'Como é o meu atendimento?',
  text: 'Mais do que tatuar, eu acompanho cada cliente de perto. Do primeiro contato à finalização, meu foco é oferecer uma experiência tranquila, respeitosa e segura, entendendo a ideia, orientando cada escolha e transformando memórias em arte com cuidado e autenticidade.',
  cards: [
    { icon: MessagesSquare, title: 'Atendimento de perto', description: 'Escuta, orientação e atenção em cada etapa.' },
    { icon: ShieldCheck, title: 'Experiência segura', description: 'Cuidado, respeito e compromisso do início ao fim.' },
  ],
};

export const socialProof = {
  label: 'A confiança de quem viveu a experiência',
  title: 'Provas sociais',
  subtitle: 'Resultados reais, confiança construída no detalhe.',
  stats: [
    { icon: Users, value: '+300', title: 'Clientes satisfeitos' },
    { icon: Heart, title: 'Atendimento humanizado do início ao fim' },
    { icon: ShieldCheck, title: 'Experiência segura e personalizada' },
  ],
  testimonials: [
    { name: 'Larissa M.', rating: 5, text: 'A experiência com a Cecília foi incrível do começo ao fim. O atendimento é impecável, o traço é delicado e cheio de personalidade. Me senti super à vontade.' },
    { name: 'Gabriel R.', rating: 5, text: 'Profissional sensacional. Cuida de cada detalhe com muita atenção e respeito. O resultado superou minhas expectativas. Já quero a próxima.' },
    { name: 'Ana C.', rating: 5, text: 'Ambiente acolhedor, tudo muito limpo e organizado. A Cecília tem um talento único e transforma ideias em arte. Recomendo demais.' },
  ],
  cta: 'Quer ver mais trabalhos ou tirar sua ideia do papel? Fala comigo.',
};

export const footer = {
  phrase: 'Tatuagens que contam histórias. Criadas com autenticidade, eternizadas na pele.',
  copyright: '© 2025 Cecília. Todos os direitos reservados.',
  credit: 'Desenvolvido por ATLAS ADS',
};

