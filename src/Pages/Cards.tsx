import styled from "styled-components";


interface iProps {
    Pic: string
    Title: string
    Category: string
}

const Cards2 = ({Pic, Title, Category}:iProps) =>{ 
    return (
        <div>
        <Wrapper>
            <ImageHolder>
                <img src={Pic} alt=""/>
            </ImageHolder>
            <TextHolder>
                <h4>{Title}</h4>
                <p>{Category}</p>
            </TextHolder>
        </Wrapper>
        </div>
    )
}

export default Cards2;

const TextHolder = styled.div`
width: 200px;
height: 35%;
/* background-color: blueviolet; */
h4{
    font-size: 15px;
}
p{
    font-size: 14px;
    margin-top: -10px;
}
`
const ImageHolder = styled.div`
width: 200px;
height: 50%;
img{
    object-fit: cover;
    width: 100%;
    height: 100%;
border-radius: 10px;
}
/* }&:hover{
    border: 3px solid grey;
    background-color: rgba(0,0,0,0.9);
    border-radius: 10px;
} */
`
const Wrapper = styled.div`
    width: 160px;
    height: 200px;
    color: white;

`