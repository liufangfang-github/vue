export default {
    addItem(context, id) {
        console.log(context)
        context.commit('saveAnswer', id);
        if (context.state.itemNum < context.state.itemDetail.length) {
            context.commit('addItem', 1);
        }
    }
}