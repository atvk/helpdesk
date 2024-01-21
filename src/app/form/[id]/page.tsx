import Form from '@/app/components/Form'

async function fetchData(id:any) {
  const res = await fetch("http://localhost:3001/user/"+id);
  const result = await res.json();
  return result;
}

const pageForm = async ({ params: { id } }) => {
  const form = await fetchData(id);

  return (
   <div>
    <Form form={form}/>
   </div>
  );
};
export default pageForm;
