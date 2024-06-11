import React from 'react';

import Index from './Index.js';
import BlogCard from './BlogCard.js';
import Faq from './Faq.js';

// TODO: Crear la hoja de estilos
// import '../styles/Main.css' ;
//

export default function Main({ children }) {
  return (
    <main className="Main" > 
      <Index />
      <BlogCard />
      <Faq />
    </main>
  );
}

