import { configureStore, createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
    name:'products',
    initialState:{veg:[
        {image:"potato.jpg",name:'Potato',price:100.6},
        {image:"tomato.jpg",name:'Tomato',price:200.5},
        {image:"carrot.jpg",name:'Carrot',price:150.7},
        {image:"paneer.jpg",name:'Paneer',price:150.8},
        {image:"greenchilli.jpg",name:'Greenchilli',price:50.8},
        {image:"onion.jpg",name:'Onion',price:100.8},
        {image:"cabbage.jpg",name:'Cabbage',price:70.8},
        {image:"cauliflour.jpg",name:'Caulifour',price:100.8},
        {image:"greenbeans.jpg",name:'Greenbeans',price:50.8},
        {image:"drumstick.jpg",name:'Drumstick',price:100.8},
        {image:"lady'sfinger.jpg",name:'Ladysfinger',price:100.8},
        {image:"onion.jpg",name:'Onion',price:100.8},
        {image:"onion.jpg",name:'Onion',price:100.8},
        {image:"onion.jpg",name:'Onion',price:100.8},


    ],
nonveg:[
    {image:"chicken.jpg",name:'Chicken',price:800.0},
    {image:"fish.jpg",name:'Fish',price:700.0},
    {image:"mutton.jpg",name:'Mutton',price:2000.0},
    {image:"prawns.jpg",name:'Prawns',price:1500.0},
    {image:"crab.jpg",name:'Crab',price:900.0},
    {image:"breastchicken.jpg",name:'Breastchicken',price:600.0},
],
milk:[
      { image:"jersey.jpg",name: "Jersey", price: 32 },
      { image:"heritage.jpg",name: "Heritage", price: 31 },
      { image:"sangam.jpg",name: "Sagam", price: 34 },


]
},
reducers:{}
})

const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        Addtocart:(state,action)=>{
            const item = state.find(item=>item.name===action.payload.name);
            if(item)
            {
               item.quantity+=1;
            }
            else
            {
                state.push({...action.payload,quantity:1});
            }
        },
        increment:(state,action)=>{
            let item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }
        },
        decrement:(state,action)=>{
            let item=state.find(item=>item.name==action.payload.name);
            if(item && item.quantity>1)
            {
                item.quantity-=1;
            }
            else
            {
                return state.filter(item=>item.name!==action.payload.name);
            }
        },
         remove:(state,action)=>{
                return state.filter(item=>item.name!==action.payload.name); 
        },
        clearcart:()=>[],

    }
})

const purchasedetails=createSlice({
    name:'handlepurchasedetails',
    initialState:[],
    reducers:{
        completepurchase:(state,action)=>{
            state.push({...action.payload})
        },
      },
    });
    
const authSlice=createSlice({
            name:"auth",
            initialState:{
                isAuthenticated:localStorage.getItem("username")?
                               true:false,
                    user:localStorage.getItem("username")
            },
            reducers:{
               login:(state,action)=>{
               state.isAuthenticated=true;
               state.user=action.payload;
               localStorage.setItem("username",action.payload);
               },
               logout:(state)=>{
                state.isAuthenticated=false;
                state.user="";
                localStorage.removeItem("username");
               },
            },
});

const store =configureStore({
    reducer:{products:productslice.reducer,
        cart:cartslice.reducer,
        handlepurchasedetails:purchasedetails.reducer,
        auth:authSlice.reducer
    }
})
export default store;
export const {Addtocart,increment,decrement,remove,clearcart}=cartslice.actions;
export const {completepurchase}=purchasedetails.actions;
export const {login,logout}=authSlice.actions;
