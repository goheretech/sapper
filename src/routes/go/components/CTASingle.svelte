<script>
  let submitted = false;
  let position = 0;
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
  }
  function previousPosition() {
    if (position > 0) {
      position--;
    }
  }

  function alert(){
      alert("event");
  }
</script>

<style>
  input {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  .arrow {
    background: Red;
  }
</style>

<form action="" on:submit|preventDefault={sendContactMessage}>
  <input
    type="text"
    class:visible={position == 0}
    bind:value={form.name}
    
    on:blur={nextPosition}
    placeholder="Name" />
  <input
    type="text"
    class:visible={position == 1}
    bind:value={form.project}
    on:blur={nextPosition}
    placeholder="Type of Project" />
  <input
    type="text"
    class:visible={position == 2}
    bind:value={form.website}
    on:blur={nextPosition}
    placeholder="Company" />
  <input
    type="text"
    class:visible={position == 3}
    bind:value={form.phone}
    on:blur={nextPosition}
    placeholder="Phone" />
  <input
    type="text"
    class:visible={position == 4}
    bind:value={form.email}
    on:blur={nextPosition}
    placeholder="Email" />
  <div class="arrow arrow__left" on:click={nextPosition}>Next</div>
  <div class="arrow arrow__right" on:click={previousPosition}>Previous</div>
  <button>Submit</button>
</form>
