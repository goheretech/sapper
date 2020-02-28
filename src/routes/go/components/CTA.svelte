<script>
  let formPos = 0;
  let contactForm = {
    name: "",
    email: "",
    phone: "",
    website: ""
  };
  let error = false;
  let showThanks = false;
  async function sendContactMessage() {
    // console.log("Send form...", contactForm);
    let db = firebase.firestore();
    try {
      await db.collection("leads").add(contactForm);
      // console.log("Submitting");
      showThanks = true;
    } catch (e) {
      console.log(";(", e);
      console.log("Big Error: " + e);
      error = true;
    }
  }

  function handleClick(event) {
    let bar = document.getElementById("prgB");
    formPos++;
    bar.style.width = 25 * (formPos + 1) + "%";
  }
</script>

<style>
  .clH {
    display: flex;
    flex-direction: row;
  }

  .cl {
    width: 100%;
  }
  .leftCol {
    text-align: left;
    width: 30%;
  }
  .rightCol {
    width: 70%;
  }
  .ctaform {
    margin-top: 30px;
    display: flex;
  }
  .ctalabel {
    font-size: 64px;
    padding: 10px 0px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .ctainput {
    width: 100%;
    font-size: 124px;
    background: transparent;
    background-attachment: fixed;
    background-size: contain;
    animation: colorRotate2 2s infinite;
    color: black;
    padding: 40px 80px;
    outline: none;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    border-bottom:0px;
  }

  .ctainput:focus {
    color: white;
  }
  button {
    margin-left: 50px;
    margin-top: 35px;
    border-width:100px;
    border-left-color:white;
    border:solid;
  }

  .button_last {
    color: black;
    background: white;
  }

  span {
    text-align: left;
  }

  .frmB {
    width: 100%;
  }

  small {
    font-size: 12px;
    color: red;
  }

  .prgs {
    width: 100%;
    height: 5px;
    background: rgba(255, 255, 255, 0.849);
  }

  .prgs div {
    height: 100%;
    width: 25%;
    background: red;
    animation: colorRotate 8s infinite;
  }

  .thanks h1 {
    font-size: 42px;
  }

  h3 {
    font-size: 32px;
    margin-top: 0px;
  }

  @media screen and (max-width: 500px) {
    .clH {
      flex-direction: column;
    }
    .cl.leftCol {
      width: 90%;
    }
    .cl.rightCol {
      width: 90%;
    }
    .CTA {
      height: auto;
    }
    .ctainput {
      background-size: cover;
    }
  }
</style>

<section class="CTA gg">
  <div class="cc clH">
    {#if !showThanks}
      <!--       
      <div class="cl leftCol">
        <h2>Got A Project?</h2>
        <h3>We'll Solve It.</h3>
        <p>
          From small local businesses to global giants; from start-ups to
          industry leaders; from nutrition clinics to sports bars; goHere can
          add value to any organization. Our dynamic team of experts is equipped
          to understand and meet your unique needs and meet them in beautiful
          and effective ways. Think you can’t afford our services? We choose our
          clients based on harmony, not purse strings; we'd love to hear from
          you regardless of your budget.
        </p>
      </div> -->
      <div class="cl">
        <div class="ctaform">
          <div class="frmB">
            {#if formPos == 0}
              <label class="ctalabel">
                <span>Name</span>
                <input
                  class="ctainput"
                  type="text"
                  bind:value={contactForm.name}
                  placeholder="Mr. Cool"
                  required />
                {#if error & (contactForm.name.trim().length == 0)}
                  <small>Please enter your name</small>
                {/if}
              </label>
            {/if}
            {#if formPos == 1}
              <label class="ctalabel">
                <span>E-Mail</span>
                <input
                  class="ctainput"
                  type="text"
                  bind:value={contactForm.email}
                  placeholder="smart@person.com"
                  required />
                {#if error & (contactForm.email.trim().length == 0)}
                  <small>Please enter your email</small>
                {/if}
              </label>
            {/if}
            {#if formPos == 2}
              <label class="ctalabel">
                <span>Phone Number</span>
                <input
                  class="ctainput"
                  type="text"
                  bind:value={contactForm.phone}
                  placeholder="111.222.3333"
                  required />
                {#if error & (contactForm.phone.trim().length == 0)}
                  <small>Please enter your phone number</small>
                {/if}
              </label>
            {/if}
            {#if formPos == 3}
              <label class="ctalabel">
                <span>Website</span>
                <input
                  class="ctainput"
                  type="text"
                  bind:value={contactForm.website}
                  placeholder="www.beautifulsite.com"
                  required />
                {#if error & (contactForm.website.trim().length == 0)}
                  <small>Please enter your website</small>
                {/if}
              </label>
            {/if}
            <div class="prgs">
              <div id="prgB" />
            </div>
          </div>
          {#if formPos == 3}
            <button class="button_last" on:click={sendContactMessage}>
              Submit
            </button>
          {:else}
            <button on:click={handleClick}>{formPos + 1}/4</button>
          {/if}

        </div>
      </div>
    {:else}
      <div class="thanks">
        <h1>Thank You, {contactForm.name}</h1>
        <h3>Our team will review your website, {contactForm.website}</h3>
        <span>One of our ambassadors will contact you shortly.</span>
      </div>
    {/if}
  </div>
</section>
