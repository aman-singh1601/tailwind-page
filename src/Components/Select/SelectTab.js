import { useState } from "react";
import { Select,SelectItem } from "@tremor/react";
  
  const  SelectTab=({type})=> {
    const [value, setValue] = useState("");
    return (
      <div className="max-w-sm mx-auto space-y-6">
        <Select placeholder={type} value={value} onValueChange={setValue}>
          <SelectItem value="1">
              21 
          </SelectItem>
        </Select>

      </div>
    )
  }
  export default SelectTab;