<template>
  <div class="backgroundHome">
    <NavBar />
    <div class="container">
      <div>
        <img src="../../assets/tikal_tech_logotypeName.webp" alt="Tikal Name" />
      </div>
      <div>
        <router-link to="/login" class="btn btn-secondary actionButtons">Login</router-link>
        <a href="https://www.tikal.tech" class="btn btn-info actionButtons">Conheça-nos mais </a>
      </div>

      <div
        id="carouselExampleControls"
        class="carousel slide mt-4"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h3>Solidez</h3>
            <p>Pioneirismo, Confiabilidade, Estruturação, Low Profile</p>
          </div>
          <div class="carousel-item">
            <h3>Assertividade</h3>
            <p>Agilidade, Minúcia, Direto ao ponto</p>
          </div>
          <div class="carousel-item">
            <h3>Disrupção</h3>
            <p>Inovação, Novos paradigmas, Trends</p>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import NavBar from '../NavBar'
export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>

<style scoped>
.backgroundHome {
  background-image: url(../../assets/tikal_tech_homeBackground.webp);
  height: 100vh;
}
.container {
  width: 70%;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container > div {
  margin-bottom: 30px;
}
.actionButtons{
  min-width: 150px;
  min-height: 50px;
  margin-right: 10px;
}
.carousel-item {
  text-align: center;
  color: white;
  font-size: 30px;
  font-weight: 800;
  font-style: italic;
  letter-spacing: 10px;
}
.carousel-item p {
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 5px;
}
.carousel-control-prev {
  padding-right: 120px;
  margin-bottom: 30px;
}
.carousel-control-next {
  padding-left: 120px;
  margin-bottom: 30px;
}
</style>
