import { useState } from "react";
import { Select,SelectItem } from "@tremor/react";
  
  const  SelectTab=({type})=> {
    const [value, setValue] = useState("");
    return (
      <div className="max-w-sm mx-auto space-y-0">
        <select id="countries" placeholder={type} class=" bg-transparent text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ml-6   dark:placeholder-gray-900 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>{type}</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>

      </div>
    )
  }
  export default SelectTab;

