import React, { useContext } from 'react';
import styled from 'styled-components';

import { SubmitButton } from "../components/SubmitButton"
import Layout from "../components/Layout"

import { Context } from "../Context"

const Div = styled.div`
    margin: 0 15px;
    text-align: center;
`

const User = () => {
    const { removeAuth } = useContext(Context)

    return (
    <Div>
        <Layout title="Usuario" subtitle="Tus opciones de usuario" >
        <SubmitButton onClick={removeAuth}>Cerrar Sesion</SubmitButton>
        </Layout>
    </Div>    
    );
};

export default User;