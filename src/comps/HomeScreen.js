import React, { useState, useEffect } from 'react'
import Example from './NavBar'
import Card from './Card'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const HomeScreen = () => {
    return (
        <div>
            <Example />
            <div class="flex justify-evenly mt-8">
                <input class="w-1/2 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Location"></input>
                <select placeholder="Category" class="w-1/5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">Select a Category</option>
                    <option value="other">Other</option>
                    <option value="arts">Arts</option>
                    <option value="automotive">Automotive</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="fitness">Fitness</option>
                    <option value="grocerystore">Grocery Store</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="realestate">Real Estate</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="technology">Technology</option>
                </select>
                <button class="w-20 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Search</button>
            </div>
            <div class="md:flex md:flex-row md:justify-evenly mt-8 xs:flex xs:flex-col xs:w-full xs:justify-center">
                <Card />
                <Card />
                <Card />
            </div>
        
            
        </div>
    )
}

export default HomeScreen
