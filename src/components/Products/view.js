import React from "react";
import shoe from './shoe.png';
import Navbar from "../Navbar/navbar";
import './view.css';
import Search from "../Search/search";

function View() {

    function added(){
<div id="toast-simple" class="flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
    <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
    <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
</div>

    }
    
    return(
        <div>
            <Navbar />
            <Search />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6 p-5 m-5">
            <span class="text-left hv"><li class="fa fa-regular fa-heart"></li></span>
                <div class="bg-white-100 text-green-500 text-lg font-bold text-center p-14 rounded-lg"><img src={shoe}/><p className="price">#30,000</p><p className="slash"><strike>#42,000</strike></p></div>
    <div class="bg-white-100 text-black-500 text-xl text-center p-15 pb-20 ss"><h2 className="price">Nike Sneakers</h2>
            <li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>
        <hr />
        <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

        <br />
        <button type="button" class="bg-green-500 p-2 rounded shadow-lg px-10 py-2.5 text-white transition duration-150 ease-in-out w-full" onClick={added}><li class="fa fa-cart-plus"></li>&nbsp;add</button>
    </div>
    <div class="bg-white-100 text-black-100 text-lg text-center p-14 rounded-lg pp ml-100px border-2">
        You may also like: <hr />
        <img src={shoe} className="recom" />
        <li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>
        <p>Adiddas Sneakers</p>
        <hr />
        <img src={shoe} className="recom" />
        <li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>&nbsp;<li class="fa fa-star"></li>
        <p>Balenciaga Sneakers</p>
        <hr />
    </div>
                </div>
        </div>
    );
}

export default View;