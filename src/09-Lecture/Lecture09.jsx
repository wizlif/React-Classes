import React, {useEffect, useState} from 'react';
import axios from "axios";

function Lecture09(props) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState();

    async function getUsers() {
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(data)
        } catch (e) {
            console.log(e);
            setError("Failed to fetch")
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="table-bg">
                        {error && <div className="btn rounded bg-red-200 pa-3">{error}</div>}
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website
                                </th>
                                <th scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {users.map(({id, name, email, phone, website, company: {name: companyName}}) =>
                                (<tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{website}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{companyName}</td>
                                </tr>))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lecture09;