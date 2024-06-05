<template>
    <div class="container"> 
        <h2>Board List</h2>
        <div class="col p-3">
            <router-link class="btn btn-primary" to="/Input">
            Create New Post
            </router-link>
        </div>
        <table class="table table-striped table-bordered table-hover"> 
            <thead> 
                <tr class="table-dark text-white"> 
                    <th>id</th> 
                    <th>first name</th> 
                    <th>last name</th>
                    <th>email</th> 
                    <th>gender</th> 
                </tr> 
            </thead> 
            <tbody> 
                <tr v-for="item in json" :key="item.id"> 
                    <td>{{ item.id }}</td> 
                    <td>{{ item.first_name }}</td>
                    <td>{{ item.last_name }}</td>
                    <td>{{ item.email }}</td> 
                    <td>{{ item.gender }}</td> 
                </tr> 
            </tbody> 
        </table> 
    </div>

</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const json = ref([]);

const readList = async () => {
  try {
    const response = await axios.get('/api/members');
    if (response.status === 200) {
        json.value = response.data;
    } else {
        alert('데이터 조회 실패');
    }
  } catch(error) {
    alert('에러발생 :' + error);
  }
}

readList();
</script>