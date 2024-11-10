import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Users,
  Calendar,
  Award,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DespreCompanie() {
  const avantaje = [
    { icon: Users, text: "Echipă profesionistă și dedicată" },
    { icon: Calendar, text: "Flexibilitate în programare" },
    { icon: CheckCircle, text: "Servicii personalizate pentru nevoile dvs." },
    { icon: Award, text: "Calitate garantată și satisfacție 100%" },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meridian Perla
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Expertiza în curățenie, strălucire în fiecare colț
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
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
              {/* <Button variant="outline">Contactează-ne</Button> */}
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              La Meridian Perla, ne-am dedicat misiunea de a transforma spațiile
              în oaze de curățenie și confort. Cu o experiență vastă și o
              pasiune pentru excelență, echipa noastră de profesioniști aduce
              strălucire și prospețime în casele și birourile clienților noștri.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Ne mândrim cu atenția la detalii, utilizarea produselor
              eco-friendly și adaptabilitatea la nevoile unice ale fiecărui
              client. Fie că este vorba de o curățenie de rutină sau de un
              proiect complex, suntem aici să depășim așteptările dumneavoastră.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {avantaje.map((avantaj, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center p-4 text-center">
                <avantaj.icon className="h-12 w-12 mb-4 text-primary" />
                <p className="text-sm font-medium">{avantaj.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              De ce să alegi Meridian Perla?
            </h3>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Alegând Meridian Perla, optezi pentru o experiență de curățenie
              superioară, bazată pe profesionalism, încredere și rezultate
              excepționale. Lasă-ne să-ți transformăm spațiul într-un mediu
              impecabil și primitor.
            </p>
          </div>
          <div className="w-full max-w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              alt="Echipa Meridian Perla la lucru"
              className="object-cover w-full h-100"
              height="400"
              src="/cleaning-team.png"
              style={{
                // aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </div>
          {/* <Button size="lg" className="mt-4">
            Solicită o ofertă personalizată
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </section>
  );
}
