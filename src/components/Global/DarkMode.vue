<template>
  <div class="dark-mode-box text-black dark:text-white">
    <IconDynamic icon="light" />
    <label for="modecheckbox" class="checkbox-input">
      <input type="checkbox" name="checkbox" id="modecheckbox" @click="modeActive" v-model="checked" />
      <span class="checkbox"></span>
    </label>
    <IconDynamic icon="night" />
  </div>
</template>

<script>
import IconDynamic from "../Global/IconDynamic.vue";
export default {
  name: "DarkModeButton",
  components: {
    IconDynamic,
  },
  data() {
    return {
      checked: false,
    };
  },
  created() {
    this.checked = localStorage.getItem("position");
  },
  methods: {
    modeActive() {
      // dark
      this.$store.dispatch("toggleTheme");

      // checkbox
      let position = localStorage.getItem("position");
      if (position && position == "true") {
        localStorage.setItem("position", "");
      } else {
        localStorage.setItem("position", !this.checked);
      }
    },
  },
};
</script>

<style scoped>
.dark-mode-box {
  display: flex;
  align-items: center;
}
.checkbox-input {
  display: inline-block;
  height: 42px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  place-items: center;
  cursor: pointer;
}
input {
  display: none;
}
input:checked + .checkbox {
  background-color: rgb(173, 173, 173);
}
input:checked + .checkbox::before {
  left: 25px;
}
.checkbox {
  width: 53px;
  min-width: 53px;
  height: 28px;
  border-radius: 14px;
  background-color: #000;
  display: inherit;
  position: relative;
  transition: 400ms background-color;
}
.checkbox::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  top: 4px;
  left: 4px;
  bottom: 4px;
  transition: 400ms left;
}
</style>