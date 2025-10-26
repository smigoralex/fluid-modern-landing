import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Brain, Clock, Target } from "lucide-react";

const problems = [
  {
    icon: Brain,
    text: "Estuda horas, mas sente que não absorve o conteúdo",
  },
  {
    icon: AlertCircle,
    text: "Dá branco na hora da prova e esquece o que estudou",
  },
  {
    icon: Clock,
    text: "A ansiedade e o nervosismo te sabotam constantemente",
  },
  {
    icon: Target,
    text: "Falta foco, disciplina e constância nos estudos",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="problem" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Você estuda, mas sente que{" "}
            <span className="text-gradient">não rende?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Se você se identificou com pelo menos um desses pontos, o problema não é
            conteúdo. É psicológico.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-lg hover-lift border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="bg-destructive/10 p-3 rounded-xl">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-lg font-medium">{problem.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
