import React from 'react';

const Employee = ({firstName, lastName, age}) => {
    return (
        <div>Employee name: {firstName} {lastName} is of the age {age}</div>
    );
}

export default Employee;