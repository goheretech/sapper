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
    outline:none;
  }
  button {
    margin-top: 20px;
  }
  span {
    text-align: left;
  }
</style>

<section class="CTA gg">
  <div class="cc clH">
    <div class="cl leftCol">
      <h2>We Can Help</h2>
      <h3>Let's Create Beauty Together</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus magni
        atque inventore iusto molestias nam culpa ipsam odit, deleniti neque
        hic, fugit laboriosam accusantium officia sapiente voluptatibus? Ut
        laboriosam consectetur nobis. Corporis quia sed autem ducimus
        accusantium! Vel ullam quibusdam voluptatibus porro maxime quidem
        tenetur, voluptas, quia eum ipsam repudiandae quam optio natus corrupti
        qui.
      </p>
    </div>
    <div class="cl rightCol">
      <form class="ctaform">
        <label class="ctalabel">
          <span>Name</span>
          <input class="ctainput" type="text" />
        </label>
        <label class="ctalabel">
          <span>E-Mail</span>
          <input class="ctainput" type="text" />
        </label>
        <label class="ctalabel">
          <span>Phone Number</span>
          <input class="ctainput" type="text" />
        </label>
        <label class="ctalabel">
          <span>Website</span>
          <input class="ctainput" type="text" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  </div>
</section>
