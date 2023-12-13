<template>
 <div class="board-detail">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" @click="fnDelete()">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" @click="fnList()">목록</button>
    </div>
    <div class="board-contents">
      <h3>{{ name }}</h3>
      <div>
        <strong class="w3-large">{{ email }}</strong>
        <br>
        <span>{{ created_at }}</span>
      </div>  
    </div>
    <div class="board-contents">
      <span>{{ age }}</span>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" >수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-red" @click="fnDelete()">삭제</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList()">목록</button>
    </div>
  </div>
</template>

<script>
  export default {  
    data() {
      return {
        requestBody : this.$route.query,
        idx : this.$route.query.idx,
        name : '',
        email : '',
        age : '',
        created_at : ''
      }
    },
    mounted() {
      this.fnUserShow();
    },
    methods : {
      fnUserShow() {
        this.$axios.get(this.$serverUrl + '/user/' + this.idx)
        .then((res) => {
          
          if (res.status === 200) {
            this.name = res.data.name;
            this.email = res.data.email;
            this.age = res.data.age;
            this.created_at = res.data.created_at;
          }

        })
        .catch((err) => {
          console.error(err);
        })    
      },  
      fnList() {
        delete this.requestBody.idx;
        this.$router.push({
          path : '/board/list',
          query : this.requestBody
        });
      },  
      fnUpdate () {
        this.$router.push({
          path : '/user/write',
          query : this.requestBody
        })
      },
      fnDelete () {
        if (!confirm("삭제하시겠습니까?")) return false;
        this.$axios.delete('http://127.0.0.1:8000/v1/user/' + this.idx, {})
        .then((res) => {
          if (res.data.result === 'success') {
            this.fnList();
          }
        })
        .catch((err) => {
          console.log(err);
        }); 
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>