"use client"
import { AnimatedTestimonials } from "@/components/ui/animated-testomonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The taste is just so goood",
      name: "Abhinav Dubey",
      designation: "Delhi",
      src: "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
    },
    {
      quote:
        "I gifted a combo pack to my parents and they find it delicious",
      name: "Aakash",
      designation: "New Delhi",
      src: "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
    },
    {
      quote:
        "Taste is just unforgetful, Everyone should give it a try ",
      name: "Asheesh",
      designation: "Delhi",
      src: "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
    },
    {
      quote:
        "I order the namkeen and the taste was better than my expectation",
      name: "Chaurasia",
      designation: "Rithala,delhi",
      src: "https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
