<?php include('includes/header.php'); ?>

<section class="banner-sec about-banner-sec content-banner-sec e-commerce-banner-sec">
    <div class="header-slider banner-txt-box">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="anim-banner-txt" data-aos="fade-right" data-aos-duration="2000">
                        <h6>OFFERING ECOMMERCE SERVICES YOU</h6>
                        <h5>need to start selling online in minutes</h5>
                        <p>We provide e-commerce services, redesigning and blogs that are needed to accelerate your
                            business growth. We help you build a digital brand successfully to improve the overall
                            services.</p>
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
                        <img src="images/webp/e-commerce-banner-img.webp" alt="" class="img-fluid" />
                    </div>
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
                    <h4>E-Commerce Solutions For Your Online Business</h4>
                    <p>One of the foremost fronts of business these days are websites and online platforms to
                        perform sales and product displays. There are a great many number of websites available
                        where you can submit your products for display and sales but one of these third party sites
                        and platforms can ensure the level of personalization and you-centeredness as can offer a
                        personal e-Commerce site. This is why we often recommend our customers with products to sell
                        to go for our e-Commerce site services. Our well designed e-Commerce sites help you achieve
                        your sales targets in no time. We study and understand the unique needs of each client that
                        we get in business with and prepare a solution which reflects the deep research we do.</p>
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
                        <img src="images/webp/web-content-serv-img-1.png" alt="" class="img-fluid" />
                        <h6>Reach New Customers</h6>
                        <p>e-Commerce selling can take on many different formats and each channel has its own unique
                            audience that can be reached by sellers. e-Commerce sites can help you reach many
                            international shoppers and social sites can reach new demographics.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/web-content-serv-img-2.png" alt="" class="img-fluid" />
                        <h6>Content Marketing Strategy</h6>
                        <p>An online presence allows you to provide much needed information about your products and
                            services to customers. e-Commerce provides more information regarding your business and
                            how to use your products. Email marketing can be linked with brand's story.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/web-content-serv-img-3.png" alt="" class="img-fluid" />
                        <h6>Serve Niche Markets</h6>
                        <p>e-Commerce makes serving niche markets even easier. Serving a niche market is easier to
                            distribute products online and open your business to a greater depth of consumers. They
                            have complete purchases and e-Commerce makes it easier to hit that buy button.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12">
                    <div class="content-serv-box" data-aos="zoom-in" data-aos-duration="2000">
                        <img src="images/webp/web-content-serv-img-1.png" alt="" class="img-fluid" />
                        <h6>Acquire New Customers with Search Engine Visibility </h6>
                        <p> Online retail is driven by traffic from search engines and it is common for customers to
                            follow certain link in search engine results and land on e-Commerce website. The
                            additional source of traffic can become the major source for some e-Commerce businesses.
                        </p>
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
                            <h2>$999 </h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>E-Commerce Basic</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$3020</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>E-Commerce Website Design and Development</li>
                                        <li>Theme Based Design</li>
                                        <li>2 Banner Designs</li>
                                        <li>Sliding Banner</li>
                                        <li>3 Stock Photos</li>
                                        <li>06 Revisions</li>
                                        <li>Hover Effects</li>
                                        <li>Up to 10 Products</li>
                                        <li>Up to 3 Categories</li>
                                        <li>Content/Inventory Management System</li>
                                        <li>Easy Product Search Bar</li>
                                        <li>Shopping Cart Integration</li>
                                        <li>Payment Module Integration</li>
                                        <li>Direct Checkout</li>
                                        <li>Sign up Checkout</li>
                                        <li>Tax calculator Integration</li>
                                        <li>Shipping calculator Integration</li>
                                        <li>Wishlist</li>
                                        <li>Complete W3C Validation</li>
                                        <li>Dedicated Team of Designers and Developers</li>
                                        <li>Complete Deployment</li>
                                        <li class="heading">– Value Added Services</li>
                                        <li>Complete Source Files</li>
                                        <li>Dedicated Project Manager</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>
                                        <li> *NO MONTHLY OR ANY HIDDEN FEE*</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_detailsfcb8?package=E-Commerce%20Startup" class="btn view-det">View Detail</a> </div> -->
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
                            <h2>$1399</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>E-Commerce Startup </h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$5420</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>E-Commerce Website Design and Development</li>
                                        <li>High-end Theme Based Design</li>
                                        <li>5 Banner Designs</li>
                                        <li>Sliding Banner</li>
                                        <li>5 Stock Photos</li>
                                        <li>12 Revisions</li>
                                        <li>Hover Effects</li>
                                        <li>Up to 25 Products</li>
                                        <li>Up to 5 Categories</li>
                                        <li>Content/Inventory Management System</li>
                                        <li>Easy Product Search Bar</li>
                                        <li>Shopping Cart Integration</li>
                                        <li>Payment Module Integration</li>
                                        <li>Direct Checkout</li>
                                        <li>Sign up Checkout</li>
                                        <li>Tax calculator Integration</li>
                                        <li>Shipping calculator Integration</li>
                                        <li>Wishlist</li>
                                        <li>Search Engine Submission</li>
                                        <li>Social Media Pages Integration</li>
                                        <li>Facebook “Like” Plugin integration</li>
                                        <li>Sitemap</li>
                                        <li>Complete W3C Validation</li>
                                        <li>Dedicated Team of Designers and Developers</li>
                                        <li>Complete Deployment</li>
                                        <li class="heading">– Value Added Services</li>
                                        <li>Complete Source Files</li>
                                        <li>Dedicated Project Manager</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_detailsf716?package=E-Commerce%20Professional" class="btn view-det">View Detail</a> </div> -->
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
                            <h2>$2399</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>E-Commerce Professional</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$14220</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>E-Commerce Website Design and Development</li>
                                        <li>Customized Theme Based Design</li>
                                        <li>7 Banner Designs</li>
                                        <li>Sliding Banner</li>
                                        <li>7 Stock Photos</li>
                                        <li>Unlimited Revisions</li>
                                        <li>Hover Effects</li>
                                        <li>Up to 100 Products</li>
                                        <li>Up to 10 Categories</li>
                                        <li>Content/Inventory Management System</li>
                                        <li>Mobile Responsive</li>
                                        <li>Easy Product Search Bar</li>
                                        <li>Shopping Cart Integration</li>
                                        <li>Payment Module Integration</li>
                                        <li>Direct Checkout</li>
                                        <li>Sign up Checkout</li>
                                        <li>Tax calculator Integration</li>
                                        <li>Shipping calculator Integration</li>
                                        <li>Wishlist</li>
                                        <li>Import/Export Order</li>
                                        <li>Bulk Import/export of Order information</li>
                                        <li>Search Engine Submission</li>
                                        <li>SEO Friendly</li>
                                        <li>Web Analytics Integration</li>
                                        <li>Monthly Traffic Reporting</li>
                                        <li>Social Media Pages Integration</li>
                                        <li>Facebook “Like” Plugin integration</li>
                                        <li>Sitemap</li>
                                        <li>Complete W3C Validation</li>
                                        <li>Dedicated Team of Designers and Developers</li>
                                        <li>Complete Deployment</li>
                                        <li class="heading">– Value Added Services</li>
                                        <li>Complete Source Files</li>
                                        <li>Dedicated Project Manager</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>
                                        <li> *NO MONTHLY OR ANY HIDDEN FEE*</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_detailsf26c?package=E-Commerce%20Elite" class="btn view-det">View Detail</a> </div> -->
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
                            <h2>$3399</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>E-Commerce Identity</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$3020</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>E-Commerce Website Design and Development</li>
                                        <li>Customized Tailor-Made Design</li>
                                        <li>Professional, Modern, Unique Design</li>
                                        <li>10 Banner Designs</li>
                                        <li>Sliding Banner</li>
                                        <li>10 Stock Photos</li>
                                        <li>Unlimited Revisions</li>
                                        <li>Special Hover Effects</li>
                                        <li>Up to 500 Products</li>
                                        <li>Up to 25 Categories</li>
                                        <li>Up to 25 Categories</li>
                                        <li>Product Reviews &amp; Ratings</li>
                                        <li>Content/Inventory Management System</li>
                                        <li>Mobile Responsive</li>
                                        <li>User Signup Area</li>
                                        <li>User Sign-in Area</li>
                                        <li>User Dashboard Area</li>
                                        <li>Auto Email for Profile Validation &amp; Notification(s)</li>
                                        <li>Easy Product Search Bar</li>
                                        <li>Shopping Cart Integration</li>
                                        <li>Payment Module Integration</li>
                                        <li>Direct Checkout</li>
                                        <li>Sign up Checkout</li>
                                        <li>Tax calculator Integration</li>
                                        <li>Shipping calculator Integration</li>
                                        <li>Wishlist</li>
                                        <li>Import/Export Order</li>
                                        <li>Bulk Import/export of Order information</li>
                                        <li>Search Engine Submission</li>
                                        <li>SEO Friendly</li>
                                        <li>Web Analytics Integration</li>
                                        <li>Monthly Traffic Reporting</li>
                                        <li>Social Media Pages Integration</li>
                                        <li>Facebook “Like” Plugin integration</li>
                                        <li>Blog page (If Required)</li>
                                        <li>Sitemap</li>
                                        <li>Complete W3C Validation</li>
                                        <li>Dedicated Team of Designers and Developers</li>
                                        <li>Complete Deployment</li>
                                        <li class="heading">– Value Added Services</li>
                                        <li>Complete Source Files</li>
                                        <li>Dedicated Project Manager</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>
                                        <li> *NO MONTHLY OR ANY HIDDEN FEE*</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_detailsfcb8?package=E-Commerce%20Startup" class="btn view-det">View Detail</a> </div> -->
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
                            <h2>$4999 </h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>E-Commerce Elite</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$3020</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>E-Commerce Website Design and Development</li>
                                        <li>Customized Tailor-Made Design</li>
                                        <li>Professional, Modern, Interactive, Dynamic, Unique Design</li>
                                        <li>User-friendly Navigation</li>
                                        <li>20 Banner Designs</li>
                                        <li>Sliding Banner</li>
                                        <li>20 Stock Photos</li>
                                        <li>Unlimited Revisions</li>
                                        <li>Special Hover Effects</li>
                                        <li>Content/Inventory Management System</li>
                                        <li>Mobile Responsive</li>
                                        <li>Unlimited Products</li>
                                        <li>Unlimited Categories</li>
                                        <li>Product Reviews &amp; Ratings</li>
                                        <li>Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By
                                            Date</li>
                                        <li>Multiple Filtrations Option</li>
                                        <li>Multiple Shorting Options (Newest / Price / Alphabetical / Rating)</li>
                                        <li>Product View with Multiple Views</li>
                                        <li>Product Rating</li>
                                        <li>Product Detail with Similar Product Range</li>
                                        <li>Coupon Code Generation (by category and product)</li>
                                        <li>Product Comparison</li>
                                        <li>User Signup Area</li>
                                        <li>User Sign-in Area</li>
                                        <li>User Dashboard Area</li>
                                        <li>Auto Email for Profile Validation &amp; Notification(s)</li>
                                        <li>Last Purchase Order Details (download invoice)</li>
                                        <li>Customer Login / Registration via Social Login Facebook and Google+</li>
                                        <li>Customer profile management (From Backend and Frontend)</li>
                                        <li>Discounted Products Showcase</li>
                                        <li>New Arrival Products Showcase</li>
                                        <li>Discount Coupons</li>
                                        <li>Easy Product Search Bar</li>
                                        <li>Shopping Cart Integration</li>
                                        <li>Payment Module Integration</li>
                                        <li>Multiple Currency Integration</li>
                                        <li>Direct Checkout</li>
                                        <li>Sign up Checkout</li>
                                        <li>Tax calculator Integration</li>
                                        <li>Shipping calculator Integration</li>
                                        <li>Wishlist</li>
                                        <li>Import/Export Order</li>
                                        <li>Bulk Import/export of Order information</li>
                                        <li>Bulk Product Upload From Excel Sheet</li>
                                        <li>Export order into excel sheet</li>
                                        <li>Live Chat Integration</li>
                                        <li>Search Engine Submission</li>
                                        <li>SEO Friendly</li>
                                        <li>Web Analytics Integration</li>
                                        <li>Monthly Traffic Reporting</li>
                                        <li>Social Media Pages Integration</li>
                                        <li>Facebook Shop Setup</li>
                                        <li>Facebook “Like” Plugin integration</li>
                                        <li>Blog page (If Required)</li>
                                        <li>Sitemap</li>
                                        <li>Complete W3C Validation</li>
                                        <li>Dedicated Team of Designers and Developers</li>
                                        <li>Complete Deployment</li>
                                        <li class="heading">– Value Added Services</li>
                                        <li>Complete Source Files</li>
                                        <li>Dedicated Project Manager</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>
                                        <li> *NO MONTHLY OR ANY HIDDEN FEE*</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_detailsfcb8?package=E-Commerce%20Startup" class="btn view-det">View Detail</a> </div> -->
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
                            <h2>$7398 </h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>E-Commerce Corporate</h3>
                                <p>Suitable for Small Startups</p>
                            </div>
                            <!-- <div class="fright">
                                            <h4>75% OFF<span class="cutprice">$3020</span></h4>
                                        </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>E-Commerce Website Design and Development</li>
                                        <li>Customized Tailor-Made Design</li>
                                        <li>Professional, Modern, Interactive, Dynamic, Unique Design</li>
                                        <li>User-friendly Navigation</li>
                                        <li>20 Banner Designs</li>
                                        <li>Sliding Banner</li>
                                        <li>20 Stock Photos</li>
                                        <li>Unlimited Revisions</li>
                                        <li>Special Hover Effects</li>
                                        <li>Content/Inventory Management System</li>
                                        <li>Mobile Responsive</li>
                                        <li>Unlimited Products</li>
                                        <li>Unlimited Categories</li>
                                        <li>Product Reviews &amp; Ratings</li>
                                        <li>Product Summary Reports (Out of stock / Most Sold / Lowest sale etc) By
                                            Date</li>
                                        <li>Multiple Filtrations Option</li>
                                        <li>Multiple Shorting Options (Newest / Price / Alphabetical / Rating)</li>
                                        <li>Product View with Multiple Views</li>
                                        <li>Product Rating</li>
                                        <li>Product Detail with Similar Product Range</li>
                                        <li>Coupon Code Generation (by category and product)</li>
                                        <li>Product Comparison</li>
                                        <li>User Signup Area</li>
                                        <li>User Sign-in Area</li>
                                        <li>User Dashboard Area</li>
                                        <li>Auto Email for Profile Validation &amp; Notification(s)</li>
                                        <li>Last Purchase Order Details (download invoice)</li>
                                        <li>Customer Login / Registration via Social Login Facebook and Google+</li>
                                        <li>Customer profile management (From Backend and Frontend)</li>
                                        <li>Discounted Products Showcase</li>
                                        <li>New Arrival Products Showcase</li>
                                        <li>Discount Coupons</li>
                                        <li>Easy Product Search Bar</li>
                                        <li>Shopping Cart Integration</li>
                                        <li>Payment Module Integration</li>
                                        <li>Multiple Currency Integration</li>
                                        <li>Direct Checkout</li>
                                        <li>Sign up Checkout</li>
                                        <li>Tax calculator Integration</li>
                                        <li>Shipping calculator Integration</li>
                                        <li>Wishlist</li>
                                        <li>Import/Export Order</li>
                                        <li>Bulk Import/export of Order information</li>
                                        <li>Bulk Product Upload From Excel Sheet</li>
                                        <li>Export order into excel sheet</li>
                                        <li>Live Chat Integration</li>
                                        <li>Search Engine Submission</li>
                                        <li>SEO Friendly</li>
                                        <li>Web Analytics Integration</li>
                                        <li>Monthly Traffic Reporting</li>
                                        <li>Social Media Pages Integration</li>
                                        <li>Facebook Shop Setup</li>
                                        <li>Facebook “Like” Plugin integration</li>
                                        <li>Blog page (If Required)</li>
                                        <li>Sitemap</li>
                                        <li>Complete W3C Validation</li>
                                        <li>Dedicated Team of Designers and Developers</li>
                                        <li>Complete Deployment</li>
                                        <li class="heading">– Value Added Services</li>
                                        <li>Complete Source Files</li>
                                        <li>Dedicated Project Manager</li>
                                        <li>100% Ownership Rights</li>
                                        <li>100% Satisfaction Guarantee</li>
                                        <li>Money Back Guarantee *</li>
                                        <li>Unlimited Revisions</li>

                                        <li> *NO MONTHLY OR ANY HIDDEN FEE*</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box"> <a href="pricing_view_detailsfcb8?package=E-Commerce%20Startup" class="btn view-det">View Detail</a> </div> -->
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
            <p>We have years of experience in digital marketing and design. We have spent years in <br /> delivering
                high quality work for our customers. Have a look at our recent work for our customers</p>
        </div>
        <div class="row web-design-gallery-slider">
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/1.webp">
                        <img src="images/portfolio/ecommerce/webp/1.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/2.webp">
                        <img src="images/portfolio/ecommerce/webp/2.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/3.webp">
                        <img src="images/portfolio/ecommerce/webp/3.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/4.webp">
                        <img src="images/portfolio/ecommerce/webp/4.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/5.webp">
                        <img src="images/portfolio/ecommerce/webp/5.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/6.webp">
                        <img src="images/portfolio/ecommerce/webp/6.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/7.webp">
                        <img src="images/portfolio/ecommerce/webp/7.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/8.webp">
                        <img src="images/portfolio/ecommerce/webp/8.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/9.webp">
                        <img src="images/portfolio/ecommerce/webp/9.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/10.webp">
                        <img src="images/portfolio/ecommerce/webp/10.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/11.webp">
                        <img src="images/portfolio/ecommerce/webp/11.webp">
                    </a>
                </div>
            </div>
            <div class="col-md-4 col-sm-6 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/ecommerce/webp/12.webp">
                        <img src="images/portfolio/ecommerce/webp/12.webp">
                    </a>
                </div>
            </div>
        </div>
        <a href="javascript:void(0);" class="popupBox btn btn-submit">lets get started</a>
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