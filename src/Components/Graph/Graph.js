import React from 'react';
import { BarChart, Bar, XAxis, YAxis,CartesianGrid, ResponsiveContainer, CartesianAxis} from 'recharts';

const Graph = () => {

	// Sample data
	const data = [
	      	{
            name: "20",
            "Employee":40,
            "Employer":20,
            "Total Interest": 20,
          },
	      	{
            name: "22.5",
            "Employee":40,
            "Employer":20,
            "Total Interest": 20,
          },
	      	{
            name: "25",
            "Employee":40,
            "Employer":20,
            "Total Interest": 20,
          },
          {
            name: "27.5",
            "Employee":50,
            "Employer":30,
            "Total Interest": 30,
          },
          {
            name: "30",
            "Employee":70,
            "Employer":20,
            "Total Interest": 60,
          },
          {
            name: "32.5",
            "Employee":110,
            "Employer":30,
            "Total Interest": 80,
          },
          {
            name: "35",
            "Employee":80,
            "Employer":110,
            "Total Interest": 60,
          },
        
          {
            name: "37.5",
            "Employee":60,
            "Employer":90,
            "Total Interest": 150,
          },
        
          {
            name: "40",
            "Employee":110,
            "Employer":80,
            "Total Interest": 120,
          },
          {
            name: "42.5",
            "Employee":110,
            "Employer":80,
            "Total Interest": 130,
          },
          {
            name: "45",
            "Employee":110,
            "Employer":90,
            "Total Interest": 160,
          },
          {
            name: "47.5",
            "Employee":120,
            "Employer":100,
            "Total Interest": 180,
          },
          {
            name: "50",
            "Employee":130,
            "Employer":110,
            "Total Interest": 190,
          },
        
          
	];

	return (
    <ResponsiveContainer height={250} width="90%" >
		<BarChart   margin={{ top: 20, right: 30, left: 0, bottom: 0 }} barSize={20} data={data} >
			
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
			<XAxis tick={{stroke: '#cccfcd',strokeWidth:0.5}} padding={{ left: 20 }} dataKey="name" type='number' ticks={[20,25,30,35,40,45,50]} domain={[20,50]}  axisLine={false} tickLine={false} />
			<YAxis tick={{stroke: '#cccfcd',strokeWidth:0.5}}  axisLine={false} tickLine={false} ticks={[0,100,200,300,400,500]} domain={[0,500]} tickFormatter={(value) => `$${value}`}  />
			<Bar dataKey="Employee" stackId="a" fill="#0800A3" />
			<Bar dataKey="Employer" stackId="a" fill="#4935FF" />
			<Bar dataKey="Total Interest" stackId="a" fill="#85AFFF" />
		</BarChart>
    </ResponsiveContainer>
	);
}

export default Graph;
