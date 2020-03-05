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
  }
  function previousPosition() {
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
  }

  function focus0() {
    position = 0;

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
    flex-direction:column;
    position: relative;
  }
  input {
    opacity: 0;
    font-size: 4vw;
    transform: translate(-50%);
    position: absolute;
    top: 0%;
    left: 50%;
    width:93%;
    height:13vh;
  }

  .arrow {
    background: rgb(255, 255, 255);
    /* position: absolute; */
    top: 50%;
  }
  .arrow {
    opacity: 0;
    width:2vw;    
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
    margin-top:40px;
  }
  .frm {
    width: 100%;
    height: 100%;
    display:flex;
    position: relative;
  }
  .holder{
      display:flex;
      height:13vh;
      margin-top:28vh;
  }

  @media screen and (max-width: 1100px) {
      form{
          width:95vw;
      }
      .holder{
          margin-top:25vh;
          height:6vh;
      }
      input{
          height:5vh;
      }
      button{
          margin-top:12px;
</style>

<form action="" on:submit|preventDefault={sendContactMessage}>

  <div class="holder">
    <div
      class="arrow arrow__right"
      class:visible={visible.previous}
      on:click={previousPosition}>
    </div>
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
    <div
      class="arrow arrow__left"
      class:visible={visible.next}
      on:click={nextPosition}>
    </div>
  </div>
  <button>Submit</button>
</form>
