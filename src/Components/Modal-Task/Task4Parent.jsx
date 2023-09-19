import { useState } from "react";
import styled from "styled-components";
import Task4child from "./Task4Child";

const Task4Parent = () => {

    const [openPopup, setOpenPopUp] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setlname] = useState("");

    const onDataFromChild = (fnameChild, lnameChild) => {
        setFname(fnameChild);
        setlname(lnameChild);
        setSubmit(true);
    };

    const onOpenFunc = () => {
        setOpenPopUp(!openPopup)
    }

    return (
        <div>
            <Center>

                <Button onClick={onOpenFunc} style={{ filter: openPopup ? "blur(3px)" : "blur(0px)" }} >Click Me</Button>
            </Center>
            {
                openPopup && (
                    <Task4child onDataFromChild={onDataFromChild} setOpenPopUp={setOpenPopUp} setFname={setFname} setlname={setlname} />
                )
            }
            {submit ? (

                <Container>

                    <div>

                        <h2>Form Details </h2>
                        <p>First name:- {fname}</p>
                        <p>Last name:- {lname}</p>
                    </div>
                </Container>
            ) : ""
            }
        </div>
    )
}

export default Task4Parent;

const Button = styled.button`
padding: 12px 18px;
background-color: tomato;
border-radius: 8px;
border: none;
color: white;
`


const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100px;

`


const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 100%;


&> div{
 width: 400px;
height: 250px;
margin-top: 20px;
border: 0.5px solid silver;
background-color: #54BAB9;
color: white;
border-radius: 8px;
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
    

}
`