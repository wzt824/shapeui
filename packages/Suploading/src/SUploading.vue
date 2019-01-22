<template>
  <input :type="loadingType" :accept="loadingAccept">
</template>

<script>
    export default {
      name: "SUploading",
      props:{
        loadingType:{
          type:String,
          default:"file"
        },
        loadingAccept:{
          type:String,
          default:"image/*"
        }
      }
    }
</script>

<style scoped lang="stylus">
</style>
