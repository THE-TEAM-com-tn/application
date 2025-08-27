
import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Calendar() {

    useEffect(() => {
   // Animate Left
    ScrollReveal().reveal(".animate_left", {
      duration: 2000,
      origin: "left",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Animate Right
    ScrollReveal().reveal(".animate_right", {
      duration: 2000,
      origin: "right",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Animate Top
    ScrollReveal().reveal(".animate_top", {
      duration: 2000,
      origin: "top",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Animate Bottom
    ScrollReveal().reveal(".animate_bottom", {
      duration: 2000,
      origin: "bottom",
      distance: "50px",
      easing: "ease",
      reset: false,
    });

    // Fade In (sans mouvement, juste opacité)
    ScrollReveal().reveal(".animate_fade", {
      duration: 2000,
      opacity: 0,
      distance: "0px",
      easing: "ease",
      reset: false,
    });

    // Zoom In
    ScrollReveal().reveal(".animate_zoom", {
      duration: 2000,
      scale: 0.85,
      easing: "ease",
      reset: false,
    });
  }, []);
    const [loading, setLoading] = useState(false);
return (
    <main >
      
      
     <section className="i pg rm ji gp uq">
                {/* Bg Shapes */}
                <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
                <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
                <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />
                <img src="images/shape-12.svg" alt="Shape" className="h p s" />
                <img src="images/shape-13.svg" alt="Shape" className="h r q" />
                <img src="images/circle55.svg" alt="Shape" className="h r q" />

                {/* Section Title Start */}
                <div>
                    <div className="animate_top bb ze rj ki xn vq">
                        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
                            Calendar Page
                        </h2>
                    </div>
                </div>
            </section>
      
    </main>
  );
}