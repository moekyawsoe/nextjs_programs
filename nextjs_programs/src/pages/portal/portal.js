import React, { useEffect } from 'react';
import Layout from './layouts/layout';
import { useRouter } from 'next/router';
  
const PortalHome = () => {
    return (
        <Layout>
            <h1>Welcome react app</h1>
            <p>This is my first react app with layout components</p>
        </Layout>
    )
}

export default PortalHome;