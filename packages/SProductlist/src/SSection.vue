<template>
    <div class="section">
      <s-section-nav :navInfo="navInfo"></s-section-nav>
      <s-section-list :picCard="picCard" :data="data"></s-section-list>
    </div>
</template>

<script>
  import  SSectionNav from './SSectionNav'
  import  SSectionList from './SSectionList'
    export default {
      props:["picCard","navInfo","data"],
      name: "SSection",
      components:{SSectionNav,SSectionList}
    }
</script>

<style scoped lang="stylus">
.section
  height 100%
  background #f1f1f1
</style>
