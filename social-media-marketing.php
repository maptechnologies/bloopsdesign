<?php include('includes/header.php'); ?>
<section class="banner-sec about-banner-sec marketing-banner-sec">
    <div class="header-slider banner-txt-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-12">
                    <div class="anim-banner-txt" data-aos="fade-right" data-aos-duration="2000">
                        <h6>Offering Engaging</h6>
                        <h5>Social Media Services <br /> For Your Brand</h5>
                        <p>We help you increase your visibility with well-crafted social media campaigns for
                            different brands. We are the social media marketing company that is unmatched in the
                            US at improving website traffic.</p>
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
                <div class="marketing-img-box">
                    <img src="images/webp/marketing-banner.webp" alt="" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</section>
<section class="services-sec marketing-service-sec">
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
            <div class="col-md-9">
                <div class="services-head-box" data-aos="fade-down" data-aos-duration="2000">
                    <h4>Social Media for Increased Engagement</h4>
                    <p>The market is flooded with vigorous marketers these days who group against each other so
                        they make sure that they are not beaten in competition of social media these days which
                        is absolutely frenzied. Our experts in social management with their high end state of
                        the art tools coin strategies for you that make sure your brand rules these social media
                        platforms as well as the search engines. Due to the promise that social media holds for
                        boosting different businesses, the competition on these channels is higher than ever. We
                        are a one stop solution provider that takes care of your brands from the creation of
                        content all the way to marketing it and making sure that it remains unique and top of
                        its game.</p>
                </div>
            </div>
        </div>
        <div class="service-slider">
            <div class="owl-carousel owl-theme">
                <div class="item">
                    <div class="serv-main-box">
                        <img src="images/webp/market-serv-img-1.webp" alt="" class="img-fluid" />
                        <h5>SOCIAL MEDIA MARKETING</h5>
                        <p>Who doesn’t use social media these days? if these platforms are such inherently a
                            part of our lives these days, how can they not be a part of our business models and
                            marketing strategies? our experts not only offer social media consultancy, but our
                            team along with industry leading designers, comes up with high quality content for
                            your social media platforms.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="serv-main-box">
                        <img src="images/webp/market-serv-img-2.webp" alt="" class="img-fluid" />
                        <h5>PAY-PER-CLICK CAMPAIGNS</h5>
                        <p>The ppc or pay-per-click phenomenon works on the internet advising model by bringing
                            significant traffic to websites. why is it called pay-per-click? the owner of the
                            website pays for each click that is made on the ads that brings the user to the
                            website. our team at Websites Designs Agency is adept in ppc marketing and to make
                            the most out of these campaigns for your brand.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="serv-main-box">
                        <img src="images/webp/market-serv-img-3.webp" alt="" class="img-fluid" />
                        <h5>REPUTATION MANAGEMENT</h5>
                        <p>Reputation management as the name depicts is the management or trimming of the image
                            that a brand holds. however in this context it refers to management of social
                            platforms and search engines to ensure maximum engagement. this include the
                            management and administration of carious social media platforms online.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="pricing-main-sec">
    <div class="container">
        <div class="price-head-box" data-aos="fade-down" data-aos-duration="2000">
            <h4>Most Affordable Packages</h4>
            <p>We are well aware of the competition. That is the reason why we have a fair pricing model.
                <br />We ensure quality over quantity on each order.
            </p>
        </div>
        <div class="">
            <div class="row packages-responsive-slider">
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$1800</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Bronze Package
                                    (Monthly)</h3>
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
                                        <li>1 Social Media Platform (Facebook)</li>
                                        <li>Social media account setup</li>
                                        <li>Complete Account Management</li>
                                        <li>8 Custom Designed Social Media Posts per month</li>
                                        <li>Custom Editorial calendar (Review before publishing)</li>
                                        <li>Goal focused Facebook Ad campaigns</li>
                                        <li>1000 Likes on Facebook page </li>
                                        <li>End of term report-KPI Comparison &amp; more</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_detailsa1b0?package=Startup%20Package" class="btn view-det">View Detail</a> </div> -->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);" class="popupBox btn btn-order startchat order-package">
                                order now
                            </a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();"> <span class="cht_clr"><small>Click
                                        here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$2500</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Silver Package
                                    (Monthly)</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$500</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>2 Social Media Platforms (Facebook/ Instagram)</li>
                                        <li>Social media accounts setup</li>
                                        <li>Complete Accounts Management</li>
                                        <li>12 Custom Designed Social Media Posts per month</li>
                                        <li>Custom Editorial calendar (Review before publishing)</li>
                                        <li>Goal focused Facebook and Instagram Ad campaigns</li>
                                        <li>Call to action Integration </li>
                                        <li>1200 likes on Facebook page</li>
                                        <li>250 followers on Instagram</li>
                                        <li>Monthly Analytic Report-KPI Comparison &amp; more</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_details511d?package=Professional%20Package" class="btn view-det">View Detail</a> </div> -->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                                order now
                            </a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();"> <span class="cht_clr"><small>Click
                                        here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$3500</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Gold Package
                                    (Monthly)</h3>
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
                                        <li>3 Social Media Platforms (Facebook/ Instagram/ Twitter)</li>
                                        <li>Social media accounts setup</li>
                                        <li>Complete Accounts Management</li>
                                        <li>Competitor Analysis – Local and Nationwide</li>
                                        <li>16 Custom Designed Social Media Posts per month</li>
                                        <li>Community management – All Community Based Social Networks</li>
                                        <li>1 GIF post per Month</li>
                                        <li>Custom Editorial Calendar (Review before publishing)</li>
                                        <li>Goal focused Facebook and Instagram Ad campaigns</li>
                                        <li>Engagement Tracking Setup</li>
                                        <li>Call to action Integration</li>
                                        <li>3000 Likes on Facebook page</li>
                                        <li>500 followers on Instagram</li>
                                        <li>Bi-monthly Analytic Report-KPI Comparison &amp; more</li>
                                        <li>Dedicated Account Manager</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_details6219?package=Elite%20Package" class="btn view-det">View Detail</a> </div> -->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                                order now
                            </a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();"> <span class="cht_clr"><small>Click
                                        here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$4500</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Combo Package
                                    (Monthly)</h3>
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
                                        <li>4 Social Media Platforms (Facebook/ Instagram / Twitter/Linkedin)
                                        </li>
                                        <li>Social media accounts setup</li>
                                        <li>Complete Accounts Management</li>
                                        <li>Initial Brand Analysis </li>
                                        <li>Consumer Persona Analysis</li>
                                        <li>Competitor Analysis – Local and Nationwide</li>
                                        <li>18 Custom Designed Social Media Posts per month</li>
                                        <li>Community management– All Community Based Social Networks</li>
                                        <li>Reputation management</li>
                                        <li>Brand Listing-20</li>
                                        <li>2 Gif post per month</li>
                                        <li>Custom Editorial Calendar (Review before publishing)</li>
                                        <li>Goal focused Facebook and Instagram Ad campaign</li>
                                        <li>Engagement Tracking Setup</li>
                                        <li>Call to action Integration</li>
                                        <li>Facebook Shop Creation</li>
                                        <li>4000 Likes on Facebook page</li>
                                        <li>800 followers on Instagram</li>
                                        <li>Weekly Analytic Report -KPI Comparison &amp; more</li>
                                        <li>Dedicated Account manager</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_details6219?package=Elite%20Package" class="btn view-det">View Detail</a> </div> -->
                        <div class="bottom-contact">
                            <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                                order now
                            </a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();"> <span class="cht_clr"><small>Click
                                        here to
                                        <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a href="pricing.php" class="btn btn-view-pack">view all packages</a>
        <div>
</section>

<section class="gallery-sec">
    <div class="container-fluid">
        <div class="process-head-box marketing-process-head-box" data-aos="fade-down" data-aos-duration="2000">
            <h4>A glimpse of our recent work</h4>
            <p>We have years of experience in digital marketing and design. We have spent years in <br />
                delivering high quality work for our customers. Have a look at our recent work for our customers
            </p>
            <h6>Have a look at our recent work for our customers:</h6>
        </div>
        <div class="row web-design-gallery-slider">
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/17.webp">
                        <img src="images/portfolio/social/webp/17.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/16.webp">
                        <img src="images/portfolio/social/webp/16.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/15.webp">
                        <img src="images/portfolio/social/webp/15.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/14.webp">
                        <img src="images/portfolio/social/webp/14.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/13.webp">
                        <img src="images/portfolio/social/webp/13.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/12.webp">
                        <img src="images/portfolio/social/webp/12.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/11.webp">
                        <img src="images/portfolio/social/webp/11.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/10.webp">
                        <img src="images/portfolio/social/webp/10.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/9.webp">
                        <img src="images/portfolio/social/webp/9.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/8.webp">
                        <img src="images/portfolio/social/webp/8.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/7.webp">
                        <img src="images/portfolio/social/webp/7.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/social/webp/6.webp">
                        <img src="images/portfolio/social/webp/6.webp">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="media-strategy-sec">
    <div class="column_lines">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
    <div class="process-head-box marketing-process-head-box" data-aos="fade-down" data-aos-duration="2000">
        <h4>Our Social Media Strategy Elevates <br /> Your Business</h4>
    </div>
    <div class="content-serv-sec">
        <div class="container-fluid">
            <div class="row content-serv-sec-responsive-slider">
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/marketing-content-serv-img-1.png" alt="" class="img-fluid" />
                        <h6>Boost Brand Awareness</h6>
                        <p>We offer social media marketing services that will elevate your brand profile and
                            improve the overall performance of your business.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/marketing-content-serv-img-2.png" alt="" class="img-fluid" />
                        <h6>Drive Engagement</h6>
                        <p>We make use of social power to your business so it allows you to interact with
                            audiences directly, customers along with stakeholders. We can support you to carry
                            online discussions successfully.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/marketing-content-serv-img-3.png" alt="" class="img-fluid" />
                        <h6>Share Your Experiences</h6>
                        <p>You have great experiences and stories to share with us. Your milestones, business
                            insights & tribulations, great content can be shared with everyone by social
                            platforms.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/marketing-content-serv-img-4.png" alt="" class="img-fluid" />
                        <h6>Get Potential Leads</h6>
                        <p>We can help you the digital content that works for you. We are one of the leading
                            social media marketing agencies offering outstanding norms and creative strategies
                            that allows you recognize prospects and converts them into customers.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- <section class="pricing-main-sec">
            <div class="container">
                <div class="price-head-box" data-aos="fade-down" data-aos-duration="3000">
                <h4>Most Affordable Packages</h4>
                <p>We are well aware of the competition. That is the reason why we have a fair pricing model. <br />We ensure quality over quantity on each order.</p>
                </div>
                <div class="package-slider-box">
                <div class="owl-carousel owl-theme">
                    <div class="item">
                        <div class="item">
                            <div class="package-main-box">
                            <div class="package-pr">
                                <h2>$355</h2> 
                            </div>
                            <div class="packtitles">
                                <div class="fleft">
                                    <h3>Small Business</h3>
                                    <p>Suitable for Small Startups</p>
                                </div>
                                <div class="fright">
                                    <h4>75% OFF<span class="cutprice">$1420</span></h4> </div>
                            </div>
                            <div class="package-content">
                                <div class="slim-scroll">
                                    <div>
                                        <ul>
                                        <li>3 postings per week (per network) Facebook + Twitter + Instagram + Google+</li>
                                        <li>Content Creation</li>
                                        <li>Business Page Optimization</li>
                                        <li>Social Media Strategy (Overview)</li>
                                        <li>Facebook Likes Campaign</li>
                                        <li>Monthly Progress report</li>
                                        <li>Copy Writing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="view-detail-box"> <a href="pricing_view_detailsb3f7?package=Small%20Business" class="btn view-det">View Detail</a> </div>
                            <div class="bottom-contact">
                                <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                                    order now
                                </a>
                                <a class="btn chat" href="javascript;;"> <span class="cht_clr"><small>Click here to 
                                    <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span> 
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
            
                    <div class="item">
                        <div class="item">
                            <div class="package-main-box">
                            <div class="package-pr">
                                <h2>$555</h2> </div>
                            <div class="packtitles">
                                <div class="fleft">
                                    <h3>Medium Business</h3>
                                    <p>Suitable for Small Startups</p>
                                </div>
                                <div class="fright">
                                    <h4>75% OFF<span class="cutprice">$2220</span></h4> </div>
                            </div>
                            <div class="package-content">
                                <div class="slim-scroll">
                                    <div>
                                        <ul>
                                        <li>Our medium business package is ideal for medium to large organizations that want to completely outsource their social media presence to experts and monitor their brand reputation</li>
                                        <li>Copywriting &amp; Visual designs</li>
                                        <li>Business Page Optimization</li>
                                        <li>Ad Campaign Management</li>
                                        <li>Spam monitoring</li>
                                        <li>Monthly Progress report</li>
                                        <li>5 postings per week Facebook + Twitter + Instagram + Google+</li>
                                        <li>Reputation Management</li>
                                        <li>Social Account Setup</li>
                                        <li>Content Creation</li>
                                        <li>Social Media Hearing</li>
                                        <li>Query and comments reply</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="view-detail-box"> <a href="pricing_view_detailsf402?package=Medium%20Business" class="btn view-det">View Detail</a> </div>
                            <div class="bottom-contact"> 
                                <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                                    order now
                                </a>
                                <a class="btn chat" href="javascript;;"> <span class="cht_clr"><small>Click here to 
                                    <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                                    </small> Live Chat</span> 
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>            
            </div>
            </section> -->
<section class="video-anim-process-sec s-media-process-sec">
    <div class="column_lines">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
    </div>
    <div class="v-ani-sec">
        <div class="container">
            <div class="v-anim-head">
                <h4>Social Media Management</h4>
            </div>
            <div class="row video-anim-process-responsive-slider">
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box">
                        <h6>Virtual <br /> Marketing </h6>
                        <p>With our custom virutal marketing services, your business can easily reach out to the
                            target audience based on your preferred demographics.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box anim-2">
                        <h6>Facebook Account Management</h6>
                        <p>Facebook has a huge customer based and is one of the reliable platforms to promote
                            your brand all over the world. Our soltions can help you manage the entire process
                            in a flawless manner.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box anim-3">
                        <h6>Twitter Account Management</h6>
                        <p>Twitter has a pool of intellectual audience that can be attracted only with the
                            suitable strategy. Manage your Twitter account and wich rich content is the only way
                            to make yourself successful and we can help you with that.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box anim-4">
                        <h6>Linkedin Account Management</h6>
                        <p>From Pinterest, Linkedin to other social media accounts, our social media experts and
                            writers take hold of all social media platforms to leave an ever lasting impact on
                            your business.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box anim-5">
                        <h6>Youtube Channel Management</h6>
                        <p>Visual content is of significant importance and it allows to communicate with your
                            clients in present and future scenario. Youtube channel gets the most crowd and we
                            build content plan that is entertaining, engaging and enticing.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="v-anim-process-box anim-6">
                        <h6>Instagram Campaign Management</h6>
                        <p>Our instagram campaign management service is ideal for all kinds of business. We can
                            make your instagram go live and make sure to offer an account that gets more
                            presence and credibility.</p>
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
                <a href="javascript:void(0);window.Tawk_API.toggle();" class="btn btn-start chatt">start
                    live chat</a>
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
                        <p>“Kevin was very patient, good at explaining the work to be done and how. well done
                            Kevin from Websites Design Agency!”</p>
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
                        <p>“Very compelling and looked for a solution to work within my budget, Kevin spent a
                            lot of time explaining how everything worked in detail and was very fair and
                            reasonable with pricing.”</p>
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
                        <p>“They were very prompt to reply. They listened to what I needed and had reasonably
                            priced packages to choose from. They had a quick turn around time and we’re
                            professional to deal with. The line connection they used was very broken and caused
                            multiple dropped calls which remote communication through email than I would have
                            preferred.”</p>
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
                        <p>“Excellent job creating our logo for sports major league. They listened to what we
                            wanted and gave us our logo in all the formats that we needed. Their pricing is more
                            than reasonable for the work that they did for us. We would highly recommend
                            Websites Design Agency to others. Special thanks to Karen for her artwork on this
                            project.”</p>
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
                        <p>“It was a great experience working with Websites Design Agency. Their team developed
                            the website for our brand on very short notice. The refresh rate of our website is
                            way faster than before. Overall the whole website performance is great now. Thanks”
                        </p>
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
                        <p>“Excellent job creating our logo and website. They listened to what we wanted and
                            gave us our logo in all the formats that we needed. Their pricing is more than
                            reasonable for the work that they did for us. We would highly recommend to others.
                            Special thanks to Veronica and team for her artwork on this project.”</p>
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
                        <p>“Experience was very engaging, prompt replies, affordable pricing with unlimited
                            edits. Process took a bit longer than expected, but the last few edits after initial
                            approval was met with cooperation. Would recommend for sure! Thank you Karen/Alex
                            and design team!”</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<?php include('includes/footer.php'); ?>