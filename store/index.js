// 页面路径：store/index.js
import { createStore } from 'vuex'
const store = createStore({
	state:{//存放状态
		"token":"",
		"username":"foo",
		"cart":[{
			id:"1",
			num:1,
			price:10
		}],
		mapGoodNum:{
			"1":{
				num:1
			}
		},
		sortCurrent:0
	},
	mutations:{
		addOneGood(state, payload){
			const {id, num, price} = payload;
			let i = 0;
			for(i = 0; i < this.state.cart.length; i++){
				if(id == this.state.cart[i].id){
					this.state.cart[i].num += 1;
					this.state.mapGoodNum[id].num += 1;
					break;
				}
			}
			if(i >= this.state.cart.length){
				this.state.cart.push({
					id:id,
					num:num,
					price:price
				})
				this.state.mapGoodNum[id] = {};
				this.state.mapGoodNum[id].num = 1;
			}
		},
		subtractOneGood(state, payload){
			const {id, num} = payload;
			let i = 0;
			for(i = 0; i < this.state.cart.length; i++){
				if(id == this.state.cart[i].id){
					this.state.cart[i].num -= 1;
					this.state.mapGoodNum[id].num -= 1;
					if(this.state.cart[i].num == 0){
						this.state.cart.splice(i, 1);
						delete this.state.mapGoodNum[id];
					}
					break;
				}
			}
		},
		changSortCurrent(state, current){
			this.state.sortCurrent = current;
		}
	},
	getters:{
		
	},
	actions:{
		
	}
})

export default store
