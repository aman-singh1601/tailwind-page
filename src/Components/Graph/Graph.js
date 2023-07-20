import React from 'react';
import { BarChart, Bar, XAxis, YAxis,
	CartesianGrid } from 'recharts';

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
            name: "25",
            "Employee":40,
            "Employer":20,
            "Total Interest": 20,
          },
	      	{
            name: "30",
            "Employee":40,
            "Employer":20,
            "Total Interest": 20,
          },
          {
            name: "35",
            "Employee":50,
            "Employer":30,
            "Total Interest": 30,
          },
          {
            name: "40",
            "Employee":70,
            "Employer":20,
            "Total Interest": 60,
          },
          {
            name: "45",
            "Employee":110,
            "Employer":30,
            "Total Interest": 80,
          },
          {
            name: "50",
            "Employee":80,
            "Employer":110,
            "Total Interest": 60,
          },
          {
            name: "55",
            "Employee":60,
            "Employer":90,
            "Total Interest": 150,
          },
          {
            name: "60",
            "Employee":110,
            "Employer":80,
            "Total Interest": 120,
          },
	];

	return (
		<BarChart width={300} height={250} barSize={20} data={data} >
			<CartesianGrid />
			<XAxis dataKey="name" />
			<YAxis />
			<Bar dataKey="Employee" stackId="a" fill="#205cbd" />
			<Bar dataKey="Employer" stackId="a" fill="#104191" />
			<Bar dataKey="Total Interest" stackId="a" fill="#598bde" />
		</BarChart>
	);
}

export default Graph;
