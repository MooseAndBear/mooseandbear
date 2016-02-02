<!DOCTYPE html>
<html>

<head><?php
    include "php/document--head.php";
?></head>

<body>
    <a href="#section_nav" class="home js-section-scroll"></a>

    <div class="landing--view">
        <a href="#section_nav" class="landing--logo js-section-scroll"></a>
        <a href="#section_nav" class="down--arrow js-section-scroll"></a>
    </div>

    <section id="section_nav">

        <div class="content-container">

            <h1>Welcome</h1>
            <h2>How can we help you today?</h2>

            <div class="--spacing_100"></div>

            <div class="naviagtion--buttons_container">
                <a href="#section_about" class="naviagtion--buttons_button --about --invert js-section-scroll">
                    <div class="navigation--buttons_desc">About Us</div>
                </a>
                <a href="#section_work" class="naviagtion--buttons_button --work --invert js-section-scroll">
                    <div class="navigation--buttons_desc">Our Work</div>
                </a>
                <a href="#section_info" class="naviagtion--buttons_button --info --invert js-section-scroll">
                    <div class="navigation--buttons_desc">More Info</div>
                </a>
                <a href="#section_contact" class="naviagtion--buttons_button --contact --invert js-section-scroll">
                    <div class="navigation--buttons_desc">Contact</div>
                </a>
            </div>

        </div>
        <a class="nav-to-about section--arrow"></a>

    </section><?php

    include "php/section--about.php";
    include "php/section--work.php";
    include "php/section--info.php";
    include "php/section--contact.php";

?></body>

</html>