"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  FileCheck2,
  Flag,
  Gauge,
  Globe2,
  Handshake,
  Layers3,
  LineChart,
  Megaphone,
  Menu,
  MessageCircle,
  MousePointerClick,
  PanelTop,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Target,
  UsersRound,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { faqItems } from "@/lib/seo";
import { VotaDigitalLogo } from "./votadigital-logo";

type IconComponent = ComponentType<{ className?: string; strokeWidth?: number }>;

const navItems = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Processo", href: "#processo" },
  { label: "Compliance", href: "#compliance" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
];

const heroBadges = [
  "Pré-campanha 2026",
  "Sites e landing pages",
  "Meta Ads e WhatsApp",
  "Captação de apoiadores",
];

const heroHeadline = "Sua campanha digital não pode começar atrasada.";

const whyCards: Array<{ title: string; icon: IconComponent; copy: string }> = [
  {
    title: "Autoridade",
    icon: ShieldCheck,
    copy: "Presença profissional antes do nome ganhar volume.",
  },
  {
    title: "Captação",
    icon: UsersRound,
    copy: "Formulários, CTAs e WhatsApp para organizar contatos.",
  },
  {
    title: "Narrativa",
    icon: Megaphone,
    copy: "Trajetória, pautas e propostas em mensagens claras.",
  },
  {
    title: "Mobile",
    icon: Smartphone,
    copy: "Experiência pensada primeiro para o celular.",
  },
  {
    title: "Velocidade",
    icon: Rocket,
    copy: "Páginas por pauta, região e frente sem improviso.",
  },
  {
    title: "Métricas",
    icon: Gauge,
    copy: "Dados de tráfego e conversão para ajustar a rota.",
  },
];

const audiences: Array<{ title: string; icon: IconComponent; copy: string }> = [
  {
    title: "Pré-candidatos",
    icon: UserRound,
    copy: "Autoridade e captação antes da campanha acelerar.",
  },
  {
    title: "Candidatos",
    icon: Flag,
    copy: "Propostas, agenda, redes e WhatsApp em uma base própria.",
  },
  {
    title: "Mandatos",
    icon: Building2,
    copy: "Entregas, projetos e posicionamentos com clareza.",
  },
  {
    title: "Assessores",
    icon: BriefcaseBusiness,
    copy: "Páginas e criativos prontos para executar com ritmo.",
  },
  {
    title: "Partidos",
    icon: UsersRound,
    copy: "Presença digital padronizada para múltiplos nomes.",
  },
  {
    title: "Consultores políticos",
    icon: Handshake,
    copy: "Uma camada digital premium para seus projetos.",
  },
];

const solutions: Array<{ title: string; icon: IconComponent; copy: string }> = [
  {
    title: "Site oficial",
    icon: PanelTop,
    copy: "Base própria para biografia, propostas, agenda e contato.",
  },
  {
    title: "Landing pages",
    icon: MousePointerClick,
    copy: "Páginas focadas em conversão por pauta, região ou evento.",
  },
  {
    title: "Páginas de propostas",
    icon: Layers3,
    copy: "Ideias e bandeiras explicadas com objetividade.",
  },
  {
    title: "Criativos",
    icon: PenTool,
    copy: "Peças alinhadas à narrativa para redes e tráfego.",
  },
  {
    title: "Meta Ads",
    icon: Target,
    copy: "Pixel, eventos, UTMs e estrutura de mídia.",
  },
  {
    title: "WhatsApp",
    icon: MessageCircle,
    copy: "CTAs e mensagens para conversas organizadas.",
  },
  {
    title: "Formulários",
    icon: FileCheck2,
    copy: "Captação clara de contatos e consentimento.",
  },
  {
    title: "SEO local",
    icon: Globe2,
    copy: "Descoberta por região, nome e pauta.",
  },
  {
    title: "Relatórios",
    icon: LineChart,
    copy: "Leitura objetiva de tráfego, conversão e leads.",
  },
];

const timeline = [
  {
    label: "Agora",
    title: "Estrutura de pré-campanha",
    copy: "Presença, canais e captação preparados com antecedência.",
  },
  {
    label: "Antes da campanha",
    title: "Autoridade, base e narrativa",
    copy: "Casa digital, mensagens claras e contatos organizados.",
  },
  {
    label: "Campanha",
    title: "Tráfego, páginas, criativos e captação",
    copy: "Páginas, anúncios e WhatsApp trabalhando juntos.",
  },
  {
    label: "Reta final",
    title: "Otimização, velocidade e clareza",
    copy: "Dados e execução rápida para priorizar o que funciona.",
  },
];

const complianceItems = [
  "Não é órgão oficial",
  "Sem fake news",
  "Sem deepfake enganoso",
  "IA identificada quando necessário",
  "LGPD",
  "Anúncios com identificação",
];

const process = [
  {
    title: "Diagnóstico",
    copy: "Nome, região, público, pautas e maturidade digital.",
  },
  {
    title: "Narrativa e copy",
    copy: "Trajetória e propostas em mensagens simples.",
  },
  {
    title: "Site e páginas",
    copy: "Estrutura visual e técnica para presença e captação.",
  },
  {
    title: "Captação e WhatsApp",
    copy: "Formulários, CTAs e mensagens prontas.",
  },
  {
    title: "Criativos e campanhas",
    copy: "Peças e páginas para publicação e mídia.",
  },
  {
    title: "Métricas",
    copy: "Dados para ajustar narrativa, páginas e CTAs.",
  },
];

const plans = [
  {
    name: "Pré-candidato Digital",
    price: "A partir de R$ 1.500",
    copy: "Presença profissional antes da campanha.",
    featured: false,
    items: [
      "Landing page premium",
      "Bio e posicionamento",
      "Páginas de pautas principais",
      "Botão WhatsApp",
      "Formulário de apoiadores",
      "SEO básico",
      "Pixel e tags essenciais",
    ],
  },
  {
    name: "Campanha Express",
    price: "A partir de R$ 3.000",
    copy: "Estrutura completa com velocidade e captação.",
    featured: true,
    items: [
      "Site completo",
      "Landing pages por pauta",
      "Criativos iniciais",
      "Setup Meta Ads",
      "WhatsApp estratégico",
      "Relatório semanal",
      "SEO local",
      "Otimização de conversão",
    ],
  },
  {
    name: "War Room Digital",
    price: "Sob consulta",
    copy: "Operação digital para campanhas e equipes.",
    featured: false,
    items: [
      "Estrutura premium completa",
      "Páginas por frente de campanha",
      "Criativos recorrentes",
      "Dashboards",
      "Gestão de narrativa digital",
      "Otimização contínua",
      "Motion design avançado",
      "Suporte estratégico",
    ],
  },
];

export function VotaDigitalLanding() {
  const reducedMotion = useReducedMotion();
  const scopeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let context: { revert: () => void } | undefined;
    let removePointerListener: (() => void) | undefined;
    let active = true;

    async function runGsap() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!active || !scopeRef.current) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const desktopMotion = window.matchMedia("(min-width: 1024px)").matches;

      context = gsap.context(() => {
        gsap.from("[data-hero-badge]", {
          opacity: 0,
          y: 18,
          duration: 0.68,
          stagger: 0.07,
          ease: "power3.out",
        });

        gsap.from("[data-hero-copy] > :not([data-headline])", {
          opacity: 0,
          y: 28,
          duration: 0.86,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.12,
        });

        gsap.from("[data-headline-word]", {
          opacity: 0,
          yPercent: 105,
          rotateX: -18,
          duration: 0.82,
          stagger: 0.045,
          ease: "power4.out",
          delay: 0.18,
        });

        gsap.from("[data-hero-visual]", {
          opacity: 0,
          y: 34,
          scale: 0.96,
          duration: 1,
          ease: "power3.out",
          delay: 0.12,
        });

        if (desktopMotion) {
          gsap.to("[data-float]", {
            y: (index) => (index % 2 === 0 ? -10 : 10),
            duration: 4.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.25,
          });
        }

        gsap.to("[data-logo-shimmer]", {
          opacity: 0.35,
          duration: 1.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, {
            opacity: 0,
            y: 36,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
          gsap.from(Array.from(group.children), {
            opacity: 0,
            y: 24,
            duration: 0.72,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
            },
          });
        });

        gsap.from(".timeline-line", {
          scaleY: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-shell",
            start: "top 72%",
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
          const target = Number(element.dataset.count ?? "0");
          const suffix = element.dataset.suffix ?? "";
          const state = { value: 0 };

          gsap.to(state, {
            value: target,
            duration: 1.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
            onUpdate: () => {
              element.textContent = `${Math.round(state.value).toLocaleString("pt-BR")}${suffix}`;
            },
          });
        });

        const zone = scopeRef.current?.querySelector<HTMLElement>("[data-hero-zone]");
        const floaters = gsap.utils.toArray<HTMLElement>("[data-parallax]");

        if (desktopMotion && zone && floaters.length) {
          const handlePointerMove = (event: PointerEvent) => {
            const bounds = zone.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;

            floaters.forEach((element, index) => {
              const depth = (index + 1) * 7;
              gsap.to(element, {
                x: x * depth,
                y: y * depth,
                duration: 0.55,
                ease: "power2.out",
              });
            });
          };

          zone.addEventListener("pointermove", handlePointerMove);
          removePointerListener = () => zone.removeEventListener("pointermove", handlePointerMove);
        }
      }, scopeRef);
    }

    runGsap();

    return () => {
      active = false;
      removePointerListener?.();
      context?.revert();
    };
  }, [reducedMotion]);

  return (
    <MotionConfig reducedMotion="user">
      <div ref={scopeRef} className="relative overflow-hidden">
        <div className="noise-overlay" />
        <Header />
        <main>
          <Hero />
          <WhyNowSection />
          <AudienceSection />
          <SolutionsSection />
          <ProcessSection />
          <TimelineSection />
          <ComplianceSection />
          <PlansSection />
          <FaqSection />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#07111F]/78 backdrop-blur-2xl">
      <div className="section-shell flex h-18 items-center justify-between gap-4">
        <a href="#" aria-label="VotaDigital - início" className="shrink-0">
          <VotaDigitalLogo />
        </a>

        <nav aria-label="Menu principal" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-[#A8B3C7] transition hover:bg-white/[0.06] hover:text-[#F6F8FF]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ActionLink href={WHATSAPP_URL} size="sm">
            Falar com especialista
          </ActionLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="grid size-11 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.04] text-[#F6F8FF] lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-18 z-40 min-h-[calc(100svh-4.5rem)] border-b border-white/[0.08] bg-[#07111F] px-4 py-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <nav aria-label="Menu mobile" className="mx-auto flex max-w-md flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/[0.08] bg-[#0E1726] px-4 py-3 text-sm font-medium text-[#F6F8FF]"
                >
                  {item.label}
                </a>
              ))}
              <ActionLink href={WHATSAPP_URL} className="mt-2 w-full justify-center">
                Falar com especialista
              </ActionLink>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section
      data-hero-zone
      className="relative isolate overflow-hidden border-b border-white/[0.08] pb-12 pt-8 sm:pt-12 lg:pb-10 lg:pt-12"
    >
      <div className="absolute inset-0 -z-10 digital-grid animated-grid opacity-60" />
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.86fr)] lg:gap-10">
        <div data-hero-copy className="max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {heroBadges.map((badge) => (
              <span
                key={badge}
                data-hero-badge
                className="rounded-full border border-white/[0.1] bg-white/[0.05] px-2.5 py-1 text-[0.72rem] font-semibold text-[#DCE6FF] sm:px-3 sm:py-1.5 sm:text-xs"
              >
                {badge}
              </span>
            ))}
          </div>

          <p className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#2563FF]/30 bg-[#2563FF]/10 px-4 py-2 text-sm font-semibold text-[#9DB7FF]">
            <Sparkles className="size-4" />
            VotaDigital por HyperAG
          </p>

          <h1
            data-headline
            className="font-heading mt-5 flex max-w-[700px] flex-wrap gap-x-2 overflow-hidden text-[clamp(2.15rem,4.7vw,3.85rem)] font-semibold leading-[1.03] text-[#F6F8FF] sm:gap-x-4"
          >
            {heroHeadline.split(" ").map((word, index, words) => (
              <span key={word} className="overflow-hidden pb-1">
                <span data-headline-word className="inline-block">
                  {word}
                  {index < words.length - 1 ? " " : ""}
                </span>
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A8B3C7] sm:text-xl">
            Sites, landing pages, criativos e captação para políticos,
            pré-candidatos e mandatos em 2026.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={WHATSAPP_URL}>
              Estruturar minha campanha
            </ActionLink>
            <ActionLink href="#solucoes" variant="secondary">
              Ver soluções
            </ActionLink>
          </div>

          <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-[#DCE6FF] sm:text-base">
            Organize presença, narrativa e contatos antes da largada.
          </p>

          <div className="mt-6 grid max-w-xl grid-cols-3 gap-2 sm:mt-8 sm:gap-3">
            {[
              ["2026", "Foco eleitoral", "2026", ""],
              ["4820", "Apoiadores mapeados", "4820", ""],
              ["10", "Frentes digitais", "10", "+"],
            ].map(([value, label, count, suffix]) => (
              <div
                key={value}
                className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-2.5 py-3 sm:rounded-2xl sm:px-3 sm:py-4"
              >
                <strong
                  data-count={count}
                  data-suffix={suffix}
                  className="font-heading block text-xl text-[#F6F8FF] sm:text-2xl"
                >
                  {value}
                  {suffix}
                </strong>
                <span className="mt-1 block text-[0.68rem] leading-4 text-[#A8B3C7] sm:text-sm sm:leading-5">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div
      data-hero-visual
      className="relative isolate mx-auto w-full max-w-[360px] overflow-hidden rounded-[28px] border border-white/[0.1] bg-[#0B1423]/76 p-3 shadow-[0_24px_80px_rgba(1,8,20,0.32)] sm:max-w-[430px] sm:p-4 lg:h-[520px] lg:max-w-[520px] lg:overflow-visible lg:rounded-[36px] lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
    >
      <div className="absolute inset-0 -z-10 rounded-[28px] digital-grid opacity-35 lg:inset-4 lg:rounded-[32px] lg:border lg:border-white/[0.08] lg:bg-[#0E1726]/55 lg:shadow-[0_28px_100px_rgba(37,99,255,0.16)]" />

      <div
        data-float
        data-parallax
        className="panel-border absolute left-0 top-8 hidden w-[min(66%,292px)] rounded-2xl bg-[#0B1423]/88 p-4 backdrop-blur-xl lg:block"
      >
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-[#00D084]">Captação</p>
            <strong
              data-count="4820"
              className="font-heading mt-1 block text-2xl text-[#F6F8FF]"
            >
              4.820
            </strong>
          </div>
          <div className="grid size-11 place-items-center rounded-xl bg-[#00D084]/12 text-[#00D084]">
            <UsersRound className="size-5" />
          </div>
        </div>
        <div className="mt-4 h-2 rounded-full bg-white/[0.08]">
          <div className="h-full w-[74%] rounded-full bg-[linear-gradient(135deg,#2563FF_0%,#00D084_100%)]" />
        </div>
        <p className="mt-3 text-xs text-[#A8B3C7]">Leads organizados por pauta e região</p>
      </div>

      <div
        data-float
        data-parallax
        className="panel-border absolute right-0 top-24 hidden w-[min(58%,258px)] rounded-2xl bg-[#0B1423]/90 p-4 backdrop-blur-xl lg:block"
      >
        <div className="flex items-center gap-3">
          <div className="grid size-10 place-items-center rounded-xl bg-[#2563FF]/14 text-[#8BA7FF]">
            <BarChart3 className="size-5" />
          </div>
          <div>
            <p className="text-xs text-[#A8B3C7]">Mídia e criativos</p>
            <strong className="font-heading text-base text-[#F6F8FF]">Painel semanal</strong>
          </div>
        </div>
        <div className="mt-4 flex h-20 items-end gap-2">
          {[42, 68, 52, 84, 74, 92, 64].map((height, index) => (
            <span
              key={height + index}
              className="flex-1 rounded-t-lg bg-[linear-gradient(180deg,#00D084_0%,#2563FF_100%)] opacity-90"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[252px] rounded-[28px] border border-white/[0.16] bg-[#060C16] p-2.5 shadow-[0_22px_70px_rgba(0,0,0,0.42)] sm:max-w-[300px] sm:p-3 lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[280px] lg:max-w-none lg:-translate-x-1/2 lg:-translate-y-[42%]">
        <div className="rounded-[22px] border border-white/[0.08] bg-[#0E1726] p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between sm:mb-4">
            <VotaDigitalLogo markOnly />
            <span className="rounded-full bg-[#00D084]/12 px-3 py-1 text-[0.68rem] font-semibold text-[#00D084]">
              online
            </span>
          </div>
          <div className="rounded-2xl bg-[#07111F] p-3 sm:p-4">
            <p className="text-xs font-semibold text-[#8BA7FF]">Landing de campanha</p>
            <h2 className="font-heading mt-2 text-lg leading-6 text-[#F6F8FF] sm:text-xl sm:leading-7">
              Pauta, cidade e apoiadores em uma página.
            </h2>
            <p className="mt-3 hidden text-xs leading-5 text-[#A8B3C7] sm:block">
              Biografia, propostas e WhatsApp em destaque.
            </p>
            <div className="mt-3 grid gap-2 sm:mt-4">
              {["Nome completo", "Cidade", "WhatsApp"].map((field) => (
                <div
                  key={field}
                  className={`${field === "Cidade" ? "hidden sm:block" : ""} rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-xs text-[#A8B3C7]`}
                >
                  {field}
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-[linear-gradient(135deg,#2563FF_0%,#00D084_100%)] px-4 py-2.5 text-center text-xs font-bold text-white sm:mt-4 sm:py-3">
              Entrar em contato
            </div>
          </div>
          <div className="mt-4 hidden grid-cols-3 gap-2 sm:grid">
            {["SEO", "Ads", "CRM"].map((item) => (
              <span
                key={item}
                className="rounded-xl border border-white/[0.08] bg-white/[0.04] py-2 text-center text-[0.68rem] font-semibold text-[#A8B3C7]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div
        data-float
        data-parallax
        className="panel-border absolute bottom-8 left-4 hidden w-[min(58%,284px)] rounded-2xl bg-[#0B1423]/88 p-4 backdrop-blur-xl lg:block"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-[#A8B3C7]">Timeline 2026</span>
          <CalendarDays className="size-4 text-[#00D084]" />
        </div>
        <div className="mt-4 space-y-3">
          {["Pré-campanha", "Propaganda", "1º turno"].map((item, index) => (
            <div key={item} className="flex items-center gap-3">
              <span className="grid size-6 place-items-center rounded-full bg-[#2563FF]/16 text-[0.68rem] font-bold text-[#8BA7FF]">
                {index + 1}
              </span>
              <span className="text-xs text-[#DCE6FF]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <svg
        aria-hidden="true"
        className="absolute inset-0 hidden h-full w-full text-[#2563FF]/30 lg:block"
        viewBox="0 0 520 520"
        fill="none"
      >
        <path d="M96 132 C200 118 238 190 306 188 S410 162 468 204" stroke="currentColor" />
        <path d="M108 404 C198 356 260 382 322 330 S404 274 486 304" stroke="currentColor" />
        <circle cx="120" cy="146" r="4" fill="#00D084" />
        <circle cx="468" cy="204" r="4" fill="#00D084" />
        <circle cx="486" cy="304" r="4" fill="#00D084" />
      </svg>
    </div>
  );
}

function AudienceSection() {
  return (
    <section className="bg-[#07111F] py-16 sm:py-20" data-reveal>
      <div className="section-shell">
        <SectionIntro
          eyebrow="Para quem é"
          title="Para campanhas, mandatos e equipes políticas."
          copy="Estrutura digital para quem precisa organizar presença, narrativa e contatos."
        />
        <div data-stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title}>
              {item.copy}
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solucoes" className="bg-[#0E1726] py-16 sm:py-24" data-reveal>
      <div className="section-shell">
        <SectionIntro
          eyebrow="O que entregamos"
          title="Estrutura digital para campanha real."
          copy="Site, páginas, criativos, WhatsApp, captação e métricas em uma operação visual e organizada."
        />
        <div data-stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} compact>
              {item.copy}
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="relative bg-[#07111F] py-16 sm:py-24" data-reveal>
      <div className="section-shell">
        <SectionIntro
          eyebrow="Linha do tempo 2026"
          title="A campanha digital começa antes da largada."
          copy="Uma sequência simples para sair do improviso e ganhar velocidade."
        />
        <div className="timeline-shell relative mt-12">
          <div className="timeline-line absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-[linear-gradient(180deg,#2563FF_0%,#00D084_100%)] lg:left-1/2" />
          <div className="grid gap-6">
            {timeline.map((item, index) => (
              <div
                key={item.label}
                className="relative grid gap-4 pl-12 lg:grid-cols-2 lg:gap-10 lg:pl-0"
              >
                <div className={index % 2 === 0 ? "lg:text-right" : "lg:col-start-2"}>
                  <span className="inline-flex rounded-full border border-[#00D084]/25 bg-[#00D084]/10 px-3 py-1 text-xs font-bold text-[#00D084]">
                    {item.label}
                  </span>
                  <h3 className="font-heading mt-3 text-2xl font-semibold text-[#F6F8FF]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#A8B3C7]">{item.copy}</p>
                </div>
                <span className="absolute left-[11px] top-1 grid size-7 place-items-center rounded-full border border-[#00D084]/45 bg-[#07111F] lg:left-1/2 lg:-translate-x-1/2">
                  <span className="size-2.5 rounded-full bg-[#00D084]" />
                </span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-10 rounded-2xl border border-[#1B2A44] bg-white/[0.035] p-4 text-sm leading-7 text-[#A8B3C7]">
          As datas e regras eleitorais devem ser validadas com assessoria jurídica
          especializada. A VotaDigital atua na estrutura digital, comunicação e
          tecnologia.
        </p>
      </div>
    </section>
  );
}

function ComplianceSection() {
  return (
    <section id="compliance" className="bg-[#0E1726] py-16 sm:py-24" data-reveal>
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionIntro
            eyebrow="Compliance digital"
            title="Velocidade com cuidado."
            copy="Marketing político digital precisa de clareza, identificação e boas práticas."
            align="left"
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href={WHATSAPP_URL}>Conversar sobre compliance</ActionLink>
          </div>
        </div>
        <div data-stagger className="grid gap-4 sm:grid-cols-2">
          {complianceItems.map((item) => (
            <motion.article
              key={item}
              whileHover={{ y: -5 }}
              className="panel-border flex min-h-32 items-start gap-4 rounded-2xl bg-[#07111F]/70 p-5"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#00D084]/12 text-[#00D084]">
                <ShieldCheck className="size-5" />
              </span>
              <p className="text-sm font-semibold leading-6 text-[#F6F8FF]">{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="processo" className="bg-[#07111F] py-16 sm:py-24" data-reveal>
      <div className="section-shell">
        <SectionIntro
          eyebrow="Processo"
          title="Do posicionamento à captação."
          copy="Estratégia, produção, configuração técnica e leitura de dados em um fluxo direto."
        />
        <div data-stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <motion.article
              key={step.title}
              whileHover={{ y: -6 }}
              className="panel-border relative min-h-44 overflow-hidden rounded-2xl bg-[#0E1726]/75 p-6"
            >
              <span className="font-heading text-sm font-semibold text-[#00D084]">
                0{index + 1}
              </span>
              <h3 className="font-heading mt-5 text-xl font-semibold text-[#F6F8FF]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#A8B3C7]">{step.copy}</p>
              <div className="absolute -right-8 -top-8 size-28 rounded-full border border-[#2563FF]/25" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section id="planos" className="bg-[#0E1726] py-16 sm:py-24" data-reveal>
      <div className="section-shell">
        <SectionIntro
          eyebrow="Planos"
          title="Escolha a estrutura certa para o momento da sua campanha."
          copy="Planos iniciais para presença, captação e operação digital."
        />
        <div data-stagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.article
              key={plan.name}
              whileHover={{ y: -8 }}
              className={
                plan.featured
                  ? "panel-border relative rounded-3xl border-[#00D084]/45 bg-[#07111F] p-6 shadow-[0_34px_100px_rgba(0,208,132,0.12)]"
                  : "panel-border rounded-3xl bg-[#07111F]/70 p-6"
              }
            >
              {plan.featured ? (
                <span className="absolute right-5 top-5 rounded-full bg-[#00D084]/12 px-3 py-1 text-xs font-bold text-[#00D084]">
                  Mais procurado
                </span>
              ) : null}
              <h3 className="font-heading max-w-[13rem] text-2xl font-semibold leading-8 text-[#F6F8FF]">
                {plan.name}
              </h3>
              <p className="font-heading mt-5 text-3xl font-semibold text-gradient">
                {plan.price}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#A8B3C7]">{plan.copy}</p>
              <ul className="mt-7 space-y-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-[#DCE6FF]">
                    <Check className="mt-1 size-4 shrink-0 text-[#00D084]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ActionLink href={WHATSAPP_URL} className="mt-8 w-full justify-center" variant={plan.featured ? "primary" : "secondary"}>
                Solicitar proposta
              </ActionLink>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyNowSection() {
  return (
    <section className="relative overflow-hidden bg-[#07111F] py-16 sm:py-24" data-reveal>
      <div className="absolute inset-0 -z-10 digital-grid opacity-30" />
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div className="flex items-start gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-[#2563FF]/14 text-[#8BA7FF]">
              <Zap className="size-7" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase text-[#00D084]">
                Por que isso importa agora
              </p>
              <h2 className="font-heading mt-2 text-3xl font-semibold leading-tight text-[#F6F8FF] sm:text-5xl">
                Quem espera a largada começa atrás.
              </h2>
            </div>
          </div>
          <p className="text-xl font-semibold leading-9 text-[#F6F8FF] lg:text-2xl lg:leading-[1.48]">
            Em 2026, o eleitor pesquisa, compara e decide atenção no digital. A
            VotaDigital prepara sua presença antes da campanha acelerar.
          </p>
        </div>
        <div data-stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((item) => (
            <InfoCard key={item.title} icon={item.icon} title={item.title} compact>
              {item.copy}
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#0E1726] py-16 sm:py-24" data-reveal>
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionIntro
          eyebrow="FAQ"
          title="Perguntas frequentes antes de começar."
          copy="Respostas curtas para orientar o escopo inicial. Pontos legais devem passar pela assessoria da campanha."
          align="left"
        />
        <div className="space-y-3">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={faq.question}
                whileHover={{ y: -2 }}
                className="overflow-hidden rounded-2xl border border-white/[0.1] bg-[#07111F]/72"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="font-heading text-base font-semibold leading-6 text-[#F6F8FF]">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-white/[0.06] text-[#00D084]"
                  >
                    <ChevronDown className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-panel-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-7 text-[#A8B3C7]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-[#07111F] py-16 sm:py-24" data-reveal>
      <div className="section-shell relative overflow-hidden rounded-[32px] border border-white/[0.12] bg-[linear-gradient(135deg,rgba(37,99,255,0.28)_0%,rgba(0,208,132,0.15)_100%)] px-6 py-12 sm:px-10 lg:px-14">
        <div className="absolute inset-0 digital-grid opacity-25" />
        <div className="relative max-w-3xl">
          <p className="text-sm font-bold uppercase text-[#00D084]">Próximo passo</p>
          <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight text-[#F6F8FF] sm:text-5xl">
            Prepare sua campanha antes da largada.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#DCE6FF]">
            Site, páginas, criativos e WhatsApp para organizar presença,
            narrativa e contatos antes da maioria.
          </p>
          <ActionLink href={WHATSAPP_URL} className="mt-8">
            Falar no WhatsApp
          </ActionLink>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050B14] py-10">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <VotaDigitalLogo />
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#A8B3C7]">
            VotaDigital é uma vertical da HyperAG para soluções digitais voltadas
            a campanhas, mandatos e comunicação política.
          </p>
          <p className="mt-4 max-w-2xl text-xs leading-6 text-[#78859A]">
            A VotaDigital não é órgão público, não representa a Justiça Eleitoral
            e não realiza votação online.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:items-end">
          <nav aria-label="Links do rodapé" className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#A8B3C7] transition hover:text-[#F6F8FF]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="https://hyperag.com.br/pt-BR"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[#A8B3C7] transition hover:text-[#00D084]"
          >
            Desenvolvido por HyperAG
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-bold uppercase text-[#00D084]">{eyebrow}</p>
      <h2 className="font-heading mt-4 text-3xl font-semibold leading-tight text-[#F6F8FF] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[#A8B3C7] sm:text-lg">{copy}</p>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
  compact = false,
}: {
  icon: IconComponent;
  title: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="panel-border min-h-52 rounded-2xl bg-[#0B1423]/72 p-5"
    >
      <span className="grid size-12 place-items-center rounded-2xl bg-[#2563FF]/14 text-[#8BA7FF]">
        <Icon className="size-5" />
      </span>
      <h3 className="font-heading mt-5 text-xl font-semibold leading-7 text-[#F6F8FF]">
        {title}
      </h3>
      <p className={compact ? "mt-3 text-sm leading-7 text-[#A8B3C7]" : "mt-3 text-base leading-7 text-[#A8B3C7]"}>
        {children}
      </p>
    </motion.article>
  );
}

function ActionLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
}) {
  const external = href.startsWith("http");
  const classes =
    variant === "primary"
      ? "button-shine bg-[linear-gradient(135deg,#2563FF_0%,#00D084_100%)] text-white shadow-[0_18px_50px_rgba(37,99,255,0.28)]"
      : "border border-white/[0.12] bg-white/[0.04] text-[#F6F8FF] hover:bg-white/[0.08]";
  const padding = size === "sm" ? "px-4 py-2.5 text-sm" : "px-5 py-3.5 text-sm sm:text-base";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 rounded-full font-bold transition ${classes} ${padding} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="size-4" />
    </motion.a>
  );
}
