import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import OrderApi from '../../api/order';



const Profile = () => {
    const [tourDetail, setTourDetail] = useState([])
    const history = useHistory();

    const booking = (id) => {
        console.log(id);
        localStorage.setItem("tourDetailId", id);
        history.push("./tourbooking");
    }

    useEffect(() => {
        const getHistory = async () => {
            try {
                let id = localStorage.getItem("touridExist");
                console.log('id : ------------> ', id)
                let obj = {
                    tourid: id
                }
                const tours = await TourDetail.ListTourDetail(obj);
                console.log(tours?.data?.data);
                setTourDetail(tours?.data?.data || []);
            } catch (error) {
                console.log(error);
            }
        };
        getHistory();
    }, [])

    return (
        <div>
            <Header />
            <div class="wrap cf">
                <h1 class="projTitle">Responsive Table<span>-Less</span> Shopping Cart</h1>
                <div class="heading cf">
                    <h1>History</h1>
                    <a href="#" class="continue">Continue Shopping</a>
                </div>
                <div class="cart">
                    {/* <ul class="tableHead">
                        <li class="prodHeader">Product</li>
                        <li>Quantity</li>
                        <li>Total</li>
                        <li>Remove</li>
                    </ul> */}
                    <ul class="cartWrap">
                        <li class="items odd">

                            <div class="infoWrap">
                                <div class="cartSection">
                                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                                    <p class="itemNumber">#QUE-007544-002</p>
                                    <h3>Item Name 1</h3>

                                    <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>

                                    <p class="stockStatus"> In Stock</p>
                                </div>


                                <div class="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div class="cartSection removeWrap">
                                    <a href="#" class="remove">x</a>
                                </div>
                            </div>
                        </li>
                        <li class="items even">

                            <div class="infoWrap">
                                <div class="cartSection">

                                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                                    <p class="itemNumber">#QUE-007544-002</p>
                                    <h3>Item Name 1</h3>

                                    <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>

                                    <p class="stockStatus"> In Stock</p>
                                </div>


                                <div class="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div class="cartSection removeWrap">
                                    <a href="#" class="remove">x</a>
                                </div>
                            </div>
                        </li>

                        <li class="items odd">
                            <div class="infoWrap">
                                <div class="cartSection">

                                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                                    <p class="itemNumber">#QUE-007544-002</p>
                                    <h3>Item Name 1</h3>

                                    <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>

                                    <p class="stockStatus out"> Out of Stock</p>
                                </div>


                                <div class="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div class="cartSection removeWrap">
                                    <a href="#" class="remove">x</a>
                                </div>
                            </div>
                        </li>
                        <li class="items even">
                            <div class="infoWrap">
                                <div class="cartSection info">

                                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                                    <p class="itemNumber">#QUE-007544-002</p>
                                    <h3>Item Name 1</h3>

                                    <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>

                                    <p class="stockStatus"> In Stock</p>

                                </div>


                                <div class="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>

                                <div class="cartSection removeWrap">
                                    <a href="#" class="remove">x</a>
                                </div>
                            </div>
                            <div class="special"><div class="specialContent">Free gift with purchase!, gift wrap, etc!!</div></div>
                        </li>


                        {/* <li class="items even">Item 2</li> */}

                    </ul>
                </div>

                <div class="promoCode"><label for="promo">Have A Promo Code?</label><input type="text" name="promo" placholder="Enter Code" />
                    <a href="#" class="btn"></a></div>

                <div class="subtotal cf">
                    <ul>
                        <li class="totalRow"><span class="label">Subtotal</span><span class="value">$35.00</span></li>

                        <li class="totalRow"><span class="label">Shipping</span><span class="value">$5.00</span></li>

                        <li class="totalRow"><span class="label">Tax</span><span class="value">$4.00</span></li>
                        <li class="totalRow final"><span class="label">Total</span><span class="value">$44.00</span></li>
                        <li class="totalRow"><a href="#" class="btn continue">Checkout</a></li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Hotel;