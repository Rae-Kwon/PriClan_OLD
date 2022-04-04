import { Link } from "remix";

type BackButtonProps = {
    backTo: string
} 

function BackButton({ backTo }: BackButtonProps): JSX.Element {
	return (
        <button>
            <Link to={backTo}>Back</Link>
        </button>
    );
}
export default BackButton;
