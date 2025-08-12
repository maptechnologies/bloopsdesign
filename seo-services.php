<?php include('includes/header.php'); ?>

<section class="banner-sec about-banner-sec seo-banner-sec">
    <div class="header-slider banner-txt-box">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="anim-banner-txt" data-aos="fade-right" data-aos-duration="2000">
                        <h6>Offering Engaging</h6>
                        <h5>SEO Services For Your Brand</h5>
                        <p>We are the search engine optimization agency that provides the best SEO services to boost
                            search engine ranking. You can get custom SEO services that fits your unique business
                            needs & generate site traffic for high conversions.</p>
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
                        <img src="images/webp/seo-banner-img.webp" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="services-sec seo-services-sec">
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
                    <h4>Improve Organic Traffic And Boost Engagement Rate </h4>
                    <p>When chalking out all the important means of marketing and branding a business, marketing it
                        through popular search engines is an important mean. It plays a pivotal role in expanding
                        word to prospective customers and audience. Our profound search engine presence advocates
                        brand authenticity, increases brand engagement and drives sales up by multifold. Our SEO
                        experts make sure your brand reaches goals across the globe.</p>
                    <a href="javascript:void(0);" class="popupBox btn btn-submit">lets get started</a>
                </div>
            </div>
        </div>
    </div>
    <div class="content-serv-sec seo-serv-sec">
        <div class="container-fluid">
            <div class="row content-serv-sec-responsive-slider">
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/seo-content-serv-img-1.png" alt="" class="img-fluid" />
                        <h6>Technical Seo</h6>
                        <p>We have full-time technical SEOs who are experienced with data analysis background, web
                            development and programming. We are expert at enterprise-level technical SEO as well.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/seo-content-serv-img-2.png" alt="" class="img-fluid" />
                        <h6>Content</h6>
                        <p>We also take care of content writing needs and the arrangement of words on your website.
                            Content plays the majro role in SEO. We take an effective approach in the development of
                            effective strategy.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/seo-content-serv-img-3.png" alt="" class="img-fluid" />
                        <h6>Local SEO</h6>
                        <p>SEO is required to reach customers in specific geographic locations. We emphasize on
                            providing strong signals to Google that focuses on the aimportance to your geographical
                            area.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/seo-content-serv-img-4.png" alt="" class="img-fluid" />
                        <h6>Link Building</h6>
                        <p>We mainly focus on developing long term and high quality strategies that revolve around
                            compelling content, authentic and equitable relationships that ensure consistent traffic
                            from domains in the authority.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="pricing-main-sec">
    <div class="container">
        <div class="price-head-box" data-aos="fade-down" data-aos-duration="3000">
            <h4>Highly Affordable Packages</h4>
            <p>We are well aware of the competition. That is the reason why we have a fair pricing model. <br />We
                ensure quality over quantity on each order.</p>
        </div>
        <div class="">
            <div class="row packages-responsive-slider">
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$300</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Basic Plan</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$2775</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li class="headingList"><b>Prior Analysis</b>
                                            <ol>
                                                <li>Business Analysis</li>
                                                <li>Consumer Analysis</li>
                                                <li>Competitor Analysis</li>
                                                <li>15 Selected Keywords Targeting</li>
                                                <li>15 Pages Keyword Targeted</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Webpage Optimization</b>
                                            <ol>


                                                <li>Meta Tags Creation</li>
                                                <li>Keyword Optimization</li>
                                                <li>Image Optimization</li>
                                                <li>Inclusion of anchors</li>

                                            </ol>
                                        <li class="headingList"><b>Tracking Analysis</b>
                                            <ol>
                                                <li>Google Analytics Installation</li>
                                                <li>Google Webmaster Installation</li>
                                                <li>Call To Action Plan</li>
                                                <li>Creation of Sitemaps</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Reporting</b>
                                            <ol>
                                                <li>Monthly Reporting </li>
                                                <li>Recommendation </li>
                                                <li>Email Support</li>
                                                <li>Phone Support</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Off Page Optimization</b>
                                            <ol>
                                                <li>Social Bookmarking</li>
                                                <li>Slide Share Marketing </li>
                                                <li>Forums/FAQ’s</li>
                                                <li>Link Building</li>
                                                <li>Directory Submission</li>
                                                <li>Local Business Listings </li>
                                            </ol>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_details399c?package=SEO%20Startup" class="btn view-det">View Detail</a> </div> -->
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
                            <h2>$599</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Premium Plan</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$3420</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li class="headingList"><b>Prior Analysis</b>
                                            <ol>
                                                <li>Business Analysis</li>
                                                <li>Consumer Analysis</li>
                                                <li>Competitor Analysis</li>
                                                <li>30 Selected Keywords Targeting</li>
                                                <li>30 Pages Keyword Targeted</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Webpage Optimization</b>
                                            <ol>
                                                <li>Meta Tags Creation</li>
                                                <li>Keyword Optimization</li>
                                                <li>Image Optimization</li>
                                                <li>Inclusion of anchors Tags</li>
                                                <li>Inclusion of anchors Indexing Modifications</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Tracking Analysis</b>
                                            <ol>
                                                <li>Google Places Inclusions</li>
                                                <li>Google Analytics Installation</li>
                                                <li>Google Webmaster Installation</li>
                                                <li>Call To Action Plan</li>
                                                <li>Creation of Sitemaps</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Reporting</b>
                                            <ol>
                                                <li>Monthly Reporting </li>
                                                <li>Recommendation </li>
                                                <li>Email Support</li>
                                                <li>Phone Support</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Off Page Optimization</b>
                                            <ol>
                                                <li>Social Bookmarking</li>
                                                <li>Slide Share Marketing </li>
                                                <li>Forums/FAQ’s</li>
                                                <li>Link Building</li>
                                                <li>Directory Submission</li>
                                                <li>Local Business Listings </li>
                                            </ol>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_details4712?package=SEO%20Scaling" class="btn view-det">View Detail</a> </div> -->
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
                            <h2>$899</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>Platinum Plan</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$10220</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li class="headingList"><b>Prior Analysis</b>
                                            <ol>
                                                <li>Business Analysis</li>
                                                <li>Consumer Analysis</li>
                                                <li>Competitor Analysis</li>
                                                <li>70 Selected Keywords Targeting</li>
                                                <li>50 Pages Keyword Targeted</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Webpage Optimization</b>
                                            <ol>
                                                <li>Meta Tags Creation</li>
                                                <li>Keyword Optimization</li>
                                                <li>Image Optimization</li>
                                                <li>Inclusion of anchors Tags</li>
                                                <li>Inclusion of anchors Indexing Modifications</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Tracking Analysis</b>
                                            <ol>
                                                <li>Google Places Inclusions</li>
                                                <li>Google Analytics Installation</li>
                                                <li>Google Webmaster Installation</li>
                                                <li>Call To Action Plan</li>
                                                <li>Creation of Sitemaps</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Reporting</b>
                                            <ol>
                                                <li>Monthly Reporting </li>
                                                <li>Recommendation </li>
                                                <li>Email Support</li>
                                                <li>Phone Support</li>
                                            </ol>
                                        </li>
                                        <li class="headingList"><b>Off Page Optimization</b>
                                            <ol>
                                                <li>Social Bookmarking</li>
                                                <li>Slide Share Marketing </li>
                                                <li>Forums/FAQ’s</li>
                                                <li>Link Building</li>
                                                <li>Directory Submission</li>
                                                <li>Local Business Listings </li>
                                                <li>Blog Content Creation </li>
                                                <li>Local SEO</li>
                                            </ol>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_details7d07?package=SEO%20Venture" class="btn view-det">View Detail</a> </div> -->
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
    </div>
</section>

<section class="video-anim-process-sec seo-process-sec">
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
                <h4>process</h4>
            </div>
            <div class="row video-anim-process-responsive-slider">
                <div class="col-lg-6 col-md-12">
                    <div class="v-anim-process-box">
                        <h6>In Depth Audits</h6>
                        <p>We mainly focus on the issues that can be restrict the stie from ranking on the top for
                            your key terms. The issues can happen like problems with the site's code or the main
                            stage like lack of content optimization and usability issues.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="v-anim-process-box anim-2">
                        <h6>Link Risk Analysis </h6>
                        <p>There are a lot of websites have been penalized because of keyword manipulation, link
                            buildiing etc. We make sure this doesnt happen to your website by carrying out a
                            complete audit of backlink profile and the overall website.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="v-anim-process-box anim-3">
                        <h6>Competitive Audit</h6>
                        <p>We made use of advanced techniques including lanuague processing, machine learning and
                            language ontology to let your content stand out among the audience along with performing
                            well in the search criteria.</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="v-anim-process-box anim-4">
                        <h6>Approval & Delivery</h6>
                        <p>We develop a strategy along with the challenges that we can find in our audits. The
                            strategy will be presented for your consideration and approal. After the approval of
                            everything, you will get started!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="benefits-sec">
    <div class="container">
        <div class="benefits-head-box">
            <h4>Our SEO Strategy Timeline</h4>
        </div>
        <div class="row bene-row-line seo-process-responsive-slider">
            <div class="col-lg-6 col-md-12 p-0">
                <div class="benefits-main-box-left">
                    <div class="benefits-content-box txt-right">
                        <h5>Our SEO Strategy Timeline</h5>
                        <p>Our SEO strategy is of no use if it doesnt align with your marketing objectives which is
                            why discuss and setup your SEO objectives with you.</p>
                    </div>
                    <div class="benefits-num-box">
                        <h6>1</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 p-0">
                <div class="benefits-main-box-right">
                    <div class="benefits-num-box">
                        <h6>2</h6>
                    </div>
                    <div class="benefits-content-box txt-left">
                        <h5>Proper SEO Analysis</h5>
                        <p>Analyzing your website is the next big step which will be taken by us, to list down all
                            major changes before starting the work.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 p-0">
                <div class="benefits-main-box-left">
                    <div class="benefits-content-box txt-right">
                        <h5>Targeted Keyword Research</h5>
                        <p>Our experts look for the most suitable keywords that are in accordance with the target
                            market ensuring the SEO strategy is supporting your objectives.</p>
                    </div>
                    <div class="benefits-num-box">
                        <h6>3</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 p-0">
                <div class="benefits-main-box-right">
                    <div class="benefits-num-box">
                        <h6>4</h6>
                    </div>
                    <div class="benefits-content-box txt-left">
                        <h5>On Page Optimization</h5>
                        <p>After the keyword research, our on page SEO experts take care of the SEO requirements
                            along with the keyword integration prcoess.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 p-0">
                <div class="benefits-main-box-left">
                    <div class="benefits-content-box txt-right">
                        <h5>Link Building</h5>
                        <p>Developing your website's authority is the next big step that we can take which can be
                            assisted further by our SEO experts.</p>
                    </div>
                    <div class="benefits-num-box">
                        <h6>5</h6>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 p-0">
                <div class="benefits-main-box-right">
                    <div class="benefits-num-box">
                        <h6>6</h6>
                    </div>
                    <div class="benefits-content-box txt-left">
                        <h5>Tracking & Reporting</h5>
                        <p>We help you stay in the process with the step by step consultation along with the
                            complete insights by helping you analyze the efforts.</p>
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