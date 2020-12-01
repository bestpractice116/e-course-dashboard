<template>
  <div class="flex">
    <Navigation />

    <main>
      <Container>
        <router-view />
      </Container>
    </main>

    <Sidebar />
  </div>
</template>

<script>
import Navigation from "./components/Navigation/Navigation.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Container from "./components/Global/Container.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Container,
    Sidebar,
  },
};
</script>