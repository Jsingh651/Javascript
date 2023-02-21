import React from 'react';
import '../App.css';
const Tabs = (props) => {
    const { tablist, tabIndex, setTabIndex } = props;
    

    return (
        <div style={{ margin: "auto", width: "85%", textAlign: "left" }}>

            {
                tablist.map((item, index) => (
                    <div onClick={(e) => setTabIndex(index)}>
                        {item.label}
                    </div>
                ))
            }
        </div>
    )
}

export default Tabs
