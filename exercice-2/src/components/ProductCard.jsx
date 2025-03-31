import React from "react";

function ProductCard() {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-80 bg-slate-400  w-full sm:w-80">
        {/* Image du produit */}
        <div className="h-48 flex justify-center items-center w-full h-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/800px-Placeholder_view_vector.svg.png"  className="h-full object-cover rounded-lg" />
        </div>

      {/* nom,prix ,description*/}
      <div className="mt-4">
        <h2 className=" font-semibold text-left text-lg sm:text-xl ">Produit x</h2>
        
        <p className="flex  mt-2 text-lg font-bold text-blue-600 "> 250€</p>
        <p className="text-gray-600 text-left text-sm sm:text-base ">Produit performant </p>
     
       {/* note*/}
        <button>⭐</button> 
        <button>⭐</button> 
        <button>⭐</button> 
        <button>⭐</button> 
        <button>⭐</button> 
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 flex justify-between mt-4">
        Add to Cart
          </button>
          <button className="text-red-500 text-2xl hover:scale-110 transition-transform hover:bg-slate-50">
            ❤️
          </button>
      
    </div>
    </div>
  );
}

export default ProductCard;
