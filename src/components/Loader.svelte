<script>
    var i = 0;
    function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            elem.style.width = width + "%";
            console.log(width);
            
        }
        }
    }
    }
</script>

<style>
    #myProgress {
    width: 100%;
    background-color: grey;
    }

    #myBar {
    width: 1%;
    height: 30px;
    background-color: green;
}
</style>

<div id="loader">
    <div class="loading">
        
        <!-- <div class="loader"></div>
        <span>Loading...</span> -->
    </div>
    <div id="myProgress">
        <div id="myBar"></div>
    </div>
</div>