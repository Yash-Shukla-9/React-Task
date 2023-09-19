import { useState } from "react";
import styled from "styled-components";


const Task4child = ({ setOpenPopUp, onDataFromChild }) => {


    const [fnameChild, setFnameChild] = useState("");
    const [lnameChild, setLnameChild] = useState("")


    const OnFuncChangeF = (e) => {
        setFnameChild(e.target.value);
    }

    const OnFuncChangeL = (e) => {
        setLnameChild(e.target.value);
    }


    const OnSubmit = () => {
        onDataFromChild(fnameChild, lnameChild)
    }

    return (
        <Container>
            <div>
                <h2>Enter Your Details</h2>
                <Form>

                    <div>
                        <div className="label">

                            <input type="text" placeholder="Enter your Firstname" onChange={OnFuncChangeF} />
                        </div>
                        <div className="label">

                            <input type="text" placeholder="Enter your Lastname" onChange={OnFuncChangeL} />
                        </div>
                    </div>


                </Form>
                <Buttondiv>
                    <ButtonDone onClick={OnSubmit} >Submit</ButtonDone>
                    <ButtonCancel onClick={() => setOpenPopUp(false)}>Cancel</ButtonCancel>
                </Buttondiv>

            </div>
        </Container>


    )

}

export default Task4child;

const Container = styled.div`
display: flex;
justify-content: center;

align-items: center;

&>div{

    
width: 400px;
height: 300px;
border: 0.5px solid silver;
background-color: #F9F9F9;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;

}

`

const Buttondiv = styled.div`
display: flex;
gap: 30px;

`

const ButtonDone = styled.button`
padding: 8px 20px;
background-color: #54B435;
border-radius: 8px;
color: white;
border: none;

`

const ButtonCancel = styled.button`

padding: 8px 20px;
background-color: red;
border-radius: 8px;
border: none;
color: white;

`

const Form = styled.form`
display: flex;
/* flex-direction: column; */
align-items: center;

&> div{

    display: flex;
    flex-direction: column;

.label{

    display: flex;
    gap: 15px;
    align-items: center;
    &>input {
    padding: 8px 12px;
    border-radius: 4px;
    margin:10px;
    outline: none;
border: none;
border-bottom: 2px solid #2192FF;
background: transparent;

}


}


}
`