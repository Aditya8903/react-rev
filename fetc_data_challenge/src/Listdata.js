import React from 'react'
import ListItem from './ListItem'

const Listdata = ({items}) => {
    return items.map((item) => {
        return <ListItem key={item.id} item={item} />;
    });
    
}

export default Listdata
