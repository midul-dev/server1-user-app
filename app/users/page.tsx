import UserCard from "@/components/UserCard";



const UsersPage = async() => {
   const res = await fetch('http://localhost:5000/users') 
   const users = await res.json()
    return (
        <div>

            <h1>{users.length} Users Found</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {users.map((user) => (
                <UserCard key={user._id} user={user} />
            ))}
            </div>
        </div>
    );
};

export default UsersPage;