import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Headphones, MessageSquare, Video, Sparkles } from "lucide-react";

const bonuses = [
  {
    icon: BookOpen,
    title: "Guia Prático de Objetivos",
    description: "Material exclusivo para estruturar e alcançar suas metas de forma estratégica.",
  },
  {
    icon: Headphones,
    title: "Áudios de Reprogramação Mental",
    description: "Sessões de áudio para fortalecer sua mente e eliminar bloqueios psicológicos.",
  },
  {
    icon: MessageSquare,
    title: "Suporte via WhatsApp",
    description: "Acesso direto para tirar dúvidas e receber orientações durante toda a mentoria.",
  },
  {
    icon: Video,
    title: "Gravações por 6 Meses",
    description: "Todas as sessões gravadas para você revisar quando precisar.",
  },
  {
    icon: Sparkles,
    title: "6 Encontros Individuais",
    description: "Sessões personalizadas focadas em suas necessidades específicas.",
  },
];

const BonusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="bonus"
      className="py-20 relative overflow-hidden"
      style={{
        background: "var(--gradient-bonus)",
      }}
      ref={ref}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-white">
            Bônus Exclusivos da Mentoria
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ferramentas e recursos adicionais para potencializar sua transformação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl shadow-xl hover-lift"
            >
              <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <bonus.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold font-poppins mb-2 text-white">
                {bonus.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">{bonus.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
