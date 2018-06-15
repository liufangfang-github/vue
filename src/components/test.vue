<template>
<div>
    <Item father-component="Test"></Item>
</div>
</template>
<script>
import Item from "./Item"
export default {
    name:"Test",
    data(){
        return{
           
        }
    },
    components:{
        Item
    }
}
</script>