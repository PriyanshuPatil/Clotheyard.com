
import {Bar,Line,Pie} from 'react-chartjs-2'
const AdminBar = ({Data}) =>
{
    return(
        <>
        <Bar data={Data} />
        </>
    )
}
const AdminPie = ({Data}) =>
{
    return(
        <>
        <Pie data={Data} />
        </>
    )
}
const AdminLine = ({Data}) =>
{
    return(
        <>
        <Line data={Data} />
        </>
    )
}

export {AdminBar,AdminPie,AdminLine}