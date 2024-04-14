import { useEffect, useState } from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        handleSize();
        window.addEventListener("resize", handleSize);
        
        // Cleanup function to remove event listener
        // return () => {
        //     window.removeEventListener("resize", handleSize);
        // };
        //OR
        const cleanUp = ()=>{
            console.log("runs when useEffect dependancy changes");
            window.removeEventListener("resize", handleSize)
        }
        return cleanUp;  //this will run only if the dependency value changes (i.e., if you add another dependency)
    }, []); 

    return windowSize;
};

export default useWindowSize;
