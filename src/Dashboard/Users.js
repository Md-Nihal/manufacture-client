import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Components/LogIn/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://whispering-atoll-87890.herokuapp.com/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className="text-2xl">All Users: {users.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Select For Admin</th>
                        <th>Remove User</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map((user,index)=><UserRow
                       key={user._id}
                       user={user}
                       index ={index}
                       refetch={refetch}
                       ></UserRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Users;