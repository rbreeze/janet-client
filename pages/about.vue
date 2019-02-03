<template>
  <section class="container my-4">
    <h1 class="title">About JANET</h1>

    <h2 class="subtitle">
      <span class="pink">J</span>avascript 
      <span class="pink">A</span>pplication 
      for 
      i<span class="pink">N</span>terfacing 
      <span class="pink">E</span>very<span class="pink">T</span>hing
    </h2>

    <p>
      JANET is designed to allow people to help people keep track of their daily lives. 
      JANET is capable of storing items in a database using either Amazon's Alexa or 
      our web interface.
    </p>

    <p>
      The program works by storing an item in a category, 
      once stored the item can be added, queried, and removed.
    </p>

    <p>Possible uses for JANET include, but are not limited to:</p>

    <ul class="list-group p-2">
      <li class="list-group-item">Tracking Refrigerator Contents</li>
      <li class="list-group-item">Tracking Closet Contents</li>
      <li class="list-group-item">Storing ideas/thoughts by category</li>
      <li class="list-group-item">Suggest a random item from a collection</li>
      <li class="list-group-item">Counting how many times someone says "ummm"</li>
      <li class="list-group-item"></li>
    </ul>

    <h2>Using JANET with Alexa:</h2>

    <ul class="list-group p-2">

      <li class="list-group-item">"Alexa, ask Janet helper how many eggs i have in the fridge."</li>
      <li class="list-group-item">"Alexa, ask Janet helper what my mom's favorite color is."</li>
      <li class="list-group-item">"Alexa, ask Janet helper if my t-shirt is clean."</li>
      <li class="list-group-item">"Alexa, ask Janet helper whats for dinner." 
                                  (a random dinner, from your dinner collection)
      </li>

      <li class="list-group-item">"Alexa, ask Janet helper what to wear."</li>
      <li class="list-group-item">"Alexa, ask Janet helper how many miles i've ran this week."</li>
      <li class="list-group-item">"Alexa, ask Janet helper that my red t-shirt is dirty."</li>
      <li class="list-group-item">"Alexa, tell Janet helper that I ate three eggs from the fridge."</li>
      <li class="list-group-item">"Alexa, ask Janet helper for an item from my wardrobe."</li>

    </ul>

    <div class="container-fluid mb-2">
      <h2>Project Documentation</h2>
      <div>
        <a href="https://github.com/rbreeze/janet-client"
          target="_blank"
          class="button--grey"
        >
          GitHub - Janet Client
        </a>
      </div>
      <div>
        <a href="https://github.com/rbreeze/janet-api"
          target="_blank"
          class="button--grey"
        >
          GitHub - Janet API
        </a>
      </div>
    </div>

    <div class="container-fluid">

      <h2 class="git-info"> Development Team:</h2>
      <h4>Hackathon 2/2/19 - Pacific RIM</h4>
      <div>
        <a href="https://github.com/rbreeze"
          target="_blank"
          class="button--green"
        >
          GitHub - Remington Breeze
        </a>
      </div>

      <div>
        <a href="https://github.com/imcdonald1"
          target="_blank"
          class="button--green"
        >
          GitHub - Ian Macdonald
        </a>
      </div>
      <div>
        <a href="https://github.com/mmichelon"
          target="_blank"
          class="button--green"
        >
          GitHub - Maxwell Michelon
        </a>
      </div>
    </div>

  </section>
</template>

<style lang="less" scoped>
@import '~assets/less/colors.less';
a {
  color: @blue;
}
.pink {
  color: @pink;
}
</style>
