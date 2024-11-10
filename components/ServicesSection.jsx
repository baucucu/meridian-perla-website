import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Home, Plus, Briefcase, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Curățenie Rezidențială",
      icon: Home,
      description:
        "Servicii de curățenie pentru apartamente, vile, după constructor, scări de bloc și garaje.",
      items: [
        "Apartamente",
        "Vile",
        "După constructor",
        "Scări de bloc",
        "Garaje",
      ],
    },
    {
      title: "Curățenie B2B",
      icon: Briefcase,
      description:
        "Soluții de curățenie pentru birouri, spații comerciale, după constructor și hale industriale.",
      items: ["Birouri", "Spații comerciale", "După constructor", "Hale"],
    },
    {
      title: "Servicii Extra",
      icon: Plus,
      description:
        "Servicii specializate pentru curățarea covoarelor, mochetelor, draperiilor, jaluzelelor, canapelelor și fotoliilor.",
      items: ["Covoare/Mochete", "Draperii/Jaluzele", "Canapele/Fotolii"],
    },
  ];

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="servicii"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Serviciile Noastre
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  // variant="secondary"
                  asChild
                >
                  <Link
                    className={buttonVariants({ variant: "primary" })}
                    href="#contact"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Solicită Ofertă
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
