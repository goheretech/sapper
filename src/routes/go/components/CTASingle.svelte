<script>
  let submitted = false;
  let position = 0;
  let visible = {
      previous:false,
      next:true

  }
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
    if(position == 4){
        visible.next = false;
    }else{
        visible.next = true;
    }
    
     if(position == 0){
        visible.previous = false;
    }else{
        visible.previous = true;
    }
  }
  function previousPosition() {
    if (position > 0) {
      position--;
    }

   if(position == 4){
        visible.next = false;
    }else{
        visible.next = true;
    }
    
     if(position == 0){
        visible.previous = false;
    }else{
        visible.previous = true;
    }
  }

  function focus0(){
      position=0;
  }
  function focus1(){
      position=1;
  }
  function focus2(){
      position=2;
  }
  function focus3(){
      position=3;
  }
  function focus4(){
      position=4;
  }
</script>

<style>
  input {
    opacity:0;
  }
  .arrow{
      opacity:0;
  }
  .visible {
    opacity:1;
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
  <div class="arrow arrow__left"  class:visible={visible.next} on:click={nextPosition}>Next</div>
  <div class="arrow arrow__right"  class:visible={visible.previous} on:click={previousPosition}>Previous</div>
  <button>Submit</button>
</form>
