<template>
  <div class="">
    <div class="donut-chart">
      <div id="part1" class="portion-block">
        <div class="circle"></div>
      </div>
      <div id="part2" class="portion-block">
        <div class="circle"></div>
      </div>
      <div id="part3" class="portion-block">
        <div class="circle"></div>
      </div>

      <div class="middlepart bg-gray-100 dark:bg-gray-800 flex justify-center items-center w-12 h-10 rounded-lg">
        <IconDynamic icon="courses" />
      </div>

    </div>
  </div>
</template>

<script>
import IconDynamic from "../../Global/IconDynamic.vue";
export default {
  name: "Donut",
  components: {
    IconDynamic,
  },
};
</script>

<style scoped>
.donut-chart {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 2rem;
  border-radius: 100%;
}

div.middlepart {
  /*background: #394264;*/
  /*background: rgb(240, 237, 237);*/
  position: absolute;
  text-align: center;
  font-size: 28px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 90px;
  height: 90px;
  margin: auto;
  border-radius: 50%;
  line-height: 35px;
  /*padding: 15% 0 0;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.portion-block {
  border-radius: 10px;
  clip: rect(0px, 200px, 200px, 100px);
  height: 100%;
  position: absolute;
  width: 100%;
}
.circle {
  border-radius: 50%;
  clip: rect(0px, 100px, 200px, 0px);
  height: 100%;
  position: absolute;
  width: 100%;
  font-family: monospace;
  font-size: 1.5rem;
}

#part1 {
  transform: rotate(0deg);
}
#part1 .circle {
  background-color: #f244b3;
  /*transform: rotate(76deg);*/
  animation: first 1s 1 forwards;
}

#part2 {
  transform: rotate(100deg);
}
#part2 .circle {
  background-color: #55a7f1;
  animation: second 1s 1 forwards 0.5s;
}
#part3 {
  transform: rotate(250deg);
}
#part3 .circle {
  background-color: rgba(229, 231, 235);
  animation: third 0.5s 1 forwards 1s;
}

/* Animation */
@keyframes first {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(100deg);
  }
}

@keyframes second {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(150deg);
  }
}

@keyframes third {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(111deg);
  }
}
</style>