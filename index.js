var app = new Vue({
    el: '#app',
    data:{

        list:[
            {
                name: 'iPhone7',
                price: 6188,
                count: 1,
                check: true
            },
            {
                name: 'iPad Pro',
                price: 5888,
                count: 1,
                check: false
            },
            {
                name: 'MacBook Pro',
                price: 21488,
                count: 1,
                check: false
            },
        ],
        newItem:'',
        newPrice:'',
    },
    computed:{
        totalPrice: function(){
            let total = 0
            for(item of this.list){
                if(item.check)
                    total += item.price * item.count
            }
            return total.toString()
        }
    },
    methods:{
        handleReduce: function(index){
            if(this.list[index].count === 1)
                return
            this.list[index].count--
        },
        handleAdd: function(index){
            this.list[index].count++
        },
        handleRemove: function(index){
            this.list.splice(index, 1)
        },
        addItem: function(){
            let add = {
                name: this.newItem,
                price: Number(this.newPrice),
                count: 1
            }
            this.list.push(add)
            this.newItem = ''
            this.newPrice = ''
        },
        allSelect : function(){
            for(item of this.list){
                item.check = true
            }
        }
    }
});