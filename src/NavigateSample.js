import {useNavigate} from "react-router-dom";

function NavigateSample() {
    const navigate = useNavigate();
    const goBack = () => {
        const confirm = window.confirm("정말 떠나시겠어요?")
        if (confirm) {
            navigate(-1);
        }
    };
    const goHome = () => {
        navigate('/');
    }

    return (
        <div>
            <button onClick={goBack}>Back</button>
            <button onClick={goHome}>Home</button>
        </div>
    )
}

export default NavigateSample;
