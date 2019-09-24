// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
    {
        title: 'Who',
        slug: 'who-tag',
        tagGlow: 'Brilliance',
        tag: 'Envisioneer',
        bob: 'Nerd Alert',
        secT: 'New Strategies. Old Values.',
        secB:
            'As members of the first generation to grow up in the age of the internet, the founders of goHere have a deep understanding of how tastes and technology have evolved coupled with an unmatched talent for predicting where they are headed.',
        button: 'Learn More',
        buttonHref: 'what',
        html: `			
			<div data-aos="fade-up" data-aos-offset="-300" class="bio chris">
            <div class="whoCol left">
                <h5 class="name">
                    christopher reid - lead growth envisioneer
                </h5>
                <h2 class="nick colorChange">
                    Ginger King
                </h2>
                <h3 class="main">
                    Christopher brings with him over a decade of experience working at the highest levels of the tech
                    world.
                </h3>
                <p class="desc">Using his vast knowledge of psychology and design expertise, Christopher is the architect behind our distinctly beautiful designs and the ways that they mesh perfectly with target users. He is known for his ability to imperceptibly engineer the desired thoughts, impressions, and experiences in consumers.
                    Some people outgrow childish shenanigans…some people master them. Chris certainly falls into the latter category; he combines his playful energy with his technology expertise to create unique user experiences that engage customers in a way no one else can.
                </p>
            </div>
            <div class="whoCol right">
                <div class="headShot chris"></div>
                <div class="stats">
                    <h5>Marketing</h5>
                    <div class="statLine c1">
                        <div class="inside"></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>Design</h5>
                    <div class="statLine c2">
                        <div class="inside"></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>Fear</h5>
                    <div class="statLine c3">
                        <div class="inside"></div>
                    </div>
                </div>
            </div>

        </div>
        <div data-aos="fade-up" data-aos-offset="-300" class="bio chris">
            <div class="whoCol left">
                <h5 class="name">
                    christopher reid - lead growth envisioneer
                </h5>
                <h2 class="nick colorChange">
                    Ginger King
                </h2>
                <h3 class="main">
                    Christopher brings with him over a decade of experience working at the highest levels of the tech
                    world.
                </h3>
                <p class="desc">Using his vast knowledge of psychology and design expertise, Christopher is the architect behind our distinctly beautiful designs and the ways that they mesh perfectly with target users. He is known for his ability to imperceptibly engineer the desired thoughts, impressions, and experiences in consumers.
                    Some people outgrow childish shenanigans…some people master them. Chris certainly falls into the latter category; he combines his playful energy with his technology expertise to create unique user experiences that engage customers in a way no one else can.
                </p>
            </div>
            <div class="whoCol right">
                <div class="headShot chris"></div>
                <div class="stats">
                    <h5>Marketing</h5>
                    <div class="statLine c1">
                        <div class="inside"></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>Design</h5>
                    <div class="statLine c2">
                        <div class="inside"></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>Fear</h5>
                    <div class="statLine c3">
                        <div class="inside"></div>
                    </div>
                </div>
            </div>

        </div>
        
        <div data-aos="fade-up" data-aos-offset="-300" class="bio jack">
            <div class="whoCol left">
                <h5 class="name">
                    Corey "Jack" LeMay - lead technology envisioneer
                </h5>
                <h2 class="nick">
                    Wunder Boy
                </h2>
                <h3 class="main">
                    Texas raised, Jack has been bringing his creative mind and energy to the tech world
                    since 2010.
                </h3>
                <p class="desc">
                    While attending the Art Institute of Austin for Web Development and Graphic Design,
                    he fatefully moved in next door to Chris. Thus began their entrepreneurial adventures.

                    With expert knowledge in all things IT, Jack ensures that your company receives
                    technology solutions that are on the cutting edge and extremely effective. His
                    commitment to excellence is matched only by the passion he brings to every project.
                </p>
            </div>
            <div class="whoCol right">
                <div class="headShot jack"></div>
                <div class="stats">
                    <h5>Design</h5>
                    <div class="statLine j1">
                        <div class="inside"></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>User Experience</h5>
                    <div class="statLine j2">
                        <div class="inside"></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>Golf</h5>
                    <div class="statLine j3">
                        <div class="inside"></div>
                    </div>
                </div>
            </div>
            

        </div>
        <div data-aos="fade-up" data-aos-offset="-300" class="bio teddy">
            <div class="whoCol left switch">
                <h5 class="name">
                    Teddy Balistreri - lead growth envisioneer
                </h5>
                <h2 class="nick">
                    Odd Job
                </h2>
                <h3 class="main">
                    When it comes to overcoming obstacles, Teddy has an intimate knowledge that sets him apart in
                    everything he does.
                </h3>
                <p class="desc">
                    After losing his leg as an adult, Teddy was faced with the challenge of learning how to
                    walk again. With a smile and determination, he has learned true strength through his
                    struggles, achieving levels of success that few rarely see.
                    His ability to persevere through challenges makes him our best solutions man. Teddy
                    tackles his work with unstoppable determination and creative energy.
                </p>
            </div>
            <div class="whoCol right">
                <div class="headShot teddy"></div>
                <div class="stats">
                    <h5>Business Development</h5>
                    <div class="statLine t1">
                        <div class="inside"></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>Resource Management</h5>
                    <div class="statLine t2">
                        <div class="inside"></div>
                    </div>
                </div>
                <div class="stats">
                    <h5>Walking</h5>
                    <div class="statLine t3">
                        <div class="inside"></div>
                    </div>
                </div>
            </div>

        </div>
		`
    },

    {
        title: 'How to use Sapper',
        slug: 'how-to-use-sapper',
        html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
    },

    {
        title: 'Why the name?',
        slug: 'why-the-name',
        html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
    },

    {
        title: 'How is Sapper different from Next.js?',
        slug: 'how-is-sapper-different-from-next',
        html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].html</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
    },

    {
        title: 'How can I get involved?',
        slug: 'how-can-i-get-involved',
        html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
    }
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
