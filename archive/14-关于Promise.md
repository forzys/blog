- **什么是Promise**

```
Promise 是 ES6 异步编程的一种解决方案 (目前最先进的解决方案是 async 和 await 的搭配（ES8），
但是它们是基于 promise 的)，从语法上讲，Promise 是一个对象或者说是构造函数，
用来封装异步操作并可以获取其成功或失败的结果
```

- **为什么要使用 Promise**

```
最重要也是最主要的一个场景就是ajax 和axios 请求。
通俗来说，由于网速的不同，可能你得到返回值的时间也是不同的，
但是我们下一步要执行的代码依赖于上一次请求返回值，
这个时候我们就需要等待，结果出来了之后才知道怎么样继续下去。 
```

- **Promise 的好处**

```
防止出现回调地狱；
提高代码的可读性；
像同步操作那样去执行异步操作
```

- **Promise 的三种状态**

```
1.pending: 等待中，或者进行中，表示还没有得到结果
2.resolved(Fulfilled): 已经完成，表示得到了我们想要的结果，可以继续往下执行
3.rejected: 也表示得到结果，但是由于结果并非我们所愿，因此拒绝执行
```

- **Promise**总结

```
1. promise 其实就是一个对象或者说是构造函数
2. promise 的出现（es6） 就是解决异步编程和回掉地狱等问题，
async 和 await 的出现（ES8）就是基于 promise 的一种解决异步编程的终极解决方案（简化代码等等）
3. 在前端中，ajax 和 axios 都会用到异步编程，axios 更是基于 promise 的，
所以一定要掌握promise 以及用 async 和 await 搭配 promise 的使用
```

- **Promise** 手写实现  
```javascript
const PEDDING = 'pedding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
	#state = PEDDING
	#result = undefined
	#handlers = []

	constructor(executor){
		const resolve = (data)=>{
			this.#changeState(FULFILLED, data)
		}
		const reject = (reason)=>{
			this.#changeState(REJECTED, reason)
		}
	
		try{
			executor(resolve, reject)
		}catch(error){
			reject(error)
		}
	}
	
	#changeState(status, result){
		if(this.#state !== PEDDING) return
		this.#state = status
		this.#result = result
		this.#run()
	}
	
	#isPromise(value){
		if(value === null){
			return false
		}
		const typeRight = typeof value === 'object' || typeof value === 'function'
		if(typeRight && typeof value.then === 'function'){
			return true
		}
		return false
	}
	 
	#runFn(callback, resolve, reject){
		queueMicrotask(()=>{
			if(typeof callback !== 'function'){
				const settled = this.#state === FULFILLED ? resolve : reject
				settled(this.#result) 
				return 
			}
		
			try{
				const data = callback(this.#result)
				if(this.#isPromise(data)){
					data.then(resolve, reject)
				}else{
					resolve(data) 
				} 
			}catch(error){
				reject(error)
			}
		})
	}
	
	#run(){
		if(this.#state === PEDDING) return
		while(this.#handlers.length > 0){
			const { 
				onFulFilled, 
				onRejected, 
				resolve,
				reject,
			} = this.#handlers.shift()
			
			if(this.#state === FULFILLED){
				this.#runFn(onFulFilled, resolve, reject)
			}else{
				this.#runFn(onRejected, resolve, reject)
			} 
		}
	}
	
	then(onFulFilled, onRejected){
		return new MyPromise((resolve, reject)=>{
				this.#handlers.push({
					onFulFilled,
					onRejected, 
					resolve,
					reject,
				})
				this.#run()
		}) 
	}
}
```

