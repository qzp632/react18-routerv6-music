
import React, { Fragment, useState, useEffect, useMemo } from 'react'
import { Outlet, useNavigate } from "react-router-dom";

import './Singer.scss'
import IndexList from '../../components/base/index-list/IndexList'
import LoadingPage from '../../components/base/LoadingPage'
import { getSingerList } from '../../service/singer'


function Singer() {
    const [ singers, setSingers ] = useState([])
    const [ selectedSInger, setSelectedSInger ] = useState(null)
    
    const navigate = useNavigate()

    useEffect(() => {
        _getSingerList()
    }, [])

    const _getSingerList= async () => {
        const result = await getSingerList()
        setSingers(result.singers)
    }

    const selectSInger = (singer) => {
        setSelectedSInger(singer)
        sessionStorage.setItem('__singer__', JSON.stringify(singer))
        navigate(`/singer/${singer.mid}`)
    }

    const loading = useMemo(() => {
        return !singers.length
    }, [singers])

    return (
        <Fragment>
            <LoadingPage loading={ loading }>
                <IndexList data={ singers } select={ (singer) => selectSInger(singer) }></IndexList>
            </LoadingPage>
            <Outlet context={ selectedSInger }></Outlet>
        </Fragment>
    )
}

export default Singer