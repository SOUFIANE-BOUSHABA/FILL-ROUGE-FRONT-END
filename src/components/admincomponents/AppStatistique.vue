<template>
  <div>
    <div class="card-container d-flex justify-content-between">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total Users</h5>
          <p class="card-text">{{ countuserrr }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total Topics</h5>
          <p class="card-text">{{ countTopic }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total Comments</h5>
          <p class="card-text">{{ countcomments }}</p>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total Topic Votes</h5>
          <p class="card-text">{{ counttopicVotes }}</p>
        </div>
      </div>

      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total Comment Votes</h5>
          <p class="card-text">{{ countcommentVotes }}</p>
        </div>
      </div>
      
    </div>

    <div class="card card2">
      <canvas id="userChart" width="400" height="200"></canvas>
    </div>
    
  </div>
</template>


<script>
import axios from 'axios';
import Chart from 'chart.js/auto';

export default {
  name: 'StatisticsPage',
  data() {
    return {
      countuserrr : '',
      countTopic:'',
      countcomments:'',
      counttopicVotes:'',
      countcommentVotes:'',

      userChart: null,
      chartData: {
        labels: [],
        datasets: [{
          label: 'Number of Users',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: []
        }]
      }
    };
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/getNumberOfUserPerDay');
        console.log('User data:', response.data);
        this.chartData.labels = response.data.dates;
        this.chartData.datasets[0].data = response.data.usersCount;
        this.countuserrr = response.data.countuserrr;
        this.countTopic = response.data.countTopic;
        this.countcomments = response.data.countcomments;
        this.counttopicVotes = response.data.counttopicVotes;
        this.countcommentVotes = response.data.countcommentVotes;
        this.renderChart();
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    renderChart() {
      if (this.userChart) {
        this.userChart.destroy();
      }
      const ctx = document.getElementById('userChart').getContext('2d');
      this.userChart = new Chart(ctx, {
        type: 'line',
        data: this.chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  },
  mounted() {
    this.fetchUserData();
  }
};
</script>

<style scoped>
.card{
  width: 13rem;
  margin-bottom: 1rem;
}
.card2{
  width: 65rem;
  height: 30rem;
}
</style>
