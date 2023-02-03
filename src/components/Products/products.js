import React from "react";
import './product.css';
import shoe from './shoe.png';
import {Link } from "react-router-dom";

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

function Products() {
  var set = 12;
    return(
        <div>
<div className="mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 pHead">
    <div className="product_list">
    <div class="overflow-x-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 p-5">
    <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-14 rounded-lg"><img src={shoe}/><p className="price">#30,000</p></div>
    <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-14 rounded-lg"><img src={shoe}/><p className="price">#30,000</p></div>
    <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-14 rounded-lg"><img src={shoe}/><p className="price">#30,000</p></div>
    <div class="bg-green-100 text-green-500 text-lg font-bold text-center p-14 rounded-lg"><img src={shoe}/><p className="price">#30,000</p></div>
</div>
    </div>
    </div>
  </div>
  <div className="header1">
    <p className="h"><li class="fa fa-tag fa-10x"></li> &nbsp;HOT DEALS <span class="fa fa-arrow-right float-right"></span></p>
    {/* <img src={hot} className="hot"/> */}
  </div>
  <div class="flex flex-col bg-white m-auto p-auto">
<h1
        class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
      >
      </h1>
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg" 
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
        </div>
      </div>
</div>
<div className="header2">
    <p className="h"><li class="fa fa-calendar fa-10x"></li> &nbsp;JANUARY SALES <span class="fa fa-arrow-right float-right"></span></p>
    {/* <img src={hot} className="hot"/> */}
  </div>
  <div class="flex flex-col bg-white m-auto p-auto">
<h1
        class="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800"
      >
      </h1>
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 "
        >
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg" 
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <img src={shoe} class="scroll-image"/><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-70 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out text-green-500 text-lg font-bold text-center p-4 rounded-lg"
            >
              <Link to={`/view?id=${set}`}><img src={shoe} class="scroll-image"/></Link><p className="price">#30,000</p><span className="pName">Nike sneaker</span>
            </div>
          </div>
        </div>
  </div>
  </div>
</div>
    );
}

export default Products;
