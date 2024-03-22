<template>
    <div class="container-xl px-4 mt-4">
      <form @submit.prevent="saveChanges">
        <div class="row">
          <div class="col-xl-4">
            <!-- Profile Picture Card -->
            <div class="card mb-4 mb-xl-0">
              <div class="card-header">Profile Picture</div>
              <div class="card-body text-center">
                <img class="img-account-profile rounded-circle mb-2" :src="showImg(user.avatar) || require('@/assets/user.jpg')" alt="Profile Picture">
                <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                <input type="file" @change="handleImageUpload" class="form-control" style="margin-bottom: 15px;">
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <!-- Account Details Card -->
            <div class="card mb-4">
              <div class="card-header">Account Details</div>
              <div class="card-body">
                <div class="form-group mb-3">
                  <label class="small mb-1" for="first_name">First name</label>
                  <input v-model="user.first_name" type="text" class="form-control" id="first_name" placeholder="Enter your first name">
                </div>
                <div class="form-group mb-3">
                  <label class="small mb-1" for="last_name">Last name</label>
                  <input v-model="user.last_name" type="text" class="form-control" id="last_name" placeholder="Enter your last name">
                </div>
                <div class="form-group mb-3">
                  <label class="small mb-1" for="email">Email address</label>
                  <input v-model="user.email" type="email" class="form-control" id="email" placeholder="Enter your email" disabled>
                </div>
                <div class="form-group mb-3">
                  <label class="small mb-1" for="buyMeACoffee">Buy Me a Coffee URL</label>
                  <input v-model="user.url_pay_me_coffee" type="text" class="form-control" id="buyMeACoffee" placeholder="Enter your Buy Me a Coffee URL">
                </div>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        avatar: null,
        url_pay_me_coffee: '', 
        avatarFile: null,
      },
    };
  },
  methods: {
    handleImageUpload(event) {
      const files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
      this.user.avatarFile = files[0];
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.user.avatar = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    async saveChanges() {
      try {
        const formData = new FormData();
        formData.append('first_name', this.user.first_name);
        formData.append('last_name', this.user.last_name);
        formData.append('email', this.user.email);
        formData.append('buyMeACoffee', this.user.url_pay_me_coffee);
        if (this.user.avatarFile) {
          formData.append('avatar', this.user.avatarFile);
        }
        console.log(formData.get('avatar'));
 // Log FormData
        const token = localStorage.getItem('jwt');
        await axios.post('http://127.0.0.1:8000/api/user/update', formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log("Changes saved successfully.");
      } catch (error) {
        console.error("Error saving changes:", error);
      }
    },
    showImg(imageUrl) {
      return `http://localhost:8000/uploads/${imageUrl}`; 
    },

    async fetchUserData() {
      try {
        const token = localStorage.getItem('jwt');
        const userResponse = await axios.get('http://127.0.0.1:8000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.user = userResponse.data.user;
        console.log('Fetched user data:', this.user);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.$router.push('/userauth/login');
        } else {
          console.error('Error fetching user data:', error);
        }
      }
    },
  },
  mounted() {
    this.fetchUserData();
  }
};
</script>

<style scoped>
.img-account-profile {
  height: 10rem;
  width: 10rem;
}
.rounded-circle {
  border-radius: 50% !important;
}
</style>