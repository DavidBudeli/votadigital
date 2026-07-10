import {
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "./constants";

export const faqItems = [
  {
    question: "Posso usar o site na pré-campanha?",
    answer:
      "Sim, desde que a comunicação respeite as regras aplicáveis e seja validada pela assessoria jurídica eleitoral. A VotaDigital estrutura presença, narrativa e captação com cuidado para esse contexto.",
  },
  {
    question: "Vocês fazem anúncios políticos?",
    answer:
      "Sim, podemos preparar estrutura, criativos e páginas para campanhas em plataformas permitidas, respeitando políticas das plataformas, identificação de anúncios e regras eleitorais aplicáveis.",
  },
  {
    question: "O site substitui assessoria jurídica?",
    answer:
      "Não. A VotaDigital não presta assessoria jurídica eleitoral. Atuamos com tecnologia, marketing, copy, design e estrutura digital.",
  },
  {
    question: "Vocês fazem conteúdo para Instagram?",
    answer:
      "Sim. Criamos criativos, roteiros, peças e páginas conectadas à estratégia de campanha.",
  },
  {
    question: "Vocês integram com WhatsApp?",
    answer:
      "Sim. O site terá CTA para WhatsApp com mensagem estratégica pronta para captar interessados e facilitar o atendimento.",
  },
  {
    question: "Vocês trabalham para qualquer partido?",
    answer:
      "A VotaDigital pode atender diferentes espectros políticos, desde que o projeto respeite regras legais, políticas das plataformas e boas práticas de comunicação.",
  },
  {
    question: "Quanto tempo leva para lançar?",
    answer:
      "Depende do escopo. Uma landing page pode ser lançada rapidamente; estruturas completas exigem diagnóstico, copy, design, desenvolvimento e revisão.",
  },
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
      description: SEO_DESCRIPTION,
      parentOrganization: {
        "@type": "Organization",
        name: "HyperAG",
        url: "https://hyperag.com.br/pt-BR",
      },
      sameAs: ["https://hyperag.com.br/pt-BR"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SEO_DESCRIPTION,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "pt-BR",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Estrutura digital para campanhas políticas 2026",
      serviceType: "Marketing político digital",
      provider: {
        "@id": `${SITE_URL}/#organization`,
      },
      areaServed: {
        "@type": "Country",
        name: "Brasil",
      },
      description:
        "Sites, landing pages, criativos, Meta Ads, WhatsApp estratégico, SEO local, captação de apoiadores e relatórios para campanhas, mandatos e comunicação política.",
      keywords: SEO_KEYWORDS.join(", "),
      offers: [
        {
          "@type": "Offer",
          name: "Pré-candidato Digital",
          priceCurrency: "BRL",
          price: "1500",
        },
        {
          "@type": "Offer",
          name: "Campanha Express",
          priceCurrency: "BRL",
          price: "3000",
        },
        {
          "@type": "Offer",
          name: "War Room Digital",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "BRL",
            description: "Sob consulta",
          },
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};
