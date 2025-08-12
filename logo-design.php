<?php include('includes/header.php'); ?>
<section class="banner-sec about-banner-sec logo-banner-sec">
    <div class="header-slider banner-txt-box">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="anim-banner-txt" data-aos="fade-right" data-aos-duration="2000">
                        <h6>Offering Engaging</h6>
                        <h5>Logo Design <br /> For Your Brand</h5>
                        <p>We give you the chance to work with professional designers for the creation of logo
                            designs that are unique and attractive. Discuss logo design for your project with us to
                            take your business to new heights.</p>
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
                              <a href=https://tawk.to/chat/62bc56327b967b1179971f6b/1g6nr1ebt class="btn btn-live chatt"><i class='fas fa-comment'></i>Live Chat</a>
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
                        <img src="images/webp/logo-banner-img.webp" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="services-sec logo-services-sec logo-page-sec">
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
                    <h4>Logos We Create</h4>
                    <p>Websites Designs Agency takes pride in its content clientele that returns to us for further
                        services time and again. It is a design agency packed with not only skills and experience,
                        but also passion, energy and dedication towards its services. It is not only some logos that
                        we design but tremendous brand identities that we erect in our workplace.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="content-serv-sec branding-content-serv">
        <div class="container-fluid">
            <div class="branding-content-serv-slider">
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="content-serv-box logo-content-box" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="images/webp/logo-serv-img-1.png" alt="" class="img-fluid" />
                            <h6>Abstract Mark</h6>
                            <p>Abstract logos are a popular type of logo design for small businesses to large
                                brands. abstract logos if done well are often simple in nature, making them perfect
                                for clean and memorable logos.</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content-serv-box logo-content-box" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="images/webp/logo-serv-img-2.png" alt="" class="img-fluid" />
                            <h6>Letter Based Logos</h6>
                            <p>Our templates for emblem logos are adequately professional as well as graphically
                                illustrative. with our years on experience in the industry, we can draft the perfect
                                logo for you in no more than 50 minutes.</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content-serv-box logo-content-box" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="images/webp/logo-serv-img-3.png" alt="" class="img-fluid" />
                            <h6>Emblem Logos</h6>
                            <p>This logo range relies on typography rather than much iconography to get the message
                                across. these logos make use of letters to be creative. graphical techniques are
                                used to illustrate the letters in a better way.</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content-serv-box logo-content-box" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="images/webp/logo-serv-img-4.png" alt="" class="img-fluid" />
                            <h6>Wordmark Mark</h6>
                            <p>Wordmark logo designs use bold typography to directly get the message across using
                                the corporation or brand name. this type of logo designing requires good
                                understanding of fonts and custom formatting for text.</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content-serv-box logo-content-box" data-aos="zoom-in" data-aos-duration="2000">
                            <img src="images/webp/logo-serv-img-5.png" alt="" class="img-fluid" />
                            <h6>NFT Design</h6>
                            <p>NFT’s (non-fungible token) are a unique immutable marker that can’t be copied,
                                changed or disputed. An Nft can be any form of digital art, and can be sold as a
                                limited edition or part of a collection.</p>
                        </div>
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
                            <h2>$49</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Basic Logo</h3>
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
                                        <li>3 Custom Logo Design Concepts</li>
                                        <li>1 Dedicated Designer</li>
                                        <li>4 Revisions</li>
                                        <li>48 to 72 hours TAT</li>
                                        <li>100% Unique Design Guarantee</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!--<div class="view-detail-box">-->
                        <!--                   <a href="pricing_view_details.php" class="btn view-det">View Detail</a>-->
                        <!--               </div>-->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);"
                                class="popupBox btn btn-order startchat">
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
                            <h2>$129 </h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Start Up Logo</h3>
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
                                        <li>5 Custom Logo Design Concepts</li>
                                        <li>By 2 Designers</li>
                                        <li>UNLIMITED Revisions</li>
                                        <li>48 to 72 hours TAT</li>
                                        <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                        <li>Money Back Guarantee *</li>
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
                            <h2>$199</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Professional Logo</h3>
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
                                        <li>UNLIMITED Logo Design Concepts</li>
                                        <li>By 4 Designers</li>
                                        <li>UNLIMITED Revisions</li>
                                        <li>Stationary Design (Business Card, Letterhead, Envelope)</li>
                                        <li>FREE MS Word Letterhead</li>
                                        <li>48 to 72 hours TAT</li>
                                        <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                        <li>Money Back Guarantee *</li>
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
                            <h2>$249 </h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Elite Logo</h3>
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
                                        <li>UNLIMITED Logo Design Concepts</li>
                                        <li>By 5 Award Winning Designers</li>
                                        <li>Stationary Design (Business Card, Letterhead, Envelope)</li>
                                        <li>Icon Design</li>
                                        <li>UNLIMITED Revisions</li>
                                        <li>FREE MS Word Letterhead</li>
                                        <li>Free Email Signature</li>
                                        <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>
                                        <li>48 to 72 hours TAT</li>
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
                            <h2>$349 </h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Business Logo</h3>
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
                                        <li>UNLIMITED Logo Design Concepts</li>
                                        <li>By 8 Award Winning Designers</li>
                                        <li>UNLIMITED Revisions</li>
                                        <li>2 Stationary Design Sets (Business Card, Letterhead, Envelope)</li>
                                        <li>Icon Design</li>
                                        <li>Double Sided Flyer Design / Bi-Fold Brochure </li>
                                        <li>FREE MS Word Letterhead</li>
                                        <li>Free Email Signature</li>
                                        <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                        <li>Money Back Guarantee *</li>
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
                            <h2>$499 </h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Gold Logo</h3>
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
                                        <li>UNLIMITED Logo Design Concepts</li>
                                        <li>By 8 Award Winning Designers</li>
                                        <li>Icon Design</li>
                                        <li>UNLIMITED Revisions</li>
                                        <li>2 Stationary Design Sets (Business Card, Letterhead, Envelope)</li>
                                        <li>FREE MS Word Letterhead</li>
                                        <li>Free Email Signature</li>
                                        <li>3 Page Custom Website</li>
                                        <li>2 Stock Photos</li>
                                        <li>2 Banner Designs</li>
                                        <li>jQuery Slider</li>
                                        <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>100% Unique Design Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box">
                                        <a href="pricing_view_details9bb4?package=Basic%20Illustrative" class="btn view-det">View Detail</a>
                                    </div> -->
                        <div class="bottom-contact"> <a href="javascript:void(0);"
                                class="popupBox btn btn-order startchat">order now</a>
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

<section class="gallery-sec">
    <div class="container-fluid">
        <div class="process-head-box" data-aos="fade-down" data-aos-duration="2000">
            <h4>A glimpse of our recent work</h4>
            <p>We have years of experience in digital marketing and design. We have spent years in <br /> delivering
                high quality work for our customers. Have a look at our recent work for our customers</p>
        </div>
        <div class="row web-design-gallery-slider">
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/logo-img-1.webp">
                        <img src="images/portfolio/logodesign/webp/logo-img-1.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/18.webp">
                        <img src="images/portfolio/logodesign/webp/18.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/logo-img-3.webp">
                        <img src="images/portfolio/logodesign/webp/logo-img-3.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/19.webp">
                        <img src="images/portfolio/logodesign/webp/19.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/3.webp">
                        <img src="images/portfolio/logodesign/webp/3.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/20.webp">
                        <img src="images/portfolio/logodesign/webp/20.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/17.webp">
                        <img src="images/portfolio/logodesign/webp/17.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/logo-img-5.webp">
                        <img src="images/portfolio/logodesign/webp/logo-img-5.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/logodesign/webp/logo-img-6.webp">
                        <img src="images/portfolio/logodesign/webp/logo-img-6.webp">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="how-we-work-sec">
    <div class="column_lines">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
    <div class="container">
        <div class="price-head-box aos-init aos-animate" data-aos="fade-down" data-aos-duration="3000">
            <h4>How We Work</h4>
        </div>
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="how-we-img-box">
                    <img src="images/webp/how-we-img.webp" alt="" class="img-fluid" />
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="v-anim-process-box logo-process-box">
                    <h6>Design Brief</h6>
                    <p>The process begins with your delivery of what you have in mind for the logo that is going to
                        go ahead and represent your brand for you. This is what we begin the construction of the
                        logo form.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-12">
                <div class="v-anim-process-box anim-2 logo-process-box">
                    <h6>Research & Sketch</h6>
                    <p>Now that we are clear with what ingredients must be included to brew the perfect logo for
                        you. Our designers will make a concept and make a draft to begin the collaborative design
                        process.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="v-anim-process-box anim-3 logo-process-box">
                    <h6>Revision</h6>
                    <p>Once we are satisfied with our delivery, we share it with the client. We are however
                        completely open for constructive feedback and revisions.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="v-anim-process-box anim-4 logo-process-box">
                    <h6>Final Delivery </h6>
                    <p>After having the files reviewed by the client and after having the errors removed, we deliver
                        the project and all the necessary format files.</p>
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
                <a href="javascript:void(0);" class="btn btn-start chatt">start live chat</a>
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
                        <p>“Kevin was very patient, good at explaining the work to be done and how. well done Kevin
                            from Websites Design Agency!”</p>
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
                            packages to choose from. They had a quick turn around time and we’re professional to
                            deal with. The line connection they used was very broken and caused multiple dropped
                            calls which remote communication through email than I would have preferred.”</p>
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
                        <p>“Excellent job creating our logo for sports major league. They listened to what we wanted
                            and gave us our logo in all the formats that we needed. Their pricing is more than
                            reasonable for the work that they did for us. We would highly recommend Websites Design
                            Agency to others. Special thanks to Karen for her artwork on this project.”</p>
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
                            website for our brand on very short notice. The refresh rate of our website is way
                            faster than before. Overall the whole website performance is great now. Thanks”</p>
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
                        <p>“Excellent job creating our logo and website. They listened to what we wanted and gave us
                            our logo in all the formats that we needed. Their pricing is more than reasonable for
                            the work that they did for us. We would highly recommend to others. Special thanks to
                            Veronica and team for her artwork on this project.”</p>
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
                            Process took a bit longer than expected, but the last few edits after initial approval
                            was met with cooperation. Would recommend for sure! Thank you Karen/Alex and design
                            team!”</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include('includes/footer.php'); ?> 