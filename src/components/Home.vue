<template>
  <div class="hello bot-pad">
    <Carousel
      dots="none"
      arrow="never"
      class="jumbotron"
      :height="300">
      <CarouselItem>
        <div class="hero">
          <h1>No Job too Big or too Small</h1>
          <h2>We Serve Better and Faster</h2>
          <router-link to="/services" class="button get-estimate">
            <Button ghost>
              Get a Free Estimate
            </Button>
          </router-link>
        </div>
      </CarouselItem>
    </Carousel>
    <Card class="about-wrapper">
      <h2 slot="title">Welcome!</h2>
      <div class="about-container">
        <p>{{blurb}}</p>
      </div>
    </Card>
  </div>
</template>

<script>
import { Button, Card, Carousel, CarouselItem } from 'iview';
import { blurb } from '../assets/config.json';

export default {
  name: 'HelloWorld',
  components: {
    Button,
    Card,
    Carousel,
    CarouselItem,
  },
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
      box-shadow: 2px 1px 2px $green-brown;
      color: #FFF;
      &::before {
        content: "";
        position: absolute;
        background-size: cover;
        background-image: url("/static/img/main-image.jpg");
        background-position-y: bottom;
        filter: brightness(0.7);
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
      }
      .ivu-carousel-item {
        display: flex;
        align-items: center;
        .hero {
          padding: 0px 10px;
        }
      }
    }
    .about-wrapper {
      margin: 10px auto 0px;
      width: 60%;
      color: $blue;
      @include tablet {
        width: 80%;
      }
      h2 {
        margin-bottom: 5px;
      }
      > * {
        padding: 0px 20px;
      }
    }
  }
</style>
