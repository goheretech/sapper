<script>
    export let tag = 'Demo'
    export let head = 'Demo'
    export let par = 'Demo'
    export let button = 'Demo'
    export let link = 'Demo'
    

</script>
<style>
    .space{
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 55%;
        text-align: center;
        color: white;
        position: relative;
    }
    .bg-black{
        margin:200px 0px;
        background:black;
        position:relative;
        z-index:300;
        width:100%;
        height:700px;
    }
    .mini{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
    }
        .mini .icon{
            width: 40px;
            height: 40px;
            position: absolute;
            background-image: url('/img/cube.png');
            background-size: contain;
            animation: colorRotate 10s linear infinite;
        }
        .mini h6{
            margin: 0;
            font-size: 12px;
            letter-spacing: 4px;
            font-weight: 700;
            text-transform: uppercase;
            position: relative;
        }
    h2{
        text-transform: capitalize;
        line-height: 95%;
        font-size: 65px;
        margin: 0;
        padding-top: 25px;
    }
    p{
        width: 73%;
        font-size: 18px;
    }
    a{
        text-decoration: none;
        color: white;
        border: solid white;
        padding: 10px 20px;
        transition: all 500ms;
    }
    a:hover{
        padding: 12px 25px;
    }
    .divider{
        height: 150px;
        width: 100vw;
        clip-path: polygon(51% 59%, 71% 30%, 100% 72%, 100% 100%, 52% 100%, 18% 100%, 0 100%, 0 75%, 21% 21%);
        z-index:10;
        background:black;
    }
        .divider.top{
            position:absolute;
            top:-149px;
        }
        .divider.bottom{
            position:absolute;
            bottom:-149px;
            transform:rotate(180deg) rotateY(180deg);
        }
        .divider.color{
            background-image: linear-gradient(to right, green, #22d8d8, purple, #d624a6, #f7a140, green);
            z-index:1;
            background-size: 600%;
            z-index: 10;
            animation: colorScroll 20s linear infinite;
        }
        .divider.color.bottom{        
            bottom:-160px;
        }
        .divider.color.top{        
            top:-160px;
        }
    @media screen and (max-width:500px) {
        h2{
            font-size:40px;
        }
        .space{
            width:85%;
            z-index:12;
        }
        .bg-black{
            height:auto;
            z-index:30;
            padding: 80px 0px;
        }
        .divider{
            height:100px;
        }
        .divider.top{
            top:-99px;
        }
        .divider.bottom{
             bottom:-99px;
        }
        .divider.color.bottom{
            bottom:-105px;
            
        }
        .divider.color.top{
            top:-105px;
        }
    }
</style>
<section class="bg-black">
        <div class="divider color bottom"/>
        <div class="divider bottom"/>
        <div class="divider color top"/>
        <div class="divider top"/>
        <div class="space">
            <div class="mini">
                <div class="icon colorChange" />
                <h6>{tag}</h6>
            </div>
            <h2>{head}</h2>
            <p>{par}</p>
            <a href={link}>
                {button}
            </a>
        </div>
</section>
