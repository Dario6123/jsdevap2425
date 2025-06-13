type CarProps = {
    brand: string;
    id: number; // sau string, dupa caz
};




export default function Car(props: CarProps) {
    return <li>{props.id} - I am a {props.brand}</li>;
}