import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, AlertTriangle, Calendar, MessageCircle } from "lucide-react";

const solutions = [
  {
    icon: Flame,
    title: "Foco e Concentração",
    description: "Técnicas práticas para manter sua mente focada e produtiva durante os estudos.",
  },
  {
    icon: AlertTriangle,
    title: "Controle Emocional",
    description: "Estratégias comprovadas para controlar ansiedade e nervosismo em momentos críticos.",
  },
  {
    icon: Calendar,
    title: "Disciplina Constante",
    description: "Rotina mental estruturada para criar disciplina e constância nos estudos.",
  },
  {
    icon: MessageCircle,
    title: "Preparação Mental",
    description: "Preparação emocional completa para enfrentar a prova com máxima confiança.",
  },
];

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="solution" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 leading-tight">
            O <span className="text-gradient">Evolua+Blindagem Mental</span> é uma mentoria
            estruturada em 6 encontros que vai transformar sua mente em sua maior aliada.
          </h2>
          <p className="text-xl text-muted-foreground">
            Não é cursinho. É o que nenhum cursinho ensina: como sua mente pode ser sua arma
            mais poderosa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card p-8 rounded-2xl shadow-xl hover-lift border border-border group"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold font-poppins mb-3">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
