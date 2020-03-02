<template>
  <div>
    <a id="top" name="top" aria-hidden="true"></a>

    <header class="bg-v t-w">
      <section>
        <h1>Rob Lowe</h1>
      </section>
    </header>

    <nav id="navigation" class="bg-v t-w">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#social">Social</a></li>
        <li><a href="#tech">❤️ Tech</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <main>
      <article id="thanks" aria-hidden="true">
        <section>
          <h2>Thanks!</h2>
          <p>Thank you for contacting me, I will respond in short order.</p>
          <p>❤️ Rob</p>
          <form @submit.prevent="closeMessage">
            <button>Close Message</button>
          </form>
        </section>
      </article>

      <article id="intro" class="bg-p t-w">
        <section>
          <picture>
            <source srcset="photos/minified/headshot.jpg" media="(min-width: 363px)" />
            <source srcset="photos/minified/headshot@0.5x.jpg" />
            <img src="photos/minified/headshot.jpg" alt="Photograph of Rob Lowe's head and shoulders. He is wearing a dark grey shirt, blue glasses, and a beard. The background is blurry, however a white wall and blue ceiling are recognizable." height="725" width="725" />
          </picture>
          <div>
            My name is Rob, <br />
            and I like to party.
          </div>
        </section>
      </article>

      <article id="about">
        <section>
          <h2>About Me</h2>
          <p>I am an experienced <strong>Front-end Developer</strong> with a deep understanding of Accessibility, <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>, and JavaScript and broad experience with the full-stack software development life cycle. I am passionate about creating beautiful interfaces that are both accessible and easy to use. I have achieved success through a combination of my own experience, by teaming up with anyone I can learn from, and a bit of luck. I firmly believe that diversity, equity, and inclusion make every team stronger and actively work to increase those qualities in my workplace.</p>
          <p>My preferred pronouns are <em>he</em>, <em>him</em>, and <em>his</em>.</p>
        </section>
      </article>

      <article id="social">
        <section>
          <h2>Social</h2>

          <ul class="flex-list">
            <li>
              <a href="https://www.linkedin.com/in/roberthenrylowe/">
                <img src="social/minified/linkedin.svg" alt="LinkedIn Logo" class="svg-img" />
                <span>in/roberthenrylowe</span>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/rhlowe">
                <img src="social/minified/twitter.svg" alt="Twitter Logo" class="svg-img" />
                <span>@rhlowe</span>
              </a>
            </li>

            <li>
              <a href="https://github.com/rhlowe">
                <img src="social/minified/github.svg" alt="Github Logo" class="svg-img" />
                <span>rhlowe</span>
              </a>
            </li>

            <li>
              <a href="mailto:rhlowe@gmail.com">
                <img src="social/minified/email.svg" alt="Email Logo" class="svg-img" />
                <span>rhlowe@gmail.com</span>
              </a>
            </li>
          </ul>

          <p class="ta-c">
            <small
              ><em>Icons provided by <a href="https://www.flaticon.com/authors/freepik" title="Freepik's author page on www.flaticon.com">Freepik</a> and <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect's author page on www.flaticon.com">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></em></small
            >
          </p>
        </section>
      </article>

      <article id="tech">
        <section>
          <h2>Tech I ❤️ Right now</h2>

          <ul>
            <li><img src="logos/minified/a11y-logo-hero.svg" alt="Accessibility" loading="lazy" /></li>
            <li><img src="logos/minified/HTML5_logo_and_wordmark.svg" alt="HTML5 logo and wordmark" loading="lazy" /></li>
            <li><img src="logos/minified/CSS3_logo_and_wordmark.svg" alt="CSS3 logo and wordmark" loading="lazy" /></li>
            <li><img src="logos/minified/JavaScript-logo.png" alt="JavaScript logo" loading="lazy" /></li>
            <li><img src="logos/minified/ember_Tomster.png" alt="Ember Tomster" loading="lazy" /></li>
            <li><img src="logos/minified/vuejs.svg" alt="Vue logo" loading="lazy" /></li>
            <li><img src="logos/minified/React_logo.png" alt="React" loading="lazy" /></li>
            <li><img src="logos/minified/python.svg" alt="Python" loading="lazy" /></li>
            <li><img src="logos/minified/flask.svg" alt="Flask" loading="lazy" /></li>
          </ul>
        </section>
      </article>

      <article id="resume">
        <section class="h-resume">
          <h2>Resume</h2>

          <h3>Work Experience</h3>

          <resume />

          <h3>Accomplishments</h3>

          <ul class="p-0">
            <li>
              <h4>February 2020</h4>
              Q2 Circle of Awesomeness - Culture Champion of the Year Finalist.
            </li>
          </ul>

          <h3>Certifications</h3>

          <h4>Scrum Master Certified (SMC)</h4>

          <ul class="p-0">
            <li>
              <a class="d-f" href="https://www.scrumalliance.org/community/profile/rlowe22"><img src="logos/minified/seal-csm.png" alt="Scrum Alliance Certified ScrumMaster® Seal" width="128" height="128" /> <span>Certified ScrumMaster®</span></a>
            </li>
          </ul>

          <h3>Education</h3>
          <ul class="p-0">
            <li>
              <h4>December 2005</h4>
              Bachelor of Art, Computer Art - Multimedia Design. <br />
              <a href="http://art.sf.edu/">University of Saint Francis School of Creative Arts</a>
            </li>
          </ul>
        </section>
      </article>

      <article id="contact">
        <section>
          <h2>Contact Me</h2>
          <form @submit.prevent="handleSubmit" method="POST" name="Contact" data-netlify="true" netlify>
            <label for="Name">Name</label>
            <input id="Name" type="text" name="Name" />

            <label for="Email">Email Address</label>
            <input id="Email" type="email" name="Email" />

            <label for="Message">Message</label>
            <textarea id="Message" name="Message" cols="30" rows="10"></textarea>

            <div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </section>
      </article>
    </main>

    <footer class="bg-v t-w">
      <section>
        <p class="ta-c">Copyright © Rob Lowe, {{ year }}.</p>
        <p class="ta-c"><img src="https://api.netlify.com/api/v1/badges/7d1f69ac-1b55-4c45-b66b-5c8a488f53c2/deploy-status" alt="Netlify Status" /></p>
      </section>
    </footer>

    <a href="#top" class="return_to_top" title="Return to Top">
      <svg>
        <use xlink:href="up.svg#up"></use>
      </svg>
    </a>
  </div>
</template>

<script>
import Resume from '~/components/Resume.vue';

export default {
  components: {
    Resume,
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
  mounted() {},
  methods: {
    closeMessage() {
      console.info('closeMessage');
      document.querySelector('#thanks').setAttribute('aria-hidden', true);
    },
    handleSubmit() {
      console.info('handleSubmit');
      document.querySelector('#thanks').setAttribute('aria-hidden', false);
      window.scrollTo(0, 0);
    },
  },
};
</script>
