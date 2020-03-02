<script>
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
          start: function($el) {
            return $el.offset().top;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 1000;
          },
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
          start: function($el) {
            return $el.offset().top;
          },
          end: function($el) {
            return $el.offset().top + $el.height() + 1000;
          },
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
          selector: ".feed h3",
          start: function($el) {
            return $el.offset().top + 500;
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
            return $el.offset().top + 500;
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

      // $(".feed h2").jScrollability(1000, 1500, function($el, pcnt) {
      //   $el.css({
      //    'opacity': (pcnt) * 100 + "%"
      //   });
      // });
    });
  })(jQuery);
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  section {
    background: white;
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
    width: 100vw;
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
  }
  .hero .text {
    padding-left: 25vw;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    padding-right: 10vw;
    padding-bottom: 5vw;
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
    background: rgb(95, 95, 95);
    width: 40px;
    height: 40px;
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
    font-size: 135px;
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
    background: #b0b8bf;
    padding-top: 345px;
    padding-bottom: 182px;
    position: relative;
    flex-direction: column;
    color: white;
  }
  .quote .mark {
    position: absolute;
    top: -100px;
    left: 100px;
    font-size: 1000px;
    opacity: 40%;
  }
  .quote p {
    font-size: 112px;
    margin-bottom: 130px;
    text-indent: 200px;
  }
  .quote .author {
    align-self: flex-end;
    text-align: right;
  }
  .quote .author h4 {
    font-size: 83px;
  }
  .quote .author h6 {
    font-size: 58px;
  }

  .keywords {
    overflow: hidden;
    flex-direction: column;
    background: #f1f1f1;
  }
  .keywords h3 {
    font-size: 186px;
    white-space: nowrap;
    position: relative;
  }
  .keywords h3:first-child {
    text-align: right;
    right: 75vw;
  }
  .cta h3 {
    margin: 200px 0px;
    font-size: 132px;
    text-align: right;
  }
  .cta .form {
    color: #c5c5c5;
    font-size: 65px;
    display: flex;
    flex-direction: column;
  }
  .form .form__section {
    margin-bottom: 100px;
  }
  .form__section.form__close {
    align-self: flex-end;
  }
  .cta .form p {
    display: inline;
  }
  .cta .form input {
    display: inline;
    border: none;
    border-bottom: #b0b8bf solid 2px;
    padding: 10px 40px;
    margin: 0px 20px;
    font-size: 42px;
    color: #c5c5c5;
    opacity: 20%;
    text-align: center;
  }
  .cta .form select {
    display: inline;
    border: none;
    border-bottom: #b0b8bf solid 2px;
    padding: 10px 40px;
    margin: 0px 20px;
    font-size: 42px;
    color: #c5c5c5;
    opacity: 20%;
    text-align: center;
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
</style>

<section class="hero">
  <img class="planet" src="img/Planets/planet1.png" alt="" />
  <img class="astro" src="img/astro.png" alt="" />
  <div class="text">
    <h3>Making Magic</h3>
    <h1>
      Let's get
      <br />
      astro-naughty.
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
    We love creating <b>unique, authentic,</b> and <b>memorable experiences.</b>
  </p>
  <p>Join us at the cutting edge.</p>
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
    goHere changed my life. The price of my unborn child was more than fair!
  </p>
  <div class="author">
    <h4>-Bad Mom of the Year</h4>
    <h6>2011</h6>
  </div>
</section>
<section class="keywords">
  <h3>
    high-end. luxury. boutique. cutting edge. classic. high-end. luxury.
    boutique. cutting edge. classic.
  </h3>
  <h3>
    high-end. luxury. boutique. cutting edge. classic. high-end. luxury.
    boutique. cutting edge. classic.
  </h3>
</section>
<section class="cta">
  <h3>Tell us about your project.</h3>
  <div class="form">
    <div class="form__section">
      <p>Help! I'm making a</p>
      <input type="text" placeholder="Type of Project" />
      <p>project for</p>
      <input type="text" placeholder="Company Name" />
      <p>and need goHere's help!</p>
    </div>
    <div class="form__section">
      <p>My budget is between</p>
      <select>
        <option value="0-15k">$0 - $15,000</option>
        <option value="15k-50k">$15,000 - $50,000</option>
        <option value="50k-250k">$50,000 - $250,000</option>
        <option value="250k-2m">$250,000 - $2M</option>
      </select>
    </div>
    <div class="form__section">
      <p>Please call me at</p>
      <input type="text" placeholder="Phone Number" />
      <p>or email me at</p>
      <input type="text" placeholder="Email Address" />
      <p>at your earliest convenience.</p>
    </div>
    <div class="form__section form__close">
      <p>Thanks,</p>
      <br />
      <input type="text" placeholder="Full Name" />
      <button>Send It</button>
    </div>
  </div>
</section>
<section class="call">
  <h2>Call Now</h2>
  <h2>305.999.5595</h2>
</section>
