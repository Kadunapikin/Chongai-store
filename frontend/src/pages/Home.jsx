import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'

const Home = () => {
  return (
    <div>
        <Hero />
        <LatestCollection />
    </div>
  )
}

export default Home

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 1;
let len = cars.length;
let text = "";

console.log(len);

for (; i < len; i++) {
  console.log(text += cars[i] + "<br>");
  }