
function RouterWrapper({ children, loading, ...props }) {
    return (

        <div { ...props }>
            {
                loading && 
                <div className='router-loading-wrapper'>
                    <div className='router-loading-content'></div>
                </div>
            }
            {
                children
            }
        </div> 
    )
}

export default RouterWrapper