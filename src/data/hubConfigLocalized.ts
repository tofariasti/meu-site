import { L } from '../i18n/types'

const HUB_DOMINIO = 'https://fariasdigital.com.br';
const HUB_DOMINIO_HOST = 'fariasdigital.com.br';

/** Source config with Localized<T> fields; resolved per locale via getHubConfig(). */
export const hubConfigLocalized = {
  nome: 'Tiago Farias',
  marca: 'Farias Digital',
  marcaLogo: '/assets/img/logo-full.svg',
  marcaLogoFull: '',
  marcaLogoIcon: '/assets/img/logo-icon.svg',
  marcaLogoAlt: 'Farias Digital',
  whatsappIcon: '/assets/img/whatsapp-icon.svg',
  nomeCompleto: 'Tiago O. de Farias',
  dominio: HUB_DOMINIO,
  dominioHost: HUB_DOMINIO_HOST,
  cidadeRegiao: 'Atendimento em todo o Brasil',
  empresaCnpj: '37.481.999/0001-48',
  empresaEndereco: 'Av. Baltazar de Oliveira Garcia, 2478',
  email: 'fariasdigitalnaweb@gmail.com',
  whatsappNumero: '5551991213724',
  whatsappExibicao: '(51) 99121-3724',
  mei: true,
  emiteNF: true,

  // Google Analytics 4 — mesma propriedade GA4 do ecossistema Farias Digital / TechDrone360
  googleAnalyticsId: 'G-P5H2B88DE0',

  mensagensWhatsApp: {
    geral: L(
      `Olá! Vi o site ${HUB_DOMINIO_HOST} e gostaria de conversar sobre um projeto.`,
      `Hi! I saw ${HUB_DOMINIO_HOST} and would like to discuss a project.`,
      `¡Hola! Vi el sitio ${HUB_DOMINIO_HOST} y me gustaría conversar sobre un proyecto.`,
    ),
    site: L(
      `Olá! Vi o site ${HUB_DOMINIO_HOST} e quero orçamento.

Para agilizar, já tenho:
• Tipo de negócio:
• O que preciso (site / landing / e-commerce / automação WhatsApp):
• Quantidade de produtos (se loja online):
• Tenho domínio? (sim/não)
• Prazo desejado:

Obrigado!`,
      `Hi! I saw ${HUB_DOMINIO_HOST} and would like a quote.

To speed things up:
• Business type:
• What I need (website / landing / e-commerce / WhatsApp automation):
• Number of products (if online store):
• Do I have a domain? (yes/no)
• Desired timeline:

Thank you!`,
      `¡Hola! Vi el sitio ${HUB_DOMINIO_HOST} y quiero un presupuesto.

Para agilizar:
• Tipo de negocio:
• Qué necesito (sitio / landing / e-commerce / automatización WhatsApp):
• Cantidad de productos (si tienda online):
• ¿Tengo dominio? (sí/no)
• Plazo deseado:

¡Gracias!`,
    ),
    drone: L(
      `Olá! Vi o site ${HUB_DOMINIO_HOST} e quero orçamento de captação com drone.

Para agilizar:
• Tipo: (imóvel / Airbnb / obra / evento / empresa / outro)
• O que precisa: (fotos / vídeo / fotos + vídeo)
• Local (cidade e endereço ou referência):
• Data ou período:

Obrigado!`,
      `Hi! I saw ${HUB_DOMINIO_HOST} and would like a drone aerial quote.

To speed things up:
• Type: (property / Airbnb / construction / event / business / other)
• Needed: (photos / video / photos + video)
• Location (city and address or reference):
• Date or time window:

Thank you!`,
      `¡Hola! Vi el sitio ${HUB_DOMINIO_HOST} y quiero presupuesto de captación con dron.

Para agilizar:
• Tipo: (inmueble / Airbnb / obra / evento / empresa / otro)
• Necesito: (fotos / video / fotos + video)
• Local (ciudad y dirección o referencia):
• Fecha o período:

¡Gracias!`,
    ),
    pacoteLanding: L(
      'Olá! Tenho interesse em uma landing page personalizada (a partir de R$ 300). Gostaria de um orçamento.',
      'Hi! I am interested in a custom landing page (from R$ 300). I would like a quote.',
      '¡Hola! Me interesa una landing page personalizada (desde R$ 300). Me gustaría un presupuesto.',
    ),
    pacotePresenca: L(
      'Olá! Tenho interesse no pacote Site Institucional (site completo com WhatsApp). Gostaria de um orçamento.',
      'Hi! I am interested in the Business Website package (full site with WhatsApp). I would like a quote.',
      '¡Hola! Me interesa el paquete Sitio Institucional (sitio completo con WhatsApp). Me gustaría un presupuesto.',
    ),
    pacoteLoja: L(
      'Olá! Tenho interesse no pacote Loja Essencial (e-commerce / catálogo online). Gostaria de um orçamento.',
      'Hi! I am interested in the Essential Store package (e-commerce / online catalog). I would like a quote.',
      '¡Hola! Me interesa el paquete Tienda Esencial (e-commerce / catálogo online). Me gustaría un presupuesto.',
    ),
    pacoteAutomacao: L(
      'Olá! Tenho interesse em automação de WhatsApp (formulários, mensagens automáticas ou integração). Gostaria de um orçamento.',
      'Hi! I am interested in WhatsApp automation (forms, auto-replies or integration). I would like a quote.',
      '¡Hola! Me interesa automatización de WhatsApp (formularios, mensajes automáticos o integración). Me gustaría un presupuesto.',
    ),
    pacoteDrone: L(
      'Olá! Tenho interesse no pacote Drone Imóvel (fotos + vídeo aéreo). Gostaria de um orçamento.',
      'Hi! I am interested in the Real Estate Drone package (aerial photos + video). I would like a quote.',
      '¡Hola! Me interesa el paquete Dron Inmobiliario (fotos + video aéreo). Me gustaría un presupuesto.',
    ),
  },

  links: {
    techdrone360: 'https://techdrone360.com.br',
    portfolio: 'https://tofariasti.github.io/',
    linkedin: 'https://www.linkedin.com/in/tiago-farias1985',
    github: 'https://github.com/tofariasti',
    instagramDrone: 'https://www.instagram.com/techdrone360/',
    youtubeDrone: 'https://www.youtube.com/@techdrone360',
  },

  pricingLanding: {
    preco: 'a partir de R$ 300,00',
    precoCurto: 'R$ 300',
    titulo: 'Landing pages personalizadas',
    lead: 'Escolha o modelo do seu segmento e adapto com sua marca, textos e WhatsApp.',
  },

  pacotesWeb: [
    {
      id: 'landing-page',
      nome: 'Landing Page',
      preco: 'a partir de R$ 300',
      publico: 'Negócios locais que querem presença rápida no Google',
      inclui: [
        '1 página focada em conversão (modelo do seu segmento)',
        'Personalização com sua marca, textos e WhatsApp',
        'Layout responsivo + SEO básico',
        '1 rodada de ajustes após a entrega',
      ],
      naoInclui: 'Domínio, hospedagem e fotos profissionais (podem ser orçados à parte)',
      mensagemWhatsApp: 'pacoteLanding',
      destaque: true,
      badge: 'Mais pedido',
      valorPercebido: 'Menos que 1 mês de anúncio no Instagram',
    },
    {
      id: 'site-institucional',
      nome: 'Site Institucional',
      preco: 'a partir de R$ 1.490',
      valorPercebido: 'Presença profissional que vende por anos',
      publico: 'Comércio local, clínicas, prestadores de serviço',
      inclui: [
        'Site com múltiplas seções (serviços, sobre, contato, localização)',
        'Botão e formulário para WhatsApp com mensagem pronta',
        'Layout responsivo (celular e computador)',
        'SEO básico (título, descrição, Google)',
        '1 rodada de ajustes após a entrega',
      ],
      naoInclui: 'Domínio, hospedagem e fotos profissionais (podem ser orçados à parte)',
      mensagemWhatsApp: 'pacotePresenca',
    },
    {
      id: 'loja-essencial',
      nome: 'Loja Essencial',
      preco: 'a partir de R$ 2.990',
      valorPercebido: 'Catálogo online que vende 24h por dia',
      publico: 'E-commerce e varejo local',
      inclui: [
        'Loja online / catálogo com até 50 produtos',
        'Pedido e orçamento direto pelo WhatsApp',
        'Páginas institucionais (sobre, contato, localização)',
        'Layout responsivo e SEO básico',
        '1 rodada de ajustes após a entrega',
      ],
      naoInclui: 'Pagamento online integrado e ERP (sob consulta no pacote Sob medida)',
      mensagemWhatsApp: 'pacoteLoja',
    },
    {
      id: 'sob-medida',
      nome: 'Sob medida',
      preco: 'orçamento personalizado',
      valorPercebido: 'Solução exclusiva para escalar o negócio',
      publico: 'E-commerce completo, automação e integrações',
      inclui: [
        'E-commerce com pagamento online (Mercado Pago, PagSeguro etc.)',
        'Automação de WhatsApp, formulários e fluxos de atendimento',
        'Integrações (ERP, marketplaces, APIs)',
        'Painel administrativo e manutenção contínua',
      ],
      naoInclui: null,
      mensagemWhatsApp: 'site',
    },
  ],

  pacoteDrone: {
    nome: 'Drone Imóvel',
    preco: 'a partir de R$ 650',
    publico: 'Imobiliárias, corretores e incorporadoras',
    inclui: [
      'Fotos aéreas em alta resolução',
      'Vídeo editado (~45 segundos)',
      'Material pronto para anúncio e redes sociais',
      'Planejamento de voo conforme legislação',
      'Nota fiscal',
    ],
    mensagemWhatsApp: 'pacoteDrone',
  },

  portfolio: {
    titulo: 'Veja o que posso construir',
    tituloHighlight: 'para o seu negócio',
    lead: 'Referências de layout, código e experiência no celular — para você avaliar a qualidade antes de pedir orçamento.',
    grupoDemos: {
      titulo: 'Landing pages por segmento',
      lead: 'Modelos prontos para você ver layout e responsividade. Ao contratar, personalizo com a identidade da sua empresa — a partir de R$ 300,00.',
    },
    badgeDemo: 'Pronto para personalizar',
  },

  demos: [
    {
      titulo: 'Pet shop',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/amo-patas/',
      descricao: 'Banho, tosa e agendamento pelo WhatsApp.',
    },
    {
      titulo: 'Loja de móveis',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/atacadao-miranda-moveis/',
      descricao: 'Televendas, ofertas e localização da loja.',
    },
    {
      titulo: 'Bazar de utilidades',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/bazar_do_alemao/',
      descricao: 'Ofertas, Instagram e horário de funcionamento.',
    },
    {
      titulo: 'Autopeças',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/dkautopecas/',
      descricao: 'Catálogo, Shopee e contato rápido.',
    },
    {
      titulo: 'Concessionária',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/performance-hyosung/',
      descricao: 'Modelos, financiamento e WhatsApp.',
    },
    {
      titulo: 'Oficina de radiadores',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/radiadores-vitoria/',
      descricao: 'Serviços, orçamento e localização.',
    },
    {
      titulo: 'Oficina Mecânica',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/oficinamecanica/',
      descricao: 'Serviços automotivos especializados, agendamento online e orçamento via WhatsApp.',
    },
    {
      titulo: 'Locadora de Veículos',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/locadora-veiculos-landing/',
      descricao: 'Frota premium, reserva estruturada via WhatsApp e planos diário/semanal/mensal.',
    },
    {
      titulo: 'Locadora de Motor Home',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/aluguel-motorhome-landing/',
      descricao: 'Frota de motor homes, planos flexíveis e reserva estruturada via WhatsApp para viagens pelo Brasil.',
    },
    {
      titulo: 'Picada Café — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-picada-cafe/',
      descricao: 'Parque Jorge Kuhn, mirantes, festas coloniais e agendamento de visitas via WhatsApp na Serra Gaúcha.',
    },
    {
      titulo: 'Canela — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-canela/',
      descricao: 'Cascata do Caracol, Catedral de Pedra, Skyglass e Sonho de Natal — roteiro com formulário WhatsApp.',
    },
    {
      titulo: 'Gramado — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-gramado/',
      descricao: 'Natal Luz, Lago Negro, Mini Mundo e Rua Coberta — landing page animada para destinos serranos.',
    },
    {
      titulo: 'Porto Alegre — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-porto-alegre/',
      descricao: 'Orla do Guaíba, Mercado Público, Redenção e agenda cultural — turismo na capital gaúcha.',
    },
    {
      titulo: 'Passo Fundo — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-passo-fundo/',
      descricao: 'Capital Nacional da Literatura, Parque da Gare, Roselândia e eventos culturais.',
    },
    {
      titulo: 'Ivoti — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-ivoti/',
      descricao: 'Cidade das Flores: Núcleo Enxaimel, Ponte do Imperador, Feira das Flores e cultura alemã.',
    },
    {
      titulo: 'São Francisco de Paula — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-sao-francisco-de-paula/',
      descricao: 'Lago São Bernardo, Mátria Parque de Flores, 8 Cachoeiras e ecoturismo nos Campos de Cima da Serra.',
    },
    {
      titulo: 'Ametista do Sul — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-ametista-do-sul/',
      descricao: 'Capital da ametista: minas, vinícolas subterrâneas, igreja de cristais e turismo geológico.',
    },
    {
      titulo: 'Salto do Yucumã — Turismo',
      segmento: 'Turismo',
      url: 'https://tofariasti.github.io/turismo-salto-do-yucuma/',
      descricao: 'Maior queda longitudinal do mundo no Parque do Turvo — natureza na divisa com a Argentina.',
    },
    {
      titulo: 'Estética Automotiva',
      segmento: 'Automotivo',
      url: 'https://tofariasti.github.io/landing-estetica-automotiva/',
      descricao: 'Detailing premium, polimento, vitrificação e galeria antes/depois com agendamento via WhatsApp.',
    },
    {
      titulo: 'Montador de Móveis',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/montadormoveis/',
      descricao: 'Montagem profissional, orçamento via WhatsApp e galeria de trabalhos realizados.',
    },
    {
      titulo: 'Escritório de Advocacia',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/advogado-landing-page/',
      descricao: 'Áreas de atuação, consulta online e WhatsApp.',
    },
    {
      titulo: 'Consultório Odontológico',
      segmento: 'Saúde',
      url: 'https://tofariasti.github.io/landing-dentista/',
      descricao: 'Serviços, depoimentos, antes/depois e agendamento pelo WhatsApp.',
    },
    {
      titulo: 'Farmácia Vida & Saúde',
      segmento: 'Saúde',
      url: 'https://tofariasti.github.io/landing-farmacia/',
      descricao: 'Landing page para farmácia com delivery, manipulação e agendamento via WhatsApp.',
    },
    {
      titulo: 'PDV Pro — Sistema de Ponto de Venda',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/landing-pdv/',
      descricao: 'Sistema PDV para varejo com caixa rápido, estoque integrado, NFC-e e agendamento de demo via WhatsApp.',
    },
    {
      titulo: 'Psicóloga',
      segmento: 'Saúde',
      url: 'https://tofariasti.github.io/landing-page-psicologa/',
      descricao: 'Design moderno com gradientes suaves, terapias, especialidades, depoimentos e formulário WhatsApp integrado.',
    },
    {
      titulo: 'Nutricionista',
      segmento: 'Saúde',
      url: 'https://tofariasti.github.io/landing-nutricionista/',
      badge: 'Landing + Admin',
      descricao: 'Landing page de conversão (IMC, WhatsApp, depoimentos) + painel administrativo demo para pacientes e planos alimentares — sem backend.',
    },
    {
      titulo: 'Ótica Visão Clara',
      segmento: 'Saúde',
      url: 'https://tofariasti.github.io/landing-otica/',
      badge: 'Landing + Admin',
      descricao: 'Landing de conversão (quiz de rosto, marcas, WhatsApp) + painel demo para clientes, pedidos/receitas e catálogo de armações — sem backend.',
    },
    {
      titulo: 'Imobiliária',
      segmento: 'Imóveis',
      url: 'https://tofariasti.github.io/landing-imobiliaria/',
      descricao: 'Busca de imóveis, filtros, tour virtual e agendamento de visitas via WhatsApp.',
    },
    {
      titulo: 'Classificados',
      segmento: 'Imóveis',
      url: 'https://tofariasti.github.io/landing-classificados/',
      descricao: 'Portal de classificados com anúncios por categoria, destaques e contato via WhatsApp.',
    },
    {
      titulo: 'ShopStyle E-commerce',
      segmento: 'E-commerce',
      url: 'https://tofariasti.github.io/ecommerce/',
      descricao: 'Loja virtual completa com produtos, categorias, ofertas, depoimentos e pedidos via WhatsApp.',
    },
    {
      titulo: 'Catálogo Digital',
      segmento: 'E-commerce',
      url: 'https://tofariasti.github.io/catalogo-digital/',
      descricao: 'Catálogo de produtos premium com filtros por categoria, animações suaves e integração WhatsApp.',
    },
    {
      titulo: 'Cardápio Digital',
      segmento: 'Gastronomia',
      url: 'https://tofariasti.github.io/cardapio-digital/',
      descricao: 'Menu interativo com filtros por categoria, galeria de pratos e pedidos/reservas via WhatsApp.',
    },
    {
      titulo: 'Doce Encanto',
      segmento: 'Gastronomia',
      url: 'https://tofariasti.github.io/lojadoces-landing/',
      descricao: 'Loja de doces artesanais com catálogo, depoimentos, animações premium e pedidos via WhatsApp.',
    },
    {
      titulo: 'Marido de Aluguel',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/marido-aluguel/',
      descricao: 'Reparos, instalações e manutenção residencial com formulário WhatsApp para agendamento.',
    },
    {
      titulo: 'Super Bom Preço',
      segmento: 'Varejo',
      url: 'https://tofariasti.github.io/supermercado-landing/',
      descricao: 'Ofertas da semana, departamentos, entrega agendada ou retirada na loja via WhatsApp.',
    },
    {
      titulo: 'Barbearia',
      segmento: 'Serviços',
      url: 'https://tofariasti.github.io/landing-barbearia/',
      descricao: 'Cortes premium, barba, galeria de trabalhos e agendamento estruturado via WhatsApp.',
    },
    {
      titulo: 'Igreja Nova Vida',
      segmento: 'Institucional',
      url: 'https://tofariasti.github.io/landing-igreja/',
      descricao: 'Programação de cultos, ministérios, depoimentos e agendamento de visita via WhatsApp.',
    },
    {
      titulo: 'Academia de Artes Marciais',
      segmento: 'Esporte',
      url: 'https://tofariasti.github.io/landing-lutas/',
      descricao: 'Modalidades, planos, professores e agendamento de aula experimental via WhatsApp.',
    },
  ],

  proofBar: [
    { valor: 10, sufixo: '+', label: 'Anos em sistemas web corporativos', icon: '◆' },
    { valor: 40, sufixo: '+', label: 'Modelos por segmento disponíveis', icon: '◆' },
    { valor: 100, sufixo: '%', label: 'Atendimento direto com o desenvolvedor', icon: '◆' },
  ],

  comparativoInstagram: {
    eyebrow: 'Instagram não é estratégia',
    titulo: 'Por que sua empresa não pode depender só do Instagram',
    lead: 'O Instagram é importante. Mas se for sua única presença digital, você está perdendo clientes, dinheiro e controle sobre o seu negócio.',
    instagram: [
      { titulo: 'Não aparece no Google', texto: '97% das pessoas pesquisam no Google antes de comprar. Se você não tem site, não existe.' },
      { titulo: 'Você não é dono da audiência', texto: 'Instagram pode banir, mudar regras ou sumir. Seu trabalho de anos pode desaparecer em um clique.' },
      { titulo: 'Alcance orgânico despencou', texto: 'Menos de 10% dos seus seguidores veem seus posts. Instagram quer que você pague anúncios.' },
      { titulo: 'Link na bio não converte', texto: 'Cliente tem que clicar no perfil, depois na bio, depois escolher. Você perde venda no caminho.' },
      { titulo: 'Amadores têm o mesmo visual que você', texto: 'No Instagram, qualquer perfil parece igual. Não transmite autoridade nem diferencia sua marca.' },
      { titulo: 'Sem controle sobre vendas', texto: 'Não há carrinho, pagamento automatizado, relatório de vendas ou automação de pós-venda.' },
    ],
    site: [
      { titulo: 'Aparece no Google 24h por dia', texto: 'Clientes encontram você quando precisam. SEO traz visitas grátis, sem depender de algoritmo.' },
      { titulo: 'Você é dono do canal', texto: 'Seu domínio, seu conteúdo, sua lista de clientes. Ninguém pode tirar isso de você.' },
      { titulo: '100% do público vê seu conteúdo', texto: 'Não existe algoritmo cortando seu alcance. Quem acessa, vê tudo que você quer mostrar.' },
      { titulo: 'Leva direto para a conversão', texto: 'Botões de WhatsApp, formulários estratégicos e páginas que vendem. Menos cliques, mais venda.' },
      { titulo: 'Transmite profissionalismo e confiança', texto: 'Clientes levam mais a sério empresas com site. Design exclusivo posiciona você como referência.' },
      { titulo: 'Vende enquanto você dorme', texto: 'Catálogo online, checkout automático, cupons, relatórios, integração com ERP e pagamento.' },
    ],
    quote: {
      titulo: 'A verdade que ninguém te conta:',
      texto: '<strong>Instagram serve para engajamento.</strong> Site serve para <strong>vender</strong>. São complementares, não concorrentes. Empresas sérias têm os dois — mas o site é a base. É ali que o cliente decide contratar ou não.',
    },
    stats: [
      { valor: 81, sufixo: '%', texto: 'das pessoas pesquisam online antes de visitar uma empresa física', fonte: 'Google / Ipsos' },
      { valor: 75, sufixo: '%', texto: 'julgam a credibilidade de uma empresa pelo design do site', fonte: 'Stanford Web Credibility Research' },
      { valor: 70, sufixo: '%', texto: 'dos brasileiros usam o Google para encontrar produtos e serviços locais', fonte: 'Think with Google Brasil' },
      { valor: 93, sufixo: '%', texto: 'das experiências online começam com um mecanismo de busca', fonte: 'BrightEdge' },
    ],
    resumoLimite: 3,
    linkCompleto: '/por-que-site/',
  },

  intentItems: [
    {
      titulo: 'Presença no Google',
      descricao: 'Aparecer quando o cliente pesquisa seu serviço no Google.',
      href: '/#site-vs-instagram',
    },
    {
      titulo: 'Vender pelo WhatsApp',
      descricao: 'Formulários e botões que levam o visitante direto para conversa.',
      href: '/sites/#pacotes',
    },
    {
      titulo: 'Loja online',
      descricao: 'Catálogo de produtos com pedido ou orçamento pelo WhatsApp.',
      href: '/sites/#pacotes',
    },
    {
      titulo: 'Integrações & sistemas',
      descricao: 'APIs, pagamento online, ERP e automação avançada.',
      href: '/sites/#pacotes',
    },
    {
      titulo: 'Drone 4K',
      descricao: 'Fotos e vídeos aéreos para imóveis, obras e empresas.',
      href: 'https://techdrone360.com.br/',
      externo: true,
    },
  ],

  servicos: [
    {
      id: 'landing',
      titulo: 'Landing Pages',
      descricao: 'Páginas estratégicas para captar leads e vender mais pelo WhatsApp.',
      preco: 'a partir de R$ 300',
      href: '/portfolio/',
    },
    {
      id: 'institucional',
      titulo: 'Sites institucionais',
      descricao: 'Presença profissional com múltiplas seções, SEO e credibilidade.',
      preco: 'a partir de R$ 1.490',
      href: '/sites/#pacotes',
    },
    {
      id: 'ecommerce',
      titulo: 'E-commerce',
      descricao: 'Loja virtual, catálogo de produtos e pedidos pelo WhatsApp ou pagamento online.',
      preco: 'a partir de R$ 2.990',
      href: '/sites/#pacotes',
    },
    {
      id: 'whatsapp',
      titulo: 'Automação WhatsApp',
      descricao: 'Formulários inteligentes, mensagens prontas e fluxos que agilizam o atendimento.',
      preco: 'sob medida',
      wa: 'pacoteAutomacao',
    },
    {
      id: 'integracoes',
      titulo: 'Integrações & APIs',
      descricao: 'Pagamento online, ERP, marketplaces e sistemas Laravel sob medida.',
      preco: 'sob medida',
      wa: 'site',
    },
    {
      id: 'drone',
      titulo: 'Imagens aéreas',
      descricao: 'Fotos e vídeos com drone para imóveis, obras e empresas.',
      preco: 'a partir de R$ 650',
      href: 'https://techdrone360.com.br/',
      externo: true,
    },
  ],

  credibilidade: {
    titulo: 'Mais que sites bonitos',
    lead: 'Antes de atender PMEs com a Farias Digital, atuei por mais de 10 anos em times corporativos — implementando APIs, integrações e módulos estratégicos dentro de projetos maiores, sempre em colaboração com outras áreas.',
    nota: 'Os marcos abaixo referem-se à minha atuação profissional em equipe. Não representam entrega solo do site ou sistema completo de cada empresa.',
    setores: ['Agronegócio', 'Saúde', 'Governo', 'Pagamentos', 'Logística', 'SaaS corporativo'],
    marcos: [
      { periodo: '2015–2017', titulo: 'Inmetro · Cronotacógrafo', texto: 'Contribuição no desenvolvimento de funcionalidades do sistema governamental de metrologia legal (PHP e Oracle), em equipe multidisciplinar.' },
      { periodo: '2018–2020', titulo: 'Ticket Log · Pagamentos', texto: 'Atuação em módulos críticos de frotas e meios de pagamento — manutenção evolutiva, regras de negócio e sustentação em produção.' },
      { periodo: '2020–2024', titulo: 'Stargrid · Healthtech', texto: 'Participação no backend da plataforma SaaS de escalas hospitalares — APIs Laravel, filas RabbitMQ e persistência híbrida.' },
      { periodo: '2024–atual', titulo: 'Yara Brasil · Agronegócio', texto: 'Implementação de API Laravel offline-first, pipelines de integração Salesforce e camada de observabilidade — alocado no time de produto.' },
    ],
  },

  cases: [
    {
      titulo: 'TechDrone360',
      segmento: 'Captação aérea · Em produção',
      descricao: 'Site comercial com portfólio, vídeos 4K, SEO local e conversão via WhatsApp — meu próprio negócio de drone.',
      url: 'https://techdrone360.com.br',
    },
    {
      titulo: 'IBGE Localidades',
      segmento: 'React · TypeScript · Open Source',
      descricao: 'Mapa interativo consumindo a API de Localidades do IBGE — prova de qualidade em frontend e integração.',
      url: 'https://tofariasti.github.io/ibge-localidades/',
    },
  ],

  processoWeb: [
    { passo: '1', titulo: 'Conversa rápida', texto: 'Você conta seu negócio e objetivo pelo WhatsApp — sem compromisso.' },
    { passo: '2', titulo: 'Proposta clara', texto: 'Envio escopo, prazo e investimento fechados, sem surpresas.' },
    { passo: '3', titulo: 'Desenvolvimento', texto: 'Montagem do site com foco em gerar contato e credibilidade.' },
    { passo: '4', titulo: 'Publicação', texto: 'Site no ar no seu domínio (ex.: .com.br), com orientação para Google Meu Negócio.' },
  ],

  seo: {
    ogImage: HUB_DOMINIO + '/assets/img/og-image.png',
    descriptionDefault: L(
      'Sites, e-commerce, automação de WhatsApp e imagens aéreas com drone. MEI com Nota Fiscal.',
      'Websites, e-commerce, WhatsApp automation and aerial drone imagery. Sole proprietor with official invoice.',
      'Sitios, e-commerce, automatización de WhatsApp e imágenes aéreas con dron. MEI con factura oficial.',
    ),
    geo: {
      region: 'BR-RS',
      placename: 'Porto Alegre',
      latitude: -30.0346,
      longitude: -51.2177,
    },
    local: {
      cidade: 'Porto Alegre',
      uf: 'RS',
      areaServed: [
        'Porto Alegre',
        'Canoas',
        'Novo Hamburgo',
        'Gravataí',
        'Cachoeirinha',
        'Viamão',
        'Alvorada',
        'São Leopoldo',
        'Esteio',
        'Sapucaia do Sul',
      ],
    },
    sameAs: [
      'https://www.linkedin.com/in/tiago-farias1985',
      'https://github.com/tofariasti',
      'https://techdrone360.com.br',
      'https://www.instagram.com/techdrone360/',
      'https://www.youtube.com/@techdrone360',
    ],
    paginas: {
      home: {
        title: L(
          'Farias Digital | Landing Pages e Sites Profissionais',
          'Farias Digital | Professional Landing Pages & Websites',
          'Farias Digital | Landing Pages y Sitios Profesionales',
        ),
        description: L(
          'Landing pages a partir de R$ 300, sites institucionais, e-commerce e automação WhatsApp. MEI · Nota Fiscal · Orçamento grátis.',
          'Landing pages from R$ 300, business websites, e-commerce and WhatsApp automation. Official invoice · Free quote.',
          'Landing pages desde R$ 300, sitios institucionales, e-commerce y automatización WhatsApp. Factura oficial · Presupuesto gratis.',
        ),
      },
      sites: {
        title: L(
          'Landing Page e Criação de Sites | Farias Digital',
          'Landing Pages & Website Development | Farias Digital',
          'Landing Page y Creación de Sitios | Farias Digital',
        ),
        description: L(
          'Landing pages a partir de R$ 300 · Sites institucionais a partir de R$ 1.490. E-commerce, automação WhatsApp e SEO básico.',
          'Landing pages from R$ 300 · Business websites from R$ 1,490. E-commerce, WhatsApp automation and basic SEO.',
          'Landing pages desde R$ 300 · Sitios institucionales desde R$ 1.490. E-commerce, automatización WhatsApp y SEO básico.',
        ),
      },
      drone: {
        title: L(
          'Drone para Imóveis e Empresas | Farias Digital',
          'Drone for Real Estate & Business | Farias Digital',
          'Dron para Inmuebles y Empresas | Farias Digital',
        ),
        description: L(
          'Fotos e vídeos aéreos 4K com drone DJI para imóveis, Airbnb, obras e eventos. A partir de R$ 650. Nota Fiscal.',
          '4K aerial photos and videos with DJI drone for real estate, Airbnb, construction and events. From R$ 650. Official invoice.',
          'Fotos y videos aéreos 4K con dron DJI para inmuebles, Airbnb, obras y eventos. Desde R$ 650. Factura oficial.',
        ),
      },
      sobre: {
        title: L(
          'Sobre a Farias Digital | Tiago Farias — MEI',
          'About Farias Digital | Tiago Farias — Sole Proprietor',
          'Sobre Farias Digital | Tiago Farias — MEI',
        ),
        description: L(
          'Tiago Farias — desenvolvedor web sênior e operador de drone certificado. 10+ anos em Laravel, APIs e integrações. MEI com emissão de Nota Fiscal.',
          'Tiago Farias — senior web developer and certified drone operator. 10+ years in Laravel, APIs and integrations. Official invoice available.',
          'Tiago Farias — desarrollador web senior y operador de dron certificado. Más de 10 años en Laravel, APIs e integraciones. Emisión de factura oficial.',
        ),
      },
      portfolio: {
        title: L(
          'Portfólio de Sites e Landing Pages | Farias Digital',
          'Website & Landing Page Portfolio | Farias Digital',
          'Portafolio de Sitios y Landing Pages | Farias Digital',
        ),
        description: L(
          'Exemplos de landing pages por segmento e projetos em produção. Personalização a partir de R$ 300.',
          'Landing page examples by industry and live projects. Customization from R$ 300.',
          'Ejemplos de landing pages por segmento y proyectos en producción. Personalización desde R$ 300.',
        ),
      },
      faq: {
        title: L(
          'Perguntas Frequentes — Sites e Landing Pages | Farias Digital',
          'FAQ — Websites & Landing Pages | Farias Digital',
          'Preguntas Frecuentes — Sitios y Landing Pages | Farias Digital',
        ),
        description: L(
          'Dúvidas sobre preços, prazos, SEO, domínio e hospedagem. Landing pages a partir de R$ 300.',
          'Questions about pricing, timelines, SEO, domain and hosting. Landing pages from R$ 300.',
          'Dudas sobre precios, plazos, SEO, dominio y hosting. Landing pages desde R$ 300.',
        ),
      },
      'por-que-site': {
        title: L(
          'Por que ter site além do Instagram | Farias Digital',
          'Why have a website beyond Instagram | Farias Digital',
          'Por qué tener sitio web además de Instagram | Farias Digital',
        ),
        description: L(
          'Comparativo Instagram vs site profissional — presença no Google, conversão no WhatsApp e credibilidade para PMEs.',
          'Instagram vs professional website — Google visibility, WhatsApp conversion and credibility for SMBs.',
          'Comparativo Instagram vs sitio profesional — presencia en Google, conversión en WhatsApp y credibilidad para PYMES.',
        ),
      },
    },
    faq: [
      {
        pergunta: L(
          'Quanto custa um site profissional?',
          'How much does a professional website cost?',
          '¿Cuánto cuesta un sitio web profesional?',
        ),
        resposta: L(
          'Landing pages personalizadas começam a partir de R$ 300,00 — ideal para presença rápida no Google com WhatsApp integrado. Sites institucionais com múltiplas seções começam a partir de R$ 1.490. E-commerce e projetos com integrações são orçados conforme escopo.',
          'Custom landing pages start from R$ 300 — ideal for quick Google presence with integrated WhatsApp. Business websites with multiple sections start from R$ 1,490. E-commerce and integration projects are quoted by scope.',
          'Las landing pages personalizadas comienzan desde R$ 300 — ideal para presencia rápida en Google con WhatsApp integrado. Los sitios institucionales con múltiples secciones comienzan desde R$ 1.490. E-commerce e integraciones se presupuestan según alcance.',
        ),
      },
      {
        pergunta: L(
          'Qual a diferença entre landing page e site institucional?',
          'What is the difference between a landing page and a business website?',
          '¿Cuál es la diferencia entre landing page y sitio institucional?',
        ),
        resposta: L(
          'A landing page (a partir de R$ 300) é uma página única focada em conversão — escolho um modelo do seu segmento e personalizo com sua marca. O site institucional (a partir de R$ 1.490) tem mais seções (serviços, sobre, contato, localização) e transmite mais credibilidade para negócios que precisam de presença completa.',
          'A landing page (from R$ 300) is a single conversion-focused page — I pick a template for your industry and customize it with your brand. A business website (from R$ 1,490) has more sections (services, about, contact, location) and conveys more credibility for businesses that need a full presence.',
          'La landing page (desde R$ 300) es una página única enfocada en conversión — elijo un modelo de su segmento y lo personalizo con su marca. El sitio institucional (desde R$ 1.490) tiene más secciones (servicios, sobre, contacto, ubicación) y transmite más credibilidad para negocios que necesitan presencia completa.',
        ),
      },
      {
        pergunta: L(
          'A Farias Digital emite nota fiscal?',
          'Does Farias Digital issue official invoices?',
          '¿Farias Digital emite factura oficial?',
        ),
        resposta: L(
          'Sim. Sou MEI (Microempreendedor Individual) e emito Nota Fiscal para pessoa física e jurídica — ideal para empresas que precisam de documentação formal.',
          'Yes. I am a registered sole proprietor (MEI) and issue official invoices for individuals and companies — ideal for businesses that need formal documentation.',
          'Sí. Soy MEI (Microemprendedor Individual) y emito factura para persona física y jurídica — ideal para empresas que necesitan documentación formal.',
        ),
      },
      {
        pergunta: L(
          'Quanto tempo leva para colocar meu site no ar?',
          'How long does it take to launch my website?',
          '¿Cuánto tiempo lleva publicar mi sitio?',
        ),
        resposta: L(
          'Landing pages costumam ficar prontas em 5 a 10 dias úteis. Sites institucionais e e-commerce levam de 7 a 21 dias, dependendo do escopo e da agilidade no envio de textos e fotos. Prazo exato vem fechado na proposta.',
          'Landing pages are usually ready in 5 to 10 business days. Business websites and e-commerce take 7 to 21 days, depending on scope and how quickly you provide copy and photos. Exact timeline is confirmed in the proposal.',
          'Las landing pages suelen estar listas en 5 a 10 días hábiles. Sitios institucionales y e-commerce tardan de 7 a 21 días, según alcance y rapidez en el envío de textos y fotos. El plazo exacto se confirma en la propuesta.',
        ),
      },
      {
        pergunta: L(
          'O site aparece no Google?',
          'Will my website appear on Google?',
          '¿El sitio aparecerá en Google?',
        ),
        resposta: L(
          'Todos os pacotes incluem SEO básico: título, descrição, URLs amigáveis e configuração para indexação. Também oriento sobre Google Meu Negócio e Search Console para acelerar a presença local.',
          'All packages include basic SEO: title, description, friendly URLs and indexing setup. I also guide you on Google Business Profile and Search Console to accelerate local visibility.',
          'Todos los paquetes incluyen SEO básico: título, descripción, URLs amigables y configuración para indexación. También oriento sobre Google Business Profile y Search Console para acelerar la presencia local.',
        ),
      },
      {
        pergunta: L(
          'Domínio e hospedagem estão inclusos?',
          'Are domain and hosting included?',
          '¿Están incluidos dominio y hosting?',
        ),
        resposta: L(
          'Não estão inclusos nos pacotes base, mas posso orientar a contratação ou gerenciar para você (domínio .com.br + hospedagem a partir de ~R$ 150/ano). Informo tudo no orçamento antes de iniciar.',
          'They are not included in base packages, but I can guide you or manage it for you (.com.br domain + hosting from ~R$ 150/year). Everything is disclosed in the quote before we start.',
          'No están incluidos en los paquetes base, pero puedo orientar la contratación o gestionarlo por usted (dominio .com.br + hosting desde ~R$ 150/año). Informo todo en el presupuesto antes de iniciar.',
        ),
      },
    ],
  },
}
