<?php include('includes/header.php'); ?> 

<section class="banner-sec about-banner-sec logo-banner-sec">
    <div class="header-slider banner-txt-box">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="anim-banner-txt" data-aos="fade-right" data-aos-duration="2000">
                        <h6>Non-Fungible Token (NFT)</h6>
                        <h5>Development Services</h5>
                        <p>Creating Incredible NFTs That Are Sure To Go Viral In No-Time</p>
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
                        <img src="images/webp/nft-banner-img.webp" alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="help-you sec-py">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="help-heading">
                    <h2 class="sec-title">What Artwork is sold on <span> NFT marketplaces? </span></h2>
                    <p>Literally Everything! Be it 3D animation, photos, videos, sports footage, gifs and 3D models. Below are the
                        services we offer</p>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-lg-12">
                <div class="anim-parent">
                    <ul class="animation-tabs nav nav-tabs">
                        <li class="HowToHelp_box_wrap item-1" data-box="box-1">
                            <a class="HowToHelp_box" data-toggle="tab" href="#explainer">
                                <img src="images/webp/how-can1.webp" alt="">
                                <Span> Game Development </Span>
                            </a>
                        </li>
                        <li class="HowToHelp_box_wrap item-2" data-box="box-2">
                            <a class="HowToHelp_box" data-toggle="tab" href="#motion">
                                <img src="images/webp/how-can2.webp" alt="">
                                <span> Animation </span>
                            </a>
                        </li>
                        <li class="HowToHelp_box_wrap item-3" data-box="box-3">
                            <a class="HowToHelp_box active" data-toggle="tab" href="#anim-2d">
                                <img src="images/webp/how-can3.webp" alt="">
                                <span> 3D Modeling </span>
                            </a>
                        </li>
                        <li class="HowToHelp_box_wrap item-4" data-box="box-4">
                            <a class="HowToHelp_box" data-toggle="tab" href="#anim-3d">
                                <img src="images/webp/how-can4.webp" alt="">
                                <span> Environment Modeling </span>
                            </a>
                        </li>
                        <li class="HowToHelp_box_wrap item-5" data-box="box-5">
                            <a class="HowToHelp_box" data-toggle="tab" href="#typo">
                                <img src="images/webp/how-can5.webp" alt="">
                                <span> Avatar </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="animation-tabs-content tab-content">
                    <div id="explainer" class="tab-pane fade">
                        <p>Gaming is a massive market with a volume of over $177 billion. Surprisingly the cryptocurrency market is
                            much larger. We are a world-class game development agency helping turns ideas into fully playable games as
                            blockchain gaming is the next big thing.
                        </p>
                        <div class="help-sec-buttons banner-buttons">
                            <a href="javascript:;" class="btn btn-view-pack popupBox" aria-label="Left Align"><span class="none_mobile dft-button">Let's Get Started!</span></a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();" class="nft-chat-btn btn btn-view-pack chat" aria-label="Right Align">
                                <span class="ban-btn2 none_mobile dft-button chat">Live Chat</span>
                            </a>
                        </div>
                    </div>

                    <div id="motion" class="tab-pane fade">
                        <p>You should not settle for a digital solution that isn’t tuned to your artistic vision. Find the best NFT
                            animation services you need to help you successfully meet your project planning goals and help you earn
                            millions. Get started today with an expert animator. </p>
                        <div class="help-sec-buttons banner-buttons nft-banner-btn">
                            <a href="javascript:;" class="btn btn-view-pack popupBox" aria-label="Left Align"><span class="none_mobile dft-button">Let's Get Started!</span></a>
                            <a href="javascript:;" class="btn nft-chat-btn btn-view-pack chat" aria-label="Right Align"><span class="ban-btn2 none_mobile dft-button chat">Live Chat</span>
                            </a>
                        </div>
                    </div>

                    <div id="anim-2d" class="tab-pane fade in active show">
                        <p>
                            Want to earn millions? The NFT artwork Everydays: The 5000 First Days sold for a record-breaking $69M.
                            Similarly, you can too! Get your 3D Modelling NFT artwork created by us and start selling your 3D art at
                            the NFT marketplace.
                        </p>
                        <div class="help-sec-buttons banner-buttons nft-banner-btn">
                            <a href="javascript:;" class="btn btn-view-pack popupBox" aria-label="Left Aliban-btn2gn"><span class="none_mobile dft-button">Let's Get Started!</span></a>
                            <a href="javascript:void(0);window.Tawk_API.toggle();" class="btn nft-chat-btn btn-view-pack chat" aria-label="Right Align"><span class="ban-btn2 none_mobile dft-button chat">Live Chat</span>
                            </a>
                        </div>
                    </div>

                    <div id="anim-3d" class="tab-pane fade">
                        <p>
                            Do you think you have an idea to become a successful NFT seller? Our environment modeling artwork designer
                            is ready to help you launch the next big collection of your NFTs, giving you a chance to own digital art
                            and make millions out of it.
                        </p>
                        <div class="help-sec-buttons banner-buttons nft-banner-btn">
                            <a href="javascript:;" class="btn btn-view-pack popupBox" aria-label="Left Align">
                                <span class="none_mobile dft-button">Let's Get Started!</span></a>
                            <a href="javascript:;" class="btn nft-chat-btn btn-view-pack chat" aria-label="Right Align"><span class="ban-btn2 none_mobile dft-button chat">Live Chat</span>
                            </a>
                        </div>
                    </div>

                    <div id="typo" class="tab-pane fade">
                        <p>
                            The NFT based artwork is here to stay, and now, you can be a part of it! Get your crypto avatar designed
                            by NFT designerz and turn it into NFT artwork for sale. NFT avatars are images of a character, usually
                            from the shoulders up, frequently used as digital profile pictures.
                        </p>
                        <div class="help-sec-buttons banner-buttons nft-banner-btn">
                            <a href="javascript:;" class="btn btn-view-pack popupBox" aria-label="Left Align">
                                <span class="none_mobile">Let's Get Started!</span>
                            </a>
                            <a href="javascript:;" class="btn nft-chat-btn btn-view-pack chat" aria-label="Right Align">
                                <span class="ban-btn2 none_mobile dft-button chat">Live Chat</span>
                            </a>
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
            <p>We are well aware of the competition. That is the reason why we have a fair pricing model. <br />We ensure quality over quantity on each order.</p>
        </div>
        <div class="">
            <div class="row packages-responsive-slider">
                <div class="col-lg-4">
                    <div class="package-main-box">
                        <div class="package-pr">
                            <h2>$299</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>NFT LABS LITE</h3>
                                <p>Premium Base Character Creation</p>
                            </div>
                            <!-- <div class="fright">
                                <h4>75% OFF<span class="cutprice">$1,196</span></h4>
                            </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>Base Character Creation</li>
                                        <li>3 Traits/Accessories</li>
                                        <li>2 revisions included</li>
                                        <li>Sourcefile</li>
                                        <li>Fully refundable until revision call</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="view-detail-box">
                            <a href="pricing_view_details-nft-labs" class="btn view-det">View Detail</a>
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
                            <h2>$2,400</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>NFT ENTREPRENEUR</h3>
                                <p>NFT Universe including 1,000 character variations.</p>
                            </div>
                            <!-- <div class="fright">
                                <h4>75% OFF<span class="cutprice">$9,600</span></h4>
                            </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>Base Character</li>
                                        <li>30 Traits/Accessories</li>
                                        <li>1,000 Variations</li>
                                        <li>Collection Generation</li>
                                        <li>Metadata</li>
                                        <li>Source Files</li>
                                        <li>2 Revisions included</li>
                                        <li>Fully refundable until revision call</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      <!--   <div class="view-detail-box">
                            <a href="pricing_view_details-nft-entrepreneur" class="btn view-det">View Detail</a>
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
                            <h2>$4,999</h2>
                        </div>
                        <div class="packtitles">
                            <div class="fleft">
                                <h3>NFT MOONSHOT</h3>
                                <p>NFT Universe including 10,000 character variations and 3 revisions.</p>
                            </div>
                            <!-- <div class="fright">
                                <h4>75% OFF<span class="cutprice">$19,996</span></h4>
                            </div> -->
                        </div>
                        <div class="package-content">
                            <div class="slim-scroll">
                                <div>
                                    <ul>
                                        <li>Base Character</li>
                                        <li>70 Traits/Accessories</li>
                                        <li>10,000 Variations</li>
                                        <li>Collection Generation</li>
                                        <li>Metadata</li>
                                        <li>Source Files</li>
                                        <li>3 Revisions included</li>
                                        <li>Fully refundable until revision call</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       <!--  <div class="view-detail-box">
                            <a href="pricing_view_details-nft-moonshot" class="btn view-det">View Detail</a>
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
            </div>
        </div>
        <a href="pricing" class="btn btn-view-pack">view all packages</a>
    </div>
</section>

<section class="gallery-sec">
    <div class="container-fluid">
        <div class="process-head-box" data-aos="fade-down" data-aos-duration="2000">
            <h4>Create your NFT's</h4>
            <p>NFTs we design for you are as good as the ones you can see here</p>
        </div>
        <div class="row web-design-gallery-slider">
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-1.webp">
                        <img src="images/portfolio/webp/port-img-1.webp">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-2.webp">
                        <img src="images/portfolio/webp/port-img-2.webp">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-3.webp">
                        <img src="images/portfolio/webp/port-img-3.webp">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-4.webp">
                        <img src="images/portfolio/webp/port-img-4.webp">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-5.webp">
                        <img src="images/portfolio/webp/port-img-5.webp">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-6.webp">
                        <img src="images/portfolio/webp/port-img-6.webp">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-7.webp">
                        <img src="images/portfolio/webp/port-img-7.webp">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-8.webp">
                        <img src="images/portfolio/webp/port-img-8.webp">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 p-0">
                <div class="gallery-img-box">
                    <a data-fancybox="gallery" href="images/portfolio/webp/port-img-9.webp">
                        <img src="images/portfolio/webp/port-img-9.webp">
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
            <h4>Your NFTs, <br> On Your Terms</h4>
        </div>
        <div class="row">
            <div class="col-lg-8 col-md-12">
                <div class="how-we-img-box">
                    <img src="images/webp/how-we-img.webp" alt="" class="img-fluid" />
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="v-anim-process-box logo-process-box">
                    <h6>Be In Control</h6>
                    <p>You choose whether to mint your NFTs on Blockparty, Ethereum, Solana, and others </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-12">
                <div class="v-anim-process-box anim-2 logo-process-box">
                    <h6>Decide your Drop</h6>
                    <p>Choose whether to create unique NFTs, Multiples Editions, Sales, Auctions and collection drops</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="v-anim-process-box anim-3 logo-process-box">
                    <h6>Expert Artists</h6>
                    <p>Bring your own idea to life and put experienced artists to create your NFTs that go viral.</p>
                </div>
            </div>
            <div class="col-lg-4 col-md-12">
                <div class="v-anim-process-box anim-4 logo-process-box">
                    <h6>Select What's Trending</h6>
                    <p>You can choose to see trends that are not tailored for you by selecting a specific trend</p>
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
                <a href="javascript:void(0);window.Tawk_API.toggle();" class="btn btn-start chatt">start live chat</a>
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