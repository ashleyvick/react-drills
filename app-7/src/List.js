import React, {Component} from 'react';


class List extends Component { 

    render(){
        console.log(this.props.list)
        const listMap = this.props.list.map((element, index) => {
            return <ul key={index}>{element}</ul>
        })
        console.log(listMap)
        return(
            <div>
                {listMap}                
            </div>
        )
    }
}

export default List;
;