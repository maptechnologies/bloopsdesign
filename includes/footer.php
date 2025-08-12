<?php include('includes/brands_text.php'); ?>

<section class="get-in-touch-sec">
        <div class="container">
            <div class="get-in-touch-head">
                <h4>Get In Touch With Us</h4>
                <p>Our friendly call center representatives are always available round the clock for any guidence</p>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4">
                    <div class="lets-talk-box">
                        <h5>Let’s Talk.</h5>
                    </div>
                    <div class="call-us-at-box">
                        <img src="images/webp/call-us-img-1.webp" alt="" class="img-fluid" />
                        <div class="call-us-content">
                            <p>call us at</p>
                            <a href="tel:<?php echo"$tel" ?>"><?php echo"$phone" ?></a>
                        </div>
                    </div>
                    <div class="call-us-para">
                        <p>We are available on live chat! Just ping us and we will take care of it all. </p>
                    </div>
                    <div class="call-us-at-box border-none">
                        <img src="images/webp/call-us-img-2.webp" alt="" class="img-fluid" />
                        <div class="call-us-content">
                            <p>let's chat now</p>
                            <a href="javascript:void(0);window.Tawk_API.toggle();" class="chatt">LIVE CHAT</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-8">
                    <div class="get-in-touch-form-box">
                        <form action="form-handler.php" method="post">
                            <!-- Custom Fields -->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" name="Name" placeholder="First Name *"
                                            required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="number" minlength="10" maxlength="12" pattern="\d{12}"
                                            class="form-control" placeholder="Phone *" name="Number" required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email Address *"
                                            name="Email" required>
                                        <!-- <input type="text" class="form-control" placeholder="Email Address *" name="email" data-validation="required"> -->
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea name="Message" id="msg" placeholder="Requirement *"
                                            rows="5"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-submit" name="submit">send now
                                        
                                    </button>
                                
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contact-us-sec">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12">
                    <div class="contact-left-box" data-aos="fade-right" data-aos-duration="2000">
                        <h6>contact us</h6>
                        <h5>Let's write your <br /> story, together.</h5>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="contact-right-box" data-aos="fade-left" data-aos-duration="2000">
                        <p>We do not tell you our story. We write it together. Partnering with us means a seat at the
                            table where you will be heard.</p>
                        <div class="contact-bottom-info-box">
                            <a href="contact-us.php" class="btn btn-ctn">contact us</a>
                            <a href="tel:<?php echo"$tel" ?>" class="btn-tel">
                                <img src="images/webp/second-comtact-img-1.webp" alt="" class="img-fluid">
                                <div class="second-con-box">
                                    <h6>call us at</h6>
                                    <p><?php echo"$phone" ?></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>

        <div class="container">

            <div class="row">

                <div class="col-lg-3">

                    <a href="/" class="f-first-box">

                        <img class="lazy img-fluid" data-src="images/logofn.png" alt="" />

                    </a>

                    <div class="f-first-box">

                        <p>We are a fully in-house digital agency focusing on branding, marketing, web design and
                            development with clients ranging from start-ups.</p>

                    </div>


                </div>

                <div class="col-lg-3">

                    <div class="f-links-box">

                        <h5>Partner's</h5>

                        <div class="for_img">
                            <img class="fr_1" src="images/certification.png">

                            <img class="fr_2" src="images/cards.png">

                            <img class="fr_3" src="images/credit_card_img.png">
                            <img class="fr_5" src="images/par1.jpeg">
                            <img class="fr_4" src="images/par2.jpeg">
                        </div>




                    </div>

                </div>
              <div class="col-lg-3">
    <img class="lazy img-fluid" data-src="https://cttb.education/wp-content/uploads/2020/10/bark-verified-large-1.png" alt="" style="margin-top: 120px;" />
</div>


                <!--<div class="col-lg-2 col-md-6">-->

                <!--<div class="f-links-box">-->

                <!--    <br>-->
                <!--    <br>-->
                <!--    <br>-->
                <!--    <ul>-->

                <!--        <li><a href="about">About Us</a></li>-->

                <!--        <li><a href="portfolio">Portfolio</a></li>-->

                <!--        <li><a href="pricing">Pricing</a></li>-->

                <!--        <li><a href="combo-packages">Combo Pakcages</a></li>-->

                <!--        <li><a href="contact-us">Contact us</a></li>-->

                <!--        <li><a href="terms">Terms & Condition</a></li>-->

                <!--        <li><a href="privacy">Privacy Policy</a></li>-->

                <!--    </ul>-->

                <!--</div>-->

                <!--</div>-->

                <div class="col-lg-3 col-md-6">

                    <div class="f-last-box">

                        <h5>Follow Us</h5>

                        <ul>

                            <li><a href="mailto:<?php echo"$email" ?>"><?php echo"$email" ?></a></li>

                            <li><a href="tel:+<?php echo"$tel" ?>"><?php echo"$phone" ?></a></li>

                            <li><a href="javascript:void(0);"> 200 KENSINGTON RD APT 64, TAYLORS, SC 29687 </a></li>
                            <!--  <li><a href="javascript:void(0);"> Oppenheimer Tower 10880 Wilshire Blvd. Suite 1101 Los Angeles 90024 </a></li> -->
                            <!--<li><a href="javascript:void(0);">2457 W Peterson Ave, Chicago, IL 60659</a></li>-->
                            <!--<li><a href="javascript:void(0);">76 Stafford St, Toronto, ON M6J 2S1, Canada</a></li>-->
                            <!--<li><a href="javascript:void(0);">Argus House, Greenmount Office Park, Unit 2, 6W Harold's Cross Rd, Dublin, D6W DY72</a></li>-->

                        </ul>

                        <div class="social-links-box">
                            <a href="https://www.facebook.com/profile.php?id=61550709623912&mibextid=ZbWKwL"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                            <!--<a href="javascript:;"><i class="fab fa-twitter" aria-hidden="true"></i></a>-->
                            <!-- <a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a> -->
                            <!-- <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a> -->
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </footer>



    <div class="copyright-sec">

        <div class="container">

            <div class="row">
                <div class="col-md-8">
                    <div class="copyright-box">

                        <p>Copyright © Bloops Design. All Rights Reserved 2023</p>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="t_p_wrp">
                        <a href="privacy.php">Privacy Policy | </a>

                        <a href="terms.php">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <div class="floatingform-sec floating_wrapx">

        <div class="outer-show">

            <p class="blink">let's Get Started</p>

        </div>

        <div class="banner-form">

            <h3>Avail Now</h3>

            <div class="banform">

                <div class="container">

                    <div class="row">

                        <div class="ban-form">

                            <form action="form-handler.php" method="post">

                                <!-- Custom Fields -->




                                <div class="row">

                                    <div class="col-md-12 first">

                                        <div class="fldset">

                                            <input type="text" class="form-control" name="Name"
                                                placeholder="Enter your name *" required>

                                        </div>

                                    </div>



                                    <div class="col-md-12">

                                        <div class="fldset">

                                            <input type="email" class="form-control" placeholder="Enter email here *"
                                                name="Email" required>

                                        </div>

                                    </div>



                                    <div class="col-md-12">

                                        <div class="fldset">

                                            <input type="number" minlength="10" maxlength="12" pattern="\d{12}"
                                                class="form-control" placeholder="Phone Number" name="Number" required>

                                        </div>

                                    </div>



                                    <div class="col-md-12">

                                        <div class="fldset">

                                            <textarea name="Message" id="" rows="7"
                                                placeholder="Talk About Your Project"></textarea>

                                        </div>

                                    </div>



                                    <div class="col-md-12">

                                        <div class="fldset">

                                            <input type="submit" name="submit" type="submit" value="Connect With Us">
    

                                            <div class="error mt-3 alert alert-danger text-left mb-0"
                                                style="display: none"></div>

                                            <div class="success mt-3 alert alert-success text-left mb-0"
                                                style="display: none"></div>

                                            <div class="loader" style="display: none">

                                                <img alt="loader" src="loader.gif">

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
    <div class="modal fade" id="ThankyouModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content popupform">
                <div class="modal-header">
                    <h2 class="modal-title" id="exampleModalLabel">Thank you</h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span
                            aria-hidden="true">&times;</span> </button>
                </div>
                <div class="modal-body">
                    <p>Thank you for sharing your details with our team at Websites Designs Agency. One of our website
                        development consultant will be in contact with you shortly to discuss your design ideas. </p>
                </div>
            </div>
        </div>
    </div>
    <script src="js/plugin.js"></script>
    <script src="js/custom.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <!--<script src="js/form-submit.js"></script>-->
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <!-- chat Script -->
    </script>
    <script>
    $(".top-slider").slick({
        dots: false,
        arrows: false,

        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        adaptiveHeight: !0,
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: false,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });
    </script>
    <!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/62bc56327b967b1179971f6b/1g6nr1ebt';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->


</body>
</html>