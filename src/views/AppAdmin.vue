<template>
   <div class="container-fluid">
  <div class="row">
                <aside class="left shadow " id="myAside">
                <div class="d-flex  gap-2 mb-5">
                   
                    <h3 class="link">  foru<span class="my-custom-color">me</span> </h3>
                </div>
            <router-link to="/admin/statistique" class="d-flex gap-3 align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
                </svg>
            <span class="link">Statistique</span>  
            </router-link>
            <router-link to="/admin/category" class="d-flex gap-3 align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16"> <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/> </svg>
                <span class="link">Catégories</span>  
            </router-link>

            <router-link to="/admin/tag" class="d-flex gap-3 align-items-center"> 
           
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16"> <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/> <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/> </svg>  
                <span class="link">Tags</span>   </router-link>
            <router-link to="/admin/users" class="d-flex gap-3 align-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 640 512"><path d="M640 51.2l-.3 12.2c-28.1.8-45 15.8-55.8 40.3-25 57.8-103.3 240-155.3 358.6H415l-81.9-193.1c-32.5 63.6-68.3 130-99.2 193.1-.3.3-15 0-15-.3C172 352.3 122.8 243.4 75.8 133.4 64.4 106.7 26.4 63.4.2 63.7c0-3.1-.3-10-.3-14.2h161.9v13.9c-19.2 1.1-52.8 13.3-43.3 34.2 21.9 49.7 103.6 240.3 125.6 288.6 15-29.7 57.8-109.2 75.3-142.8-13.9-28.3-58.6-133.9-72.8-160-9.7-17.8-36.1-19.4-55.8-19.7V49.8l142.5.3v13.1c-19.4.6-38.1 7.8-29.4 26.1 18.9 40 30.6 68.1 48.1 104.7 5.6-10.8 34.7-69.4 48.1-100.8 8.9-20.6-3.9-28.6-38.6-29.4.3-3.6 0-10.3.3-13.6 44.4-.3 111.1-.3 123.1-.6v13.6c-22.5.8-45.8 12.8-58.1 31.7l-59.2 122.8c6.4 16.1 63.3 142.8 69.2 156.7L559.2 91.8c-8.6-23.1-36.4-28.1-47.2-28.3V49.6l127.8 1.1.2.5z"/></svg>  
            <span class="link">Users</span>  
            </router-link>
            </aside>
            <div class="right" id="right">
            <header class="">
            <div class="w-full navv d-flex shadow justify-content-between align-items-center">

                <button class="btn btn-light" id="leftBtn"  @click="toggleAside()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </button>
                <button class="btn btn-light" id="rightBtn"  @click="toggleAside()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"/>
                    </svg>
                </button>
                <div class="dropdown ">
                    <button class="btn btn-dark dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><router-link class="dropdown-item" to="/">visiter le site web</router-link></li>
                        <button @click="logout" class="btn w-100">Logout</button>

                    </ul>
                    </div>

            </div>
        </header>

        <main>
            <router-view></router-view>
        </main>
    </div>
  </div>
   </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'AppAdmin',
  
    methods: {
        toggleAside() {
            var aside = document.getElementById("myAside");
            var righttt = document.getElementById("right");
            var rightttBtn = document.getElementById("rightBtn");
            var leftBtn = document.getElementById("leftBtn");
            var links = document.querySelectorAll(".link");
            if (aside.style.width === "5%") {
                aside.style.width = "17%";
                righttt.style.width = "83%";
                leftBtn.style.display = "block";
                rightttBtn.style.display = "none";
                links.forEach(function (link) {
                    link.style.display = "block";
                });
            }
            else {
                aside.style.width = "5%";
                righttt.style.width = "95%";
                leftBtn.style.display = "none";
                rightttBtn.style.display = "block";
                links.forEach(function (link) {
                    link.style.display = "none";
                });
            }
        },

        async logout() {
        try {
            const token = localStorage.getItem('jwt');
            await axios.post('http://127.0.0.1:8000/api/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            });
            localStorage.removeItem('jwt');
            this.loggedIn = false; 
            this.$router.push('/userauth/login');

            setTimeout(() => {
        window.location.reload();
        }, 100);
        } catch (error) {
            console.error('Logout failed:', error);
        }
        },
      
       
    },



};
  </script>
  <style scoped>
  
body {
  margin: 0;
  padding: 0;
}

aside {
 
  background-color: #f8f9fa;
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 20px;
  text-align: center;
  transition: width 0.3s ease;

}


aside a {
  
  display: block;
  padding: 10px;
  text-decoration: none;
  color: #000000;
  transition: background-color 0.3s;
}

aside a:hover {
  background-color: #dcdcdc;
}

header {
    height: 100px;
  background-color:#F5F5F4;
  color: #ffffff;
  padding-bottom: 10px;
  text-align: center;
  z-index: 10;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); 
}

.navv{
    padding-right:20px ;
    background-color: white;
    height: 80px;
}

main {
  background-color:#F5F5F4;
  padding: 20px;
  min-height: 100vh;
}

.card {
border: none;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 5px;
}
.left{
width:17%;
transition: width 0.3s ease;
text-align: left;

}
.right {
    padding: 0%;
    width: 83%;
    transition: width 0.3s ease;
}


#rightBtn{
    display: none;
}
.link{
    transition: 3s ease;
}


.d-flexxx {
align-items: flex-end; 
}



input {
border: none; 
border-bottom: 2px solid gray;
outline: none;
transition: border 0.3s; 
}

input:focus {
border-bottom: 2px solid #007bff; 
}


  </style>
  