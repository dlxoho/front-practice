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
          <td>{{ row.idx }}</td>
          <td><a>{{ row.title }}</a></td>
          <td>{{ row.writer }}</td>
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
        no : '',
        paging : {
          'block' : 0,
          'end_page' : 0,
          'next_block' : 0,
          'page' : 0,
          'page_size' : 0,
          'prev_block' : 0,
          'start_index' : 0,
          'start_page' : 0,
          'total_block' : 0,
          'total_list_cnt' : 0,
          'total_page_cnt' : 0,
        },
        page : this.$route.query.page ? this.$route.query.page : 1,
        size : this.$route.query.size ? this.$route.query.size : 10,
        keyword : this.$route.query.keyword,
        paginavigation: function () {
          let pageNumber = [] 
          let start_page = this.paging.start_page;
          let end_page = this.paging.end_page;
          for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
          return pageNumber;
        }
      }
    },
    mounted() {
      this.fetchBoardList();
    },  
    methods : {
      fetchBoardList() {
        this.list = [
          {
            'idx' : 1,
            'title' : '테스트입니다',
            'writer' : '테스터',
            'created_at' : '2023-12-22'
          },
           {
            'idx' : 2,
            'title' : '공지사항입니다',
            'writer' : '관리자',
            'created_at' : '2023-11-23'
          },
           {
            'idx' : 3,
            'title' : '게시물입니다',
            'writer' : '유저',
            'created_at' : '2023-10-22'
          },
        ]
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>