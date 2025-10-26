import { Instagram, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Evolua<span className="text-accent">+</span>
            </h3>
            <p className="text-primary-foreground/80">
              Transformando mentes, construindo aprovações.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-accent hover:text-foreground transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Evolua+Blindagem Mental. Todos os direitos
            reservados.
          </p>
          <p className="mt-2 text-sm">
            Desenvolvido com 💙 para transformar vidas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
