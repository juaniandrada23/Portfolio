import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


const useAnimateOnViewBefore = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true, // Esto asegura que la animación solo se dispara una vez
      rootMargin: "150px 0px", // Ajuste para que la animación comience 20 píxeles antes
    });
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.set("hidden");
      }
    }, [controls, inView]);
  
    return { ref, controls };
  };
  

export default useAnimateOnViewBefore

