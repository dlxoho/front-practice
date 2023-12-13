<template>
 <div class="board-list">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray">등록</button>
    </div>
    <table class="w3-table-all">
      <thead>
      <tr>
        <th>No</th>
        <th>제목</th>
        <th>작성자</th>
        <th>등록일시</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(row,idx) in list" :key="idx">
          <td>{{ idx + 1 }}</td>
          <td><a @click="fnView(`${row.user_id}`)">{{ row.email }}</a></td>
          <td>{{ row.name }}</td>
          <td>{{ row.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        requestBody : {},
        list : {},
        no : ''
      }
    },
    mounted() {
      this.fetchBoardList();
    },  
    methods : {
      fetchBoardList() {
        this.$axios.get(this.$serverUrl + "/users", {
        }).then((res) => {
          
          this.list = res.data;

        }).catch((err) => {
          console.error(err);
        })
      },
      fnView(idx) {
        this.requestBody.idx = idx;
        this.$router.push({
          path : '/user/detail',
          query : this.requestBody
        });
      },
      fnWrite() {
        this.$router.push({
          path : './write'
        })
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>