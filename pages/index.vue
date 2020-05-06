<template>
  <div>
    <div class="section-header">
      <h1>Hello, friend..</h1>
      <p>This is the website of <strong>Nicky van Urk</strong>,
      programmer & tech enthusiast. Currently studying for my
      bachelor's degree in Computer Science.</p>
    </div>

    <div class="card-grid">
      <div class="card">
        <div class="card-header">
            <div class="card-icon">
                <i class="la la-school"></i>
            </div>
            <h3>Education</h3>
        </div>

        <p>
          <a href="/education/books">Books I've read</a><br>
          <a href="/education/courses">Courses I've followed</a><br>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Home'
      }
    },
    head () {
      return {
        title: this.title,
      }
    }
  }
</script>

<style>
  .card-grid {
    display: grid;
    grid-auto-columns: 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }

  .card {
    padding: 2.5rem;
    border-radius: 3px;
    background: rgb(15, 14, 23);
  }

  .card-header {
    display: flex;
    margin-bottom: 1rem;
    padding-top: 0px;
    align-items: center;
  }

  .card-icon {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    font-size: 70px;
    line-height: 0;
    background:#fffffe;
    border-radius: 3px;
  }

  .card h3 {
    color: #fffffe;
    margin-bottom: 0px;
  }

  .card p {
    color: #fffffe;
  }

  @media only screen and (max-width: 798px) {
    .card-grid {
      grid-template-columns: 1fr;
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
    }
  }

  /* .section {
    display: inline-block;
    vertical-align: top;
  }

  .section h2 {
    font-weight: bold;
    position: relative;
    font-size: 1.75em;
    line-height: 1.25;
    letter-spacing: -0.75px;
    margin: 1.75em 0 0.375em 0;
    overflow: hidden;
    font-size: 1.5em;
    line-height: 0.875;
    box-shadow: none;
    text-align: left;
    font-feature-settings: "smcp";
    padding: 0 1.375em 0 0;
  } */
</style>
