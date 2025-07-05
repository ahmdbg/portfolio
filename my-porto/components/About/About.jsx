import React from 'react'

const About = () => {
    return (
        <>
            <section class="section about" aria-label="about">
                <div class="container">

                    <div class="wrapper">

                        <div data-reveal="left">
                            <h2 class="h2 section-title">What I Do?</h2>

                            <p class="section-text">
                                Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis
                                risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
                                magna, vel scelerisque nisl.
                            </p>
                        </div>

                        <ul class="progress-list" data-reveal="right">

                            <li class="progress-item">

                                <div class="label-wrapper">
                                    <p>Web Design</p>

                                    <span class="span">100%</span>
                                </div>

                                <div class="progress">
                                    <div class="progress-fill" style="background-color: #c7b1dd"></div>
                                </div>

                            </li>

                            <li class="progress-item">

                                <div class="label-wrapper">
                                    <p>Mobile Design</p>

                                    <span class="span">80%</span>
                                </div>

                                <div class="progress">
                                    <div class="progress-fill" style="background-color: #8caeec"></div>
                                </div>

                            </li>

                            <li class="progress-item">

                                <div class="label-wrapper">
                                    <p>Development</p>

                                    <span class="span">85%</span>
                                </div>

                                <div class="progress">
                                    <div class="progress-fill" style="background-color: #b0d4c1"></div>
                                </div>

                            </li>

                            <li class="progress-item">

                                <div class="label-wrapper">
                                    <p>SEO</p>

                                    <span class="span">90%</span>
                                </div>

                                <div class="progress">
                                    <div class="progress-fill" style="background-color: #e3a6b6"></div>
                                </div>

                            </li>

                        </ul>

                    </div>

                    <ul class="grid-list">

                        <li data-reveal="bottom">
                            <div class="about-card">

                                <div class="card-icon">
                                    <img src="assets/images/icon-1.svg" width="52" height="52" loading="lazy" alt="web design icon" />
                                </div>

                                <h3 class="h4 card-title">Web Design</h3>

                                <p class="card-text">
                                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras
                                    justo cum sociis natoque magnis.
                                </p>

                            </div>
                        </li>

                        <li data-reveal="bottom" data-reveal-delay="0.25s">
                            <div class="about-card">

                                <div class="card-icon">
                                    <img src="assets/images/icon-2.svg" width="52" height="52" loading="lazy" alt="mobile design icon" />
                                </div>

                                <h3 class="h4 card-title">Mobile Design</h3>

                                <p class="card-text">
                                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras
                                    justo cum sociis natoque magnis.
                                </p>

                            </div>
                        </li>

                        <li data-reveal="bottom" data-reveal-delay="0.5s">
                            <div class="about-card">

                                <div class="card-icon">
                                    <img src="assets/images/icon-3.svg" width="52" height="52" loading="lazy"
                                        alt="web development icon" />
                                </div>

                                <h3 class="h4 card-title">Development</h3>

                                <p class="card-text">
                                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras
                                    justo cum sociis natoque magnis.
                                </p>

                            </div>
                        </li>

                        <li data-reveal="bottom" data-reveal-delay="0.75s">
                            <div class="about-card">

                                <div class="card-icon">
                                    <img src="assets/images/icon-4.svg" width="52" height="52" loading="lazy" alt="web seo icon" />
                                </div>

                                <h3 class="h4 card-title">SEO</h3>

                                <p class="card-text">
                                    Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras
                                    justo cum sociis natoque magnis.
                                </p>

                            </div>
                        </li>

                    </ul>

                </div>
            </section>

        </>
    )
}

export default About
