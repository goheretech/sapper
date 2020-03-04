<style>
  * {
    outline: #333333 solid 1px;
  }
  section {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('img/gif/loading2.gif');
    background-size: cover;
    background-position: 100% 50%;
    position:fixed;
    top:0;
    left:0;
    z-index:9999;
    animation: colorRotate3 700ms linear infinite;
  }
  h2{
    outline:none;
    border:none;
    font-size:15vw;
     background: transparent;
    background-image: linear-gradient(
      to right,
      #d624a6,
      #f7a140,
      green,
      #22d8d8,
      purple,
      #d624a6
    );
    background-clip: text;
    background-size: 600%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: colorScroll 20s linear infinite;
    z-index: 2;
  }

  
</style>

<section>
  <h2>Loading...</h2>
</section>
