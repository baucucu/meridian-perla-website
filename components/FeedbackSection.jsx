import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
export default function FeedbackSection() {
  const clients = [
    {
      name: "Maria P.",
      image: "/images/sarah.jpg",
      feedback:
        "Am apelat la Meridian Perla pentru curățenia de după renovare și sunt extrem de mulțumită. Echipa a fost punctuală, profesionistă și atentă la detalii. Au transformat haosul post-renovare într-un spațiu impecabil în doar câteva ore. Recomand cu încredere!",
    },
    {
      name: "Alexandru I.",
      image: "/images/john.jpg",
      feedback:
        "Colaborez cu Meridian Perla de peste 2 ani pentru curățenia birourilor companiei noastre. Sunt mereu la timp, folosesc produse profesionale și nu deranjează activitatea angajaților. Prețurile sunt corecte pentru calitatea serviciilor oferite.",
    },
    {
      name: "Elena D.",
      image: "/images/emily.jpg",
      feedback:
        "De când am început colaborarea lunară cu Meridian Perla pentru apartamentul meu, nu-mi mai fac griji pentru curățenie. Echipa lor este de încredere, pot să le las cheile cu toată încrederea. Fac o treabă excelentă de fiecare dată!",
    },
    {
      name: "George S.",
      image: "/images/emily.jpg",
      feedback:
        "Am solicitat serviciile lor pentru curățenia generală a vilei noastre. Au venit cu tot echipamentul necesar și au făcut o treabă extraordinară. Singura sugestie ar fi să ofere mai multe opțiuni pentru programare în weekend.",
    },
    {
      name: "Ana M.",
      image: "/images/emily.jpg",
      feedback:
        "Impresionant serviciu! Au curățat apartamentul după chiriași și rezultatul a fost uimitor. Au reușit să elimine toate petele dificile și mirosurile neplăcute. Prețul a fost foarte rezonabil pentru calitatea muncii.",
    },
    {
      name: "Cristian A.",
      image: "/images/emily.jpg",
      feedback:
        "Meridian Perla se ocupă de curățenia showroom-ului nostru auto și sunt foarte mulțumit. Atenția la detalii este remarcabilă, iar mașinile expuse strălucesc întotdeauna. Un partener de încredere pentru orice afacere!",
    },
  ];
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Ce spun clientii Meridian Perla
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <FeedbackCard
              key={index}
              name={client.name}
              image={client.image}
              feedback={client.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeedbackCard = ({ name, image, feedback }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-400">{feedback}</p>
        <p className="mt-4 font-semibold">{name}</p>
      </CardContent>
    </Card>
  );
};
