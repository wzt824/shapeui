<template>
    <div>
      所在城市：
      <select v-model="user.selectCity.pro" v-if="cityData">
        <option :value="p" :key="ind" v-for="(p,ind) in cityData">{{p.province}}</option>
      </select>
      <select v-model="user.selectCity.shi">
        <option :value="c" :key="ind" v-for="(c,ind) in user.selectCity.pro.cities">{{c.city}}</option>
      </select>
      <select v-model="user.selectCity.qu">
        <option :value="q" :key="ind" v-for="(q,ind) in user.selectCity.shi.areas">{{q}}</option>
      </select>
      <br>
      <br>
      {{username}}选择的城市是：
      {{user.selectCity.pro.province}}-{{user.selectCity.shi.city}}-{{user.selectCity.qu}}
    </div>
</template>

<script>
    export default {
        name: "SProvinceCityQu",
      props:["username"],
      data(){
        return{
          cityData:[
            {
              province:"陕西省",
              cities:[
                {city:"西安市",areas:["雁塔区","长安区","高新区"]},
                {city:"咸阳市",areas:["咸阳区1","咸阳区2"]}
              ]
            },
            {
              province:"甘肃省",
              cities:[
                {city:"兰州市",areas:["安宁区","七里河区","城关区","榆中县"]},
                {city:"张掖市",areas:["甘州区","民乐县","高台县","肃南县"]}
              ]
            },
            {
              province:"湖南省",
              cities:[
                {city:"长沙市",areas:["岳麓区","七里河区","城关区","榆中县"]},
                {city:"张掖市",areas:["甘州区","民乐县","高台县","肃南县"]}
              ]
            }
          ],
          user:{
            selectCity:{
              pro:"",
              shi:"",
              qu:""
            }
          },
        }
      }
    }
</script>

<style lang="stylus" scoped>
  select
    width 80px
    height 30px
    color #fff
    background #3b3c46
    option
      color #fff
</style>
