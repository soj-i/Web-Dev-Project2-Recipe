"use client";
import React, { createContext, useContext, useState, ReactNode, Dispatch, useEffect } from 'react';

import {cookbook, Recipe, RecipeStep } from '../molecules/cookbookSetup';


const defaultRecipe = { 
    title: "example recipe",
    steps: [{id: "step-1", value: "step 1", isCompleted: true},
            {id: "step-2", value: "step-2", isCompleted: true},
            {id: "step-3", value: "step 3", isCompleted: false},
            {id: "step-4", value: "step 4", isCompleted: false}
           ]
}
cookbook.set("recipe-1", defaultRecipe);

interface CookbookType{
    recipes: Map<string, Recipe>; // overall cook book. undefined initially for value in provider
    setRecipes: Dispatch<any>;  // update overall cook book
}

const RecipeBookContext = createContext<CookbookType>(
    {
        recipes: cookbook,
        setRecipes: ()=>{}
    }
)



export const useRecipeBookContext = () => useContext(RecipeBookContext);

export const RecipeStepsContextProvider = ({ children }: { children: ReactNode }) => {
    const [recipes, setRecipes] = useState<Map<string, Recipe>>(cookbook);
 

  return (
    <RecipeBookContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipeBookContext.Provider>
  );
};