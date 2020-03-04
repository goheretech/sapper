<script>
  import Nav from "../components/Nav.svelte";
  let form = {
    name: "",
    project: "",
    phone: "",
    email: "",
    website: ""
  };

  let error = false;
  let showThanks = false;
  async function sendContactMessage() {
    console.log("Send form...", form);
    let db = firebase.firestore();
    try {
      await db.collection("leads").add(form);
      showThanks = true;
      alert('submitted')
    } catch (e) {
      console.log(";(", e);
      console.log("Big Error: " + e);
      error = true;
    }
  }

  const brands = [
    {
      img: "img/brands/ico-09.png",
      name: " Svelte"
    },
    {
      img: "img/brands/ico-02.png",
      name: " Svelte"
    },
    {
      img: "img/brands/ico-03.png",
      name: " Svelte"
    },
    {
      img: "img/brands/ico-04.png",
      name: " Svelte"
    },
    {
      img: "img/brands/ico-05.png",
      name: " Svelte"
    },
    {
      img: "img/brands/ico-06.png",
      name: " Svelte"
    },
    {
      img: "img/brands/ico-07.png",
      name: " Svelte"
    },
    {
      img: "img/brands/ico-08.png",
      name: " Svelte"
    },
    {
      img: "img/brands/ico-10.png",
      name: " Svelte"
    }
  ];
  (function($) {
    $(document).ready(function() {
      $.jScrollability([
        {
          selector: ".astro",
          start: function($el) {
            return $el.offset().top;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 1000;
          },
          fn: {
            bottom: {
              start: 100,
              end: -400,
              unit: "px"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".planet",
          start: function($el) {
            return $el.offset().top + 500;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 1000;
          },
          fn: {
            top: {
              start: -50,
              end: -20,
              unit: "%"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".keywords h3:first-child",
          start: 0,
          end: 1000,
          fn: {
            right: {
              start: 0,
              end: 90,
              unit: "vw"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".keywords h3:last-child",
          start: 0,
          end: 1000,
          fn: {
            right: {
              start: 90,
              end: 0,
              unit: "vw"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".hero .text",
          start: function($el) {
            return $el.offset().top+700;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 700;
          },
          fn: {
            opacity: {
              start: 100,
              end: 0,
              unit: "%"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".feed h3",
          start: function($el) {
            return $el.offset().top + 100;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 500;
          },
          fn: {
            opacity: {
              start: 0,
              end: 100,
              unit: "%"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".feed h2",
          start: function($el) {
            return $el.offset().top;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 500;
          },
          fn: {
            opacity: {
              start: 0,
              end: 100,
              unit: "%"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".feed p",
          start: function($el) {
            return $el.offset().top + 200;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 900;
          },
          fn: {
            opacity: {
              start: 0,
              end: 100,
              unit: "%"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".quote p",
          start: function($el) {
            return $el.offset().top - 500;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 1500;
          },
          fn: {
            top: {
              start: 200,
              end: -50,
              unit: "px"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".form__section",
          start: function($el) {
            return $el.offset().top + 200;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 100;
          },
          fn: {
            opacity: {
              start: 0,
              end: 100,
              unit: "%"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".call h2:last-child",
          start: function($el) {
            return $el.offset().top - 200;
          },
          end: function($el) {
            return $el.offset().top + $el.height();
          },
          fn: {
            opacity: {
              start: 0,
              end: 100,
              unit: "%"
            }
          }
        }
      ]);
      $.jScrollability([
        {
          selector: ".cta h3",
          start: function($el) {
            return $el.offset().top - 500;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 500;
          },
          fn: {
            opacity: {
              start: 0,
              end: 100,
              unit: "%"
            }
          }
        }
      ]);
    });
  })(jQuery);
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  section {
    /* background: white; */
    color: black;
    padding: 50px 10vw;
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .hero {
    background-image: url("img/Planets/space.jpg");
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    color: white;
    height: 100vh;
    position: relative;
    padding: 0px;
  }
  .hero .planet {
    position: absolute;
    background-size: contain;
    top: -50%;
    left: -50%;
    width: auto;
    height: 100vh;
    z-index: 1;
  }
  .hero .astro {
    background: url("img/astro.png");
    background-size: contain;
    width: 40vw;
    z-index: 3;
    position: absolute;
    left: 0px;
    bottom: 0px;
    animation: colorRotate3 2s linear infinite;
  }
  .hero .text {
    padding-left: 25vw;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    padding-right: 10vw;
    padding-bottom: 7vw;
    z-index: 2;
  }
  .hero .text h3 {
    margin: 0;
    font-size: 50px;
  }
  .hero .text h1 {
    font-size: 160px;
    line-height: 150px;
    margin-top: 50px;
  }
  .hero_scroll {
    display: flex;
    margin-top: 90px;
  }
  .hero .hero_scroll h3 {
    font-size: 35px;
    margin: 0;
  }
  .hero_scroll .circle {
    margin-left: 35px;
    border-radius: 50%;
    background: rgb(255, 255, 255);
    width: 40px;
    height: 40px;
    position: relative;
    top: 3px;
    left: -13px;
  }
  .hero_scroll .arrow {
    border: solid rgb(0, 0, 0) 10px;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    width: 0px;
    height: 0px;
    margin-left: 10px;
    margin-top: 18px;
  }

  .feed {
    color: #e5e5e5;
    padding-top: 270px;
    padding-bottom: 170px;
  }
  .feed h3 {
    font-size: 63px;
  }

  .feed h2 {
    margin-top: 42px;
    font-size: 268px;
    line-height: 250px;
    color: #cecece;
  }
  .feed .hh {
    font-size: 300px;
    color: #b9b9b9;
  }

  .feed p {
    margin-top: 150px;
    font-size: 8vw;
    color: rgb(78, 78, 78);
  }

  .brands {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    outline: none;
    border: none;
    padding: 40px 0px;
  }
  .brands .row {
    display: flex;
    flex-direction: row;
    margin: 40px 0px;
  }

  .brands img {
    width: 200px;
    margin: 0px 90px;
    opacity: 70%;
  }
  .quote {
    background-image: url("img/Planets/space.jpg");
    background-size: cover;
    background-attachment: fixed;
    padding-top: 345px;
    padding-bottom: 200px;
    position: relative;
    flex-direction: column;
    color: white;
  }
  .quote .mark {
    position: absolute;
    color: #ffffff21;
    top: -100px;
    left: 100px;
    font-size: 1000px;
  }
  .quote p {
    font-size: 6vw;
    margin-bottom: 0px;
    text-indent: 200px;
    position: relative;
  }
  .quote .author {
    align-self: flex-end;
    text-align: right;
  }
  .quote .author h4 {
    font-size: 83px;
    margin-top: 100px;
  }
  .quote .author h6 {
    font-size: 58px;
  }

  .cta h3 {
    margin: 200px 0px;
    font-size: 132px;
    text-align: right;
    color: #b9b9b9;
  }
  .cta .form {
    color: #353535;
    font-size: 4vw;
    line-height: 8vw;
    display: flex;
    flex-direction: column;
    padding: 0 0vw;
  }
  .form .form__section {
    margin-bottom: 100px;
    padding-right: 0vw;
  }
  .form__section.form__close {
    align-self: flex-end;
    text-align: right;
  }
  .cta .form p {
    display: inline;
  }
  .cta .form input {
    display: inline;
    border: none;
    border-bottom: #6d6d6d solid 2px;
    padding: 10px 10px;
    margin: 0px 20px;
    font-size: 37px;
    color: #6d6d6d;
    opacity: 70%;
    text-align: center;
    transition: 200ms;
  }
  .cta .form input:focus {
    outline: none;
    border-bottom: #1b1b1b solid 2px;
    color: black;
    opacity: 100%;
  }
  .cta .form select {
    display: inline;
    border: none;
    border-bottom: #b0b8bf solid 2px;
    padding: 10px 40px;
    margin: 0px 20px;
    font-size: 42px;
    color: #6d6d6d;
    opacity: 100%;
    text-align: center;
    transition: 200ms;
  }
  .cta .form select:focus {
    outline: none;
    border-bottom: #1b1b1b solid 2px;
    color: black;
    opacity: 80%;
  }

  .call {
    padding: 20px 10vw 100px;
  }
  .call h2:first-child {
    font-size: 386px;
    color: #e4e4e4;
  }
  .call h2:last-child {
    font-size: 253px;
    color: black;
    text-align: right;
    margin-top: -230px;
    font-weight: 500;
  }
  .color {
    background: transparent;
    background-image: linear-gradient(
      to right,
      #d624a6,
      #f7a140,
      green,
      #22d8d8,
      purple,
      #d624a6
    );
    background-clip: text;
    background-size: 600%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: colorScroll 20s linear infinite;
    z-index: 2;
  }
  .color.muted {
    background-image: linear-gradient(
      to right,
      #d624a621,
      #f7a24021,
      rgba(0, 128, 0, 0.13),
      #22d8d82d,
      rgba(128, 0, 128, 0.164),
      #d624a61e
    );
    z-index: 0;
  }

  .background {
    background: white;
  }
  .keywords {
    overflow: hidden;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: -2000px;
    transform: rotate(90deg);
    opacity: 5%;
    font-family: "Inria Serif";
  }
  .keywords h3 {
    font-size: 226px;
    white-space: nowrap;
    position: relative;
  }
  .keywords h3:first-child {
    text-align: right;
    right: 75vw;
  }

  @media screen and (max-width: 1100px) {
    section {
      padding: 50px 4vw;
      position:relative;
    }
    .hero .astro {
      left: auto;
      right: -6vw;
      width: 135vw;
    }
    .hero .text {
      padding-right: 7vw;
      padding-bottom: 7vw;
      position:absolute;
      bottom:0px;
      right:0px;
    }
    .hero .text h3 {
      font-size: 24px;
      visibility: hidden;
    }
    .hero .text h1 {
      font-size: 36px;
      line-height: 34px;
      visibility: hidden;
    }

    .feed h3 {
      margin-top: 0px;
      font-size: 7vw;
    }
    .feed h2 {
      font-size: 20vw;
      line-height: 19vw;
    }
    .feed .hh {
      font-size: 21vw;
      line-height: 20vw;
      margin-top: 20px;
    }
    .feed p {
      margin-top: 100px;
      font-size: 13vw;
    }

    .feed {
      padding-bottom: 80px;
      padding-top: 140px;
    }

    .brands img {
      width: auto;
      height: 10vw;
      margin: 0px 3vw;
    }

    .quote {
      padding-top: 14px;
      padding-bottom: 64px;
    }

    .quote p {
      text-indent: 55px;
      font-size: 11vw;
    }
    .quote .author h4 {
      font-size: 9vw;
    }
    .quote .author h6 {
      font-size: 4vw;
    }

    .cta {
      padding: 0px 4vw;
    }

    .cta h3 {
      font-size: 8vw;
      margin: 50px 0;
    }

    .cta .form {
      font-size: 6vw;
      padding: 0px;
      margin-bottom: 3vw;
      line-height: 13vw;
    }
    .form .form__section {
      padding-right: 0vw;
      margin-bottom: 6vw;
    }
    .cta .form input {
      font-size: 6vw;
      margin: 0px 4vw;
    }
    form {
      background: transparent;
    }
    .call {
      padding: 00px 4vw 50px 4vw;
    }

    .call h2:first-child {
      font-size: 25vw;
    }
    .call h2:last-child {
      font-size: 15vw;
      margin-top: -16vw;
    }
  }
</style>

<Nav />
<div class="background">
  <section class="keywords">
    <h3 class="color">
      high-end. luxury. boutique. cutting edge. classic. high-end. luxury.
      boutique. cutting edge. classic.
    </h3>
    <h3 class="color">
      high-end. luxury. boutique. cutting edge. classic. high-end. luxury.
      boutique. cutting edge. classic.
    </h3>
  </section>
  <section class="hero">
    <img class="planet" src="img/Planets/planet1.png" alt="" />
    <img class="astro" src="img/astro.png" alt="" />
    <div class="text">
      <h3>Creative Vision</h3>
      <h1>
        Let's get
        <br />
        <span class="color">astro-naughty.</span>
      </h1>
      <div class="hero_scroll">
        <h3>Scroll Down</h3>
        <div class="circle">
          <div class="arrow" />
        </div>
      </div>
    </div>
  </section>
  <section class="feed">
    <h3>Envisioning</h3>
    <h2>Creative.</h2>
    <h2 class="hh">Solutions.</h2>
    <p>
      We love to create
      <b class="color">unique,</b>
      <b class="color">authentic,</b>
      and
      <b class="color">memorable</b>
      experiences.
    </p>

    <!-- <p>
    Join us at the
    <b class="color">cutting edge.</b>
  </p> -->
  </section>

  <section class="brands">
    <div class="row">
      {#each brands as brand, i}
        {#if i % 2 != 1}
          <img src={brand.img} alt={brand.name} />
        {/if}
      {/each}
    </div>
    <div class="row">
      {#each brands as brand, i}
        {#if i % 2 == 1}
          <img src={brand.img} alt={brand.name} />
        {/if}
      {/each}
    </div>
  </section>
  <section class="quote">
    <div class="mark">"</div>
    <p>
      Many people have visions of prosperity; few have prosperity of vision.
    </p>
    <div class="author">
      <h4>- Christopher Reid</h4>
      <div style="display:flex;">
        <h6>Founder and CEO of goHere</h6>
        <span style="font-size: 6px;margin-bottom:32px;">®</span>
      </div>
    </div>
  </section>

  <section class="cta">
    <h3>
      Tell us about
      <span class="color">your project.</span>
    </h3>
    <div class="form">
      <form on:submit|preventDefault={sendContactMessage}>
        <div class="form__section">
          <p>Hi, my name is</p>
          <input
            class="color muted"
            bind:value={form.name}
            type="text"
            placeholder="Full Name" />
          <p>and I am creating a</p>
          <input bind:value={form.project} type="text" class="color muted" placeholder="Type of Project" />
          <p>project for</p>
          <input type="text" class="color muted" bind:value={form.website} placeholder="Current Website" />
          <p>and want to get goHere's input.</p>
        </div>
        <div class="form__section">
          <p>Please call me at</p>
          <input class="color muted" bind:value={form.phone} type="text" placeholder="Phone Number" />
          <p>or email me at</p>
          <input class="color muted" type="text" bind:value={form.email} placeholder="Email Address" />
          <p>at your earliest convenience.</p>
        </div>
        <div class="form__section form__close">
          <p>Thank You!</p>
          <h3 class="color muted" style="margin:0;">{form.name}</h3>

          <button >Send It</button>
        </div>
      </form>
    </div>
  </section>
  <section class="call">
    <h2 class="color muted">Call Now</h2>
    <h2>305.999.5595</h2>
  </section>
</div>
