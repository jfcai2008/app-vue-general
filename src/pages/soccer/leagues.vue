<template>
  <div>
    <vxe-table :data="tableData" stripe>
      <vxe-table-column type="seq" title="编号" width="60" align="right" />
      <vxe-table-column field="OwnerName" title="主队" show-overflow />
      <vxe-table-column field="MatchTime" title="比赛时间" align="left" />
      <vxe-table-column field="GuestName" title="客队" width="180px" />
      <vxe-table-column
        field="MatchScore"
        title="比分"
        width="180px"
        align="center"
      />
      <vxe-table-column
        field="MatchName"
        title="赛名"
        width="180px"
        align="right"
      />
      <vxe-table-column title="操作" width="300px" align="right">
        <template v-slot="{ row }">
          <vxe-button @click="showDetail(row)">详情</vxe-button>
          <vxe-button @click="deleteRow(row)">删除</vxe-button>
          <vxe-button @click="downloadRow(row)">下载</vxe-button>
        </template>
      </vxe-table-column>
    </vxe-table>
    <vxe-pager
      background
      size="small"
      :loading="loading3"
      :current-page="tablePage.currentPage"
      :page-size="tablePage.pageSize"
      :total="tablePage.totalResult"
      :page-sizes="[
        10,
        20,
        100,
        { label: '大量数据', value: 1000 },
        { label: '全量数据', value: -1 },
      ]"
      :layouts="[
        'PrevPage',
        'JumpNumber',
        'NextPage',
        'FullJump',
        'Sizes',
        'Total',
      ]"
      @page-change="handlePageChange3"
    />
  </div>
</template>
<script>
import tools from "../../config/serverapi";
import CONFIG from "../../config/appconfig";
export default {
  data() {
    return {
      tableData: [],
      loading3: false,
      tablePage: {
        currentPage: 1,
        pageSize: CONFIG.PageSize,
        totalResult: 0,
      },
    };
  },
  mounted() {
    this.getServerDatas();
  },
  methods: {
    getServerDatas() {
      let act = `soccer-api?act=league_matches&continent=01&country=0105&cup=010501&season=2001-2002`;
      tools.axiosGet(act).then((dds) => {
        this.tableData = dds.data.matches;
        this.tablePage.totalResult = this.tableData.length;
      });
    },
    showDetail(row) {
      console.log(row);
    },
    deleteRow(row) {
      console.log(row);
    },
    downloadRow(row) {
      console.log(row);
    },
    handlePageChange3({ currentPage, pageSize }) {
      this.tablePage.currentPage = currentPage;
      this.tablePage.pageSize = pageSize;
      //   this.getServerDatas()
    },
  },
};
</script>

<style lang="sass" scoped>
</style>