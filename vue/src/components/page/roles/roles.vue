<template>
  <el-card>
    <mybread firstnav="权限管理" lastnav="角色列表"/>
    <el-row class="myrow">
      <el-col :span="24">
        <el-button plain>添加角色</el-button>
      </el-col>
      <el-table :data="rolesList" border style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row v-for="item1 in scope.row.children" :key="item1.id">
              <el-col :span="4">
                <el-tag closable>{{item1.authName}}</el-tag>
                <i class="el-icon-arrow-right"></i>
              </el-col>
              <el-col :span="20">
                <el-row v-for="item2 in item1.children" :key="item2.id">
                  <el-col :span="5">
                    <el-tag closable type="success">{{item2.authName}}</el-tag>
                    <i class="el-icon-arrow-right"></i>
                  </el-col>
                  <el-col :span="19">
                    <el-tag
                      closable
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      type="danger"
                    >{{item3.authName}}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <span v-if="scope.row.children.length === 0">没有分配权限</span>
          </template>
        </el-table-column>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" plain type="primary" icon="el-icon-edit"></el-button>
            <el-button size="mini" plain type="danger" icon="el-icon-delete"></el-button>
            <el-button
              @click="openRole(scope.row.children, scope.row.id)"
              size="mini"
              plain
              type="success"
              icon="el-icon-check"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      rolesList: []
    };
  },
  methods: {
    async getAllRoles() {
      var res = await this.$http.request({
        url: "/roles",
        method: "get"
      });
      var { meta, data } = res.data;
      if (meta.status === 200) {
        this.rolesList = data;
      } else {
        this.$message.error(meta.msg);
      }
    }
  },
  mounted() {
    this.getAllRoles();
  }
};
</script>

<style>
.myrow {
  margin: 15px 0;
}
.el-tag {
  margin-top: 10px;
  margin-right: 10px;
}
</style>
