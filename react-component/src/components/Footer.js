import {useEffect, useState} from 'react'

const Footer = () =>{
    const [title, setTile] = useState('Footer');
    const [detail, setDetail] = useState({type: '', use: ''});

    useEffect(() => {
        console.log("Effct run");
        setDetail({type: 'Function ES6 Component',use: 'useEffect'})
    },[detail.type]);

    return (
        <div className="footer">
            <h1>This is {title} Component</h1>
            <h3>This is type {detail.type} and use {detail.use} Hooks</h3>
        </div>
    )
};

export default Footer;