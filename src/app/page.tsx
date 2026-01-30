"use client";


import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Tools from "./components/Tools";

export default function Home() {
return (
<main className="transition-colors">
  <Navbar/>
 

<Hero />


<Projects />
<Technologies />
<Tools />
<Contact />
</main>
);
}