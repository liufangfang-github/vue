<template>
    <div>
        <div class="start" v-if="fatherComponent == 'home'">
            <button class="start_btn" v-on:click="start">开始</button>
        </div>
        <div v-if="fatherComponent == 'Test'" class="answer_container">
            <div class="answer">
                <div v-for="(item,index) in itemDetail[itemNum-1].topic_answer" v-bind:key="item.answer_id">
                    <input type="radio" v-bind:id="gernerateId(index)" v-bind:value="item.answer_id" v-model="selected">
                    <label :for="gernerateId(index)">{{item.answer_name}}</label>
                </div>
            </div>
            
            <div class="action_container">
                <span v-on:click="nextItem" v-if="itemNum < itemDetail.length" class="next">下一题</span>
                <span v-on:click="submit" v-else class="next">提交答案</span>
            </div>
        </div>

    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    name:"Item",
    data(){
        return{
            selected: null,
        }
    },
    props:['fatherComponent'],
    computed:mapState([
        'itemNum',
        "itemDetail"
    ]),
    methods:{
        ...mapActions([
            "addItem","saveAnswer",
        ]),
        nextItem(){
            console.log(this.selected)
            if(this.selected !== null){
                this.addItem(this.selected)
                this.selected = "";
            }else{
                alert("还没有选择答案哦~");
            }
        },
        gernerateId(_index){
            return "radio"+_index;
        },
        start(){
            this.$router.push("test")
        },

        submit(){
            if(this.selected !== null){
                this.addItem(this.selected)
                this.selected = "";
                this.$router.push("score")
            }else{
                alert("还没有选择答案哦~");
            }
        }
    }
}
</script>

<style>
label,input{padding: 0;margin: 0}
.answer_container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

    .answer_container .action_container,.answer_container .answer{
        font-size: 14px;
        display: inline-block;
        line-height: 28px;
        width: 115px;
        text-align: left;
    }

.answer_container label{
    color: #fff;
}

    .next{
        cursor: pointer;
        color: #fff;
        font-size: 14px;
        margin-top: 20px;
        display: inline-block;
    }

    .answer_done{
        color: #fff;
    }

    .start_btn{
        border: 1px #333 solid;
        border-radius: 4px;
        background-color: coral;
        color: #fff;
        padding: 10px 20px;
        font-size: 14px;
    }
</style>
