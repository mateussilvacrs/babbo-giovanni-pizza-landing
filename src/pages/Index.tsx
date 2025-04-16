
import { Button } from "@/components/ui/button";
import { PizzaCard } from "@/components/PizzaCard";
import { Phone, ArrowRight } from "lucide-react";

const pizzas = [
  {
    name: "Margherita",
    description: "Molho de tomate, mussarela fresca, manjericão e azeite extra virgem",
    imageSrc: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "R$39,90"
  },
  {
    name: "Pepperoni",
    description: "Molho de tomate, mussarela, pepperoni italiano e orégano",
    imageSrc: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "R$45,90"
  },
  {
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa fatiada, cebola e orégano",
    imageSrc: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "R$42,90"
  },
  {
    name: "Quatro Queijos",
    description: "Molho de tomate, mussarela, provolone, parmesão, gorgonzola e orégano",
    imageSrc: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "R$48,90"
  },
  {
    name: "Vegetariana",
    description: "Molho de tomate, mussarela, pimentão, cebola, champignon, tomate e rúcula",
    imageSrc: "https://images.unsplash.com/photo-1589187151053-5ec8818e661b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "R$44,90"
  },
  {
    name: "Portuguesa",
    description: "Molho de tomate, mussarela, presunto, cebola, ovo cozido, azeitona e orégano",
    imageSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "R$46,90"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-r from-pizza-tomato to-pizza-red">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1500&q=60')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="container relative z-10 px-4 py-20 text-center text-white">
          <div className="mb-6 inline-block rounded-full border-2 border-white bg-white/10 px-6 py-2 backdrop-blur-sm">
            Autêntica Pizza Italiana
          </div>
          <h1 className="mb-6 text-5xl font-bold italic md:text-7xl">Babbo Giovanni</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl md:text-2xl">
            Tradição italiana em cada fatia. Sabores autênticos feitos com ingredientes selecionados.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Button className="group flex items-center space-x-2 bg-white px-8 py-6 text-lg font-bold text-pizza-red hover:bg-pizza-dough">
              <span>Fazer Pedido</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center space-x-2 rounded-full bg-white/20 px-6 py-4 backdrop-blur-sm">
              <Phone className="h-6 w-6" />
              <span className="text-xl font-bold">40028922</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-pizza-mozzarella py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-pizza-tomato">Nossa História</h2>
            <p className="mb-6 text-lg text-gray-700">
              Desde 1982, a Pizzaria Babbo Giovanni traz para você o verdadeiro sabor da Itália. 
              Nossas receitas tradicionais foram trazidas diretamente da região da Campania pelo 
              nosso fundador, Giovanni Rossi, e mantidas com carinho por toda nossa família.
            </p>
            <p className="text-lg text-gray-700">
              Cada pizza é preparada artesanalmente, com massa fresca feita no dia e ingredientes 
              selecionados. Nossa promessa é entregar uma experiência gastronômica que te transporta 
              para as ruas de Nápoles.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20" id="menu">
        <div className="container px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-pizza-tomato">Nossos Sabores</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pizzas.map((pizza, index) => (
              <PizzaCard
                key={index}
                name={pizza.name}
                description={pizza.description}
                imageSrc={pizza.imageSrc}
                price={pizza.price}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button className="group flex items-center space-x-2 bg-pizza-red px-8 py-6 text-lg font-bold text-white hover:bg-pizza-tomato">
              <span>Ver Menu Completo</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pizza-olive py-20 text-white">
        <div className="container px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold">Peça Agora e Receba em até 40 minutos</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Entrega rápida, pizza quente e saborosa na sua casa. Não perca tempo!
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <Button className="group flex items-center space-x-2 bg-white px-8 py-6 text-lg font-bold text-pizza-olive hover:bg-pizza-dough">
              <span>Fazer Pedido</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <div className="flex items-center space-x-2 rounded-full bg-white/20 px-6 py-4 backdrop-blur-sm">
              <Phone className="h-6 w-6" />
              <span className="text-xl font-bold">40028922</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pizza-basil py-12 text-white">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-2xl font-bold">Babbo Giovanni</h3>
              <p>Autêntica pizza italiana desde 1982</p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold">Horário</h4>
              <p>Segunda a Sexta: 18h - 23h</p>
              <p>Sábado e Domingo: 17h - 00h</p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold">Contato</h4>
              <p>Telefone: 40028922</p>
              <p>Email: contato@babbogiovanniPizza.com</p>
            </div>
            <div>
              <h4 className="mb-4 text-xl font-bold">Endereço</h4>
              <p>Rua das Oliveiras, 123</p>
              <p>Centro - São Paulo, SP</p>
            </div>
          </div>
          <div className="mt-12 border-t border-white/20 pt-6 text-center">
            <p>&copy; {new Date().getFullYear()} Babbo Giovanni. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
