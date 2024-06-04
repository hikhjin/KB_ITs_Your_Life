<template>
    <div class="container">
        <h2>Boxoffice API</h2>
        Date : <input type="text" v-model="date" placeholder="20240602">
        <button @click="getBoxoffice">요청</button><br>
        <dix v-for="item in boxofficeList" :key="item.rank">
            rank: <b>{{ item.rank }}</b><br>
            movieNm: <b>{{ item.movieNm }}</b><br>
            audiAcc: <b>{{ item.audiAcc }}</b><br><hr>
        </dix>

    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
// 영화 api : https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
const boxofficeURL = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=4298055d882fbc5c120b654c1fa42815';

const date = ref('20240602');
const boxofficeList = ref([]);

//ajax를 통해 boxoffice api를 호출하는 함수
//axios가 promise 기반이기 때문에 async/await를 사용하는 것이 편함
const getBoxoffice = async (e) => {
    try {
        //url 선언하기
        const requestURL = boxofficeURL + '&targetDt=' + date.value;

        // 요청 방법 : https://axios-http.com/kr/docs/api_intro
        // 요청 config(옵션) : https://axios-http.com/kr/docs/req_config
        // const response = await axios.get(requestURL); // 가장 간단한 요청 방법
        const config = {timeout:10000, responseType:'json'};
        const response = await axios.get(requestURL, config); 
    

        console.log('response');
        console.log(response);
        console.log('response.data');
        console.log(response.data);

        // 응답 스키마 : https://axios-http.com/kr/docs/res_schema
        if (response.status != 200 || !response.data.boxOfficeResult.weeklyBoxOfficeList || response.data.boxOfficeResult.weeklyBoxOfficeList.length == 0) {
            alert('잘못된 요청입니다.');
            boxofficeList.value = [];
            return;
        }
        boxofficeList.value = response.data.boxOfficeResult.weeklyBoxOfficeList;
    } catch (error) {
        alert('에러가 발생했습니다.')
        console.error('error');
        console.error(error);
    }
    
}

</script>