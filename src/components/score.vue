<template>
    <div class="score">
        您的成绩：{{score}}
        <div>{{tips}}</div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data(){
   return{
        standard_answer_id:[3,2,1,2],
        score:0,
        conclusion:['你说，是不是把知识都还给小学老师了？','需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！'],
        tips:"",
   } 
  },
  computed:mapState(["answerId"]),
  created(){
    this.initScore();
  },
  methods:{
      initScore(){
          let _self = this;
          this.answerId.forEach(function(item,index){
            if(item == _self.standard_answer_id[index]){
                _self.score+=25;
            }
          })

          this.initTips();
      },
      initTips(){
          let index= parseInt(this.score/25);
          this.tips = this.conclusion[index];
      }

  }
}
</script>
<style>
.score{
    color: #fff;
}
</style>


