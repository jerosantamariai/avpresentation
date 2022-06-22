import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="col-lg-12">
            <section class="section1">
                <div class="section1-backgroud container">
                    <div class="d-block">
                        <h1 class="text-white fw-bold mb-4">Powerful Event Ticketing Software</h1>
                        <p class="text-white">Get your live events discovered, attended and remembered. With our software
                            solutions, audience growth strategies and client communities all working seamlessly together, we
                            help you make event magic. deserunt dolore rem facilis amet veniam nemo illum animi ea soluta
                            incidunt
                            voluptate ipsa! Fugiat!</p>
                    </div>
                    <div class="section1-form">
                        <h2>Take a free product tour</h2>
                        <label for="inputEmail" class="form-label fw-bold c-black">Email*</label>
                        <input type="email" id="inputEmail" class="form-control" aria-describedby="emailHelpBlock" />
                        <div class="fd-c mt-4 mb-5">
                            <button type="button" class="btn boton btn-demo mr-2">Primary</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section2">
                <h2 class="fw-bold text-center">section 2</h2>
                <p class="text-center c-gris">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt
                    iure fugit reprehenderit
                    harum inventore cum vel, illum soluta. Eaque quia commodi consectetur ut expedita, provident incidunt iste
                    mollitia quaerat.
                </p>
                <ul class="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                            type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Professional</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                            type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Unlimited</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                            type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Campus</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="grad-tab" data-bs-toggle="tab" data-bs-target="#grad-tab-pane"
                            type="button" role="tab" aria-controls="grad-tab-pane" aria-selected="false">Grad</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="growthsolutions-tab" data-bs-toggle="tab"
                            data-bs-target="#growthsolutions-tab-pane" type="button" role="tab"
                            aria-controls="growthsolutions-tab-pane" aria-selected="false">Growth Solutions</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                        tabindex="0">
                        <div class="d-flex">
                            <div class="section2-imagenes">
                                <img class="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img class="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-Professional-Slider-1.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg class="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div class="section2-text ms-5 ps-5">
                                <h2 class="mb-4">AudienceView Professional</h2>
                                <p class="c-gris">AudienceView Professional is the better way to manage live events. This
                                    all-in-one ticketing, marketing and fundraising platform solution is your go-to tool for
                                    simplifying your efforts while improving consumer relationships and engagement.</p>
                                <div class="d-flex align-items-center">
                                    <p class="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <div class="d-flex">
                            <div class="section2-imagenes">
                                <img class="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img class="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-Unlimited-Slider.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg class="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div class="section2-text ms-5 ps-5">
                                <h2 class="mb-4">AudienceView Unlimited</h2>
                                <p class="c-gris">AudienceView Unlimited puts the power in your hands. This fully configurable
                                    business solution with game-changing automation provides the valuable insights you need to
                                    make your live event organization more successful</p>
                                <div class="d-flex align-items-center">
                                    <p class="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                        <div class="d-flex">
                            <div class="section2-imagenes">
                                <img class="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img class="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-Unlimited-Slider.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg class="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div class="section2-text ms-5 ps-5">
                                <h2 class="mb-4">AudienceView Campus</h2>
                                <p class="c-gris">AudienceView Campus was built exclusively for the higher education market.
                                    Continually tested and enhanced by its network of active colleges and universities, it
                                    integrates seamlessly with your existing school authentication systems.</p>
                                <div class="d-flex align-items-center">
                                    <p class="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="grad-tab-pane" role="tabpanel" aria-labelledby="grad-tab" tabindex="0">
                        <div class="d-flex">
                            <div class="section2-imagenes">
                                <img class="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img class="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-Grad-Slider.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg class="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div class="section2-text ms-5 ps-5">
                                <h2 class="mb-4">AudienceView Grad</h2>
                                <p class="c-gris">Even if you’ve never had ticketing experience, AudienceView Grad, built
                                    exclusively for commencement event leaders, is the easy way to manage your ticketing needs.
                                    This full end-to-end ticketing solution will help you run your next commencement event
                                    smoothly.</p>
                                <div class="d-flex align-items-center">
                                    <p class="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="growthsolutions-tab-pane" role="tabpanel"
                        aria-labelledby="growthsolutions-tab" tabindex="0">
                        <div class="d-flex">
                            <div class="section2-imagenes">
                                <img class="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img class="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-ExtendedServices-Slider.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg class="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div class="section2-text ms-5 ps-5">
                                <h2 class="mb-4">Growth Solutions</h2>
                                <p class="c-gris">Audience growth solutions by AudienceView boosts your organizations ticket
                                    sales revenue, brand awareness, and overall reach. With millions of subscribers and
                                    followers from TheaterMania.com, WhatsOnStage.com and other consumer properties, our
                                    customers become your customers. You decide what you want to promote and we’ll take care of
                                    the rest.</p>
                                <div class="d-flex align-items-center">
                                    <p class="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <h2 class="c-black fw-bold text-center mb-0">Not sure which is right for you?</h2>
                    <div class="d-flex justify-content-center align-items-center">
                        <Link to="/underconstruction" class="btn boton btn-product">take our quiz</Link>
                        <img src="https://www.audienceview.com/wp-content/uploads/2021/10/Group-373.png" alt="" width="148"
                            height="" />
                    </div>
                </div>
                <hr />
            </section>
            <section class="section3 p-5">
                <h2 class="fw-bold text-center mb-5">Meet some of our biggest advocates</h2>
                <div class="container">
                    <div class="row">
                        <div class="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/SanFransiscoPlayhouse-logo.png"
                                width="212" height="47" alt="" />
                        </div>
                        <div class="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/GeffenPlayhouse_logo.png"
                                width="212" height="47" alt="" />
                        </div>
                        <div class="col-3">
                            <img class="special"
                                src="https://www.audienceview.com/wp-content/uploads/2021/10/Sonoma-state-logo.jpg" width="206"
                                height="91" alt="" />
                        </div>
                        <div class="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/ClientLogo-PlayhouseSquare.jpg"
                                width="212" height="47" alt="" />
                        </div>
                        <div class="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/university.logo_.small_.horizontal.blue_.jpg"
                                width="265" height="110" alt="" />
                        </div>
                        <div class="col-3">
                            <img class="special"
                                src="https://www.audienceview.com/wp-content/uploads/2021/10/AtlanticTheaterCompany_logo.png"
                                width="172" height="127" alt="" />
                        </div>
                        <div class="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/03/ClientLogo-Athenaeum.jpg"
                                width="116" height="99" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="section4 ">
                <div class="container">
                    <h2 class="fw-bold text-center mb-4">Our audience growth & development solutions</h2>
                    <p class="text-center c-gris mb-5">Audience growth solutions by AudienceView boosts your organizations
                        ticket
                        sales revenue, brand awareness, and overall reach. With millions of subscribers and followers from
                        TheaterMania.com, WhatsOnStage.com and other consumer properties, our customers become your customers.
                        You decide what you want to promote and we’ll take care of the rest.
                    </p>
                    <ul class="nav nav-tabs d-flex justify-content-between mb-5" id="myTabSection4" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="email-tab" data-bs-toggle="tab" data-bs-target="#email-tab-pane"
                                type="button" role="tab" aria-controls="email-tab-pane" aria-selected="true">Email
                                promotion</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="streaming-tab" data-bs-toggle="tab"
                                data-bs-target="#streaming-tab-pane" type="button" role="tab" aria-controls="streaming-tab-pane"
                                aria-selected="false">Streaming</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="digitalAdvertising-tab" data-bs-toggle="tab"
                                data-bs-target="#digitalAdvertising-tab-pane" type="button" role="tab"
                                aria-controls="digitalAdvertising-tab-pane" aria-selected="false">Digital advertising</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="automatedDistribution-tab" data-bs-toggle="tab"
                                data-bs-target="#automatedDistribution-tab-pane" type="button" role="tab"
                                aria-controls="automatedDistribution-tab-pane" aria-selected="false">Automated
                                distribution</button>
                        </li>
                    </ul>
                    <div class="tab-content pt-5" id="myTabContentSection4">
                        <div class="tab-pane fade show active" id="email-tab-pane" role="tabpanel" aria-labelledby="email-tab"
                            tabindex="0">
                            <div class="d-flex">
                                <div class="section2-text ms-5 ps-5">
                                    <h2 class="mb-4">Email promotion</h2>
                                    <p class="c-gris">With over 1,800,000 dedicated theater-goers opted into receiving our
                                        emails,
                                        your audience is an email send away. Reach local, regional, national, West End,
                                        Broadway,
                                        and Off-Broadway audiences while partnering with our team of experts to give you the
                                        best
                                        return on your investment.</p>
                                    <div class="d-flex align-items-center">
                                        <p class="c-black fw-bold mb-0">Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="section2-imagenes">
                                    <img class="img2"
                                        src="https://www.audienceview.com/wp-content/uploads/2021/10/ad-units-1490x875-1.png"
                                        height="240px" width="393px" alt="" />
                                    <svg />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="streaming-tab-pane" role="tabpanel" aria-labelledby="streaming-tab"
                            tabindex="0">
                            <div class="d-flex">
                                <div class="section2-text ms-5 ps-5">
                                    <h2 class="mb-4">Streaming</h2>
                                    <p class="c-gris">Your audience and patrons no longer have to live in your local community.
                                        With TheaterMania Streaming, you can reach a whole new national and international
                                        audience through our website, opted-in email subscribers, editorial content, and large
                                        social media followers.</p>
                                    <div class="d-flex align-items-center">
                                        <p class="c-black fw-bold mb-0">Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="section2-imagenes">
                                    <img class="img2"
                                        src="https://www.audienceview.com/wp-content/uploads/2021/10/TheaterMania_Streaming_Mockup.png"
                                        height="240px" width="393px" alt="" />
                                    <svg />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="digitalAdvertising-tab-pane" role="tabpanel"
                            aria-labelledby="digitalAdvertising-tab" tabindex="0">
                            <div class="d-flex">
                                <div class="section2-text ms-5 ps-5">
                                    <h2 class="mb-4">Digital advertising</h2>
                                    <p class="c-gris">Using our Campaign Manager tool, you can create your next ad campaign in
                                        minutes. Think of it like Facebook or Google Ad Manager. But instead of your ads
                                        reaching the wrong people, your ads are seen by theater ticket buyers and event goers
                                        who are ready to buy now. Choose your audience. Upload your creative. Start selling
                                        tickets. It’s easy with AudienceView Campaign Manager.</p>
                                    <div class="d-flex align-items-center">
                                        <p class="c-black fw-bold mb-0">Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="section2-imagenes">
                                    <img class="img2"
                                        src="https://www.audienceview.com/wp-content/uploads/2021/10/20210406_AudienceView_CampaignManager_Graphic-ReviewPerformance-1536x923.png"
                                        height="240px" width="393px" alt="" />
                                    <svg />
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="automatedDistribution-tab-pane" role="tabpanel"
                            aria-labelledby="automatedDistribution-tab" tabindex="0">
                            <div class="d-flex">
                                <div class="section2-text ms-5 ps-5">
                                    <h2 class="mb-4">Automated distribution</h2>
                                    <p class="c-gris">Our ticketing software clients can improve their marketing reach with the
                                        flip of a switch (it’s actually a toggle but you get the point). Whenever you create a
                                        new event or show, you can choose to automatically list and promote your shows to
                                        millions of passionate event goers. And if you need to make any changes, those changes
                                        get synced with the live listings on TheaterMania.com.</p>
                                    <div class="d-flex align-items-center">
                                        <p class="c-black fw-bold mb-0">Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="section2-imagenes">
                                    <img class="img2"
                                        src="https://www.audienceview.com/wp-content/uploads/2021/10/Web-browser-TheaterMania-1536x1009.png"
                                        height="240px" width="393px" alt="" />
                                    <svg />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section5 pb-2">
                <h2 class="text-white text-center pt-5 pb-2">People attending live events are changing</h2>
                <div class="d-flex align-items-center justify-content-center">
                    <p class="text-white fw-bold mb-0">View our latest insights</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </div>
            </section>

            <section class="section6 pt-5">
                <div class="container">
                    <h2 class="fw-bold text-center my-4">
                        The only ticketing software <br /> with audience growth built in
                    </h2>
                    <div class="section6-container">
                        <p class="text-center c-gris mb-5">
                            With millions of subscribers and followers from TheaterMania.com, WhatsOnStage.com and other
                            consumer properties, our customers become your customers.
                        </p>
                        <div class="d-flex align-items-center justify-content-between">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/TM-Horizontal-1.png" width="265"
                                height="37" alt="" />
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/WhatsOnStage_Logo.png" width="225"
                                height="50" alt="" />
                        </div>
                        <div class="d-flex align-items-center justify-content-center mt-5 mb-4">
                            <p class="c-black fw-bold mb-0">Learn more</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section7">
                <h2 class="text-center">Don't just take our word for it</h2>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <Link to="https://www.google.com" target="_blank">
                                <img src="https://picsum.photos/id/1001/5616/3744"
                                    class="d-block w-75 m-auto" width="1100" height="500" alt="..." />
                            </Link>
                        </div>
                        <div class="carousel-item">
                            <Link to="https://www.google.com" target="_blank">
                                <img src="https://picsum.photos/id/10/2500/1668"
                                    class="d-block w-75 m-auto" width="1100" height="500" alt="..." />
                            </Link>
                        </div>
                        <div class="carousel-item">
                            <img src="https://picsum.photos/id/1005/5760/3840" class="d-block w-75 m-auto" width="1100" height="500"
                                alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;