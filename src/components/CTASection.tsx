import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const highlights = [
  "6 encontros individuais e personalizados",
  "Suporte completo via WhatsApp",
  "Materiais exclusivos e bônus",
  "Gravações disponíveis por 6 meses",
];

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="cta"
      className="py-20 relative overflow-hidden"
      style={{
        background: "var(--gradient-hero)",
      }}
      ref={ref}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-white leading-tight">
            Chegou a hora de blindar sua mente e{" "}
            <span className="text-accent">dominar suas emoções</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Clique abaixo e garanta sua vaga na mentoria com desconto exclusivo
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 text-white"
                >
                  <div className="bg-accent/20 p-1 rounded-full">
                    <Check className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm md:text-base">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-foreground font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 cta-pulse"
            >
              Quero blindar minha mente agora
              <ArrowRight className="ml-2" size={24} />
            </Button>
            
            <p className="text-white/70 mt-6 text-sm">
              🔒 Ambiente seguro | ⚡ Vagas limitadas | 🎁 Bônus exclusivos
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
