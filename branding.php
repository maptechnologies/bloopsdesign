<?php include('includes/header.php'); ?>

<section class="banner-sec about-banner-sec branding-banner-sec">
   <div class="header-slider banner-txt-box">
      <div class="container">
         <div class="row">
            <div class="col-lg-6 col-md-12">
               <div class="anim-banner-txt" data-aos="fade-right" data-aos-duration="2000">
                  <h6>GARNER THE ATTENTION AND CUSTOMERS</h6>
                  <h5>That You Want With Our Branding Solutions</h5>
                  <p>We deliver high quality branding services. Our services are well designed and we fulfill creative marketing needs of our customers that is the powerful way engaging more clients.</p>
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
                              <a href="javascript:void(0);$zopim.livechat.window.toggle()" class="btn btn-live chatt"><i class='fas fa-comment'></i>Live Chat</a>
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
            <div class="branding-img-box">
               <img src="images/webp/branding-mockup.webp" alt="" class="img-fluid" />
            </div>
         </div>
      </div>
   </div>
</section>

<section class="services-sec content-services-sec e-commerce-services-sec">
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
               <h4>Build Your Brand With Us</h4>
               <p>When we say branding and brand image, it isn’t just about a cool logo, or even one particular visual or some banners. It’s about a whole story of how the brand makes its space in the client’s heart and mind. It needs to be something that stirs up the whole scenario. It constitutes a set of features and characteristics that the clients associates to the product you’re offering. Now how impressive are those characteristics is what decides your brand equity. We research, build, manage, consider and reconsider, strengthen and refine your branding techniques and ideas. We build each brand as if our own and make sure that it garners the attention and customers that we would want for ourselves.</p>
               <a href="javascript:void(0);" class="chatt popupBox btn btn-submit">lets get started</a>
            </div>
         </div>
      </div>
   </div>
   <div class="content-serv-sec branding-content-serv">
      <div class="container-fluid">
         <div class="branding-content-serv-slider">
            <div class="owl-carousel owl-theme">
               <div class="item">
                  <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                     <img src="images/webp/branding-content-serv-img-1.png" alt="" class="img-fluid" />
                     <h6>Logo Designs</h6>
                     <p>Logo designs are seen as somewhat of a not so important thing by some of the newbies, but for our experienced brand managers, we know the importance it holds. with our years on experience in the industry and dozens of satisfied customers we draft the perfect logo for you in no more than 50 minutes.</p>
                  </div>
               </div>
               <div class="item">
                  <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                     <img src="images/webp/branding-content-serv-img-2.png" alt="" class="img-fluid" />
                     <h6>Infographic Designs</h6>
                     <p>Conveying complex ideas and factual information becomes quite difficult sometimes, especially if lengthy. an easy way out of such laborious and complicated piles of information is an infographic. we work together with clients to sum up complicated information and numbers in one colorful and interesting infographic.</p>
                  </div>
               </div>
               <div class="item">
                  <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                     <img src="images/webp/branding-content-serv-img-3.png" alt="" class="img-fluid" />
                     <h6>Brochure Designs</h6>
                     <p>Brochures are harbingers of important information of products and brands and hence hold pivotal importance in the branding of any product. they have the potential of making or breaking a brand. hence, our designers who are adept in branding too, know how to design the brochures perfectly.</p>
                  </div>
               </div>
               <div class="item">
                  <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                     <img src="images/webp/branding-content-serv-img-4.png" alt="" class="img-fluid" />
                     <h6>Stationery Design</h6>
                     <p>Our stationery design package offers a comprehensive stationery set design that includes paper, office supplies, letterheads, writing equipment, business cards, cases, and other similar items. the purpose of this stationery package is to paint up the whole collection of items in the same brand image.</p>
                  </div>
               </div>
               <div class="item">
                  <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                     <img src="images/webp/branding-content-serv-img-3.png" alt="" class="img-fluid" />
                     <h6>Online Promotional Design</h6>
                     <p>When we say we own our clients and their work, we really mean it. We make sure we promote your business in the most noticeable way. With our online reputation management services, we make sure of the fact that whether it is your branding or social media posts that we are designing for, your brand soul is reflected in it with amazing designs.</p>
                  </div>
               </div>
               <div class="item">
                  <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                     <img src="images/webp/branding-content-serv-img-4.png" alt="" class="img-fluid" />
                     <h6>Trade Show Design</h6>
                     <p>Our custom designs are always crafted keeping in mind the ambition of making them memorable and impactful. The same scheme is applied when it comes to trade designs as well, as we craft impressions that last a lifetime through designs that are inspiring and appealing, our designs bring engagement and customers to your products from your desired audience wherever you are in the world.</p>
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
      <div class="price-head-box" data-aos="fade-down" data-aos-duration="2000">
         <h4>Most Affordable Packages</h4>
         <p>We are well aware of the competition. That is the reason why we have a fair pricing model. <br />We ensure quality over quantity on each order.</p>
      </div>
      <div class="">
         <div class="row packages-responsive-slider">
            <div class="col-lg-4">
               <div class="package-main-box">
                  <div class="package-pr">
                     <h2>$149 </h2>
                  </div>
                  <div class="packtitles">
                     <div class="fleft">
                        <h3>Startup Collateral</h3>
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
                              <li>2 Stationery Design Set</li>
                              <li>FREE Fax Template</li>
                              <li>Print Ready Formats</li>
                              <li>UNLIMITED Revisions</li>
                              <li>100% Satisfaction Guarantee</li>
                              <li>Money Back Guarantee *</li>
                              <li>Unlimited Revisions</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!-- <div class="view-detail-box"> <a href="pricing_view_detailsa1b0?package=Startup%20Package" class="btn view-det">View Detail</a> </div> -->
                  <div class="bottom-contact">
                     <a href="javascript:void(0);" class="popupBox btn btn-order startchat order-package">
                        order now
                     </a>
                     <a href="javascript:void(0);window.Tawk_API.toggle();"> <span class="cht_clr"><small>Click here to
                              <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                           </small> Live Chat</span>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="package-main-box">
                  <div class="package-pr">
                     <h2>$299</h2>
                  </div>
                  <div class="packtitles">
                     <div class="fleft">
                        <h3>Collateral Classic</h3>
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
                              <li>2 Stationery Design Set</li>
                              <li>UNLIMITED Revisions</li>
                              <li>Flyer Design</li>
                              <li>Brochure Design (Bi-fold/Tri-fold)</li>
                              <li>100% Satisfaction Guarantee</li>
                              <li>Money Back Guarantee *</li>
                              <li>Unlimited Revisions</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!-- <div class="view-detail-box"> <a href="pricing_view_details511d?package=Professional%20Package" class="btn view-det">View Detail</a> </div> -->
                  <div class="bottom-contact">
                     <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                        order now
                     </a>
                     <a href="javascript:void(0);window.Tawk_API.toggle();"> <span class="cht_clr"><small>Click here to
                              <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                           </small> Live Chat</span>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="package-main-box">
                  <div class="package-pr">
                     <h2>$499</h2>
                  </div>
                  <div class="packtitles">
                     <div class="fleft">
                        <h3>Premium Collateral</h3>
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
                              <li>2 Stationery Design Set</li>
                              <li>Packaging Design</li>
                              <li>UNLIMITED Revisions</li>
                              <li>T-Shirt Design</li>
                              <li>100% Satisfaction Guarantee</li>
                              <li>Money Back Guarantee *</li>
                              <li>Unlimited Revisions</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!-- <div class="view-detail-box"> <a href="pricing_view_details6219?package=Elite%20Package" class="btn view-det">View Detail</a> </div> -->
                  <div class="bottom-contact">
                     <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                        order now
                     </a>
                     <a href="javascript:void(0);window.Tawk_API.toggle();"> <span class="cht_clr"><small>Click here to
                              <img src="images/webp/chat-img.webp" alt="" class="img-fluid" />
                           </small> Live Chat</span>
                     </a>
                  </div>
               </div>
            </div>
            <div class="col-lg-4">
               <div class="package-main-box">
                  <div class="package-pr">
                     <h2>$699</h2>
                  </div>
                  <div class="packtitles">
                     <div class="fleft">
                        <h3>Unlimited Collateral</h3>
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
                              <li>2 Stationery Design Set</li>
                              <li>Menu Card Design</li>
                              <li>T-Shirt Design</li>
                              <li>1 Banner Design</li>
                              <li>100% Satisfaction Guarantee</li>
                              <li>Money Back Guarantee *</li>
                              <li>Unlimited Revisions</li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <!-- <div class="view-detail-box"> <a href="pricing_view_details6219?package=Elite%20Package" class="btn view-det">View Detail</a> </div> -->
                  <div class="bottom-contact">
                     <a href="javascript:void(0);" class="popupBox btn btn-order startchat">
                        order now
                     </a>
                     <a href="javascript:void(0);window.Tawk_API.toggle();"> <span class="cht_clr"><small>Click here to
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

<section class="gallery-sec web-design-gallery-sec">
   <div class="column_lines">
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
      <div class="column"></div>
   </div>
   <div class="container-fluid">
      <div class="process-head-box" data-aos="fade-down" data-aos-duration="2000">
         <h4>A glimpse of our recent work</h4>
         <p>We have years of experience in digital marketing and design. We have spent years in delivering high quality work for our customers. <br /> Have a look at our recent work for our customers:</p>
      </div>
      <div class="row web-design-gallery-slider">
         <div class="col-md-12 col-sm-12 col-lg-4 p-0">
            <div class="gallery-img-box">
               <a data-fancybox="gallery" href="images/webp/branding-gallery-img-1.webp">
                  <img src="images/webp/branding-gallery-img-1.webp">
               </a>
            </div>
         </div>
         <div class="col-md-12 col-sm-12 col-lg-4 p-0">
            <div class="gallery-img-box">
               <a data-fancybox="gallery" href="images/webp/branding-gallery-img-2.webp">
                  <img src="images/webp/branding-gallery-img-2.webp">
               </a>
            </div>
         </div>
         <div class="col-md-12 col-sm-12 col-lg-4 p-0">
            <div class="gallery-img-box">
               <a data-fancybox="gallery" href="images/webp/branding-gallery-img-3.webp">
                  <img src="images/webp/branding-gallery-img-3.webp">
               </a>
            </div>
         </div>
         <div class="col-md-12 col-sm-12 col-lg-4 p-0">
            <div class="gallery-img-box">
               <a data-fancybox="gallery" href="images/webp/branding-gallery-img-4.webp">
                  <img src="images/webp/branding-gallery-img-4.webp">
               </a>
            </div>
         </div>
         <div class="col-md-12 col-sm-12 col-lg-4 p-0">
            <div class="gallery-img-box">
               <a data-fancybox="gallery" href="images/webp/branding-gallery-img-5.webp">
                  <img src="images/webp/branding-gallery-img-5.webp">
               </a>
            </div>
         </div>
         <div class="col-md-12 col-sm-12 col-lg-4 p-0">
            <div class="gallery-img-box">
               <a data-fancybox="gallery" href="images/webp/branding-gallery-img-6.webp">
                  <img src="images/webp/branding-gallery-img-6.webp">
               </a>
            </div>
         </div>
      </div>
      <a href="javascript:void(0);" class="popupBox btn btn-submit">lets get started</a>
   </div>
</section>

<section class="process-sec branding-process-sec">
   <div class="container-fluid p-0 m-0">
      <div class="process-head-box" data-aos="fade-down" data-aos-duration="2000">
         <h4>our work process</h4>
         <p>Do you want to get recognized? We have been providing a broad range of business logo <br /> design, branding, digital marketing and development services.</p>
      </div>
      <div class="prcess-main-box" data-aos="zoom-in" data-aos-duration="2000">
         <div class="row process-slider">
            <div class="col-md-12 col-sm-12 col-lg-3 p-0">
               <div class="content">
                  <a href="javascript:;">
                     <div class="content-overlay"></div>
                     <img class="content-image" src="images/webp/process-img-1.webp">
                     <div class="content-details fadeIn-top">
                        <div class="hover-num-box">
                           <h6>01</h6>
                           <h3>Design Brief</h3>
                        </div>
                        <p>The process begins with your delivery of what you have in mind for the logo, which is going to go ahead and represent your brand for you. This is where we begin the construction of the logo.</p>
                     </div>
                  </a>
               </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-3 p-0">
               <div class="content">
                  <a href="javascript:;">
                     <div class="content-overlay"></div>
                     <img class="content-image" src="images/webp/process-img-2.webp">
                     <div class="content-details fadeIn-top">
                        <div class="hover-num-box">
                           <h6>02</h6>
                           <h3>Research & Sketch</h3>
                        </div>
                        <p>Now that we are clear with what ingredients must be included to brew the perfect logo for you. Our designers will come up with a concept and make a draft to begin the collaborative design process.</p>
                     </div>
                  </a>
               </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-3 p-0">
               <div class="content">
                  <a href="javascript:;">
                     <div class="content-overlay"></div>
                     <img class="content-image" src="images/webp/process-img-3.webp">
                     <div class="content-details fadeIn-top">
                        <div class="hover-num-box">
                           <h6>03</h6>
                           <h3>Revision</h3>
                        </div>
                        <p>Once we are satisfied with our Designs, we share it with the client. We are however completely open for constructive feedback and revisions.</p>
                     </div>
                  </a>
               </div>
            </div>
            <div class="col-md-12 col-sm-12 col-lg-3 p-0">
               <div class="content">
                  <a href="javascript:;">
                     <div class="content-overlay"></div>
                     <img class="content-image" src="images/webp/process-img-4.webp">
                     <div class="content-details fadeIn-top">
                        <div class="hover-num-box">
                           <h6>04</h6>
                           <h3>Final Delivery</h3>
                        </div>
                        <p>After having the files reviewed by the client and after having the errors removed, we deliver the project and all the necessary format files.</p>
                     </div>
                  </a>
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
            <a href="javascript:void(0);$zopim.livechat.window.toggle()" class="btn btn-start chatt">start live chat</a>
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
                  <p>“Kevin was very patient, good at explaining the work to be done and how. well done Kevin from Websites Design Agency!”</p>
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
                  <p>“Very compelling and looked for a solution to work within my budget, Kevin spent a lot of time explaining how everything worked in detail and was very fair and reasonable with pricing.”</p>
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
                  <p>“They were very prompt to reply. They listened to what I needed and had reasonably priced packages to choose from. They had a quick turn around time and we’re professional to deal with. The line connection they used was very broken and caused multiple dropped calls which remote communication through email than I would have preferred.”</p>
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
                  <p>“Excellent job creating our logo for sports major league. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend Websites Design Agency to others. Special thanks to Karen for her artwork on this project.”</p>
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
                  <p>“It was a great experience working with Websites Design Agency. Their team developed the website for our brand on very short notice. The refresh rate of our website is way faster than before. Overall the whole website performance is great now. Thanks”</p>
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
                  <p>“Excellent job creating our logo and website. They listened to what we wanted and gave us our logo in all the formats that we needed. Their pricing is more than reasonable for the work that they did for us. We would highly recommend to others. Special thanks to Veronica and team for her artwork on this project.”</p>
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
                  <p>“Experience was very engaging, prompt replies, affordable pricing with unlimited edits. Process took a bit longer than expected, but the last few edits after initial approval was met with cooperation. Would recommend for sure! Thank you Karen/Alex and design team!”</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

<?php include('includes/footer.php'); ?>