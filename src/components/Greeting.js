import React, { useEffect, useState } from 'react';

function Greeting() {
const [greeting, setGreeting] = useState('');

useEffect(() => {
const currentTime = new Date().getHours();
let newGreeting;

if (currentTime < 12) {
newGreeting = 'Good Morning User!';
} else if (currentTime < 18) {
newGreeting = 'Good Afternoon User!';
} else {
newGreeting = 'Good Evening User!';
}

setGreeting(newGreeting);
}, []);

return <h1>{greeting}</h1>;
}

export default Greeting;