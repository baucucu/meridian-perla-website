import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-center mb-4">
                Basic Clean
              </h3>
              <div className="text-4xl font-bold text-center mb-4">$99</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>2 hours of cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>2 cleaners</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Basic cleaning supplies included</span>
                </li>
              </ul>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-center mb-4">
                Deep Clean
              </h3>
              <div className="text-4xl font-bold text-center mb-4">$199</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>4 hours of cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>3 cleaners</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>All cleaning supplies included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Deep cleaning of all areas</span>
                </li>
              </ul>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-center mb-4">
                Move-in/Move-out
              </h3>
              <div className="text-4xl font-bold text-center mb-4">$299</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>6 hours of cleaning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>4 cleaners</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>All cleaning supplies included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Detailed cleaning of all areas</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  <span>Carpet cleaning included</span>
                </li>
              </ul>
              <Button className="w-full">Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
