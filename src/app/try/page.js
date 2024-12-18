"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testomonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Abhinav Dubey",
      designation: "Delhi",
      src: "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Aakash",
      designation: "New Delhi",
      src: "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Asheesh",
      designation: "Delhi",
      src: "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Chaurasia",
      designation: "Rithala,delhi",
      src: "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
