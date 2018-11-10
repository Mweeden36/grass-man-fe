<template>
  <div class="hello bot-pad">
    <div class="jumbotron">
      <img src="@/assets/main-image.jpg">
      <div class="hero">
        <h1>No Job too Big or too Small</h1>
        <h2>We Serve Better and Faster</h2>
        <router-link to="/services" class="button get-estimate">Get a Free Estimate</router-link>
      </div>
    </div>
    <div class="about-wrapper">
      <h2>Welcome!</h2>
      <div class="about-container">
        <p>{{blurb}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { blurb } from '../assets/config.json';

export default {
  name: 'HelloWorld',
  data() {
    return {
      blurb,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './src/styles/_variables.scss';
  @import './src/styles/_mixins.scss';

  .hello {
    .jumbotron {
      overflow: hidden;
      width: 100%;
      img {
        height: auto;
        width: 100%;
        filter: brightness(0.7);
        box-shadow: 2px 1px 2px $green-brown;
      }
      .hero {
        //TODO: Do this better. example:
        // item/grow-landscaping-and-gardening-wordpress-theme/full_screen_preview/20600417
        position: absolute;
        top: 40%;
        padding-left: 20px;
        @include tablet {
          top: 25%;
        }
        h1 {
          color: white;
          margin: 0px;
          font-weight: 700;

          @include phone {
            font-size: 1.2em;
          }
          @include narrow-phone {
            display: none;
          }
        }
        h2 {
          margin: 0px;
          color: $light-blue;
          font-weight: 500;

          @include phone {
            font-size: 1.0em;
          }
          @include narrow-phone {
            display: none;
          }
        }
        .button {
          display: inline-block;
          text-decoration: none;
          color: white;
          border-radius: 20px;
          padding: 10px 15px;
          border: 2px solid white;
          @include desktop {
            margin: 20px 0px 0px;
          }
        }
      }
    }
    .about-wrapper {
      width: 60%;
      @include tablet {
        width: 80%;
      }
      margin: 0px auto;
      h2 {
        color: $blue;
        margin-bottom: 5px;
        padding: 0px 20px;
      }
      .about-container {
        padding: 1px 20px;
        p {
          color: $blue;
        }
      }
    }
  }
</style>
