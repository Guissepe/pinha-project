import { useEffect, useState } from "react";
import Head from 'next/head'

export default function Social() {
    const [subscribers, setSubscribers] = useState(6000);
    useEffect(() => {
        const interval = setInterval(() => {
            setSubscribers(subs => subs + 1)
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return(
        <div> 
            <title>Subscribers</title>
            <h1>Subscribers: {subscribers}</h1>
        </div>
       
    );
};

