<template>
  <el-menu :router="true" default-active="2" class="el-menu-vertical-demo" :unique-opened="true">
    <el-submenu v-for="item1 in rightsList" :key="item1.id" :index="item1.path">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{item1.authName}}</span>
      </template>
      <el-menu-item v-for="item2 in item1.children" :key="item2.id" :index="'/' + item2.path">
        <i class="el-icon-menu"></i>
        <span>{{item2.authName}}</span>
      </el-menu-item>      
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
    data () {
        return {
            rightsList:[]
        }
    },
    methods: {
        async getRightsList () {
            var res = await this.$http.request({
                url:'/menus',
                method:'get'
            })
            var {meta,data} = res.data
            if(meta.status === 200) {
                this.rightsList = data
            } else {
                this.$message.console.error(meta.msg)
            }
        }
    },
    mounted () {
        this.getRightsList()
    }
};
</script>

<style>
.mymenu{
    height: 100%;
}
</style>
