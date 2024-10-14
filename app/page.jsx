
import Users from '@/app/components/Users'

const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users?page=2");
  const data = await res.json();
  return data.data;
};

async function HomePage() {
  const users = await fetchUsers();
  
  return (
    <Users users={users}/>
  );
}

export default HomePage;
