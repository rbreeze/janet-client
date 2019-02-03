<template>
  <section>
    <h1 class="title padLeft">About JANET</h1>

    <h2 class="subtitle padLeft">
      Javascript Application for iNterfacing EveryThing
    </h2>

    <p class="padLeft">JANET is designed to allow people to help people keep track of their daily lives. JANET is capable of storing items in a database using either Amazon's Alexa or our web interface.</p>
    <p class="padLeft">The program works by storing an item in a catagory, once stored the item can be added, quaried, and removed.</p>
    <p class="padLeft">Possible uses for janet include, but are not limited to:</p>

    <ul class="list-group fullPad">
      <li class="list-group-item">Tracking Refrigerator Contents</li>
      <li class="list-group-item">Tracking Closet Contents</li>
      <li class="list-group-item">Storing ideas/thoughts by catagory</li>
      <li class="list-group-item">Suggest a random item from a collection</li>
      <li class="list-group-item">Counting how many times someone says "ummm"</li>
      <li class="list-group-item"></li>

    </ul>

    <h2 class="padLeft">Using JANET with Alexa:</h2>
    <ul class="list-group fullPad" style="padding=15px">
      <li class="list-group-item">"Alexa, ask Janet helper how many eggs i have in the fridge."</li>
      <li class="list-group-item">"Alexa, ask Janet helper what my mom's favorite color is."</li>
      <li class="list-group-item">"Alexa, ask Janet helper if my t-shirt is clean."</li>
      <li class="list-group-item">"Alexa, ask Janet helper whats for dinner."(a random dinner, from your dinner collection)</li>
      <li class="list-group-item">"Alexa, ask Janet helper what to wear."</li>
      <li class="list-group-item">"Alexa, ask Janet helper how many miles i've ran this week."</li>
      <li class="list-group-item">"Alexa, ask Janet helper that my red t-shirt is dirty."</li>
      <li class="list-group-item">"Alexa, tell Janet helper that I ate three eggs from the fridge."</li>
      <li class="list-group-item">"Alexa, ask Janet helper for an item from my wardrobe."</li>

    </ul>

    <div class="container-fluid">
        <h2 class="collection">Project Documentation</h2>
        <div class="divPad"
        <a href="https://github.com/rbreeze/janet-client"
          target="_blank"
          class="button--grey"
        >GitHub - Janet Client</a>
      </div>

        <div class="divPad">
        <a href="https://github.com/rbreeze/janet-api"
          target="_blank"
          class="button--grey padle"
        >GitHub - Janet API</a>
      </div>
    </div>

    <div class="container-fluid">
        <h2 class="git-info"> Development Team:</h2>
          <h4>Hackathon 2/2/19 - Pacific RIM</h4>
        <div class="divPad">
          <a href="https://github.com/rbreeze"
            target="_blank"
            class="button--green"
          >GitHub - Remington Breeze</a>
        </div>

        <div class="divPad">
          <a href="https://github.com/imcdonald1"
            target="_blank"
            class="button--green"
          >GitHub - Ian Macdonald</a>
        </div>
        <div class="divPad">
          <a href="https://github.com/mmichelon"
            target="_blank"
            class="button--green"
          >GitHub - Maxwell Michelon</a>
        </div>
      </div>
    </div>

  </section>
</template>

<style>
.padLeft{
  padding-left: 10px;
}
.fullPad{
  padding: 10px;
}
</style>
