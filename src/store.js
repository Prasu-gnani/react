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
        {image:"drumstick.jpg",name:'Drumstick',price:80.8},
        {image:"lady'sfinger.jpg",name:'Ladysfinger',price:70.8},
        {image:"Bellpeppers.jpg",name:'Bellpeppers',price:60.8},
        {image:"cucumber.jpg",name:'Cucumber',price:80.8},
        {image:"brocoli.jpg",name:'Brocoli',price:70.8},
        {image:"beetroot.jpg",name:'Beetroot',price:90.8},
        {image:"radddish.jpg",name:'Raddish',price:70.8},
        {image:"bottleGourd.jpg",name:'BottleGourd',price:40.8},
        {image:"pumpkin.jpg",name:'Pumpkin',price:70.8},


    ],
nonveg:[
    {image:"chicken.jpg",name:'Chicken',price:250.0},
    {image:"fish.jpg",name:'Fish',price:100.0},
    {image:"mutton.jpg",name:'Mutton',price:500.0},
    {image:"prawns.jpg",name:'Prawns',price:400.0},
    {image:"crab.jpg",name:'Crab',price:300.0},
    {image:"breastchicken.jpg",name:'Breastchicken',price:150.0},
    {image:"chickenwings.jpg",name:'chickenwings',price:200.0},
    {image:"drimstick.jpg",name:'Drimstick',price:250.0},
    {image:"lobstur.jpg",name:'Lobstur',price:350.0},
    {image:"tunafish.jpg",name:'Tunafish',price:300.0},
    {image:"salmon.jpg",name:'Salmonfish',price:200.0},
    {image:"seerfish.jpg",name:'Seerfish',price:300.0},
    {image:"bluecrab.jpg",name:'Bluecrab',price:200.0},
    {image:"smallprawns.jpg",name:'Smallprawns',price:300.0},
    {image:"turkey.jpg",name:'Turkey',price:150.0},

],
milk:[
      { image:"jersey.jpg",name: "Jersey", price: 32 },
      { image:"heritage.jpg",name: "Heritage", price: 31 },
      { image:"sangam.jpg",name: "Sangam", price: 34 },
      { image:"aarogya.jpg",name: "Aarogya", price: 35 },
      { image:"dodla.jpg",name: "Dodla", price: 35 },
      { image:"amul.jpg",name: "Amul", price: 33 },
      { image:"vijayamilk.jpg",name: "Vijayamilk", price: 35 },



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
