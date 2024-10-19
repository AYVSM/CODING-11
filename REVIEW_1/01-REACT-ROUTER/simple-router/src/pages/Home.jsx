import { useState } from "react";
import Nav from "../components/Nav";
import Search from "../components/Search"

export default function Home()
{
    const [query, setQuery] = useState('Cat');

    const onSearchChange= value => {
        setQuery(value);
    }

    return (
        <>
            {/* <Nav /> */}
            <Search onSearchChange={onSearchChange} />

            <h1>I'm search about {query}</h1>
        </>
    )
}
