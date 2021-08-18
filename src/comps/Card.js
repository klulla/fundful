import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div class="max-w-xs rounded overflow-hidden shadow-lg my-2 mb-8 ml-24 pb-4">
  <img class="w-full max-h-52" src="https://tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains"></img>
  <div class="px-6 py-4">
  <div class="bg-gray-300 inline-block rounded">
    <p class="text-xs mr-2 ml-2">{props.category}</p>
    </div>
    <div class="font-bold text-xl mb-2">{props.name}</div>
    <p class="text-grey-darker text-base">
      {props.description}
    </p>
  </div>
  <div class="px-6">
    <span class="inline-block bg-grey-lighter rounded-full 3 text-md font-semibold text-grey-darker mr-2">Contact at <span class="inline-block bg-grey-lighter rounded-full text-md font-bold text-grey-darker mr-2">{props.email}</span></span>
  </div>
</div>
        </div>
    )
}

export default Card
