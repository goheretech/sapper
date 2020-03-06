<script>
    import page from "../index.svelte"

    function goToContact(){
        window.location.href = "/get-started";    
    }
</script>

<style>
.bb{
    display:flex;
    justify-content:center;
    align-items:center;
    min-height: 100vh;  
    padding: 120px 80px;
}
    .cd{
        position:relative;
        display:grid;
        grid-template-columns: repeat(4, minmax(260px, 1fr));
        grid-template-rows: auto;
        grid-gap: 0 40px;
    }
    .box{
        position:relative;
        height:650px;
        background: #131414;
        display:flex;
        justify-content: center;
        align-items:center;
        border: 1px solid #000;
        transition: 0.5s;
    }
    
    .box::before{
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background-image: linear-gradient(to right, #d624a6, #f7a140, green, #22d8d8, purple, #d624a6);        
        z-index: -1;
        transform: skew(1deg,1deg);
        background-size: 600%;
        animation: colorScroll 20s linear infinite;
        transition:0.3s;
    }
    .box:hover::before{
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        /* transform: skew(2deg, 2deg); */
    }
    .box:nth-child(2):before{
        background-image: linear-gradient(to right, #f7a140, green, #22d8d8, purple, #d624a6, #f7a140);
    }
    .box:nth-child(3):before{
        background-image: linear-gradient(to right, green, #22d8d8, purple, #d624a6, #f7a140, green);
    }
    .box:nth-child(4):before{
        background-image: linear-gradient(to right, #22d8d8, purple, #d624a6, #f7a140, green, #22d8d8);
    }
    .content{
        position:relative;
        padding: 40px;

    }
    h2{
        position:absolute;
        top: -60px;
        right: 40px;
        margin: 0;
        padding: 0;
        font-size: 10em;
        color:rgba(255,255,255,.05);
        transition: 0.5s;
    }
    .box:hover h2{
        top:-90px;
    }
    h3{
        margin: 0 0 30px;
        padding: 0;
        font-size: 24px;
        color:#fff;
    }
    h4{
        margin: 0 0 10px;
        padding: 0;
        font-size: 36px;
        font-weight: 500;
        color:#fff;
    }
    p{
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 16px;
    }
    a{
        position: relative;
        margin:20px 0 0;
        padding: 10px 20px;
        text-decoration: none;
        border: 1px solid #fff;
        display: inline-block;
        color: #fff;
        transition: 0.5s;
        transform: translateY(-40px);
        opacity: 0;
        visibility: hidden;
    }
    .box:hover a{        
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        
    }
    a:hover{
        color: #000;
        background:white;
    }
    li{
        color:white;
        font-size: 18px;
    }

    @media screen and (max-width:1100px) {
            .cd{
                grid-template-columns: repeat(2, minmax(260px, 1fr));
            }
            .box{
                margin-bottom:60px;
            }
        }

    @media screen and (max-width:500px) { 
        .bb{
            padding: 20px 20px;
        }
        .cd{
            grid-template-columns: repeat(1, minmax(260px, 1fr));
            grid-gap: 40px 0;
        }

        .box{
            height:auto;
            padding: 20px 20px;
        }

        h2{
            top:0px;
        }
        h3{
            margin-bottom:10px;
            font-size:28px;
        }
        h4{
            font-size:28px;
        }
        .content{
            padding:0;
        }
        .box a{        
            transform: translateY(0);
            opacity: 1;
            visibility: visible;            
        }

        
    } 
</style>
<div class="bb">
    <div class="cd">
        <div class="box">
            <div class="content">
                <h2>1</h2>
                <h3>Web Design</h3>
                <h4>Captivate Your Audience.</h4>
                <p>We create user-friendly interfacing and employ distinctive navigation and scroll techniques that keep your customers naturally engaged, increase conversion, and drive revenue.</p>
                    <ul>
                        <li>UI/UX Designs</li>
                        <li>Front and Back-end Development</li>
                        <li>Mobile Web Apps</li>
                        <li>Content Strategy</li>
                        <li>2D and 3D Animation</li>
                    </ul>
                
                <a href="get-started" on:click={goToContact}>Apply Now</a>
            </div>
        </div>
        <div class="box">
            <div class="content">
                <h2>2</h2>
                <h3>Brand Development</h3>
                <h4>Refine Your Identity</h4>
                <p>Develop brand identities that reflect your company’s values and resonate with your customers.</p>
                <ul>
                    <li>Brand Identity Development</li>
                    <li>Creative Direction</li>
                    <li>Logo Creation</li>
                    <li>Graphic Design</li>
                    <li>Asset Production</li>
                    
                </ul>
                <a href="get-started" on:click={goToContact}>Apply Now</a>
            </div>
        </div>
        <div class="box">
            <div class="content">
                <h2>3</h2>
                <h3>Marketing</h3>
                <h4>Make An Impression.</h4>
                <p>Through extensive research, we identify your optimal consumer demographic, uncover their digital habits, and reach them through the digital channels they frequent.</p>
                <ul>
                    <li>SEO</li>
                    <li>Campaign Strategy & Planning</li>
                    <li>Google Adwords/PPC</li>
                    <li>Media Planning & Management</li>
                    <li>Analytics & Reporting</li>
                </ul>
                <a href="get-started" on:click={goToContact}>Apply Now</a>
            </div>
        </div>
        <div class="box">
            <div class="content">
                <h2>4</h2>
                <h3>Business Consulting</h3>
                <h4>Reach Your Goals.</h4>
                <p>Empower your business to achieve strategic outcomes through future-oriented actions that create long-term opportunities for growth. We think outside the box and have the technological versatility to back it up.</p>
                <ul>
                    <li>Infrastrcuture & Process Development</li>
                    <li>System Optimization</li>
                    <li>Strategic Planning</li>
                    <li>Lead Generation</li>
                    <li>Creatve Solutions</li>
                </ul>
                <a href="get-started" on:click={goToContact}>Apply Now</a>
            </div>
        </div>
    </div>
</div>