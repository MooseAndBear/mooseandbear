<!DOCTYPE html>
<html>

<head><?php
	include "php/document--head.php";
?></head>

<body>
    <a class="home"></a>
    
    <div class="landing--view">
      <a class="landing--logo"></a>
      <a class="down--arrow"></a>
    </div>

    <section id="section_nav">

      <div class="content-container">

        <h1>Welcome</h1>
        <h2>How can we help you today?</h2>

        <div class="--spacing_100"></div>

        <div class="naviagtion--buttons_container">
          <a class="naviagtion--buttons_button --about --invert">
            <div class="navigation--buttons_desc">About Us</div>
          </a>
          <a class="naviagtion--buttons_button --work --invert">
            <div class="navigation--buttons_desc">Our Work</div>
          </a>
          <a class="naviagtion--buttons_button --info --invert">
            <div class="navigation--buttons_desc">More Info</div>
          </a>
          <a class="naviagtion--buttons_button --contact --invert">
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