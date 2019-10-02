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
    console.log("Send form...", contactForm);
    let db = firebase.firestore();
    try {
      await db.collection("contactForm").add(contactForm);
      console.log("Submitting");
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
</style>

<section class="CTA gg">
  <div class="cc clH">
    {#if !showThanks}
      <div class="cl leftCol">
        <h2>We Can Help</h2>
        <h3>Let's Create Beauty Together</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          magni atque inventore iusto molestias nam culpa ipsam odit, deleniti
          neque hic, fugit laboriosam accusantium officia sapiente voluptatibus?
          Ut laboriosam consectetur nobis. Corporis quia sed autem ducimus
          accusantium! Vel ullam quibusdam voluptatibus porro maxime quidem
          tenetur, voluptas, quia eum ipsam repudiandae quam optio natus
          corrupti qui.
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
