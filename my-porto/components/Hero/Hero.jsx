
const Hero = () => {
    return (
        <>
            <section class="section hero" aria-label="home">
                <div class="container">

                    <figure class="hero-banner">
                        <img src="/hero-banner.jpg" width="560" height="540" alt="Julia" class="w-100"
                            data-reveal="top" />

                        <img src="/hero-shape.svg" width="203" height="91" alt="250+ Projects Done" class="shape"
                            data-reveal="top" data-reveal-delay="0.25s" />
                    </figure>

                    <div class="hero-content">

                        <h1 class="h1 hero-title" data-reveal="top" data-reveal-delay="0.5s">
                            I'm User Interface Designer & Developer.
                        </h1>

                        <p class="section-text" data-reveal="top" data-reveal-delay="0.75s">
                            Hello! I'm Julia, a freelance user interface designer & developer based in London. I’m very passionate
                            about the work that I do.
                        </p>

                        <div class="btn-wrapper" data-reveal="top" data-reveal-delay="1s">
                            <a href="#" class="btn btn-primary">See My Works</a>

                            <a href="#" class="btn btn-secondary">Contact Me</a>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default Hero
