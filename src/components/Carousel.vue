<script>
import { defineComponent } from 'vue';
import img2 from '@/assets/images/carousel2.png';

export default defineComponent({
  name: 'Carousel',
  data () {
    return {
      imgList: [img2, img2],
      currentSlide: 0
    };
  },
  mounted () {
    this.run();
  },
  methods: {
    run () {
      const slidesContainer = document.querySelector('.slides');
      const slides = Array.from(document.querySelectorAll('.slide'));

      this.currentSlide = 0;

      function showSlide (index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
      }

      const nextSlide = () => {
        this.currentSlide = (this.currentSlide + 1) % slides.length;
        // console.log(this.currentSlide);
        showSlide(this.currentSlide);
      };

      // function previousSlide () {
      //   currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      //   this.activeIndex = currentSlide;
      //   showSlide(currentSlide);
      // }

      // 自动轮播
      setInterval(nextSlide, 4000); // 每3秒切换到下一张图片
    },
    showSlide (index) {
      const slidesContainer = document.querySelector('.slides');
      this.currentSlide = index;
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    }
  }
})
;
</script>

<template>
  <div class="carousel">
    <div class="slideshow-container">
      <div class="slides">
        <div class="slide" v-for="(item,index) in imgList" :key="index">
          <div class="img" :style="[`background:url(${item}) no-repeat`]"></div>
        </div>
      </div>
    </div>
    <div class="indicators">
      <div class="item"
           :class="[currentSlide===(i-1)?'active':'']"
           v-for="i in imgList.length"
           :key="i"
           @click="showSlide(i-1)">
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.slideshow-container {
  overflow: hidden;
  height: 100%;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.slide {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
}

.slide .img {
  width: 100%;
  height: 100%;
  //background-repeat: no-repeat;
  background-size: cover !important;
}

.carousel {
  position: relative;
  height: 100%;
}

.indicators {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 35px;
  width: 100%;

  .item {
    width: 33px;
    height: 5px;
    background: #fff;
    margin-right: 8px;
  }

  .active {
    background: #FE5500 !important;
  }
}
</style>
