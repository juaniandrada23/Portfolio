// Función para crear variantes de animación
const createVariants = (hiddenProps, visibleProps) => ({
    // Estado "hidden" con las propiedades recibidas
    hidden: hiddenProps,
    // Estado "visible" con las propiedades recibidas
    visible: {
      // Propiedades visibles recibidas
      ...visibleProps,
      // Definición de la transición
      transition: {
        // Duración de la transición en segundos
        duration: 1.2,
        // Curva de aceleración para la transición
        ease: [0.6, -0.05, 0.01, 0.99],
        // Propiedades de la animación de escala usando un resorte
        scale: {
          type: "spring",
          stiffness: 100,
          damping: 10,
        },
        // Propiedades de la animación de rotación usando un resorte
        rotate: {
          type: "spring",
          stiffness: 50,
          damping: 10,
        },
        // Sobrescribe las propiedades de transición con las recibidas (si existen)
        ...visibleProps.transition,
      },
    },
  });
  
  // Exporta un objeto de variantes llamado "variants"
  export const variants = createVariants(
    // Propiedades del estado "hidden" para la primera variante
    {
      opacity: 0, // Opacidad inicial (invisible)
      y: 100,     // Desplazamiento vertical inicial (100px hacia abajo)
      scale: 0.8, // Escala inicial (80% del tamaño original)
      rotate: 15, // Rotación inicial (15 grados)
    },
    // Propiedades del estado "visible" para la primera variante
    {
      opacity: 1, // Opacidad final (visible)
      y: 0,       // Desplazamiento vertical final (posición original)
      scale: 1,   // Escala final (100% del tamaño original)
      rotate: 0,  // Rotación final (sin rotación)
    }
  );
  
  // Exporta un objeto de variantes llamado "variants2"
  export const variants2 = createVariants(
    // Propiedades del estado "hidden" para la segunda variante
    {
      opacity: 0,        // Opacidad inicial (invisible)
      y: 100,            // Desplazamiento vertical inicial (100px hacia abajo)
      scale: 0.8,        // Escala inicial (80% del tamaño original)
      rotate: -9,        // Rotación inicial (-9 grados)
      filter: "blur(5px)", // Efecto de desenfoque inicial (5px)
    },
    // Propiedades del estado "visible" para la segunda variante
    {
      opacity: 1,         // Opacidad final (visible)
      y: 0,               // Desplazamiento vertical final (posición original)
      scale: 1,           // Escala final (100% del tamaño original)
      rotate: 0,          // Rotación final (sin rotación)
      filter: "blur(0px)", // Efecto de desenfoque final (sin desenfoque)
      transition: {
        // Duración de la transición en segundos
        duration: 0.7,
        // Curva de aceleración para la transición
        ease: [0.42, 0, 0.58, 1],
        // Propiedades de la animación de escala usando un resorte
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
      },
    }
  );

  export const variants3 = createVariants(
    // Propiedades del estado "hidden" para la nueva variante
    {
      opacity: 0,             // Opacidad inicial (invisible)
      x: -300,                // Desplazamiento horizontal inicial (100px a la izquierda)
      scale: 0.1,             // Escala inicial (80% del tamaño original)
      rotate: 0,              // Sin rotación inicial
    },
    // Propiedades del estado "visible" para la nueva variante
    {
      opacity: 1,             // Opacidad final (visible)
      x: 0,                   // Desplazamiento horizontal final (posición original)
      scale: 1,               // Escala final (100% del tamaño original)
      rotate: 0,              // Sin rotación final
      transition: {
        duration: 1.2,           // Duración de la transición en segundos
        ease: [0.42, 0, 0.58, 1], // Curva de aceleración para la transición
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 20,
        },
        backgroundColor: {
          duration: 0.5,
          ease: "easeInOut",    // Curva de aceleración para el cambio de color
        },
      },
    }
  );
  