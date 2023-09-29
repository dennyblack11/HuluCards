import styled from "styled-components"
import Cards from "../Pages/Cards"
import data from '../Pages/Data.json'
import data2 from '../Pages/Data2.json'
import data3 from '../Pages/Data3.json'
import Cards2 from "../Pages/Cards2"
import Cards3  from "../Pages/Cards3"


const CardDisplay = () =>{
    return(
         <>
         <Container>
         <Head><h3>HULU ORIGINALS</h3></Head>
       <Wrapper>
       {data?.map((props)=> (
       <Cards Pic={props.Pic} 
                Title={props.Title} 
                Category = {props.Category}/> 
            ))
            }
       </Wrapper>


         <Head><h3>FEATURED MOVIES</h3></Head>
       <Wrapper>
       {data2?.map((props)=> (
       <Cards2 Pic={props.Pic} 
                Title={props.Title} 
                Category = {props.Category}/> 
            ))
            }
       </Wrapper>

         <Head><h3>BLOCKBUSTER MOVIES</h3></Head>
       <Wrapper>
       {data3?.map((props)=> (
       <Cards3 Pic={props.Pic} 
                Title={props.Title} 
                Category = {props.Category}/> 
            ))
            }
       </Wrapper>
            
         </Container>

         </>
    )
}

export default CardDisplay

const Wrapper = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: center;
gap: 65px;
align-items: center;
color: white;
overflow-x: auto;
overflow-y: hidden;

`
const Head = styled.div`
height: 100px;
width: 70%;
display: flex;
align-items: flex-end;
h3{
  margin-bottom: 15px;
  font-size: 13px;
font-weight: 600;
}

`

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
color: white;
flex-direction: column;
`