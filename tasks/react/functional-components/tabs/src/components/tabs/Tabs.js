import React, {useState} from 'react';
import './Tabs.css'

const Tabs = (props) => {
    const [active, setActive] = useState("tab-1");

    const handleClick = (evt, id) => {
        setActive(id);
    }

    return (
        <div className='container-fluid pt-3'>
            <nav>
                <div className='nav nav-tabs' id='nav-tab' role="tablist">
                    {
                        props.tabs.map((item, index) => {
                            return (
                                <button key={'tab-' + index} 
                                    id={'nav' + item.id}
                                    className={`nav-link${active === item.id ? ' active' : ''}`}
                                    data-bs-toggle='tab'
                                    data-bs-target={'#content-nav-' + item.id}
                                    type='button'
                                    role='tab'
                                    aria-controls={'content-nav-' + item.id}
                                    aria-selected='true'
                                    onClick={(e) => handleClick(e, item.id)}>{item.name}</button>
                            );
                        })
                    }
                </div>
            </nav>
            <div className='tab-content p-3' id='nav-tabContent'>
                {
                    props.tabs.map((item, index) => {
                        return (
                            <div key={'content-' + index}
                                id={'content-nav-' + item.id}
                                className={`tab-pane fade${active === item.id ? ' show active' : ''}`}
                                role='tabpanel'
                                aria-labelledby={'nav' + item.id}>
                                {item.text}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Tabs;