import { TailSpin } from 'react-loader-spinner'

export function Loading (){
    return (
    <TailSpin
        height="80"
        width="80"
        color="#9342f5"
        ariaLabel="tail-spin-loading"
        radius="1"
            wrapperStyle={{}}
        wrapperClass=""
            visible={true}
    />
)
}