<script>
  import { onMount } from "svelte";
  let textFront, textBack, box;

 
  window.addEventListener("scroll", onScroll);
  function onScroll() {
    textFront = document.getElementById('textFront');
    textBack = document.getElementById('textBack');
    box = document.getElementById('box');
    var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    var p = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

    console.log(p);

    let frontMove = -p*3;
    textFront.style.transform = "translateY("+frontMove+"px)";

    let backMove = p*6;
    textBack.style.transform = "translateY("+backMove+"px)";

    let boxMove = p*3;
    box.style.transform = "translateY("+boxMove+"px)";



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
    background-position: center;
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
    height: 120vh;
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
    margin-left: -40px;
    margin-top: 220px;
    z-index: 3;
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
    padding-left: 60px;
    padding-bottom: 40px;
    /* padding: 140px 20px 20px 140px; */
  }
  .cc h3 {
    font-size: 40px;
  }
  .cc h4 {
    font-size: 20px;
    font-weight: 200;
  }
  .box {
    border: white 4px solid;
    margin-top: 40px;
    padding: 10px;
  }
  .box p {
    text-align: right;
    font-size: 14px;
  }
  .box h5 {
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
    text-align: right;
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
</style>

<link
  href="https://fonts.googleapis.com/css?family=Lora:400,700,700i&display=swap"
  rel="stylesheet" />
<div class="img" />
<div class="bg4">
  <div class="top-s">
    <h2 class="v side1" id="textBack">Premium</h2>
    <h2 class="v side2" id="textFront">Content</h2>
    <div class="cc" id="box">
      <h3>Join Today</h3>
      <h4>Content Tomorrow</h4>
      <div class="box">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi magni
          ratione tenetur facere minus quo architecto. Ratione, dolorem quidem
          voluptatibus cupiditate eos voluptates, rerum quasi unde
          necessitatibus molestiae alias ipsa obcaecati autem cum perferendis ab
          quis ea nobis. Fugit, deleniti.
        </p>
        <h5>Morbi sodales</h5>
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
    </div>
  </div>
</div>
<a
  href="https://checkout.square.site/pay/36f690825069495d90719034d96cbbb6"
  target="_blank"
  style="display:inline-block;font-family:Helvetica,Arial,sans-serif;font-size:18px;line-height:48px;height:48px;padding-left:48px;padding-right:48px;color:#fff;background-color:#000;border-radius:4px;">
  Sign Up
</a>
