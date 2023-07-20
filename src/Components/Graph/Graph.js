import { Card,BarChart,Subtitle } from "@tremor/react";

const chartData=[
    {
        name: "20",
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
const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };
const Graph=()=>(
    <Card>
        <BarChart
            className="mt-2 h-72"
            data={chartData}
            index="name"
            categories={["Employer","Employee","Total Interest"]}
            colors={["blue","teal","sky"]}
            valueFormatter={dataFormatter}
            yAxisWidth={56}
            stack={true}
            showLegend={false}
            showTooltip={false}
        />
  </Card>
    
);

export default Graph;