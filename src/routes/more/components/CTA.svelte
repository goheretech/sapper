<script>
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
    width: 60%;
  }
  .rightCol {
    width: 40%;
  }
  .ctaform {
    margin-top: 30px;
    width: 100%;
  }
  .ctalabel {
    font-size: 24px;
    padding: 10px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .ctainput {
    width: 100%;
    background: url("img/headshots/background (2).png");
    background-attachment: fixed;
    background-size: contain;
    animation: colorRotate2 2s infinite;
    color: white;
    padding: 10px;
    outline: none;

  }
  button {
    margin-top: 20px;
  }
  span {
    text-align: left;
  }

  small {
    font-size: 12px;
    color: red;
  }

  .thanks h1{
    font-size:42px;
  }

   @media screen and (max-width:500px) {
           .clH{
             flex-direction:column;
           }
           .cl.leftCol{
             width:90%;
           }
           .cl.rightCol{
             width:90%;
           }
           .CTA{
             height:auto;
           }
           .ctainput {
             background-size:cover;
           }
        }
</style>

<section class="CTA gg">
  <div class="cc clH">
    {#if !showThanks}
      <div class="cl leftCol">
        <h2>We Can Help</h2>
        <h3>Let's Create Together</h3>
        <p>
          From small local businesses to global giants; from start-ups to industry leaders; from real estate agencies to sports bars; goHere can add value to any organization. Our dynamic team of experts is equipped to understand your unique needs and meet them in beautiful and effective ways. 
          
          Think you can’t afford our services? We choose our clients based on harmony, not purse strings; we'd love to hear from you regardless of your budget.
        </p>
      </div>
      <div class="cl rightCol">
        <div class="ctaform">
          <label class="ctalabel">
            <span>Name</span>
            <input
              class="ctainput"
              type="text"
              bind:value={contactForm.name}
              placeholder="Name"
              required />
            {#if error & (contactForm.name.trim().length == 0)}
              <small>Please enter your name</small>
            {/if}
          </label>
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
          <button on:click={sendContactMessage}>Submit</button>
        </div>
      </div>
    {:else}
      <div class="thanks">
        <h1>Thank You, {contactForm.name}</h1>
        <h3>Our team will review your website, {contactForm.website}</h3>
        <span>
          One of our ambassadors will contact you shortly. Please note that your data is
          now forfit and all intelectual property assocaited with your brand is
          now the property of goHere. Chump.
        </span>
      </div>
    {/if}
  </div>
</section>
