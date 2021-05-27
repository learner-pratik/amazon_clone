import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="Amazon Prime Background Logo"
            />
            
            <div className="home__row">
                {/* PRoduct - id, title, price, rating, image, button */}
                <Product
                    id = {123}
                    title="Atomic Habits: An Easy and Proven Way to Build Good Habits and Break Bad Ones"
                    price={11.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51vSbWpF+dS._SX329_BO1,204,203,200_.jpg"
                />
                <Product
                    id = {124}
                    title="ASIAN Men's Wonder-13 Sports Running Shoes"
                    price={9.25}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg"
                />
            </div>
            <div className="home__row">
                {/* PRoduct - id, title, price, rating, image, button */}
                <Product
                    id = {125}
                    title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
                    price={39.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
                />
                <Product
                    id = {126}
                    title="boAt Rockerz 370 Wireless Headphone with Bluetooth 5.0, Immersive Audio, Lightweight Ergonomic Design, Cosy Padded Earcups and Up to 12H Playback Bliss(Gregarious Green)"
                    price={13.75}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61I3R2ioAlL._SL1500_.jpg"
                />
                <Product
                    id = {127}
                    title="Thums Up Soda Soft Drink, 1.25 LTR Bottle"
                    price={1.2}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51ekrvTOCPL._SL1000_.jpg"
                />
            </div>
            <div className="home__row">
                {/* PRoduct - id, title, price, rating, image, button */}
                <Product
                    id = {128}
                    title="Furniture Mart Sheesham Wood 4 Seater Dining Table with 2 Chairs and 1 Bench 4 Seater Dining Set- Dining Room Furniture -with Cream Cushion | 4 Seater Dining"
                    price={316.26}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/614NrO51CLL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
