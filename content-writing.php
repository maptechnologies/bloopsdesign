<?php include('includes/header.php'); ?>

<section class="banner-sec about-banner-sec content-banner-sec">
    <div class="header-slider banner-txt-box">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="anim-banner-txt" data-aos="fade-right" data-aos-duration="2000">
                        <h6>Offering Engaging</h6>
                        <h5>Marketing Content For Your Brand</h5>
                        <p>Hire a team of content writers that have successfully completed over 125,000 high- quality,
                            affordable, and unique white label content writing projects.</p>
                        <div class="form-banner">
                            <form class="form_submission" id="regForm" action="process_form.php" method="POST">
                                <!-- Custom Fields -->
                                <div class="row">
                                    <div class="col-md-12">
                                        <ul>
                                            <li><input type="text" name="name" class="banner-field" placeholder="Name" required></li>
                                            <li><input type="tel" name="phone" maxlength="10" id="phone2" class="phone-country banner-field" placeholder="Phone Number" required></li>
                                            <li><input type="email" name="email" class="banner-field" placeholder="Email Address" required></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-12">
                                        <input class="submit" name="submit" type="submit" value="Submit Now" required />
                                        <div class="error mt-3 alert alert-danger text-left mb-0" style="display: none"></div>
                                        <div class="success mt-3 alert alert-success text-left mb-0" style="display: none"></div>
                                        <div class="loader" style="display: none">
                                            <img alt="loader" src="loader.gif">
                                        </div>
                                        <a href="javascript:void(0);window.Tawk_API.toggle();" class="btn btn-live chatt"><i class='fas fa-comment'></i>Live Chat</a>
                                    </div>
                                </div>
                                <script>
                                    // form_validation.js
                                    document.getElementById('regForm').addEventListener('submit', function(event) {
                                        var phoneNumber = document.getElementById('phone2').value;
                                        var phonePattern = /^\d{10}$/;

                                        if (!phonePattern.test(phoneNumber)) {
                                            alert('Please enter a valid 10-digit phone number.');
                                            event.preventDefault(); // Prevent form submission
                                        }
                                    });
                                </script>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="anim-img-box">
                        <img src="images/webp/content-writing-banner-img.webp" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="services-sec content-services-sec">
    <div class="wrapv">
        <div class="vertical tlt">
            Design
        </div>
    </div>
    <div class="wrapv-two">
        <div class="vertical-two tlt-2">
            Creative.
        </div>
    </div>
    <div class="column_lines">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="services-head-box" data-aos="fade-down" data-aos-duration="2000">
                    <h4>Get Professionally Written Content By Us</h4>
                    <p>A piece well written by a writer elicits a feeling in a reader and that feeling is what we at
                        Websites Designs Agency consider as our target. With our strong marketing and communicating
                        skills, we can write impactful content for you. Our highly satisfied customer base stands
                        testament to our claim that we have always proven true to our word with our promises of high
                        quality products. We offer white-label unique content for you that is tested for both,
                        plagiarism and errors. Our high quality content increases your site engagement as well as
                        business. Our writers have earned awards and recommendations for the amazing work that they do.
                    </p>
                    <a href="javascript:void(0);" class="popupBox btn btn-submit">lets get started</a>
                </div>
            </div>
        </div>
    </div>
    <div class="content-serv-sec">
        <div class="container-fluid">
            <div class="row content-serv-sec-responsive-slider">
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/content-serv-img-1.png" alt="" class="img-fluid" />
                        <h6>Website Content Writing</h6>
                        <p>When we talk about websites, the design that your website has is important as the content
                            that your website houses. Our expert team of writers, has the ability to produce the best
                            quality content for whatever services that you are providing. We produce exceptional content
                            that is free from plagiarism and makes good use of keywords that are paying well in the
                            related field.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/content-serv-img-2.png" alt="" class="img-fluid" />
                        <h6>Creative Content Writing</h6>
                        <p>Our team for creative copywriting is well adept with the techniques to use storytelling to
                            make web content more interesting that can otherwise sound monotonous. Creativity is about
                            adding your own touch to the ubiquitous. The content that our team prepares for your gives a
                            voice to your business.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/content-serv-img-3.png" alt="" class="img-fluid" />
                        <h6>Blog Writing</h6>
                        <p>Blogging is the latest method of spreading news. It is one of the most powerful methods to
                            make some information viral or the talk of the town. It is considered as a high value method
                            of marketing and gaining popularity to your online as well as offline outlets. Our expert
                            creative writers are pros at blog writing.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/content-serv-img-4.png" alt="" class="img-fluid" />
                        <h6>Article Writing</h6>
                        <p>If you get below par sub quality content for your brand, you would be giving your customers
                            the wrong impression about your business having content that just fails to make the
                            impression. You need to take the opportunity your client is giving you as he reads your
                            content and come up with stuff that glues them to their spot.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="counter-sec">
    <div class="container-fluid">
        <div class="counter-main">
            <div class="counter-head-box">
                <h4>hitting <br /> new records</h4>
            </div>
            <div class="counter-main-box counter-responsive-slider" id="counter">
                <div class="counter-box">
                    <div class="count">
                        <h6 class="counter-value" data-count="500">0</h6>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <p>happy customers</p>
                </div>
                <div class="counter-box">
                    <div class="count">
                        <h6 class="counter-value" data-count="180">0</h6>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <p>experienced designers</p>
                </div>
                <div class="counter-box">
                    <div class="count">
                        <h6 class="counter-value" data-count="10">0</h6>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <p>years in the industry</p>
                </div>
                <div class="counter-box">
                    <div class="count">
                        <h6 class="counter-value" data-count="400">0</h6>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <p>website designed</p>
                </div>
                <div class="counter-box">
                    <div class="count">
                        <h6 class="counter-value" data-count="600">0</h6>
                        <i class="fa fa-plus" aria-hidden="true"></i>
                    </div>
                    <p>logo designed</p>
                </div>
            </div>
            <div class="btn-portfolio-box">
                <a class="btn popupBox btn-portfolio">Get Started Now</a>
            </div>
        </div>
    </div>
</section>

<section class="pricing-main-sec">
    <div class="container">
        <div class="price-head-box" data-aos="fade-down" data-aos-duration="3000">
            <h4>Most Affordable Packages</h4>
            <p>We are well aware of the competition. That is the reason why we have a fair pricing model. <br />We
                ensure quality over quantity on each order.</p>
        </div>
        <div class="">
            <div class="row packages-responsive-slider">
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$319</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Web Content
                                    Basic Package</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$100</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>1 Page Professional Copywriting Service</li>
                                        <li>Creative &amp; Well-Written by 1 Professional Copywriter</li>
                                        <li>Industry Specified Expert Copywriter</li>
                                        <li>300 Words Per Page</li>
                                        <li>5 Revisions</li>
                                        <li>3 to 4 Business Days Rotation</li>
                                        <li>According To Your Exact Requirements</li>
                                        <li>Proofing by our in-house experts</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Original Content</li>
                                        <li>100% Approval Assurance</li>
                                        <li>30 Days Refund Warranty</li>
                                        <li>Unlimited Revisions</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--<div class="view-detail-box">-->
                        <!--                   <a href="pricing_view_details.php" class="btn view-det">View Detail</a>-->
                        <!--               </div>-->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);window.Tawk_API.toggle();" class="popupBox btn btn-order startchat">
                                order now
                            </a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();">
                                <span class="cht_clr"><small>Click here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$1119</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Web Content
                                    Starter Package</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$200</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>5 Pages Professional Copywriting Service</li>
                                        <li>Creative &amp; Well-Written by 2 Professional Copywriters</li>
                                        <li>Industry Specified Expert Copywriters</li>
                                        <li>300 Words Per Page</li>
                                        <li>10 Revisions</li>
                                        <li>5 to 7 Business Days Rotation</li>
                                        <li>According To Your Exact Requirements</li>
                                        <li>Proofing by our in-house experts</li>
                                        <li>FREE Meta details – With each custom page, we will provide a catchy title,
                                            keywords and page description.</li>
                                        <li>SEO friendly – Your keyword(s) will be placed in the title, the first &amp;
                                            last paragraphs and throughout the web copy in a natural and fluent manner
                                        </li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Original Content</li>
                                        <li>100% Approval Assurance</li>
                                        <li>30 Days Refund Warranty</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box">
                                        <a href="pricing_view_details.php" class="btn view-det">View Detail</a>
                                    </div> -->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                                order now
                            </a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();">
                                <span class="cht_clr"><small>Click here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$2119</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Web Content
                                    Professional Package</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$380</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>10 Pages Professional Copywriting Service</li>
                                        <li>Creative &amp; Well-Written by 2 Professional Copywriters</li>
                                        <li>Industry Specified Expert Copywriters</li>
                                        <li>300 Words Per Page</li>
                                        <li>Unlimited Revisions</li>
                                        <li>7 to 10 Business Days Rotation</li>
                                        <li>According To Your Exact Requirements</li>
                                        <li>Proofing by our in-house experts</li>
                                        <li>FREE Meta details – With each custom page, we will provide a catchy title,
                                            keywords and page description.</li>
                                        <li>SEO friendly – Your keyword(s) will be placed in the title, the first &amp;
                                            last paragraphs and throughout the web copy in a natural and fluent manner
                                        </li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Original Content</li>
                                        <li>100% Approval Assurance</li>
                                        <li>30 Days Refund Warranty</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box">
                                        <a href="pricing_view_details3183?package=instant%20start-up" class="btn view-det">View Detail</a>
                                    </div> -->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);" class="popupBox btn btn-order startchat">order now</a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();">
                                <span class="cht_clr"><small>Click here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$4619</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Web Content
                                    Identity Package</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$620</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>Up to 20 Pages Professional Copywriting Service</li>
                                        <li>Creative &amp; Well-Written by 3 Professional Copywriters</li>
                                        <li>Industry Specified Expert Copywriters</li>
                                        <li>300 Words Per Page</li>
                                        <li>Unlimited Revisions</li>
                                        <li>7 to 10 Business Days Rotation</li>
                                        <li>According To Your Exact Requirements</li>
                                        <li>Proofing by our in-house experts</li>
                                        <li>FREE Meta details – With each custom page, we will provide a catchy title,
                                            keywords and page description.</li>
                                        <li>SEO friendly – Your keyword(s) will be placed in the title, the first &amp;
                                            last paragraphs and throughout the web copy in a natural and fluent manner
                                        </li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Original Content</li>
                                        <li>100% Approval Assurance</li>
                                        <li>30 Days Refund Warranty</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_details368d?package=Instant%20Gold" class="btn view-det">View Detail</a> </div> -->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                                order now
                            </a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();">
                                <span class="cht_clr"><small>Click here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$369</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Article Writing
                                    Package</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$780</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul class="listpacks">
                                        <li>1 Creative, Fresh &amp; Well-Written Article</li>
                                        <li>By 1 Professional Copywriter</li>
                                        <li>Industry Specified Expert Copywriter</li>
                                        <li>400 Words Per Page</li>
                                        <li>3 to 5 Business Days Rotation</li>
                                        <li>5 Revisions</li>
                                        <li>According To Your Exact Requirements</li>
                                        <li>Written on Your Specified Topic/Keyword</li>
                                        <li>Proofing by our in-house experts</li>
                                        <li>Free Submission on any article marketing directories /blog (If required)
                                        </li>
                                        <li>SEO friendly – Your keyword(s) will be placed in the title, the first &amp;
                                            last paragraphs and throughout the web copy in a natural and fluent manner
                                        </li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Original Content</li>
                                        <li>100% Approval Assurance</li>
                                        <li>30 Days Refund Warranty</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box">
                                        <a href="pricing_view_details70cb?package=Instant%20Platinum" class="btn view-det">View Detail</a>
                                    </div> -->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                                order now
                            </a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();">
                                <span class="cht_clr"><small>Click here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$319</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Blog Writing
                                    Package</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$1020</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>1 Creative, Fresh &amp; Well-Written Article</li>
                                        <li>By 1 Professional Copywriter</li>
                                        <li>Industry Specified Expert Copywriter</li>
                                        <li>400 Words Per Page</li>
                                        <li>3 to 5 Business Days Rotation</li>
                                        <li>5 Revisions</li>
                                        <li>According To Your Exact Requirements</li>
                                        <li>Written on Your Specified Topic/Keyword</li>
                                        <li>Proofing by our in-house experts</li>
                                        <li>Free Submission on any article marketing directories /blog (If required)
                                        </li>
                                        <li>SEO friendly – Your keyword(s) will be placed in the title, the first &amp;
                                            last paragraphs and throughout the web copy in a natural and fluent manner
                                        </li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Original Content</li>
                                        <li>100% Approval Assurance</li>
                                        <li>30 Days Refund Warranty</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box">
                                        <a href="pricing_view_details9bb4?package=Basic%20Illustrative" class="btn view-det">View Detail</a>
                                    </div> -->
                        <div class="bottom-contact"> <a href="javascript:void(0);" class="popupBox btn btn-order startchat">order now</a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();">
                                <span class="cht_clr">
                                    <small>Click here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <a href="pricing.php" class="btn btn-view-pack">view all packages</a>
    </div>
</section>

<section class="content-slider-sec">
    <div class="column_lines">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
    <div class="container">
        <div class="service-slider">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <div class="serv-main-box anim-serv-box">
                        <img src="images/webp/content-slider-img-1.webp" alt="" class="img-fluid" />
                        <h5>Improve your Rankings</h5>
                        <p>Hiring a content writing service is the ability to maike sure that your website gets overall
                            rankings. By adding the valuable content on consisten basis, you should be able to attract
                            both search engines and visitors. </p>
                    </div>
                </div>
                <div class="item">
                    <div class="serv-main-box anim-serv-box">
                        <img src="images/webp/content-slider-img-2.webp" alt="" class="img-fluid" />
                        <h5>Keyword Integration</h5>
                        <p>Hiring a reliable content writing service provider allows to get a content written with
                            keyword integration that can place your website at the top of search engines. Brands should
                            invest in high quality content to get recognized by search engines. </p>
                    </div>
                </div>
                <div class="item">
                    <div class="serv-main-box anim-serv-box">
                        <img src="images/webp/content-slider-img-3.webp" alt="" class="img-fluid" />
                        <h5>Get Content from Experts</h5>
                        <p>We help you get the content from experts to get the things written by those who have
                            extensive experience. We ensure that you get your content on time, to get you the highest
                            content possible.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="serv-main-box anim-serv-box">
                        <img src="images/webp/content-slider-img-1.webp" alt="" class="img-fluid" />
                        <h5>Attractive Website for the Targeted Audiences</h5>
                        <p>Driving more traffic to the website can lead to successful online business. We write website
                            content that keeps the visitors hooked on our website. Content writing services can help in
                            making website more convincing to the reader.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="video-anim-process-sec">
    <div class="column_lines">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
    <div class="v-ani-sec content-anim-sec">
        <div class="container">
            <div class="v-anim-head">
                <h4>How It Works</h4>
            </div>
            <div class="row video-anim-process-responsive-slider">
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box">
                        <h6>Order Requirements</h6>
                        <p>Let us know about the content requirements quantity of pages and place your order. Give us
                            detail about what kind of content you'd want us to create in limited time frame.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box anim-2">
                        <h6>Expert Writing</h6>
                        <p>Our writing team will develop original and high quality content for you. We will write
                            compelling copy that is conversion focused and optimize it for SEO.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box anim-3">
                        <h6>Approval</h6>
                        <p>The last step is reviewing all the content we have created for you. We offer unlimited
                            revisions at no additional cost to ensure that is ideal for you.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="second-contact-sec">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-12">
                <div class="second-contact-head">
                    <h4>Are You Ready To <br />Place Your Order?</h4>
                </div>
            </div>
            <div class="col-lg-3 col-md-12">
                <a href="tel:+1 (647) 699-1240" class="btn-tel">
                    <img src="images/webp/second-comtact-img-1.webp" alt="" class="img-fluid" />
                    <div class="second-con-box">
                        <h6>call us at</h6>
                        <p>+1 (647) 699-1240</p>
                    </div>
                </a>
            </div>
            <div class="col-lg-3 col-md-12">
                <a href="javascript:void(0);window.Tawk_API.toggle();" class="btn btn-start chatt">start live
                    chat</a>
            </div>
        </div>
    </div>
</section>
<section class="testimonial-sec">
    <div class="container">
        <div class="test-head">
            <h4>Testimonials</h4>
            <p>Our Happy Clients</p>
        </div>
        <div class="testimonial-slider">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-1.webp" alt="" class="img-fluid" />-->
                        <h5>Cristina Frasca</h5>
                        <h6>Graphic Design</h6>
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“Very helpful, amazing service very happy”</p>
                    </div>
                </div>
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-2.webp" alt="" class="img-fluid" />-->
                        <h5>Tammy rubin</h5>
                        <h6>Web Design</h6>
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“Kevin was very patient, good at explaining the work to be done and how. well done Kevin from
                            Websites Design Agency!”</p>
                    </div>
                </div>
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-3.webp" alt="" class="img-fluid" />-->
                        <h5>Zack Bragg</h5>
                        <h6>Graphic Design</h6>
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“Great team and great ethics and Inspiration they are”</p>
                    </div>
                </div>

                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-3.webp" alt="" class="img-fluid" />-->
                        <h5>Braden Thompson</h5>
                        <!--<h6>Graphic Design</h6>-->
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“Amazing to work with, fast responses and very high quality work!”</p>
                    </div>
                </div>
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-3.webp" alt="" class="img-fluid" />-->
                        <h5>Esther</h5>
                        <h6>Web Design</h6>
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“Very compelling and looked for a solution to work within my budget, Kevin spent a lot of
                            time explaining how everything worked in detail and was very fair and reasonable with
                            pricing.”</p>
                    </div>
                </div>
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-3.webp" alt="" class="img-fluid" />-->
                        <h5>Peggy Northcott</h5>
                        <h6>Graphic Design</h6>
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><i class="fa fa-star "></i></li>-->
                            <!-- <li><i class="fa fa-star "></i></li>-->
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“They were very prompt to reply. They listened to what I needed and had reasonably priced
                            packages to choose from. They had a quick turn around time and we’re professional to deal
                            with. The line connection they used was very broken and caused multiple dropped calls which
                            remote communication through email than I would have preferred.”</p>
                    </div>
                </div>
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-3.webp" alt="" class="img-fluid" />-->
                        <h5>Vic Owens</h5>
                        <!--<h6>Graphic Design</h6>-->
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“Excellent job creating our logo for sports major league. They listened to what we wanted and
                            gave us our logo in all the formats that we needed. Their pricing is more than reasonable
                            for the work that they did for us. We would highly recommend Websites Design Agency to
                            others. Special thanks to Karen for her artwork on this project.”</p>
                    </div>
                </div>
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-3.webp" alt="" class="img-fluid" />-->
                        <h5>Sean J Harrison</h5>
                        <!--<h6>Graphic Design</h6>-->
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“It was a great experience working with Websites Design Agency. Their team developed the
                            website for our brand on very short notice. The refresh rate of our website is way faster
                            than before. Overall the whole website performance is great now. Thanks”</p>
                    </div>
                </div>
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-3.webp" alt="" class="img-fluid" />-->
                        <h5>Top Quality Motors</h5>
                        <!--<h6>Graphic Design</h6>-->
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“Excellent job creating our logo and website. They listened to what we wanted and gave us our
                            logo in all the formats that we needed. Their pricing is more than reasonable for the work
                            that they did for us. We would highly recommend to others. Special thanks to Veronica and
                            team for her artwork on this project.”</p>
                    </div>
                </div>
                <div class="item">
                    <div class="test-profile-box">
                        <!--<img src="images/webp/test-profile-img-3.webp" alt="" class="img-fluid" />-->
                        <h5>Kandra West-Pettigrew</h5>
                        <!--<h6>Graphic Design</h6>-->
                        <ul>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <li><i class="fa fa-star "></i></li>
                            <!--<li><span>5 stars</span></li>-->
                        </ul>
                        <p>“Experience was very engaging, prompt replies, affordable pricing with unlimited edits.
                            Process took a bit longer than expected, but the last few edits after initial approval was
                            met with cooperation. Would recommend for sure! Thank you Karen/Alex and design team!”</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include('includes/footer.php'); ?>