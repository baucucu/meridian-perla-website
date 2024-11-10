import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { CardContent, Card } from "./ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <iframe
        aria-label="Contact Meridian-Perla"
        frameBorder="0"
        style={{ width: "100%", height: "500px" }}
        src="https://forms.zohopublic.com/helloap1/form/ContactMeridianPerla/formperma/d6DPwZdKBvujcjp-0ODLj61bB8x2VNXc8nZnZu3mxFE"
      ></iframe>
    </section>
  );
}
