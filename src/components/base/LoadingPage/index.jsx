import './LoadingPage.scss'

function LoadingPage({ children, loading, noResult, title="正在载入...", ...props }) {
    const loadingPaegWrapper = {
        position: "fixed",
        width: "100%",
        top: "88px",
        bottom: 0
    }
    
    return (

        <div style={ loadingPaegWrapper } { ...props } >
            {
                noResult &&
                <div className='router-loading-wrapper'>
                    <div className="no-result-loading">
                        <div className="loading-result-content">
                            <div className="icon"></div>
                            <p className="text">{ noResult || "抱歉，没有结果" }</p>
                        </div>
                    </div>
                </div>
            }
            {
                loading && !noResult ?
                <div className='router-loading-wrapper'>
                    <div className='no-result-loading'>
                        <div className='loading-result-content'>
                            <img width={ 24 } height={ 24 } src={ require('./loading.gif') } alt="" />
                            <p className='desc'>{ title }</p>
                        </div>
                    </div>
                </div>: children
            }
        </div> 
    )
}

export default LoadingPage