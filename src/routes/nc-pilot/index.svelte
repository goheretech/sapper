<script>
  import { onMount } from "svelte";
  let textFront, textBack, box;

  window.addEventListener("scroll", onScroll);

  function scrollCTA(){
    console.log('moving');
    
    var cta = document.getElementById('cta');
    cta.scrollIntoView(true);
  }

  function onScroll() {
    textFront = document.getElementById("textFront");
    textBack = document.getElementById("textBack");
    box = document.getElementById("box");
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    var p = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

    console.log(p);

    let frontMove = -p * 3;
    textFront.style.transform = "translateY(" + frontMove + "px) translateX(-30px)";

    let backMove = p * 6;
    textBack.style.transform = "translateY(" + backMove + "px)";

    let boxMove = p * 3;
    box.style.transform = "translateY(" + boxMove + "px)";
  }
</script>

<style>
  * {
    font-family: "Lora", serif;
    margin: 0;
    padding: 0;
  }
  .img {
    position: fixed;
    top: 0px;
    background: url("img/mount.jpg");
    background-size: cover;
    background-position: 50%;
    height: 100vh;
    width: 100%;
  }
  .bg4 {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 140vh;
  }
  .top-s {
    height: 100vh;
    position: relative;
  }
  .v {
    writing-mode: vertical-rl;
    font-size: 140px;
    position: absolute;
    margin: 80px 40px;
    color: white;
    font-weight: 300;
  }
  .side1 {
    margin-left: 90px;
    margin-top: 30px;
    z-index: 1;
  }
  .side2 {
    margin-left: 0px;
    margin-top: 220px;
    z-index: 3;
    transform: translateX(-30px);
  }
  .cc {
    background: rgba(86, 112, 51, 85%);
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 2;
    color: white;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding-right: 30px;
    margin-top: 70px;
    padding-top: 60px;
    margin-left: 60px;
    padding-left: 30px;
    padding-bottom: 80px;
    /* padding: 140px 20px 20px 140px; */
  }
  .cc h3 {
    font-size: 40px;
    text-align: right;
  }
  .cc h4 {
    font-size: 16px;
    font-weight: 200;
    text-align: right;
  }
  .box {
    border: white 4px solid;
    margin-top: 40px;
    padding: 40px 10px;
  }

  .art-holder {
    background: rgba(135, 167, 104, 75%);
    color: white;
    position: relative;
    z-index: 5;
  }
  .art-top {
    background: rgb(86, 112, 51);
    padding: 40px 20px;
  }
  .art-top h2 {
    font-size: 32px;
  }
  .art-top hr {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .article-body {
    padding: 20px;
  }

  #cta{
    padding-top:40px;
  }
  .cta-a{
    margin-top: 40px;
  }

  .cta-a h3{
    font-size:36px;
    margin-bottom: 40px;
  }

  .cta-a .btn222{
    color: white;
    text-decoration: none;
    padding: 10px 25px;
    border: white solid 2px;
  }
  .art-top h6 {
    font-size: 10px;
  }
  .weak {
    color: #c2c2c2;
  }
  .outlet {
    font-size: 30px;
    font-style: italic;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .bb {
    border: white 4px solid;
    display: flex;
    color: white;
    margin: 50px 20px;
  }

  .bb-title {
    font-size: 30px;
    writing-mode: vertical-rl;
    text-align: center;
    padding: 40px 20px;
    border-right: solid 4px white;
  }

  .bb-cont {
    padding: 20px 40px;
    padding-bottom: 100px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
  }

  .bb-cont h6 {
    text-align: right;
    font-size: 18px;
    margin-top: 20px;
    position: absolute;
    bottom: 70px;
    right: 10px;
  }
  .bb-cont li {
    margin: 5px 0px;
  }
  .bb-cont p {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .bb-cont a {
    position: absolute;
    bottom: 20px;
    right: 10px;
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    border: white solid 2px;
  }
  .bb-cont .monthly{
    right: 105px;
  }
  .bb-cont a:hover {
    background: white;
    color: black;
  }
</style>

<link
  href="https://fonts.googleapis.com/css?family=Lora:400,700,700i&display=swap"
  rel="stylesheet" />
<div class="img" />
<div class="bg4">
  <div class="top-s">
    <h2 class="v side1" id="textBack">Premium</h2>
    <h2 class="v side2" id="textFront" style="margin-left: 0px;">Content</h2>
    <div class="cc" id="box">

      <div class="box">
        <h3>Join Today</h3>
        <h4>Start Attracting New Business</h4>
      </div>
    </div>
  </div>
  <div id="cta">
    <div class="bb bb-1">
      <div class="bb-title">
        <h3>Content</h3>
      </div>
      <div class="bb-cont">
        <p>
          Long-form articles get attention and establish you as an influencer.
        </p>
        <ul>
          <li>36 Professionally Written Articles</li>
        </ul>
        <h6>$50/month Annually</h6>
        <a class="monthly"
          href="https://gohere.chargifypay.com/subscribe/mhkrv9dkqw68"
          target="_blank">
          Monthly
        </a>
        <a
          href="https://gohere.chargifypay.com/subscribe/48wd9x744mwb"
          target="_blank">
          Annual
        </a>
      </div>
    </div>
    <div class="bb bb-2">
      <div class="bb-title">
        <h3>Performance</h3>
      </div>
      <div class="bb-cont">
        <ul>
          <li>36 Professionally Written Articles</li>
          <li>Internal Support and Formatting</li>
          <li>Branded Articles</li>
          <li>Brand Specific Calls to Action</li>
        </ul>
        <h6>$75/month Annually</h6>
        <a class="monthly"
          href="https://gohere.chargifypay.com/subscribe/h8nwk79y8zv7"
          target="_blank">
          Monthly
        </a>
        <a
          href="https://gohere.chargifypay.com/subscribe/ybs7dgprksjn"
          target="_blank">
          Annual
        </a>
      </div>
    </div>
    <div class="bb bb-3">
      <div class="bb-title">
        <h3>Premium</h3>
      </div>
      <div class="bb-cont">
        <ul style="margin-bottom: 20px;">
          <li>36 Professionally Written Articles</li>
          <li>Internal Support and Formatting</li>
          <li>Branded Articles</li>
          <li>Brand Specific Calls to Action</li>
          <li>Updated Customized Website & Branding</li>
          <li>Targeted Advertisments</li>
        </ul>
        <h6>$10,000 with 50% deposit</h6>
        <a
          href="https://gohere.chargifypay.com/subscribe/5b77j5xf24cj"
          target="_blank">
          Deposit
        </a>
      </div>
    </div>
  </div>
  <div class="art-holder">
    <div class="art-top">
      <h2>Adaptogenic Herbs and Stress- Analysis</h2>
      <hr />
      <h6>By Elizabeth Balistreri and Dr. Charles Reid</h6>
      <h6 class="weak">
        Updated on: November 9, 2019 / 11:09 AM / goHere Consulting
      </h6>
    </div>
    <div class="article-body">
      <p>
        Everyone encounters stress in their lives. You know the feeling: your
        palms start to sweat, your heart races, your muscles tense, your breath
        quickens, and you feel supercharged. These feelings come from the
        combination of hormones released in the body when encountering a
        stressor--hormones that set off a cascade of biological events that
        almost instantaneously prepare you to react with a fight or flight
        response.
      </p>
      <h3 class="outlet outlet-right">
        "Stress is essential to human survival"
      </h3>
      <p>
        From an evolutionary perspective, stress is essential to human survival.
        It warns us when danger is near and prepares the body to react
        appropriately. In the modern world, we aren’t exposed to nearly as many
        life-threatening situations as, say, a caveman, but that doesn’t stop
        the body from over-reacting to everyday toils like traffic jams and
        pressure at work. It has no way of differentiating between
        life-threatening and non-life threatening stressors, reacting the same
        way to running into a bear in the woods as it would to giving a big
        presentation at work.
        <br />
        <br />
        Our ancestors were also never exposed to the cocktail of unique
        stressors that populate our modern world--a place filled with ubiquitous
        chemical and biological toxins that keep our bodies in a near constant
        state of stress.
        <br />
        <br />
        Occasional stress is nothing to stress about, but chronic stress can be
        problematic because the chemicals that rev you up for fight or
        flight--cortisol, adrenaline, norepinephrine--have long-term damaging
        effects on practically every system in the body. Therefore, chronic
        stress is a key mechanism in the development of many diseases, like
        heart disease, obesity, depression, anxiety, and gastrointestinal
        disorders--to name a few.
        <br />
        <br />
        The effects of chronic stress on human health are only part of its
        intrigue to researchers. Stress is also associated with fatigue,
        affecting two key behavioral capabilities world leaders and corporations
        are particularly interested: productivity and stamina.
        <br />
        <br />
        During World War II, Russian researchers were interested in identifying
        a chemical that helps people maintain the ability to complete mentally
        or physically taxing work in times of prolonged or intense stress--the
        perfect drug for the perfect soldier. The results of this project were
        enormous; they published 1,009 studies on the topic, supplying huge
        amounts of information on stress protection, almost all focusing on the
        physiological effects of adaptogenic herbs.
      </p>
      <h3 class="outlet outlet-left">
        "Adaptogenic herbs have a stimulatory effect that is key in moderating
        the stress response."
      </h3>
      <p>
        Adaptogenic herbs--the most common being eleutherococcus senticosus,
        rhodiola rosea, and schisandra chinensis--have a stimulatory effect that
        is key in moderating the stress response. These herbs temper the
        intensity of all phases of the stress response and even diminish the
        body’s sensitivity to future stressors. Compare the pink and blue lines
        in the image below to see how these phases of the stress response are
        altered by..
      </p>
      <div class="cta-a">
      <hr style="margin-bottom: 40px;">
        <h3>
        Sign up to view the full article
        </h3>
        <button class="btn222" on:click="{scrollCTA}">Find Your Package</button>
      </div>
    </div>
  </div>

</div>

