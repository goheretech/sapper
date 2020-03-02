<script>
  (function($) {
    $(document).ready(function() {
      $.jScrollability([
        {
          selector: ".text-wrapper",
          start: function($el) {
            return $el.offset().top + $el.height();
          },
          end: "parent",
          fn: function($el, pcnt) {
            var $spans = $el.find("span");
            var point = Math.floor(($spans.length + 1) * pcnt);
            $spans.each(function(i, el) {
              var $span = $(el);
              if (i < point) {
                $span.addClass("visible");
              } else {
                $span.removeClass("visible");
              }
            });
          }
        }
      ]);
    });
  })(jQuery);
</script>

<style>
  .section {
    height: 100vh;
  }
  .section-3 .text-wrapper {
    max-width: 600px;
    margin: auto;
    font-size: 2em;
    line-height: 1.5em;
    margin-top: 4%;
  }

  .section-3 .text-wrapper span {
    opacity: 0;
    -webkit-transition: opacity 0.2s;
  }

  .section-3 .text-wrapper span.visible {
    opacity: 1;
  }
  .section-3 {
    background: purple;
  }
  .section-1 .slide-in-demo {
    position: absolute;
    top: 15%;
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 4em;
  }
</style>

<section class="section" />
<section class="section section-3">
  <p class="text-wrapper">
    <span>Even reveal</span>
    <span>whole spans</span>
    <span>of text</span>
    <span>within</span>
    <span>long paragraphs</span>
    <span>while the user</span>
    <span>scrolls</span>
    <span>with jScrollability.</span>
  </p>
</section>
<section class="section" />
