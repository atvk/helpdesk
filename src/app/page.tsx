import Listing from './components/Listing'

async function fetchData() {
  const res = await fetch("http://localhost:3001/user");
  const result = await res.json();
  return result
}

export default async function Helpdesk() {
  const res = await fetchData();

  return (
    <main className="flex gap-10 justify-center"> 
    <div className="w-200"><Listing/></div>
    <div className="w-200"></div>
    
    </main>
  );
}
