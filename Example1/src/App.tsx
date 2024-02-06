import './App.css'
import { DataTable } from './payment/data-table'
import { Payment, columns } from './payment/columns'
import { useState, useEffect } from 'react'
import { UserNav } from './payment/user-nav';


function App() {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    /*const fetchData = async () => {
      const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
      const newData = await response.json();
      setData(newData);
    };
    fetchData(); */

    const getData = async () => {
      // Fetch data from your API here.
        const newData: Payment[] = [
          {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
          },
          {
            id: "321ed52f",
            amount: 120,
            status: "success",
            email: "mel@terra.com",
          },          
      ]
      setData(newData)
      console.log(newData)
    };
    getData();

  }, []);

  return (
    <>
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UserNav />
        </div>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
    </>
  )
}

export default App;
