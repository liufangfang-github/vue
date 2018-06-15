export default {
    addItem: (state, num) => {
        state.itemNum += num;
        console.log(state.itemNum)
    },
    saveAnswer: (state, id) => state.answerId.push(id),
}