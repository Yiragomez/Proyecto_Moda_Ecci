/* ============================================
   MODA ECCI — script.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------ NAVBAR scroll effect ------ */
  const navbar = document.querySelector('.navbar-moda');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* ------ NAVBAR active link on scroll ------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-moda .nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.navbar-moda .nav-link[href="#${e.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));

  /* ------ GLOBAL LANGUAGE SWITCH ------ */
  const globalBtns = document.querySelectorAll('.global-lang-btn');
  globalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      globalBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setLang(btn.dataset.lang);
    });
  });

  /* ============================================================
     i18n DICTIONARY — todas las claves del sitio
  ============================================================ */
  const i18n = {
    es: {
      /* NAV */
      'nav.inicio': 'Inicio',
      'nav.experiencia': 'Nuestra Experiencia',
      'nav.glosario': 'Glosario',
      'nav.sostenibilidad': 'Sostenibilidad',

      /* HERO */
      'hero.eyebrow': 'SENA · Centro de Manufactura en Textil y Cuero',
      'hero.title1': 'Nuestra Experiencia',
      'hero.title2': 'Moda ECCI',
      'hero.title3': 'Color · Identidad · FrontEnd',
      'hero.subtitle': 'Cuatro estudiantes del SENA frente a un espacio donde el color, la moda y el desarrollo de interfaces se cruzan, y desde donde construimos esta página como evidencia de lo que vivimos y aprendimos juntos.',
      'hero.cta1': 'Ver nuestra experiencia',
      'hero.cta2': 'Conocer más',
      'hero.stat1': 'Integrantes',
      'hero.stat2': 'Conferencia',
      'hero.stat3': 'Términos del glosario',

      /* ALERT */
      'alert.text': '<strong>Trabajo de equipo:</strong> Este sitio documenta lo que vivimos y aprendimos como grupo en Moda ECCI — diseño, creatividad e innovación aplicada a la industria de la moda.',

      /* SOBRE */
      'sobre.label': 'El evento',
      'sobre.title': '¿Qué es Moda ECCI?',
      'sobre.p1': 'Moda ECCI es un espacio académico orientado hacia el diseño, la creatividad y la innovación en la industria de la moda. Como estudiantes del SENA, asistimos para conectar conceptos de diseño visual con el desarrollo de software FrontEnd.',
      'sobre.p2': 'La conferencia principal estuvo a cargo de <strong>Sara Viloria</strong>, quien nos habló de su propio recorrido con el color: desde la historia de los pigmentos hasta Newton, Goethe y la forma en que cada persona ya tiene, sin saberlo, un lenguaje propio del color.',
      'sobre.modal.btn': 'Sobre este proyecto',
      'sobre.explorar': 'Explorar',

      /* CAROUSEL */
      'carousel.s1.title': 'El viaje del color',
      'carousel.s1.desc': 'De la historia de los pigmentos a la psicología del color',
      'carousel.s2.title': 'Newton y Goethe',
      'carousel.s2.desc': 'La física del color frente a la experiencia humana',
      'carousel.s3.title': 'El color como lenguaje',
      'carousel.s3.desc': 'El primer lenguaje del ser humano',

      /* EXPERIENCIA */
      'exp.label': 'Sección 02',
      'exp.title': 'Nuestra Experiencia en Moda ECCI',
      'exp.es.label': 'Aprendizajes',
      'exp.es.title': 'Lo que aprendimos',
      'exp.es.p1': 'Asistir a Moda ECCI fue una experiencia que nos marcó como grupo. La conferencia de <strong>Sara Viloria</strong> empezó con un ejercicio sencillo: nos pidió elegir un color que estuviéramos viendo en ese momento, ponerle un recuerdo y luego una sensación. Con eso nos demostró algo que no esperábamos: todos, sin estudiar teoría, ya tenemos un lenguaje propio del color.',

      /* TIMELINE */
      'tl.1.title': 'Primera impresión',
      'tl.1.text': 'Llegar a un espacio donde la moda y el código comparten el mismo escenario nos pareció raro al principio, pero terminó siendo justo el punto que conectó todo lo que vimos después.',
      'tl.2.title': 'La historia oscura de los pigmentos',
      'tl.2.text': 'Nos sorprendió descubrir que casi todos los colores históricos tienen un origen incómodo: el amarillo gutagamba se hacía con orina de vacas alimentadas solo con hojas de mango, el verde de Scheele se asoció con la muerte de Napoleón y de varias mujeres de la era victoriana, y el púrpura de Tiro necesitaba toneladas de moluscos para teñir una sola prenda, por eso quedó reservado para la realeza durante siglos.',
      'tl.3.title': 'El círculo cromático no es la respuesta',
      'tl.3.text': 'Sara nos contó que el círculo cromático tiene apenas unos 300 años, mucho menos que el arte mismo, y que cualquier combinación dentro de él "funciona". Lo que cambia no es la combinación, sino lo que queremos comunicar. Eso nos hizo ver las armonías de color de otra forma: como punto de partida, no como receta.',
      'tl.4.title': 'Newton, Goethe y la conexión FrontEnd',
      'tl.4.text': 'Newton mostró que la luz blanca contiene todos los colores y armó el primer círculo cromático. Pero Goethe, años después, dijo que el color no ocurre en un prisma sino en nuestro cerebro y nuestros ojos: es psicología y emoción. Entendimos que un <code style="background:rgba(232,120,154,0.1);padding:0.1rem 0.4rem;border-radius:4px;font-size:0.85em;">design token</code> en CSS hace en una interfaz algo parecido a lo que Goethe describía: traduce una decisión humana sobre cómo nos sentimos con un color en algo consistente y reproducible.',

      /* QUOTE */
      'quote.text': '"El color es el lugar donde nuestro cerebro y el universo se encuentran."',
      'quote.cite': '— Paul Klee, citado por Sara Viloria en su conferencia',

      /* HIGHLIGHTS */
      'highlights.title': 'Lo que más nos llamó la atención',
      'highlights.i1': 'El ejercicio inicial de nombrar un color, un recuerdo y una sensación — algo simple que cambió cómo vemos el color desde entonces',
      'highlights.i2': 'La frase "una persona con colores nunca está sola", que habla de estar presentes y conectados con lo que vemos',
      'highlights.i3': 'Descubrir que el círculo cromático tiene solo 300 años y que cualquier combinación dentro de él "funciona"',
      'highlights.i4': 'La idea de que el color es emoción pura, y que está en nuestras manos saber direccionarlo en lo que diseñamos',

      /* VIDEOS */
      'video.label': 'Multimedia',
      'video.title': 'Videos del Evento',
      'video.v1.title': 'La conferencia de Sara Viloria',
      'video.v1.text': 'El recorrido completo: de los pigmentos antiguos a la psicología del color, contado desde su experiencia personal.',
      'video.v2.title': 'Momentos del evento',
      'video.v2.text': 'Algunos fragmentos de la jornada que vivimos en Moda ECCI, junto a otros estudiantes y diseñadores.',

      /* GALERÍA */
      'gallery.label': 'Galería de fotos',
      'gallery.caption': 'Fotos del evento',

      /* GLOSARIO */
      'glos.label': 'Sección 03',
      'glos.title': 'Glosario Técnico',
      'glos.desc': '20 términos clave sobre teoría del color, historia del color, FrontEnd y sostenibilidad — los que más nos llamaron la atención de la conferencia de Sara Viloria.',
      'glos.search.label': 'Buscar',
      'glos.search.placeholder': 'Buscar en español o inglés…',
      'glos.th1': 'English',
      'glos.th2': 'Español',
      'glos.th3': 'Definición / Definition',
      'glos.th4': 'Categoría',
      'glos.noResult': 'No se encontraron términos.',

      /* SOSTENIBILIDAD */
      'sost.label': 'Sección 04',
      'sost.title': 'Tecnología, Sostenibilidad<br/>& Economía Circular',
      'sost.c1.title': 'Reducción de Residuos',
      'sost.c1.text': 'La industria de la moda genera el 10% de las emisiones de carbono global. El diseño circular prioriza materiales que retornan al ciclo productivo sin convertirse en basura.',
      'sost.c2.title': 'Reutilización',
      'sost.c2.text': 'El upcycling transforma prendas descartadas en nuevas piezas de mayor valor. En tecnología equivale a reutilizar componentes de código, librerías open-source y arquitecturas modulares.',
      'sost.c3.title': 'Optimización de Recursos',
      'sost.c3.text': 'Código limpio, imágenes optimizadas y menor consumo de energía en servidores reduce la huella de carbono digital. El diseño eficiente minimiza el desperdicio.',
      'sost.c4.title': 'Producción Sostenible',
      'sost.c4.text': 'Materiales naturales y tinturas ecológicas son el equivalente del código limpio y documentado que produce software de calidad con menor esfuerzo de mantenimiento.',
      'sost.c5.title': 'Impacto Ambiental Positivo',
      'sost.c5.text': 'Más allá de reducir el daño, el objetivo es regenerar: diseñar productos que mejoran activamente el entorno donde existen, tanto en moda como en tecnología.',
      'sost.c6.title': 'Responsabilidad Organizacional',
      'sost.c6.text': 'Las empresas deben asumir responsabilidad por su cadena de valor. En tecnología esto incluye transparencia de datos, privacidad y ética en el desarrollo de software.',
      'sost.commit.title': 'Nuestro compromiso como futuros desarrolladores',
      'sost.commit.text': 'Después de Moda ECCI, los cuatro nos comprometemos a aplicar principios de economía circular en nuestra práctica profesional: escribir código reutilizable, documentar para que otros puedan construir sobre nuestro trabajo, elegir tecnologías de bajo impacto energético, diseñar interfaces accesibles para todas las personas, y pensar siempre en el ciclo de vida completo de lo que construimos.',
      'sost.tag1': '♻️ Código reutilizable',
      'sost.tag2': '📖 Documentar siempre',
      'sost.tag3': '♿ Diseño accesible',
      'sost.tag4': '🌱 Bajo impacto digital',

      /* MODAL */
      'modal.title': 'Sobre este proyecto',
      'modal.p': 'Sitio web académico desarrollado en equipo, por cuatro estudiantes, como entregable del módulo FrontEnd del SENA — Centro de Manufactura en Textil y Cuero. Todo el contenido surge de nuestra participación directa en la conferencia de Sara Viloria en Moda ECCI.',
      'modal.li1': 'HTML5 · CSS3 · Bootstrap 5 · JavaScript ES6',
      'modal.li2': 'Contenido bilingüe (ES / EN)',
      'modal.li3': 'Paleta pastel inspirada en Pantone',
      'modal.close': 'Cerrar',

      /* FOOTER */
      'footer.desc': 'Trabajo en equipo — Moda ECCI, SENA Centro de Manufactura en Textil y Cuero.',
      'footer.nav': 'Navegación',
      'footer.nav1': 'Inicio',
      'footer.nav2': 'Nuestra Experiencia',
      'footer.nav3': 'Glosario',
      'footer.nav4': 'Sostenibilidad',
      'footer.tech': 'Tecnologías',
      'footer.copy': '© 2025 Moda ECCI — Trabajo en equipo, SENA Centro de Manufactura en Textil y Cuero',
    },

    en: {
      /* NAV */
      'nav.inicio': 'Home',
      'nav.experiencia': 'Our Experience',
      'nav.glosario': 'Glossary',
      'nav.sostenibilidad': 'Sustainability',

      /* HERO */
      'hero.eyebrow': 'SENA · Textile & Leather Manufacturing Center',
      'hero.title1': 'Our Experience',
      'hero.title2': 'Moda ECCI',
      'hero.title3': 'Color · Identity · FrontEnd',
      'hero.subtitle': 'Four SENA students at a space where color, fashion, and interface development meet — and where we built this page as evidence of what we lived and learned together.',
      'hero.cta1': 'See our experience',
      'hero.cta2': 'Learn more',
      'hero.stat1': 'Team members',
      'hero.stat2': 'Conference',
      'hero.stat3': 'Glossary terms',

      /* ALERT */
      'alert.text': '<strong>Teamwork:</strong> This site documents what we experienced and learned as a group at Moda ECCI — design, creativity and innovation applied to the fashion industry.',

      /* SOBRE */
      'sobre.label': 'The event',
      'sobre.title': 'What is Moda ECCI?',
      'sobre.p1': 'Moda ECCI is an academic space focused on design, creativity and innovation in the fashion industry. As SENA students, we attended to connect visual design concepts with FrontEnd software development.',
      'sobre.p2': 'The main conference was led by <strong>Sara Viloria</strong>, who shared her own journey with color: from the history of pigments to Newton, Goethe, and the way every person already has, without realizing it, their own language of color.',
      'sobre.modal.btn': 'About this project',
      'sobre.explorar': 'Explore',

      /* CAROUSEL */
      'carousel.s1.title': 'The journey of color',
      'carousel.s1.desc': 'From the history of pigments to the psychology of color',
      'carousel.s2.title': 'Newton and Goethe',
      'carousel.s2.desc': 'The physics of color versus the human experience',
      'carousel.s3.title': 'Color as language',
      'carousel.s3.desc': "Humanity's first language",

      /* EXPERIENCIA */
      'exp.label': 'Section 02',
      'exp.title': 'Our Experience at Moda ECCI',
      'exp.es.label': 'Learnings',
      'exp.es.title': 'What We Learned',
      'exp.es.p1': "Attending Moda ECCI was an experience that left a mark on all four of us. <strong>Sara Viloria's</strong> talk opened with a simple exercise: she asked us to pick a color we were looking at right then, give it a memory, and then a feeling. With that, she showed us something we didn't expect — without any theory, we all already have our own language of color.",

      /* TIMELINE */
      'tl.1.title': 'First impression',
      'tl.1.text': 'Arriving at a space where fashion and code share the same stage felt strange at first, but it turned out to be exactly the connection that tied everything we saw afterward together.',
      'tl.2.title': 'The dark history of pigments',
      'tl.2.text': 'We were surprised to discover that almost all historical colors have an uncomfortable origin: gamboge yellow was made from the urine of cows fed only mango leaves, Scheele\'s green was linked to the death of Napoleon and several Victorian women, and Tyrian purple required tons of mollusks to dye a single garment — which is why it was reserved for royalty for centuries.',
      'tl.3.title': 'The color wheel is not the answer',
      'tl.3.text': 'Sara told us that the color wheel is only about 300 years old — much younger than art itself — and that any combination within it "works." What changes is not the combination, but what we want to communicate. That made us see color harmonies differently: as a starting point, not a recipe.',
      'tl.4.title': 'Newton, Goethe and the FrontEnd connection',
      'tl.4.text': 'Newton showed that white light contains all colors and built the first color wheel. But Goethe, years later, said that color does not happen in a prism but in our brain and eyes — it is psychology and emotion. We understood that a <code style="background:rgba(232,120,154,0.1);padding:0.1rem 0.4rem;border-radius:4px;font-size:0.85em;">design token</code> in CSS does something similar to what Goethe described: it translates a human decision about how a color makes us feel into something consistent and reproducible.',

      /* QUOTE */
      'quote.text': '"Color is the place where our brain and the universe meet."',
      'quote.cite': '— Paul Klee, quoted by Sara Viloria in her conference',

      /* HIGHLIGHTS */
      'highlights.title': 'What stood out to us the most',
      'highlights.i1': 'The opening exercise of naming a color, a memory, and a feeling — something simple that changed how we see color ever since',
      'highlights.i2': 'The phrase "a person with colors is never alone," which speaks to being present and connected to what we see',
      'highlights.i3': 'Discovering that the color wheel is only 300 years old and that any combination within it "works"',
      'highlights.i4': 'The idea that color is pure emotion, and that it is in our hands to direct it intentionally in what we design',

      /* VIDEOS */
      'video.label': 'Multimedia',
      'video.title': 'Event Videos',
      'video.v1.title': "Sara Viloria's conference",
      'video.v1.text': 'The full journey: from ancient pigments to the psychology of color, told through her own personal experience.',
      'video.v2.title': 'Moments from the event',
      'video.v2.text': 'A few highlights from the day we spent at Moda ECCI, alongside other students and designers.',

      /* GALERÍA */
      'gallery.label': 'Photo gallery',
      'gallery.caption': 'Event photos',

      /* GLOSARIO */
      'glos.label': 'Section 03',
      'glos.title': 'Technical Glossary',
      'glos.search.label': 'Search',
      'glos.search.placeholder': 'Search in Spanish or English…',
      'glos.th1': 'English',
      'glos.th2': 'Español',
      'glos.th3': 'Definition / Definición',
      'glos.th4': 'Category',
      'glos.noResult': 'No terms found.',

      /* SOSTENIBILIDAD */
      'sost.label': 'Section 04',
      'sost.title': 'Technology, Sustainability<br/>& Circular Economy',
      'sost.c1.title': 'Waste Reduction',
      'sost.c1.text': 'The fashion industry generates 10% of global carbon emissions. Circular design prioritizes materials that return to the production cycle without becoming waste.',
      'sost.c2.title': 'Reuse',
      'sost.c2.text': 'Upcycling transforms discarded garments into higher-value new pieces. In technology this equates to reusing code components, open-source libraries and modular architectures.',
      'sost.c3.title': 'Resource Optimization',
      'sost.c3.text': 'Clean code, optimized images and lower server energy consumption reduce the digital carbon footprint. Efficient design minimizes waste.',
      'sost.c4.title': 'Sustainable Production',
      'sost.c4.text': 'Natural materials and eco-friendly dyes are the equivalent of clean, documented code that produces quality software with less maintenance effort.',
      'sost.c5.title': 'Positive Environmental Impact',
      'sost.c5.text': 'Beyond reducing harm, the goal is to regenerate: design products that actively improve the environment where they exist, both in fashion and technology.',
      'sost.c6.title': 'Organizational Responsibility',
      'sost.c6.text': 'Companies must take responsibility for their value chain. In technology this includes data transparency, privacy and ethics in software development.',
      'sost.commit.title': 'Our commitment as future developers',
      'sost.commit.text': 'After Moda ECCI, all four of us commit to applying circular economy principles in our professional practice: writing reusable code, documenting so others can build on our work, choosing low energy-impact technologies, designing accessible interfaces for everyone, and always thinking about the full life cycle of what we build.',
      'sost.tag1': '♻️ Reusable code',
      'sost.tag2': '📖 Always document',
      'sost.tag3': '♿ Accessible design',
      'sost.tag4': '🌱 Low digital impact',

      /* MODAL */
      'modal.title': 'About this project',
      'modal.p': "Academic website, by four students, as a FrontEnd module deliverable at SENA — Textile & Leather Manufacturing Center. All content comes from our direct participation in Sara Viloria's conference at Moda ECCI.",
      'modal.li1': 'HTML5 · CSS3 · Bootstrap · JavaScript',
      'modal.li2': 'Bilingual content (ES / EN)',
      'modal.li3': 'Pastel palette inspired by Pantone',
      'modal.close': 'Close',

      /* FOOTER */
      'footer.desc': 'Teamwork — Moda ECCI, SENA Textile & Leather Manufacturing Center.',
      'footer.nav': 'Navigation',
      'footer.nav1': 'Home',
      'footer.nav2': 'Our Experience',
      'footer.nav3': 'Glossary',
      'footer.nav4': 'Sustainability',
      'footer.tech': 'Technologies',
      'footer.copy': '© 2025 Moda ECCI — Teamwork, SENA Textile & Leather Manufacturing Center',
    }
  };

  /* ------ setLang: aplica el idioma a todos los elementos ------ */
  function setLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        el.innerHTML = i18n[lang][key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (i18n[lang] && i18n[lang][key] !== undefined) {
        el.placeholder = i18n[lang][key];
      }
    });
  }

  /* ------ REVEAL on scroll ------ */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));

  /* ------ ALERT dismiss ------ */
  document.querySelectorAll('.alert-close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.alert-moda').remove());
  });

  /* ------ GLOSSARY SEARCH ------ */
  const searchInput = document.getElementById('glossarySearch');
  const glossaryRows = document.querySelectorAll('#glossaryBody tr');
  const noResult = document.getElementById('noResult');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      let found = 0;
      glossaryRows.forEach(row => {
        const match = row.textContent.toLowerCase().includes(q);
        row.style.display = match ? '' : 'none';
        if (match) found++;
      });
      noResult.style.display = found === 0 ? 'block' : 'none';
    });
  }

  /* ------ LAZY-LOAD YouTube iframes ------ */
  document.querySelectorAll('iframe[data-src]').forEach(iframe => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        iframe.src = iframe.dataset.src;
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(iframe);
  });

  /* ------ COUNTER ANIMATION (stats) ------ */
  const counters = document.querySelectorAll('[data-count]');
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count);
      let current = 0;
      const step = Math.ceil(target / 40);
      const t = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current + (el.dataset.suffix || '');
        if (current >= target) clearInterval(t);
      }, 35);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObs.observe(c));

});