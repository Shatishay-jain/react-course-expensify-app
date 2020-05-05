import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props)=>(
    <div>
        <h1>info</h1>
        <p>there are the {props.info}</p>
    </div>
);

const withAdminWarning =(WrappedComponent)=>{
    return(props)=>(
        <div>
            <p>warning don't share this  information with anyone</p>
            <WrappedComponent {...props}/>
        </div>
    );
};
const withAuthenticationWarning=(WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAuth?<WrappedComponent {...props}/>:<p>your are not a vlid user</p>}
        </div>
    );
};
const AutnInfo = withAuthenticationWarning(Info);
const AdminInfo =withAdminWarning(Info);

//ReactDOM.render(<AdminInfo info="private details"/>, document.getElementById('app'));
ReactDOM.render(<AutnInfo isAuth={!true} info="private details"/>, document.getElementById('app'));