import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { RotatingTriangles } from 'react-loader-spinner';

const PrivateRoutes = ({children}) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()
    
    if (loader) {
        return (
          <div className="text-center w-1/6 mx-auto flex justify-center items-center">
            <RotatingTriangles
              visible={true}
              height="80"
              width="80"
              ariaLabel="rotating-triangels-loading"
              wrapperStyle={{}}
              wrapperClass="rotating-triangels-wrapper"
            />
          </div>
        );
    }


    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
    
};

export default PrivateRoutes;