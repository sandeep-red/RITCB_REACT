// var btoa=require('btoa')
// var atob=require('atob')
// var obj = {  
//     "merchantId":"M2306160483220675579140",
//     "transactionId":"TX123456789",
//     "merchantUserId":"U123456789",
//     "amount":100,
//     "merchantOrderId":"OD1234",
//     "mobileNumber":"9xxxxxxxxx",
//     "message":"payment for order placed OD1234",
//     "subMerchant":"DemoMerchant",
//     "email":"amit***75@gmail.com",
//     "shortName":"Amit"
//  }

// // Encode the String
// var encodedString = btoa(JSON.stringify(obj));
//  //console.log(encodedString);
// console.log(JSON.parse(atob("eyAgCiAgICJtZXJjaGFudElkIjoiTTIzMDYxNjA0ODMyMjA2NzU1NzkxNDAiLAogICAidHJhbnNhY3Rpb25JZCI6IlRYMTIzNDU2Nzg5IiwKICAgIm1lcmNoYW50VXNlcklkIjoiVTEyMzQ1Njc4OSIsCiAgICJhbW91bnQiOjEwMCwKICAgIm1lcmNoYW50T3JkZXJJZCI6Ik9EMTIzNCIsCiAgICJtb2JpbGVOdW1iZXIiOiI5eHh4eHh4eHh4IiwKICAgIm1lc3NhZ2UiOiJwYXltZW50IGZvciBvcmRlciBwbGFjZWQgT0QxMjM0IiwKICAgInN1Yk1lcmNoYW50IjoiRGVtb01lcmNoYW50IiwKICAgImVtYWlsIjoiYW1pdCoqKjc1QGdtYWlsLmNvbSIsCiAgICJzaG9ydE5hbWUiOiJBbWl0Igp9")))
// //console.log(JSON.parse(atob(encodedString)),"encoded")
// let isStepNumber=(a)=>{
//     let s=a.toString()
//     for(let i=0; i<s.length-1;i++){
//         diff=parseInt(s[i])-parseInt(s[i+1])
//         if(diff === 1 || diff === -1)
//         continue
//         else
//         return false

//     }
//     return true
// }
// console.log(isStepNumber(67898))
// const fs = require('fs')
// const arr=[
//     {
//       "_id": "5f35283a56ffd700902b3b9e",
//       "link": "https://www.tuktukfoodsindia.com/wp-content/uploads/2018/11/paper-dosa.jpg",
//       "name": "Plain Dosa",
//       "price": 30,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35284856ffd700902b3b9f",
//       "link": "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
//       "name": "Masala Dosa",
//       "price": 35,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35285756ffd700902b3ba0",
//       "link": "https://udupi-recipes.com/wp-content/uploads/2018/06/pudi-dosa-320x320.jpg",
//       "name": "Onion Dosa",
//       "price": 40,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35286456ffd700902b3ba1",
//       "link": "https://www.hungryaar.in/recipe_images/97_1502380053.png",
//       "name": "Bisi Bele Bath",
//       "price": 30,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35286f56ffd700902b3ba2",
//       "link": "https://d1yy4cwyokq5tq.cloudfront.net/d/1077/1_600x600.jpg",
//       "name": "Idli Vada",
//       "price": 30,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35287856ffd700902b3ba3",
//       "link": "https://www.shanmugas.com/Content/upload/Parota%20Kuruma.jpg",
//       "name": "Parota",
//       "price": 35,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35288256ffd700902b3ba4",
//       "link": "https://thumbs.dreamstime.com/t/indian-food-thali-style-meal-chicken-meat-wooden-table-138362189.jpg",
//       "name": "Meals",
//       "price": 40,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35288a56ffd700902b3ba5",
//       "link": "https://cdn1.foodviva.com/static-content/food-images/rice-recipes/vegetable-pulav-recipe/vegetable-pulav-recipe.jpg",
//       "name": "Rice Bath",
//       "price": 25,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35289656ffd700902b3ba6",
//       "link": "https://ikneadtoeat.com/wp-content/uploads/2018/11/Gobi-Manchurian-1-500x500.jpg",
//       "name": "Gobi Manchurian",
//       "price": 40,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35289f56ffd700902b3ba7",
//       "link": "https://c1.wallpaperflare.com/preview/547/355/662/coffee-latte-latte-art-espresso.jpg",
//       "name": "Coffee",
//       "price": 10,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f3528ab56ffd700902b3ba8",
//       "link": "https://photo2.foodgawker.com/wp-content/uploads/2017/09/3075705.jpg",
//       "name": "Bonda Bajji",
//       "price": 20,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f3528bf56ffd700902b3ba9",
//       "link": "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2013/03/poori-bhaji-1a.jpg",
//       "name": "Poori",
//       "price": 35,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f3528cf56ffd700902b3baa",
//       "link": "https://www.kannammacooks.com/wp-content/uploads/Murungakkai-Sambar-kannammacooks.com-Recipe-Tamilnadu-Madras-style-murungakkai-sambar-idli-Indian-Chennai-drumstick-Sambar-1.jpg",
//       "name": "Sambar Rice",
//       "price": 30,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f3528d756ffd700902b3bab",
//       "link": "https://135700-392364-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/10/ginger-tea-recipe-3-500x500.jpg",
//       "name": "Tea",
//       "price": 8,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f3528ea56ffd700902b3bac",
//       "link": "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2.jpg",
//       "name": "Curd Rice",
//       "price": 25,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35290256ffd700902b3bad",
//       "link": "https://i.pinimg.com/originals/43/b1/d9/43b1d9a17bd41bcfac1a9f28e0de8720.jpg",
//       "name": "Roti Curry",
//       "price": 35,
//       "flag": true,
//       "__v": 0
//     },
//     {
//       "_id": "5f35290c56ffd700902b3bae",
//       "link": "https://vanitascorner.com/wp-content/uploads/2019/11/Akki-rotees.jpg",
//       "name": "Hakki Roti",
//       "price": 35,
//       "flag": true,
//       "__v": 0
//     }
//   ]
//   let obj={}
//   arr.forEach(item=>{
//     obj[item.name]=item.price
//   })
//   console.log(obj)
//   let json = JSON.stringify(obj)
//   fs.writeFile('./prices.json',json,(err,data)=>{
//             if(!err)
//             console.log("success")
//         })
// const fs = require('fs')
// fs.readFileSync('./prices.json',(err, data)=>{
//     if(!err){
//     let obj = JSON.parse(data)
//     let name='puliharu'
//     obj[name]=30
//     console.log(obj)
//     let json = JSON.stringify(obj);
//     fs.writeFileSync('./prices.json',json,(err,data)=>{
//         if(!err)
//         console.log("success")
//     })
//     }
// })
// let data = fs.readFileSync('./prices.json')
// let obj = JSON.parse(data)
//     let name='puliharu'
//     obj[name]=30
//     let json = JSON.stringify(obj);
//     fs.writeFileSync('./prices.json',json)

class singlyLinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        this.length = 1
    }
    append(value){
        let newNode={
            value:value,
            next:null
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value){
        let newNode={
            value:value,
            next:null
        }
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    insert(index,value){
        let node
        let newNode={
            value:value,
            next:null
        }
        if(index>=this.length){
            this.append(value)
            return this
        }
        else if(index <= 0){
            this.prepend(value)
            return this
        }
       node = this.indexedNode(index)
       newNode.next = node.next
       node.next = newNode
       this.length++
    }
    removeByIndex(index){
        let node1,node2
        if(index<=0){
            this.head = this.head.next
            this.length--
            return this
        }
        if(index>this.length-1){
            index=this.length-1
        }
        node1 = this.indexedNode(index)
        node2 = this.indexedNode(index+1)
        delete node1.next
        node1.next = node2.next
        if(index>=this.length-1){
            this.tail = node1
        }
        this.length--
    }
    indexedNode(index){
        let counter = 0
        let headerNode = this.head
        while(headerNode!==null){
            if(counter === index-1){
                return headerNode
            }
            counter++
            headerNode = headerNode.next
        }
    }
    reverse(){
        let prevNode = null
        let currentNode = this.head
        this.tail = currentNode
        while(currentNode){
            let nextNode = currentNode.next
            currentNode.next = prevNode
            prevNode = currentNode
            currentNode = nextNode
            if(!currentNode)
            this.head = prevNode
        }

    }
    printList(){
        let currentNode = this.head
        let items =[]
        while(currentNode!==null){
            items.push(currentNode.value)
            currentNode = currentNode.next
        }
        return items
    }
}
// const myll = new singlyLinkedList(7)
// myll.append(8)
// myll.prepend(4)
// myll.insert(1,5)
// myll.insert(2,6)
// myll.removeByIndex(2)
// console.log(myll.printList())
// myll.reverse()
// myll.append(3)
// myll.prepend(9)
// myll.insert(1,5)
// console.log(myll.printList())
class doublyLinkedList{
    constructor(value){
        this.head={
            previous:null,
            value:value,
            next:null   
        }
        this.tail=this.head
        this.length=1
    }
    append(value){
        let newNode = {
            previous:null,
            value:value,
            next:null
        }
        newNode.previous = this.tail
        this.tail.next = newNode
        this.tail = newNode
        this.length++
    }
    prepend(value){
        let newNode = {
            previous:null,
            value:value,
            next:null
        }
        this.head.previous = newNode
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
    insertByIndex(index,value){
        let newNode = {
            previous:null,
            value:value,
            next:null
        }
        if(index<=0){
            this.prepend(value)
            return this
        }
        if(index>=this.length){
            this.append(value)
            return this
        }
        let node = this.indexedNode(index)
        let prevNode = node.previous
        prevNode.next = newNode
        node.previous = newNode
        newNode.previous = prevNode
        newNode.next = node
        this.length++
    }
    removeByIndex(index){
        if(index<=0){
            this.head = this.head.next
            this.head.previous = null
            this.length--
            return this
        }
        if(index>=this.length)
        index = this.length-1
        let node = this.indexedNode(index)
        let prevNode = node.previous
        let nextNode = node.next
        prevNode.next = nextNode
        if(nextNode)
        nextNode.previous = prevNode
        if(index>=this.length-1){
            this.tail = prevNode
        }
        this.length--
    }
    indexedNode(index){
        let currentNode = this.head
        let counter = 0
        while(currentNode != null){
            if(counter === index)
                return currentNode
            currentNode = currentNode.next
            counter++
        }
    }
    printList(){
        let currentNode = this.head
        let items =[]
        while(currentNode!==null){
            items.push(currentNode.value)
            currentNode = currentNode.next
        }
        return items
    }
}
// const mydll = new doublyLinkedList(5)
// mydll.append(6)
// mydll.append(7)
// mydll.prepend(4)
// mydll.append(9)
// mydll.append(10)
// mydll.insertByIndex(4,8)
// mydll.removeByIndex(7)
// console.log(mydll.printList())
// console.log(mydll.tail)

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class Stack{
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0
    }
    push(value){
        let newNode =  new Node(value)
        if(!this.top){
            this.top = this.bottom = newNode
            this.length++
            return this
        }
        newNode.next = this.top
        this.top = newNode
        this.length++
        return this
    }
    pop(){
        if(!this.top){
            return null
        }
        const value = this.top.value
        this.top = this.top.next
        this.length--
        return value
    }
    peek(){
        if(this.top){
            return this.top.value
        }
        return null
    }
}
// let mystack = new Stack()
// mystack.push(5)
// mystack.push(6)
// mystack.push(7)
// console.log(mystack.peek())
// console.log(mystack.pop())
// console.log(mystack.peek())
class Queue{
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0 
    }
    enqueue(value){
        let newNode =  new Node(value)
        if(!this.top){
            this.top = this.bottom = newNode
            this.length++
            return this
        }
        this.top.next = newNode
        this.top = newNode  
        this.length++
        return this
    }
    dequeue(){
        const value = this.bottom.value
        if(this.top === this.bottom)
        this.top = null
        this.bottom = this.bottom.next
        this.length--
    }

}