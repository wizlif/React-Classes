import {useState} from "react";
import ErrorToast from "./ErrorToast";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorToast, setErrorToast] = useState(false);

    function validate(event){
        event.preventDefault();
        setErrorToast(false);
        if(username === "javascript" && password === "react"){

        }else{
            setErrorToast(true);
        }
    }

    return (
        <div className="p-12  mx-auto my-auto bg-white rounded-xl shadow-lg flex flex-col">
            <form onSubmit={validate}>
                <label className="block mt-3">
                    <span className="text-gray700">Username</span>
                    <input type="text"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-500"
                           onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <label className="block my-2">
                    <span className="text-gray700">Password</span>
                    <input type="password"
                           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-500"
                           onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className="btn bg-indigo-500 mt-3 text-white p-2 px-5 rounded-md">Login</button>
            </form>
            {errorToast && <ErrorToast message="Error" title="Error" sub_message="11 mins ago"/>}
        </div>
    )
}
