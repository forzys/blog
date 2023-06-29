





// export interface Progress extends React.HTMLAttributes<HTMLElement> {
//     // options?: any[]; 
//     // className?: string;   

// }

export interface IconProps extends React.HTMLAttributes<HTMLElement>{}

declare function Progress(props: IconProps): JSX.Element;
declare function Screen(props): JSX.Element;
declare function Search(props): JSX.Element;
declare function Weather(props): JSX.Element;
declare function Loading(props): JSX.Element;
declare function Symbol(props): JSX.Element;
declare function Direction(props): JSX.Element;
declare function Official(props): JSX.Element;
declare function Configure(props): JSX.Element;
declare function Media(props): JSX.Element;

export { Progress, Screen, Search, Weather, Loading, Direction, Symbol, Official, Configure, Media }