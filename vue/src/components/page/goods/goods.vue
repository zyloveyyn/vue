<template>
  <el-card>
    <mybread firstnav="商品管理" lastnav="商品列表"/>
    <el-row class="myrow">
      <el-col :span="8">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="16">&nbsp;&nbsp;
        <el-button type="success" plain @click="add">添加商品</el-button>
      </el-col>
    </el-row>
    <el-table :data="goodsList" border style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="goods_name" label="商品名称"></el-table-column>
      <el-table-column prop="goods_price" label="商品价格（元）"></el-table-column>
      <el-table-column prop="goods_weight" label="商品重量"></el-table-column>
      <el-table-column label="创建时间">
        <template slot-scope="scope">{{ scope.row.upd_time | dateformat }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <div>
            <el-button size="mini" plain type="primary" icon="el-icon-edit"></el-button>
            <el-button size="mini" plain type="danger" icon="el-icon-delete"></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      goodsList: [],
      pagenum: 1,
      pagesize: 10,
      total: 0
    };
  },
  methods: {
    async getGoodsList() {
      var res = await this.$http.get(
        `/goods?query=${this.search}&pagenum=${this.pagenum}&pagesize=${
          this.pagesize
        }`
      );
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.goodsList = data.goods;
        this.total = data.total;
      } else {
        this.$message.error(meta.msg);
      }
    },
    add() {
      this.$router.push("/goods/add");
    }
  },
  mounted() {
    this.getGoodsList();
  }
};
</script>

<style>
.myrow {
    margin: 15px 0;
}
</style>


