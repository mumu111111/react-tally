import React from 'react'

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
    importAll(require.context('../icons', true, /\.svg$/))
} catch (error) {
    console.log(error)
}
// 判断icon是否存在
type Props = {
    name?: string
}

function Icon(props: Props) {
    return (
        <svg className='icon'>
            {props.name && <use xlinkHref={'#' + props.name} />}
        </svg>
    )
}

export default Icon