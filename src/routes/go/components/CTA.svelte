<script>
  let form = {
    position: 0,
    canBack: false,
    canForward: false,
    label: ["Name", "Email", "Phone Number", "Website"],
    ready: false
  };
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

  function formNext(event) {
    let bar = document.getElementById("progress_glow");

    console.log("Pre:", form.position);
    form.position++;
    console.log("Post:", form.position);
    bar.style.width = 25 * (form.position + 1) + "%";
    bar.style.opacity = 25 * (form.position + 1) + "%";
    form.canForward = false;
    if (contactForm[Object.keys(contactForm)[form.position]] != "" && form.position <3) {
      form.canForward = true;
    }

    if (form.position != 0) {
      form.canBack = true;
    } else {
      form.canBack = false;
    }
  }
  function formBack(event) {
    let bar = document.getElementById("progress_glow");
    form.position = form.position - 1;
    bar.style.width = 25 * (form.position + 1) + "%";
    form.canForward = true;
    if (form.position >= 0) {
      form.canBack = true;
    } else {
      form.canBack = false;
    }
  }

  function enableForward() {
    contactForm.name.trim().length >= 3;
    // alert(form.label[form.position]);
    form.canForward = true;
  }

  function enableButton() {
    form.ready = true;
  }

  function blank(){
    console.log('nothing happened')
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
    /* .CTA {
      height: auto;
    }
    .ctainput {
      background-size: cover;
    } */
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button_holder {
    display: flex;
    align-items: center;
  }
  .arrow {
    display: block;
    border: 40px white solid;
    width: 0px;
    padding: 0px;
    height: 0px;
  }

  .arrow_left {
    opacity: 0;
    border: 40px white solid;
    margin-left: -40px;
    border-left: 0px transparent solid;
    border-top: 80px transparent solid;
    border-bottom: 80px transparent solid;
    transform: translateX(-50%);
  }
  .arrow_left.active {
    opacity: 100%;
    margin-left: 0px;
  }
  .arrow_right {
    opacity: 0;
    margin-right: -40px;
    border-right: 0px transparent solid;
    border-top: 80px transparent solid;
    border-bottom: 80px transparent solid;
    transform: translateX(50%);
  }
  .arrow_right.active {
    opacity: 100%;
    margin-right: 0px;
  }
  label {
    text-align: left;
  }
  label h3 {
    font-size: 65px;
  }
  input {
    font-size: 96px;
    padding: 30px 75px;
  }

  .progress_holder {
    margin-top: 20px;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
  }
  #progress {
    height:25px;
    width: 100%;
    opacity: 25%;
    background-image: url("img/grad2.png");
    animation: colorRotate 2s infinite;
    background-size: cover;
  }
  #progress_glow {
    opacity: 25%;
    padding: 4px;
    width: 25%;
    background-image: url("img/grad2.png");
    animation: colorRotateGlow 2s infinite;
    -webkit-filter: blur(120px);
    filter: blur(120px);
    background-size: cover;
  }

  #progress.buttonOn {
    height: 150px;
    width: 100%;
    /* animation: colorRotateGlowFast 1s infinite; */
    filter: blur(0px);
    color:white;
    font-size: 65;
  }

  @keyframes colorRotateGlow {
    0% {
      filter: hue-rotate(0deg) blur(8px);
    }

    100% {
      filter: hue-rotate(-359deg) blur(8px);
    }
  }
  @keyframes colorRotateGlowFast {
    0% {
      filter: hue-rotate(0deg) blur(15px);
    }

    100% {
      filter: hue-rotate(-359deg) blur(15px);
    }
  }

  @keyframes growSubmit {
    0% {
      padding: 0px 0px;
    }
    100% {
      padding: 60px 100px;
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
          {#if showThanks == false}
            <form class="form" on:submit|preventDefault={blank}>
              <div class="cta__holder">
                <label>
                  <h3>{form.label[form.position]}</h3>
                  <div class="button_holder">
                    {#if form.position == 0}
                      <input
                        type="text"
                        bind:value={contactForm.name}
                        placeholder="Marty McFly"
                        on:input={enableForward} />
                    {:else if form.position == 1}
                      <div
                        class="arrow arrow_left"
                        class:active={form.canBack}
                        on:click={formBack}
                        on:input={enableForward} />
                      <input
                        type="text"
                        bind:value={contactForm.email}
                        placeholder="smart@person.com"
                        on:input={enableForward} />
                    {/if}
                    {#if form.position == 2}
                      <div
                        class="arrow arrow_left"
                        class:active={form.canBack}
                        on:click={formBack}/>
                      <input
                        type="text"
                        bind:value={contactForm.phone}
                        placeholder="555-867-5309"
                        on:input={enableForward} />
                    {/if}
                    {#if form.position == 3}
                      <div
                        class="arrow arrow_left"
                        class:active={form.canBack}
                        on:click={formBack} />
                      <input
                        type="text"
                        bind:value={contactForm.website}
                        placeholder="www.mycoolsite.com"
                        on:input={enableButton} />
                    {/if}
                    <div
                      class="arrow arrow_right"
                      class:active={form.canForward}
                      on:click={formNext} />
                  </div>
                </label>
                <div class="progress_holder" >
                  <div id="progress_glow" >
                    <div id="progress"  on:click={sendContactMessage}>
                      Submit
                    </div>

                  </div>
                </div>
              </div>
            </form>
          {:else}
            <div class="thanks">
              <h1>Thank You, {contactForm.name}</h1>
              <h3>Our team will review your website, {contactForm.website}</h3>
              <span>One of our ambassadors will contact you shortly.</span>
            </div>
          {/if}

          <!-- <div class="frmB">
            {#if form.position == 0}
              <label class="ctalabel">
                <span>Name</span>
                <input
                  class="ctainput"
                  type="text"
                  bind:value={contactForm.name}
                  placeholder="Marty McFly"
                  required />
                {#if error & (contactForm.name.trim().length == 0)}
                  <small>Please enter your name</small>
                {/if}
              </label>
            {/if}
            {#if form.position == 1}
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
            {#if form.position == 2}
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
            {#if form.position == 3}
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
          {#if form.position == 3}
            <button class="button_last" on:click={sendContactMessage} />
          {:else}
            <button on:click={formNext} />
          {/if} -->

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
