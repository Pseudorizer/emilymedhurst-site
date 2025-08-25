import type { FunctionComponent } from "preact";

interface Props {
    title: string;
}

const OG: FunctionComponent<Props> = ({ title }) => {
    return (
        <div style={{ backgroundColor: '#191716', color: '#f5f5f5', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <p style={{ fontSize: '35px', textAlign: 'left', margin: '25px' }}>emilymedhurst.gay</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', height: '100%', width: '100%', fontSize: '60px', textAlign: 'center' }}>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default OG;
