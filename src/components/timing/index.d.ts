



// declare const Timing<Props:{{date:boolean, time: boolean}}>
export interface Timing extends React.HTMLAttributes<HTMLElement> {
    date?: boolean;
    time?: boolean;  
    className?: string;   
}

declare function Timing(props: Timing): JSX.Element;

export default Timing;