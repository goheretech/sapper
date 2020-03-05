<script>
  let submitted = false;
  let position = 0;
  let visible = {
    previous: false,
    next: true
  };
  let form = {
    name: "",
    project: "",
    phone: "",
    email: "",
    website: ""
  };

  let error = false;
  async function sendContactMessage() {
    console.log("Send form...", form);
    let db = firebase.firestore();
    try {
      await db.collection("leads").add(form);
      submitted = true;
      alert("submitted");
    } catch (e) {
      console.log(";(", e);
      console.log("Big Error: " + e);
      error = true;
    }
  }
  function blank() {
    console.log("blank");
  }

  function nextPosition() {
    let bar = document.getElementById("progress");

    if (position < 4) {
      position++;
    }
    if (position == 4) {
      visible.next = false;
    } else {
      visible.next = true;
    }

    if (position == 0) {
      visible.previous = false;
    } else {
      visible.previous = true;
    }
    bar.style.width = 20 * (position + 1) + "%";
  }
  function previousPosition() {
    let bar = document.getElementById("progress");

    if (position > 0) {
      position--;
    }

    if (position == 4) {
      visible.next = false;
    } else {
      visible.next = true;
    }

    if (position == 0) {
      visible.previous = false;
    } else {
      visible.previous = true;
    }
    bar.style.width = 20 * (position + 1) + "%";
  }

  function focus0() {
    position = 0;

    let bar = document.getElementById("progress");
    bar.style.width = 20 * (position + 1) + "%";

    if (position == 4) {
      visible.next = false;
    } else {
      visible.next = true;
    }

    if (position == 0) {
      visible.previous = false;
    } else {
      visible.previous = true;
    }
  }
  function focus1() {
    position = 1;

    let bar = document.getElementById("progress");
    bar.style.width = 20 * (position + 1) + "%";

    if (position == 4) {
      visible.next = false;
    } else {
      visible.next = true;
    }

    if (position == 0) {
      visible.previous = false;
    } else {
      visible.previous = true;
    }
  }
  function focus2() {
    position = 2;

    let bar = document.getElementById("progress");
    bar.style.width = 20 * (position + 1) + "%";

    if (position == 4) {
      visible.next = false;
    } else {
      visible.next = true;
    }

    if (position == 0) {
      visible.previous = false;
    } else {
      visible.previous = true;
    }
  }
  function focus3() {
    position = 3;

    let bar = document.getElementById("progress");
    bar.style.width = 20 * (position + 1) + "%";

    if (position == 4) {
      visible.next = false;
    } else {
      visible.next = true;
    }

    if (position == 0) {
      visible.previous = false;
    } else {
      visible.previous = true;
    }
  }
  function focus4() {
    position = 4;
    let bar = document.getElementById("progress");
    bar.style.width = 20 * (position + 1) + "%";

    if (position == 4) {
      visible.next = false;
    } else {
      visible.next = true;
    }

    if (position == 0) {
      visible.previous = false;
    } else {
      visible.previous = true;
    }
  }
</script>

<style>
  form {
    position: relative;
    width: 60vw;
    height: 49vh;
    margin-top: -20vh;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  input {
    opacity: 0;
    font-size: 4vw;
    transform: translate(-50%);
    position: absolute;
    top: 0%;
    left: 50%;
    width: 93%;
    height: 13vh;
    padding: 0px 15px;
  }

  .arrow {
    background: rgb(255, 255, 255);
    /* position: absolute; */
    top: 50%;
  }
  .arrow {
    opacity: 0;
    width: 2vw;
  }
  .arrow__left {
    right: 0px;
  }
  .arrow__right {
    left: 0px;
  }

  .visible {
    opacity: 1;
    z-index: 10;
  }
  button {
    width: 100%;
    margin-top: 40px;
    background-image: url("img/grad2.png");
    animation: colorRotate 2s infinite;
    background-size: cover;
    font-size: 0px;
    width: 20%;
  }
  .frm {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
  }
  .holder {
    display: flex;
    height: 13vh;
    margin-top: 28vh;
  }

  .ready {
    font-size: 40px;
    color: rgb(244, 224, 245);
    animation: colorRotate 2s infinite;
  }

  .thanks{
      color:White;
  }
  .thanks h1{
      font-size:3vw
  }
  .thanks h3{
      font-size:2em;
  }

  @media screen and (max-width: 1100px) {
    form {
      width: 95vw;
    }
    .holder {
      margin-top: 25vh;
      height: 6vh;
    }
    input {
      height: 5vh;
    }
    button {
      margin-top: 12px;
    }
  }
</style>

{#if !submitted}
  <form action="" on:submit|preventDefault={sendContactMessage}>

    <div class="holder">
      <div
        class="arrow arrow__right"
        class:visible={visible.previous}
        on:click={previousPosition} />
      <div class="frm">
        <input
          type="text"
          class:visible={position == 0}
          bind:value={form.name}
          on:focus={focus0}
          placeholder="Name" />
        <input
          type="text"
          class:visible={position == 1}
          bind:value={form.project}
          on:focus={focus1}
          placeholder="Type of Project" />
        <input
          type="text"
          class:visible={position == 2}
          bind:value={form.website}
          on:focus={focus2}
          placeholder="Company" />
        <input
          type="text"
          class:visible={position == 3}
          bind:value={form.phone}
          on:focus={focus3}
          placeholder="Phone" />
        <input
          type="text"
          class:visible={position == 4}
          bind:value={form.email}
          on:focus={focus4}
          placeholder="Email" />
      </div>
      {#if position == 4}
        <div
          class="arrow arrow__left visible"
          id="submit"
          on:click={sendContactMessage} />
      {:else}
        <div
          class="arrow arrow__left"
          class:visible={visible.next}
          on:click={nextPosition} />
      {/if}
    </div>
    <button id="progress">Submit</button>
  </form>
{:else}
  <div class="thanks">
    <h1>Thank You, {form.name}</h1>
    <h3>Our team will review your website, {form.website}</h3>
    <span>One of our ambassadors will contact you shortly.</span>
  </div>
{/if}
