<template>
  <div>
    <vxe-table :data="tableData" stripe>
      <vxe-table-column type="seq" title="编号" width="60" align="right" />
      <vxe-table-column field="name" title="基金名称" show-overflow />
      <vxe-table-column
        field="company"
        title="基金公司"
        align="left"
      />
      <vxe-table-column field="fundtype" title="基金类型" width="180px" />
      <vxe-table-column
        field="valid_date"
        title="成立日期"
        width="180px"
        align="center"
      />
      <vxe-table-column
        field="scale"
        title="资金规模"
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
import { funds } from "../../datas/funds";
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
    this.getServerDatas()
  },
  methods: {
    getServerDatas() {
        this.tableData = funds.list
        this.tablePage.totalResult = this.tableData.length;
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