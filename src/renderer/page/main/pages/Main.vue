<template>
  <div ref="container">
    <h1>我是主页面</h1>
    <button @click="openNewPage">{{title}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowNewPage: false,
      title: '打开新页面'
    }
  },
  created () {
    console.log(this.$electron.ipcRenderer.send)
  },
  methods: {
    openNewPage() {
      this.isShowNewPage = !this.isShowNewPage;
      if (this.isShowNewPage) {
        this.title = '关闭新页面'
        this.$electron.ipcRenderer.send('showNewPageWindow');
      } else {
        this.title = '打开新页面'
        this.$electron.ipcRenderer.send('hideNewPageWindow');
      }
    },
  },
}
</script>

